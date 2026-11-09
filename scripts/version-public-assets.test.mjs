import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import { build } from "vite";
import versionPublicAssets, { createAssetSnapshot, rewriteAssetUrls } from "./version-public-assets.mjs";

test("rewrites HTML, srcset, JSON and dynamic URLs without touching external or relative CSS URLs", () => {
  const prefix = "/static/abc/";
  const input = '<img src="/wp-content/a.jpg" srcset="/assets/a.jpg 1x, /assets/b.jpg 2x">'
    + '`/wp-content/post-${id}.css` "assets/products/a.png" url(/assets/font.woff2) '
    + 'url(../fonts/font.woff2) "https://other.test/assets/a.jpg" "//other.test/assets/a.jpg"';
  const output = rewriteAssetUrls(input, prefix);
  assert.ok(output.includes('src="/static/abc/wp-content/a.jpg"'));
  assert.ok(output.includes('srcset="/static/abc/assets/a.jpg 1x, /static/abc/assets/b.jpg 2x"'));
  assert.ok(output.includes('`/static/abc/wp-content/post-${id}.css`'));
  assert.ok(output.includes('"/static/abc/assets/products/a.png"'));
  assert.ok(output.includes('url(/static/abc/assets/font.woff2)'));
  assert.ok(output.includes('url(../fonts/font.woff2)'));
  assert.ok(output.includes('"https://other.test/assets/a.jpg"'));
  assert.ok(output.includes('"//other.test/assets/a.jpg"'));
  assert.equal(rewriteAssetUrls(output, prefix), output);
});

test("two production builds invalidate image, CSS and JS URLs when only image bytes change", async () => {
  const root = mkdtempSync(path.join(tmpdir(), "osseous-cache-test-"));
  try {
    for (const dir of ["src", "public/assets/fonts", "public/wp-content/css"]) {
      mkdirSync(path.join(root, dir), { recursive: true });
    }
    const put = (file, value) => writeFileSync(path.join(root, file), value);
    put("index.html", '<link rel="stylesheet" href="/assets/fonts/font.css"><script type="module" src="/src/main.js"></script>');
    put("src/data.json", '{"image":"assets/image.png"}');
    put("src/main.js", 'import data from "./data.json"; document.body.innerHTML = `<img src="${data.image}">`; window.styles = `/wp-content/css/post-${window.id}.css`;');
    put("public/assets/image.png", "first image bytes");
    put("public/assets/fonts/font.woff2", "font bytes");
    put("public/assets/fonts/font.css", '@font-face{src:url(./font.woff2)}');
    put("public/wp-content/css/post-6.css", 'body{background:url(/assets/image.png)}');
    put("public/_redirects", "/* /index.html 200");
    const compile = () => build({ root, configFile: false, logLevel: "silent", plugins: [versionPublicAssets()],
      build: { write: false, copyPublicDir: false, assetsDir: "build-assets" } });
    const before = createAssetSnapshot(path.join(root, "public")).version;
    const first = await compile();
    assert.equal(createAssetSnapshot(path.join(root, "public")).version, before);
    put("public/assets/image.png", "second image bytes");
    const after = createAssetSnapshot(path.join(root, "public")).version;
    assert.notEqual(before, after);
    const second = await compile();
    for (const [result, version] of [[first, before], [second, after]]) {
      const outputs = result.output;
      const prefix = `static/${version}/`;
      const entry = outputs.find((file) => file.type === "chunk" && file.isEntry);
      assert.ok(entry.code.includes(`/${prefix}assets/image.png`));
      assert.ok(entry.code.includes(`/${prefix}wp-content/css/post-`));
      const css = outputs.find((file) => file.fileName === prefix + "wp-content/css/post-6.css");
      assert.ok(String(css.source).includes(`/${prefix}assets/image.png`));
      assert.ok(outputs.some((file) => file.fileName === prefix + "assets/fonts/font.woff2"));
      const html = outputs.find((file) => file.fileName === "index.html");
      assert.ok(String(html.source).includes(`/${prefix}assets/fonts/font.css`));
      assert.ok(outputs.some((file) => file.fileName === "_redirects"));
      assert.ok(!outputs.some((file) => file.fileName === "assets/image.png"));
    }
    assert.notEqual(first.output.find((file) => file.type === "chunk").fileName,
      second.output.find((file) => file.type === "chunk").fileName);
  } finally {
    // This directory is created exclusively by this test under the OS temp dir.
    assert.ok(path.resolve(root).startsWith(path.resolve(tmpdir()) + path.sep));
    rmSync(root, { recursive: true, force: true });
  }
});

test("real production output retains every public asset and rewrites legacy text assets", () => {
  const { files, version } = createAssetSnapshot(path.resolve("public"));
  const prefix = `/static/${version}/`;
  for (const file of files) {
    const versioned = /^(assets|wp-content)\//.test(file.name);
    const outputPath = path.join("dist", versioned ? `static/${version}/${file.name}` : file.name);
    assert.ok(existsSync(outputPath), `Missing output: ${outputPath}`);
    if (versioned) {
      const expected = /\.(css|html|svg|js)$/.test(file.name)
        ? Buffer.from(rewriteAssetUrls(file.contents.toString("utf8"), prefix)) : file.contents;
      assert.deepEqual(readFileSync(outputPath), expected, file.name);
    }
  }
  assert.ok(readFileSync("dist/index.html", "utf8").includes(prefix + "assets/fonts/roboto.css"));
});
