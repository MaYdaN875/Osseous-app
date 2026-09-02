import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const esJsonPath = path.join(root, "src", "data", "osseous-products.json");
const enJsonPath = path.join(root, "src", "data", "osseous-products-en.json");

const esProducts = [
  {
    id: "medicina-deportiva-anclaje-de-aleacion-de-titanio-impreso-en-3d",
    slug: "anclaje-de-aleacion-de-titanio-impreso-en-3d",
    title: "Anclaje de aleación de titanio impreso en 3D",
    images: [
      "/assets/products/5c8068aa5e1ea7ec05bcec9b6d02460d.png",
      "/wp-content/uploads/2025/01/p2.jpg"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Fabricado mediante manufactura aditiva 3D en aleación de titanio (Ti-6Al-4V) con estructura porosa trabecular osteoconductiva.</li><li>Diseño de doble rosca alta-baja autorroscante que optimiza la fijación bicortical y maximiza la fuerza de retención ósea.</li><li>Orificio de sutura independiente y pulido para evitar la abrasión, nudos accidentales y fricción del hilo de sutura.</li><li>Indicado para reparación del manguito rotador, inestabilidad glenohumeral (Bankart/SLAP) y lesiones ligamentarias complejas.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-con-recubrimiento-de-tantalio",
    slug: "anclaje-de-sutura-con-recubrimiento-de-tantalio",
    title: "Anclaje de sutura con recubrimiento de tantalio",
    images: [
      "/assets/products/6a4855448b64f125a52f92bdea317e7a.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Estructura de titanio de alta resistencia recubierta con tantalio biomimético de alta porosidad e interconectividad.</li><li>Acelera la respuesta de osteointegración temprana y la adhesión celular firme en la interfase ósea.</li><li>Elevado coeficiente de fricción superficial que proporciona máxima estabilidad primaria inmediata bajo cargas cíclicas.</li><li>Precargado con suturas de polietileno de peso molecular ultraalto (UHMWPE) de resistencia superior.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura",
    slug: "anclaje-de-sutura",
    title: "Anclaje de sutura",
    images: [
      "/assets/products/3796bda034e9a5f01c218fd12c57a155.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Anclaje roscado de precisión para reinserción sólida de tendones y ligamentos en cirugía artroscópica y abierta.</li><li>Punta cónica autorroscante que reduce el torque de inserción y asegura un agarre firme en hueso cortical y esponjoso.</li><li>Ojal de paso suave con acabado de baja fricción para manipulación fluida de múltiples hebras de sutura.</li><li>Excelente desempeño en reparaciones de hombro, codo, rodilla y tobillo.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-no-absorbible",
    slug: "anclaje-de-sutura-no-absorbible",
    title: "Anclaje de sutura no absorbible",
    images: [
      "/assets/products/0530a8689a84aa5b4814246a3765c71e.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Estructura permanente de soporte mecánico continuo diseñada para mantener la aposición tisular durante toda la fase de curación.</li><li>Roscas cortantes de paso optimizado para un anclaje rígido sin debilitar la cortical ósea circundante.</li><li>Premontado en mango insertador ergonómico desechable con marcas de profundidad de inserción claras.</li><li>Incluye combinaciones de suturas bicolores para facilitar la identificación y el anudado intraoperatorio.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-no-absorbible-de-doble-rosca",
    slug: "anclaje-de-sutura-no-absorbible-de-doble-rosca",
    title: "Anclaje de sutura no absorbible de doble rosca",
    images: [
      "/assets/products/02c11c66a2579c3b8a94a69985ee7c24.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Geometría de rosca doble que duplica la velocidad de avance por giro y minimiza el trauma por fricción ósea.</li><li>Fijación reforzada en zonas anatómicas con calidad ósea variable o densidad esponjosa reducida.</li><li>Ojal protegido dentro del cuerpo del implante para resguardar la sutura de roces abrasivos con el borde cortical.</li><li>Ideal para técnicas de reparación en hilera medial y reconstrucción tendinosa de alta exigencia.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-todo-sutura-all-suture",
    slug: "anclaje-todo-sutura-all-suture",
    title: "Anclaje todo-sutura (All-suture)",
    images: [
      "/assets/products/1088602501d6b9dbec365b3a3d360a08.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Implante 100% textil de mínima invasión que requiere un orificio piloto óseo ultracompacto (1.4 mm a 1.8 mm).</li><li>Al tensar las suturas de despliegue, la camisa de sutura se expande contra la cortical interna generando un anclaje ultrarresistente.</li><li>Preserva el stock óseo nativo y reduce el riesgo de fracturas marginales en el reborde glenoideo y acetabular.</li><li>Totalmente radiotransparente y sin riesgo de fragmentos metálicos o aflojamientos mecánicos en la articulación.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-peek",
    slug: "anclaje-de-sutura-peek",
    title: "Anclaje de Sutura PEEK",
    images: [
      "/assets/products/95450c4d78d1064bf2b268a4f3d7f335.png",
      "/wp-content/uploads/2025/01/p1.jpg"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Fabricado en polímero biocompatible PEEK (polieteretercetona) de grado médico, radiotransparente y libre de artefactos en RM.</li><li>Módulo de elasticidad similar al hueso cortical, favoreciendo una distribución uniforme de cargas biomecánicas.</li><li>Diseño autorroscante con excelente poder de corte para inserción precisa sin necesidad de pretaladrado extenso.</li><li>Premontado con una o dos suturas UHMWPE de alta resistencia y mango con guía de profundidad visual.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-perno-de-anclaje-roscado-de-material-peek",
    slug: "perno-de-anclaje-roscado-de-material-peek",
    title: "Perno de anclaje roscado de material PEEK",
    images: [
      "/assets/products/fd6619a3ed49c5ce795a0477ddb8e634.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Perno roscado de alta estabilidad para fijación rígida de plastias tendinosas y tejidos blandos en túneles óseos.</li><li>Roscas anatómicas continuas diseñadas para una compresión homogénea del injerto sin comprometer su integridad biológica.</li><li>Material termoplástico inerte con alta resistencia al cizallamiento y fatiga dinámica intraarticular.</li><li>Compatible con instrumental canulado para abordajes artroscópicos de mínima invasión.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-sin-nudos-roscado-peek",
    slug: "anclaje-de-sutura-sin-nudos-roscado-peek",
    title: "Anclaje de sutura sin nudos roscado PEEK",
    images: [
      "/assets/products/811e0ce82d66aea7c4af5c857fa6128d.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Tecnología knotless (sin nudos) roscada que permite la graduación y ajuste independiente de la tensión antes del bloqueo definitivo.</li><li>Elimina el bulto de nudos de sutura en el espacio subacromial/intraarticular, suprimiendo la fricción tisular secundaria.</li><li>Cuerpo de PEEK de alta resistencia que garantiza una aposición y huella de contacto anatómica óptima (técnica SutureBridge).</li><li>Procedimiento rápido y reproducible en un solo paso mediante sistema de inserción ergonómico integrado.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-tejido-sin-nudos-peek",
    slug: "anclaje-de-sutura-tejido-sin-nudos-peek",
    title: "Anclaje de sutura tejido sin nudos PEEK",
    images: [
      "/assets/products/5e32bae62c62d8850eea560aa6e75ca2.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Mecanismo de fijación por impacto a presión con bloqueo mecánico directo de cintillas y suturas de alta resistencia.</li><li>Especialmente optimizado para la hilera lateral en reparaciones de manguito rotador en doble hilera.</li><li>Costillas de retención anulares en el cuerpo del implante que maximizan el agarre en hueso esponjoso tuberositario.</li><li>Reduce significativamente el tiempo quirúrgico y asegura una fijación firme y reproducible.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-cuchilla-para-fresador-shaver-desechable",
    slug: "cuchilla-para-fresador-shaver-desechable",
    title: "Cuchilla para fresador shaver desechable",
    images: [
      "/assets/products/e582306d36f3b5d5323ba7155e3d2a4d.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Cuchilla artroscópica de corte de ultra alta precisión fabricada en acero inoxidable quirúrgico médico templado.</li><li>Optimizada para resección y desbridamiento ágil de tejido sinovial, meniscos y restos fibróticos intraarticulares.</li><li>Acoplamiento hermético universal compatible con consolas motoras de artroscopía estándar.</li><li>Empaque individual estéril de un solo uso que garantiza filo impecable en cada procedimiento.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-fresa-shaver-de-un-solo-uso",
    slug: "fresa-shaver-de-un-solo-uso",
    title: "Fresa shaver de un solo uso",
    images: [
      "/assets/products/38d438ea3de3435f52af653be6e29453.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Cabezal de corte rotatorio con estrías helicoidales de desbaste óseo de alta velocidad y máxima eficiencia.</li><li>Ideal para acromioplastia, remodelación de osteofitos, notchplastia intercondílea y preparación de huellas óseas.</li><li>Canal de aspiración central continuo que evacúa activamente virutas y residuos óseos manteniendo el campo limpio.</li><li>Diseño balanceado que suprime vibraciones en la pieza de mano y protege la integridad ósea circundante.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-sistema-de-reparacion-de-menisco",
    slug: "sistema-de-reparacion-de-menisco",
    title: "Sistema de reparación de menisco",
    images: [
      "/assets/products/198f1f4de9365e15de837bd7fb3159f3.png",
      "/wp-content/uploads/2025/01/p15.jpg"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Sistema todo-adentro (all-inside) para sutura anatómica y preservación de tejido meniscal en roturas complejas.</li><li>Mini-implantes de PEEK de bajo perfil asociados con sutura no absorbible UHMWPE 2-0 de resistencia superior.</li><li>Aguja curvada con limitador de profundidad graduable para proteger el paquete neurovascular poplíteo.</li><li>Activación activa con una sola mano de 360° que simplifica el paso y tensado del nudo deslizante autoblocante.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-tornillo-de-interferencia",
    slug: "tornillo-de-interferencia",
    title: "Tornillo de interferencia",
    images: [
      "/assets/products/8e571adcfc80a1d8d7afc591f5e28dcb.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Tornillo canulado de interferencia para fijación tibial y femoral de injertos hueso-tendón-hueso (HTH) o tejidos blandos en LCA/LCP.</li><li>Perfil de rosca atraumático y bordes redondeados que previenen la laceración o desgarro de las fibras tendinosas.</li><li>Disponible en aleación de titanio grado médico y PEEK radiotransparente con excelente resistencia a la torsión.</li><li>Punta cónica autorroscante y canulación concéntrica para guiado exacto sobre alambre de Nitinol.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-grapa-quirurgica",
    slug: "grapa-quirurgica",
    title: "Grapa quirúrgica",
    images: [
      "/assets/products/fb629f320163d7fa4e8a9d76806823be.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Grapa metálica de alta rigidez para fijación y reinserción de ligamentos, tendones y osteotomías óseas.</li><li>Patas con dientes de anclaje antirretorno que aseguran una compresión interfragmentaria rígida y duradera.</li><li>Construcción de perfil bajo que reduce el roce subcutáneo y la molestia en zonas de prominencia ósea.</li><li>Fabricada en aleación biocompatible de titanio o acero inoxidable quirúrgico de alta resistencia mecánica.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-placa-de-titanio-con-bucle",
    slug: "placa-de-titanio-con-bucle",
    title: "Placa de titanio con bucle",
    images: [
      "/assets/products/5b105af8c3ad9f564b5826c243b7d0f4.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Sistema de fijación suspensoria cortical con botón de titanio para reconstrucción de ligamento cruzado anterior y posterior.</li><li>Lazo de sutura continuo trenzado de polietileno UHMWPE disponible en longitudes fijas de 15 mm a 50 mm.</li><li>Distribución homogénea del estrés mecánico en la cortical femoral evitando el efecto limpiaparabrisas o ensanchamiento del túnel.</li><li>Bordes completamente biselados y pulidos para volteo cortical fluido y asentamiento firme.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-placa-de-titanio-de-banda-ajustable",
    slug: "placa-de-titanio-de-banda-ajustable",
    title: "Placa de titanio de banda ajustable",
    images: [
      "/assets/products/f171ca5ec07026a58bd420a60f5e5416.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Botón cortical de longitud ajustable que permite rellenar por completo el túnel femoral con el injerto tendinoso.</li><li>Mecanismo de traba autoblocante unidireccional que no se elonga ni pierde tensión ante cargas fisiológicas cíclicas.</li><li>Permite retensar el injerto tras completar la fijación tibial, optimizando la estabilidad articular final.</li><li>Compatible con técnicas de perforación anatómica transtibial o por portal anteromedial.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-sutura-quirurgica-no-absorbible",
    slug: "sutura-quirurgica-no-absorbible",
    title: "Sutura quirúrgica no absorbible (Hilo de Polietileno)",
    images: [
      "/assets/products/1ca3ee9ffafef944cc2bc5e8cf61cde4.png",
      "/wp-content/uploads/2025/01/p16.jpg"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Sutura de peso molecular ultraalto (UHMWPE) trenzada con núcleo de alta densidad para máxima resistencia a la tracción.</li><li>Resistencia a la rotura superior a los estándares quirúrgicos, con mínima elongación plástica bajo tensión.</li><li>Superficie lisa y flexible que no corta el tejido blando y permite deslizar nudos con suavidad y seguridad.</li><li>Disponible en patrones blanco, azul y bicolor, con y sin agujas de acero inoxidable quirúrgico de alta tenacidad.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-engrapadora-dermica-desechable",
    slug: "engrapadora-dermica-desechable",
    title: "Engrapadora dérmica desechable",
    images: [
      "/assets/products/36482b274887b991289f62332fe0b947.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Engrapadora estéril precargada con 35 grapas de acero inoxidable médico de alta resistencia.</li><li>Mecanismo de gatillo ergonómico con retroalimentación táctil para una colocación uniforme y aversión precisa de bordes cutáneos.</li><li>Reduce drásticamente el tiempo de cierre quirúrgico en comparación con suturas dérmicas manuales.</li><li>Diseño liviano con visor contador de grapas restantes en el cuerpo del dispositivo.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-canula-para-portal-artroscopico",
    slug: "canula-para-portal-artroscopico",
    title: "Cánula para portal artroscópico",
    images: [
      "/assets/products/c4505cc63f7639d6aae52c0fdc7f8b23.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Cánula artroscópica translúcida con cuerpo roscado que garantiza estabilidad y retención en la cápsula articular.</li><li>Válvula de elastómero integrada que evita el escape de fluido de irrigación y previene el atrapamiento de tejidos.</li><li>Llave de paso de entrada/salida de fluidos para un control óptimo de la presión y visibilidad intraarticular.</li><li>Permite el paso atraumático y fluido de suturas, pinzas pasadoras, palpadores e instrumental quirúrgico.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-manga-para-portal-artroscopico-esteril-desechable",
    slug: "manga-para-portal-artroscopico-esteril-desechable",
    title: "Manga para portal artroscópico estéril desechable",
    images: [
      "/assets/products/2ed13157d3cf81d0e42dfa75b7168755.png"
    ],
    sections: [
      {
        label: "Información",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Manga protectora flexible desechable que recubre el canal de abordaje artroscópico protegiendo los tejidos blandos.</li><li>Evita la extravasación de líquido hacia planos musculares periarticulares durante cirugías prolongadas.</li><li>Superficie interna hidrofílica de baja fricción que facilita el intercambio repetido de instrumental artroscópico.</li><li>Esterilizada por óxido de etileno, 100% libre de látex para máxima seguridad del paciente.</li></ol></div></div></div>"
      }
    ]
  }
];

const enProducts = [
  {
    id: "medicina-deportiva-anclaje-de-aleacion-de-titanio-impreso-en-3d",
    slug: "anclaje-de-aleacion-de-titanio-impreso-en-3d",
    title: "3D Printed Titanium Alloy Anchor",
    images: [
      "/assets/products/5c8068aa5e1ea7ec05bcec9b6d02460d.png",
      "/wp-content/uploads/2025/01/p2.jpg"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Manufactured via 3D additive manufacturing in titanium alloy (Ti-6Al-4V) featuring an osteoconductive trabecular porous lattice.</li><li>High-low dual-lead self-tapping thread design optimizing cortical purchase and maximizing pullout resistance.</li><li>Polished independent suture eyelet preventing suture abrasion and fraying during knot tying.</li><li>Indicated for rotator cuff repair, shoulder instability (Bankart/SLAP), and ligament reconstructions in knee and ankle.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-con-recubrimiento-de-tantalio",
    slug: "anclaje-de-sutura-con-recubrimiento-de-tantalio",
    title: "Tantalum Coated Suture Anchor",
    images: [
      "/assets/products/6a4855448b64f125a52f92bdea317e7a.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>High-strength titanium core with biomimetic porous tantalum coating for enhanced biocompatibility and bone ingrowth.</li><li>Accelerates early osseointegration and osteoblast adhesion at the bone-implant interface.</li><li>Superior biomechanical resistance against tensile and cyclic pullout forces.</li><li>Pre-loaded with high-strength ultra-high-molecular-weight polyethylene (UHMWPE) sutures.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura",
    slug: "anclaje-de-sutura",
    title: "Suture Anchor",
    images: [
      "/assets/products/3796bda034e9a5f01c218fd12c57a155.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Precision threaded anchor for solid, reliable soft tissue-to-bone fixation in arthroscopic and open surgery.</li><li>Tapered profile with self-tapping tip facilitating clean, minimally invasive insertion with reduced torque.</li><li>Smooth rounded eyelet providing low-friction passage for multiple suture strands.</li><li>Designed for arthroscopic and mini-open procedures across shoulder, elbow, knee, and ankle.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-no-absorbible",
    slug: "anclaje-de-sutura-no-absorbible",
    title: "Non-absorbable Suture Anchor",
    images: [
      "/assets/products/0530a8689a84aa5b4814246a3765c71e.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Permanent non-absorbable structure providing continuous mechanical stability and long-term support during tissue healing.</li><li>Deep threads optimized for purchase in both cortical and cancellous bone, preventing loosening.</li><li>Pre-mounted on an ergonomic disposable inserter with clear insertion depth laser marks.</li><li>Includes high-strength sutures with distinct color combinations for easy intraoperative identification.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-no-absorbible-de-doble-rosca",
    slug: "anclaje-de-sutura-no-absorbible-de-doble-rosca",
    title: "Non-absorbable Suture Anchor (Dual Thread)",
    images: [
      "/assets/products/02c11c66a2579c3b8a94a69985ee7c24.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Specialized dual-thread lead design allowing rapid insertion with fewer rotations and minimized bone heating.</li><li>Exceptional holding power in lower-density bone or compromised cancellous bone stock.</li><li>Recessed eyelet shielding sutures from direct abrasive contact against the bone cortex.</li><li>Ideal for medial row rotator cuff repairs and high-demand tendon reconstruction.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-todo-sutura-all-suture",
    slug: "anclaje-todo-sutura-all-suture",
    title: "All-Suture Anchor",
    images: [
      "/assets/products/1088602501d6b9dbec365b3a3d360a08.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>100% all-textile soft tissue anchor minimizing bone tunnel diameter (1.4 mm - 1.8 mm pilot drill).</li><li>Sub-cortical expansion mechanism providing rigid fixation upon tensioning the deployment strand.</li><li>Maximizes native bone preservation, ideal for revision surgery and glenoid/acetabular labral repairs.</li><li>Eliminates rigid metal artifacts and risk of loose implant fragments in the joint.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-peek",
    slug: "anclaje-de-sutura-peek",
    title: "PEEK Suture Anchor",
    images: [
      "/assets/products/95450c4d78d1064bf2b268a4f3d7f335.png",
      "/wp-content/uploads/2025/01/p1.jpg"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Manufactured from biocompatible radiolucent PEEK polymer, completely artifact-free under MRI and CT imaging.</li><li>Modulus of elasticity close to human cortical bone, ensuring uniform load distribution.</li><li>Outstanding self-tapping mechanical strength for direct insertion without extensive pre-drilling.</li><li>Pre-loaded with high-strength UHMWPE sutures and packaged on an ergonomic inserter with visual depth markers.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-perno-de-anclaje-roscado-de-material-peek",
    slug: "perno-de-anclaje-roscado-de-material-peek",
    title: "PEEK Material Threaded Anchor Bolt",
    images: [
      "/assets/products/fd6619a3ed49c5ce795a0477ddb8e634.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>High-stability threaded anchor bolt for solid soft tissue and graft fixation inside bone sockets.</li><li>Continuous thread geometry ensuring even compression and preventing graft slippage.</li><li>Inert medical-grade thermoplastic resistant to mechanical fatigue and biological degradation.</li><li>Compatible with quick-connect inserters for high-precision arthroscopic procedures.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-sin-nudos-roscado-peek",
    slug: "anclaje-de-sutura-sin-nudos-roscado-peek",
    title: "PEEK Screw-In Knotless Suture Anchor",
    images: [
      "/assets/products/811e0ce82d66aea7c4af5c857fa6128d.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Threaded knotless technology allowing stepwise, millimeter-precise tensioning prior to final locking.</li><li>Eliminates knot stacks in the subacromial/joint space, mitigating synovial impingement and cartilage wear.</li><li>High-strength PEEK construction ensuring anatomical footprint compression (SpeedBridge/SutureBridge techniques).</li><li>Intuitive single-step deployment via pre-assembled ergonomic inserter.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-anclaje-de-sutura-tejido-sin-nudos-peek",
    slug: "anclaje-de-sutura-tejido-sin-nudos-peek",
    title: "PEEK Knotless Knit-In Suture Anchor",
    images: [
      "/assets/products/5e32bae62c62d8850eea560aa6e75ca2.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Push-in / impaction knotless mechanism with direct mechanical locking of braided suture tapes.</li><li>Ideal for rapid, secure lateral row fixation in double-row rotator cuff repairs.</li><li>PEEK body with barbed retention ribs maximizing purchase in cancellous bone of the tuberosity.</li><li>Facilitates a highly reproducible surgical technique, significantly reducing operative time.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-cuchilla-para-fresador-shaver-desechable",
    slug: "cuchilla-para-fresador-shaver-desechable",
    title: "Disposable Shaver Blade",
    images: [
      "/assets/products/e582306d36f3b5d5323ba7155e3d2a4d.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Ultra-sharp arthroscopic shaver blade manufactured from medical-grade surgical stainless steel.</li><li>Engineered for efficient resection and debridement of synovial tissue, meniscus, and soft tissue debris.</li><li>Superior concentricity and seamless coupling with standard universal arthroscopic motor consoles.</li><li>Sterile single-use packaging ensuring maximum cutting efficiency and zero cross-contamination risk.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-fresa-shaver-de-un-solo-uso",
    slug: "fresa-shaver-de-un-solo-uso",
    title: "Single-use Shaver Burr",
    images: [
      "/assets/products/38d438ea3de3435f52af653be6e29453.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>High-speed arthroscopic bone burr with multi-fluted helical cutting head for efficient bone sculpting.</li><li>Indicated for acromioplastia, osteophyte resection, intercondylar notchplasty, and bone bed preparation.</li><li>Integrated suction port continuously evacuates bone debris for an unobstructed surgical view.</li><li>Precision design minimizing vibration and intraoperative bone thermal generation.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-sistema-de-reparacion-de-menisco",
    slug: "sistema-de-reparacion-de-menisco",
    title: "Meniscus Repair System",
    images: [
      "/assets/products/198f1f4de9365e15de837bd7fb3159f3.png",
      "/wp-content/uploads/2025/01/p15.jpg"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>All-inside arthroscopic system for anatomical repair and preservation of meniscal tears.</li><li>Low-profile PEEK implants paired with non-absorbable 2-0 UHMWPE high-strength sutures.</li><li>Curved needle with adjustable depth stopper to protect the popliteal neurovascular bundle.</li><li>360° single-handed active deployment mechanism simplifying passage and tensioning of the self-locking knot.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-tornillo-de-interferencia",
    slug: "tornillo-de-interferencia",
    title: "Interface Screw",
    images: [
      "/assets/products/8e571adcfc80a1d8d7afc591f5e28dcb.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Cannulated interference screw for BTB (bone-tendon-bone) and soft tissue graft fixation in ACL/PCL reconstructions.</li><li>Atraumatic rounded thread profile preventing fiber shearing or graft laceration during insertion.</li><li>Available in medical-grade titanium alloy and radiolucent PEEK polymer for robust primary stability.</li><li>Tapered tip and central cannulation ensuring smooth, accurate guide-wire insertion.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-grapa-quirurgica",
    slug: "grapa-quirurgica",
    title: "Surgical Staple",
    images: [
      "/assets/products/fb629f320163d7fa4e8a9d76806823be.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Bone and ligament fixation staple manufactured from high-strength titanium alloy or medical stainless steel.</li><li>Sharp barbed legs preventing back-out and ensuring solid cortical purchase.</li><li>Superior compressive strength for osteotomy fixation, small joint arthrodesis, and soft tissue reattachment.</li><li>Low-profile bridge minimizing subcutaneous palpability and soft tissue irritation.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-placa-de-titanio-con-bucle",
    slug: "placa-de-titanio-con-bucle",
    title: "Titanium Plate with Loop",
    images: [
      "/assets/products/5b105af8c3ad9f564b5826c243b7d0f4.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Suspensory cortical fixation system for anatomical ACL and PCL ligament reconstructions.</li><li>Low-profile titanium button with polished rounded edges and pre-measured continuous braided UHMWPE loop (15 mm to 50 mm).</li><li>Evenly distributes tensile loads across the femoral cortex, providing rigid graft suspension.</li><li>Facilitates secure cortical flipping with clear tactile and fluoroscopic verification.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-placa-de-titanio-de-banda-ajustable",
    slug: "placa-de-titanio-de-banda-ajustable",
    title: "Adjustable Loop Titanium Plate",
    images: [
      "/assets/products/f171ca5ec07026a58bd420a60f5e5416.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Adjustable cortical fixation plate enabling millimeter-precise graft tensioning and socket filling.</li><li>Unidirectional self-locking mechanism preventing loop elongation under dynamic cyclic loading.</li><li>Allows intraoperative re-tensioning of the graft after tibial fixation to eliminate residual laxity.</li><li>Fully compatible with independent anatomical drilling techniques (anteromedial portal or outside-in).</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-sutura-quirurgica-no-absorbible",
    slug: "sutura-quirurgica-no-absorbible",
    title: "Non-absorbable Surgical Suture (Polyethylene)",
    images: [
      "/assets/products/1ca3ee9ffafef944cc2bc5e8cf61cde4.png",
      "/wp-content/uploads/2025/01/p16.jpg"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Ultra-high-strength surgical suture braided from ultra-high-molecular-weight polyethylene (UHMWPE) fibers.</li><li>Tensile strength substantially exceeding conventional polyester and traditional surgical threads.</li><li>Superior knot security with low-profile flat knots and smooth sliding characteristics.</li><li>Broad range of sizes, color patterns (white, blue, cobraid), and high-grade stainless steel needle configurations.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-engrapadora-dermica-desechable",
    slug: "engrapadora-dermica-desechable",
    title: "Disposable Skin Stapler",
    images: [
      "/assets/products/36482b274887b991289f62332fe0b947.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Ergonomic sterile skin stapler pre-loaded with 35 medical-grade stainless steel staples for rapid wound closure.</li><li>Smooth trigger mechanism reducing closure time and supporting clean cosmetic healing.</li><li>Clear indicator window displaying remaining staple count at all times.</li><li>Lightweight single-use sterile construction ensuring utmost patient safety.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-canula-para-portal-artroscopico",
    slug: "canula-para-portal-artroscopico",
    title: "Arthroscopic Portal Cannula",
    images: [
      "/assets/products/c4505cc63f7639d6aae52c0fdc7f8b23.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Translucent threaded arthroscopic cannula establishing stable, repeatable instrument access to the joint cavity.</li><li>External retention ribs preventing unintentional cannula back-out during aggressive instrument passes.</li><li>Flexible silicone seal valve preventing fluid leakage while permitting smooth passage of curved instruments.</li><li>Equipped with dual fluid inflow/outflow ports with stopcock flow control.</li></ol></div></div></div>"
      }
    ]
  },
  {
    id: "medicina-deportiva-manga-para-portal-artroscopico-esteril-desechable",
    slug: "manga-para-portal-artroscopico-esteril-desechable",
    title: "Disposable Sterile Arthroscopic Portal Sleeve",
    images: [
      "/assets/products/2ed13157d3cf81d0e42dfa75b7168755.png"
    ],
    sections: [
      {
        label: "Information",
        html: "<div role=\"region\" class=\"elementor-element e-con-full e-flex e-con e-child\"><div class=\"e-con-inner\"><div class=\"elementor-widget-container\"><ol><li>Disposable sterile protective portal sleeve shielding periarticular soft tissues during arthroscopy.</li><li>Minimizes tissue trauma and prevents suture bridge snagging during repeated instrument exchanges.</li><li>Flexible, biocompatible medical-grade polymer construction, completely latex-free.</li><li>Individually packaged and sterile, ready for immediate intraoperative use.</li></ol></div></div></div>"
      }
    ]
  }
];

// Update Spanish JSON
const esData = JSON.parse(fs.readFileSync(esJsonPath, "utf8"));
const esCat = esData.find((c) => c.id === "medicina-deportiva");
if (esCat) {
  esCat.products = esProducts;
  fs.writeFileSync(esJsonPath, JSON.stringify(esData, null, 2), "utf8");
  console.log(`Updated Spanish products in ${esJsonPath} with ${esProducts.length} items.`);
}

// Update English JSON
const enData = JSON.parse(fs.readFileSync(enJsonPath, "utf8"));
const enCat = enData.find((c) => c.id === "medicina-deportiva");
if (enCat) {
  enCat.products = enProducts;
  fs.writeFileSync(enJsonPath, JSON.stringify(enData, null, 2), "utf8");
  console.log(`Updated English products in ${enJsonPath} with ${enProducts.length} items.`);
}
