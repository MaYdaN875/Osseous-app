// El footer, copiado del diseño del sitio original: logo blanco de Osseous,
// el copyright y los iconos de contacto (teléfono y correo) que llevan a /contacto.
import { Link } from "react-router-dom";
import { FOOTER_LOGO } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="site-foot site-foot--original">
      <div className="wrap site-foot__original">
        <div className="site-foot__brand">
          <img src={FOOTER_LOGO} alt="Osseous" />
          <p>2025 – Copyright</p>
        </div>
        <div className="site-foot__contact">
          <p>Contáctanos para más información y atención:</p>
          <div className="site-foot__icons">
            <Link to="/contacto" aria-label="Teléfono">
              <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
              </svg>
            </Link>
            <Link to="/contacto" aria-label="Email">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
