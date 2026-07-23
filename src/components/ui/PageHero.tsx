// El encabezado grande con fondo oscuro que uso en las páginas del catálogo.
// Le pasas el título, opcionalmente un subtítulo, y los children se pintan
// arriba del título (ahí meto las migas de pan, por ejemplo).
import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ title, subtitle, children }: Props) {
  return (
    <section className="hero">
      <div className="hero__shade" />
      <div className="wrap">
        <div className="hero__content">
          {children}
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
