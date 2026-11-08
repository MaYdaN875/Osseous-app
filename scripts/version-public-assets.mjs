import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const assetRoots = ["assets", "wp-content"];

function readTree(directory, prefix = "") {
  return readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
    .flatMap((entry) => {
      const name = prefix + entry.name;
      const absolute = path.join(directory, entry.name);
      return entry.isDirectory()
        ? readTree(absolute, name + "/")
        : [{ name, contents: readFileSync(absolute) }];
    });
}

// Version the complete legacy asset tree so relative CSS/font URLs and dynamic
// post-${id}.css URLs keep working. Hash bytes and paths, never timestamps.
export function createAssetSnapshot(publicDir, base = "/") {
  const files = readTree(publicDir);
  const hash = createHash("sha256");
  // Bump this revision when changing how public file contents are transformed.
  hash.update("osseous-public-assets-v1\0").update(base).update("\0");
  for (const file of files) {
    if (assetRoots.some((root) => file.name.startsWith(root + "/"))) {
      hash.update(file.name).update("\0").update(createHash("sha256").update(file.contents).digest());
    }
  }
  return { files, version: hash.digest("hex").slice(0, 20) };
}

export function rewriteAssetUrls(text, prefix) {
  // Only URLs starting at a string/HTML/CSS boundary. Do not rewrite external
  // URLs or the nested /assets/ directory inside Elementor's own paths.
  return text.replace(/(["'`(=\s])(?:\.\/)?\/?(assets|wp-content)\//g,
    (_, boundary, root) => `${boundary}${prefix}${root}/`);
}

export default function versionPublicAssets() {
  let snapshot;
  let prefix;
  let sourceRoot;
  return {
    name: "osseous-version-public-assets",
    apply: "build",
    enforce: "pre",
    configResolved(config) {
      snapshot = createAssetSnapshot(config.publicDir, config.base);
      prefix = `${config.base}static/${snapshot.version}/`;
      sourceRoot = path.resolve(config.root, "src").replaceAll("\\", "/") + "/";
    },
    transform(code, id) {
      if (!id.replaceAll("\\", "/").startsWith(sourceRoot) || !/\.(?:[jt]sx?|json)$/.test(id)) return;
      const rewritten = rewriteAssetUrls(code, prefix);
      if (rewritten !== code) return { code: rewritten, map: null };
    },
    transformIndexHtml: {
      order: "post",
      handler(html) { return rewriteAssetUrls(html, prefix); },
    },
    generateBundle() {
      for (const file of snapshot.files) {
        const versioned = assetRoots.some((root) => file.name.startsWith(root + "/"));
        this.emitFile({
          type: "asset",
          fileName: versioned ? `static/${snapshot.version}/${file.name}` : file.name,
          source: versioned && /\.(css|html|svg|js)$/.test(file.name)
            ? rewriteAssetUrls(file.contents.toString("utf8"), prefix)
            : file.contents,
        });
      }
    },
  };
}
