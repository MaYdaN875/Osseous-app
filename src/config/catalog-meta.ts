// Textos que le agregué yo a las categorías del catálogo, porque los datos
// originales solo traen nombres e imágenes y quedaba muy pelón.

// ==========================================
// Títulos de categorías traducidos
// ==========================================

export const CATEGORY_TITLE_ES: Record<number, string> = {
  9: "Robot quirúrgico",
  6: "Productos articulares",
  4: "Productos de columna",
  2: "Medicina deportiva",
  5: "Instrumental motorizado ortopédico",
};

export const CATEGORY_TITLE_EN: Record<number, string> = {
  9: "Surgical robot",
  6: "Joint products",
  4: "Spinal products",
  2: "Sports medicine products",
  5: "Orthopedic Power",
};

// ==========================================
// Versión en Español (ES)
// ==========================================

export const CATEGORY_DESC_ES: Record<number, string> = {
  9: "Sistemas robóticos de asistencia en cirugía ortopédica",
  6: "Prótesis articulares: cadera, rodilla, hombro y más",
  4: "Soluciones e implantes para columna vertebral",
  2: "Medicina deportiva y reparación de tejidos blandos",
  3: "Sistemas de fijación y reconstrucción en trauma",
  1: "Productos de cuidado e implantología oral",
  5: "Instrumental motorizado para cirugía ortopédica",
  7: "Sistema de preparación de plasma rico en plaquetas (PRP)",
  8: "Equipos y accesorios de endoscopía quirúrgica",
};

export const CATEGORY_SPECS_ES: Record<number, [string, string][]> = {
  9: [["Sistema", "Navegación óptica 3D asistida"], ["Precisión", "±0.5 mm"], ["Aplicación", "Artroplastia de cadera y rodilla"], ["Componentes", "Consola, brazo robótico e instrumental"], ["Esterilización", "Componentes autoclavables"]],
  6: [["Material", "Aleación de Titanio (Ti-6Al-4V ELI)"], ["Recubrimiento", "Hidroxiapatita (HA) sobre Titanio Poroso"], ["Opciones de Cuello", "Estándar, Lateralizado (+5mm)"], ["Tallas Disponibles", "0 a 12 (Incrementos de 1)"], ["Esterilización", "Radiación Gamma"]],
  4: [["Material", "Aleación de Titanio (Ti-6Al-4V ELI)"], ["Sistema", "Fijación pedicular / intersomática"], ["Niveles", "Cervical, torácico y lumbar"], ["Tallas Disponibles", "Múltiples alturas y lordosis"], ["Esterilización", "Radiación Gamma"]],
  2: [["Material", "PEEK / Titanio / Sutura de alta resistencia"], ["Sistema", "Anclajes y fijación de tejidos blandos"], ["Aplicación", "Hombro, rodilla y tobillo"], ["Presentación", "Estéril, un solo uso"], ["Esterilización", "Óxido de Etileno (EO)"]],
  3: [["Material", "Titanio / Acero inoxidable 316L"], ["Sistema", "Placas bloqueadas y tornillos"], ["Aplicación", "Reconstrucción y fijación en trauma"], ["Tallas Disponibles", "Serie completa por segmento óseo"], ["Esterilización", "Radiación Gamma"]],
  1: [["Material", "Titanio Grado 4 / Grado 23"], ["Superficie", "Tratamiento SLA"], ["Conexión", "Hexágono interno / cono morse"], ["Tallas Disponibles", "Diámetros 3.0 a 5.0 mm"], ["Esterilización", "Radiación Gamma"]],
  5: [["Sistema", "Instrumental motorizado quirúrgico"], ["Velocidad", "Control variable de alta precisión"], ["Batería", "Recargable de larga duración"], ["Accesorios", "Brocas, sierras y adaptadores"], ["Esterilización", "Autoclavable"]],
  7: [["Sistema", "Preparación de plasma rico en plaquetas"], ["Capacidad", "Procesamiento por ciclo individual"], ["Aplicación", "Medicina regenerativa"], ["Presentación", "Kit estéril de un solo uso"], ["Esterilización", "Óxido de Etileno (EO)"]],
  8: [["Sistema", "Endoscopía quirúrgica"], ["Óptica", "Alta definición"], ["Aplicación", "Cirugía mínimamente invasiva"], ["Componentes", "Torre, cámara y accesorios"], ["Esterilización", "Autoclavable / EO según componente"]],
};

// ==========================================
// Versión en Inglés (EN)
// ==========================================

export const CATEGORY_DESC_EN: Record<number, string> = {
  9: "Robotic assistance systems in orthopedic surgery",
  6: "Joint prostheses: hip, knee, shoulder and more",
  4: "Spine solutions and implants",
  2: "Sports medicine and soft tissue repair",
  3: "Fixation and reconstruction systems in trauma",
  1: "Oral care and implantology products",
  5: "Motorized instruments for orthopedic surgery",
  7: "Platelet-rich plasma (PRP) preparation system",
  8: "Surgical endoscopy equipment and accessories",
};

export const CATEGORY_SPECS_EN: Record<number, [string, string][]> = {
  9: [["System", "Assisted 3D optical navigation"], ["Accuracy", "±0.5 mm"], ["Application", "Hip and knee arthroplasty"], ["Components", "Console, robotic arm and instruments"], ["Sterilization", "Autoclavable components"]],
  6: [["Material", "Titanium Alloy (Ti-6Al-4V ELI)"], ["Coating", "Hydroxyapatite (HA) on Porous Titanium"], ["Neck Options", "Standard, Lateralized (+5mm)"], ["Available Sizes", "0 to 12 (Increments of 1)"], ["Sterilization", "Gamma Radiation"]],
  4: [["Material", "Titanium Alloy (Ti-6Al-4V ELI)"], ["System", "Pedicle / interbody fixation"], ["Levels", "Cervical, thoracic and lumbar"], ["Available Sizes", "Multiple heights and lordosis"], ["Sterilization", "Gamma Radiation"]],
  2: [["Material", "PEEK / Titanium / High-strength suture"], ["System", "Anchors and soft tissue fixation"], ["Application", "Shoulder, knee and ankle"], ["Presentation", "Sterile, single use"], ["Sterilization", "Ethylene Oxide (EO)"]],
  3: [["Material", "Titanium / 316L Stainless Steel"], ["System", "Locked plates and screws"], ["Application", "Reconstruction and fixation in trauma"], ["Available Sizes", "Complete series by bone segment"], ["Sterilization", "Gamma Radiation"]],
  1: [["Material", "Titanium Grade 4 / Grade 23"], ["Surface", "SLA Treatment"], ["Connection", "Internal hexagon / morse taper"], ["Available Sizes", "Diameters 3.0 to 5.0 mm"], ["Sterilization", "Gamma Radiation"]],
  5: [["System", "Surgical motorized instruments"], ["Speed", "Variable speed, high precision"], ["Battery", "Long-lasting rechargeable battery"], ["Accessories", "Drills, saws and adapters"], ["Sterilization", "Autoclavable"]],
  7: [["System", "Platelet-rich plasma preparation"], ["Capacity", "Single-cycle processing"], ["Application", "Regenerative medicine"], ["Presentation", "Sterile kit, single use"], ["Sterilization", "Ethylene Oxide (EO)"]],
  8: [["System", "Surgical endoscopy"], ["Optics", "High definition"], ["Application", "Minimally invasive surgery"], ["Components", "Tower, camera and accessories"], ["Sterilization", "Autoclavable / EO depending on component"]],
};

// ==========================================
// Descripciones específicas por Producto
// ==========================================

export const PRODUCT_DESC_ES: Record<number, string> = {
  2: "Primera caja de fusión intersomática con estructura de tantalio poroso puro fabricada mediante deposición química en fase de vapor (CVD), un proceso termoquímico de alta precisión que garantiza una homogeneidad estructural y estabilidad biomecánica superior a la impresión 3D convencional. Su estructura micro-reticular de tantalio poroso replica con exactitud la arquitectura del hueso esponjoso humano con una porosidad continua intercomunicada que promueve una osteointegración profunda y rápida vascularización.\n\nPresenta un módulo elástico biomecánicamente congruente con el hueso trabecular, lo que elimina el blindaje de tensiones (stress shielding) y previene la reabsorción ósea. Sus superficies superior e inferior cuentan con dentado antideslizamiento para una fijación primaria inmediata, mientras que su amplia ventana central facilita el empaquetamiento de injerto óseo autólogo. Diseñada para su uso conjunto con sistemas de fijación interna vertebral en fusiones intersomáticas cervicales (C2-T1) y lumbosacras (L2-S1), restaurando la lordosis fisiológica y la altura del espacio discal.",
  14: "Sistema de fijación vertebral posterior mediante trayectoria ósea cortical (Cortical Bone Trajectory - CBT) concebido para la instrumentación pedicular en pacientes con osteoporosis, reintervenciones o estenosis severa del canal lumbar. La técnica CBT utiliza una trayectoria en dirección caudo-cefálica y medio-lateral que maximiza el contacto del tornillo con cuatro zonas corticales densas de la vértebra (lámina posterior, pared medial y superior del pedículo y cortical anterior).\n\nEl tornillo incorpora un innovador diseño de rosca con bloqueo de gancho ('hook-lock') que redirige las fuerzas mecánicas verticalmente a lo largo del cuerpo del tornillo, suprimiendo la expansión lateral del cabezal. Su arquitectura de doble rosca autorroscante reduce un 29% el corte destructivo del hueso y optimiza en más de un 30% la resistencia al arrancamiento (pull-out) frente a tornillos pediculares tradicionales. Los tornillos prisioneros cuentan con cabeza Torx de bajo par de apriete y ranuras de rotura interna-externa sin rebabas.",
  26: "Dispositivo interespinoso dinámico de no fusión diseñado para el tratamiento de pacientes esqueléticamente maduros con estenosis de canal lumbar grado 1 o 2 (L1-L5) acompañada de lumbalgia y limitación funcional moderada a severa que requieren descompresión indirecta sin artrodesis rígida. Fabricado en aleación de titanio biocompatible de grado médico, presenta un cuerpo principal en forma de 'U' que proporciona una amplia superficie de contacto con las apófisis espinosas adyacentes, amortiguando las cargas axiales y manteniendo la distracción de los agujeros de conjunción y del disco intervertebral.\n\nIncorpora cuatro aletas laminares de fijación con proyecciones serradas y ranura en U dentada que controlan la rotación segmentaria, preservan la alineación de la columna y previenen activamente la cifosis lumbar. Su disposición desfasada (staggered) de las aletas superiores e inferiores permite la implantación simultánea en dos niveles adyacentes sin interferencia mecánica. Sus orificios circulares facilitan la sutura y refijación de los ligamentos interespinosos.",
  34: "Primera caja de fusión intersomática lumbar autoestabilizable de abordaje anterior (ALIF) desarrollada para los segmentos L1-S1. El implante combina un espaciador intersomático fabricado en polímero biocompatible PEEK con una placa anterior integrada de aleación de titanio equipada con cuatro tornillos divergentes de bloqueo rígido. Los tornillos divergentes actúan biomecánicamente como un anclaje de cuña ósea bicortical, proporcionando una fijación primaria inquebrantable que previene la expulsión o pérdida de fijación sin necesidad de suplementar con instrumental posterior adicional.\n\nLa unión entre la placa anterior y el espaciador de PEEK es de conexión elástica no rígida, lo que favorece una distribución fisiológica de cargas sobre el lecho óseo, previniendo el blindaje de tensiones. Disponible en múltiples alturas y ángulos lordóticos anatómicos que permiten restablecer con precisión la curvatura fisiológica de la columna lumbosacra, simplificando la intervención, reduciendo el tiempo de quirófano y permitiendo una rehabilitación temprana.",
  36: "Primer anclaje de sutura del mundo fabricado íntegramente mediante tecnología de manufactura aditiva de impresión 3D (fusión por haz láser LBM) a partir de polvo de aleación de titanio biocompatible TC4 ELI conforme a la norma YY/T 1701. Esta innovadora técnica de fusión láser permite controlar y modular con precisión el módulo elástico del cuerpo del anclaje, haciéndolo biomecánicamente similar al hueso esponjoso humano y reduciendo drásticamente el daño óseo periprotésico tras la implantación.\n\nSu superficie porosa y rugosa proporciona un microambiente óptimo que favorece la adhesión y proliferación celular, promoviendo una osteointegración temprana y firme. Cuenta con un diseño de doble rosca alta-baja autorroscante que brinda una fijación biomecánica superior sin requerir pretaladrado óseo, y un orificio distal independiente que evita el cruzamiento y enredo de las suturas. Incluye un insertador ergonómico de acero quirúrgico 304 (YY/T 0726) y esterilización terminal con óxido de etileno con 5 años de vida útil. Indicado junto con suturas de alta resistencia para la reinserción y fijación de tejidos blandos y tendones a hueso en hombro y rodilla.",
  39: "Primer anclaje de sutura del mundo con recubrimiento bioactivo de tantalio de alta pureza depositado mediante deposición física en fase vapor (PVD). Este implante combina las extraordinarias propiedades osteoinductoras y osteogénicas del tantalio trabecular con el módulo de elasticidad superior de la aleación de titanio, logrando un rendimiento biomecánico complementario y sinérgico. El recubrimiento de tantalio proporciona una barrera biológicamente inerte con resistencia sobresaliente a la corrosión que previene la liberación de iones metálicos potencialmente tóxicos, a la vez que exhibe propiedades bacteriostáticas naturales que disminuyen el riesgo de infección posquirúrgica.\n\nFavorece intensamente la adhesión, proliferación y diferenciación osteogénica de células madre mesenquimales, acelerando una integración ósea trabecular excepcionalmente fuerte. Disponible en modelos monorrosca MD(I) y doble rosca MD(II), en diámetros de 3.5 mm a 6.5 mm. Indicado para la conexión y fijación firme de hueso y tejidos blandos en articulaciones de hombro, rodilla, tobillo, codo, dedos de la mano y del pie.",
  40: "Sutura quirúrgica no absorbible de ultra alta resistencia trenzada a partir de múltiples hebras de polietileno de ultra alto peso molecular (UHMWPE) conforme a la norma médica YY/T 1431-2016. Su arquitectura de trenzado cerrado proporciona una superficie suave, uniforme, libre de nudos estructurales y sin desprendimiento de fibras ni decoloración, asegurando una retención de tensión duradera y una excelente estabilidad del nudo quirúrgico.\n\nEl sistema se presenta sin recubrimiento para maximizar la resistencia a la fricción y puede combinarse con agujas curvas fabricadas en acero inoxidable quirúrgico 12Cr18Ni9 de alta elasticidad y penetración punzante (norma YY/T 0043-2016). Disponible en presentaciones monocolor blanco, azul y bicolor azul-blanco para una rápida identificación y diferenciación intraoperatoria de hebras en nudos complejos. Esterilizado mediante óxido de etileno, está indicado para la sutura, ligadura y aproximación de tejidos blandos y tendones en cirugía ortopédica articular y reconstructiva.",
  41: "Grapa quirúrgica ortopédica de fijación rígida fabricada en aleación de cobalto-cromo-molibdeno (Co-Cr-Mo) de alta resistencia conforme a normas médicas internacionales. Diseñada para proporcionar una sujeción firme y compresión estática constante de tendones, ligamentos y plastias tendinosas contra la superficie cortical ósea en cirugías de rodilla y mano. La aleación Co-Cr-Mo confiere una resistencia superior a la fatiga mecánica cíclica y a la flexión bajo cargas fisiológicas elevadas.\n\nSus ramas laterales presentan estrías y dientes de fijación dentados que evitan el deslizamiento del tejido blando fijado, mientras que sus puntas afiladas facilitan la penetración percutánea y cortical controlada. Se suministra en empaque estéril desechable mediante radiación gamma con una vida útil de 5 años. Indicada para la fijación suplementaria de injertos ligamentarios, reinserción de tendones y avulsiones osteotendinosas en la articulación de la rodilla y mano.",
  42: "Sistema de fijación cortical suspensoria para reconstrucción ligamentaria que combina una placa cortical de aleación de titanio biocompatible de bajo perfil con un lazo continuo o bucle de fibra de ultra alto peso molecular (UHMWPE). Diseñado para la fijación femoral de injertos tendinosos en la reconstrucción del ligamento cruzado anterior (LCA) y posterior (LCP). La placa de titanio incorpora un diseño con ranuras pulidas que aseguran las suturas y nudos sin protuberancias palpables, optimizando el contacto hueso-injerto en la salida del túnel cortical.\n\nEl sistema ofrece una gama completa de especificaciones, incluyendo placas individuales con aperturas en ambos extremos, bucles de longitud fija de alta resistencia y bucles ajustables que pueden atravesar túneles óseos de diámetro reducido. Los modelos en combinación incorporan hilos de tracción auxiliares para ayudar al cirujano a introducir, bascular (voltear la placa sobre la cortical) y tensionar el injerto de forma fluida y reproducible. Esterilizado mediante óxido de etileno con 5 años de vida útil.",
  43: "Cuchilla para motor shaver artroscópico desechable de un solo uso, diseñada para la resección, corte y desbridamiento eficiente de tejidos blandos, cartílago y sinovial en cirugías artroscópicas de hombro, rodilla, cadera y pequeñas articulaciones. Fabricada con acero inoxidable quirúrgico importado de altísima dureza y resistencia mecánica, ofrece un filo de corte afilado y duradero que permite manipular los tejidos con precisión y rapidez.\n\nSu diseño incorpora un mecanismo de acoplamiento de bloqueo a presión ('Snap-lock') que previene eficazmente cualquier desprendimiento o desacople accidental de la punta durante el procedimiento rotatorio de alta velocidad. Los diferentes cabezales y diámetros cuentan con codificación cromática en sus interfaces para una identificación visual inmediata. Sometida a rigurosas pruebas de excentricidad radial (round runout) y rugosidad superficial, garantiza una rotación suave sin vibraciones. Suministrada en empaque estéril individual desechable que elimina totalmente el riesgo de contaminación cruzada y garantiza la máxima seguridad quirúrgica.",
  44: "Perno de anclaje roscado de PEEK diseñado para la fijación rígida de hueso a tejidos blandos durante cirugías ortopédicas y artroscópicas de hombro, tobillo, rodilla y codo. Fabricado en poliéter-éter-cetona (PEEK) de alta estabilidad, elimina los artefactos metálicos en radiografías y estudios de imagen por resonancia magnética. Se presenta en una completa variedad de diámetros y modelos roscados: el tipo MB(II) dispone de diseño parcialmente autorroscante de doble rosca, mientras que el tipo MB(III) cuenta con roscado completo continuo que proporciona una fuerza de retención y agarre óseo optimizada para hueso de menor densidad.\n\nIncluye una o dos suturas precargadas de UHMWPE de alta resistencia en combinaciones blanco puro y azul-blanco para una rápida identificación intraoperatoria. Su insertador ergonómico cuenta con un eje calibrado con líneas marcadoras grabadas con láser para una visualización instantánea y precisa de la profundidad de inserción. Esterilizado mediante óxido de etileno con 5 años de vida útil estéril.",
  45: "Tornillo de interferencia fabricado en poliéter-éter-cetona (PEEK) de grado médico biocompatible, diseñado para la fijación femoral y tibial rígida de injertos autólogos y aloinjertos (tendón rotuliano HTH, semitendinoso/grácil y tendón cuadricipital) en cirugías de reconstrucción del ligamento cruzado anterior (LCA) y ligamento cruzado posterior (LCP). La utilización de PEEK frente a tornillos metálicos tradicionales ofrece ventajas clínicas decisivas: evita el corte o daño por cizallamiento del injerto tendinoso durante el atornillado, elimina completamente la distorsión y artefactos en exámenes de resonancia magnética (RMN) postoperatorios, y previene reacciones inflamatorias asépticas crónicas producidas por la corrosión o detritos metálicos.\n\nDisponible en modelo JM (tornillo individual) y modelo JQ (sistema con vaina protectora y tornillo para hueso osteopénico), abarcando todos los diámetros y longitudes clínicas. Su diseño canulado se introduce sobre aguja guía mediante un insertador universal con marcas milimétricas de profundidad grabadas en el mango. Esterilizado mediante óxido de etileno con 5 años de vida útil.",
  46: "Dispositivo quirúrgico artroscópico 'All-Inside' de última generación para la reparación y sutura de roturas del menisco interno y externo. El sistema está constituido por diminutos implantes de anclaje de fijación fabricados en poliéter-éter-cetona (PEEK) de grado médico biocompatible, precargados con suturas de ultra alta resistencia calibre 2-0 compuestas por una combinación optimizada de polietileno (UHMWPE) y polipropileno. Incorpora una cánula con limitador de profundidad graduable que previene el avance excesivo de la aguja hacia la fosa poplítea, protegiendo estructuras vasculonerviosas críticas.\n\nSu mango ergonómico antideslizante cuenta con un mecanismo de disparo activo de 360° accionable con una sola mano, que permite al cirujano controlar con máxima precisión el momento exacto de despliegue de los implantes detrás de la cápsula articular. Disponible en versiones de cánula recta y con curvatura anterior o posterior de 12° para acceder fácilmente a roturas meniscales del cuerno posterior, cuerpo y zona periférica vascularizada. Esterilizado por óxido de etileno para uso único.",
  47: "Cánula de portal artroscópico desechable diseñada para la creación, protección y mantenimiento de las vías de acceso percutáneas hacia las cavidades articulares durante cirugías de hombro, rodilla, cadera y codo. Presenta un tubo transparente de alta resistencia que permite la visualización directa del instrumental y facilita la gestión y paso continuo de suturas intraarticulares sin enganches. Su diseño con estructura roscada completa exterior proporciona una estabilidad sobresaliente dentro de la cápsula articular y las partes blandas, evitando que la cánula se salga o desplace durante la manipulación instrumental vigorosa.\n\nEl cabezal hermético completamente cerrado incorpora un sistema de válvulas elastoméricas que previene la fuga de líquido de irrigación articular durante la inserción y extracción repetida de instrumental artroscópico. Diseñada ergonómicamente para una manipulación fácil y aplicación de fuerza controlada, disponible en diversas longitudes y calibres para diferentes requerimientos articulares. Suministrada estéril mediante óxido de etileno.",
  48: "Anclaje metálico autorroscante no absorbible fabricado en aleación de titanio de grado médico de alta resistencia con acabado superficial anodizado para una visibilidad y contraste óptimos bajo el microscopio quirúrgico y artroscopio. El diseño incorpora una punta distal afilada autorroscante que permite la penetración directa en hueso cortical y esponjoso incluso sin incisión previa, garantizando una inserción rápida y atraumática.\n\nSu cuerpo roscado presenta una morfología diferenciada: el extremo proximal incorpora roscas diseñadas para replicar la fijación sobre placas óseas y medios especiales, mientras que el extremo distal cuenta con rosca de hueso cortical que proporciona un bloqueo firme y duradero dentro del lecho óseo. Incluye suturas precargadas de UHMWPE de ultra alta resistencia con colores diferenciados para facilitar el manejo, trazado y anudado intraoperatorio de los cabos sin confusiones. Esterilizado mediante óxido de etileno, está indicado para la reinserción y aproximación estable de tendones y ligamentos a estructuras óseas articulares.",
  49: "Fresa rotatoria para shaver artroscópico de un solo uso, diseñada para el fresado, remodelado, desbridamiento y resección ósea de alta precisión en procedimientos como acromioplastia de hombro, notchplastia intercondílea de rodilla y resección de osteofitos articulares. Consta de un tubo interno y un tubo externo compuestos por cabezal de fresado (burr), varilla de transmisión y mango de conexión.\n\nEl cabezal de fresado está fabricado en acero inoxidable 30Cr13 de alta tenacidad conforme a YY/T 0294.1-2016; la varilla conectora en acero inoxidable 304/06Cr19Ni10 (norma GB/T 20878-2007); y el mango en policarbonato médico (PC). Ofrece una compatibilidad superior con más del 90% de los sistemas de motores shaver del mercado, disponiendo de modelos de fresa cilíndrica y esférica en múltiples calibres. Cuenta con mecanismo de bloqueo 'Snap-lock' que evita el desacople accidental y exhaustivos controles de excentricidad radial. Suministrada estéril mediante óxido de etileno con 5 años de vida útil.",
  51: "Anclaje de sutura biomecánico de fijación subcortical sin rosca que utiliza aletas de anclaje de aleación con memoria de forma de Níquel-Titanio (Nitinol). Al insertarse directamente en un orificio piloto pretaladrado de calibre ultrapequeño, las aletas de nitinol se despliegan automáticamente dentro del hueso esponjoso trabecular, logrando una fuerza de retención y resistencia a la extracción axial (pullout force) notablemente superior a la de los anclajes convencionales.\n\nSu diseño sin rosca permite una inserción directa y guiada mediante un insertador ergonómico que simplifica enormemente el procedimiento y reduce drásticamente el tiempo quirúrgico. Su diámetro mínimo de apenas 1.3 mm minimiza el lecho óseo dañado y el volumen de hueso resecado, haciéndolo especialmente ventajoso para cirugías ligamentarias delicadas. Precargado con una o dos hebras de sutura trenzada de UHMWPE de ultra alta resistencia. Indicado para la conexión y fijación firme de hueso y tejidos blandos en procedimientos de hombro, rodilla, codo, mano, muñeca, pie y tobillo en pacientes adultos.",
  52: "Manga de portal artroscópico de silicona médica suave y flexible, diseñada para proporcionar una vía de acceso elástica, atraumática y altamente protectora en cirugías articulares. Su fabricación en silicona médica flexible minimiza las presiones y fricciones sobre el cartílago articular y los tejidos blandos periósticos, y permite el paso cómodo de instrumental quirúrgico irregular o curvo, otorgando un espacio de maniobra dinámico y flexible al cirujano.\n\nLa cánula Tipo II incorpora una punta distal excéntrica diseñada para facilitar la penetración, el paso a través de la cápsula y la adhesión a los tejidos circundantes, evitando que la manga se retraiga involuntariamente. Cuenta con un diseño de doble capa impermeable y hermética que previene eficazmente la extravasación y fuga de líquido de irrigación hacia los compartimentos subcutáneos. Incluye una almohadilla de silicona en forma de C de 5 mm de grosor que permite calibrar y limitar la longitud efectiva de la cánula, evitando su introducción excesiva en la cavidad articular. Disponible en diversos diámetros y longitudes, suministrada en empaque estéril desechable.",
  56: "Sistema de fijación suspensoria ajustable de última generación para reconstrucción de ligamento cruzado anterior (LCA) y ligamento cruzado posterior (LCP). Combina una placa cortical de titanio de diseño biónico redondeado con una cinta/lazo de polietileno de ultra alto peso molecular (UHMWPE) de longitud graduable en tiempo real y un mecanismo de bloqueo unidireccional antideslizamiento patentado.\n\nPermite al cirujano introducir el injerto tendinoso en el túnel óseo femoral, verificar el volteo de la placa cortical y posteriormente tensar de forma individual y continua la banda ajustable hasta alcanzar la profundidad del túnel deseada y la tensión biomecánica óptima del injerto, sin necesidad de realizar cálculos de longitud de bucle previo ni riesgo de fondo de saco (bottoming out). Su perfil plano minimiza la irritación de partes blandas periósticas. Esterilizado con óxido de etileno con 5 años de vida útil estéril.",
  57: "Anclaje de sutura sin nudos roscado fabricado en poliéter-éter-cetona (PEEK) de grado médico, concebido especialmente para procedimientos artroscópicos de reparación del manguito rotador en doble hilera (Double-Row / SutureBridge) e inestabilidad articular. La tecnología libre de nudos ('Knotless') elimina la necesidad de atar nudos intraarticulares, reduciendo el perfil del implante, suprimiendo el riesgo de roce o pinzamiento subacromial y minimizando significativamente el tiempo quirúrgico.\n\nSu cuerpo hueco canulado permite la migración de células osteoblásticas hacia la interfase biológica, promoviendo una rápida cicatrización de la pared ósea. Es compatible con suturas redondas, cintas de sutura planas ('suture tape') o suturas combinadas redondas-planas, ofreciendo configuraciones para 4 hebras u 8 hebras. El material PEEK ofrece alta estabilidad biomecánica, nula degradación química, ausencia de reacciones alérgicas y total compatibilidad con resonancia magnética (RMN). Esterilizado con óxido de etileno, con 5 años de vida útil estéril.",
  58: "Engrapadora dérmica quirúrgica desechable de un solo uso, diseñada para el cierre rápido, uniforme y preciso de heridas quirúrgicas y de incisión cutánea en cirugías ortopédicas y traumatológicas. Equipada con grapas de acero inoxidable quirúrgico de grado médico de alta flexibilidad y biocompatibilidad que se moldean de manera homogénea sin saltar grapas ni producir desalineaciones. La fuerza de disparo uniforme y la ergonomía del percutor garantizan una colocación exacta de cada grapa con un esfuerzo manual mínimo.\n\nLa geometría de la grapa conformada mantiene una altura controlada por encima de la dermis, reduciendo el edema compresivo, minimizando el traumatismo tisular y favoreciendo una cicatrización estética con cicatrices mínimas. La superficie pulida de las grapas previene el desgarro dérmico durante la colocación y facilita su extracción posterior limpia e indolora. Esterilizada mediante óxido de etileno.",
  69: "Sistema de cerclaje y fijación espinal por cable de aleación de titanio de alta flexibilidad y resistencia a la fatiga cíclica. Diseñado para la fijación interna posterior en cirugías de columna cervical y cervicotorácica, incluyendo cableado sublaminar e interespinoso en los niveles C1-C7, ya sea de forma aislada o en combinación con sistemas de barras y tornillos posteriores.\n\nCada cable está compuesto por 49 microalambres trenzados en una configuración de 7 haces por 7 filamentos helicoidales, con un diámetro calibrado de 1.08 mm que le confiere una ductilidad y maleabilidad superiores a los alambres macizos tradicionales de acero. Incorpora un clip de fijación de cabezal único con una capacidad de ajuste angular de hasta 20°, lo que facilita la orientación intraoperatoria y el tensado controlado sin dañar el arco neural ni la duramadre. Su biocompatibilidad con titanio reduce el riesgo de infección, elimina la corrosión y amortigua las sobrecargas mecánicas en segmentos inestables.",
  70: "Caja de fusión intersomática fabricada mediante tecnología de manufactura aditiva de impresión 3D a partir de polvo de aleación de titanio biocompatible de grado médico. Concebida para procedimientos de artrodesis intersomática en patología discal degenerativa, espondilolistesis, estenosis espinal y pseudoartrosis. Incorpora una estructura microporosa trabecular biomimética con una porosidad interconectada del 50% al 80% que emula el hueso esponjoso humano, proporcionando un módulo elástico muy próximo al tejido óseo trabecular que suprime el blindaje de tensiones (stress shielding) y estimula la osteointegración y angiogénesis profunda.\n\nSu elevado coeficiente de fricción superficial previene el desplazamiento postoperatorio y confiere una sobresaliente resistencia al hundimiento (anti-subsidence). Presenta variantes específicas cervicales (modelos IVE e IVN para C2-T1) y toracolumbares (modelos IVC, IVD e IVO para T2-S1), con ángulos lordóticos anatómicos que restauran el balance sagital.",
  71: "Sistema modular de fijación interna posterior cérvico-torácica y occipito-cervical (Occipucio a T3) diseñado para la estabilización rígida en inestabilidades traumáticas, malformaciones de la unión craneocervical, fracturas de masa lateral, espondilolistesis y revisiones complejas. El sistema combina una placa occipital medial rígida de perfil anatómico complementada con orificios de fijación lateral para tornillos corticales occipitales, y barras de aleación de titanio de 3.5 mm y 4.0 mm precortadas y precurvadas para evitar tensiones de moldeado en quirófano.\n\nIncorpora tornillos poliaxiales de amplio rango angular diseñados para adaptarse a la variabilidad anatómica: tornillos de masa lateral cervical (longitud menor a 20 mm) con un ángulo de oscilación extremo de hasta 100°, y tornillos pediculares torácicos (longitud mayor a 20 mm) con un ángulo de oscilación de 90°, permitiendo una colocación sin esfuerzo y un anclaje óptimo sin forzar la trayectoria de la barra.",
  72: "Caja de fusión intersomática de malla cilíndrica de titanio puro (malla de titanio para corpectomía) diseñada para la reconstrucción vertebral anterior y reemplazo de cuerpo vertebral en la columna cervical, torácica y lumbar tras vertebrectomía o corpectomía por tumores óseos, fracturas conminutas complejas e infecciones vertebrales. Presenta una estructura tubular mallada fenestrada que permite el crecimiento óseo biológico omnidireccional a través de todas sus paredes.\n\nEstá disponible en una amplia gama de longitudes con incrementos milimétricos de 1 a 2 mm, eliminando la necesidad de corte manual en quirófano y facilitando un uso estéril inmediato. Sus bordes corrugados y ranurados permiten un manejo quirúrgico ergonómico e implantación rápida. Cuenta con tapas terminales (end caps) paralelas y anguladas de diseño arciforme en nueve perfiles transversales que optimizan el encaje anatómico, previenen el hundimiento en el platillo vertebral y permiten empaquetar injerto óseo en su cara inferior para acelerar la artrodesis.",
  149: "Anclaje de sutura metálico no absorbible fabricado mediante manufactura aditiva de impresión 3D a partir de polvo de aleación de titanio TC4 ELI conforme a la norma YY/T 1701. Su cuerpo incorpora una innovadora arquitectura de doble rosca alta-baja autorroscante que optimiza la fijación bicortical y esponjosa, proporcionando una fuerza de agarre y retención de tejidos blandos sustancialmente superior en la práctica clínica. La punta afilada y cónica permite una inserción autorroscante directa y suave sin necesidad de pretaladrado óseo.\n\nIncorpora dos orificios de sutura completamente independientes que evitan activamente que las hebras se crucen, rocen o anuden prematuramente durante el paso intraoperatorio. Viene precargado con dos hebras de sutura compuestas por UHMWPE blanco y polipropileno azul, facilitando la distinción visual de los cabos durante el anudado. Su vástago de inserción de acero inoxidable 304 (YY/T 0726) cuenta con marcas grabadas con láser de profundidad de inserción para una colocación milimétrica. Esterilizado por óxido de etileno con 5 años de vida útil estéril. Indicado para procedimientos reconstructivos de avulsiones y desgarros en hombro, rodilla, tobillo, codo, dedos y articulaciones periféricas.",
  150: "Innovador sistema de anclaje textil libre de componentes metálicos ('All-Suture') compuesto íntegramente por un cuerpo expansible trenzado en fibra de polietileno de ultra alto peso molecular (UHMWPE), suturas de tracción de UHMWPE y un insertador ergonómico de acero inoxidable quirúrgico (norma YY/T 0294.1). Al introducirse en un orificio de perforación ósea de diámetro submilimétrico y aplicar tensión activa mediante el mango de accionamiento, el cuerpo textil se expande y comprime formando una esfera o 'bobina' densa debajo de la cortical ósea, generando una formidable fuerza de retención biomecánica con una mínima pérdida de masa ósea.\n\nAl carecer de implantes metálicos o plásticos rígidos, elimina totalmente el blindaje de tensiones y no genera artefactos en tomografías computarizadas (TC) ni resonancias magnéticas (RMN). El sistema Fix(I) cuenta con un cabezal de carga oculta en la punta del insertador que facilita su deslizamiento sin dañar partes blandas. Viene precargado con una o múltiples hebras trenzadas de UHMWPE en colores blanco, azul (azul cobalto-cromo) y bicolor azul-blanco. Esterilizado por óxido de etileno con 5 años de vida útil. Indicado para la fijación de tejidos blandos a hueso en hombro, rodilla, tobillo/pie, cadera, codo y mano/muñeca.",
  151: "El anclaje de sutura de PEEK está fabricado en poliéter-éter-cetona de grado médico, un polímero termoplástico biocompatible con un módulo de elasticidad idéntico al hueso cortical humano. Esta característica biomecánica previene el blindaje de tensiones (stress shielding) y asegura una transferencia fisiológica de cargas, al tiempo que elimina por completo los artefactos en resonancia magnética (RMN) y radiografías. Su cuerpo canulado y hueco reduce al mínimo el volumen de material extraño implantado en el organismo y proporciona un soporte morfológico ideal para el crecimiento óseo interno (bone ingrowth).\n\nIncorpora suturas trenzadas de fibra de UHMWPE de alta tenacidad en combinaciones de color blanco y azul-blanco que garantizan un deslizamiento suave a través de los tendones y una retención de nudo firme. Esterilizado mediante óxido de etileno con 5 años de vida útil. Indicado para la reparación del manguito rotador, lesiones de Bankart y SLAP, reconstrucción de ligamentos en tobillo, rodilla, codo y articulaciones periféricas.",
  152: "Anclaje de sutura sin nudos de inserción por impacto ('Knock-in / Knit-in') fabricado en poliéter-éter-cetona (PEEK) de grado médico. Su método de implantación directa por presión o golpe suave simplifica sustancialmente la técnica quirúrgica, permitiendo al cirujano tensar y calibrar con precisión milimétrica la tensión tisular antes del bloqueo final sin necesidad de anudado manual. El material PEEK ofrece alta estabilidad dimensional, módulo de elasticidad idéntico al hueso que elimina el blindaje de tensiones y una total ausencia de artefactos en estudios de resonancia magnética (RMN).\n\nEl sistema dispone de un abanico exhaustivo de especificaciones y diámetros que abarca desde 1.8 mm hasta 9.0 mm, cubriendo todas las demandas clínicas en articulaciones mayores y periféricas. Esterilizado mediante óxido de etileno con 5 años de vida útil. Indicado para la reinserción y fijación de tejidos blandos a hueso en procedimientos de hombro, rodilla, pie, tobillo, cadera, codo, mano y muñeca.",
  154: "Primera placa de fijación y moldeo de lámina espinal del mundo fabricada íntegramente mediante tecnología de manufactura aditiva de impresión 3D a partir de aleación de titanio biocompatible de grado médico, protegida bajo patente de invención. Diseñada para procedimientos de laminoplastia expansiva y descompresión del canal raquídeo en segmentos cervicotorácicos (C3-T3). Su arquitectura 3D incorpora regiones porosas de transición trabecular que sustituyen la necesidad de injertos óseos adicionales, rellenando con precisión los defectos óseos y ampliando de forma óptima el espacio del conducto vertebral.\n\nLa superficie interna está pulida a espejo para proteger el saco dural y prevenir irritaciones tisulares o adherencias peridurales. Presenta una disposición anatómica multiorificio que se adapta a las líneas de corte de la osteotomía vertebral, otorgando una estabilidad de fijación inicial superior y una flexibilidad clínica sobresaliente para adaptarse a diversas técnicas quirúrgicas.",
  155: "Prótesis de cuerpo vertebral poroso fabricada mediante tecnología de manufactura aditiva de impresión 3D a partir de aleación de titanio biocompatible de grado médico. Concebida para la reconstrucción vertebral anterior, reemplazo de cuerpos vertebrales colapsados y fusión intersomática tras vertebrectomía o corpectomía subtotal/total en patologías tumorales, fracturas conminutas graves e infecciones vertebrales. Dispone del Modelo I-A específico para columna cervical y del Modelo I-B para columna toracolumbar.\n\nSu arquitectura micro-trabecular biomimética presenta un módulo de elasticidad idéntico al hueso esponjoso humano, lo que asegura una excelente compatibilidad biomecánica y elimina el blindaje de tensiones (stress shielding). Sus platillos superior e inferior anatómicos, disponibles en múltiples especificaciones angulares lordóticas y cifóticas, se adaptan a la morfología de los platillos vertebrales sanos adyacentes, restaurando la alineación sagital y ofreciendo un entorno osteogénico óptimo para una rápida vascularización e integración ósea profunda.",
  156: "Sistema modular expandible de cuerpo vertebral artificial diseñado para el reemplazo estructural de vértebras toracolumbares colapsadas (T1-L5) tras vertebrectomía por tumores óseos, traumatismos graves o deformidades cifóticas. Su diseño abierto de amplia cavidad interna permite un empaquetamiento masivo de injerto óseo autólogo y esponjoso, acelerando la consolidación ósea biológica.\n\nLos platillos superior e inferior presentan superficies de contacto arciformes cóncavo-convexas que calcan la concavidad natural de los platillos vertebrales vecinos, maximizando la superficie de apoyo y reduciendo drásticamente la tasa de hundimiento (subsidence). Su estructura dentada autoestabilizable se incrusta de forma inmediata en el hueso subcondral, impidiendo cualquier desplazamiento o protrusión del implante hacia el canal medular. Su mecanismo de ajuste central cilíndrico facilita una inserción suave en el defecto y un bloqueo seguro con la distracción deseada.",
  157: "Caja de fusión intersomática cervical autoestabilizable de perfil cero ('Zero-Profile') diseñada para procedimientos de artrodesis cervical anterior (ACDF). El implante integra en una sola pieza un espaciador de PEEK biocompatible y una placa anterior de perfil cero que se aloja por completo dentro del espacio intervertebral discal, eliminando cualquier muesca o saliente anterior a nivel vertebral. Sus tornillos óseos incorporan un innovador anillo de autobloqueo que asegura firmemente el tornillo a la placa anterior y previene activamente el retroceso o protrusión del tornillo.\n\nAl prescindir de placas cervicales anteriores tradicionales sobre la cara anterior de los cuerpos vertebrales, el sistema reduce de forma drástica el traumatismo sobre el esófago y las partes blandas prevertebrales, disminuyendo sustancialmente la incidencia de disfagia postoperatoria. Dispone de variantes de lordosis cero-muesca de 0°, 4°, 6° y 8° con una espaciosa cámara central para injerto óseo.",
  158: "Sistema de placas de fijación de lámina espinal de titanio puro de grado médico, diseñado para procedimientos de laminoplastia abierta en canal estrecho cervical y cervicotorácico (C3-T3). Fabricadas en titanio puro de excelente plasticidad y ductilidad que permite un modelado intraoperatorio preciso para adaptarse a la anatomía vertebral de cada paciente.\n\nEl sistema incorpora una ranura o ranura de tarjeta integrada ('integral card slot') que sujeta firmemente el borde osteotomizado de la lámina vertebral sin requerir injerto óseo complementario obligatorio, manteniendo de forma rígida la apertura del canal raquídeo y descomprimiendo la médula espinal. Su perfil extremadamente bajo minimiza la irritación de los tejidos blandos paravertebrales, mientras que la disposición diversificada de los orificios para tornillos proporciona una fijación bicortical estable que protege el canal medular y conserva la movilidad segmentaria cervical.",
  159: "Sistema de fijación interna vertebral posterior mínimamente invasivo (MIS) diseñado para la instrumentación percutánea de la columna torácica y lumbar. El sistema cuenta con tornillos pediculares canulados provistos de brazos de extensión prolongados integrados ('extra-long arm') que actúan como guías tubulares para la inserción percutánea sobre aguja de Kirschner, permitiendo una colocación precisa a través de incisiones cutáneas diminutas que no requieren la disección abierta de la musculatura paravertebral ni desinserción ligamentaria.\n\nIncorpora tornillos de fijación con tres geometrías de rosca, incluyendo un diseño de doble rosca que incrementa la estabilidad inicial y la resistencia a la extracción (pullout force). Los tornillos prisioneros incorporan cabezal Torx antideslizamiento y rosca cuadrada de precisión que previene activamente el entrecruzamiento de roscas (cross-threading). Compatible con barras de titanio precurvadas de 5.5 mm y 6.0 mm que calcan la lordosis fisiológica lumbar.",
  160: "Sistema de fijación espinopélvica posterior con tornillos ilíacos diseñado para la estabilización lumbosacra y reconstrucción de la base sacropélvica en adultos. Presenta un innovador diseño de conexión directa superior y lateral tornillo-barra sin necesidad de conectores transversales descentrados voluminosos, reduciendo de manera radical el relieve del implante bajo los tejidos blandos de la pelvis.\n\nSu punto de entrada se sitúa 15 mm por debajo de la espina ilíaca posterosuperior (EIPS), eliminando la necesidad de resecar o desvitalizar la cresta ósea y disminuyendo sensiblemente el dolor postoperatorio del paciente. Los tornillos son canulados (aptos tanto para técnicas abiertas como mínimamente invasivas) y presentan una caña proximal lisa que no invade ni roza la articulación sacroilíaca, protegiendo la movilidad fisiológica pélvica mientras proporciona un anclaje biomecánico rígido contra las fuerzas de cizallamiento lumbosacro.",
  164: "Sistema de fijación vertebral posterior aumentado con cemento óseo (polimetilmetacrilato - PMMA) diseñado para la instrumentación rígida en columnas torácicas, lumbares y sacras con osteopenia severa, osteoporosis avanzada, fracturas patológicas o resecciones tumorales. Los tornillos pediculares disponen de un cuerpo canulado con orificios fenestrados laterales calibrados en su extremo distal que permiten la inyección controlada y homogénea de cemento óseo biocompatible hacia el hueso esponjoso circundante.\n\nLa formación del ancla de cemento óseo multiplica la superficie de fijación y confiere una estabilidad inmediata insuperable contra las fuerzas de arrancamiento y aflojamiento aséptico. Dispone de tres configuraciones de rosca, incluyendo modelos de doble rosca autorroscante, y opciones con brazos de extensión largos ('extra-long arm') compatibles con técnicas abiertas o mínimamente invasivas (MIS).",
  165: "El tallo femoral no cementado Modelo BE2 está fabricado en aleación de titanio forjado Ti-6Al-4V de acuerdo con la norma YY 0117.1. Su superficie metafisaria proximal cuenta con un recubrimiento bioactivo bicapa de titanio poroso e hidroxiapatita (Ti + HA) aplicado mediante proyección por plasma térmico.\n\nIncorpora aletas longitudinales proximales que proporcionan un bloqueo antirrotacional inmediato y ranuras distales que reducen la rigidez por flexión. Indicado para artroplastia total primaria en fémures con buena reserva ósea (Dorr Tipo A y B).",
  166: "Sistema de placas cervicales anteriores de perfil bajo para artrodesis e instrumentación anterior en fracturas, espondilolistesis, hernia discal y tumores de la columna cervical. La placa presenta un diseño anatómico precurvado que calca la lordosis fisiológica cervical, minimizando o eliminando la necesidad de moldeado intraoperatorio y asegurando un asentamiento perfecto sobre la superficie ósea.\n\nSu arquitectura de contornos redondeados y trayectoria biselada de perfil bajo reduce drásticamente la irritación mecánica sobre las estructuras viscerales anteriores, especialmente el esófago y los vasos sanguíneos, reduciendo la incidencia de disfagia postoperatoria. Incorpora un mecanismo de bloqueo antirretracción integrado que asegura de forma fiable los tornillos óseos a la placa, y una ventana de visualización central de gran tamaño que permite monitorizar con precisión la posición y consolidación del injerto óseo o caja intersomática.",
  167: "El tallo femoral cementado Modelo BC (B-C1) está fabricado en aleación de cobalto-cromo-molibdeno forjado con acabado espejo de pulidez quirúrgica ultraprecisa sin collarín. Diseñado para su implantación con cemento óseo acrílico, distribuye las cargas de manera homogénea a lo largo del manto de cemento.\n\nSu conicidad suave permite un reasentamiento microscópico hidrostático que elimina la formación de grietas en el cemento y asegura una fijación estable y duradera a largo plazo.",
  168: "El vástago femoral trabecular de cadera está fabricado en aleación forjada de titanio Ti-6Al-4V e incorpora en su tercio metafisario proximal una estructura integrada de titanio trabecular biomimético (Ti6Al4V ELI) mediante manufactura aditiva 3D por haz de electrones (EBM).\n\nSu diseño no cementado promueve la aposición ósea biológica acelerada y transfiere las cargas fisiológicas directamente a la metáfisis proximal, previniendo el apantallamiento de tensiones (*stress shielding*). Cuenta con una doble conicidad mediolateral y anteroposterior que garantiza estabilidad axial y torsional inmediata.",
  169: "Caja de fusión espinal intersomática fabricada en polímero biocompatible de poliéter-éter-cetona (PEEK) de grado médico, concebida para cirugías de artrodesis intersomática en columna cervical y toracolumbar. El polímero PEEK ofrece una compatibilidad mecánica excepcional con los tejidos humanos, con un módulo elástico muy similar al del hueso cortical que garantiza una distribución fisiológica natural de las cargas externas y elimina el blindaje de tensiones (stress shielding).\n\nPresenta un diseño de superficie con estrías dentadas en diente de sierra inverso que aumentan la resistencia biomecánica y previenen activamente la expulsión o migración postoperatoria del implante. Su diseño con ángulo lordótico anatómico restituye la curvatura fisiológica y mantiene la altura del espacio intervertebral a largo plazo, aliviando la compresión de las raíces nerviosas. Incorpora una ventana de injerto óseo de gran calibre para empaquetamiento masivo de matriz ósea y clavijas marcadoras radiopacas de tantalio para su verificación fluoroscópica limpia.",
  170: "El vástago femoral no cementado estándar de artroplastia de cadera está fabricado en aleación de titanio forjado Ti-6Al-4V y cuenta con un recubrimiento bioactivo bicapa de titanio poroso e hidroxiapatita (Ti + HA) aplicado por proyección por plasma térmico.\n\nSu diseño de triple conicidad anatómica proporciona un anclaje metafisario rígido y seguro, mientras que su cuello pulido de bajo perfil maximiza el rango de movimiento angular libre antes del choque cuello-copa.",
  171: "Guía quirúrgica paciente-específica para osteotomía espinal fabricada mediante tecnología de manufactura aditiva de impresión 3D a partir de poliamida médica de alta biocompatibilidad PA12. El dispositivo se diseña a medida mediante ingeniería inversa tridimensional basada en la tomografía computarizada (TC) de alta resolución de la columna del paciente, adaptándose con precisión milimétrica a las estructuras anatómicas de las apófisis espinosas, láminas y masas articulares.\n\nEstá concebida para el posicionamiento, guiado angular y protección de estructuras neurológicas durante procedimientos complejos de osteotomía de sustracción pedicular (PSO), osteotomía de Smith-Petersen (SPO) y corrección de deformidades vertebrales cifoescolióticas. Dispone de tres modelos: los Tipos I y II indicados para osteotomías espinales unilaterales, y el Tipo III diseñado para osteotomías espinales bilaterales. Proporciona una navegación física intraoperatoria exacta que acorta significativamente el tiempo quirúrgico y reduce el sangrado y las complicaciones neurológicas.",
  172: "El vástago femoral de revisión de 160 mm está fabricado en aleación forjada de titanio Ti-6Al-4V con recubrimiento rugoso proximal. Diseñado específicamente para cirugías de revisión de cadera donde existe déficit o debilitamiento óseo en la región trocantérica y metafisaria, su longitud extendida de 160 mm y su conicidad anatómica permiten sobrepasar la zona dañada y lograr un anclaje diafisario distal rígido.\n\nIncorpora ranuras longitudinales distales y un corte de alivio coronal en la punta que disminuyen la rigidez estructural y reducen notablemente el dolor de muslo postoperatorio.",
  174: "El liner acetabular de polietileno no cementado está fabricado en polietileno de ultra alto peso molecular altamente entrecruzado (HXLPE).\n\nDiseñado para encajar a presión y bloquearse mediante lengüetas indexadas dentro de copas no cementadas, ofrece una superficie cóncava congruente que minimiza el estrés de contacto con la cabeza femoral. Su microestructura estabilizada ofrece excelente resistencia al desgaste volumétrico y fatiga mecánica.",
  175: "El liner metálico para doble movilidad está fabricado en aleación fundida de cobalto-cromo-molibdeno (Co-Cr-Mo) con un acabado pulido a espejo de grado óptico.\n\nDiseñado para insertarse mediante cono morse dentro de copas acetabulares no cementadas, proporciona la superficie articular esférica cóncava de ultra baja fricción que requiere el inserto móvil de polietileno de doble movilidad, transformando el implante en una solución antiluxación de alto rendimiento.",
  177: "La copa acetabular de metal trabecular serie G20 está fabricada en aleación de titanio biomimético (Ti6Al4V ELI) mediante manufactura aditiva 3D por haz de electrones (EBM). Su diseño hemisférico cuenta con una estructura porosa trabecular con una porosidad del 70-80% que emula la morfología del hueso esponjoso humano.\n\nEl modelo G20 incorpora 3 orificios apicales para tornillos de fijación adicional en el cuadrante posterosuperior ilíaco, proporcionando una excelente estabilidad primaria inmediata y fijación biológica a largo plazo sin cemento.",
  178: "La copa acetabular de metal trabecular serie G40 está fabricada en aleación de titanio biomimético (Ti6Al4V ELI) mediante fusión por haz de electrones (EBM 3D). Diseñada para cirugías de revisión y defectos acetabulares moderados a severos, su cúpula hemisférica está provista de múltiples orificios avellanados (G40) distribuidos en toda su superficie.\n\nEsta disposición permite una fijación multiangular intensiva con tornillos de titanio en cualquier cuadrante con soporte óseo remanente, garantizando una estabilidad primaria absoluta en lechos acetabulares complejos.",
  179: "El bloque acetabular trabecular es un aumento cotiloideo fabricado a partir de polvo de aleación de titanio biomimético (Ti6Al4V ELI) mediante manufactura aditiva 3D por haz de electrones (EBM). Presenta una estructura trabecular tridimensional de poros abiertos interconectados que imita la morfología del hueso esponjoso humano.\n\nDiseñado para rellenar pérdidas óseas acetabulares cavitarias y segmentarias del reborde o techo cotiloideo en cirugías de revisión, se fija rígidamente al hueso receptor mediante tornillos de titanio TC4, proporcionando una base sólida para el implante de la copa acetabular.",
  180: "El lingote de tantalio metálico poroso es un implante estructural de reconstrucción fabricado en tantalio de alta pureza mediante deposición química de vapor (CVD) o manufactura aditiva. Su estructura celular trabecular biomimética posee una porosidad del 75% al 85% y un tamaño de poro totalmente interconectado de 400-600 µm, asemejándose a la matriz del hueso esponjoso nativo.\n\nIndicado para el relleno estructural de grandes defectos óseos cavitarios de cadera (Paprosky Tipo II y III), ofrece el coeficiente de fricción inicial más alto del mercado y un módulo elástico similar al hueso esponjoso.",
  181: "La cabeza femoral metálica está fabricada en aleación forjada de cobalto-cromo-molibdeno (Co-Cr-Mo) de alta resistencia conforme a la norma YY 0117.3. Su superficie esférica exterior está pulida a espejo con precisión micrométrica para interactuar con liners acetabulares de polietileno o metal con mínima fricción.\n\nSu cono hembra interno estándar 12/14 permite un acoplamiento seguro y rígido al cono del vástago femoral, disponible en múltiples longitudes de cuello para una restauración milimétrica del offset y de la longitud del miembro.",
  184: "La prótesis modular de cadera es un sistema de reconstrucción tumoral y de defectos mayores, compuesto por componentes metafisarios proximales de cadera, segmentos diafisarios de osteotomía, conectores femorales totales y vástagos intramedulares femorales en aleación forjada de titanio Ti-6Al-4V con tratamiento de anodizado superficial.\n\nSus conexiones cónicas de cono Morse de alta resistencia aseguradas con tornillos de compresión axial permiten reconstruir pérdidas óseas femorales segmentarias o masivas de longitud personalizada, proporcionando una solución de rescate articular sólida en cirugías de alta complejidad.",
  187: "Las prótesis unicompartimentales de rodilla se clasifican en prótesis de plataforma móvil y de plataforma fija. Ambos tipos constan de un cóndilo femoral, una bandeja tibial y un inserto tibial.\n\nFabricadas en aleación fundida de Co-Cr-Mo para componentes metálicos y polietileno UHMWPE para el inserto. Utilizada con cemento óseo, está indicada para el reemplazo unicompartimental medial o lateral de rodilla en casos de gonartrosis localizada con ligamentos cruzados y colaterales intactos.",
  188: "El sistema de fijación por cable metálico de titanio está diseñado para el cerclaje y la fijación interna rígida de fracturas óseas diafisarias, metafisarias y periprotésicas en extremidades superiores e inferiores. Está constituido por múltiples alambres ultrafinos de aleación de titanio biocompatible trenzados helicoidalmente entre sí, confiriéndole una flexibilidad extraordinaria que previene las roturas por fatiga mecánica postoperatoria típicas de los alambres de acero quirúrgico individuales.\n\nEl extremo terminal incorpora un cabezal esférico ensanchado integrado que interactúa con instrumental de tensado unidireccional calibrado, asegurando una sujeción uniforme y firme sin necesidad de doblar el implante intraoperatoriamente. Este diseño atraumático reduce significativamente la irritación y desvitalización de los tejidos blandos y del periostio circundante. Esterilizado por radiación gamma con 5 años de vida útil estéril.",
  190: "La prótesis de rodilla primaria tipo CR (Retención de Cruzados) de la serie XN está compuesta por cóndilo femoral y bandeja tibial en aleación fundida de cobalto-cromo-molibdeno (Co-Cr-Mo), con inserto tibial y componente rotuliano en UHMWPE, y tornillos de fijación opcionales en Ti6Al4V.\n\nDiseñada específicamente para pacientes con ligamento cruzado posterior (LCP) funcional e intacto, su morfología con escotadura anatómica preserva la estructura ligamentaria natural, mientras que el cóndilo anterior adelgazado y la tróclea profunda proporcionan una cinemática fisiológica suave y libre de dolor.",
  191: "La prótesis de articulación de rodilla Modelo XA está compuesta por cóndilo femoral, bandeja tibial, inserto tibial y componente rotuliano. Indicada para artroplastia total primaria de rodilla, es una prótesis anatómica de superficie desarrollada a partir de datos morfométricos poblacionales, adaptada para facilitar movimientos de flexión profunda.\n\nCuenta con cóndilo anterior adelgazado y diseño de tróclea optimizado que favorece una articulación suave con la rótula, previene crepitaciones y dolor anterior de rodilla, garantizando una excelente estabilidad y distribución de cargas.",
  192: "La prótesis total de rodilla de tipo biológico consta de cóndilo femoral, inserto tibial, bandeja tibial y componente rotuliano. El cóndilo femoral y la bandeja tibial están fabricados en aleación fundida de cobalto-cromo-molibdeno (Co-Cr-Mo); el inserto tibial y la rótula están fabricados en polietileno de ultra alto peso molecular altamente entrecruzado con infusión de Vitamina E (VE-HXLPE).\n\nLas superficies internas de contacto óseo del cóndilo femoral y la bandeja tibial cuentan con un recubrimiento bicapa de titanio puro e hidroxiapatita (Ti + HA) aplicado mediante tecnología de proyección por plasma térmico (plasma spray). Suministrado en envase estéril con 5 años de vida útil estéril (irradiación para metales, óxido de etileno para polietilenos). Es una prótesis de rodilla no cementada indicada para el reemplazo biológico de superficie de la articulación de rodilla.",
  194: "Este componente articular consta de inserto tibial de polietileno de ultra alto peso molecular altamente entrecruzado con infusión homogénea de Vitamina E (VE-HXLPE / UHMWPE) que cumple con la norma ASTM F2695, diseñado para acoplarse con cóndilo femoral y bandeja tibial en aleación fundida de Co-Cr-Mo.\n\nEl producto se suministra en empaque estéril con una vida útil de 5 años (esterilización por óxido de etileno / gas plasma para componentes de polietileno). Compatible con componentes del sistema del fabricante, está indicado como superficie de rodamiento articular en artroplastia total de rodilla.",
  197: "Este producto comprende cóndilo femoral, bandeja tibial, inserto tibial, vástagos intramedulares rectos y excéntricos, tornillos de fijación, adaptadores, bloques de aumento femorales posteriores y distales, y bloques tibiales (medios, semioblicuos y oblicuos completos).\n\nEl cóndilo femoral y la bandeja tibial están fabricados en aleación fundida de cobalto-cromo-molibdeno (Co-Cr-Mo); el inserto tibial, tapones y tapas en UHMWPE Tipo 2; y todos los demás componentes en aleación de titanio forjado TC4. El producto está esterilizado por irradiación gamma con una vida útil estéril de 5 años. Utilizado junto con cemento óseo, está indicado para artroplastia de rodilla primaria compleja o cirugía de revisión.",
  199: "Este producto consta de cóndilo femoral, bandeja tibial, inserto tibial, tornillos largos, vástagos intramedulares, manguitos alados y tornillos de fijación; el cóndilo femoral se ensambla a partir de componentes condilares femorales, revestimientos intercondilares de polietileno, manguitos de tres vías, manguitos plásticos, tornillos de posicionamiento y tornillos de fijación.\n\nLos componentes del cóndilo femoral y la bandeja tibial están fabricados en aleación fundida de cobalto-cromo-molibdeno (Co-Cr-Mo); los manguitos de tres vías, tornillos de posicionamiento y tornillos largos en aleación forjada de Co-Cr-Mo; el inserto tibial, los revestimientos intercondilares de polietileno y los manguitos plásticos en UHMWPE Tipo 2; los tornillos de fijación y vástagos intramedulares en aleación de titanio forjado TC4; y los manguitos alados en aleación de titanio TC4ELI mediante fusión por haz de electrones (EBM). Todos los componentes están esterilizados por rayos gamma con una vida útil estéril de 5 años. Compatible con componentes del mismo sistema del fabricante, está indicado para artroplastia total de rodilla y procedimientos de revisión.",
  201: "Los bloques de aumento y espaciadores de rodilla constan de aumentos femorales distales (Tipo A), posteriores condilares (Tipo B), femorales (Tipos C, D, E, F) y tibiales (mitad A1/A2, medio-oblicuos B1/B2, oblicuo total C, y D, E, F, G), tornillos de aumento y tornillos de fijación. Los bloques de aumento se fabrican a partir de polvo de aleación de titanio biomimético (Ti6Al4V ELI) mediante fusión por haz de electrones (EBM).\n\nLos tornillos de fijación son de titanio forjado TC4. Suministrado en envase estéril desechable para un solo uso, esterilizado por rayos gamma con 5 años de vida útil estéril. Indicado para la reconstrucción de defectos óseos durante cirugías de revisión de rodilla, en combinación con cóndilos femorales o bandejas tibiales del mismo sistema.",
  203: "La prótesis de articulación de hombro para enfermedad ósea es un sistema biológico no cementado indicado para la artroplastia total o parcial de hombro primaria en pacientes con patologías articulares degenerativas, necrosis avascular de la cabeza humeral, artrosis y artritis reumatoide con manguito rotador íntegro. El sistema está compuesto por un vástago humeral no cementado, una cabeza humeral anatómica excéntrica y un componente glenoideo de polietileno de ultra alto peso molecular (UHMWPE).\n\nEl vástago humeral cuenta con un diseño de sección rectangular antirrotación con recubrimiento bioactivo proximal de polvo de titanio puro por pulverización por plasma para promover una osteointegración secundaria sólida. La cabeza humeral anatómica excéntrica presenta una curvatura con diámetros de 36 a 48 mm (incrementos de 2 mm), garantizando una cobertura milimétrica del cuello anatómico humeral y replicando con fidelidad la cinemática articular nativa del paciente para un alivio completo del dolor y una baja tasa de luxación articular a largo plazo.",
  205: "El sistema biológico de artroplastia reversa de hombro (RSA) está diseñado para la reconstrucción anatómica y funcional de afecciones severas de la articulación glenohumeral en pacientes con rotura masiva irreparable del manguito rotador o artropatía por cuff-tear. El sistema se compone de un vástago humeral estándar, espaciador diafisario, glenosfera de Co-Cr-Mo, cabeza humeral reversa de UHMWPE, fijador glenoideo impreso en 3D trabecular, tornillos y tuercas de bloqueo. El vástago humeral proximal presenta un perfil oval recubierto con polvo de titanio puro y orificios pasantes para la sutura de tejidos blandos periarticulares.\n\nEl fijador glenoideo utiliza tecnología de impresión 3D de metal trabecular y una estructura excéntrica patentada que evita la formación de la muesca glenoidea inferior (scapular notching). Sus tornillos universales bloqueados recubiertos de titanio permiten una angulación variable de 0° a 30°, logrando una fijación primaria rígida y una osteointegración secundaria sólida. Incluye un convertidor modular que permite la transición entre hombro anatómico y reverso con mínima morbilidad ósea.",
  207: "La prótesis tumoral de articulación de hombro está indicada para procedimientos de salvamento de extremidad superior y reconstrucción articular cementada tras resecciones oncológicas extensas de tumores óseos primarios y metastásicos del húmero proximal, así como defectos óseos masivos por trauma grave. El sistema modular está compuesto por un componente de húmero proximal anatómico, segmentos diafisarios de osteotomía de longitudes modulares variables, vástago intramedular cementado, componentes anatómicos universales y componentes reversos universales.\n\nEl húmero proximal, los segmentos diafisarios y el vástago intramedular están fabricados en piezas forjadas de aleación de titanio Ti-6Al-4V conformes a la norma YY 0117.1; el convertidor de hombro anatómico en barras de TC4 conforme a GB/T 13810; y la cabeza humeral en aleación fundida de cobalto-cromo-molibdeno (Co-Cr-Mo) conforme a YY 0117.3. El vástago intramedular está disponible en 24 especificaciones y diámetros, permitiendo adaptarse con precisión a la anatomía individual y a la longitud de resección requerida.",
  213: "El sistema modular de prótesis de rodilla comprende modelos GTDX y GTXX. Los cóndilos femorales están fabricados en aleación fundida de cobalto-cromo-molibdeno (Co-Cr-Mo); los vástagos intramedulares femorales y tibiales, segmentos de osteotomía, espaciadores de ajuste Tipo 1, ejes centrales y conectores en T están hechos de aleación de titanio forjado (Ti6Al4V) con superficies anodizadas; la bandeja tibial y los manguitos condilares externos se fabrican mediante manufactura aditiva 3D por haz de electrones (EBM) en polvo de aleación de titanio biomimético Ti6Al4V ELI; y los insertos tibiales, bujes y componentes de constricción están hechos de UHMWPE moldeado.\n\nDiseñada para su uso con cemento óseo, está indicada para artroplastia de reconstrucción en presencia de tumores óseos, fracturas conminutas graves y defectos óseos masivos por revisiones múltiples.",
  224: "La copa acetabular de rugosidad uniforme con micro-ranuras (Tipo 60/58) está fabricada en titanio puro de grado médico con tecnología de tratamiento superficial de alta fricción.\n\nSu superficie externa presenta una textura rugosa uniforme combinada con micro-ranuras circunferenciales que multiplican el área de contacto y la adherencia mecánica inicial al lecho óseo. Incorpora orificios perimetrales para tornillos que permiten fijación rígida en acetábulos con pérdida ósea severa, reconstrucciones tumorales y revisiones complejas.",
  226: "La prótesis de articulación de rodilla de nuevo tipo axial es un sistema de reconstrucción y rescate articular complejo. Los cóndilos femorales están fabricados en aleación de cobalto-cromo-molibdeno o aleación Ti6Al4V; la bandeja tibial, vástagos intramedulares femorales y tibiales, segmentos diafisarios de osteotomía, manguitos de refuerzo, eje central y conectores de tres vías son de aleación de titanio forjado Ti6Al4V con tratamiento de anodizado superficial; el inserto tibial, almohadillas de ajuste, manguitos y bujes son de UHMWPE.\n\nSuministrado en empaque estéril por irradiación con 5 años de vida útil. Indicada para artroplastia de rescate en presencia de grandes defectos óseos causados por tumores óseos (osteosarcomas), fracturas conminutas severas o revisiones múltiples.",
  227: "El molde de fraguado de cemento óseo para rodilla consta de un componente de molde femoral, un componente de molde tibial y un conjunto de bloques de medición de brecha articular. El molde femoral se compone de cubierta superior, cubierta inferior, plataforma de desmoldeo, tornillos de desmoldeo y hebillas de fijación; el molde tibial se compone de cubierta superior, cubierta inferior, manguito tibial, tornillos de desmoldeo y hebillas; el conjunto de medición incluye bloques de 5 mm, 10 mm y 12 mm.\n\nTodos los componentes están fabricados en polipropileno de grado médico (PP-R) antiadherente. Suministrado estéril (óxido de etileno, EO) para un solo uso. Indicado para la preparación intraoperatoria de espaciadores temporales femorales y tibiales de cemento óseo con antibiótico durante la artroplastia de revisión en dos tiempos por infección periprotésica.",
  228: "El molde para conformación de espaciadores de cemento óseo de cadera consta de módulos para el vástago femoral y cabezas femorales de diferentes diámetros. Fabricado en polipropileno de grado médico antiadherente de alta resistencia (PP-R), se suministra en empaque estéril desechable para un solo uso.\n\nDiseñado con mecanismo de apertura rápida y roscas de desmoldeo, permite la preparación intraoperatoria de espaciadores temporales de cadera cargados con antibióticos específicos durante cirugías de revisión en dos tiempos por infección articular periprotésica.",
  24: "El sistema de navegación quirúrgica Huanghe INS-2 es el primer robot inteligente portátil para artroplastia unicompartimental de rodilla (UKA), que integra dispositivos manuales inteligentes de fresado y desbastado óseo submilimétrico. Incorpora un avanzado sistema de control de límites de seguridad (boundary control) con tiempo de respuesta en milisegundos, que detiene automáticamente el fresado rotatorio si la fresa sobrepasa la frontera ósea planificada, protegiendo con total certeza los ligamentos y estructuras neurovasculares críticas.\n\nUtilizado junto con prótesis unicompartimentales de rodilla certificadas, el sistema asiste al cirujano en la planificación intraoperatoria 3D, verificación de la alineación, visualización tridimensional en tiempo real, desbastado óseo guiado por navegación, control milimétrico de profundidad y evaluación biomecánica final en artroplastia unicompartimental medial o lateral, preservando el volumen óseo sano y logrando una recuperación postoperatoria inmediata.",
  59: "El sistema robótico portátil Changjiang INS-1 para artroplastia total de rodilla es un dispositivo pionero de navegación quirúrgica computarizada con instrumental motorizado de mano. Su tecnología de seguimiento óptico continuo permite la monitorización milimétrica de las referencias anatómicas femorales y tibiales, compensando activamente cualquier desplazamiento o movimiento del paciente durante la cirugía y eliminando los errores instrumentales convencionales.\n\nDiseñado para su uso en combinación con prótesis de rodilla validadas, el sistema asiste al cirujano en la planificación intraoperatoria, guía y navegación en el posicionamiento de las guías de corte y corte óseo, verificación inmediata del eje mecánico y balance ligamentario en flexoextensión, y evaluación postoperatoria cuantitativa en artroplastia total de rodilla (ATR) en pacientes adultos, asegurando una restauración biomecánica natural de la extremidad inferior.",
  139: "El sistema de navegación quirúrgica para artroplastia de cadera Changjiang INS-1 es el primer robot quirúrgico portátil inteligente del mundo que integra navegación óptica tridimensional de alta precisión con un sistema motorizado manual de fresado y colocación. Su diseño modular compacto elimina la necesidad de voluminosos carros robóticos tradicionales en el quirófano, integrando sensores ópticos avanzados y algoritmos de control adaptativo con percepción autónoma y compensación activa del temblor quirúrgico en tiempo real.\n\nDesarrollado para su uso conjunto con prótesis de cadera certificadas, el sistema ejecuta la planificación preoperatoria tridimensional, registro y alineación intraoperatoria de referencias anatómicas, preparación y fresado asistido del lecho acetabular, verificación de la preparación femoral, posicionamiento y orientación milimétrica de los implantes con navegación continua, y evaluación técnica postoperatoria en artroplastia total de cadera en pacientes adultos, garantizando una orientación óptima de la copa y reducción del riesgo de luxación.",
  161: "La prótesis para articulación de dedo del pie está diseñada específicamente para la artroplastia y reconstrucción de la primera articulación metatarsofalángica (MTF). Fabricada a partir de aleación biocompatible de cobalto-cromo-molibdeno (Co-Cr-Mo) de alta pureza con acabado pulido quirúrgico y superficie de rodamiento en polietileno de ultra alto peso molecular (UHMWPE) de alta resistencia al desgaste.\n\nSu arquitectura modular permite una intercambiabilidad total de cabezas metatarsianas de alturas variables combinadas con vástagos metatarsianos y bases falángicas de diversos diámetros y longitudes, acomodándose a cualquier morfología del canal medular. Indicada para la fijación con cemento óseo en casos de hallux rigidus severo, artritis reumatoide y artrosis destructiva incapacitante, restaurando la cinemática articular y la propulsión natural de la marcha.",
  162: "La prótesis no cementada para articulaciones de los dedos de la mano está indicada para el reemplazo anatómico de las articulaciones metacarpofalángicas (MCF) y de las articulaciones interfalángicas proximales (IFP) del segundo al quinto dedo. Fabricada con un diseño de vástagos dobles aplanados en aleación de titanio biocompatible de alta elasticidad combinados con un núcleo articular flexible de larga vida a la fatiga.\n\nSu arquitectura de fijación elástica de vástago plano permite el ajuste libre y equilibrado de la tensión de los ligamentos colaterales, aumentando notablemente la estabilidad de la implantación sin requerir cemento óseo. Indicada para pacientes con artritis reumatoide deformante y osteoartritis severa no respondedoras al tratamiento conservador, restaurando el arco de prensión, alineación axial y destreza manual funcional.",
  163: "El vástago de reconstrucción de cabeza femoral es un dispositivo biomecánico de soporte estructural avanzado fabricado en aleación de titanio biomimética con estructura trabecular porosa altamente interconectada. Diseñado para insertarse mediante abordaje percutáneo guiado en el canal de descompresión central de la cabeza femoral, sustituyendo la necesidad de injertos corticales avasculares tradicionales.\n\nProporciona un soporte mecánico rígido inmediatamente debajo del hueso subcondral de la cabeza del fémur, deteniendo el progreso de la necrosis y retrasando o previniendo el colapso de la superficie esférica articular. Indicado para pacientes adultos con osteonecrosis de cabeza femoral (ONFH) en estadios tempranos Steinberg/ARCO I y II sin colapso, preservando la articulación nativa de la cadera y posponiendo indefinidamente la necesidad de una artroplastia protésica total.",
  173: "El tallo femoral cementado de revisión Modelo BC2 es un implante de longitud extendida fabricado en aleación forjada de cobalto-cromo-molibdeno (Co-Cr-Mo) de alta resistencia a la fatiga con acabado quirúrgico pulido a espejo sin collarín. Opera bajo el principio de cuña cónica doble autocentrante (taper-slip), que transforma las cargas axiales en fuerzas de compresión hidrostáticas radiales sobre el manto de cemento.\n\nDiseñado con bordes redondeados y canal proximal reforzado, se acompaña de un centralizador distal de polietileno que garantiza una distribución concéntrica y uniforme del cemento óseo en fémures con conductos ensanchados o defectos óseos proximales. Indicado para cirugías de revisión de cadera y pérdida ósea trocantérica en pacientes osteoporóticos o de edad avanzada, asegurando una fijación estable a largo plazo.",
  183: "La prótesis diafisaria de segmento largo es un sistema modular de reconstrucción masiva fabricado en aleación forjada de titanio Ti-6Al-4V de grado médico de alta resistencia biomecánica. Diseñada para su uso independiente en el tratamiento de defectos óseos diafisarios segmentarios masivos de fémur y tibia causados por tumores óseos, traumatismos de alta energía o fracasos de injertos óseos autólogos y aloinjertos.\n\nIncorpora segmentos diafisarios intermedios cilíndricos y cónicos con extremos de bloqueo axial y vástagos de anclaje intramedular ranurados que permiten una fijación rígida con tornillos transversales bicorticales. Restaura de forma inmediata la continuidad ósea de la extremidad, soportando la carga funcional completa y promoviendo la rehabilitación precoz del paciente sin depender de la consolidación biológica del injerto.",
  185: "La prótesis de articulación patelofemoral es un sistema de reemplazo parcial de rodilla diseñado específicamente para el tratamiento de la artrosis trócleo-rotuliana aislada. Fabricada en aleación fundida de cobalto-cromo-molibdeno (Co-Cr-Mo) pulida a espejo con componente rotuliano de polietileno de ultra alto peso molecular (UHMWPE) de alta resistencia.\n\nPresenta una tróclea anatómica extendida proximalmente con diseño de baja restricción que garantiza una trayectoria rotuliana suave y continua durante toda la flexión, eliminando el dolor anterior de rodilla y las crepitaciones. Su geometría de resección ósea conservadora preserva intactos los cóndilos femorales, la meseta tibial y todos los ligamentos cruzados y colaterales, manteniendo la cinemática nativa de la rodilla.",
  202: "La prótesis de superficie de hombro (resurfacing humeral) es un implante anatómico no cementado diseñado para la reconstrucción conservadora de la superficie articular de la cabeza humeral. Compuesta por una cúpula esférica de aleación de cobalto-cromo-molibdeno (Co-Cr-Mo) pulida a espejo cuya cara interna cuenta con un recubrimiento biológico bicapa de titanio poroso e hidroxiapatita (Ti + HA) por plasma spray.\n\nSu vástago central corto de fijación cruciforme o cónica proporciona una estabilidad primaria inmediata sin invadir la diáfisis del húmero, preservando la totalidad del cuello anatómico y el stock óseo humeral. Indicada para artrosis glenohumeral, necrosis avascular temprana y artritis postraumática en pacientes jóvenes y activos, facilitando una rápida rehabilitación articular.",
  210: "La prótesis total de articulación de codo es un sistema semiconstreñido de artroplastia articular compuesto por un componente humeral, un componente cubital, un eje o pasador de bisagra con mecanismo de bloqueo y bujes de polietileno UHMWPE de alta durabilidad. Los vástagos están fabricados en aleación forjada de cobalto-cromo-molibdeno (Co-Cr-Mo) o aleación de titanio de grado médico de máxima resistencia a la fatiga.\n\nDiseñada para su implantación con cemento óseo, su bisagra con laxitud rotacional controlada de ±5° a 7° distribuye eficazmente las fuerzas de torsión reduciendo el estrés sobre la interfaz cemento-hueso. Indicada para artroplastia primaria y cirugías de revisión en artritis reumatoide avanzada, fracturas conminutas distales de húmero no reconstruibles y anquilosis o rigidez postraumática severa del codo.",
  211: "La prótesis modular de cabeza radial está indicada para el reemplazo anatómico de la cúpula radial del codo en fracturas complejas no sintetizables (Mason Tipos III y IV) y secuelas degenerativas o postraumáticas severas. Fabricada en aleación forjada de cobalto-cromo-molibdeno (Co-Cr-Mo) con acabado pulido quirúrgico que garantiza una articulación congruente y suave contra el cóndilo humeral (capitellum) y la escotadura radial del cúbito.\n\nSu diseño modular de conexión cónica rígida permite combinar cabezas de múltiples alturas y diámetros con vástagos lisos o roscados de longitud variable, restableciendo de forma milimétrica la longitud del radio y la tensión de los ligamentos colaterales laterales. Previene eficazmente la migración proximal del radio, el dolor crónico de muñeca y la inestabilidad en valgo del codo.",
  212: "La prótesis anatómica de cabeza radial es un implante de última generación diseñado para replicar fielmente la morfología asimétrica nativa de la cúpula radial y su relación biomecánica con la escotadura menor del cúbito. Fabricada en aleación de cobalto-cromo-molibdeno biocompatible con cabeza excéntrica biselada y vástago intramedular recubierto de titanio poroso en su porción metafisaria.\n\nA diferencia de las cabezas esféricas simétricas convencionales, su perfil elíptico anatómico elimina el pinzamiento cubital durante los movimientos de pronosupinación y reduce las fuerzas de contacto sobre el cartílago del capitellum. Indicada para hemiartroplastia de codo por fracturas conminutas y revisiones articulares, logrando una cinemática fisiológica sin restricciones de movilidad.",
  217: "El modelo anatómico óseo personalizado impreso en 3D es una réplica biomédica a escala 1:1 fabricada a partir de los datos de tomografía computarizada (TC) de alta resolución del paciente mediante tecnología aditiva de estereolitografía láser (SLA) con resinas fotosensibles de grado médico de alta fidelidad dimensional. Comprende 16 tipos de modelos diseñados para reproducir con máxima exactitud los defectos óseos y lesiones tumorales en pelvis, extremidades, columna, cráneo y tórax.\n\nProporciona una visualización tridimensional táctil invaluable que permite al equipo quirúrgico formular y ensayar protocolos quirúrgicos complejos, preformar placas de osteosíntesis, seleccionar implantes adecuados y anticipar dificultades anatómicas antes de ingresar a quirófano. Suministrado en empaque no estéril para uso preoperatorio único, optimiza el éxito de las cirugías ortopédicas reconstructivas complejas.",
  219: "La guía de osteotomía de rodilla impresa en 3D es un instrumental quirúrgico específico de paciente (PSI) fabricado mediante sinterizado selectivo por láser (SLS) en poliamida médica de alta resistencia (PA12). Diseñada a partir de la reconstrucción tridimensional de la tomografía del paciente, calca con exactitud la topografía ósea de la cortical del fémur distal o la tibia proximal.\n\nIncorpora ranuras de corte calibradas y orificios de fijación temporal con agujas de Kirschner que guían la sierra quirúrgica con una inclinación, rotación y profundidad milimétricamente planificadas. Indicada para osteotomías correctoras de varo/valgo, osteotomías de desrotación y alineación en artroplastia de rodilla, reduciendo el traumatismo del periostio y prescindiendo del fresado endomedular.",
  220: "La guía quirúrgica de osteotomía de cadera impresa en 3D es un dispositivo médico personalizado fabricado mediante manufactura aditiva en poliamida biocompatible (PA12) adaptado a la morfología tridimensional de la pelvis y fémur proximal de cada paciente. Dispone de trece modelos específicos que proporcionan posicionamiento, orientación y protección continua durante el acto quirúrgico.\n\nPermite ejecutar con máxima seguridad osteotomías periacetabulares de Ganz, osteotomías femorales desrotadoras/varizantes y cortes femorales de resección de cuello en artroplastia total de cadera compleja. Protege activamente el nervio ciático, la arteria femoral y la cápsula articular, garantizando la angulación y el centro de rotación exactos planeados preoperatoriamente.",
  221: "La guía quirúrgica personalizada para pequeñas articulaciones de las extremidades está fabricada en polvo de poliamida médica (PA12) mediante tecnología de manufactura aditiva por sinterizado selectivo láser (SLS). Diseñada de forma monobloque e individualizada para adaptarse a las complejas curvaturas anatómicas de los huesos de la mano, muñeca, tobillo y antepié.\n\nEspecialmente indicada para cirugías de corrección de hallux valgus (osteotomías de Scarf, Chevron o Akin), osteotomías de acortamiento radial/cubital en la muñeca y corrección de secuelas de fracturas en huesos pequeños. Proporciona guías de corte y perforación de clavos de fijación milimétricas que aseguran una alineación perfecta sin riesgo de fracturas iatrogénicas de fragmentos óseos delicados.",
  222: "La copa acetabular integral Tipo 60 con superficie micro-ranurada es un implante de reconstrucción pélvica fabricado en aleación forjada de titanio biocompatible de grado médico con tecnología de texturizado superficial de micro-ranuras circunferenciales de alta fricción mecánica. Su geometría de cobertura optimizada proporciona una fijación biológica no cementada inmediata sobre lechos acetabulares severamente comprometidos.\n\nIncorpora múltiples orificios avellanados perimetrales estratégicamente orientados para tornillos de anclaje óseo en el ilion, isquion y pubis, combinados con micro-ranuras que multiplican la resistencia al torque y cizallamiento. Indicada para reconstrucción acetabular tras resección tumoral, fracturas complejas conminutas de pelvis no sintetizables y revisiones de cadera con pérdida ósea severa (Paprosky Tipo III), restaurando la estabilidad de la marcha.",
  223: "El sistema de posicionamiento y tracción DAMIS es un dispositivo quirúrgico ortopédico integral desarrollado para facilitar la artroplastia total de cadera mediante abordaje anterior directo mínimamente invasivo (DAA). Fabricado en acero quirúrgico inoxidable de alta resistencia y componentes de aleación ligera anodizada, se acopla de manera universal a las mesas de operaciones estándar del quirófano.\n\nPermite controlar y visualizar de forma paramétrica y micrométrica la fuerza de tracción longitudinal, los ángulos de rotación de la pierna y las alturas de hiperextensión del fémur, logrando una exposición perfecta y atraumática del canal femoral sin seccionar los músculos pelvitrocantéricos. Reduce la hemorragia, preserva la musculatura nativa y permite al paciente caminar el mismo día de la cirugía.",
  225: "El implante reconstructivo personalizado 3D es una prótesis registrada a medida fabricada íntegramente mediante manufactura aditiva por haz de electrones (EBM) o fusión selectiva por láser (SLM) en aleación de titanio biocompatible de grado médico (Ti6Al4V ELI). Cada pieza se diseña de manera individualizada a partir de la anatomía patológica exacta del paciente obtenida mediante segmentación tomográfica 3D.\n\nIntegra de forma continua regiones sólidas corticales de carga axial con estructuras trabeculares porosas de gradiente biológico que replican la elasticidad ósea nativa, eliminando el blindaje de tensiones y promoviendo una osteointegración masiva. Indicado para rescates articulares complejos, reconstrucción tras resección de tumores óseos esqueléticos y graves secuelas de traumatismos donde las prótesis convencionales no son viables.",
  229: "El conjunto de cánula y mezclado para cemento óseo es un sistema instrumental desechable de un solo uso diseñado para la preparación homogénea, desgasificación al vacío e inyección presurizada de cemento óseo acrílico (PMMA) en artroplastias articulares. Consta de un mezclador cerrado con puerto de aspiración al vacío, pistón presurizador, pistola de extrusión ergonómica y cánulas femorales y acetabulares graduadas.\n\nSu mecanismo de mezcla al vacío elimina eficazmente la porosidad y las microburbujas de aire en el cemento, aumentando significativamente la resistencia mecánica y a la fatiga del manto de fijación ósea. Permite una inyección retrógrada controlada que previene la embolia de médula ósea y asegura una penetración óptima del cemento en el hueso trabecular, reduciendo el riesgo de aflojamiento aséptico de las prótesis.",
  230: "El lavador pulsátil eléctrico es un sistema médico desechable de irrigación pulsátil y aspiración simultánea de alta eficacia diseñado para la limpieza y desbridamiento tisular en cirugías ortopédicas y artroplastias. Compuesto por una pieza de mano ergonómica ligera con micro-motor eléctrico integrado, tubo coaxial de doble vía para entrada de solución salina y evacuación de detritos, y boquillas intercambiables femoral y de superficie.\n\nEmite un chorro pulsátil calibrado que remueve con rapidez grasa medular, microcoágulos, restos necróticos y detritos óseos de la superficie esponjosa sin dañar los tejidos osteoblastos viables. Limpia a fondo el lecho óseo antes del cementado, multiplicando la penetración y adherencia del cemento óseo acrílico en el hueso trabecular, reduciendo drásticamente las infecciones periprotésicas y el aflojamiento temprano de los implantes.",
  231: "La cabeza femoral de cerámica BIOLOX® delta está fabricada a partir de un material compuesto cerámico de matriz de alúmina reforzada con circonia (ZTA) de cuarta generación. Esta microestructura avanzada confiere propiedades mecánicas excepcionales combinando la altísima dureza de la alúmina con la resistencia al impacto y tenacidad a la fractura de la circonia tetragonal estabilizada con itrio.\n\nOfrece una superficie articular hidrófila con un coeficiente de fricción ultra bajo y una resistencia sobresaliente al rayado por partículas extrañas, minimizando la generación de detritos de desgaste en contacto con insertos de polietileno altamente entrecruzado (HXLPE) o copas cerámicas. Indicada para artroplastia total de cadera en pacientes jóvenes o con alta demanda de actividad física, eliminando el riesgo de alergias a metales.",
  232: "La cabeza femoral con sistema de manguito adaptador TF está diseñada para resolver discrepancias de longitud de extremidad y permitir el rescate inmediato de conos femorales desgastados o con daño superficial leve durante cirugías primarias y de revisión. Compuesta por una cabeza esférica metálica o cerámica acoplada a un manguito de titanio mecanizado de alta precisión que actúa como interfaz protectora del cono del vástago.\n\nPermite al cirujano corregir de forma milimétrica el offset femoral y la longitud de cuello intraoperatoria sin necesidad de extraer un vástago femoral firmemente osteointegrado, preservando el lecho óseo del paciente. Indicada para artroplastia total de cadera de revisión y ajustes de estabilidad articular, garantizando un bloqueo por fricción cónica rígido y eliminando el riesgo de corrosión por frotamiento (fretting corrosion).",
  66: "La sierra ósea eléctrica quirúrgica es un sistema motorizado de alta precisión diseñado para el aserrado y corte eficiente de tejido óseo en procedimientos ortopédicos, artroplastias y traumatología. Equipada con un motor profesional brushless (sin escobillas) de alta potencia basado en tecnología superconductora, entrega una potencia constante y duradera con una elevación térmica mínima sobre el tejido perióstico, reduciendo sustancialmente el riesgo de necrosis térmica ósea y operando con un nivel de ruido acústico ultra bajo.\n\nIncorpora un sistema de control de accionamiento gobernado por chip inteligente de protección múltiple (sobrecarga, sobrecalentamiento y bloqueo) junto con un botón de seguridad que previene activaciones involuntarias. Su cabezal de trabajo permite una rotación completa de 360 grados en 8 posiciones indexables para abordar cortes en cualquier ángulo anatómico, e integra un mecanismo patentado anticaída de la hoja de corte y conmutación de doble velocidad (10.000 y 12.000 oscilaciones/min) para una máxima adaptabilidad clínica.",
  67: "El taladro óseo eléctrico quirúrgico es un equipo motorizado cannulado de alto rendimiento concebido para el perforado, ensanchado y escariado óseo en cirugía traumatológica mayor, reemplazo articular y cirugía de columna. Impulsado por un motor alemán brushless de tecnología superconductora de alta gama, genera un par de torsión (torque) elevado y constante, asegurando una penetración ósea controlada y suave sin pérdida de potencia en corticales densas ni sobrecalentamiento tisular.\n\nDispone de un eje canulado de amplia luz interna compatible con el guiado concéntrico de agujas de Kirschner y clavos intramedulares. Su electrónica inteligente permite conmutar en tiempo real entre alta velocidad para perforación rápida (1.200 rpm) y baja velocidad de alto torque para fresado cotiloideo o medular (270 rpm), con cambio instantáneo de giro (avance/reversa), botón de bloqueo de seguridad y recuperación automática tras sobreesfuerzo mecánico.",
  68: "El equipo quirúrgico a batería para tejido óseo es una plataforma motorizada multidisciplinaria de alta versatilidad diseñada para osteotomías mayores, resección ósea y cirugías reconstructivas ortopédicas y torácicas. Construido con un motor sin escobillas superconductor de última generación y alimentado por una batería de litio de alta densidad energética de 4000 mAh, proporciona una autonomía prolongada durante intervenciones complejas de larga duración sin pérdida de potencia ni necesidad de recargas intraoperatorias.\n\nSu diseño modular de acople multifuncional permite transformar la unidad en sierra oscilante ortopédica o sierra esternal (sternum saw) mediante la fijación de arcos protectores estériles para precautelar el mediastino y los tejidos blandos subyacentes. Integra un microcontrolador inteligente con protección integral contra sobrecarga y sobrecalentamiento térmico, doble velocidad seleccionable (10.000 y 12.000 oscilaciones/min) y sistema de fijación firme anticaída de cuchillas para una seguridad operativa insuperable.",
};

export const PRODUCT_DESC_EN: Record<number, string> = {
  2: "The first porous tantalum interbody fusion cage manufactured via Chemical Vapor Deposition (CVD), an advanced gas-reaction process delivering structural uniformity and mechanical stability superior to conventional additive manufacturing. Its interconnected porous tantalum matrix closely mimics native cancellous bone architecture, fostering rapid vascularization and profound osteointegration.\n\nFeaturing an elastic modulus congruent with trabecular bone, it eliminates stress shielding and prevents periprosthetic bone resorption. Superior and inferior surfaces incorporate anti-migration serrations for immediate primary stability, complemented by an oversized central aperture for autologous bone grafting. Indicated for use with spinal internal fixation systems for interbody fusion across cervical (C2-T1) and lumbosacral (L2-S1) segments, effectively restoring disc height and sagittal spinal alignment.",
  14: "Posterior spinal internal fixation system utilizing the Cortical Bone Trajectory (CBT) technique, specifically engineered for pedicle instrumentation in osteoporotic patients, revision surgeries, and severe spinal stenosis. CBT directs screws from medial-to-lateral and caudo-cranial, maximizing engagement with four dense cortical zones (posterior lamina, medial and superior pedicle walls, and lateral vertebral cortex).\n\nFeatures an innovative hook-lock thread design that directs stresses vertically rather than splaying the screw tulip. Its dual-lead thread geometry reduces bone cutting by 29% while increasing pullout resistance by >30% compared to traditional trajectory screws. Locking setscrews incorporate an anti-cam-out Torx socket and burr-free break-off notches.",
  26: "Dynamic non-fusion interspinous process decompression implant indicated for skeletally mature patients with Grade 1 or 2 lumbar spinal stenosis (L1-L5) presenting with neurogenic claudication, low back pain, and functional impairment. Manufactured from medical titanium alloy, its U-shaped main body provides a broad contact footprint against adjacent spinous processes, cushioning axial compressive stress while sustaining interspinous and neuroforaminal distraction.\n\nFeatures four retentive wing plates with serrated inner ridges that control segmental rotation, preserve lumbar alignment, and actively resist kyphotic deformity. Staggered flange arrangement allows contiguous two-level implantation without mechanical impingement. Suture eyelets on the flanges facilitate secure interspinous ligament reattachment.",
  34: "The first self-stabilizing anterior lumbar interbody fusion (ALIF) cage engineered for the L1-S1 spine. It combines a biocompatible PEEK interbody spacer with an integrated titanium alloy anterior plate housing four divergent locking bone screws. The divergent screws act as an intrinsic bone-wedge anchor, delivering exceptional primary pullout resistance that prevents cage migration without requiring posterior supplementary instrumentation.\n\nA non-rigid load-sharing interface between the anterior locking plate and the PEEK body ensures balanced stress distribution across the endplates, preventing stress shielding. Available in multiple footprints, heights, and lordotic angles to accurately restore anatomical lumbar sagittal balance while reducing surgical exposure, blood loss, and operative time.",
  36: "The world's first 3D-printed suture anchor manufactured via laser beam melting (LBM) additive manufacturing using biocompatible TC4 ELI titanium alloy powder conforming to YY/T 1701 standard. This innovative technology precisely controls the anchor's elastic modulus, closely matching human cancellous bone and drastically reducing stress shielding and bone resorption around the implant. Its biomimetic rough porous surface promotes cell adhesion, tissue proliferation, and rapid osseointegration.\n\nFeaturing a high-low double-thread self-tapping design, it provides superior primary pullout fixation without requiring prior bone drilling. An independent distal suture hole prevents suture knotting and entanglement. Includes an ergonomic inserter made of 304 surgical stainless steel (YY/T 0726) and ethylene oxide sterilization with a 5-year sterile shelf life. Indicated together with matching high-strength sutures for soft-tissue-to-bone fixation in the shoulder and knee joints.",
  39: "The world's first PVD tantalum-coated suture anchor product. It combines the exceptional osteoinductive and osteogenic properties of pure tantalum with the superior elastic modulus of titanium alloy, achieving a synergistic and complementary biomechanical performance. The physical vapor deposition (PVD) tantalum coating provides extraordinary corrosion resistance, effectively sealing against the release of metallic trace elements while providing natural bacteriostatic activity to minimize postoperative surgical site infections.\n\nIt significantly enhances cellular adhesion, proliferation, and osteogenic differentiation of osteoblasts, ensuring robust bone integration. Available in two configurations: single-thread MD(I) and double-thread MD(II), with diameters spanning 3.5 mm to 6.5 mm. Indicated for rigid soft-tissue-to-bone fixation in shoulder, knee, ankle, elbow, finger, and toe joints.",
  40: "Non-absorbable high-strength surgical suture braided from multiple strands of ultra-high molecular weight polyethylene (UHMWPE) medical fiber conforming to YY/T 1431-2016 standard. Its tight braided architecture produces a smooth, uniform surface without knots, fraying, or color fading, guaranteeing long-term knot integrity and unmatched tensile strength.\n\nUncoated to maximize knot security, it is available with high-performance surgical needles manufactured from 12Cr18Ni9 medical-grade stainless steel (YY/T 0043-2016) offering sharp penetration, high elasticity, and bending resistance. Available in solid white, solid blue, and striped blue-white color combinations for quick strand differentiation during complex arthroscopic and open reconstructions. Packaged sterile with ethylene oxide for soft tissue suturing and tendon-to-bone ligation.",
  41: "Orthopedic surgical staple manufactured from high-strength medical-grade cobalt-chromium-molybdenum (Co-Cr-Mo) alloy complying with international implant standards. Engineered to provide rigid fixation and continuous compression of tendons, ligaments, and soft-tissue grafts against the bone cortex in knee and hand surgeries. The Co-Cr-Mo alloy delivers exceptional fatigue resistance and stiffness under high physiological tensile loads.\n\nIts crossbar and spiked legs feature serrated retentive teeth that prevent soft-tissue migration or slippage, while sharp tips facilitate controlled cortical bone impaction. Supplied sterile via gamma radiation with a 5-year sterile shelf life. Indicated for tendon-to-bone fixation, ligamentous reattachment, and avulsion fracture repair in knee and hand reconstructions.",
  42: "Cortical suspensory fixation system for ligament reconstruction combining a low-profile biocompatible titanium alloy button with a high-strength ultra-high molecular weight polyethylene (UHMWPE) continuous loop. Designed for femoral graft fixation in anterior and posterior cruciate ligament (ACL/PCL) reconstructions. The titanium plate features smooth recessed grooves that seat sutures and knots flush without noticeable hardware prominence, maximizing bone-to-graft contact at the tunnel aperture.\n\nOffers a comprehensive range of specifications, including individual buttons with bilateral slots, fixed-length loops, and adjustable-length loops capable of passing through small-diameter bone tunnels. Pre-loaded combination models include integrated pulling and flipping suture leads for smooth, reproducible cortical deployment. Ethylene oxide sterilized with a 5-year shelf life.",
  43: "Single-use disposable arthroscopic shaver blade engineered for efficient resection, debridement, and trimming of soft tissue, cartilage, and synovium in shoulder, knee, hip, and small-joint arthroscopy. Fabricated from imported surgical-grade stainless steel with superior hardness, it delivers enduring sharpness and cutting efficiency, enabling surgeons to rapidly and precisely manipulate articular tissue.\n\nFeatures a secure snap-lock coupling mechanism that firmly locks the blade into the handpiece, effectively preventing accidental detachment during high-speed rotation. Interfaces feature distinct color coding for immediate visual identification of tip configurations and calibers. Thoroughly tested for surface roughness and round runout, ensuring smooth vibration-free operation. Supplied sterile for single use, completely eliminating cross-infection risks and ensuring patient safety.",
  44: "PEEK material threaded anchor bolt designed for rigid soft-tissue-to-bone fixation in surgical procedures of the shoulder, ankle, knee, and elbow. Manufactured from medical-grade polyetheretherketone (PEEK), it generates zero metal artifacts on radiographs and MRI scans. Offered in a complete range of sizes and thread configurations: the MB(II) type features a partial double-thread design, while the MB(III) type provides a fully threaded shaft delivering enhanced fixation force in osteopenic bone.\n\nPre-loaded with one or two high-strength UHMWPE braided sutures in pure white and blue-white combinations for intraoperative knot identification. The inserter shaft features laser-etched depth gauge markings, making the bone seating depth clearly visible at a glance. Sterilized with ethylene oxide for a 5-year sterile shelf life.",
  45: "Interference screw manufactured from biocompatible medical-grade polyetheretherketone (PEEK), engineered for rigid femoral and tibial fixation of autografts and allografts (bone-patellar tendon-bone, hamstring, and quadriceps tendons) in anterior cruciate ligament (ACL) and posterior cruciate ligament (PCL) reconstructions. Compared to traditional metal screws, PEEK eliminates cutting or laceration of graft fibers during insertion, produces zero imaging artifacts on postoperative MRI, and prevents chronic foreign body inflammatory reactions caused by metallic debris.\n\nAvailable in model JM (individual screw) and model JQ (combination screw and protective sheath for low-density bone), offering comprehensive diameter and length selections. Cannulated for insertion over a guide wire using a universal inserter with laser depth marks on the handle. Sterilized with ethylene oxide for a 5-year sterile shelf life.",
  46: "State-of-the-art all-inside arthroscopic meniscal repair system engineered for repairing tears in the medial and lateral meniscus. The system comprises miniature fixation bars made of biocompatible medical-grade polyetheretherketone (PEEK) pre-threaded with ultra-high-strength 2-0 UHMWPE and polypropylene suture. Features a depth-limiting adjustable sheath that prevents over-penetration into the popliteal fossa, safeguarding critical neurovascular structures.\n\nIts ergonomic non-slip handle incorporates a 360° single-handed active actuation mechanism, giving the surgeon precise tactile control over the timing of implant deployment behind the joint capsule. Available in straight, 12° up-curved, and 12° down-curved needle designs to reach posterior horn, body, and vascularized red-white zone meniscal lesions. Packaged sterile with ethylene oxide for single use.",
  47: "Single-use disposable arthroscopic portal cannula engineered for the creation, protection, and maintenance of percutaneous surgical portals into joint cavities during shoulder, knee, hip, and elbow arthroscopy. Features a transparent high-clarity tube that allows direct visualization of entering instruments and facilitates snag-free suture management.\n\nIts fully threaded outer shaft provides exceptional mechanical stability within the joint capsule and surrounding soft tissues, preventing accidental cannula dislodgement or extrusion during vigorous instrument exchanges. The fully sealed silicone valve assembly effectively prevents arthroscopic irrigation fluid leakage during tool insertion and withdrawal. Ergonomically shaped for intuitive gripping and controlled insertion force, available in various calibers and lengths to suit diverse anatomical portals. Ethylene oxide sterilized for single use.",
  48: "Non-absorbable metallic self-tapping suture anchor manufactured from medical-grade titanium alloy with an anodized surface treatment for enhanced visibility and contrast under the operating microscope and arthroscope. The anchor tip features a self-tapping geometry capable of direct cortical bone engagement even without prior incision, enabling swift and atraumatic placement.\n\nIt incorporates a dual-zone thread architecture: the proximal portion features threads compatible with bone plates and specialized interfaces, while the distal shaft utilizes a cortical bone thread profile for rigid, long-term intraosseous purchase. Pre-loaded with high-strength UHMWPE braided sutures in differentiated color combinations to streamline intraoperative suture identification and knot tying. Sterilized by ethylene oxide, it is indicated for soft tissue and ligamentous reconstruction to bone.",
  49: "Single-use arthroscopic shaver burr engineered for high-precision bone abrading, resection, and contouring in subacromial decompression, notchplasty, and osteophyte resection. It comprises an inner tube and outer assembly featuring a cutting burr, drive rod, and connector hub. The cutting burr is machined from high-hardness 30Cr13 surgical stainless steel (YY/T 0294.1-2016); the drive rod is constructed from 304/06Cr19Ni10 stainless steel (GB/T 20878-2007); and the hub is molded from medical-grade polycarbonate (PC).\n\nOffers widespread compatibility with over 90% of arthroscopic power shaver systems, available in cylindrical and spherical geometries in multiple diameters. Features a secure snap-lock hub mechanism and rigorous round runout testing for vibration-free bone manipulation. Ethylene oxide sterilized with a 5-year sterile shelf life.",
  51: "Biomechanical threadless suture anchor utilizing shape-memory Nickel-Titanium (Nitinol) expanding wings for subcortical bone fixation. Upon deployment through a small-diameter drill hole, the nitinol wings expand outwards against the cancellous bone trabeculae, generating exceptional axial pullout strength. Its threadless design allows surgeons to insert the anchor directly into the pilot hole and deploy it instantly, dramatically simplifying surgical steps and saving operative time.\n\nWith micro sizes starting at just 1.3 mm, it preserves native bone bed volume, minimizing cortical disruption and accelerating recovery. Pre-loaded with one or two ultra-high molecular weight polyethylene (UHMWPE) braided sutures. Indicated for soft-tissue-to-bone fixation in adult shoulder, knee, elbow, wrist, hand, ankle, and foot surgeries.",
  52: "Disposable sterile arthroscopic portal sleeve fabricated from soft medical-grade silicone, designed to establish an elastic, atraumatic, and tissue-protective working passage in joint surgeries. Its pliable silicone construction cushions cartilage and periarticular soft tissues against instrument shear stress, while enabling the smooth entry of curved or irregularly contoured instruments for greater operational freedom.\n\nThe Type II cannula features an eccentric tip geometry that facilitates insertion, capsular passage, and tissue adherence to prevent involuntary retraction. Designed with a dual-layer watertight seal that prevents irrigation fluid leakage into subcutaneous compartments. Includes a 5 mm thick C-shaped silicone limiter pad that provides precise control over the effective cannula depth, preventing over-insertion into the joint space. Available in various calibers and lengths, supplied sterile for single use.",
  56: "Next-generation adjustable suspensory fixation system for anterior cruciate ligament (ACL) and posterior cruciate ligament (PCL) reconstructions. It pairs a biocompatible low-profile titanium cortical button with a real-time adjustable braided ultra-high molecular weight polyethylene (UHMWPE) tape featuring a proprietary one-way locking mechanism.\n\nEnables surgeons to seat the button on the femoral cortex, confirm flipping, and then progressively and independently tension the loop until the graft reaches the targeted socket depth and physiological tension, eliminating preoperative loop calculation errors and socket bottoming out. Its low profile prevents periosteal soft-tissue irritation. Ethylene oxide sterilized with a 5-year sterile shelf life.",
  57: "PEEK screw-in knotless suture anchor manufactured from medical-grade polyetheretherketone (PEEK), specifically designed for double-row rotator cuff repairs (SutureBridge) and joint instability reconstructions. The knotless technology eliminates intra-articular knot tying, lowering implant profile, avoiding subacromial knot impingement, and significantly shortening operative duration.\n\nIts cannulated hollow design facilitates osteoblast migration into the bone-implant interface, accelerating biological healing of the bone socket. Compatible with round sutures, flat suture tapes, or hybrid round-flat strands, supporting 4-strand or 8-strand suture configurations. PEEK delivers high structural stability without degradation, zero allergic response, and no MRI artifacts. Packaged sterile with ethylene oxide for a 5-year shelf life.",
  58: "Single-use disposable skin stapler designed for rapid, neat, and precise closure of surgical incisions and cut wounds in orthopedic and trauma procedures. Loaded with medical-grade surgical stainless steel staples providing high flexibility and excellent biocompatibility that form reliably without staple jams or misfires. Its uniform firing force and ergonomic trigger ensure accurate staple positioning with minimal hand fatigue.\n\nFormed staples maintain a designated clearance height above the skin, minimizing compressive tissue trauma, facilitating blood supply, and resulting in superior cosmetic healing with minimal scarring. The smooth polished staple finish eliminates skin tearing upon insertion and simplifies post-op staple removal. Ethylene oxide sterilized for single use.",
  69: "Spinal titanium cable fixation system engineered for flexible, high-tensile posterior cervical stabilization. Indicated for sublaminar wiring, spinous process cerclage, and facet fixation across C1-C7 segments, utilized either standalone or alongside posterior screw-rod constructs. Each cable comprises 49 braided micro-filaments configured as 7 bundles of 7 strands, featuring a calibrated 1.08 mm outer diameter that provides exceptional pliability and fatigue resistance compared to monofilament wires.\n\nEquipped with a low-profile single-head locking clip offering up to 20° angular adjustability, facilitating ergonomic tensioning without dural or neural impingement. Biocompatible titanium construction eliminates galvanic corrosion and dampens peak stress on fragile osteoporotic posterior elements.",
  70: "3D-printed interbody fusion cage produced via additive manufacturing using medical-grade biocompatible titanium alloy powder. Engineered for interbody fusion in degenerative disc disease, spondylolisthesis, canal stenosis, and pseudarthrosis. Incorporates a biomimetic trabecular micro-porous structure with 50% to 80% interconnected porosity that mirrors human cancellous bone.\n\nThis tailored porosity delivers an elastic modulus closely matching trabecular bone, suppressing stress shielding while accelerating osteoblast migration, angiogenesis, and deep bone ingrowth. High surface frictional coefficient prevents postoperative migration and delivers outstanding resistance against endplate subsidence. Offers dedicated cervical (IVE and IVN for C2-T1) and thoracolumbar (IVC, IVD, and IVO for T2-S1) models with anatomically pre-lordosed endplates.",
  71: "Modular posterior occipitocervicothoracic fixation system engineered for rigid internal stabilization from the occiput down to T3. Indicated for craniocervical junction instability, traumatic fractures, cervical spondylolisthesis, and complex reconstructions. The construct integrates a rigid anatomical midline occipital plate supplemented with lateral screw holes, along with pre-bent, pre-cut 3.5 mm and 4.0 mm titanium rods that eliminate intraoperative rod contouring stresses.\n\nFeatures extreme-angle polyaxial screws tailored to anatomical constraints: lateral mass screws (<20 mm length) boasting a 100° multi-directional cone of angulation, and pedicle screws (>20 mm length) featuring a 90° swing angle, ensuring effortless rod capture without forceful reduction.",
  72: "Titanium mesh interbody fusion cage engineered for anterior column reconstruction and vertebral body replacement in the cervical, thoracic, and lumbar spine following corpectomy for tumors, complex fractures, or osteomyelitis. Features a fenestrated tubular mesh geometry allowing omnidirectional bone through-growth across all wall planes.\n\nAvailable in pre-cut lengths with 1 mm to 2 mm increments, completely eliminating the need for intraoperative trimming and debris generation. Corrugated edges facilitate tactile gripping and rapid insertion. Accompanied by arcuate parallel and lordotic end caps available in nine cross-sectional footprints that conform tightly to vertebral endplates, distributing axial stresses, preventing cage subsidence, and providing under-cap pockets for dense bone graft packing.",
  149: "Non-absorbable metallic suture anchor manufactured via 3D additive printing from medical TC4 ELI titanium alloy powder conforming to YY/T 1701 standard. It features an advanced high-low dual-thread design that optimizes cortical and cancellous fixation, delivering superior soft-tissue holding force in reconstructive surgery. The self-tapping tip allows smooth, direct insertion without the need for pre-drilling. An independent double-hole eyelet design prevents sutures from intertwining or knotting during surgery.\n\nPre-loaded with two braided sutures made from white UHMWPE and blue polypropylene for instant strand differentiation during intraoperative knotting. The inserter shaft, made of 304 surgical stainless steel (YY/T 0726), features laser depth markings for clear visual confirmation of seating depth. Sterilized with ethylene oxide with a 5-year shelf life. Indicated for soft-tissue-to-bone reconstructive procedures for avulsions and tears in shoulder, knee, ankle, elbow, and small joints.",
  150: "Innovative metal-free 'All-Suture' textile anchor system composed entirely of an ultra-high molecular weight polyethylene (UHMWPE) braided anchor sheath, UHMWPE traction sutures, and an ergonomic surgical stainless steel inserter (YY/T 0294.1). Upon deployment through a sub-millimetric drill hole and applying tension to the active firing handle, the braided sleeve bunches and expands into a dense ball beneath the subcortical bone, delivering immense pullout resistance while preserving native bone stock.\n\nBecause it contains no rigid metal or bulky thermoplastic components, it eliminates stress shielding and produces zero artifacts on CT scans and MRI examinations. The Fix(I) concealed sleeve design shields the pre-loaded anchor within the inserter tip for smooth arthroscopic entry. Pre-loaded with single or multiple round UHMWPE sutures in solid white, solid blue (cobalt-chrome dye), and striped blue-white. Packaged sterile with ethylene oxide for a 5-year shelf life. Indicated for soft-tissue-to-bone fixation in shoulder, knee, foot/ankle, hip, elbow, and hand/wrist joints.",
  151: "The PEEK suture anchor is manufactured from medical-grade polyetheretherketone (PEEK), a biocompatible thermoplastic featuring an elastic modulus closely matching human cortical bone. This biomechanical congruence eliminates stress shielding, promotes physiological load transfer, and produces zero artifacts on postoperative MRI and X-ray imaging. Its hollow cannulated geometry reduces overall implant foreign body volume while providing a structural scaffold for biological bone ingrowth.\n\nIt comes pre-loaded with high-tenacity braided ultra-high molecular weight polyethylene (UHMWPE) sutures in white and blue-white combinations, ensuring frictionless passage through tendon tissue and reliable knot holding. Sterilized with ethylene oxide for a 5-year sterile shelf life. Indicated for rotator cuff repairs, Bankart and SLAP procedures, and ligament reconstructions in ankle, knee, and elbow joints.",
  152: "PEEK knotless knit-in suture anchor designed for push-in / knock-in impaction deployment, manufactured from medical-grade polyetheretherketone (PEEK). The knock-in implantation method provides an exceptionally convenient clinical workflow, allowing surgeons to precisely tension the soft-tissue construct prior to final anchor engagement without requiring manual knot tying.\n\nFabricated from biologically stable PEEK, it eliminates stress shielding, resists degradation, and ensures artifact-free postoperative MRI imaging. Available in an extensive range of specifications with diameters spanning 1.8 mm to 9.0 mm, perfectly matching diverse anatomical needs from small extremity repairs to major joint reconstructions. Packaged sterile with ethylene oxide for a 5-year shelf life. Indicated for soft-tissue-to-bone fixation in foot, ankle, knee, hand, wrist, elbow, shoulder, and hip procedures.",
  154: "The world's first spinal lamina fixation and reshaping plate manufactured via 3D printing additive manufacturing from medical-grade biocompatible titanium alloy, protected by invention patents. Engineered for expansive laminoplasty and spinal canal decompression in cervicothoracic segments (C3-T3).\n\nIts 3D-printed architecture incorporates porous trabecular transition zones that eliminate the need for supplemental bone grafting, effectively bridging bone defects while optimizing decompression volume. The inner plate surface features a mirror-polished finish to safeguard the dural sac and minimize soft-tissue irritation. Multi-hole screw configurations conform accurately to vertebral osteotomy cuts, delivering superior primary fixation stability and operative versatility.",
  155: "3D-printed porous vertebral body prosthesis manufactured via additive manufacturing from medical-grade biocompatible titanium alloy. Engineered for anterior column reconstruction and vertebral body replacement following corpectomy or vertebrectomy for spinal tumors, burst fractures, and severe infections. Available as Model I-A for cervical reconstruction and Model I-B for the thoracolumbar spine.\n\nIts biomimetic trabecular micro-architecture matches the elastic modulus of cancellous bone, mitigating stress shielding and subsidence. Anatomically contoured superior and inferior endplates, offered in diverse lordotic and kyphotic angles, conform precisely to adjacent vertebral endplates to restore sagittal alignment while creating an osteoinductive microenvironment for vascularization and bone ingrowth.",
  156: "Modular expandable artificial vertebral body replacement system designed for structural thoracolumbar reconstruction (T1-L5) following vertebrectomy for tumors, trauma, and severe kyphotic collapse. Its spacious hollow open cage architecture accommodates large autologous bone graft volumes, promoting accelerated through-growth fusion.\n\nAnatomically contoured superior and inferior endplates feature arcuate concave-convex profiles that match adjacent vertebral endplate topography, maximizing contact area and drastically minimizing subsidence incidence. Retentive serrations achieve immediate post-implantation self-stabilization, preventing posterior retropulsion into the spinal canal. Its central cylindrical distraction mechanism enables smooth defect insertion and rigid locking at the intended distraction height.",
  157: "Zero-profile self-stabilizing cervical interbody fusion cage engineered for anterior cervical discectomy and fusion (ACDF). The integrated implant combines a biocompatible PEEK spacer with an anterior titanium plate that sits flush entirely within the disc space, achieving zero anterior profile. Bone screws incorporate an innovative self-locking ring mechanism that firmly locks the screws to the plate while actively preventing screw back-out.\n\nBy eliminating conventional anterior cervical plates, it minimizes retraction and friction against the esophagus and prevertebral tissues, drastically reducing the incidence of postoperative dysphagia. Available in zero-notch lordotic configurations of 0°, 4°, 6°, and 8° with an expansive graft window.",
  158: "Pure titanium spinal lamina fixation plate system engineered for expansive open-door laminoplasty in cervical and upper thoracic stenosis (C3-T3). Fabricated from pure medical titanium with superior plasticity, allowing precise intraoperative contouring to patient anatomy.\n\nFeatures an integrated lamina retention slot that rigidly locks the elevated laminar edge without requiring bone graft, securely maintaining spinal canal expansion and decompressing the thecal sac. Its low-profile design prevents irritation to paraspinal musculature, while a versatile multi-hole screw array delivers bicortical purchase that protects the cord while preserving motion segment kinematics.",
  159: "Minimally invasive spine (MIS) posterior internal fixation system engineered for percutaneous thoracolumbar pedicle instrumentation. Features cannulated pedicle screws equipped with integrated extra-long break-off extension towers that act as percutaneous portals for guide-wire insertion, enabling accurate screw seating through small stab incisions without open paraspinal muscle dissection.\n\nOffers three specialized thread forms, including dual-lead threads that maximize initial bone purchase and pullout strength. Locking setscrews feature square-thread geometries preventing cross-threading and a Torx socket that eliminates cam-out slippage. Compatible with pre-bent 5.5 mm and 6.0 mm titanium rods that match anatomical spinal curves.",
  160: "Posterior spinopelvic internal fixation system featuring iliac screws designed for lumbosacral stabilization and pelvic foundation anchoring in adults. Features a direct top-loading and lateral rod-to-screw connection that eliminates bulky offset connectors, significantly lowering the hardware profile beneath pelvic soft tissues.\n\nThe screw insertion point is positioned 15 mm below the posterior superior iliac spine (PSIS), avoiding destructive resection of the iliac crest and reducing postoperative donor-site pain. Cannulated for both open and minimally invasive workflows, the screws feature a smooth unthreaded proximal shank that crosses the sacroiliac joint without damaging articular cartilage, providing rigid pelvic foundation purchase against massive lumbosacral shear forces.",
  164: "Bone-cement-augmented posterior spinal internal fixation system engineered for rigid instrumentation in the thoracic, lumbar, and sacral spine in patients with severe osteoporosis, pathologic burst fractures, tumor resections, or revision cases. Cannulated pedicle screws incorporate calibrated distal side fenestrations that enable controlled, radial injection of polymethylmethacrylate (PMMA) bone cement directly into adjacent trabecular bone.\n\nThe interdigitating cement mantle provides immense pullout resistance and prevents early screw loosening. Features three specialized thread forms, including dual-lead threads for primary stability, alongside extended break-off towers compatible with both open and percutaneous minimally invasive approaches.",
  165: "The BE2 cementless femoral stem is manufactured from forged Ti-6Al-4V titanium alloy in compliance with YY 0117.1 standards. Its proximal metaphyseal surface features a plasma-sprayed bioactive dual coating of porous titanium and hydroxyapatite (Ti + HA).\n\nIt incorporates proximal longitudinal ribs providing immediate anti-rotation lock and distal flutes moderating bending stiffness. Indicated for primary total hip arthroplasty in femora with good cortical bone stock (Dorr Types A and B).",
  166: "Low-profile anterior cervical plating system engineered for anterior stabilization in cervical fractures, spondylolisthesis, degenerative disc disease, and spinal tumors. Features an anatomically pre-bent profile mirroring physiological cervical lordosis, requiring minimal to no intraoperative bending while achieving flush apposition against the vertebral cortices.\n\nLow-profile beveled edges reduce friction and mechanical irritation against delicate prevertebral structures, particularly the esophagus, lowering postoperative dysphagia rates. Incorporates an integrated anti-retraction locking mechanism that securely captures bone screws, alongside a large central graft inspection window facilitating direct visualization of graft consolidation.",
  167: "The BC (B-C1) cemented femoral stem is manufactured from forged Co-Cr-Mo alloy with a collarless surgical-grade ultra-high polish mirror finish.\n\nDesigned for implantation with acrylic bone cement, it distributes physiological loads evenly throughout the cement mantle. Its gentle taper facilitates hydrostatic settling that eliminates cement cracks, ensuring durable, long-term prosthetic fixation.",
  168: "The trabecular femoral hip stem is manufactured from forged Ti-6Al-4V titanium alloy and incorporates an integrated biomimetic trabecular titanium structure (Ti6Al4V ELI) in its proximal metaphyseal third via electron beam melting (EBM 3D printing).\n\nIts cementless design promotes accelerated biological bone ingrowth and transfers physiological loads directly to the proximal metaphysis, preventing stress shielding. Its dual mediolateral and anteroposterior taper ensures immediate axial and torsional stability.",
  169: "Spinal interbody fusion cage manufactured from biocompatible medical-grade polyetheretherketone (PEEK) polymer, engineered for cervical and thoracolumbar interbody fusion. PEEK polymer delivers mechanical compatibility with an elastic modulus closely mirroring human cortical bone, ensuring physiological stress sharing while suppressing stress shielding and periprosthetic bone loss.\n\nIncorporates reverse-serrated teeth along superior and inferior surfaces that enhance friction and prevent cage retropulsion. Anatomical lordotic angulation re-establishes disc height and restores natural spinal alignment, effectively decompressing nerve roots. Features an oversized central hollow graft chamber for maximal autologous bone packing, paired with integrated radiopaque tantalum pins for precise intraoperative fluoroscopic localization.",
  170: "The standard cementless femoral hip stem is manufactured from forged Ti-6Al-4V titanium alloy and features a plasma-sprayed bioactive dual coating of porous titanium and hydroxyapatite (Ti + HA).\n\nIts anatomical triple-tapered geometry delivers rigid metaphyseal anchoring, while its slim polished neck profile maximizes impingement-free range of motion prior to neck-liner contact.",
  171: "Patient-specific 3D-printed spinal osteotomy surgical guide manufactured via additive manufacturing from biocompatible medical-grade polyamide 12 (PA12). Reverse-engineered from the patient's high-resolution preoperative CT scan, it conforms with millimetric accuracy to the posterior laminar, spinous, and facet anatomy.\n\nDesigned for precise positioning, angular guidance, and neural canal protection during complex pedicle subtraction osteotomies (PSO), Smith-Petersen osteotomies (SPO), and severe kyphoscoliotic deformity corrections. Available in three clinical configurations: Types I and II for unilateral spinal osteotomy, and Type III for bilateral osteotomy procedures. Provides precise physical navigation that dramatically shortens operative time and lowers surgical risks such as hemorrhaging and neurological injury.",
  172: "The 160 mm revision femoral stem is manufactured from forged Ti-6Al-4V titanium alloy with a proximal rough porous coating. Specifically designed for hip revision procedures involving bone deficiency in the trochanteric and metaphyseal zones, its extended 160 mm length and anatomical taper bypass proximal bone defects to achieve rigid distal diaphyseal anchoring.\n\nDistal longitudinal flutes and a coronal slot decompression tip lower structural stiffness and significantly reduce postoperative thigh pain.",
  174: "The uncemented polyethylene acetabular liner is manufactured from highly cross-linked ultra-high molecular weight polyethylene (HXLPE).\n\nDesigned to snap-lock into uncemented shells via indexed locking tabs, it provides a congruent concave bearing surface that minimizes contact stress against the femoral head. Its stabilized microstructure delivers superior resistance to volumetric wear and fatigue.",
  175: "The metallic dual-mobility liner is manufactured from cast cobalt-chromium-molybdenum alloy (Co-Cr-Mo) with an optical-grade mirror-polished finish.\n\nDesigned to lock via taper fit into uncemented acetabular shells, it provides the ultra-low friction spherical concave bearing surface needed by mobile polyethylene liners, converting standard shells into high-performance anti-dislocation articulations.",
  177: "The G20 series trabecular metal acetabular cup is manufactured from biomimetic titanium alloy powder (Ti6Al4V ELI) via electron beam melting (EBM 3D printing). Its hemispherical shell incorporates a 70-80% porous trabecular network mimicking human cancellous bone morphology.\n\nThe G20 configuration features 3 apical screw holes for supplementary screw fixation into the dense posterosuperior iliac quadrant, providing excellent immediate primary stability and durable cementless biological fixation.",
  178: "The G40 series trabecular metal acetabular cup is manufactured from biomimetic titanium alloy powder (Ti6Al4V ELI) via electron beam melting (EBM 3D printing).\n\nSpecifically engineered for revision arthroplasty and moderate-to-severe acetabular defects, its hemispherical dome features a distributed array of countersunk screw holes (G40). This allows multi-angle screw fixation directed into any surviving bone quadrant, guaranteeing absolute primary stability in compromised acetabular beds.",
  179: "The trabecular acetabular augment block is fabricated from biomimetic titanium alloy powder (Ti6Al4V ELI) via electron beam melting (EBM) 3D printing. It features an interconnected 3D open-pore trabecular structure closely mimicking human cancellous bone morphology.\n\nDesigned to reconstruct cavitary and segmental acetabular defects of the superior rim or dome in revision surgery, it is rigidly secured to host bone using TC4 titanium screws, restoring a stable bed for acetabular cup implantation.",
  180: "The porous tantalum metal augment is a structural reconstructive implant fabricated from high-purity medical-grade tantalum via chemical vapor deposition (CVD) or additive manufacturing. Its biomimetic trabecular cellular structure features 75% to 85% porosity and a completely interconnected 400-600 µm pore size resembling native cancellous bone matrix.\n\nIndicated for structural filling of major cavitary hip bone defects (Paprosky Types II and III), it provides the highest initial coefficient of friction in orthopedics and an elastic modulus matching host bone.",
  181: "The metallic femoral head is manufactured from high-strength forged cobalt-chromium-molybdenum alloy (Co-Cr-Mo) in accordance with YY 0117.3 standards. Its spherical outer surface is mirror-polished with micrometric precision to articulate smoothly with polyethylene or metallic liners at minimal friction.\n\nIts standard internal female 12/14 Morse taper provides rigid coupling to the femoral stem, offered in multiple neck lengths for exact restoration of hip offset and leg length.",
  184: "The modular hip prosthesis is a limb-salvage reconstruction system comprising proximal hip metaphyseal components, diaphyseal osteotomy segments, total femoral connectors, and intramedullary stems fabricated from forged Ti-6Al-4V titanium alloy with an anodized surface treatment.\n\nHeavy-duty Morse taper connections secured with axial locking screws permit length-customized reconstruction of massive or segmental femoral bone defects, providing a reliable reconstructive solution in complex oncology and salvage surgeries.",
  187: "The unicompartmental knee prosthesis (mobile and fixed bearing) is indicated for partial knee replacement in cases of isolated medial or lateral unicompartmental osteoarthritis.\n\nThe femoral condyle features a single-radius spherical articular surface ensuring uniform contact stress without edge loading, paired with a dual-post design for optimized rotational stability. The highly polished tibial tray with cement pockets ensures firm, durable fixation while preserving cruciate ligaments and healthy bone stock.",
  188: "The titanium metal cable fixation system is engineered for cerclage wiring and rigid internal fixation of diaphyseal, metaphyseal, and periprosthetic fractures in upper and lower extremities. It is composed of multiple high-strength medical titanium alloy micro-wires braided helically, delivering exceptional flexibility that eliminates intraoperative kink fatigue and postoperative breakage associated with single solid wires.\n\nThe terminal end is designed with an integrated enlarged spherical bead that locks into a calibrated unidirectional tensioning mechanism, ensuring constant compression without requiring acute bending. This atraumatic profile preserves periosteal blood supply and significantly reduces soft tissue irritation. Sterilized by gamma radiation with a 5-year sterile shelf life.",
  190: "The XN Series CR (Cruciate Retaining) primary knee prosthesis consists of a cast Co-Cr-Mo femoral condyle and tibial tray, with a high-density UHMWPE tibial insert and patellar component, and optional Ti6Al4V fixation screws.\n\nSpecifically designed for patients with a competent posterior cruciate ligament (PCL), its anatomical intercondylar notch preserves natural ligamentous kinematics, while its thinned anterior condyle and deepened trochlear groove relieve soft tissue tension and ensure smooth patellar tracking.",
  191: "The Model XA Knee Joint Prosthesis comprises a femoral condyle, tibial tray, tibial insert, and patella. Indicated for primary total knee arthroplasty, it is an anatomical surface prosthesis developed based on anatomical measurement data, optimized for deep flexion and squatting kinematics.\n\nFeaturing a thinned anterior condyle and refined trochlear contour, it reduces patellar crepitus and anterior knee pain while ensuring joint stability and balanced load transfer.",
  192: "This cementless biological-fixation total knee prosthesis consists of a cast Co-Cr-Mo femoral condyle and tibial tray, with a tibial insert and patella made of Vitamin E highly cross-linked UHMWPE (VE-HXLPE).\n\nBone-interfacing surfaces feature a plasma-sprayed dual coating of porous pure titanium and hydroxyapatite (Ti + HA), accelerating osteoblast adhesion, biological ingrowth, and secure press-fit fixation without bone cement.",
  194: "High-performance knee articular bearing component featuring an ultra-high molecular weight polyethylene insert cross-linked with Vitamin E infusion (VE-HXLPE / UHMWPE) meeting ASTM F2695 standards, designed to pair with cast Co-Cr-Mo femoral condyles and tibial trays.\n\nSupplied sterile with a 5-year sterile shelf life (ethylene oxide sterilization for UHMWPE components). Compatible with system components, it is indicated as an articular bearing surface in total knee arthroplasty.",
  197: "This revision knee system comprises a femoral condyle, tibial tray, tibial insert, straight and eccentric intramedullary stems, fixation screws, adaptors, posterior and distal femoral augments, and tibial wedge blocks.\n\nThe femoral condyle and tibial tray are made of cast Co-Cr-Mo alloy; the tibial insert and plugs of Type 2 UHMWPE; and the intramedullary stems, adaptors, and screws of forged TC4 titanium alloy. Gamma-ray sterilized with a 5-year sterile shelf life. Used in conjunction with bone cement, it is indicated for complex primary or revision knee arthroplasty.",
  199: "This product consists of a femoral condyle, tibial tray, tibial insert, long screws, intramedullary pins, winged sleeves, and fixation screws; the femoral condyle is assembled from femoral condyle components, intercondylar polyethylene liners, three-way sleeves, plastic sleeves, positioning screws, and fixation screws.\n\nThe femoral condyle components and tibial tray are made of cast cobalt-chromium-molybdenum alloy; three-way sleeves, positioning screws and long screws of forged cobalt-chromium-molybdenum alloy; tibial insert, intercondylar polyethylene liners and plastic sleeves of Type 2 UHMWPE; fixation screws and intramedullary pins of forged TC4 titanium alloy; winged sleeves of TC4ELI titanium alloy via electron beam melting. All components are gamma-ray sterilized with a 5-year sterile shelf life. Compatible with components of the same system from the enterprise, it is indicated for total knee arthroplasty and revision procedures.",
  201: "Knee joint augmentation and spacer blocks consist of femoral distal Type A, femoral posterior condylar Type B, femoral Types C-F, and tibial half, half-oblique, full-oblique, and block types, along with augmentation and fixation screws. Augmentation blocks are manufactured from biomimetic titanium alloy powder (Ti6Al4V ELI) via electron beam melting (EBM) rapid prototyping.\n\nFixation screws are made of forged TC4 titanium alloy. Supplied sterile for single use, gamma-ray sterilized with a 5-year sterile shelf life. Indicated for bone defect reconstruction during knee revision surgery in conjunction with femoral condyles or tibial trays of the system.",
  203: "The bone disease shoulder joint prosthesis is a cementless biological system indicated for primary total or hemi-shoulder arthroplasty in patients suffering from osteoarthritis, avascular necrosis of the humeral head, and inflammatory arthropathies with an intact rotator cuff. The system consists of a cementless humeral stem, an anatomic eccentric humeral head, and a crosslinked UHMWPE glenoid component.\n\nThe humeral stem features a rectangular anti-rotation cross-section with proximal pure titanium plasma-sprayed porous coating to ensure rapid biological fixation and osseointegration. The eccentric anatomical humeral head offers curvature diameters ranging from 36 to 48 mm (in 2 mm increments), providing complete anatomical neck coverage and restoring native glenohumeral biomechanics for maximum pain relief and long-term joint stability.",
  205: "The biologic reverse shoulder arthroplasty (RSA) system is engineered for the reconstruction of end-stage glenohumeral joint lesions, particularly indicated for rotator cuff tear arthropathy and severe osteoarthritis. The system comprises a standard humeral stem, diaphyseal spacer, reverse glenosphere, reverse humeral cup, 3D-printed metal trabecular glenoid fixator, locking screws, and conversion nuts.\n\nThe proximal oval humerus stem features a bio-porous pure titanium powder coating and dedicated suture holes for soft-tissue reattachment. The glenoid baseplate utilizes 3D trabecular bone printing technology with an eccentric structure to prevent inferior scapular notch impingement. Titanium-coated polyaxial locking screws provide variable insertion angles from 0° to 30° for rigid glenoid fixation. An anatomical-to-reverse converter enables seamless intraoperative conversion between anatomic and reverse shoulder configurations.",
  207: "The tumor shoulder joint prosthesis is indicated for upper limb salvage and cemented joint reconstruction following extensive tumor resection of the proximal humerus and severe post-traumatic bone defects. The modular assembly comprises an anatomical proximal humerus, diaphyseal osteotomy segments, cemented intramedullary nails, universal anatomical shoulder components, and universal reverse shoulder components.\n\nThe proximal humerus, osteotomy segments, and intramedullary nail are forged from Ti-6Al-4V titanium alloy complying with YY 0117.1; the anatomical shoulder converter is fabricated from TC4 bars conforming to GB/T 13810; and the humeral head is cast from cobalt-chromium-molybdenum (CoCrMo) alloy conforming to YY 0117.3. The intramedullary nail is available in 24 specifications and varying diameters, accommodating diverse osteotomy levels and restoring patient limb length.",
  213: "Modular knee reconstruction system featuring Models GTDX and GTXX. Cast Co-Cr-Mo femoral condyles, forged Ti6Al4V intramedullary stems, diaphyseal osteotomy segments, adjustment pads, central shafts and tees with anodized surfaces.\n\nThe tibial tray and condylar outer sleeves are fabricated via electron beam melting (EBM) 3D printing using Ti6Al4V ELI titanium alloy powder, while constraint inserts and bushings are made of molded UHMWPE. Indicated for complex knee reconstructions involving massive bone loss, revision rescue, bone tumors, and severe comminuted fractures.",
  224: "The uniform rough surface acetabular cup with micro-grooves (Type 60/58) is fabricated from medical-grade pure titanium utilizing high-friction surface treatment technology.\n\nIts exterior features a uniform rough texture combined with circumferential micro-grooves that dramatically increase contact area and primary mechanical purchase. Incorporates perimeter screw holes enabling rigid fixation in acetabula with severe bone loss, tumor resections, and complex revisions.",
  226: "The new axial knee joint prosthesis is an advanced limb-salvage reconstruction system featuring Co-Cr-Mo or Ti6Al4V femoral condyles, anodized forged Ti6Al4V diaphyseal osteotomy segments, tibial tray, intramedullary stems, triaxial connector, and heavy-duty UHMWPE rotational bushings.\n\nIt restores natural flexion and rotation while dampening torsional stress concentrations. Indicated for arthroplasty in severe bone defects caused by bone tumors (osteosarcoma), comminuted fractures, or multiple revision failures.",
  227: "The knee joint bone cement spacer mold consists of femoral mold components, tibial mold components, and a joint gap measurement assembly (5 mm, 10 mm, 12 mm). The femoral mold includes top cover, lower support, demolding platform, screws and latches; the tibial mold includes top cover, lower support, sleeve, screws and latches.\n\nManufactured from medical-grade non-stick polypropylene (PP-R) conforming to YY/T 0242. Supplied sterile (ethylene oxide) for single use. Indicated for intraoperative fabrication of temporary antibiotic-impregnated cement spacers during two-stage knee revision arthroplasty.",
  228: "The hip joint bone cement spacer mold consists of modular components for the femoral stem and femoral heads of multiple diameters. Manufactured from medical-grade non-stick polypropylene (PP-R), it is supplied sterile for single-use intraoperative fabrication.\n\nDesigned with quick-release latches and demolding threads, it facilitates intraoperative preparation of temporary antibiotic-loaded cement hip spacers during two-stage revision arthroplasty for periprosthetic joint infection.",
  24: "The Huanghe INS-2 Surgical Navigation System is the pioneering handheld intelligent robotic system for unicompartmental knee arthroplasty (UKA), integrating handheld intelligent bone-milling devices. It features an advanced safety boundary control mechanism with millisecond-level responsiveness, automatically pausing high-speed grinding if the burr reaches the planned virtual boundary, strictly safeguarding crucial ligaments and neurovascular structures.\n\nEngineered for use in conjunction with validated unicompartmental knee prostheses, the system assists surgeons in 3D intraoperative planning, planning verification, real-time visualization, navigated bone grinding, precise depth and boundary control, and postoperative technical evaluation in medial or lateral unicompartmental knee arthroplasty, preserving healthy bone stock and enabling accelerated patient rehabilitation.",
  59: "The Changjiang INS-1 Knee Arthroplasty Surgical Navigation System is a pioneering handheld surgical navigation device with integrated handheld power instrumentation. Its continuous optical tracking technology delivers real-time millimeter monitoring of femoral and tibial anatomical landmarks, actively compensating for any patient limb movement during surgery and eliminating conventional instrument-related errors.\n\nEngineered for use in conjunction with validated knee prostheses, the system assists surgeons in intraoperative planning, navigated positioning of osteotomy cutting blocks, precise bone resection, immediate verification of the mechanical axis and flexion-extension ligament balancing, and quantitative postoperative evaluation in adult total knee arthroplasty (TKA), ensuring natural biomechanical restoration of the lower extremity.",
  139: "The Changjiang INS-1 Type Hip Arthroplasty Surgical Navigation System is the world's first intelligent handheld orthopedic surgical robot, seamlessly integrating high-precision 3D optical navigation with a handheld power system. Its compact modular architecture eliminates the need for bulky robotic carts in the operating theater, incorporating advanced optical sensors and adaptive control algorithms with autonomous perception that actively minimize intraoperative hand tremor in real time.\n\nEngineered for use in conjunction with validated hip prostheses, the system executes 3D preoperative planning, intraoperative anatomical registration and alignment, guided acetabular preparation, femoral canal verification, real-time navigated prosthesis positioning, and postoperative technical assessment in total hip arthroplasty (THA) in adult patients, ensuring anatomical cup orientation and minimizing dislocation risks.",
  161: "The cemented toe joint prosthesis is engineered specifically for the reconstructive arthroplasty of the first metatarsophalangeal (MTP) joint. Manufactured from high-purity biocompatible cobalt-chromium-molybdenum (Co-Cr-Mo) alloy with mirror-polished finish and an ultra-high molecular weight polyethylene (UHMWPE) articulating bearing surface offering exceptional wear resistance.\n\nIts modular architecture achieves optimal joint reconstruction by interchanging metatarsal heads of varying heights combined with metatarsal stems and phalanx bases of diverse lengths and diameters, accommodating varying canal geometries. Indicated for cemented fixation in severe hallux rigidus, rheumatoid arthritis, and disabling osteoarthritis, restoring joint kinematics and natural push-off gait dynamics.",
  162: "This cementless finger joint prosthesis is indicated for the anatomical replacement of the 2nd to 5th metacarpophalangeal (MCP) and proximal interphalangeal (PIP) joints. Fabricated with a flattened double-stem design in high-elasticity biocompatible titanium alloy combined with a durable flexible articulation engineered for extended fatigue life.\n\nIts flattened double-stem elastic fixation enables free intraoperative adjustment of collateral ligament tension while enhancing primary press-fit stability without bone cement. Indicated for rheumatoid arthritis and degenerative osteoarthritis unresponsive to conservative interventions, restoring hand grip, axial digital alignment, and fine manual dexterity.",
  163: "The femoral head reconstruction rod is an advanced structural support device manufactured from biomimetic titanium alloy featuring a 3D interconnected porous trabecular architecture. Designed for minimally invasive percutaneous insertion into the core decompression tract of the femoral head, replacing the need for traditional avascular structural bone grafting.\n\nIt provides rigid mechanical support directly beneath the subchondral bone plate, halting necrosis progression and delaying or preventing structural femoral head collapse. Indicated for adult patients with Steinberg/ARCO Stage I to II osteonecrosis of the femoral head (ONFH) prior to articular collapse, successfully preserving the native hip joint and deferring total hip arthroplasty.",
  173: "The revision cemented femoral stem Model BC2 is an extended-length hip implant forged from high fatigue-strength cobalt-chromium-molybdenum (Co-Cr-Mo) alloy with a collarless mirror-polished finish. Operating on the taper-slip double-taper principle, it converts axial physiological loads into radial compressive hydrostatic forces within the bone cement mantle.\n\nEngineered with rounded cross-sectional borders and accompanied by a dedicated distal centralizer, it guarantees an even, concentric cement mantle in wide canals or femurs with proximal bone loss. Indicated for revision hip arthroplasty and severe proximal bone deficiency in osteoporotic or elderly patients, securing durable long-term stability.",
  183: "The long-segment bone defect reconstruction prosthesis is a standalone modular limb salvage system forged from high-strength medical-grade Ti-6Al-4V titanium alloy. Indicated for segmental diaphyseal bone defects of the femur or tibia caused by bone tumors, high-energy trauma, or failed bone grafting when conventional biological methods are ineffective.\n\nIt features modular cylindrical and tapered intercalary spacers linked via reinforced morse tapers with anti-rotation cross-bolts and fluted intramedullary fixation stems with bicortical interlocking screws. It immediately restores skeletal limb continuity and load-bearing capacity, enabling early weight-bearing and functional rehabilitation without relying on biological union.",
  185: "The patellofemoral joint prosthesis is a dedicated partial knee arthroplasty system engineered for isolated patellofemoral osteoarthritis. It comprises a femoral trochlear component cast from mirror-polished Co-Cr-Mo alloy articulating against an all-polyethylene UHMWPE patellar button.\n\nIt features a proximal trochlear extension and a broad, low-constraint sulcus design that ensures seamless patellar tracking, eliminating anterior knee pain and crepitus throughout flexion. Its conservative bone-sparing resection fully preserves the femoral condyles, tibial plateau, and all cruciate and collateral ligaments, retaining native knee kinematics.",
  202: "The surface shoulder prosthesis (humeral resurfacing head) is a bone-preserving, cementless anatomical implant indicated for shoulder resurfacing arthroplasty. Fabricated with a Co-Cr-Mo alloy spherical shell whose bone-apposition inner surface is coated with a bioactive dual-layer porous titanium plus hydroxyapatite (Ti + HA) thermal plasma spray.\n\nIts short cruciform or tapered central stem delivers rigid initial fixation without violating the humeral diaphysis, preserving the native humeral neck and epiphyseal bone stock. Indicated for glenohumeral osteoarthritis, early avascular necrosis, and post-traumatic arthrosis in active patients, enabling accelerated shoulder rehabilitation.",
  210: "The total elbow joint prosthesis is a semi-constrained arthroplasty system comprising a humeral stem, an ulnar stem, medial and lateral hinge pins with secure locking mechanisms, and high-durability UHMWPE bushings. Fabricated from forged Co-Cr-Mo alloy or high-strength titanium alloy engineered for superior cyclic fatigue resistance.\n\nIndicated for use with bone cement, its semi-constrained linkage permits controlled rotational laxity (±5° to 7°), dampening torsional forces and minimizing stresses at the bone-cement interface. Indicated for primary and revision elbow arthroplasty in advanced rheumatoid arthritis, unreconstructible distal humerus comminuted fractures, and severe post-traumatic ankylosis.",
  211: "The modular radial head prosthesis is indicated for replacement in comminuted, unfixable radial head fractures (Mason Types III and IV) and disabling post-traumatic sequelae. Fabricated from forged Co-Cr-Mo alloy with a surgical mirror polish ensuring smooth, congruent articulation against the capitellum and the proximal radial notch.\n\nIts modular morse-taper connection allows intraoperative pairing of heads of various diameters and dish depths with stems of variable lengths, finely restoring radial length and lateral collateral ligament tension. It prevents proximal radial migration, wrist pain, and gross valgus elbow instability.",
  212: "The anatomic radial head prosthesis is designed to faithfully replicate the native asymmetric elliptical morphology of the radial dish and its articulation with the lesser sigmoid notch. Cast from biocompatible Co-Cr-Mo alloy with an eccentric beveled articular rim and a proximal porous titanium-coated metaphyseal stem.\n\nUnlike traditional axisymmetric spherical designs, its anatomical elliptical profile eliminates radioulnar impingement during forearm pronosupination and attenuates peak contact stresses on capitellar cartilage. Indicated as a cementless hemiarthroplasty for comminuted radial head fractures and revision cases, providing unrestricted physiological kinematics.",
  217: "The customized 3D-printed bone model is a 1:1 scale biomedical anatomical replica fabricated from patient high-resolution CT data via stereolithography (SLA) additive manufacturing using medical-grade photosensitive resin. Encompassing 16 distinct anatomical model types, it accurately replicates bone defects and lesions across the pelvis, extremities, skull, spine, and thorax.\n\nIt delivers critical tactile 3D visualization, enabling surgical teams to plan complex resection margins, pre-contour osteosynthesis reconstruction plates, and select implants prior to entering the OR. Supplied in non-sterile single-use packaging with a 3-month shelf life, it significantly enhances surgical precision in demanding orthopedic reconstructions.",
  219: "The 3D-printed knee osteotomy guide is a patient-specific surgical instrument (PSI) manufactured from medical-grade nylon (PA12) via selective laser sintering (SLS). Custom-designed from patient 3D CT reconstruction, it perfectly mirrors the unique cortical surface topography of the distal femur or proximal tibia.\n\nIt integrates calibrated osteotomy saw slots and Kirschner wire fixation holes that guide the surgical saw with pre-planned millimetric depth, slope, and rotation. Indicated for corrective varus/valgus osteotomies and navigated alignment in knee arthroplasty, eliminating intramedullary canal invasion and preserving periosteal vascularity.",
  220: "The 3D-printed hip osteotomy guide is a personalized surgical device manufactured from biocompatible polyamide (PA12) additive manufacturing, tailored to individual pelvic and proximal femoral morphology. Available across 13 specialized models, it provides intraoperative positioning, osteotomy guidance, and critical tissue protection.\n\nIt enables safe execution of Ganz periacetabular osteotomies (PAO), proximal femoral derotation osteotomies, and femoral neck resection in complex total hip replacement. It actively shields adjacent sciatic and femoral neurovascular structures, ensuring exact reproduction of planned acetabular coverage and femoral version angles.",
  221: "The personalized 3D-printed osteotomy guide for small limb joints is crafted from medical nylon powder (PA12) via selective laser sintering (SLS). Manufactured as an integrally formed custom unit tailored to the complex osseous contours of the hand, wrist, ankle, and forefoot.\n\nIndicated for hallux valgus corrections (Scarf, Chevron, Akin osteotomies), ulnar/radial shortening osteotomies, and post-traumatic malunion corrections in small bones. It provides precise saw guide slots and pre-drilled pin channels, guaranteeing exact bone wedge resection without risking iatrogenic fragmentation of delicate cortical margins.",
  222: "The Type 60 micro-grooved surface full acetabulum is an advanced pelvic reconstruction cup manufactured from medical-grade forged titanium alloy featuring circumferential micro-grooved high-friction surface texturing. Its optimized coverage geometry provides immediate cementless mechanical fixation in severely compromised acetabular bone beds.\n\nIt incorporates multi-hole screw configurations with divergent angled trajectories directed into the ilium, ischium, and pubis, combined with micro-grooves that dramatically resist shear and torsional displacement. Indicated for acetabular reconstruction after oncological resection, non-reconstructible pelvic comminuted fractures, and severe Paprosky Type III revision hip arthroplasty.",
  223: "The DAMIS Minimally Invasive Hip Surgery System is a specialized patient positioning and limb traction system engineered for direct anterior approach (DAA) total hip arthroplasty. Built from high-strength surgical stainless steel and anodized lightweight alloy components, it mounts universally onto standard hospital operating tables.\n\nIt provides controlled, parametric adjustment and visual tracking of axial traction force, leg rotation angles, and femoral hyperextension, achieving effortless proximal femoral exposure without detaching abductor or external rotator muscles. It reduces intraoperative blood loss, preserves soft-tissue integrity, and supports same-day patient ambulation.",
  225: "The custom registered 3D-printed orthopedic prosthesis is a patient-matched limb salvage implant manufactured via electron beam melting (EBM) or selective laser melting (SLM) using medical-grade Ti6Al4V ELI titanium alloy powder. Each implant is custom-modeled from high-resolution CT segmentation data to match patient-specific post-resection osseous anatomy.\n\nIt combines solid load-bearing cortical cores with biomimetic gradient trabecular lattice structures that mimic native bone elasticity, eliminating stress shielding and maximizing biological ingrowth. Indicated for complex revision arthroplasty, massive oncological bone tumor reconstructions, and structural trauma where off-the-shelf prostheses cannot achieve stability.",
  229: "The bone cement cannula assembly is a sterile, single-use closed vacuum mixing and pressurized delivery system for orthopedic acrylic bone cement (PMMA). Comprising an enclosed vacuum mixing bowl with vacuum port, pressurizing piston, ergonomic delivery caulking gun, and transparent graduated femoral and acetabular delivery nozzles.\n\nIts closed vacuum mixing mechanism effectively removes micro-air bubbles and porosity, substantially augmenting the tensile and fatigue strength of the cured cement mantle. It enables controlled retrograde canal filling, preventing fat embolism and ensuring deep trabecular interdigitation to guard against aseptic prosthetic loosening.",
  230: "The electric pulse washer is a sterile single-use orthopedic pulsed lavage and concurrent suction system designed for bone bed preparation and soft-tissue debridement. Comprising a lightweight ergonomic handpiece with an integrated electric motor, a dual-lumen coaxial irrigation and evacuation tubing harness, and interchangeable femoral and fan-spray nozzles.\n\nIt generates high-frequency pulsed saline streams that swiftly clear intramedullary fat, hematomas, necrotic bone debris, and bacteria without injuring viable osteoblasts. Thoroughly debriding cancellous bone prior to cementing, it multiplies bone cement interdigitation depth, drastically cutting down periprosthetic joint infection (PJI) rates and early loosening.",
  231: "The BIOLOX® delta ceramic femoral head is manufactured from fourth-generation zirconia-toughened alumina (ZTA) ceramic nanocomposite. This advanced microstructure delivers exceptional mechanical properties by combining the extreme hardness and wear resistance of alumina with the superior fracture toughness and impact resistance of yttria-stabilized tetragonal zirconia.\n\nIt features an exceptionally wettable hydrophilic articulating surface with an ultra-low friction coefficient and unmatched scratch resistance against third-body wear debris, minimizing volumetric wear rates against HXLPE or ceramic liners. Indicated for primary and revision total hip arthroplasty in young or highly active patients, completely eliminating metal hypersensitivity risks.",
  232: "The TF femoral ball head system with adapter sleeve is designed for immediate taper revision and intraoperative neck length restoration during primary and complex revision hip arthroplasty. It pairs a spherical modular head with an internal precision-machined titanium taper sleeve that shields the underlying trunnion.\n\nThis system allows surgeons to finely calibrate femoral offset and leg length discrepancy without removing well-fixed, well-integrated femoral stems, preserving vital bone stock. Indicated for revision total hip arthroplasty, minor trunnion damage, and recurrent instability, ensuring a robust frictional taper lock while mitigating fretting and crevice corrosion.",
  66: "The surgical electric bone saw is a high-precision motorized system engineered for the efficient cutting and sawing of bone tissue during orthopedic reconstruction, total joint arthroplasty, and trauma surgeries. Powered by a high-output brushless motor incorporating superconducting technology, it delivers relentless and durable cutting torque with minimal temperature rise, effectively preventing bone thermal necrosis while maintaining exceptionally quiet operation.\n\nIt features an intelligent multi-protection drive control chip offering real-time safeguards against overload, overheating, and mechanical stalls, combined with a tactile safety interlock button to eliminate accidental operation. Its versatile modular oscillating head provides 360-degree rotation across 8 indexed positions for unrestricted anatomical access, alongside a patented anti-drop blade clamping mechanism and selectable dual-speed gearing (10,000 and 12,000 oscillations/min) for optimal clinical versatility.",
  67: "The surgical electric bone drill is a high-performance cannulated motorized instrument engineered for precision drilling, reaming, and tapping in major trauma surgery, joint reconstruction, and spine interventions. Driven by an advanced German-engineered brushless motor with superconducting technology, it delivers high, sustained torque with minimal thermal output, ensuring smooth, controlled bone penetration through dense cortices without stall-out or tissue burning.\n\nIt features a wide fully cannulated drive shaft accommodating direct concentric passage of Kirschner wires and intramedullary guide pins. Its intelligent drive control electronics provide seamless switching between high-speed drilling mode (1,200 rpm) and low-speed, high-torque reaming mode (270 rpm), accompanied by forward/reverse rotation toggles, tactile misoperation interlocks, and automatic restart upon stall recovery.",
  68: "The battery-powered bone tissue surgical equipment is a heavy-duty multidisciplinary motorized surgical platform engineered for major osteotomies, bone resection, orthopedic reconstruction, and cardiothoracic procedures. Powered by a state-of-the-art superconducting brushless motor and a high-density 4000 mAh rechargeable lithium power pack, it delivers exceptional runtime and unwavering torque output throughout prolonged and demanding procedures without intraoperative battery swaps.\n\nIts versatile multi-attachment interface allows seamless conversion between an oscillating orthopedic bone saw and a sternal saw equipped with a dedicated sterile protective sternum guard to safeguard the mediastinum and deep anatomical structures. It features an intelligent microcontroller managing comprehensive overload and thermal protections, selectable dual-speed gearing (10,000 and 12,000 oscillations/min), and an anti-drop blade retention collar for absolute intraoperative stability.",
};

// ==========================================
// Especificaciones específicas por Producto
// ==========================================

export const PRODUCT_SPECS_ES: Record<number, [string, string][]> = {
  2: [
    [
      "Material",
      "Tantalio poroso de alta pureza (CVD - Deposición Química en Fase Vapor)"
    ],
    [
      "Estructura",
      "Matriz porosa trabecular interconectada biomimética al hueso esponjoso"
    ],
    [
      "Superficie de contacto",
      "Dentado de retención superior e inferior antideslizamiento y antimigración"
    ],
    [
      "Ventana de injerto",
      "Apertura central de gran volumen para empaquetamiento de injerto óseo"
    ],
    [
      "Indicación clínica",
      "Fusión intersomática en segmentos cervicales (C2-T1) y lumbosacros (L2-S1)"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  14: [
    [
      "Material",
      "Aleación de Titanio forjado Ti-6Al-4V de grado médico de alta resistencia"
    ],
    [
      "Técnica de inserción",
      "Trayectoria cortical ósea caudo-cefálica medio-lateral (CBT)"
    ],
    [
      "Diseño de rosca",
      "Rosca con bloqueo de gancho ('hook-lock') y doble hilo autorroscante"
    ],
    [
      "Resistencia mecánica",
      "Aumento >30% en resistencia a la tracción y arrancamiento en hueso osteoporótico"
    ],
    [
      "Indicación clínica",
      "Fijación posterior toracolumbar en osteoporosis, espondilolistesis y revisiones"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  26: [
    [
      "Material",
      "Aleación de Titanio biocompatible de alta elasticidad y resistencia dinámica"
    ],
    [
      "Morfología",
      "Cuerpo amortiguador elástico en forma de 'U' anatómica"
    ],
    [
      "Mecanismo de agarre",
      "4 aletas de fijación laminares con crestas serradas antideslizamiento"
    ],
    [
      "Diseño multinivel",
      "Aletas desfasadas que permiten la colocación en dos niveles contiguos"
    ],
    [
      "Indicación clínica",
      "Estenosis de canal lumbar grado 1-2 (L1-L5) con descompresión dinámica"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  34: [
    [
      "Material del espaciador",
      "Poliéter-éter-cetona (PEEK) de módulo elástico cortical"
    ],
    [
      "Material de la placa",
      "Aleación de Titanio biocompatible de bajo perfil integrado"
    ],
    [
      "Mecanismo de fijación",
      "4 tornillos bloqueados divergentes autorroscantes tipo ancla de cuña"
    ],
    [
      "Diseño biomecánico",
      "Conexión elástica no rígida para transferencia fisiológica de carga"
    ],
    [
      "Indicación clínica",
      "Fusión intersomática lumbar anterior (ALIF) en segmentos L1-S1"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  36: [
    [
      "Material del anclaje",
      "Aleación de titanio TC4 ELI (Norma YY/T 1701)"
    ],
    [
      "Tecnología",
      "Manufactura aditiva por fusión de haz láser (LBM 3D)"
    ],
    [
      "Diseño de rosca",
      "Doble rosca alta-baja autorroscante (sin pretaladrado)"
    ],
    [
      "Material del insertador",
      "Acero inoxidable quirúrgico 304 (Norma YY/T 0726)"
    ],
    [
      "Indicación clínica",
      "Conexión y fijación de tendones/tejidos blandos a hueso en hombro y rodilla"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  39: [
    [
      "Material base",
      "Aleación de Titanio de grado médico de alto límite elástico"
    ],
    [
      "Recubrimiento",
      "Tantalio bioactivo de alta pureza depositado mediante PVD"
    ],
    [
      "Modelos disponibles",
      "Monorrosca MD(I) y Doble rosca MD(II) (3.5 mm a 6.5 mm)"
    ],
    [
      "Propiedades biológicas",
      "Osteoinductor, altamente biocompatible y actividad antibacteriana"
    ],
    [
      "Indicación clínica",
      "Fijación tendinosa en hombro, rodilla, tobillo, codo y extremidades"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  40: [
    [
      "Material de la sutura",
      "Fibra trenzada multifilamento de UHMWPE (Norma YY/T 1431-2016)"
    ],
    [
      "Material de la aguja",
      "Acero inoxidable quirúrgico 12Cr18Ni9 (Norma YY/T 0043-2016)"
    ],
    [
      "Opciones de color",
      "Blanco puro, azul y bicolor trenzado azul-blanco"
    ],
    [
      "Propiedades biomecánicas",
      "Máxima resistencia a la tracción, biocompatible y retención de nudo"
    ],
    [
      "Indicación clínica",
      "Sutura, ligadura y reparación de tejidos blandos y tendones articulares"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Estéril de un solo uso"
    ]
  ],
  41: [
    [
      "Material",
      "Aleación de Cobalto-Cromo-Molibdeno (Co-Cr-Mo) de alta resistencia a la fatiga"
    ],
    [
      "Diseño",
      "Grapa bicorne con dientes de fijación dentados antideslizamiento"
    ],
    [
      "Puntas",
      "Puntas afiladas cónicas para penetración cortical controlada"
    ],
    [
      "Mecanismo",
      "Fijación por compresión estática rígida sobre cortical ósea"
    ],
    [
      "Indicación clínica",
      "Fijación de tendones, ligamentos e injertos a hueso en rodilla y mano"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  42: [
    [
      "Material de la placa",
      "Aleación de Titanio biocompatible pulida de bajo perfil"
    ],
    [
      "Material del bucle",
      "Fibra trenzada continua de UHMWPE de ultra alta tenacidad"
    ],
    [
      "Configuraciones",
      "Placas solas, modelos con bucle fijo y modelos ajustables"
    ],
    [
      "Mecanismo",
      "Fijación suspensoria cortical con volteo sobre la cortical femoral"
    ],
    [
      "Indicación clínica",
      "Fijación femoral de injertos en reconstrucción de ligamentos de rodilla (LCA/LCP)"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  43: [
    [
      "Material de corte",
      "Acero inoxidable quirúrgico importado de alta resistencia y filo templado"
    ],
    [
      "Mecanismo de acople",
      "Bloqueo por presión 'Snap-lock' de seguridad antidesprendimiento"
    ],
    [
      "Identificación",
      "Codificación cromática por colores en la interfaz de conexión"
    ],
    [
      "Compatibilidad",
      "Compatible con las principales consolas y piezas de mano shaver artroscópicas"
    ],
    [
      "Indicación clínica",
      "Resección y desbridamiento de sinovial, menisco y partes blandas en artroscopia"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Empaque estéril desechable de un solo uso"
    ]
  ],
  44: [
    [
      "Material",
      "Poliéter-éter-cetona (PEEK) de grado médico libre de artefactos"
    ],
    [
      "Variantes roscadas",
      "MB(II) con doble rosca parcial y MB(III) con rosca completa continua"
    ],
    [
      "Suturas precargadas",
      "1 o 2 hebras trenzadas de UHMWPE de alta resistencia (blanco y azul-blanco)"
    ],
    [
      "Insertador",
      "Varilla calibrada con marcas graduadas de profundidad de inserción"
    ],
    [
      "Indicación clínica",
      "Fijación de partes blandas a hueso en hombro, rodilla, tobillo y codo"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  45: [
    [
      "Material",
      "Poliéter-éter-cetona (PEEK) de grado médico biocompatible"
    ],
    [
      "Modelos",
      "Modelo JM (tornillo individual) y Modelo JQ (tornillo con vaina protectora)"
    ],
    [
      "Diseño de rosca",
      "Roscas canuladas de bordes redondeados atraumáticos para protección del injerto"
    ],
    [
      "Ventaja biomecánica",
      "Elimina el cizallamiento tendinoso y evita artefactos en RMN"
    ],
    [
      "Indicación clínica",
      "Fijación de injertos en reconstrucción de ligamentos cruzados (LCA y LCP)"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  46: [
    [
      "Material de los implantes",
      "Mini-barras de fijación subcapsular en polímero PEEK grado médico"
    ],
    [
      "Material de sutura",
      "Sutura 2-0# trenzada de UHMWPE de ultra alta resistencia y polipropileno"
    ],
    [
      "Mecanismo de seguridad",
      "Cánula con tope regulador milimétrico de profundidad de inserción"
    ],
    [
      "Control quirúrgico",
      "Disparo activo 360° accionable con una sola mano en mango ergonómico"
    ],
    [
      "Opciones angulares",
      "Cánulas rectas, con curvatura anterior de 12° y reversa de 12°"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Empaque estéril de un solo uso"
    ]
  ],
  47: [
    [
      "Material del cuerpo",
      "Polímero transparente médico de alta resistencia al impacto"
    ],
    [
      "Estructura externa",
      "Roscado exterior completo para estabilidad y retención capsular"
    ],
    [
      "Sistema de estanqueidad",
      "Válvulas herméticas elastoméricas antifuga de líquido de irrigación"
    ],
    [
      "Gestión de suturas",
      "Cuerpo translúcido con orificios de paso y gestión de hilos de sutura"
    ],
    [
      "Indicación clínica",
      "Creación y protección de portales de acceso en cirugías artroscópicas"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Empaque estéril de un solo uso"
    ]
  ],
  48: [
    [
      "Material",
      "Aleación de Titanio de grado médico con superficie anodizada"
    ],
    [
      "Punta",
      "Geometría autorroscante cónica afilada (inserción directa sin pretaladro)"
    ],
    [
      "Arquitectura de rosca",
      "Diseño diferenciado: rosca proximal para placa y rosca distal para cortical"
    ],
    [
      "Material de sutura",
      "Suturas trenzadas de UHMWPE con códigos de color de contraste"
    ],
    [
      "Indicación clínica",
      "Fijación y reinserción de tejidos blandos, tendones y ligamentos a hueso"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  49: [
    [
      "Material del cabezal fresa",
      "Acero inoxidable quirúrgico 30Cr13 de alta dureza (YY/T 0294.1-2016)"
    ],
    [
      "Varilla conectora",
      "Acero inoxidable 304 / 06Cr19Ni10 (Norma GB/T 20878-2007)"
    ],
    [
      "Geometrías de fresado",
      "Cabezales cilíndricos y esféricos (Burr) en diversos diámetros"
    ],
    [
      "Compatibilidad",
      "Compatible con más del 90% de las consolas shaver del mercado"
    ],
    [
      "Indicación clínica",
      "Acromioplastia, notchplastia femoral, descompresión y remodelado óseo"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  51: [
    [
      "Mecanismo de fijación",
      "Aletas expansibles de aleación con memoria de forma Níquel-Titanio (Nitinol)"
    ],
    [
      "Diseño del cuerpo",
      "Cuerpo cilíndrico liso sin rosca para inserción directa en orificio piloto"
    ],
    [
      "Diámetros disponibles",
      "Gama micro y estándar: 1.3 mm, 1.8 mm, 2.4 mm y 2.8 mm"
    ],
    [
      "Material de sutura",
      "1 o 2 hebras precargadas de UHMWPE de ultra alta resistencia"
    ],
    [
      "Indicación clínica",
      "Fijación ligamentaria en hombro, rodilla, mano, muñeca, pie y tobillo"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  52: [
    [
      "Material",
      "Silicona médica suave y flexible de grado implantable"
    ],
    [
      "Punta",
      "Geometría distal excéntrica tipo II antirretractil y de penetración suave"
    ],
    [
      "Control de profundidad",
      "Almohadilla en 'C' de silicona de 5 mm de grosor para tope de penetración"
    ],
    [
      "Estanqueidad",
      "Doble capa impermeable hermética contra fuga y extravasación de líquido"
    ],
    [
      "Indicación clínica",
      "Portal atraumático elástico para paso de instrumentos en artroscopia"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Empaque estéril desechable de un solo uso"
    ]
  ],
  56: [
    [
      "Material de la placa",
      "Aleación de Titanio biocompatible pulida de bajo perfil"
    ],
    [
      "Material de la banda",
      "Cinta de fibra de UHMWPE de ultra alta tenacidad ajustable"
    ],
    [
      "Mecanismo de ajuste",
      "Bloqueo unidireccional antideslizamiento con retensado continuo"
    ],
    [
      "Ventaja quirúrgica",
      "Elimina errores de cálculo de longitud de bucle y previene el fondo de saco"
    ],
    [
      "Indicación clínica",
      "Fijación suspensoria ajustable en reconstrucción de LCA y LCP de rodilla"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  57: [
    [
      "Material",
      "Poliéter-éter-cetona (PEEK) de grado médico radiotransparente"
    ],
    [
      "Tecnología",
      "Fijación roscada sin nudos ('Knotless') para reparación en doble hilera"
    ],
    [
      "Estructura",
      "Cuerpo hueco canulado osteoconductor para migración osteoblástica"
    ],
    [
      "Compatibilidad de sutura",
      "Acepta suturas redondas, cintas planas o combinadas (4 u 8 hebras)"
    ],
    [
      "Indicación clínica",
      "Reparación de manguito rotador hilera lateral, Bankart y reconstrucción articular"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  58: [
    [
      "Material de la grapa",
      "Acero inoxidable quirúrgico biocompatible de grado médico"
    ],
    [
      "Mecanismo de disparo",
      "Percusión manual de fuerza uniforme antidesalineación de grapas"
    ],
    [
      "Conformación dérmica",
      "Cierre con altura programada para aliviar tensión y edema"
    ],
    [
      "Ventaja estética",
      "Mínimo trauma tisular que favorece una cicatrización estética limpia"
    ],
    [
      "Indicación clínica",
      "Afrontamiento y sutura cutánea rápida en heridas e incisiones quirúrgicas"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Empaque estéril desechable de un solo uso"
    ]
  ],
  69: [
    [
      "Material",
      "Aleación de Titanio forjado multifilamento biocompatible"
    ],
    [
      "Estructura del cable",
      "49 microfilamentos trenzados helicoidales (7 haces × 7 hilos)"
    ],
    [
      "Diámetro",
      "Calibre ultrafino de 1.08 mm de alta resistencia a la tracción"
    ],
    [
      "Clip de fijación",
      "Cabezal de bloqueo único con ajuste angular de hasta 20°"
    ],
    [
      "Indicación clínica",
      "Fijación sublaminar, interespinosa y facetaria cervical (C1-C7)"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  70: [
    [
      "Material",
      "Aleación de Titanio microporosa biomimética (Manufactura Aditiva 3D)"
    ],
    [
      "Porosidad trabecular",
      "50% a 80% de microporosidad abierta e interconectada osteoconductora"
    ],
    [
      "Propiedades biomecánicas",
      "Módulo elástico similar al hueso esponjoso; elimina el blindaje de tensiones"
    ],
    [
      "Modelos cervicales",
      "Modelos IVE e IVN específicos para niveles cervicales (C2-T1)"
    ],
    [
      "Modelos toracolumbares",
      "Modelos IVC, IVD e IVO específicos para niveles toracolumbares (T2-S1)"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  71: [
    [
      "Material",
      "Aleación de Titanio forjado Ti-6Al-4V de grado médico de alta resistencia"
    ],
    [
      "Barras espinales",
      "Barras precortadas y precurvadas en diámetros de 3.5 mm y 4.0 mm"
    ],
    [
      "Tornillos de masa lateral",
      "Poliaxiales (<20 mm) con ángulo de oscilación extrema de 100°"
    ],
    [
      "Tornillos pediculares",
      "Poliaxiales (>20 mm) con ángulo de oscilación de 90°"
    ],
    [
      "Indicación clínica",
      "Fijación posterior occipitocervicotorácica (Occipucio a T3)"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  72: [
    [
      "Material",
      "Titanio puro de grado médico de máxima biocompatibilidad"
    ],
    [
      "Estructura",
      "Malla tubular cilíndrica fenestrada para osteointegración omnidireccional"
    ],
    [
      "Longitudes disponibles",
      "Gama continua con incrementos de 1 a 2 mm (sin corte intraoperatorio)"
    ],
    [
      "Tapas terminales (End Caps)",
      "Tapas arciformes paralelas y anguladas en 9 perfiles anatómicos"
    ],
    [
      "Indicación clínica",
      "Reemplazo de cuerpo vertebral tras vertebrectomía cervical, torácica y lumbar"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  149: [
    [
      "Material",
      "Aleación de titanio TC4 ELI mediante impresión 3D (Norma YY/T 1701)"
    ],
    [
      "Diseño de rosca",
      "Doble rosca alta-baja autorroscante de alta retención"
    ],
    [
      "Orificios de sutura",
      "Doble orificio independiente antienredos y antifricción"
    ],
    [
      "Configuración de suturas",
      "2 suturas precargadas de UHMWPE blanco y polipropileno azul"
    ],
    [
      "Insertador",
      "Acero inoxidable 304 (YY/T 0726) con marcas de profundidad láser"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  150: [
    [
      "Composición del implante",
      "100% textil: Manguito expansible y suturas de fibra trenzada de UHMWPE"
    ],
    [
      "Mecanismo de fijación",
      "Expansión y bloqueo subcortical por tracción ('All-Suture Ball')"
    ],
    [
      "Perfil radiológico",
      "Completamente radiotransparente sin artefactos en TC ni RMN"
    ],
    [
      "Preservación ósea",
      "Diámetro de perforación mínimo (menos de 2 mm) con mínima pérdida ósea"
    ],
    [
      "Indicación clínica",
      "Fijación tendinosa en hombro, rodilla, pie, tobillo, cadera, codo y muñeca"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  151: [
    [
      "Material del anclaje",
      "Poliéter-éter-cetona (PEEK) de grado médico biocompatible"
    ],
    [
      "Diseño morfológico",
      "Cuerpo hueco canulado que promueve el crecimiento óseo biológico interno"
    ],
    [
      "Material de sutura",
      "Fibra trenzada de UHMWPE de ultra alta tenacidad (blanco / azul-blanco)"
    ],
    [
      "Visibilidad radiológica",
      "Radiotransparente con cero artefactos en Resonancia Magnética (RMN)"
    ],
    [
      "Indicación clínica",
      "Reparación de manguito rotador, inestabilidad articular y lesiones ligamentarias"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  152: [
    [
      "Material",
      "Poliéter-éter-cetona (PEEK) de grado médico biocompatible"
    ],
    [
      "Método de colocación",
      "Inserción por impacto ('Knock-in') con ajuste continuo de tensión tisular"
    ],
    [
      "Tecnología",
      "Sistema sin nudos ('Knotless') de bajo perfil intraarticular"
    ],
    [
      "Rango de tamaños",
      "Gama completa con diámetros de 1.8 mm hasta 9.0 mm"
    ],
    [
      "Indicación clínica",
      "Fijación tisular en pie, tobillo, rodilla, hombro, cadera, codo y muñeca"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  154: [
    [
      "Material",
      "Aleación de Titanio de grado médico (Manufactura Aditiva 3D)"
    ],
    [
      "Diseño",
      "Placa de conformación laminar con zonas porosas trabeculares integradas"
    ],
    [
      "Superficie interna",
      "Pulido liso atraumático para protección del canal medular y la duramadre"
    ],
    [
      "Configuración de tornillos",
      "Múltiples opciones de orificios angulados para fijación a masa lateral y lámina"
    ],
    [
      "Indicación clínica",
      "Laminoplastia expansiva y descompresión de canal raquídeo (C3-T3)"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  155: [
    [
      "Material",
      "Aleación de Titanio trabecular mediante manufactura aditiva de impresión 3D"
    ],
    [
      "Estructura interna",
      "Red de porosidad biomimética similar al hueso esponjoso humano"
    ],
    [
      "Modelos",
      "Modelo I-A (columna cervical) y Modelo I-B (columna toracolumbar)"
    ],
    [
      "Platillos articulares",
      "Placas terminales anatómicas con múltiples angulaciones lordóticas"
    ],
    [
      "Indicación clínica",
      "Reemplazo de cuerpo vertebral tras corpectomía tumoral o traumática"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  156: [
    [
      "Material",
      "Aleación de Titanio forjado Ti-6Al-4V de grado médico de alta resistencia"
    ],
    [
      "Platillos terminales",
      "Superficies cóncavo-convexas arciformes con dentado autoestabilizable"
    ],
    [
      "Mecanismo",
      "Ajuste central cilíndrico expandible con bloqueo rígido antirretroceso"
    ],
    [
      "Capacidad de injerto",
      "Cavidad central abierta de gran volumen para injerto óseo continuo"
    ],
    [
      "Indicación clínica",
      "Reemplazo de cuerpo vertebral toracolumbar (T1-L5) tras corpectomía"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  157: [
    [
      "Material del cuerpo",
      "Poliéter-éter-cetona (PEEK) de grado médico radiotransparente"
    ],
    [
      "Material de la placa",
      "Placa anterior integrada de titanio de perfil cero (sin saliente)"
    ],
    [
      "Tornillos de fijación",
      "Tornillos de titanio con mecanismo de anillo de autobloqueo antirretiro"
    ],
    [
      "Variantes lordóticas",
      "Opciones de angulación de 0°, 4°, 6° y 8°"
    ],
    [
      "Indicación clínica",
      "Fusión cervical intersomática anterior (ACDF) C2-T1"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  158: [
    [
      "Material",
      "Titanio puro de grado médico con excelente plasticidad y biocompatibilidad"
    ],
    [
      "Mecanismo",
      "Ranura integrada para retención rígida de lámina sin injerto óseo obligatorio"
    ],
    [
      "Perfil",
      "Perfil bajo atraumático diseñado para evitar la fricción con partes blandas"
    ],
    [
      "Orificios de tornillo",
      "Disposición multiorificio adaptada a masas laterales y lámina vertebral"
    ],
    [
      "Indicación clínica",
      "Laminoplastia y ampliación descompresiva del canal cervical (C3-T3)"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  159: [
    [
      "Material",
      "Aleación de Titanio forjado Ti-6Al-4V de grado médico de alta resistencia"
    ],
    [
      "Diseño del tornillo",
      "Tornillos pediculares canulados con brazos de extensión largos (MIS)"
    ],
    [
      "Arquitectura de rosca",
      "Diseño de doble rosca autorroscante de alta resistencia al pull-out"
    ],
    [
      "Tornillo prisionero",
      "Rosca cuadrada antirrosqueo cruzado con cabeza de accionamiento Torx"
    ],
    [
      "Compatibilidad de barras",
      "Compatible con barras de titanio de 5.5 mm y 6.0 mm precurvadas"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  160: [
    [
      "Material",
      "Aleación de Titanio forjado Ti-6Al-4V de biocompatibilidad superior"
    ],
    [
      "Conexión tornillo-barra",
      "Conexión directa superior y lateral sin conectores offset voluminosos"
    ],
    [
      "Punto de inserción",
      "15 mm bajo la espina ilíaca posterosuperior (sin dañar la cresta ósea)"
    ],
    [
      "Diseño de la caña",
      "Caña proximal lisa atraumática para la articulación sacroilíaca"
    ],
    [
      "Indicación clínica",
      "Fijación espinopélvica e instrumentación lumbosacra hasta el ilíaco"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  164: [
    [
      "Material",
      "Aleación de Titanio forjado Ti-6Al-4V de grado médico de alta resistencia"
    ],
    [
      "Canulación y fenestraciones",
      "Cuerpo canulado con múltiples orificios laterales distales para inyección de cemento"
    ],
    [
      "Compatibilidad con cemento",
      "Optimizado para cemento óseo acrílico de alta viscosidad (PMMA)"
    ],
    [
      "Configuraciones",
      "Modelos estándar y modelos con brazos prolongados para cirugía abierta y MIS"
    ],
    [
      "Indicación clínica",
      "Fijación posterior en osteoporosis severa, fracturas patológicas y tumores vertebrales"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  165: [
    [
      "Material",
      "Aleación de Titanio forjado Ti-6Al-4V (norma YY 0117.1)"
    ],
    [
      "Recubrimiento",
      "Plasma spray bioactivo bicapa: Titanio Poroso + Hidroxiapatita (Ti + HA)"
    ],
    [
      "Fijación",
      "Biológica no cementada (Press-fit metafisario)"
    ],
    [
      "Estabilidad Rotacional",
      "Aletas longitudinales proximales antirrotación"
    ],
    [
      "Opciones de Cuello",
      "Ángulos estándar y lateralizado (+5 mm offset)"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  166: [
    [
      "Material",
      "Aleación de Titanio biocompatible de grado médico de bajo relieve"
    ],
    [
      "Morfología",
      "Diseño anatómico precurvado lordótico con bordes biselados atraumáticos"
    ],
    [
      "Sistema de bloqueo",
      "Mecanismo antirretracción integrado antidesatornillado espontáneo"
    ],
    [
      "Ventana de injerto",
      "Ventana central extragrande para visualización y evaluación de la fusión"
    ],
    [
      "Indicación clínica",
      "Fijación anterior cervical en fracturas, espondilolistesis, tumores y ACDF"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  167: [
    [
      "Material",
      "Aleación forjada Co-Cr-Mo pulida a espejo sin collarín"
    ],
    [
      "Fijación",
      "Cementada con manto continuo"
    ],
    [
      "Geometría",
      "Doble conicidad autocentrante lisa"
    ],
    [
      "Cono Morse",
      "12/14 estándar para cabezas de 28, 32 y 36 mm"
    ],
    [
      "Indicación",
      "Artroplastia total y parcial de cadera cementada"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  168: [
    [
      "Material",
      "Aleación Ti-6Al-4V forjado con tercio proximal de Titanio trabecular EBM 3D"
    ],
    [
      "Fijación",
      "Biológica no cementada (Press-fit trabecular metafisario)"
    ],
    [
      "Geometría",
      "Doble conicidad anatómica con ranuras longitudinales distales"
    ],
    [
      "Tecnología",
      "Malla porosa trabecular biomimética interconectada"
    ],
    [
      "Indicación",
      "Artroplastia total primaria de cadera y revisiones con metáfisis conservada"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  169: [
    [
      "Material del cuerpo",
      "Poliéter-éter-cetona (PEEK) de grado médico biocompatible"
    ],
    [
      "Marcadores radiológicos",
      "Pernos radiopacos de tantalio de alta visibilidad bajo rayos X"
    ],
    [
      "Superficie de fijación",
      "Dentado en diente de sierra inversa antirretroceso y antimigración"
    ],
    [
      "Ventana de injerto",
      "Apertura central de gran calibre para contacto hueso-injerto directo"
    ],
    [
      "Indicación clínica",
      "Fusión intersomática en columna cervical y toracolumbar"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  170: [
    [
      "Material",
      "Aleación de Titanio forjado Ti-6Al-4V con recubrimiento bioactivo Ti + HA"
    ],
    [
      "Fijación",
      "Biológica no cementada press-fit"
    ],
    [
      "Diseño",
      "Triple conicidad metafisaria con ranuras longitudinales distales"
    ],
    [
      "Cuello",
      "Perfil estrecho pulido con cono morse estándar 12/14"
    ],
    [
      "Indicación",
      "Artroplastia total primaria de cadera"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  171: [
    [
      "Material",
      "Poliamida médica biocompatible PA12 mediante manufactura aditiva 3D"
    ],
    [
      "Diseño",
      "Paciente-específico personalizado mediante reconstrucción tomográfica 3D (TC)"
    ],
    [
      "Modelos",
      "Tipos I y II (osteotomías unilaterales) y Tipo III (osteotomías bilaterales)"
    ],
    [
      "Precisión",
      "Encaje anatómico milimétrico sobre apófisis espinosa, lámina y facetas"
    ],
    [
      "Indicación clínica",
      "Posicionamiento, guiado angular y protección en osteotomías de columna"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) - Empaque estéril desechable"
    ]
  ],
  172: [
    [
      "Material",
      "Aleación de Titanio forjado Ti-6Al-4V (grado médico)"
    ],
    [
      "Longitud",
      "160 mm con conicidad progresiva"
    ],
    [
      "Fijación",
      "Biológica no cementada con anclaje diafisario distal"
    ],
    [
      "Geometría Distal",
      "Ranuras longitudinales y punta con ranura coronal de descompresión"
    ],
    [
      "Cono Morse",
      "Estándar 12/14 para cabezas femorales modulares"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  174: [
    [
      "Material",
      "Polietileno de ultra alto peso molecular altamente entrecruzado (HXLPE)"
    ],
    [
      "Fijación",
      "Bloqueo perimetral a presión con pestañas antirrotación"
    ],
    [
      "Configuración",
      "Diseño neutro estándar con bisel perimetral de alta flexión"
    ],
    [
      "Compatibilidad",
      "Cabezas femorales metálicas y cerámicas de 28, 32 y 36 mm"
    ],
    [
      "Indicación",
      "Inserto articular en artroplastia total primaria de cadera"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) / Gas plasma (5 años de vida útil)"
    ]
  ],
  175: [
    [
      "Material",
      "Aleación Co-Cr-Mo fundida pulida a espejo (grado médico)"
    ],
    [
      "Función",
      "Liner metálico para articulación de doble movilidad"
    ],
    [
      "Superficie Articular",
      "Pulido espejo con rugosidad superficial Ra < 0.05 µm"
    ],
    [
      "Bloqueo",
      "Cono de fijación cónica antirrotación de alta precisión"
    ],
    [
      "Indicación",
      "Artroplastia de cadera de doble movilidad primaria y de revisión"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  177: [
    [
      "Material",
      "Titanio trabecular biomimético (Ti6Al4V ELI) por EBM 3D"
    ],
    [
      "Fijación",
      "Biológica no cementada (Press-fit trabecular)"
    ],
    [
      "Configuración",
      "3 orificios apicales para tornillos de esponjosa (Serie G20)"
    ],
    [
      "Porosidad",
      "70% - 80% con microestructura de poro abierto interconectado"
    ],
    [
      "Indicación",
      "Artroplastia total primaria y defectos acetabulares leves"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  178: [
    [
      "Material",
      "Titanio poroso trabecular biomimético (Ti6Al4V ELI) por EBM 3D"
    ],
    [
      "Configuración",
      "Múltiples orificios avellanados en toda la cúpula (Serie G40)"
    ],
    [
      "Fijación",
      "Biológica no cementada con atornillado multiangular intensivo"
    ],
    [
      "Porosidad",
      "70% - 80% con microestructura de poro abierto interconectado"
    ],
    [
      "Indicación",
      "Revisiones acetabulares, defectos Paprosky II y hueso osteopénico"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  179: [
    [
      "Material",
      "Titanio poroso trabecular biomimético (Ti6Al4V ELI) por EBM 3D"
    ],
    [
      "Tecnología",
      "Manufactura aditiva por fusión por haz de electrones (EBM)"
    ],
    [
      "Estructura",
      "Malla biomimética con porosidad del 75-85% interconectada"
    ],
    [
      "Fijación",
      "Atornillado directo con tornillos de titanio forjado TC4"
    ],
    [
      "Indicación",
      "Relleno y reconstrucción de defectos acetabulares Paprosky II y III"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  180: [
    [
      "Material",
      "Tantalio metálico poroso biomimético (CVD / Manufactura aditiva)"
    ],
    [
      "Porosidad",
      "75% - 85% con arquitectura trabecular 100% interconectada"
    ],
    [
      "Tamaño de Poro",
      "400 µm a 600 µm (óptimo para osteogénesis acelerada)"
    ],
    [
      "Módulo Elástico",
      "Aproximadamente 3 GPa (similar al hueso esponjoso humano)"
    ],
    [
      "Indicación",
      "Defectos óseos acetabulares cavitarios y segmentarios Paprosky II y III"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  181: [
    [
      "Material",
      "Aleación forjada de Co-Cr-Mo de alta pureza (norma YY 0117.3)"
    ],
    [
      "Pulido Superficial",
      "Acabado espejo de precisión quirúrgica (Ra < 0.02 µm)"
    ],
    [
      "Cono Morse",
      "12/14 estándar hembra con estrías de acople"
    ],
    [
      "Diámetros Disponibles",
      "28 mm, 32 mm y 36 mm"
    ],
    [
      "Opciones de Cuello",
      "Corto (-3.5 mm), Estándar (0 mm), Largo (+3.5 mm), Extra largo (+7 mm)"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  184: [
    [
      "Material",
      "Aleación forjada de Titanio Ti-6Al-4V anodizado de alta resistencia"
    ],
    [
      "Sistema",
      "Prótesis modular de reconstrucción tumoral y diafisaria femoral"
    ],
    [
      "Conexiones",
      "Conos Morse de alta resistencia con tornillos de compresión axial"
    ],
    [
      "Modularidad",
      "Componentes proximales, segmentos diafisarios y vástagos intramedulares"
    ],
    [
      "Indicación",
      "Tumores óseos femorales, fracturas conminutas graves y revisiones masivas"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  187: [
    [
      "Material",
      "Aleación Co-Cr-Mo fundida (fémur y bandeja) / UHMWPE"
    ],
    [
      "Tipo de Prótesis",
      "Prótesis unicompartimental de rodilla (UKA)"
    ],
    [
      "Indicación",
      "Artrosis unicompartimental medial o lateral aislada"
    ],
    [
      "Cinemática",
      "Superficie esférica de radio único con preservación de ligamentos cruzados"
    ],
    [
      "Fijación",
      "Cementada con manto uniforme"
    ],
    [
      "Esterilización",
      "Radiación Gamma (metálicos) / Óxido de Etileno (PE)"
    ]
  ],
  188: [
    [
      "Material",
      "Aleación de Titanio forjado multifilamento biocompatible"
    ],
    [
      "Estructura",
      "Múltiples alambres trenzados helicoidales de alta flexibilidad"
    ],
    [
      "Diseño terminal",
      "Cabezal esférico ensanchado con bloqueo de tensado unidireccional"
    ],
    [
      "Indicación clínica",
      "Cerclaje y fijación interna de fracturas óseas y periprotésicas"
    ],
    [
      "Ventaja biomecánica",
      "Elimina la fractura por fatiga y minimiza la irritación perióstica"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  190: [
    [
      "Material",
      "Aleación Co-Cr-Mo fundida / Inserto y rótula de UHMWPE"
    ],
    [
      "Tipo de Prótesis",
      "Artroplastia primaria con retención del ligamento cruzado (CR)"
    ],
    [
      "Indicación",
      "Artroplastia total de rodilla primaria con LCP intacto y funcional"
    ],
    [
      "Fijación",
      "Cementada"
    ],
    [
      "Diseño",
      "Preservación ligamentaria con tróclea profunda y cóndilo adelgazado"
    ],
    [
      "Esterilización",
      "Radiación Gamma (metales) / Óxido de Etileno (PE)"
    ]
  ],
  191: [
    [
      "Material",
      "Aleación fundida Co-Cr-Mo / Inserto y rótula de UHMWPE"
    ],
    [
      "Tipo de Prótesis",
      "Artroplastia anatómica de superficie (Modelo XA)"
    ],
    [
      "Indicación",
      "Reemplazo articular de rodilla primario"
    ],
    [
      "Fijación",
      "Cementada"
    ],
    [
      "Geometría",
      "Diseño troclear optimizado para flexión profunda y alivio patelar"
    ],
    [
      "Esterilización",
      "Radiación Gamma (metales) / Óxido de Etileno (PE)"
    ]
  ],
  192: [
    [
      "Material",
      "Aleación Co-Cr-Mo fundida y UHMWPE con Vitamina E (VE-HXLPE)"
    ],
    [
      "Recubrimiento",
      "Doble capa biológica: Titanio Poroso + Hidroxiapatita (Ti + HA)"
    ],
    [
      "Tecnología",
      "Proyección por plasma térmico (Plasma Spray)"
    ],
    [
      "Fijación",
      "Biológica no cementada (Press-fit trabecular)"
    ],
    [
      "Indicación",
      "Artroplastia total de rodilla primaria en hueso conservado"
    ],
    [
      "Esterilización",
      "Radiación Gamma (metálicos) / Óxido de Etileno (PE)"
    ]
  ],
  194: [
    [
      "Material",
      "Polietileno UHMWPE con infusión de Vitamina E (VE-HXLPE)"
    ],
    [
      "Compatibilidad",
      "Configuraciones CR (conservación) y PS (estabilizada posterior)"
    ],
    [
      "Propiedades",
      "Resistencia superior a la oxidación y mínimo desgaste por fricción"
    ],
    [
      "Cinemática",
      "Doble plano articular congruente y muesca anterior de alta flexión"
    ],
    [
      "Indicación",
      "Componente articular de rodamiento en artroplastia de rodilla"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO) / Gas plasma (5 años de vida útil)"
    ]
  ],
  197: [
    [
      "Material",
      "Aleación Co-Cr-Mo fundida / Titanio forjado TC4 / UHMWPE Tipo 2"
    ],
    [
      "Sistema",
      "Sistema protésico modular de revisión de rodilla (Modelo XQ)"
    ],
    [
      "Modularidad",
      "Vástagos intramedulares rectos/excéntricos y bloques de aumento"
    ],
    [
      "Indicación",
      "Cirugías de revisión y artroplastia primaria con defectos óseos"
    ],
    [
      "Fijación",
      "Cementada con estabilización modular"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  199: [
    [
      "Material",
      "Aleación Co-Cr-Mo / Titanio TC4 & TC4ELI / UHMWPE Tipo 2"
    ],
    [
      "Sistema",
      "Bisagra rotatoria modular con plataforma giratoria"
    ],
    [
      "Aplicación",
      "Artroplastia total de rodilla (primaria y revisión)"
    ],
    [
      "Fijación",
      "Vástagos intramedulares cementados y no cementados"
    ],
    [
      "Tecnología",
      "Manguitos alados TC4ELI vía fusión por haz de electrones (EBM)"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  201: [
    [
      "Material",
      "Titanio poroso trabecular (Ti6Al4V ELI) y tornillos TC4"
    ],
    [
      "Tecnología",
      "Impresión 3D por haz de electrones (EBM)"
    ],
    [
      "Estructura",
      "Malla biomimética trabecular porosa altamente interconectada"
    ],
    [
      "Propiedades",
      "Módulo elástico fisiológico que reduce el apantallamiento de tensiones"
    ],
    [
      "Indicación",
      "Relleno y reconstrucción de defectos óseos en cirugía de revisión"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  203: [
    [
      "Vástago humeral",
      "Aleación de Titanio con recubrimiento proximal de polvo de titanio puro"
    ],
    [
      "Cabeza humeral",
      "Aleación fundida de Co-Cr-Mo con diseño anatómico excéntrico (36-48 mm)"
    ],
    [
      "Componente glenoideo",
      "Polietileno de ultra alto peso molecular (UHMWPE)"
    ],
    [
      "Diseño antirrotación",
      "Vástago de sección rectangular para máxima estabilidad torsional primaria"
    ],
    [
      "Indicación clínica",
      "Artroplastia primaria por artrosis, necrosis avascular y artritis reumatoide"
    ],
    [
      "Fijación",
      "Biológica no cementada (Presión por ajuste / Press-fit)"
    ]
  ],
  205: [
    [
      "Vástago humeral",
      "Aleación de Titanio con recubrimiento proximal de polvo de titanio"
    ],
    [
      "Baseplate glenoideo",
      "Metal trabecular de titanio bio-impreso en 3D (Estructura excéntrica)"
    ],
    [
      "Componente articular",
      "Glenosfera de Co-Cr-Mo e inserto humeral de UHMWPE"
    ],
    [
      "Tornillos de fijación",
      "Tornillos universales recubiertos de titanio con ángulo variable 0°-30°"
    ],
    [
      "Indicación clínica",
      "Artropatía por rotura del manguito rotador y artrosis severa"
    ],
    [
      "Esterilización",
      "Radiación Gamma (Metales) / Óxido de Etileno (Polímeros)"
    ]
  ],
  207: [
    [
      "Húmero proximal y diafisario",
      "Aleación forjada Ti-6Al-4V (Norma YY 0117.1)"
    ],
    [
      "Cabeza humeral",
      "Aleación fundida de Co-Cr-Mo (Norma YY 0117.3)"
    ],
    [
      "Convertidor articular",
      "Aleación de Titanio TC4 (Norma GB/T 13810)"
    ],
    [
      "Vástago intramedular",
      "24 especificaciones cementadas con múltiples longitudes y diámetros"
    ],
    [
      "Indicación clínica",
      "Salvamento de miembro tras resección tumoral y defectos óseos masivos"
    ],
    [
      "Esterilización",
      "Radiación Gamma - Vida útil estéril de 5 años"
    ]
  ],
  213: [
    [
      "Material",
      "Aleación Co-Cr-Mo / Titanio forjado Ti6Al4V / Titanio EBM Ti6Al4V ELI / UHMWPE"
    ],
    [
      "Tecnología",
      "Impresión 3D aditiva por haz de electrones (EBM) y forja"
    ],
    [
      "Sistema",
      "Sistema modular de rescate y reconstrucción diafisaria"
    ],
    [
      "Indicación",
      "Defectos óseos masivos, tumores óseos articulares y múltiples revisiones"
    ],
    [
      "Fijación",
      "Cementada con vástagos de anclaje intramedular"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  224: [
    [
      "Material",
      "Titanio puro de grado médico con superficie rugosa uniforme Tipo 60"
    ],
    [
      "Textura Superficial",
      "Micro-ranuras circunferenciales y rugosidad uniforme de alta fricción"
    ],
    [
      "Fijación",
      "Biológica no cementada con orificios perimetrales para tornillos"
    ],
    [
      "Indicación",
      "Cirugías de revisión, defectos acetabulares graves y resección tumoral"
    ],
    [
      "Compatibilidad",
      "Liners cerámicos Delta y de polietileno altamente reticulado HXLPE"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  226: [
    [
      "Material",
      "Aleación Co-Cr-Mo / Titanio forjado Ti6Al4V anodizado / UHMWPE"
    ],
    [
      "Sistema",
      "Bisagra axial de rescate con segmentos diafisarios de osteotomía"
    ],
    [
      "Cinemática",
      "Eje axial con rotación amortiguada que alivia el torque intramedular"
    ],
    [
      "Indicación",
      "Tumores óseos (osteosarcoma), fracturas conminutas y rescate articular"
    ],
    [
      "Fijación",
      "Cementada con vástagos intramedulares reforzados"
    ],
    [
      "Esterilización",
      "Radiación Gamma (vida útil estéril de 5 años)"
    ]
  ],
  227: [
    [
      "Material",
      "Polipropileno médico antiadherente (PP-R) de alta resistencia"
    ],
    [
      "Componentes",
      "Molde femoral, molde tibial y bloques de medición (5, 10, 12 mm)"
    ],
    [
      "Función",
      "Moldeo intraoperatorio de espaciadores de cemento óseo con antibiótico"
    ],
    [
      "Indicación",
      "Artroplastia de revisión en dos tiempos por infección periprotésica"
    ],
    [
      "Mecanismo",
      "Desmoldeo por rosca rotatoria rápida sin adherencias"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO), un solo uso (vida útil estéril de 2 años)"
    ]
  ],
  228: [
    [
      "Material",
      "Polipropileno de grado médico antiadherente de alta resistencia (PP-R)"
    ],
    [
      "Componentes",
      "Molde para vástago femoral y moldes para cabezas femorales modulares"
    ],
    [
      "Función",
      "Moldeo intraoperatorio de espaciadores de cemento con antibiótico"
    ],
    [
      "Mecanismo",
      "Apertura rápida y desmoldeo por rosca limpia sin adherencias"
    ],
    [
      "Indicación",
      "Artroplastia de revisión de cadera en dos tiempos por infección"
    ],
    [
      "Esterilización",
      "Óxido de Etileno (EO), un solo uso (vida útil estéril de 2 años)"
    ]
  ],
  24: [
    [
      "Modelo del sistema",
      "Huanghe INS-2 (Robot de fresado unicompartimental)"
    ],
    [
      "Tecnología de fresado",
      "Desbastado óseo guiado por límites virtuales con respuesta milimétrica"
    ],
    [
      "Tiempo de respuesta de seguridad",
      "Control de contorno con parada de emergencia en milisegundos"
    ],
    [
      "Procedimientos quirúrgicos",
      "Fresado tibial y femoral unicompartimental (UKA) medial y lateral"
    ],
    [
      "Indicación clínica",
      "Artroplastia unicompartimental de rodilla en osteoartritis monocompartimental"
    ],
    [
      "Características del sistema",
      "Fresadora manual inteligente de alta velocidad, sistema óptico 3D y carro compacto"
    ]
  ],
  59: [
    [
      "Modelo del sistema",
      "Changjiang INS-1 Rodilla (Robot portátil de osteotomía)"
    ],
    [
      "Tecnología de navegación",
      "Navegación óptica infrarroja con compensación de movimiento"
    ],
    [
      "Precisión de alineación",
      "Precisión angular < 1° y precisión de resección ósea < 1 mm"
    ],
    [
      "Procedimientos quirúrgicos",
      "Navegación de cortes femorales/tibiales y balance ligamentario"
    ],
    [
      "Indicación clínica",
      "Artroplastia total primaria y de revisión de rodilla (ATR)"
    ],
    [
      "Características del sistema",
      "Sensor óptico de alta tasa de muestreo y consola de control táctil"
    ]
  ],
  139: [
    [
      "Modelo del sistema",
      "Changjiang INS-1 (Robot portátil inteligente)"
    ],
    [
      "Tecnología de navegación",
      "Navegación óptica tridimensional y seguimiento dinámico activo"
    ],
    [
      "Precisión de posicionamiento",
      "Precisión submilimétrica (< 1 mm) y angular (< 1°)"
    ],
    [
      "Procedimientos quirúrgicos",
      "Fresado acetabular, preparación femoral y orientación de copa"
    ],
    [
      "Indicación clínica",
      "Artroplastia total primaria y compleja de cadera en adultos"
    ],
    [
      "Características del sistema",
      "Unidad motora manual ergonómica autoclavable e interfaz intuitiva"
    ]
  ],
  161: [
    [
      "Material",
      "Aleación de Cobalto-Cromo-Molibdeno (Co-Cr-Mo) y UHMWPE"
    ],
    [
      "Fijación",
      "Cementada (uso conjunto con cemento óseo)"
    ],
    [
      "Diseño",
      "Sistema modular tri-componente con vástago metatarsiano y base falángica"
    ],
    [
      "Modularidad",
      "Cabezas metatarsianas de altura variable y múltiples diámetros de vástago"
    ],
    [
      "Indicación clínica",
      "Artroplastia de la primera articulación metatarsofalángica (Hallux Rigidus / Artrosis)"
    ],
    [
      "Esterilización",
      "Radiación gamma - Vida útil estéril de 5 años"
    ]
  ],
  162: [
    [
      "Material",
      "Aleación de Titanio biocompatible de grado médico y elastómero articular"
    ],
    [
      "Fijación",
      "No cementada (fijación elástica press-fit intraósea)"
    ],
    [
      "Articulaciones indicadas",
      "Metacarpofalángicas (MCF) e interfalángicas proximales (IFP) (dedos 2 a 5)"
    ],
    [
      "Diseño",
      "Doble vástago aplanado antirrotacional con preservación de ligamentos colaterales"
    ],
    [
      "Indicación clínica",
      "Artritis reumatoide, artrosis degenerativa y deformidades articulares de mano"
    ],
    [
      "Esterilización",
      "Óxido de etileno (EO) - Vida útil estéril de 5 años"
    ]
  ],
  163: [
    [
      "Material",
      "Aleación de Titanio biocompatible (Ti6Al4V ELI) con estructura trabecular porosa"
    ],
    [
      "Procedimiento asociado",
      "Descompresión del núcleo de la cabeza femoral (Core Decompression)"
    ],
    [
      "Diseño",
      "Vástago canulado de soporte subcondral con extremo roscado de anclaje diafisario"
    ],
    [
      "Porosidad trabecular",
      "70% - 80% con interconexión tridimensional osteoinductora"
    ],
    [
      "Indicación clínica",
      "Osteonecrosis de cabeza femoral (ONFH) estadios Steinberg / ARCO I y II"
    ],
    [
      "Esterilización",
      "Radiación gamma - Vida útil estéril de 5 años"
    ]
  ],
  173: [
    [
      "Material",
      "Aleación forjada de Cobalto-Cromo-Molibdeno (Co-Cr-Mo)"
    ],
    [
      "Acabado",
      "Pulido espejo quirúrgico de alta precisión (Ra < 0.05 µm)"
    ],
    [
      "Principio biomecánico",
      "Taper-slip autocentrante de doble conicidad pulida"
    ],
    [
      "Accesorios",
      "Centralizador distal de polietileno y tapón intramedular"
    ],
    [
      "Indicación clínica",
      "Artroplastia de revisión de cadera con defectos óseos proximales y fémur amplio"
    ],
    [
      "Esterilización",
      "Radiación gamma - Vida útil estéril de 5 años"
    ]
  ],
  183: [
    [
      "Material",
      "Aleación de Titanio biocompatible Ti-6Al-4V de grado médico"
    ],
    [
      "Segmentos disponibles",
      "Cuerpos diafisarios modulares cilíndricos y cónicos de longitud variable (40 a 200 mm)"
    ],
    [
      "Vástagos de fijación",
      "Vástagos intramedulares ranurados con orificios de bloqueo transversal"
    ],
    [
      "Mecanismo de unión",
      "Conos morse reforzados con pernos de bloqueo axial antirrotación"
    ],
    [
      "Indicación clínica",
      "Resección oncológica diafisaria, fracturas conminutas con defecto masivo y pseudoartrosis"
    ],
    [
      "Esterilización",
      "Radiación gamma - Vida útil estéril de 5 años"
    ]
  ],
  185: [
    [
      "Material",
      "Aleación de Cobalto-Cromo-Molibdeno (Co-Cr-Mo) y componente rotuliano en UHMWPE"
    ],
    [
      "Fijación",
      "Cementada (ajuste optimizado con cemento óseo)"
    ],
    [
      "Diseño trocleal",
      "Surco anatómico extendido proximalmente de baja constricción"
    ],
    [
      "Preservación ósea",
      "Conservación completa de compartimentos tibiofemorales medial y lateral"
    ],
    [
      "Indicación clínica",
      "Artrosis patelofemoral severa aislada, displasia trocleal y condromalacia grado IV"
    ],
    [
      "Esterilización",
      "Radiación gamma / Óxido de etileno - Vida útil de 5 años"
    ]
  ],
  202: [
    [
      "Material",
      "Aleación de Cobalto-Cromo-Molibdeno con recubrimiento bioactivo Ti + HA"
    ],
    [
      "Fijación",
      "No cementada biológica press-fit"
    ],
    [
      "Geometría",
      "Cúpula esférica anatómica de perfil bajo con vástago central de anclaje corto"
    ],
    [
      "Preservación ósea",
      "Resección mínima del cartílago sin osteotomía del cuello humeral"
    ],
    [
      "Indicación clínica",
      "Artrosis de hombro en pacientes jóvenes, necrosis avascular de cabeza humeral"
    ],
    [
      "Esterilización",
      "Radiación gamma - Vida útil estéril de 5 años"
    ]
  ],
  210: [
    [
      "Material",
      "Aleación forjada Co-Cr-Mo / Ti6Al4V y bujes de UHMWPE grado médico"
    ],
    [
      "Tipo de constricción",
      "Semiconstreñida con bisagra modular y laxitud rotacional controlada"
    ],
    [
      "Fijación",
      "Cementada (con centralizadores intramedulares)"
    ],
    [
      "Ángulo de flexoextensión",
      "Rango de movimiento funcional de 0° a 130°"
    ],
    [
      "Indicación clínica",
      "Artritis reumatoide destructiva de codo, fracturas distales conminutas y revisiones"
    ],
    [
      "Esterilización",
      "Radiación gamma - Vida útil estéril de 5 años"
    ]
  ],
  211: [
    [
      "Material",
      "Aleación forjada de Cobalto-Cromo-Molibdeno (Co-Cr-Mo) pulida a espejo"
    ],
    [
      "Diseño",
      "Sistema modular de cabeza y vástago intramedular con conexión cónica morse"
    ],
    [
      "Fijación",
      "No cementada (vástago intramedular de deslizamiento suave)"
    ],
    [
      "Variedad dimensional",
      "Múltiples diámetros de cúpula (18 a 24 mm) y diferentes longitudes de vástago"
    ],
    [
      "Indicación clínica",
      "Fracturas de cabeza radial Mason III y IV, luxación-fractura de Essex-Lopresti y secuelas"
    ],
    [
      "Esterilización",
      "Radiación gamma - Vida útil estéril de 5 años"
    ]
  ],
  212: [
    [
      "Material",
      "Aleación de Co-Cr-Mo con porción metafisaria en Titanio poroso biológico"
    ],
    [
      "Geometría de cúpula",
      "Perfil elíptico anatómico asimétrico con bisel de pronosupinación"
    ],
    [
      "Fijación",
      "No cementada biológica press-fit"
    ],
    [
      "Compatibilidad cinemática",
      "Articulación radiocubital proximal y radiocapitelar"
    ],
    [
      "Indicación clínica",
      "Reemplazo anatómico de cabeza radial, inestabilidad posterolateral rotatoria de codo"
    ],
    [
      "Esterilización",
      "Radiación gamma - Vida útil estéril de 5 años"
    ]
  ],
  217: [
    [
      "Tecnología de manufactura",
      "Manufactura Aditiva por Estereolitografía (SLA 3D)"
    ],
    [
      "Material",
      "Resina fotosensible biocompatible de alta tenacidad y resolución micrométrica"
    ],
    [
      "Precisión dimensional",
      "Escala anatómica 1:1 con tolerancia dimensional < 0.2 mm"
    ],
    [
      "Áreas anatómicas",
      "Pelvis, cadera, rodilla, fémur, tibia, columna vertebral, cráneo y tórax"
    ],
    [
      "Indicación clínica",
      "Planificación prequirúrgica, simulación de osteotomías y moldeo de placas"
    ],
    [
      "Presentación",
      "No estéril, uso preoperatorio individual con vida útil de 3 meses"
    ]
  ],
  219: [
    [
      "Material",
      "Poliamida médica de alta resistencia (Nylon PA12) mediante sinterizado láser (SLS)"
    ],
    [
      "Diseño",
      "Guía específica de paciente (PSI) con acople unívoco a la superficie ósea"
    ],
    [
      "Ranuras de osteotomía",
      "Compatible con hojas de sierra oscilante quirúrgica estándar"
    ],
    [
      "Orificios de fijación",
      "Compatibles con agujas de Kirschner de 2.0 mm y 2.5 mm"
    ],
    [
      "Indicación clínica",
      "Osteotomía tibial alta (HTO), osteotomía femoral distal (DFO) y artroplastia"
    ],
    [
      "Esterilización",
      "Suministrada estéril (óxido de etileno, EO) para uso exclusivo de un solo paciente"
    ]
  ],
  220: [
    [
      "Material",
      "Poliamida médica PA12 certificada biocompatible (Impresión 3D SLS)"
    ],
    [
      "Modelos disponibles",
      "Trece configuraciones para abordajes acetabulares y femorales"
    ],
    [
      "Fijación temporal",
      "Orificios para clavos de fijación bicorticales de rápida inserción"
    ],
    [
      "Tolerancia de corte",
      "Error angular < 1° y desviación lineal < 0.5 mm"
    ],
    [
      "Indicación clínica",
      "Displasia del desarrollo de la cadera (DDC), osteotomía periacetabular y deformidades"
    ],
    [
      "Esterilización",
      "Óxido de etileno (EO) - Uso exclusivo por paciente"
    ]
  ],
  221: [
    [
      "Material",
      "Poliamida grado médico (PA12) de alta tenacidad (Manufactura Aditiva 3D)"
    ],
    [
      "Segmentos anatómicos",
      "Muñeca, carpo, metacarpo, tobillo, tarso y metatarso"
    ],
    [
      "Tipos clínicos",
      "Diseños Tipo I y Tipo II para cortes diafisarios y angulares"
    ],
    [
      "Fijación ósea",
      "Micro-agujas de Kirschner de 1.0 mm a 1.6 mm"
    ],
    [
      "Indicación clínica",
      "Hallux valgus severo, deformidades de radio distal y secuelas de fracturas en dedos"
    ],
    [
      "Esterilización",
      "Óxido de etileno (EO) - Empaque estéril individual"
    ]
  ],
  222: [
    [
      "Material",
      "Aleación forjada de Titanio (Ti-6Al-4V) de grado médico"
    ],
    [
      "Textura superficial",
      "Micro-ranuras circunferenciales y acabado rugoso de alta adherencia"
    ],
    [
      "Orificios de fijación",
      "Sistema multi-orificio periférico para tornillos de esponjosa divergentes"
    ],
    [
      "Compatibilidad",
      "Acepta insertos de polietileno altamente entrecruzado (HXLPE) y doble movilidad"
    ],
    [
      "Indicación clínica",
      "Reconstrucción postoncológica de pelvis, defectos Paprosky III y trauma severo"
    ],
    [
      "Esterilización",
      "Radiación gamma - Vida útil estéril de 5 años"
    ]
  ],
  223: [
    [
      "Material",
      "Acero quirúrgico inoxidable de grado médico y aleaciones ligeras anodizadas"
    ],
    [
      "Abordaje compatible",
      "Abordaje anterior directo mínimamente invasivo (DAA / DAMIS)"
    ],
    [
      "Parámetros controlables",
      "Tracción axial, rotación interna/externa e hiperextensión graduada"
    ],
    [
      "Visualización",
      "Escalas graduadas milimétricas y dinamométricas continuas"
    ],
    [
      "Indicación clínica",
      "Artroplastia primaria de cadera mínimamente invasiva con preservación muscular"
    ],
    [
      "Esterilización",
      "Componentes de contacto autoclavables y estructura desinfectable en quirófano"
    ]
  ],
  225: [
    [
      "Tecnología",
      "Manufactura Aditiva 3D por Haz de Electrones (EBM / SLM)"
    ],
    [
      "Material",
      "Polvo de aleación de Titanio biomimético (Ti6Al4V ELI) según norma ASTM F3001"
    ],
    [
      "Arquitectura interna",
      "Gradiente poroso funcional trabecular (65% - 80% porosidad interconectada)"
    ],
    [
      "Fijación",
      "Multi-orificios anatómicos angulados para tornillos óseos bloqueados"
    ],
    [
      "Indicación clínica",
      "Reconstrucción oncológica ósea, defectos masivos de pelvis y articulaciones complejas"
    ],
    [
      "Certificación",
      "Dispositivo médico implantable personalizado bajo registro sanitario oficial"
    ]
  ],
  229: [
    [
      "Componentes",
      "Mezclador al vacío, pistola dosificadora ergonómica, cánula femoral larga y cánula acetabular"
    ],
    [
      "Material",
      "Polímeros médicos antiadherentes de alta resistencia (PC / ABS / POM) libres de pirógenos"
    ],
    [
      "Sistema de mezclado",
      "Mezcla en circuito cerrado con puerto para conexión de bomba de vacío (-0.08 MPa)"
    ],
    [
      "Capacidad",
      "Compatible con preparaciones de 40 g a 80 g de cemento óseo (1 a 2 dosis)"
    ],
    [
      "Indicación clínica",
      "Presurización e inyección retrógrada de cemento en reemplazos de cadera, rodilla y hombro"
    ],
    [
      "Esterilización",
      "Óxido de etileno (EO) en doble barrera estéril desechable"
    ]
  ],
  230: [
    [
      "Componentes",
      "Pieza de mano con motor eléctrico incorporado, pack de baterías y boquillas de doble luz"
    ],
    [
      "Modos de presión",
      "Modo de alta presión (limpieza de lecho óseo) y baja presión (lavado de partes blandas)"
    ],
    [
      "Caudal de irrigación",
      "700 a 1500 ml/min con pulsaciones continuas de alta frecuencia"
    ],
    [
      "Función de aspiración",
      "Aspiración coaxial simultánea que evacúa fluidos y detritos al bote de succión"
    ],
    [
      "Indicación clínica",
      "Preparación del canal femoral y acetabular en artroplastia, trauma e infecciones óseas"
    ],
    [
      "Esterilización",
      "Óxido de etileno (EO) - Empaque estéril desechable para un solo uso"
    ]
  ],
  231: [
    [
      "Material",
      "Cerámica compuesta avanzada BIOLOX® delta (Alúmina reforzada con Circonia - ZTA)"
    ],
    [
      "Cono de acople",
      "Cono estándar 12/14 de alta precisión micrométrica"
    ],
    [
      "Diámetros disponibles",
      "28 mm, 32 mm, 36 mm y 40 mm"
    ],
    [
      "Longitudes de cuello",
      "Corto (S), Medio (M), Largo (L) y Extra Largo (XL)"
    ],
    [
      "Indicación clínica",
      "Artroplastia total primaria y de revisión en pacientes jóvenes y activos"
    ],
    [
      "Biocompatibilidad",
      "Totalmente inerte, libre de metales (sin liberación de iones Co-Cr-Ni)"
    ]
  ],
  232: [
    [
      "Material",
      "Aleación forjada Co-Cr-Mo con manguito adaptador de aleación de Titanio Ti6Al4V"
    ],
    [
      "Conexión",
      "Adaptador modular TF para cono 12/14"
    ],
    [
      "Opciones de offset",
      "Múltiples longitudes de compensación (-3.5 mm a +7.0 mm)"
    ],
    [
      "Función principal",
      "Reparación/rescate de cono femoral sin recambio del vástago"
    ],
    [
      "Indicación clínica",
      "Revisión acetabular aislada, inestabilidad de cadera y corrección de dismetría"
    ],
    [
      "Esterilización",
      "Radiación gamma - Vida útil estéril de 5 años"
    ]
  ],
  66: [
    [
      "Tipo de motor",
      "Motor brushless (sin escobillas) con tecnología superconductora"
    ],
    [
      "Frecuencia de oscilación",
      "Doble velocidad: Alta (12.000 opm) y Baja (10.000 opm)"
    ],
    [
      "Orientación del cabezal",
      "Rotación de 360° indexable en 8 posiciones de bloqueo"
    ],
    [
      "Sistema de seguridad",
      "Chip inteligente multiprotección (sobrecarga, temperatura y bloqueo)"
    ],
    [
      "Batería y alimentación",
      "Pack de batería de litio recargable con carga rápida de alta corriente"
    ],
    [
      "Esterilización",
      "Pieza de mano autoclavable a 134 °C (batería en canal aséptico)"
    ]
  ],
  67: [
    [
      "Tipo de motor",
      "Motor brushless de origen alemán con tecnología superconductora"
    ],
    [
      "Velocidad de rotación",
      "Doble régimen: Alta velocidad (1.200 rpm) y Baja velocidad (270 rpm)"
    ],
    [
      "Canulación central",
      "Eje hueco cannulado para agujas de Kirschner y clavos guía"
    ],
    [
      "Control de giro",
      "Selector de rotación avance, reversa y neutro con botón de seguridad"
    ],
    [
      "Acople de accesorios",
      "Mandril de acople rápido universal (Quick-Change) para brocas y fresas"
    ],
    [
      "Esterilización",
      "Cuerpo y mandril autoclavables a 134 °C (batería no esterilizable)"
    ]
  ],
  68: [
    [
      "Tipo de motor",
      "Motor brushless superconductor de alta potencia para tejido duro"
    ],
    [
      "Frecuencia de oscilación",
      "Doble velocidad programable: Alta (12.000 opm) y Baja (10.000 opm)"
    ],
    [
      "Capacidad de batería",
      "Batería de iones de litio de gran capacidad de 4000 mAh"
    ],
    [
      "Versatilidad quirúrgica",
      "Convertible a sierra esternal con arco de protección mediastínica"
    ],
    [
      "Seguridad del accesorio",
      "Bloqueo mecánico patentado anticaída de hojas de corte"
    ],
    [
      "Esterilización",
      "Pieza de mano esterilizable en autoclave a vapor a 134 °C"
    ]
  ],
};

export const PRODUCT_SPECS_EN: Record<number, [string, string][]> = {
  2: [
    [
      "Material",
      "High-purity porous tantalum (CVD - Chemical Vapor Deposition)"
    ],
    [
      "Structure",
      "Biomimetic interconnected porous trabecular matrix matching human bone"
    ],
    [
      "Contact Surface",
      "Superior and inferior anti-migration retention serrations"
    ],
    [
      "Graft Window",
      "Oversized central hollow aperture for autologous bone packing"
    ],
    [
      "Clinical Indication",
      "Interbody fusion in cervical (C2-T1) and lumbosacral (L2-S1) spine"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  14: [
    [
      "Material",
      "High-strength medical-grade forged Ti-6Al-4V titanium alloy"
    ],
    [
      "Trajectory",
      "Cortical Bone Trajectory (CBT) - caudo-cranial and medial-to-lateral"
    ],
    [
      "Thread Profile",
      "Hook-lock anti-splay thread with self-tapping dual-lead pitch"
    ],
    [
      "Fixation Strength",
      ">30% increase in pullout resistance across low-density osteoporotic bone"
    ],
    [
      "Clinical Indication",
      "Posterior thoracolumbar fixation in osteoporosis, spondylolisthesis, and revision"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  26: [
    [
      "Material",
      "Biocompatible dynamic titanium alloy with high fatigue resilience"
    ],
    [
      "Morphology",
      "Anatomical U-shaped dynamic cushioning main body"
    ],
    [
      "Anchoring Flanges",
      "Four retentive wing plates with serrated anti-migration ridges"
    ],
    [
      "Multi-Level Design",
      "Staggered flange layout accommodating contiguous two-level placement"
    ],
    [
      "Clinical Indication",
      "Grade 1-2 lumbar spinal stenosis (L1-L5) requiring dynamic decompression"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  34: [
    [
      "Spacer Material",
      "Biocompatible PEEK with cortical-bone-matching elastic modulus"
    ],
    [
      "Plate Material",
      "Low-profile integrated medical titanium alloy locking plate"
    ],
    [
      "Fixation Mechanism",
      "4 divergent self-locking bone screws functioning as a bone wedge anchor"
    ],
    [
      "Biomechanical Profile",
      "Non-rigid load-sharing connection preventing stress shielding"
    ],
    [
      "Clinical Indication",
      "Anterior Lumbar Interbody Fusion (ALIF) across L1-S1 segments"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  36: [
    [
      "Anchor Material",
      "TC4 ELI titanium alloy powder (YY/T 1701 compliant)"
    ],
    [
      "Technology",
      "Additive manufacturing via Laser Beam Melting (LBM 3D)"
    ],
    [
      "Thread Design",
      "High-low double-thread self-tapping profile (no pre-drilling)"
    ],
    [
      "Inserter Material",
      "Surgical stainless steel 304 (YY/T 0726 compliant)"
    ],
    [
      "Clinical Indication",
      "Soft-tissue-to-bone fixation in shoulder and knee joints"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  39: [
    [
      "Core Material",
      "Medical-grade high-tensile titanium alloy"
    ],
    [
      "Bio-Coating",
      "High-purity bioactive Tantalum applied via Physical Vapor Deposition (PVD)"
    ],
    [
      "Configurations",
      "Single-thread MD(I) and Double-thread MD(II) (3.5 mm to 6.5 mm)"
    ],
    [
      "Biological Profile",
      "Strong osteoinduction, superior osseointegration, and antibacterial action"
    ],
    [
      "Clinical Indication",
      "Soft-tissue-to-bone fixation in shoulder, knee, ankle, elbow, and small joints"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  40: [
    [
      "Suture Material",
      "Multi-strand braided UHMWPE yarn (YY/T 1431-2016 compliant)"
    ],
    [
      "Needle Material",
      "Surgical stainless steel 12Cr18Ni9 (YY/T 0043-2016 compliant)"
    ],
    [
      "Color Variants",
      "Solid White, Solid Blue, and Blue-White spiral pattern"
    ],
    [
      "Biomechanical Properties",
      "Ultra-high tensile strength, non-fraying, superior knot security"
    ],
    [
      "Clinical Indication",
      "Soft tissue approximation, tendon repair, and orthopedic joint ligation"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - Single-use sterile packaging"
    ]
  ],
  41: [
    [
      "Material",
      "High-fatigue-strength Cobalt-Chromium-Molybdenum (Co-Cr-Mo) alloy"
    ],
    [
      "Design",
      "Two-pronged staple with serrated retention teeth preventing soft tissue slip"
    ],
    [
      "Prong Tips",
      "Sharp conical tips facilitating controlled cortical bone impaction"
    ],
    [
      "Mechanism",
      "Rigid static compression fixation against the outer bone cortex"
    ],
    [
      "Clinical Indication",
      "Fixation of tendons, ligaments, and grafts to bone in knee and hand"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  42: [
    [
      "Button Material",
      "Biocompatible polished low-profile titanium alloy"
    ],
    [
      "Loop Material",
      "Continuous braided ultra-high-strength UHMWPE loop"
    ],
    [
      "Configurations",
      "Standalone plates, fixed continuous loops, and adjustable loop systems"
    ],
    [
      "Mechanism",
      "Cortical suspensory flipping fixation against the outer femoral cortex"
    ],
    [
      "Clinical Indication",
      "Femoral graft fixation in knee ligament reconstruction (ACL / PCL)"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  43: [
    [
      "Blade Material",
      "Imported premium surgical stainless steel with hardened cutting edge"
    ],
    [
      "Coupling Mechanism",
      "Snap-lock safety connection preventing accidental blade detachment"
    ],
    [
      "Interface Identification",
      "Distinct color-coded hub system for instant tip profile recognition"
    ],
    [
      "System Compatibility",
      "Universal compatibility with standard arthroscopic shaver handpieces"
    ],
    [
      "Clinical Indication",
      "Resection and debridement of synovial, meniscal, and soft tissues"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - Sterile single-use packaging"
    ]
  ],
  44: [
    [
      "Material",
      "Medical-grade artifact-free Polyetheretherketone (PEEK)"
    ],
    [
      "Thread Variations",
      "MB(II) partial double-thread and MB(III) continuous full-thread profile"
    ],
    [
      "Pre-Loaded Sutures",
      "1 or 2 high-strength braided UHMWPE sutures (pure white & blue-white)"
    ],
    [
      "Inserter Shaft",
      "Calibrated shaft with laser-etched insertion depth indicator lines"
    ],
    [
      "Clinical Indication",
      "Soft-tissue-to-bone fixation in shoulder, ankle, knee, and elbow"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  45: [
    [
      "Material",
      "Biocompatible medical-grade Polyetheretherketone (PEEK)"
    ],
    [
      "Models",
      "Model JM (standalone screw) and Model JQ (screw with protective sheath)"
    ],
    [
      "Thread Profile",
      "Cannulated blunt-edge threads preventing graft laceration during driving"
    ],
    [
      "Biomechanical Advantage",
      "Mitigates graft shear and completely eliminates MRI artifacts"
    ],
    [
      "Clinical Indication",
      "Graft fixation in anterior and posterior cruciate ligament (ACL / PCL) surgery"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  46: [
    [
      "Implant Material",
      "Miniature subcapsular fixation rods in medical-grade PEEK"
    ],
    [
      "Suture Material",
      "2-0# ultra-high-strength braided UHMWPE and polypropylene suture"
    ],
    [
      "Safety Mechanism",
      "Adjustable depth-limiting sheath protecting neurovascular bundles"
    ],
    [
      "Surgical Activation",
      "360° single-handed active deployment mechanism on ergonomic handle"
    ],
    [
      "Needle Profiles",
      "Straight, 12° forward curved, and 12° reverse curved configurations"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - Sterile single-use packaging"
    ]
  ],
  47: [
    [
      "Body Material",
      "Medical-grade high-clarity rigid transparent polymer"
    ],
    [
      "External Architecture",
      "Fully threaded outer body ensuring secure capsular retention"
    ],
    [
      "Sealing System",
      "Closed elastomeric dual-dam seal preventing irrigation fluid loss"
    ],
    [
      "Suture Management",
      "Transparent tube supporting easy suture shuttling and visualization"
    ],
    [
      "Clinical Indication",
      "Portal access creation and protection in arthroscopic surgeries"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - Sterile single-use packaging"
    ]
  ],
  48: [
    [
      "Material",
      "Medical-grade titanium alloy with anodized surface treatment"
    ],
    [
      "Tip Geometry",
      "Sharp self-tapping conical tip allowing direct insertion into bone"
    ],
    [
      "Thread Architecture",
      "Dual-zone: proximal plate-replicating thread and distal cortical bone thread"
    ],
    [
      "Suture Material",
      "High-strength braided UHMWPE sutures with contrast color coding"
    ],
    [
      "Clinical Indication",
      "Soft-tissue, tendon, and ligament reattachment to osseous structures"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  49: [
    [
      "Burr Head Material",
      "High-hardness 30Cr13 stainless steel (YY/T 0294.1-2016 compliant)"
    ],
    [
      "Drive Rod Material",
      "304 / 06Cr19Ni10 stainless steel (GB/T 20878-2007 compliant)"
    ],
    [
      "Burr Geometries",
      "Cylindrical and spherical head options in various diameters"
    ],
    [
      "Console Compatibility",
      "Broad compatibility with >90% of arthroscopic shaver systems"
    ],
    [
      "Clinical Indication",
      "Subacromial acromioplasty, femoral notchplasty, and bone debridement"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  51: [
    [
      "Fixation Mechanism",
      "Expanding Nickel-Titanium (Nitinol) shape-memory anchor wings"
    ],
    [
      "Anchor Body",
      "Threadless cylindrical profile for direct push-in pilot hole insertion"
    ],
    [
      "Available Diameters",
      "Ultra-compact and standard sizes: 1.3 mm, 1.8 mm, 2.4 mm, and 2.8 mm"
    ],
    [
      "Suture Material",
      "Pre-loaded with 1 or 2 high-strength braided UHMWPE sutures"
    ],
    [
      "Clinical Indication",
      "Ligament and soft tissue fixation in shoulder, knee, hand, wrist, and ankle"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  52: [
    [
      "Material",
      "Medical-grade soft flexible elastomeric silicone"
    ],
    [
      "Tip Geometry",
      "Type II eccentric distal tip facilitating insertion and preventing retraction"
    ],
    [
      "Depth Limiter",
      "5 mm thick C-shaped silicone pad providing positive depth regulation"
    ],
    [
      "Fluid Barrier",
      "Dual-layer watertight and airtight sealing against fluid extravasation"
    ],
    [
      "Clinical Indication",
      "Atraumatic flexible portal sleeve for instrument entry in arthroscopy"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - Sterile single-use packaging"
    ]
  ],
  56: [
    [
      "Button Material",
      "Biocompatible low-profile polished titanium alloy"
    ],
    [
      "Loop Tape Material",
      "Adjustable ultra-high-tenacity braided UHMWPE ribbon"
    ],
    [
      "Adjustment Mechanism",
      "One-way slip-resistant self-locking mechanism with continuous tensioning"
    ],
    [
      "Surgical Advantage",
      "Eliminates pre-measurement errors and prevents socket bottoming out"
    ],
    [
      "Clinical Indication",
      "Adjustable suspensory graft fixation in knee ACL and PCL reconstruction"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  57: [
    [
      "Material",
      "Medical-grade radiolucent Polyetheretherketone (PEEK)"
    ],
    [
      "Technology",
      "Threaded knotless design tailored for lateral-row double-row fixation"
    ],
    [
      "Structure",
      "Hollow cannulated body facilitating osteoblast cell migration and healing"
    ],
    [
      "Suture Compatibility",
      "Accommodates round sutures, flat tapes, or hybrid strands (4 or 8 strands)"
    ],
    [
      "Clinical Indication",
      "Rotator cuff lateral row, Bankart, and shoulder/knee reconstructions"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  58: [
    [
      "Staple Material",
      "Medical-grade biocompatible surgical stainless steel"
    ],
    [
      "Firing Mechanism",
      "Uniform manual trigger stroke with jam-free staple ejection"
    ],
    [
      "Staple Formation",
      "Engineered crown height over skin relieving compressive tissue stress"
    ],
    [
      "Cosmetic Advantage",
      "Minimizes dermal trauma and delivers neat, thin scar formation"
    ],
    [
      "Clinical Indication",
      "Fast skin wound and surgical incision closure in orthopedic surgeries"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - Sterile single-use packaging"
    ]
  ],
  69: [
    [
      "Material",
      "Biocompatible high-tensile multifilament wrought titanium alloy"
    ],
    [
      "Cable Architecture",
      "49 braided micro-filaments (7 bundles × 7 strands per bundle)"
    ],
    [
      "Diameter",
      "Calibrated 1.08 mm diameter combining high tensile strength and pliability"
    ],
    [
      "Locking Clip",
      "Low-profile single-headed locking clip with 20° angular adjustability"
    ],
    [
      "Clinical Indication",
      "Sublaminar, interspinous, and facet cervical fixation (C1-C7)"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  70: [
    [
      "Material",
      "Biomimetic microporous titanium alloy via 3D additive manufacturing"
    ],
    [
      "Trabecular Porosity",
      "50% to 80% interconnected osteoconductive open porosity"
    ],
    [
      "Biomechanical Profile",
      "Elastic modulus matching cancellous bone, eliminating stress shielding"
    ],
    [
      "Cervical Variants",
      "IVE and IVN models dedicated to cervical segments (C2-T1)"
    ],
    [
      "Thoracolumbar Variants",
      "IVC, IVD, and IVO models dedicated to thoracolumbar segments (T2-S1)"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  71: [
    [
      "Material",
      "High-strength medical-grade forged Ti-6Al-4V titanium alloy"
    ],
    [
      "Spinal Rods",
      "Pre-cut and pre-bent titanium rods available in 3.5 mm and 4.0 mm diameters"
    ],
    [
      "Lateral Mass Screws",
      "Polyaxial screws (<20 mm) with an extreme 100° cone of angulation"
    ],
    [
      "Pedicle Screws",
      "Polyaxial screws (>20 mm) with a 90° swing angle"
    ],
    [
      "Clinical Indication",
      "Posterior occipitocervicothoracic fixation (Occiput to T3)"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  72: [
    [
      "Material",
      "High-purity medical-grade titanium with superior biocompatibility"
    ],
    [
      "Structure",
      "Fenestrated cylindrical tubular mesh enabling omnidirectional bone ingrowth"
    ],
    [
      "Available Lengths",
      "Comprehensive lengths with 1-2 mm increments (no cutting required)"
    ],
    [
      "End Caps",
      "Arcuate parallel and angled end caps available in 9 anatomical cross-sections"
    ],
    [
      "Clinical Indication",
      "Vertebral body replacement following cervical, thoracic, and lumbar corpectomy"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  149: [
    [
      "Material",
      "TC4 ELI titanium alloy powder via 3D printing (YY/T 1701 compliant)"
    ],
    [
      "Thread Profile",
      "High-low dual-thread self-tapping configuration for superior purchase"
    ],
    [
      "Suture Holes",
      "Independent dual eyelet structure preventing suture knotting and tangle"
    ],
    [
      "Pre-Loaded Sutures",
      "Two sutures woven from white UHMWPE and blue polypropylene"
    ],
    [
      "Inserter Shaft",
      "304 stainless steel (YY/T 0726 compliant) with laser depth markers"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  150: [
    [
      "Implant Composition",
      "100% textile: Expandable sleeve and sutures made of braided UHMWPE"
    ],
    [
      "Fixation Mechanism",
      "Subcortical bunching and expansion upon tensioning ('All-Suture Ball')"
    ],
    [
      "Radiological Profile",
      "Completely radiolucent with zero artifacts on CT and MRI scans"
    ],
    [
      "Bone Preservation",
      "Sub-2mm drill hole minimizes bone removal and preserves bone stock"
    ],
    [
      "Clinical Indication",
      "Soft tissue fixation in shoulder, knee, ankle, foot, hip, elbow, and wrist"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  151: [
    [
      "Anchor Material",
      "Medical-grade biocompatible Polyetheretherketone (PEEK)"
    ],
    [
      "Morphology",
      "Hollow cannulated body facilitating biological bone ingrowth"
    ],
    [
      "Suture Material",
      "High-tenacity braided UHMWPE fiber (White / Blue-White)"
    ],
    [
      "Radiological Profile",
      "Radiolucent with zero artifacts on MRI and X-ray examinations"
    ],
    [
      "Clinical Indication",
      "Rotator cuff repair, joint instability, and ligamentous reconstructions"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  152: [
    [
      "Material",
      "Medical-grade biocompatible Polyetheretherketone (PEEK)"
    ],
    [
      "Deployment Method",
      "Impact knock-in insertion with intraoperative tissue tension adjustment"
    ],
    [
      "Technology",
      "Low-profile knotless mechanism eliminating intra-articular knot stacks"
    ],
    [
      "Size Spectrum",
      "Comprehensive range with diameters from 1.8 mm to 9.0 mm"
    ],
    [
      "Clinical Indication",
      "Soft tissue fixation in shoulder, knee, ankle, foot, hip, elbow, and wrist"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  154: [
    [
      "Material",
      "Medical-grade titanium alloy via 3D additive printing"
    ],
    [
      "Design",
      "Laminoplasty plate with integrated porous trabecular bridging zones"
    ],
    [
      "Inner Surface",
      "Smooth polished profile protecting the dural sac and spinal cord"
    ],
    [
      "Screw Configuration",
      "Multi-hole arrangement for versatile lateral mass and lamina purchase"
    ],
    [
      "Clinical Indication",
      "Expansive open-door laminoplasty and spinal canal decompression (C3-T3)"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  155: [
    [
      "Material",
      "Biomimetic trabecular titanium alloy via 3D additive manufacturing"
    ],
    [
      "Internal Matrix",
      "Interconnected porous network matching human cancellous bone modulus"
    ],
    [
      "Variants",
      "Model I-A (cervical spine) and Model I-B (thoracolumbar spine)"
    ],
    [
      "Endplates",
      "Anatomically angled endplates in multiple lordotic/kyphotic options"
    ],
    [
      "Clinical Indication",
      "Vertebral body replacement following tumor or trauma corpectomy"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  156: [
    [
      "Material",
      "High-strength medical-grade forged Ti-6Al-4V titanium alloy"
    ],
    [
      "Endplates",
      "Arcuate concave-convex footprint with self-stabilizing retentive teeth"
    ],
    [
      "Mechanism",
      "Centrally adjustable cylindrical distraction with anti-slip lock"
    ],
    [
      "Graft Volume",
      "Expansive open hollow chamber for through-growth bone fusion"
    ],
    [
      "Clinical Indication",
      "Thoracolumbar vertebral body replacement (T1-L5) following corpectomy"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  157: [
    [
      "Cage Body",
      "Radiolucent medical-grade Polyetheretherketone (PEEK)"
    ],
    [
      "Integrated Plate",
      "Zero-profile anterior titanium plate sitting flush within the disc space"
    ],
    [
      "Fixation Screws",
      "Titanium screws featuring self-locking rings preventing back-out"
    ],
    [
      "Lordotic Profiles",
      "Zero-profile lordotic angles of 0°, 4°, 6°, and 8°"
    ],
    [
      "Clinical Indication",
      "Anterior Cervical Discectomy and Fusion (ACDF) across C2-T1"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  158: [
    [
      "Material",
      "Medical pure titanium offering exceptional plasticity and biocompatibility"
    ],
    [
      "Mechanism",
      "Integrated retention card slot rigidly securing the elevated lamina"
    ],
    [
      "Profile",
      "Ultra-low profile minimizing friction against paraspinal soft tissues"
    ],
    [
      "Hole Layout",
      "Multi-hole array accommodating lateral mass and laminar trajectories"
    ],
    [
      "Clinical Indication",
      "Expansive open-door laminoplasty across C3-T3 spinal segments"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  159: [
    [
      "Material",
      "High-strength medical-grade forged Ti-6Al-4V titanium alloy"
    ],
    [
      "Screw Design",
      "Cannulated pedicle screws with integrated extra-long extension arms"
    ],
    [
      "Thread Profile",
      "Self-tapping dual-lead thread maximizing pullout resistance"
    ],
    [
      "Setscrew Geometry",
      "Anti-cross-threading square thread with Torx drive socket"
    ],
    [
      "Rod Compatibility",
      "Compatible with pre-bent 5.5 mm and 6.0 mm titanium rods"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  160: [
    [
      "Material",
      "High-biocompatibility medical-grade forged Ti-6Al-4V titanium alloy"
    ],
    [
      "Rod Connection",
      "Direct top-loading lateral connection eliminating bulky offset couplers"
    ],
    [
      "Entry Point",
      "15 mm below posterior superior iliac spine preserving the iliac crest"
    ],
    [
      "Shank Profile",
      "Smooth unthreaded proximal shank protecting the sacroiliac joint"
    ],
    [
      "Clinical Indication",
      "Spinopelvic fixation and lumbosacral reconstruction to the ilium"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  164: [
    [
      "Material",
      "High-strength medical-grade forged Ti-6Al-4V titanium alloy"
    ],
    [
      "Cannulation & Ports",
      "Cannulated shaft with radial distal fenestrations for cement extrusion"
    ],
    [
      "Cement Compatibility",
      "Optimized for high-viscosity polymethylmethacrylate (PMMA) bone cement"
    ],
    [
      "Configurations",
      "Standard and extended-arm towers accommodating open and MIS workflows"
    ],
    [
      "Clinical Indication",
      "Posterior fixation in severe osteoporosis, pathological fractures, and tumor salvage"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  165: [
    [
      "Material",
      "Forged Ti-6Al-4V Titanium Alloy (YY 0117.1 compliant)"
    ],
    [
      "Coating",
      "Bioactive plasma-sprayed dual coating: Porous Titanium + Hydroxyapatite"
    ],
    [
      "Fixation",
      "Cementless biological metaphyseal press-fit"
    ],
    [
      "Rotational Stability",
      "Proximal longitudinal anti-rotation ribs"
    ],
    [
      "Neck Options",
      "Standard and lateralized (+5 mm offset) configurations"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  166: [
    [
      "Material",
      "Medical-grade low-profile biocompatible titanium alloy"
    ],
    [
      "Morphology",
      "Anatomically pre-bent lordotic profile with atraumatic beveled margins"
    ],
    [
      "Locking Mechanism",
      "Integrated anti-retraction locking design preventing screw extrusion"
    ],
    [
      "Graft Window",
      "Oversized central inspection window for real-time fusion assessment"
    ],
    [
      "Clinical Indication",
      "Anterior cervical fixation for fractures, spondylolisthesis, tumors, and ACDF"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  167: [
    [
      "Material",
      "Forged Co-Cr-Mo Alloy with collarless mirror-polished finish"
    ],
    [
      "Fixation",
      "Cemented with continuous mantle"
    ],
    [
      "Geometry",
      "Smooth self-centering double taper"
    ],
    [
      "Morse Taper",
      "Standard 12/14 taper for 28, 32, and 36 mm heads"
    ],
    [
      "Indication",
      "Total and partial cemented hip arthroplasty"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  168: [
    [
      "Material",
      "Forged Ti-6Al-4V Alloy with proximal third of 3D EBM trabecular titanium"
    ],
    [
      "Fixation",
      "Cementless biological metaphyseal trabecular press-fit"
    ],
    [
      "Geometry",
      "Anatomical double taper with distal longitudinal flutes"
    ],
    [
      "Technology",
      "Interconnected biomimetic trabecular porous network"
    ],
    [
      "Indication",
      "Primary total hip arthroplasty and revisions with intact metaphysis"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  169: [
    [
      "Cage Material",
      "Medical-grade biocompatible Polyetheretherketone (PEEK) polymer"
    ],
    [
      "Radiopaque Markers",
      "Integrated high-contrast tantalum pins for fluoroscopic tracking"
    ],
    [
      "Fixation Profile",
      "Reverse-serrated teeth preventing postoperative cage retropulsion"
    ],
    [
      "Graft Chamber",
      "Expansive hollow aperture supporting direct endplate bone contact"
    ],
    [
      "Clinical Indication",
      "Cervical and thoracolumbar interbody fusion surgeries"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  170: [
    [
      "Material",
      "Forged Ti-6Al-4V Titanium Alloy with bioactive Ti + HA coating"
    ],
    [
      "Fixation",
      "Cementless biological press-fit"
    ],
    [
      "Design",
      "Triple-tapered metaphyseal wedge with distal flutes"
    ],
    [
      "Neck",
      "Slim polished neck profile with standard 12/14 Morse taper"
    ],
    [
      "Indication",
      "Primary total hip arthroplasty"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  171: [
    [
      "Material",
      "Biocompatible medical-grade Polyamide 12 (PA12) via 3D additive printing"
    ],
    [
      "Design",
      "Patient-specific custom reverse engineering from high-resolution CT data"
    ],
    [
      "Models",
      "Types I & II (unilateral spinal osteotomies) and Type III (bilateral osteotomies)"
    ],
    [
      "Accuracy",
      "Sub-millimetric anatomical fit across spinous processes, lamina, and facets"
    ],
    [
      "Clinical Indication",
      "Positioning, angular trajectory guidance, and protection in spinal osteotomies"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) - Sterile single-use packaging"
    ]
  ],
  172: [
    [
      "Material",
      "Forged Ti-6Al-4V Titanium Alloy (medical grade)"
    ],
    [
      "Length",
      "160 mm with progressive taper geometry"
    ],
    [
      "Fixation",
      "Cementless biological with distal diaphyseal engagement"
    ],
    [
      "Distal Geometry",
      "Longitudinal anti-torsion flutes and coronal slot decompression tip"
    ],
    [
      "Morse Taper",
      "Standard 12/14 taper for modular femoral heads"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  174: [
    [
      "Material",
      "Highly cross-linked ultra-high molecular weight polyethylene (HXLPE)"
    ],
    [
      "Fixation",
      "Snap-lock perimeter engagement with anti-rotation tabs"
    ],
    [
      "Configuration",
      "Standard neutral profile with high-flexion chamfered rim"
    ],
    [
      "Compatibility",
      "28 mm, 32 mm, and 36 mm ceramic and metal heads"
    ],
    [
      "Indication",
      "Articular bearing insert in primary total hip arthroplasty"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) / Gas plasma (5-year sterile shelf life)"
    ]
  ],
  175: [
    [
      "Material",
      "Cast Co-Cr-Mo Alloy with mirror-polished bearing surface"
    ],
    [
      "Function",
      "Metallic bearing liner for dual-mobility articulation"
    ],
    [
      "Bearing Surface",
      "Mirror polish finish with roughness Ra < 0.05 µm"
    ],
    [
      "Locking",
      "High-precision anti-rotation taper fit mechanism"
    ],
    [
      "Indication",
      "Primary and revision dual-mobility hip arthroplasty"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  177: [
    [
      "Material",
      "Biomimetic trabecular titanium (Ti6Al4V ELI) via EBM 3D printing"
    ],
    [
      "Fixation",
      "Cementless biological press-fit"
    ],
    [
      "Configuration",
      "3 apical screw holes for cancellous screws (G20 Series)"
    ],
    [
      "Porosity",
      "70% - 80% with interconnected open-pore microstructure"
    ],
    [
      "Indication",
      "Primary total hip arthroplasty and mild acetabular defects"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  178: [
    [
      "Material",
      "Biomimetic trabecular titanium (Ti6Al4V ELI) via EBM 3D printing"
    ],
    [
      "Configuration",
      "Multi-hole array distributed across the entire dome (G40 Series)"
    ],
    [
      "Fixation",
      "Cementless biological press-fit with multi-angle screw fixation"
    ],
    [
      "Porosity",
      "70% - 80% with interconnected open-pore microstructure"
    ],
    [
      "Indication",
      "Acetabular revision, Paprosky Type II defects, and osteopenic bone"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  179: [
    [
      "Material",
      "Biomimetic trabecular titanium (Ti6Al4V ELI) via EBM 3D printing"
    ],
    [
      "Technology",
      "Electron Beam Melting (EBM) additive manufacturing"
    ],
    [
      "Structure",
      "Biomimetic mesh with 75-85% interconnected porosity"
    ],
    [
      "Fixation",
      "Direct fixation with forged TC4 titanium bone screws"
    ],
    [
      "Indication",
      "Reconstruction of Paprosky Type II and III acetabular defects"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  180: [
    [
      "Material",
      "Biomimetic porous tantalum metal (CVD / Additive manufacturing)"
    ],
    [
      "Porosity",
      "75% - 85% with 100% interconnected trabecular architecture"
    ],
    [
      "Pore Size",
      "400 µm to 600 µm (optimal for accelerated osteogenesis)"
    ],
    [
      "Elastic Modulus",
      "Approximately 3 GPa (closely matches human cancellous bone)"
    ],
    [
      "Indication",
      "Paprosky Type II and III cavitary and segmental acetabular defects"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  181: [
    [
      "Material",
      "High-purity forged Co-Cr-Mo Alloy (YY 0117.3 compliant)"
    ],
    [
      "Surface Finish",
      "Surgical-grade mirror polish (Ra < 0.02 µm)"
    ],
    [
      "Morse Taper",
      "Standard 12/14 female taper with anti-galling micro-grooves"
    ],
    [
      "Available Diameters",
      "28 mm, 32 mm, and 36 mm"
    ],
    [
      "Neck Offsets",
      "Short (-3.5 mm), Standard (0 mm), Long (+3.5 mm), Extra-long (+7 mm)"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  184: [
    [
      "Material",
      "Forged Ti-6Al-4V Titanium Alloy with hard anodized surface"
    ],
    [
      "System",
      "Modular limb-salvage and femoral diaphyseal reconstructive system"
    ],
    [
      "Connections",
      "Heavy-duty Morse tapers secured via axial compression screws"
    ],
    [
      "Modularity",
      "Proximal hip bodies, diaphyseal segments, and intramedullary stems"
    ],
    [
      "Indication",
      "Femoral bone tumors, severe comminuted fractures, and massive revisions"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  187: [
    [
      "Material",
      "Cast Co-Cr-Mo Alloy (femur & tray) / UHMWPE"
    ],
    [
      "Prosthesis Type",
      "Unicompartmental Knee Arthroplasty (UKA)"
    ],
    [
      "Indication",
      "Isolated medial or lateral unicompartmental osteoarthritis"
    ],
    [
      "Kinematics",
      "Single-radius spherical surface with cruciate ligament preservation"
    ],
    [
      "Fixation",
      "Cemented with uniform mantle"
    ],
    [
      "Sterilization",
      "Gamma Radiation (metals) / Ethylene Oxide (PE)"
    ]
  ],
  188: [
    [
      "Material",
      "Biocompatible multifilament wrought titanium alloy"
    ],
    [
      "Cable Construction",
      "Helically braided multi-wire configuration for superior flexibility"
    ],
    [
      "Terminal Feature",
      "Enlarged spherical head with unidirectional tensioning lock"
    ],
    [
      "Clinical Indication",
      "Cerclage wiring and internal fixation of limb and periprosthetic fractures"
    ],
    [
      "Biomechanical Advantage",
      "Resists fatigue fracture and minimizes periosteal soft tissue irritation"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  190: [
    [
      "Material",
      "Cast Co-Cr-Mo Alloy / UHMWPE insert & patella"
    ],
    [
      "Prosthesis Type",
      "Primary cruciate-retaining surface knee (CR)"
    ],
    [
      "Indication",
      "Primary total knee arthroplasty with intact functional PCL"
    ],
    [
      "Fixation",
      "Cemented"
    ],
    [
      "Design",
      "Cruciate preservation with deep trochlear groove & thinned condyle"
    ],
    [
      "Sterilization",
      "Gamma Radiation (metals) / Ethylene Oxide (PE)"
    ]
  ],
  191: [
    [
      "Material",
      "Cast Co-Cr-Mo Alloy / UHMWPE insert & patella"
    ],
    [
      "Prosthesis Type",
      "Anatomical surface arthroplasty (Model XA)"
    ],
    [
      "Indication",
      "Primary knee joint replacement"
    ],
    [
      "Fixation",
      "Cemented"
    ],
    [
      "Geometry",
      "Optimized trochlear design for deep flexion and patellar relief"
    ],
    [
      "Sterilization",
      "Gamma Radiation (metals) / Ethylene Oxide (PE)"
    ]
  ],
  192: [
    [
      "Material",
      "Cast Co-Cr-Mo Alloy & UHMWPE with Vitamin E (VE-HXLPE)"
    ],
    [
      "Coating",
      "Biological dual layer: Porous Titanium + Hydroxyapatite (Ti + HA)"
    ],
    [
      "Technology",
      "Thermal Plasma Spray deposition"
    ],
    [
      "Fixation",
      "Cementless biological press-fit"
    ],
    [
      "Indication",
      "Primary total knee arthroplasty in good bone stock"
    ],
    [
      "Sterilization",
      "Gamma Radiation (metals) / Ethylene Oxide (PE)"
    ]
  ],
  194: [
    [
      "Material",
      "UHMWPE with Vitamin E infusion (VE-HXLPE)"
    ],
    [
      "Compatibility",
      "CR (Cruciate-Retaining) and PS (Posterior-Stabilized) setups"
    ],
    [
      "Properties",
      "Superior oxidation resistance and ultralow wear rates"
    ],
    [
      "Kinematics",
      "Congruent dual-plane articular surface & high-flexion anterior notch"
    ],
    [
      "Indication",
      "Articular bearing component in knee arthroplasty"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO) / Gas plasma (5-year sterile shelf life)"
    ]
  ],
  197: [
    [
      "Material",
      "Cast Co-Cr-Mo Alloy / Forged TC4 Titanium / Type 2 UHMWPE"
    ],
    [
      "System",
      "Modular revision knee prosthetic system (Model XQ)"
    ],
    [
      "Modularity",
      "Straight/eccentric intramedullary stems & augmentation blocks"
    ],
    [
      "Indication",
      "Revision surgery and complex primary arthroplasty with bone loss"
    ],
    [
      "Fixation",
      "Cemented with modular stabilization"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  199: [
    [
      "Material",
      "Co-Cr-Mo Alloy / TC4 & TC4ELI Titanium / Type 2 UHMWPE"
    ],
    [
      "System",
      "Modular rotating hinge with rotating platform"
    ],
    [
      "Application",
      "Total knee arthroplasty (TKA) and revision procedures"
    ],
    [
      "Fixation",
      "Cemented & cementless intramedullary pins"
    ],
    [
      "Technology",
      "TC4ELI winged sleeves via Electron Beam Melting (EBM)"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  201: [
    [
      "Material",
      "Porous trabecular titanium (Ti6Al4V ELI) & TC4 screws"
    ],
    [
      "Technology",
      "Electron Beam Melting (EBM) 3D printing"
    ],
    [
      "Structure",
      "Highly interconnected biomimetic trabecular porous network"
    ],
    [
      "Properties",
      "Physiological elastic modulus minimizing stress shielding"
    ],
    [
      "Indication",
      "Bone defect reconstruction in revision knee surgery"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  203: [
    [
      "Humeral Stem",
      "Titanium alloy with proximal pure titanium porous spray coating"
    ],
    [
      "Humeral Head",
      "Anatomic eccentric Co-Cr-Mo head with curvature diameters of 36-48 mm"
    ],
    [
      "Glenoid Component",
      "Ultra-high molecular weight polyethylene (UHMWPE)"
    ],
    [
      "Anti-Rotation Profile",
      "Rectangular cross-section design providing primary torsional stability"
    ],
    [
      "Clinical Indication",
      "Primary shoulder arthroplasty for osteoarthritis, AVN, and intact cuff arthrosis"
    ],
    [
      "Fixation Type",
      "Biological cementless press-fit fixation"
    ]
  ],
  205: [
    [
      "Humeral Stem",
      "Titanium alloy with proximal pure titanium porous spray coating"
    ],
    [
      "Glenoid Fixator",
      "3D-printed trabecular titanium baseplate with eccentric design"
    ],
    [
      "Articular Pair",
      "Co-Cr-Mo glenosphere and crosslinked UHMWPE humeral liner"
    ],
    [
      "Fixation Screws",
      "Titanium-coated universal screws with 0° to 30° variable angulation"
    ],
    [
      "Clinical Indication",
      "Rotator cuff tear arthropathy and severe glenohumeral osteoarthritis"
    ],
    [
      "Sterilization",
      "Gamma Radiation (metals) / Ethylene Oxide (UHMWPE components)"
    ]
  ],
  207: [
    [
      "Proximal Humerus & Segments",
      "Forged Ti-6Al-4V titanium alloy (YY 0117.1 compliant)"
    ],
    [
      "Humeral Head",
      "Cast Cobalt-Chromium-Molybdenum CoCrMo alloy (YY 0117.3 compliant)"
    ],
    [
      "Articular Converter",
      "Medical-grade TC4 titanium bar (GB/T 13810 compliant)"
    ],
    [
      "Intramedullary Stem",
      "24 cemented specifications with varied lengths and calibers"
    ],
    [
      "Clinical Indication",
      "Limb salvage after proximal humerus tumor resection and massive defects"
    ],
    [
      "Sterilization",
      "Gamma Radiation - 5-year sterile shelf life"
    ]
  ],
  213: [
    [
      "Material",
      "Co-Cr-Mo Alloy / Forged Ti6Al4V / EBM 3D Ti6Al4V ELI / UHMWPE"
    ],
    [
      "Technology",
      "Electron Beam Melting (EBM) additive manufacturing & precision forging"
    ],
    [
      "System",
      "Modular limb-salvage & diaphyseal reconstruction system"
    ],
    [
      "Indication",
      "Massive bone loss, periarticular tumors & multiple revision failures"
    ],
    [
      "Fixation",
      "Cemented with intramedullary anchoring stems"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  224: [
    [
      "Material",
      "Medical-grade pure titanium with Type 60 uniform rough surface"
    ],
    [
      "Surface Texture",
      "Circumferential micro-grooves and high-friction uniform roughness"
    ],
    [
      "Fixation",
      "Cementless biological press-fit with perimeter screw holes"
    ],
    [
      "Indication",
      "Revision surgery, severe acetabular defects, and tumor resections"
    ],
    [
      "Compatibility",
      "Delta ceramic liners and highly cross-linked HXLPE liners"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  226: [
    [
      "Material",
      "Co-Cr-Mo Alloy / Anodized Forged Ti6Al4V Titanium / UHMWPE"
    ],
    [
      "System",
      "Axial hinge salvage system with diaphyseal osteotomy segments"
    ],
    [
      "Kinematics",
      "Axial shaft with damped rotation relieving intramedullary torque"
    ],
    [
      "Indication",
      "Bone tumors (osteosarcoma), comminuted fractures & complex salvage"
    ],
    [
      "Fixation",
      "Cemented with reinforced intramedullary stems"
    ],
    [
      "Sterilization",
      "Gamma Radiation (5-year sterile shelf life)"
    ]
  ],
  227: [
    [
      "Material",
      "Medical-grade non-stick polypropylene (PP-R)"
    ],
    [
      "Components",
      "Femoral mold, tibial mold & gap measurement blocks (5, 10, 12 mm)"
    ],
    [
      "Function",
      "Intraoperative molding of antibiotic-loaded cement spacers"
    ],
    [
      "Indication",
      "Two-stage revision knee arthroplasty for periprosthetic infection"
    ],
    [
      "Mechanism",
      "Rotary thread demolding mechanism for clean separation"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO), single-use (2-year sterile shelf life)"
    ]
  ],
  228: [
    [
      "Material",
      "Medical-grade non-stick polypropylene (PP-R)"
    ],
    [
      "Components",
      "Femoral stem mold and modular femoral head molds"
    ],
    [
      "Function",
      "Intraoperative fabrication of antibiotic-impregnated cement spacers"
    ],
    [
      "Mechanism",
      "Quick-release latch and rotary demolding mechanism"
    ],
    [
      "Indication",
      "Two-stage hip revision arthroplasty for periprosthetic infection"
    ],
    [
      "Sterilization",
      "Ethylene Oxide (EO), single-use (2-year sterile shelf life)"
    ]
  ],
  24: [
    [
      "System model",
      "Huanghe INS-2 (Unicompartmental Bone-Milling Robot)"
    ],
    [
      "Milling technology",
      "Virtual boundary-guided bone grinding with sub-millimeter precision"
    ],
    [
      "Safety response time",
      "Millisecond-level safety boundary control and emergency shutdown"
    ],
    [
      "Surgical procedures",
      "Medial and lateral unicompartmental tibial and femoral bone preparation"
    ],
    [
      "Clinical indication",
      "Unicompartmental knee arthroplasty (UKA) for localized osteoarthritis"
    ],
    [
      "System features",
      "Handheld intelligent high-speed burr, 3D optical tracking and mobile console"
    ]
  ],
  59: [
    [
      "System model",
      "Changjiang INS-1 Knee (Handheld Osteotomy Robot)"
    ],
    [
      "Navigation technology",
      "Infrared optical navigation with dynamic patient motion compensation"
    ],
    [
      "Alignment accuracy",
      "Angular accuracy < 1° and bone resection depth accuracy < 1 mm"
    ],
    [
      "Surgical procedures",
      "Femoral/tibial osteotomy navigation and soft-tissue ligament balancing"
    ],
    [
      "Clinical indication",
      "Primary and revision total knee arthroplasty (TKA) in adults"
    ],
    [
      "System features",
      "High-frequency optical tracker and ergonomic touch-screen console"
    ]
  ],
  139: [
    [
      "System model",
      "Changjiang INS-1 (Intelligent Handheld Robot)"
    ],
    [
      "Navigation technology",
      "3D Optical Navigation and Active Dynamic Tracking"
    ],
    [
      "Positioning accuracy",
      "Sub-millimeter accuracy (< 1 mm) and angular accuracy (< 1°)"
    ],
    [
      "Surgical procedures",
      "Acetabular reaming, femoral preparation and cup orientation"
    ],
    [
      "Clinical indication",
      "Adult primary and complex total hip arthroplasty (THA)"
    ],
    [
      "System features",
      "Autoclavable ergonomic handheld power unit and intuitive UI"
    ]
  ],
  161: [
    [
      "Material",
      "Cobalt-Chromium-Molybdenum (Co-Cr-Mo) Alloy and UHMWPE"
    ],
    [
      "Fixation",
      "Cemented (indicated for use with bone cement)"
    ],
    [
      "Design",
      "Modular three-component system with metatarsal stem and phalanx base"
    ],
    [
      "Modularity",
      "Variable metatarsal head heights and multiple stem diameters"
    ],
    [
      "Clinical indication",
      "First metatarsophalangeal (MTP) joint reconstruction (Hallux Rigidus / Arthritis)"
    ],
    [
      "Sterilization",
      "Gamma irradiation - 5-year sterile shelf life"
    ]
  ],
  162: [
    [
      "Material",
      "Biocompatible medical-grade Titanium Alloy and joint elastomer"
    ],
    [
      "Fixation",
      "Cementless (elastic intramedullary press-fit fixation)"
    ],
    [
      "Applicable joints",
      "2nd to 5th metacarpophalangeal (MCP) and proximal interphalangeal (PIP) joints"
    ],
    [
      "Design",
      "Flattened double-stem anti-rotational geometry preserving collateral ligaments"
    ],
    [
      "Clinical indication",
      "Rheumatoid arthritis, osteoarthritis, and digital deformity correction"
    ],
    [
      "Sterilization",
      "Ethylene oxide (EO) - 5-year sterile shelf life"
    ]
  ],
  163: [
    [
      "Material",
      "Biocompatible Titanium Alloy (Ti6Al4V ELI) with porous trabecular structure"
    ],
    [
      "Associated procedure",
      "Core decompression of the femoral head (ONFH)"
    ],
    [
      "Design",
      "Cannulated subchondral support rod with threaded lateral cortical anchoring"
    ],
    [
      "Trabecular porosity",
      "70% - 80% interconnected 3D biomimetic porosity"
    ],
    [
      "Clinical indication",
      "Steinberg / ARCO Stage I and II femoral head osteonecrosis without collapse"
    ],
    [
      "Sterilization",
      "Gamma irradiation - 5-year sterile shelf life"
    ]
  ],
  173: [
    [
      "Material",
      "Forged Cobalt-Chromium-Molybdenum (Co-Cr-Mo) Alloy"
    ],
    [
      "Surface finish",
      "High-precision mirror-polished surgical finish (Ra < 0.05 µm)"
    ],
    [
      "Biomechanical principle",
      "Self-centering double-taper taper-slip mechanism"
    ],
    [
      "Accessories",
      "Polyethylene distal centralizer and medullary plug"
    ],
    [
      "Clinical indication",
      "Revision hip replacement and wide femoral canal reconstruction"
    ],
    [
      "Sterilization",
      "Gamma irradiation - 5-year sterile shelf life"
    ]
  ],
  183: [
    [
      "Material",
      "Biocompatible medical-grade Titanium Alloy (Ti-6Al-4V)"
    ],
    [
      "Available segments",
      "Modular cylindrical and tapered diaphyseal bodies (40 mm to 200 mm)"
    ],
    [
      "Fixation stems",
      "Fluted intramedullary stems with transverse interlocking screw holes"
    ],
    [
      "Coupling mechanism",
      "Reinforced morse tapers with anti-rotational axial locking bolts"
    ],
    [
      "Clinical indication",
      "Oncological diaphyseal resections, extensive segmental loss, and nonunions"
    ],
    [
      "Sterilization",
      "Gamma irradiation - 5-year sterile shelf life"
    ]
  ],
  185: [
    [
      "Material",
      "Cobalt-Chromium-Molybdenum (Co-Cr-Mo) Alloy and UHMWPE patellar component"
    ],
    [
      "Fixation",
      "Cemented (optimized for bone cement interdigitation)"
    ],
    [
      "Trochlear design",
      "Broad, low-constraint sulcus with proximal extension preventing subluxation"
    ],
    [
      "Bone preservation",
      "Complete preservation of medial and lateral tibiofemoral compartments"
    ],
    [
      "Clinical indication",
      "Isolated severe patellofemoral osteoarthritis, trochlear dysplasia, grade IV chondromalacia"
    ],
    [
      "Sterilization",
      "Gamma irradiation / Ethylene oxide - 5-year sterile shelf life"
    ]
  ],
  202: [
    [
      "Material",
      "Cobalt-Chromium-Molybdenum Alloy with Ti + HA dual-layer plasma coating"
    ],
    [
      "Fixation",
      "Cementless biological press-fit"
    ],
    [
      "Geometry",
      "Low-profile anatomical spherical shell with short central anchoring stem"
    ],
    [
      "Bone preservation",
      "Minimal cartilage reaming with zero humeral neck resection"
    ],
    [
      "Clinical indication",
      "Young patient glenohumeral arthritis, early avascular necrosis of the humeral head"
    ],
    [
      "Sterilization",
      "Gamma irradiation - 5-year sterile shelf life"
    ]
  ],
  210: [
    [
      "Material",
      "Forged Co-Cr-Mo / Ti6Al4V Alloy and medical-grade UHMWPE bushings"
    ],
    [
      "Constraint type",
      "Semi-constrained modular hinge with controlled rotational toggle"
    ],
    [
      "Fixation",
      "Cemented (with intramedullary centralizers)"
    ],
    [
      "Flexion-extension range",
      "Functional range of motion from 0° to 130°"
    ],
    [
      "Clinical indication",
      "Advanced rheumatoid arthritis, distal humeral fractures, and failed revisions"
    ],
    [
      "Sterilization",
      "Gamma irradiation - 5-year sterile shelf life"
    ]
  ],
  211: [
    [
      "Material",
      "Forged Cobalt-Chromium-Molybdenum (Co-Cr-Mo) Alloy mirror finish"
    ],
    [
      "Design",
      "Modular head and stem system with high-precision morse taper locking"
    ],
    [
      "Fixation",
      "Cementless (smooth-glide intramedullary stem)"
    ],
    [
      "Dimensional range",
      "Multiple head diameters (18 mm to 24 mm) and stem lengths"
    ],
    [
      "Clinical indication",
      "Mason Type III/IV fractures, Essex-Lopresti lesions, and post-traumatic arthrosis"
    ],
    [
      "Sterilization",
      "Gamma irradiation - 5-year sterile shelf life"
    ]
  ],
  212: [
    [
      "Material",
      "Co-Cr-Mo Alloy with proximal bioactive porous Titanium metaphyseal coating"
    ],
    [
      "Dish geometry",
      "Asymmetric anatomical elliptical dish with pronosupination relief bevel"
    ],
    [
      "Fixation",
      "Cementless biological press-fit"
    ],
    [
      "Kinematic clearance",
      "Optimized for proximal radioulnar and radiocapitellar joints"
    ],
    [
      "Clinical indication",
      "Anatomical radial head replacement and posterolateral rotatory instability"
    ],
    [
      "Sterilization",
      "Gamma irradiation - 5-year sterile shelf life"
    ]
  ],
  217: [
    [
      "Manufacturing technology",
      "Stereolithography (SLA) 3D Additive Manufacturing"
    ],
    [
      "Material",
      "High-accuracy medical-grade photosensitive polymer resin"
    ],
    [
      "Dimensional accuracy",
      "1:1 true anatomical scale with dimensional deviation < 0.2 mm"
    ],
    [
      "Anatomical regions",
      "Pelvis, hip, knee, femur, tibia, spine, skull, and thoracic cage"
    ],
    [
      "Clinical indication",
      "Preoperative surgical simulation, osteotomy trial, and plate pre-contouring"
    ],
    [
      "Packaging",
      "Non-sterile single-use with a 3-month shelf life"
    ]
  ],
  219: [
    [
      "Material",
      "Medical-grade Polyamide (Nylon PA12) via Selective Laser Sintering (SLS)"
    ],
    [
      "Design",
      "Patient-Specific Instrument (PSI) with unique cortical contour locking"
    ],
    [
      "Saw guide slots",
      "Compatible with standard surgical oscillating saw blades"
    ],
    [
      "Fixation holes",
      "Pre-drilled guides for 2.0 mm and 2.5 mm Kirschner stabilization wires"
    ],
    [
      "Clinical indication",
      "High tibial osteotomy (HTO), distal femoral osteotomy (DFO), and knee arthroplasty"
    ],
    [
      "Sterilization",
      "Ethylene oxide (EO) sterile single-patient packaging"
    ]
  ],
  220: [
    [
      "Material",
      "Certified biocompatible medical Polyamide PA12 (SLS 3D Printing)"
    ],
    [
      "Available models",
      "13 dedicated configurations for acetabular and femoral osteotomies"
    ],
    [
      "Temporary fixation",
      "Guidance holes for rapid bicortical pin stabilization"
    ],
    [
      "Resection tolerance",
      "Angular deviation < 1° and linear deviation < 0.5 mm"
    ],
    [
      "Clinical indication",
      "Developmental dysplasia of the hip (DDH), periacetabular osteotomy (PAO)"
    ],
    [
      "Sterilization",
      "Ethylene oxide (EO) single-patient sterile supply"
    ]
  ],
  221: [
    [
      "Material",
      "High-toughness medical-grade Polyamide PA12 (3D Additive Manufacturing)"
    ],
    [
      "Anatomical zones",
      "Wrist, carpus, metacarpus, ankle, tarsus, and metatarsals"
    ],
    [
      "Clinical configurations",
      "Type I and Type II designs for planar and angular osteotomies"
    ],
    [
      "Bone fixation",
      "Micro-Kirschner stabilization wires (1.0 mm to 1.6 mm)"
    ],
    [
      "Clinical indication",
      "Severe hallux valgus, ulnar shortening, and small-bone malunions"
    ],
    [
      "Sterilization",
      "Ethylene oxide (EO) - Individual sterile packaging"
    ]
  ],
  222: [
    [
      "Material",
      "Forged medical-grade Titanium Alloy (Ti-6Al-4V)"
    ],
    [
      "Surface texture",
      "Circumferential micro-grooves with high-friction macro-roughness"
    ],
    [
      "Fixation holes",
      "Peripheral multi-hole array for divergent cancellous bone screws"
    ],
    [
      "Bearing compatibility",
      "Accommodates highly cross-linked polyethylene (HXLPE) and dual mobility liners"
    ],
    [
      "Clinical indication",
      "Post-tumor pelvic resection, Paprosky Type III bone loss, and complex trauma"
    ],
    [
      "Sterilization",
      "Gamma irradiation - 5-year sterile shelf life"
    ]
  ],
  223: [
    [
      "Material",
      "Medical-grade surgical stainless steel and anodized lightweight alloy"
    ],
    [
      "Supported approach",
      "Direct Anterior Approach (DAA) minimally invasive total hip surgery"
    ],
    [
      "Control parameters",
      "Axial traction force, internal/external rotation, and hyperextension"
    ],
    [
      "Readout display",
      "Calibrated metric distance and dynamometric tension scales"
    ],
    [
      "Clinical indication",
      "Muscle-sparing minimally invasive primary and revision hip replacement"
    ],
    [
      "Sterilization",
      "Autoclavable patient contact attachments and cleanable main traction frame"
    ]
  ],
  225: [
    [
      "Technology",
      "Electron Beam Melting (EBM) / Selective Laser Melting (SLM) 3D Additive Manufacturing"
    ],
    [
      "Material",
      "Biomimetic Titanium Alloy powder (Ti6Al4V ELI) conforming to ASTM F3001"
    ],
    [
      "Internal architecture",
      "Functional porous trabecular gradient (65% - 80% interconnected porosity)"
    ],
    [
      "Fixation",
      "Anatomically angled locking screw holes matching patient bone density"
    ],
    [
      "Clinical indication",
      "Oncological bone defect reconstruction, massive pelvic loss, complex revision"
    ],
    [
      "Regulatory compliance",
      "Official regulatory-approved patient-matched custom implant"
    ]
  ],
  229: [
    [
      "Components",
      "Vacuum mixer, ergonomic delivery gun, long femoral cannula, and acetabular nozzle"
    ],
    [
      "Materials",
      "High-strength medical-grade non-stick polymers (PC / ABS / POM) pyrogen-free"
    ],
    [
      "Mixing mechanism",
      "Enclosed circuit mixing bowl with vacuum pump interface (-0.08 MPa)"
    ],
    [
      "Capacity",
      "Accommodates 40 g to 80 g bone cement batches (1 to 2 standard doses)"
    ],
    [
      "Clinical indication",
      "Retrograde pressurization and delivery in cemented hip, knee, and shoulder arthroplasty"
    ],
    [
      "Sterilization",
      "Ethylene oxide (EO) sterile double-barrier disposable packaging"
    ]
  ],
  230: [
    [
      "Components",
      "Electric motor handpiece, battery pack, and dual-lumen suction nozzles"
    ],
    [
      "Pressure modes",
      "High-pressure mode (bone bed preparation) and low-pressure mode (soft-tissue irrigation)"
    ],
    [
      "Flow rate",
      "700 to 1500 ml/min continuous high-frequency pulsed irrigation"
    ],
    [
      "Suction function",
      "Simultaneous coaxial aspiration removing fluids and bone debris to suction canisters"
    ],
    [
      "Clinical indication",
      "Femoral canal and acetabular preparation in arthroplasty, trauma, and osteomyelitis"
    ],
    [
      "Sterilization",
      "Ethylene oxide (EO) sterile single-use disposable packaging"
    ]
  ],
  231: [
    [
      "Material",
      "Advanced BIOLOX® delta Ceramic Composite (Zirconia-Toughened Alumina - ZTA)"
    ],
    [
      "Taper connection",
      "Standard 12/14 high-precision micrometric taper"
    ],
    [
      "Available diameters",
      "28 mm, 32 mm, 36 mm, and 40 mm"
    ],
    [
      "Neck lengths",
      "Short (S), Medium (M), Long (L), and Extra Long (XL)"
    ],
    [
      "Clinical indication",
      "Primary and revision total hip arthroplasty in young, high-demand patients"
    ],
    [
      "Biocompatibility",
      "Completely bio-inert and metal-free (zero metallic ion release)"
    ]
  ],
  232: [
    [
      "Material",
      "Forged Co-Cr-Mo Alloy with Ti6Al4V Titanium Alloy adapter sleeve"
    ],
    [
      "Connection",
      "Modular TF adapter sleeve for standard 12/14 trunnions"
    ],
    [
      "Offset options",
      "Multiple neck length adjustments (-3.5 mm to +7.0 mm)"
    ],
    [
      "Primary function",
      "Trunnion restoration and offset revision without stem extraction"
    ],
    [
      "Clinical indication",
      "Isolated acetabular revision, joint laxity, and limb length correction"
    ],
    [
      "Sterilization",
      "Gamma irradiation - 5-year sterile shelf life"
    ]
  ],
  66: [
    [
      "Motor type",
      "Heavy-duty brushless motor with superconducting technology"
    ],
    [
      "Oscillation frequency",
      "Dual speed: High (12,000 opm) and Low (10,000 opm)"
    ],
    [
      "Working head articulation",
      "360° rotation across 8 indexed locking gears"
    ],
    [
      "Safety system",
      "Intelligent multi-protection chip (overload, thermal, and stall)"
    ],
    [
      "Power & battery",
      "Rechargeable lithium battery pack with high-current rapid charging"
    ],
    [
      "Sterilization",
      "Handpiece autoclavable at 134 °C (battery via aseptic transfer shield)"
    ]
  ],
  67: [
    [
      "Motor type",
      "High-performance German-engineered brushless superconducting motor"
    ],
    [
      "Rotation speed",
      "Dual mode: High speed (1,200 rpm) and Low speed/reaming (270 rpm)"
    ],
    [
      "Cannulation",
      "Hollow-bore drive shaft compatible with Kirschner wires and guide pins"
    ],
    [
      "Rotation control",
      "Forward, reverse, and safety lock neutral modes with tactical trigger"
    ],
    [
      "Tool interface",
      "Universal quick-change connector chuck for surgical drills and reamers"
    ],
    [
      "Sterilization",
      "Autoclavable drive handpiece at 134 °C (aseptic battery funnel system)"
    ]
  ],
  68: [
    [
      "Motor type",
      "Heavy-duty superconducting brushless motor for hard tissue resection"
    ],
    [
      "Oscillating frequency",
      "Dual programmable speeds: High (12,000 opm) and Low (10,000 opm)"
    ],
    [
      "Battery capacity",
      "High-capacity 4000 mAh rechargeable lithium-ion battery pack"
    ],
    [
      "Surgical versatility",
      "Convertible to sternum saw with dedicated protective mediastinal guard bow"
    ],
    [
      "Blade retention",
      "Patented positive mechanical anti-drop blade clamping mechanism"
    ],
    [
      "Sterilization",
      "Handpiece fully steam-autoclavable at 134 °C (aseptic battery protocol)"
    ]
  ],
};

// ==========================================
// Características y Ventajas por Producto
// ==========================================

export const PRODUCT_FEATURES_ES: Record<number, string[]> = {
  24: [
    "Control de límites de seguridad en milisegundos: Detiene instantáneamente el fresado si se alcanza el margen planificado, blindando ligamentos y vasos sanguíneos.",
    "Preservación máxima de tejido óseo sano: Elimina únicamente el cartílago y hueso dañado según la anatomía individual, conservando los ligamentos cruzados intactos.",
    "Reducción del temblor quirúrgico: El módulo motorizado de mano amortigua los movimientos oscilatorios, permitiendo un acabado de superficie ósea perfecto.",
    "Mínima invasión y rápida recuperación: Facilita abordajes quirúrgicos pequeños con menor sangrado intraoperatorio y rehabilitación funcional acelerada.",
    "Sin esterilización compleja ni voluminosos brazos robóticos: Diseño liviano y ergonómico que prescinde de fundas estériles complejas y no estorba en quirófano.",
    "Planificación y verificación tridimensional en vivo: Retroalimentación visual continua en pantalla del avance del desbastado y la orientación del implante unicompartimental."
  ],
  59: [
    "Compensación activa de movimiento: Evita eficazmente los errores provocados por micromovimientos involuntarios del paciente o vibraciones instrumentales.",
    "Reducción activa del temblor quirúrgico: Proporciona una colocación de bloques de corte firme y controlada para una osteotomía perfecta.",
    "Balance ligamentario dinámico en tiempo real: Cuantifica la brecha articular en flexión y extensión, garantizando una estabilidad articular balanceada en todo el rango de movimiento.",
    "Puesta en marcha rápida sin esterilización engorrosa: No requiere complejas fundas estériles para brazos robóticos mecánicos pesados, reduciendo significativamente los tiempos de quirófano.",
    "Huella espacial compacta: Se adapta con facilidad a quirófanos estándar sin saturar el área de trabajo del cirujano y el personal de enfermería.",
    "Software clínico intuitivo y curva rápida: Interfaz visual lógica que reduce la curva de aprendizaje a pocos casos y brinda una experiencia quirúrgica inteligente."
  ],
  139: [
    "Control activo antitemblor: Reduce drásticamente el temblor de la mano del cirujano, proporcionando un fresado estable y un flujo de trabajo quirúrgico inteligente y confiable.",
    "Navegación y posicionamiento tridimensional preciso: Permite el control milimétrico de la inclinación y anteversión del cotilo, evitando malposiciones protésicas y pinzamientos.",
    "Diseño portátil de bajo impacto espacial: Mínima ocupación del quirófano, facilitando una disposición flexible que se adapta a cualquier entorno quirúrgico sin interferir con el equipo médico.",
    "Sin preparación compleja de esterilización: No requiere fundas robóticas complejas ni ensambles engorrosos de brazos pesados, ahorrando tiempo operatorio sustancial.",
    "Percepción autónoma y control inteligente: Fusión sensorial hombre-máquina que guía al especialista paso a paso con una curva de aprendizaje sumamente corta.",
    "Arquitectura modular multiindicación: Compatible con múltiples sistemas de prótesis certificadas, maximizando la versatilidad clínica y la rentabilidad hospitalaria."
  ],
  161: [
    "Modularidad dimensional completa: Cabezas de altura ajustable que optimizan la longitud metatarsofalángica del pie.",
    "Vástagos cónicos acanalados: Proporcionan una fijación rotacional y estabilidad óptima en el manto de cemento.",
    "Articulación anatómica congruente: Mantiene la flexión plantar y dorsal fisiológica previniendo la sobrecarga lateral.",
    "Polietileno de alto rendimiento: Mínima tasa de desgaste volumétrico en el contacto metatarsofalángico.",
    "Reconstrucción articular precisa: Alivia el dolor crónico de propulsión y corrige deformidades articulares severas."
  ],
  162: [
    "Vástago doble aplanado: Proporciona fijación firme en canales diafisarios de falanges y metacarpianos.",
    "Ajuste de tensión colateral: Facilita el retensado y balanceo ligamentario para una estabilidad multidireccional.",
    "Preservación cinemática de la pinza: Permite rangos fisiológicos completos de flexoextensión y oposición del dedo.",
    "Compatibilidad anatómica estandarizada: Disponible en múltiples calibres para dedos del 2.° al 5.°.",
    "Rápida osteointegración de superficie: Acabado superficial que promueve una sólida aposición ósea biológica."
  ],
  163: [
    "Soporte subcondral rígido: Previene activamente el colapso articular de la cúpula esférica femoral.",
    "Estructura trabecular osteogénica: Facilita la colonización ósea vascularizada a lo largo del canal desbridado.",
    "Diseño de anclaje bicortical: Rosca proximal firme que garantiza una fijación estable sin aflojamiento.",
    "Abordaje mínimamente invasivo: Técnica percutánea simple que reduce el traumatismo y la morbilidad quirúrgica.",
    "Preservación articular de cadera: Retrasa o evita la necesidad de una prótesis total de cadera en pacientes jóvenes."
  ],
  173: [
    "Longitud extendida de revisión: Puentea defectos metafisarios logrando anclaje diafisario seguro.",
    "Diseño pulido sin collarín: Reduce el estrés de cizallamiento en la interfaz hueso-cemento.",
    "Centralizador distal incluido: Asegura un manto de cemento concéntrico de espesor homogéneo (> 2 mm).",
    "Alta resistencia a la fatiga: Capaz de soportar sobrecargas cíclicas continuas en pacientes con hueso debilitado.",
    "Cono estándar 12/14: Compatible con cabezas femorales metálicas y cerámicas de múltiples diámetros."
  ],
  183: [
    "Restauración inmediata de longitud ósea: Sustituye grandes defectos segmentarios femorales o tibiales.",
    "Bloqueo antirrotación rígido: Pernos y acoples de cono morse que impiden torsiones bajo carga axial.",
    "Soporte de carga precoz: Permite la deambulación del paciente sin esperar consolidación ósea prolongada.",
    "Diseño modular versátil: Longitudes combinables adaptables a cualquier longitud de osteotomía diafisaria.",
    "Tratamiento superficial anodizado: Minimiza la adherencia bacteriana y proporciona biocompatibilidad prolongada."
  ],
  185: [
    "Guía anatómica suave: Surco trocleal que asegura un centrado rotuliano perfecto sin subluxación.",
    "Extensión proximal protectora: Evita el enganche o choque del reborde rotuliano al iniciar la flexión.",
    "Máxima conservación articular: No interviene los ligamentos cruzados ni los cartílagos tibiofemorales.",
    "Alivio del dolor anterior: Elimina el roce femororrotuliano incapacitante al subir escaleras o agacharse.",
    "Transición quirúrgica sencilla: En caso de evolución artrósica futura, permite conversión fácil a prótesis total."
  ],
  202: [
    "Preservación del cuello humeral: Elimina la resección ósea agresiva de los vástagos diafisarios tradicionales.",
    "Recubrimiento bioactivo Ti + HA: Estimula una rápida osteointegración y fijación biológica permanente.",
    "Réplica del centro de rotación: Restaura la anatomía nativa del hombro sin alterar la retroversión.",
    "Respeto del canal diafisario: Deja el canal medular intacto para cualquier eventual procedimiento futuro.",
    "Rápida recuperación funcional: Menor sangrado quirúrgico y reincorporación temprana a la movilidad activa."
  ],
  210: [
    "Mecanismo de bisagra semiconstreñida: Transfiere armónicamente las cargas torsionales aliviando la interfaz.",
    "Bujes de UHMWPE intercambiables: Evitan el roce metal-metal y minimizan el desgaste mecánico.",
    "Vástagos anatómicos contorneados: Se adaptan con precisión a la anatomía humeral y cubital.",
    "Fijación estable del pasador: Bloqueo de seguridad que previene la luxación intraoperatoria y tardía.",
    "Alivio radical del dolor: Devuelve la funcionalidad y el arco de movimiento para actividades cotidianas."
  ],
  211: [
    "Modularidad cabeza-vástago: Permite el ajuste exacto de la altura articular sin sobretensionar el capitellum.",
    "Restauración del soporte en valgo: Evita la inestabilidad del codo y la translocación proximal del radio.",
    "Cúpula cóncava congruente: Proporciona una articulación suave y anatómica con el cóndilo humeral.",
    "Vástago intramedular atraumático: Minimiza el daño al canal medular y facilita una extracción limpia si se requiere.",
    "Prevención del síndrome de Essex-Lopresti: Mantiene la tensión de la membrana interósea y la muñeca."
  ],
  212: [
    "Morfología elíptica anatómica: Calca la forma natural de la cúpula radial reduciendo picos de presión.",
    "Cinemática de pronosupinación suave: Evita el rozamiento forzado y la rigidez articular en rotación de antebrazo.",
    "Fijación metafisaria porosa: Proporciona osteointegración proximal sin rigidez excesiva diafisaria.",
    "Protección del cartílago humeral: Menor desgaste del cóndilo humeral a medio y largo plazo.",
    "Estabilidad rotatoria del codo: Contribuye a reparar la estabilidad en valgo y posterolateral."
  ],
  217: [
    "Fidelidad dimensional 1:1: Réplica exacta del defecto óseo real extraída de la tomografía del paciente.",
    "Ensayo prequirúrgico realista: Permite preformar placas y probar implantes antes de abrir al paciente.",
    "Reducción drástica del tiempo de quirófano: Disminuye los minutos anestésicos y la pérdida de sangre.",
    "Comunicación médico-paciente clara: Facilita la explicación didáctica del procedimiento al paciente.",
    "Versatilidad reconstructiva multirregión: Disponible para 16 regiones esqueléticas diferentes."
  ],
  219: [
    "Acople anatómico unívoco (key-and-lock): Solo encaja en la posición planificada, eliminando errores de colocación.",
    "Corrección angular exacta: Restaura con precisión el eje mecánico fémoro-tibial planificado.",
    "Sin invasión del canal medular: No requiere varillas intramedulares, previniendo embolias grasas.",
    "Ranuras de corte protegidas: Evita desviaciones de la hoja de sierra durante la resección ósea.",
    "Reducción de exposición radiológica: Minimiza la necesidad de comprobaciones continuas con fluoroscopía."
  ],
  220: [
    "Protección de estructuras nobles: Bloquea el avance de la sierra hacia vasos y nervios críticos.",
    "Corrección tridimensional de la displasia: Guía el corte pélvico para una cobertura acetabular ideal.",
    "Menor invasividad y sangrado: Abordajes quirúrgicos más conservadores y menor tiempo operatorio.",
    "Reducción del uso de rayos X: Disminuye la exposición a radiación intraoperatoria del equipo quirúrgico.",
    "Repetibilidad y seguridad quirúrgica: Hace predecibles intervenciones ortopédicas de alta dificultad."
  ],
  221: [
    "Adaptación perfecta a huesos pequeños: Encaja sobre relieves óseos diminutos sin deslizamiento.",
    "Corrección milimétrica de hallux valgus: Asegura los ángulos IMA y HVA planificados con exactitud.",
    "Protección de cartílagos vecinos: Evita daños accidentales a superficies articulares sanas contiguas.",
    "Micro-fijación segura: No debilita la cortical de fragmentos óseos finos durante la intervención.",
    "Consolidación ósea acelerada: Cortes netos y superficies congruentes que optimizan la osteosíntesis."
  ],
  222: [
    "Micro-ranuras circunferenciales: Multiplican el coeficiente de fricción previniendo micromovimientos de rotación.",
    "Fijación multiangular periférica: Permite anclar tornillos dirigidos hacia las columnas pélvicas sólidas.",
    "Adaptabilidad a pérdidas óseas masivas: Resuelve defectos cavitarios graves sin migración de la copa.",
    "Amplio rango de movilidad articular: Borde hemisférico optimizado que minimiza el pinzamiento femoral.",
    "Osteointegración permanente: Fomenta la vascularización e incorporación ósea en la interfaz con el lecho pélvico."
  ],
  223: [
    "Exposición femoral sin esfuerzo: Facilita la luxación y elevación del fémur con mínima incisión cutánea.",
    "Preservación muscular completa: No corta tendones ni músculos glúteos, reduciendo drásticamente el dolor.",
    "Control de tracción milimétrico: Ajusta con exactitud la tensión ligamentaria y la longitud del miembro.",
    "Compatibilidad universal: Se instala rápidamente sobre cualquier mesa quirúrgica estándar sin aditamentos costosos.",
    "Recuperación ultrarrápida: Permite la carga inmediata y el alta hospitalaria precoz (Fast-Track)."
  ],
  225: [
    "Ajuste anatómico milimétrico exacto: Calca el defecto tras la resección sin necesidad de adaptaciones forzadas.",
    "Gradiente de porosidad biomimético: Estimula una penetración ósea y vascular profunda permanente.",
    "Módulo elástico bajo adaptativo: Reduce la diferencia de rigidez hueso-implante y previene la reabsorción.",
    "Orificios de fijación guiados: Ubicados exactamente sobre las zonas de hueso cortical sano del paciente.",
    "Solución definitiva para casos inoperables: Resuelve pérdidas óseas que carecen de prótesis comercial estándar."
  ],
  229: [
    "Desgasificación al vacío activa: Reduce la microporosidad del cemento hasta en un 90% para mayor resistencia.",
    "Inyección retrógrada presurizada: Evita la formación de bolsas de aire e interposiciones de sangre en el canal.",
    "Cánulas flexibles transparentes con marcas: Permiten visualizar el avance del flujo y la profundidad alcanzada.",
    "Mezcla limpia y sin vapores: Minimiza la exposición del personal de quirófano a los vapores de monómero tóxicos.",
    "Empaque estéril completo: Listo para su uso inmediato en la mesa de instrumentación quirúrgica."
  ],
  230: [
    "Doble función de irrigación y aspiración: Limpia y retira los fluidos residuales sin salpicaduras en quirófano.",
    "Preparación óptima del lecho de cementado: Aumenta la profundidad de interdigitación del cemento óseo.",
    "Reducción de la tasa de infección periprotésica: Elimina bacterias, biopelículas incipientes y hematomas.",
    "Doble velocidad seleccionable: Presión ajustable mediante gatillo táctil para adaptarse a hueso o músculo.",
    "Batería integrada sin cables estorbosos: Funcionamiento completamente autónomo durante toda la intervención."
  ],
  231: [
    "Coeficiente de fricción mínimo: Disminuye drásticamente el desgaste volumétrico del inserto cotiloideo.",
    "Máxima tenacidad a la fractura: Estabilización con circonia que frena la propagación de microfisuras.",
    "Superficie hidrófila humectable: Mantiene una película fluida de lubricación sinovial continua.",
    "Libre de potencial alergénico: Alternativa ideal para pacientes con hipersensibilidad a aleaciones metálicas.",
    "Resistencia absoluta al rayado: Inmune a la abrasión por partículas de cemento óseo o restos tisulares."
  ],
  232: [
    "Rescate de conos dañados: Evita la peligrosa extracción de vástagos femorales bien integrados.",
    "Corrección precisa de longitud: Optimiza la tensión de abductores y balancea la longitud de extremidades.",
    "Interfaz de titanio amortiguadora: Protege el cono nativo contra micromovimientos y corrosión galvánica.",
    "Bloqueo por fricción seguro: Garantiza una unión mecánica inamovible bajo cargas de marcha fisiológicas.",
    "Alta versatilidad intraoperatoria: Amplio rango de tamaños y alturas para solucionar inestabilidades."
  ],
  165: [
    "Aletas proximales antirrotación: Aumentan la estabilidad rotacional primaria en el lecho trocantérico.",
    "Doble recubrimiento bioactivo Ti + HA: Estimula la proliferación osteoblástica temprana y el anclaje a largo plazo.",
    "Ranura distal de descompresión: Reduce la rigidez del extremo del vástago previniendo el dolor de muslo.",
    "Diseño cónico rectangular: Permite una cuña anatómica segura sin riesgo de hundimiento axial.",
    "Opciones de offset lateralizado: Restaura la tensión de los abductores y la biomecánica nativa del paciente."
  ],
  167: [
    "Pulido espejo sin collarín: Elimina puntos de cizallamiento y favorece la presurización del cemento.",
    "Doble conicidad equilibrada: Transfiere fuerzas de compresión axial sin concentrar tensiones.",
    "Material Co-Cr-Mo de alta resistencia: Máxima durabilidad frente a la fatiga mecánica por carga cíclica.",
    "Fácil extracción en revisiones: Diseño liso sin retenciones que simplifica el recambio si es necesario.",
    "Resultados clínicos ampliamente documentados: Alta tasa de supervivencia a largo plazo en pacientes de edad avanzada."
  ],
  168: [
    "Metal trabecular EBM proximal: Estimula la osteointegración profunda y la fijación biológica permanente.",
    "Carga fisiológica proximal: Previene la resorción ósea y el apantallamiento de tensiones en el calcar.",
    "Doble conicidad autobloqueante: Excelente estabilidad primaria axial y rotacional desde la inserción.",
    "Ranuras distales de alivio: Reducen la rigidez diafisaria y guían la inserción anatómica en el canal.",
    "Cono morse 12/14 estándar: Compatible con cabezas femorales metálicas y cerámicas Delta."
  ],
  170: [
    "Triple conicidad estabilizadora: Fijación primaria rígida que resiste cargas axiales y de torsión.",
    "Doble recubrimiento bioactivo Ti + HA: Acelera la aposición ósea biológica y la osteointegración.",
    "Estrías longitudinales distales: Alivian la rigidez en la punta previniendo el dolor de muslo.",
    "Cuello ovalado pulido: Aumenta el rango de movimiento articular libre de conflicto.",
    "Cono morse 12/14 de alta precisión: Acoplamiento exacto con cabezas cerámicas y metálicas."
  ],
  172: [
    "Longitud extendida de 160 mm: Puentea defectos óseos metafisarios logrando una fijación diafisaria distal estable.",
    "Ranuras longitudinales antirrotación: Garantizan una excelente estabilidad rotacional frente a fuerzas de torsión.",
    "Punta de descompresión con ranura coronal: Reduce el módulo de flexión diafisario y previene el dolor en el muslo.",
    "Recubrimiento proximal rugoso: Facilita la formación de hueso biológico en la zona metafisaria residual.",
    "Cono morse 12/14 estándar: Compatible con cabezas metálicas y cerámicas de diferentes alturas de cuello."
  ],
  174: [
    "Polietileno HXLPE reticulado: Resistencia superior al desgaste por abrasión que previene la osteólisis.",
    "Lengüetas perimetrales antirrotación: Inmovilizan el inserto dentro de la copa evitando desprendimientos.",
    "Bisel de borde optimizado: Previene el pinzamiento del cuello femoral en flexión y rotación interna.",
    "Esterilización libre de oxígeno: Previene la degradación oxidativa por radicales libres.",
    "Tolerancia micrométrica de acople: Asegura contacto uniforme con la cabeza femoral."
  ],
  175: [
    "Superficie de pulido óptico espejo: Reduce al mínimo el desgaste por fricción con el inserto móvil de polietileno.",
    "Conexión cónica autobloqueante: Se fija rígidamente dentro de la copa evitando micromovimientos.",
    "Máxima resistencia mecánica: Aleación Co-Cr-Mo que soporta cargas articulares cíclicas sin deformación.",
    "Modularidad intraoperatoria: Permite elegir doble movilidad según las necesidades del paciente.",
    "Esterilización gamma en envase individual: Garantiza asepsia e integridad de la superficie articular."
  ],
  177: [
    "Malla trabecular biomimética EBM: Estimula la proliferación celular y la osteointegración en todo el domo.",
    "Configuración de 3 orificios G20: Orientada a la columna ilíaca resistente para fijación adicional con tornillos.",
    "Alto coeficiente de fricción: Garantiza un ajuste press-fit inmediato sólido y sin balanceo.",
    "Bajo módulo de elasticidad: Previene el apantallamiento de tensiones y la resorción ósea periprotésica.",
    "Compatibilidad con cabezas cerámicas y metálicas: Acoplable con liners de polietileno de alta reticulación."
  ],
  178: [
    "Múltiples orificios G40: Libertad total para atornillar en cualquier sector con buena reserva ósea.",
    "Estructura trabecular porosa EBM 3D: Estimula la osteointegración biológica rápida y duradera.",
    "Alto agarre de fricción: Inmoviliza la copa evitando micromovimientos desde el momento de la implantación.",
    "Bajo módulo elástico: Similar al hueso esponjoso para evitar la atrofia por desuso.",
    "Compatibilidad con liners HXLPE y cabezas modulares: Permite ensamblar liners neutros o con ceja de inclinación."
  ],
  179: [
    "Estructura trabecular biomimética 3D: Estimula el crecimiento óseo natural en su interior logrando integración biológica sólida.",
    "Bajo módulo elástico fisiológico: Reduce el apantallamiento de tensiones y previene la reabsorción ósea circundante.",
    "Restauración del centro de rotación: Permite reconstruir pérdidas de techo acetabular restableciendo la anatomía de la cadera.",
    "Orificios avellanados integrados: Facilita la fijación rígida con tornillos de titanio sin sobresalir de la superficie.",
    "Resistencia superior a la compresión: Soporta de manera estable las cargas transmitidas por la copa protésica."
  ],
  180: [
    "Máximo coeficiente de fricción: El tantalio poroso ofrece una fijación inicial inmediata superior frente al hueso esponjoso.",
    "Arquitectura celular altamente porosa: Facilita la rápida adhesión celular, neovascularización y osteogénesis profunda.",
    "Módulo de elasticidad biomimético: Evita el apantallamiento de tensiones (stress shielding) y la pérdida de masa ósea.",
    "Excelente biocompatibilidad e inercia: No genera reacciones inflamatorias ni degradación por corrosión biológica.",
    "Soporte estructural rígido: Restaura la continuidad acetabular soportando la copa protésica sin deformación."
  ],
  181: [
    "Alta resistencia mecánica y tenacidad: Soporta cargas compresivas fisiológicas elevadas sin riesgo de fractura.",
    "Pulido espejo de alta precisión: Minimiza el coeficiente de fricción contra el polietileno.",
    "Cono morse 12/14 de acople rígido: Previene la corrosión por fricción (*fretting*) y el aflojamiento en el cono.",
    "Cuatro opciones de cuello: Permite corregir discrepancias de longitud y tensión de partes blandas.",
    "Uso clínico universal: Compatible con vástagos primarios y de revisión con cono estándar."
  ],
  184: [
    "Modularidad segmental completa: Permite reconstruir cualquier longitud de resección ósea diafisaria o total.",
    "Conexiones cónicas de cono Morse: Proporcionan rigidez absoluta a las fuerzas de torsión y flexión.",
    "Orificios para reinserción muscular: Facilita la fijación de tendones abductores y psoas ilíaco.",
    "Tratamiento de anodizado superficial: Crea una película protectora de óxido contra la corrosión y el desgaste.",
    "Vástagos intramedulares ranurados: Garantizan un anclaje diafisario distal rígido sin dolor en la punta."
  ],
  187: [
    "Superficie articular esférica de radio único: Garantiza un estrés de contacto homogéneo y mínimo durante movimientos multidireccionales, sin cargas de borde perjudiciales.",
    "Diseño femoral de doble poste: Optimiza la estabilidad rotacional del implante y reduce sensiblemente el riesgo de aflojamiento aséptico.",
    "Alta tolerancia angular: Permite un margen de seguridad de hasta 10° de alineación en varo-valgo sin pérdida de congruencia.",
    "Bandeja tibial altamente pulida: Minimiza el desgaste del inserto de polietileno y evita el daño o roce con los tejidos blandos circundantes.",
    "Reverso con cavidades porosas para cemento: Asegura una distribución homogénea del manto de cemento óseo y una fijación inicial rígida.",
    "Máxima preservación de tejido: Respeta los ligamentos cruzados y el compartimento articular sano para una recuperación rápida y sensación natural."
  ],
  190: [
    "Preservación integral del ligamento cruzado posterior (CR): Escotadura anatómica diseñada para respetar la anatomía ligamentaria nativa y conservar la propiocepción.",
    "Cóndilo anterior adelgazado: Disminuye la presión anterior sobre el aparato extensor y evita el dolor periprotésico en flexión.",
    "Tróclea anatómica extendida y profundizada: Proporciona una guía rotuliana estable y suave previniendo la subluxación.",
    "Bandeja tibial pulida a espejo: Superficie articular y bordes con acabado de alta precisión para reducir el desgaste del polietileno.",
    "Distribución de carga uniforme: Radios de curvatura femorales que mantienen un área de contacto amplia en todo el rango articular."
  ],
  191: [
    "Cóndilo anterior adelgazado y tróclea optimizada: Mejora la articulación suave entre el reborde femoral anterior y la superficie articular rotuliana, reduciendo crepitaciones y dolor anterior de rodilla.",
    "Cajón intercondíleo abierto optimizado: Preserva el volumen óseo intercondilar y reduce la resección ósea innecesaria.",
    "Variantes protésicas CR y PS: Opciones para conservación del ligamento cruzado (CR) y estabilización posterior (PS) adaptadas a cada paciente.",
    "Bandeja tibial anatómica altamente pulida: Distribución uniforme de cargas sobre la meseta tibial y mínima fricción en el contacto con el inserto.",
    "Diseño de bloqueo central con isla antirrotación: Garantiza una fijación firme del inserto tibial previniendo micromovimientos y desgaste por deslizamiento.",
    "Inserto tibial con leva PS mejorada: Posicionamiento posterior del poste para un contacto temprano que previene la inestabilidad en media flexión."
  ],
  192: [
    "Recubrimiento bioactivo bicapa Ti + HA: Capa de titanio puro poroso combinada con hidroxiapatita por proyección de plasma spray, estimulando la osteogénesis rápida y la osteointegración biológica a largo plazo sin cemento.",
    "Polietileno VE-HXLPE enriquecido con Vitamina E: Resistencia extrema a la oxidación y tasas de desgaste por fricción ultrabajas que garantizan una prolongada vida útil.",
    "Geometría femoral de radio gradual: Optimiza el seguimiento patelofemoral en el surco troclear proporcionando un deslizamiento suave en todo el arco de movimiento.",
    "Fijación no cementada press-fit: Ajuste mecánico inicial por fricción y microanclaje que elimina el tiempo y complicaciones asociadas al cemento óseo.",
    "Preservación del capital óseo: Favorece la conservación de la densidad mineral ósea alrededor del implante reduciendo el aflojamiento a largo plazo."
  ],
  194: [
    "Polietileno VE-HXLPE con Vitamina E: La infusión homogénea de alfa-tocoferol actúa como antioxidante permanente, evitando la oxidación in vivo y manteniendo excelentes propiedades mecánicas.",
    "Poste posicionado anatómicamente hacia posterior: Permite un contacto temprano con la leva femoral evitando la inestabilidad en media flexión.",
    "Doble superficie articular poste-travesaño: Reduce el pico de presión de contacto sobre el poste de polietileno, minimizando la abrasión y el desgaste de material.",
    "Muesca anterior profunda: Evita el pinzamiento tisular con el tendón del cuádriceps y el ligamento rotuliano durante la flexión profunda.",
    "Mecanismo de fijación de alta precisión: Anclaje perimetral a la bandeja tibial que previene micromovimientos y desgaste en la interfaz posterior."
  ],
  197: [
    "Cóndilo anterior adelgazado con perfil curvo: Reduce la fricción de los músculos y ligamentos patelares anteriores, previniendo eficazmente el dolor de rodilla.",
    "Fosa intercondílea semiabierta: Evita la resección ósea excesiva en la zona intercondilar y disminuye notablemente el riesgo de fracturas intercondíleas.",
    "Bandeja tibial de alta pulidez: Reduce el desgaste por fricción en la cara inferior del inserto de polietileno.",
    "Modularidad integral de vástagos y cuñas: Vástagos rectos y excéntricos con bloques de aumento femorales y tibiales para resolver defectos óseos complejos.",
    "Estabilidad varo-valgo reforzada: Poste de revisión congruente que proporciona excelente estabilidad ligamentaria y cinemática fisiológica guiada."
  ],
  199: [
    "Mecanismo de bisagra modular: La carga es soportada por la bandeja tibial, reduciendo el desgaste del polietileno de la bisagra.",
    "Diseño de plataforma giratoria: Compensa la carga torsional ejercida sobre los tejidos blandos por la superficie del cemento óseo durante el movimiento de la prótesis mediante rotación.",
    "Altura de salto de hasta 40 mm: Previene la subluxación provocada por la inestabilidad en media flexión tras la intervención de rodilla.",
    "Transferencia de cargas optimizada: Garantiza una distribución uniforme de fuerzas y un rendimiento estable y duradero.",
    "Punta de descompresión con ranura transversal: Reduce la rigidez del vástago de extensión intramedular y disminuye el dolor en la punta.",
    "Poste tibial optimizado: Conectable con vástago excéntrico para lograr una adaptación perfecta a la morfología del canal medular."
  ],
  201: [
    "Estructura de red tridimensional porosa: Alta rugosidad superficial y microporos interconectados que estimulan fuertemente la osteogénesis y el crecimiento óseo biológico.",
    "Combinación proporcional sólida-trabecular: Proporciona una resistencia superior a la compresión previniendo deformaciones o fracturas bajo carga continua.",
    "Bajo módulo elástico biomimético: Similar al hueso esponjoso para reducir de forma drástica el apantallamiento de tensiones (stress shielding) y la resorción periprotésica.",
    "Configuraciones anatómicas completas: Aumentos femorales distales, posteriores y bloques tibiales de múltiples alturas para una reconstrucción articular personalizada.",
    "Fijación rígida primaria: Fijación sólida mediante tornillos TC4 que inmovilizan los bloques y permiten una carga funcional segura."
  ],
  203: [
    "Composición del sistema: Consta de vástago humeral no cementado, cabeza humeral anatómica excéntrica y componente glenoideo de polietileno.",
    "Vástago con diseño antirrotación rectangular: Proporciona una fijación inicial rígida y recubrimiento proximal de titanio puro para acelerar la osteointegración.",
    "Cabeza humeral anatómica excéntrica: Diámetros de curvatura de 36 a 48 mm (incrementos de 2 mm) que logran una cobertura óptima del cuello anatómico humeral.",
    "Cinemática fisiológica biónica: Diseñada para trabajar en armonía con el manguito rotador nativo íntegro, logrando arcos de movilidad naturales.",
    "Excelente supervivencia a largo plazo: Alivio completo de la sintomatología dolorosa con una tasa de luxación mínima y prolongada durabilidad del implante."
  ],
  205: [
    "Fijador glenoideo trabecular 3D: Fabricado mediante manufactura aditiva de metal trabecular con estructura excéntrica que previene el efecto muesca glenoidea inferior (scapular notching).",
    "Vástago humeral con recubrimiento poroso: Superficie oval proximal recubierta con polvo de titanio y orificios dedicados para la refijación de partes blandas.",
    "Tornillos universales de ángulo variable: Rango de inserción angular de 0° a 30° con recubrimiento de titanio para un anclaje óptimo en la columna ósea glenoidea.",
    "Convertidor anatómico-reverso: Permite transformar una prótesis anatómica en reversa o viceversa de manera modular sin retirar el vástago intramedular.",
    "Restaura la biomecánica articular: Desplaza el centro de rotación medial e inferiormente, optimizando la palanca del deltoides y restaurando un rango de movilidad funcional sin dolor."
  ],
  207: [
    "Arquitectura modular completa: Compuesta por húmero proximal, segmentos de osteotomía, vástago intramedular y componentes universales anatómicos y reversos.",
    "Reproducción anatómica del húmero proximal: Perfil optimizado con orificios de sutura para la reinserción estable de partes blandas y reconstrucción del muñón tendinoso.",
    "Vástago intramedular en 24 especificaciones: Amplia gama de calibres y longitudes que se combinan con los segmentos para cubrir con exactitud cualquier longitud de resección tumoral.",
    "Conversión articular universal: Compatible tanto con articulación anatómica glenohumeral como con configuración de hombro reverso.",
    "Salvamento y estabilidad funcional: Permite la preservación de la extremidad con excelente estabilidad mecánica, reduciendo complicaciones y permitiendo la terapia antitumoral continua."
  ],
  213: [
    "Impresión 3D por haz de electrones (EBM): Bandeja tibial y manguitos con microporosidad biomimética en Ti6Al4V ELI que optimizan la osteointegración y absorción de energía.",
    "Modularidad diafisaria de alta resistencia: Conexiones de cono Morse seguras para ensamblar segmentos diafisarios de diferentes longitudes.",
    "Vástagos intramedulares femorales y tibiales: Variedad de diámetros y longitudes con ranuras longitudinales para un anclaje rígido sin picos de estrés.",
    "Constricción articular personalizada: Insertos y bujes de UHMWPE de alta densidad para estabilizar la articulación según el daño ligamentario.",
    "Tratamiento de anodizado duro: Incrementa la resistencia biológica y previene la corrosión galvánica entre componentes modulares."
  ],
  224: [
    "Superficie rugosa uniforme Tipo 60: Multiplica la fricción primaria impidiendo micromovimientos rotacionales.",
    "Micro-ranuras circunferenciales: Favorecen el anclaje mecánico biológico y la aposición ósea profunda.",
    "Orificios perimetrales para tornillos: Aseguran una fijación rígida en sectores de hueso ilíaco remanente sano.",
    "Polo apical aplanado: Evita el tope en el fondo acetabular y asegura compresión periférica.",
    "Excelente biocompatibilidad del titanio puro: Elimina el riesgo de reacciones por sensibilidad metálica."
  ],
  226: [
    "Conector triaxial con rotación amortiguada: Permite flexión y rotación fisiológica aliviando las fuerzas de torsión sobre el manto de cemento y el vástago intramedular.",
    "Segmentos de osteotomía diafisaria modulares: Permite la sustitución precisa de grandes pérdidas óseas femorales o tibiales con longitudes ajustables a cada resección.",
    "Vástagos intramedulares de alta solidez: Diseñados para una fijación diafisaria estable con rigidez calibrada para evitar picos de dolor en la punta del vástago.",
    "Anodizado superficial del titanio: Genera una película protectora de óxido que aumenta la resistencia al desgaste, corrosión y fatiga.",
    "Bujes rotatorios de UHMWPE reemplazables: Absorben el impacto articular y pueden sustituirse sin necesidad de retirar los componentes osteointegrados o cementados."
  ],
  227: [
    "Envase estéril de un solo uso: Listo para utilizar directamente en el quirófano en condiciones de máxima esterilidad.",
    "Mecanismo de desmoldeo rotatorio por rosca: Permite retirar el espaciador de cemento fraguado de manera suave, rápida y sin riesgo de fractura.",
    "Polipropileno médico antiadherente (PP-R): Evita que el cemento acrílico se pegue al molde, garantizando superficies articulares perfectamente lisas.",
    "Bloques de medición de espacio articular incluidos: Tres alturas (5 mm, 10 mm y 12 mm) para calibrar con precisión la tensión de los tejidos blandos.",
    "Diversidad de tamaños femorales y tibiales: Permite configurar el espaciador temporal más adecuado para la anatomía de cada paciente."
  ],
  228: [
    "Envasado estéril de un solo uso: Listo para usar inmediatamente en quirófano garantizando máxima asepsia.",
    "Polipropileno antiadherente PP-R: Evita que el cemento acrílico se adhiera al molde, logrando superficies lisas.",
    "Mecanismo de desmoldeo rápido: Permite extraer el espaciador fraguado limpiamente sin riesgo de rotura.",
    "Múltiples diámetros de cabeza incluidos: Permite adaptar el tamaño cefálico al lecho acetabular del paciente.",
    "Mantiene la longitud del miembro y tensión muscular: Evita la retracción de partes blandas durante el intervalo entre cirugías."
  ],
  2: [
    "Tantalio poroso puro CVD: Fabricación pionera por deposición química en fase de vapor sin desprendimiento de partículas y con alta tenacidad.",
    "Módulo de elasticidad biomimético: Congruente con el hueso esponjoso humano, evitando el blindaje de tensiones y la subsidencia.",
    "Porosidad interconectada optimizada: Favorece la adhesión osteoblástica, migración celular y osteointegración trabecular profunda.",
    "Superficies de anclaje dentadas: Excelente estabilidad primaria que previene la expulsión o migración postoperatoria de la caja.",
    "Restauración de alineación sagital: Recupera la altura del espacio intervertebral y la curvatura lordótica fisiológica."
  ],
  154: [
    "Primera placa laminar impresa en 3D: Tecnología patentada de manufactura aditiva que calca la anatomía de la osteotomía vertebral.",
    "Zonas porosas que prescinden de injerto: La estructura trabecular sustituye el injerto óseo complementario, optimizando el espacio del canal.",
    "Superficie interna lisa atraumática: Protege el conducto espinal y la duramadre, reduciendo el riesgo de adherencias e irritación.",
    "Estabilidad de fijación primaria rígida: Fija sólidamente la lámina descompresiva abierta previniendo el cierre elástico postoperatorio.",
    "Múltiples configuraciones de orificios: Opciones versátiles de angulación de tornillos que facilitan la técnica del cirujano."
  ],
  34: [
    "Diseño autoestabilizable ALIF integrado: Suprime la necesidad de instrumentación pedicular posterior complementaria en casos seleccionados.",
    "Cuatro tornillos bloqueados divergentes: Forman un anclaje rígido en cuña dentro de los cuerpos vertebrales que previene la migración.",
    "Conexión no rígida placa-espaciador: Transmite las cargas compresivas a través del injerto óseo, acelerando la fusión sólida.",
    "Restauración de lordosis lumbosacra: Diversos ángulos lordóticos que optimizan el balance sagital y descomprimen raíces nerviosas.",
    "Recuperación funcional acelerada: Menor invasión quirúrgica que reduce el dolor postoperatorio y favorece la deambulación precoz."
  ],
  69: [
    "Estructura de 49 filamentos trenzados: Extraordinaria flexibilidad y suavidad de manejo que previene roturas por fatiga mecánica.",
    "Clip con ángulo ajustable de 20°: Se adapta a la anatomía de la lámina facilitando el paso del cable y el tensado simétrico.",
    "Biocompatibilidad de titanio: Reduce drásticamente reacciones a cuerpo extraño e infecciones, permitiendo implantes duraderos.",
    "Flexibilidad protectora neural: Se desliza suavemente bajo la lámina vertebral con menor riesgo de lesión de la duramadre.",
    "Compatibilidad con sistemas de barras: Conectable de forma híbrida con sistemas de tornillos pediculares y de masa lateral."
  ],
  26: [
    "Cuerpo elástico en forma de U: Amortigua las tensiones axiales y preserva la altura foraminal y la movilidad segmentaria.",
    "Estructura serrada antirrotacional: Cuatro placas con dientes de retención que inmovilizan el implante y evitan la cifosis.",
    "Diseño desfasado para dos niveles: Permite tratar dos segmentos lumbares adyacentes sin choque entre las aletas de los implantes.",
    "Orificios para sutura ligamentaria: Ranuras circulares diseñadas para refijar el ligamento supraespinoso y reforzar la estabilidad.",
    "Mínimamente invasivo sin fusión: Preserva la anatomía ósea sin requerir tornillos pediculares ni resección articular agresiva."
  ],
  155: [
    "Estructura trabecular biomimética 3D: Módulo de elasticidad similar al hueso esponjoso que previene el hundimiento y el blindaje de cargas.",
    "Ambiente osteogénico óptimo: Red de microporos continuos que promueve la angiogénesis y la osteointegración temprana y firme.",
    "Platillos anatómicos angulados: Diversas cuñas lordóticas y cifóticas que restauran fielmente la alineación de la columna.",
    "Modelos específicos cervical y toracolumbar: Tamaños I-A y I-B optimizados para la biomecánica de cada nivel espinal.",
    "Alta resistencia mecánica a la compresión: Soporta las máximas cargas axiales fisiológicas de la columna anterior con total estabilidad."
  ],
  71: [
    "Ángulo de oscilación poliaxial de hasta 100°: Facilita la alineación con la barra incluso en anatomías anatómicas complejas o distorsionadas.",
    "Placa occipital medial rígida: Fijación occipital primaria sólida con soporte bilateral suplementario.",
    "Barras precurvadas y precortadas: Eliminan la necesidad de doblado manual agresivo en quirófano, reduciendo riesgos de fatiga del metal.",
    "Tornillos adaptados a masa lateral y pedículo: Diseños específicos de rosca y longitud para masa lateral (20 mm).",
    "Perfil bajo de bajo relieve: Minimiza el volumen del implante sobre la fascia cervical posterior, previniendo molestias y fístulas."
  ],
  156: [
    "Platillos arciformes cóncavo-convexos: Calcan la concavidad anatómica vertebral, distribuyendo las fuerzas axiales y evitando el hundimiento.",
    "Autoestabilización inmediata: Estructura dentada de agarre que fija el implante al hueso sin deslizamientos hacia el canal raquídeo.",
    "Ajuste cilíndrico centralizado: Permite graduar con precisión milimétrica la altura y distracción del segmento resecado.",
    "Amplio espacio para injerto óseo: Diseño abierto que permite rellenar con abundante masa ósea para una artrodesis continua.",
    "Compatibilidad toracolumbar completa: Diseñado para trabajar sinérgicamente con barras y tornillos pediculares posteriores."
  ],
  157: [
    "Diseño Zero-Profile (Perfil Cero): Queda confinada en el espacio intersomático, evitando el contacto con el esófago y reduciendo la disfagia.",
    "Tornillos con anillo de autobloqueo: Bloqueo seguro que previene el desatornillado espontáneo sin añadir volumen anterior.",
    "Uso independiente sin placa adicional: Simplifica la técnica quirúrgica y acorta sensiblemente el tiempo operatorio.",
    "Variantes lordóticas de 0° a 8°: Adapta la corrección sagital a las características cervicales de cada paciente.",
    "Amplia cavidad para injerto óseo: Gran volumen interno que favorece una artrodesis ósea sólida y temprana."
  ],
  158: [
    "Titanio puro de alta plasticidad: Permite un ajuste milimétrico fácil a los contornos óseos sin fatiga del material.",
    "Ranura de retención de lámina integrada: Mantiene la lámina en posición de descompresión abierta sin necesidad de injerto óseo.",
    "Perfil ultra bajo anti-irritación: Reduce al mínimo el roce con los músculos posteriores del cuello y previene dolor axial.",
    "Preservación de la movilidad cervical: Descomprime la médula espinal manteniendo la estabilidad biomecánica de la columna.",
    "Protección del conducto raquídeo: Evita el colapso secundario o cierre elástico de la lámina vertebral osteotomizada."
  ],
  159: [
    "Técnica percutánea mínimamente invasiva: Reduce la pérdida hemática, el daño muscular y acelera la recuperación postoperatoria.",
    "Brazos de extensión prolongados: Facilitan la inserción guiada de tornillos y la reducción fluida de la barra sin instrumental voluminoso.",
    "Tornillos de doble rosca autorroscante: Duplican la velocidad de inserción y brindan un agarre superior en el pedículo vertebral.",
    "Prisionero con rosca cuadrada y cabeza Torx: Elimina el trasrosque y garantiza un torque de apriete fiable sin deslizamiento del destornillador.",
    "Compatibilidad con sistemas 5.5 mm y 6.0 mm: Adaptabilidad total para patología degenerativa, fracturas y deformidades toracolumbares."
  ],
  160: [
    "Conexión directa tornillo-barra: Suprime los conectores laterales voluminosos, logrando un perfil plano que evita úlceras por decúbito.",
    "Punto de entrada sub-EIPS: Respeta la cresta ósea y reduce el dolor en la zona glútea y pélvica tras la cirugía.",
    "Caña lisa protectora sacroilíaca: Evita que las roscas dañen el cartílago de la articulación sacroilíaca.",
    "Tornillos canulados versátiles: Aptos para colocación guiada por navegación percutánea o abordajes abiertos tradicionales.",
    "Anclaje pélvico de alta rigidez: Soporta las enormes fuerzas de flexión y cizallamiento en artrodesis largas de columna."
  ],
  14: [
    "Trayectoria ósea cortical (CBT): Maximiza el contacto con hueso cortical denso, proporcionando fijación rígida en columnas osteoporóticas.",
    "Rosca Hook-Lock anti-expansión: Transmite las cargas en sentido vertical, eliminando la apertura o distracción del cabezal del tornillo.",
    "Doble rosca con 29% menos corte óseo: Facilita una inserción rápida y reduce la destrucción del canal pedicular.",
    "Abordaje de incisión reducida: Trayectoria medial que minimiza la disección muscular lateral en comparación con tornillos estándar.",
    "Bloqueo interno con cabeza Torx: Transmite el torque de apriete sin deslizamiento y reduce las rebabas al partir el vástago."
  ],
  164: [
    "Fenestraciones laterales calibradas: Distribución homogénea del cemento óseo en el lecho esponjoso vertebral sin extravasación hacia el canal.",
    "Estabilidad inmediata superior: La interfase cemento-tornillo-hueso multiplica la resistencia al arrancamiento en hueso osteoporótico.",
    "Tres configuraciones de rosca: Diseños adaptados que maximizan el agarre en hueso de baja densidad mineral.",
    "Opciones de brazos prolongados: Compatibilidad con cirugía mínimamente invasiva (MIS) percutánea sin desmontaje instrumental.",
    "Excelente versatilidad reconstructiva: Indicado en fracturas patológicas, osteoporosis severa y rescate en revisiones complejas."
  ],
  166: [
    "Diseño anatómico precurvado: Se ajusta a la lordosis cervical natural, reduciendo los tiempos de ajuste y moldeado quirúrgico.",
    "Bordes biselados de bajo perfil: Protege el esófago y las partes blandas prevertebrales, disminuyendo las tasas de disfagia.",
    "Mecanismo antirretracción integrado: Bloquea los tornillos de manera rápida y segura sin riesgo de aflojamiento anterior.",
    "Gran ventana de visualización: Permite evaluar con total nitidez la evolución de la fusión ósea y del injerto intersomático.",
    "Múltiples longitudes mononivel y multinivel: Placas disponibles de 1 a 4 niveles con orificios para tornillos fijos y variables."
  ],
  70: [
    "Estructura trabecular microporosa 3D (50%-80%): Facilita la migración celular, neovascularización y osteointegración de alta solidez.",
    "Módulo elástico de compatibilidad biológica: Reduce la concentración de tensiones en los platillos vertebrales, evitando el hundimiento.",
    "Alto coeficiente de fricción antideslizamiento: Brinda una estabilidad primaria extraordinaria contra fuerzas de cizallamiento.",
    "Modelos específicos para cervical y toracolumbar: Cajas adaptadas geométricamente para accesos anteriores, oblicuos y transforaminales.",
    "Ángulos lordóticos fisiológicos: Restituyen la altura del espacio intervertebral y la alineación sagital natural de la columna."
  ],
  72: [
    "Malla tubular con paso óseo omnidireccional: Permite el crecimiento del hueso a través de todas las ventanas de la malla de titanio.",
    "Longitudes precalibradas de 1-2 mm: Elimina la necesidad de recortar la malla en quirófano, suprimiendo rebabas metálicas.",
    "Tapas terminales arciformes protectoras: Nueve perfiles de tapas que evitan el hundimiento y restauran la alineación de la columna.",
    "Bordes corrugados de sujeción: Facilitan la manipulación con instrumental de inserción y reducen el tiempo operatorio.",
    "Titanio puro biocompatible: Libre de toxicidad, con excelente osteoconducción e imágenes radiológicas claras."
  ],
  169: [
    "Material PEEK con módulo cortical: Transmite las cargas compresivas de manera uniforme y suprime el blindaje de tensiones.",
    "Estrías en diente de sierra inversa: Gran resistencia al cizallamiento que previene la expulsión de la caja hacia el conducto raquídeo.",
    "Ventana de injerto extragrande: Permite un contacto íntimo y directo del injerto con los platillos vertebrales superior e inferior.",
    "Mantenimiento de la altura y lordosis: Previene la pérdida de altura del espacio discal y mantiene la reducción de espondilolistesis.",
    "Marcadores de tantalio radiopacos: Permiten verificar con precisión la posición de la caja bajo control fluoroscópico sin artefactos."
  ],
  171: [
    "Diseño paciente-específico en PA12: Fabricada a medida según la anatomía tomográfica 3D del paciente con calce exacto.",
    "Navegación y guiado milimétrico: Define con exactitud el nivel y ángulo de la osteotomía vertebral, reduciendo el tiempo operatorio.",
    "Modelos unilaterales y bilaterales: Versiones Tipo I y II para cortes unilaterales y Tipo III para osteotomías complejas bilaterales.",
    "Protección de estructuras críticas: Reduce sustancialmente el riesgo de sangrado y lesiones neurológicas por desviación instrumental.",
    "Curva de aprendizaje optimizada: Facilita la estandarización y reproducibilidad de osteotomías complejas en deformidades espinales."
  ],
  36: [
    "Primer anclaje impreso en 3D: Fabricado mediante fusión por haz láser (LBM) con aleación de titanio TC4 ELI de grado médico de alta pureza.",
    "Módulo elástico biomimético: Control preciso de la elasticidad para equiparar la del hueso humano, minimizando el daño óseo postoperatorio.",
    "Superficie porosa osteoconductora: Rugosidad microporosa que potencia la adhesión celular, el crecimiento óseo interno y acelera la recuperación del paciente.",
    "Rosca doble alta-baja autorroscante: Proporciona un agarre óseo superior comparable a anclajes metálicos macizos sin requerir perforación previa.",
    "Orificio de sutura independiente: Diseño distal que previene activamente el enredo y anudado accidental de las hebras durante el tensado intraoperatorio."
  ],
  39: [
    "Primer anclaje con recubrimiento de tantalio PVD: Tecnología pionera a nivel mundial que combina núcleo de titanio con revestimiento bioactivo de tantalio puro.",
    "Propiedades osteogénicas y antibacterianas: Estimula activamente la diferenciación ósea celular y ofrece una acción bacteriostática que minimiza infecciones postoperatorias.",
    "Resistencia anticorrosión superior: La capa de tantalio bloquea eficazmente la micro-liberación de iones metálicos y optimiza la biocompatibilidad articular.",
    "Opciones monorrosca y doble rosca: Diseños MD(I) y MD(II) en calibres de 3.5 a 6.5 mm para adaptarse a diversas densidades óseas y requerimientos quirúrgicos.",
    "Fijación multidireccional versátil: Excelente agarre en hueso esponjoso y cortical para intervenciones articulares mayores y de pequeñas articulaciones."
  ],
  51: [
    "Aletas de retención de Nitinol: Aleación de níquel-titanio superelástica que se expande bajo la cortical proporcionando una resistencia a la tracción axial superior.",
    "Diámetro ultrapequeño desde 1.3 mm: Preserva al máximo el lecho óseo, resultando ideal para ligamentos finos en pie, tobillo y dedos.",
    "Diseño sin rosca de inserción rápida: Colocación directa por impacto y despliegue instantáneo que agiliza el procedimiento y reduce el tiempo quirúrgico.",
    "Mínima pérdida ósea: Requiere un orificio guía diminuto que preserva la microarquitectura ósea circundante y favorece la cicatrización temprana.",
    "Precargado con suturas UHMWPE: Equipado con hebras de alta tenacidad en configuraciones simples o dobles para un anudado seguro."
  ],
  48: [
    "Punta autorroscante inferior: Permite la inserción directa en hueso con excelente penetración sin requerir perforación cortical previa.",
    "Doble zona de rosca: Extremo proximal compatible con placas y rosca distal cortical para una sujeción intraósea inquebrantable.",
    "Acabado anodizado antideslumbrante: Ofrece un marcado contraste visual que optimiza el control bajo visualización artroscópica o microscópica.",
    "Suturas UHMWPE de alta tenacidad: Fibras de polietileno de ultra alto peso molecular con colores contrastantes para una fácil identificación de cabos.",
    "Fijación no absorbible duradera: Resistencia mecánica permanente a la tracción cíclica sin riesgo de pérdida de tensión por degradación."
  ],
  149: [
    "Arquitectura de doble rosca alta-baja: Distribución biespiral que maximiza la superficie de contacto óseo y la fuerza de agarre de partes blandas.",
    "Punta autorroscante sin pretaladrado: Facilita una inserción directa y fluida en la cortical ósea sin requerir perforación instrumental previa.",
    "Doble orificio independiente: Separa físicamente cada cabo de sutura, eliminando fricciones, deshilachamiento y nudos accidentales.",
    "Suturas bicolores de alta visibilidad: Combinación de UHMWPE blanco y polipropileno azul para un trazado inmediato de los nudos intraoperatorios.",
    "Insertador graduado con marcas láser: Control visual exacto de la profundidad de anclaje para garantizar una colocación a ras de la superficie ósea."
  ],
  150: [
    "Arquitectura 100% textil sin metal: Elimina el implante rígido, previniendo el blindaje óseo y evitando artefactos en tomografías y resonancias.",
    "Fijación subcortical por bobina expandida: Al traccionar la sutura, el manguito se repliega formando un anclaje esférico firme contra la cortical interna.",
    "Mínima pérdida de volumen óseo: Requiere una perforación piloto de calibre mínimo, reduciendo el trauma óseo y preservando la anatomía nativa.",
    "Mecanismo de disparo activo Fix(I): El cuerpo del anclaje viaja protegido dentro de la punta del insertador para una inserción segura y sin enganches.",
    "Suturas de alta resistencia UHMWPE: Varias opciones precargadas en colores blanco, azul y azul-blanco para una identificación inequívoca."
  ],
  151: [
    "Material PEEK biocompatible: Módulo de elasticidad cercano al hueso humano, alta resistencia a la fatiga y ausencia total de artefactos en RMN.",
    "Estructura hueca osteoconductora: Proporciona una alta fuerza de sujeción a la vez que actúa como matriz morfológica para la integración ósea.",
    "Menor volumen de implante: Reduce la masa de material extraño en el lecho óseo, disminuyendo la respuesta inflamatoria local.",
    "Suturas UHMWPE de alta resistencia: Deslizamiento suave a través del tejido tendinoso y excelente estabilidad del nudo quirúrgico.",
    "Libre de blindaje de tensiones: Elasticidad modulada que previene la reabsorción ósea perianclaje a largo plazo."
  ],
  44: [
    "Material PEEK radiotransparente: Sin artefactos metálicos en radiografías ni resonancias magnéticas para un seguimiento postoperatorio limpio.",
    "Modelos MB(II) y MB(III): Variantes de doble rosca parcial o roscado completo para maximizar la resistencia a la extracción según el lecho óseo.",
    "Suturas UHMWPE de contraste: Combinación blanco puro y azul-blanco que simplifica el mapeo y anudado intraoperatorio.",
    "Vástago graduado con marcas de profundidad: Permite supervisar con total claridad el avance milimétrico del perno de anclaje.",
    "Gama dimensional completa: Múltiples diámetros y longitudes para cubrir los diferentes requerimientos anatómicos de cada articulación."
  ],
  57: [
    "Tecnología sin nudos (Knotless): Elimina los nudos articulares voluminosos, reduciendo el riesgo de rozamiento y acortando los tiempos de cirugía.",
    "Estructura hueca canulada: Facilita el paso de células osteogénicas hacia el interior del orificio óseo para una cicatrización acelerada.",
    "Fijación roscada en doble hilera: Diseñado específicamente para asegurar cintas o suturas en la hilera lateral en reparaciones de manguito rotador.",
    "Alta versatilidad de hebras: Compatible con suturas cilíndricas, cintas anchas planas o combinaciones de 4 a 8 hebras.",
    "Material PEEK biocompatible: Libre de tensiones nocivas, sin degradación reactiva y totalmente limpio bajo imágenes de RMN."
  ],
  152: [
    "Colocación por impacto (Knock-in): Técnica ágil que permite ajustar la tensión deseada sobre los tejidos blandos de forma previa a la fijación definitiva.",
    "Amplia cobertura dimensional de 1.8 mm a 9 mm: Adaptabilidad total para pequeñas articulaciones (mano/pie) y grandes articulaciones (hombro/cadera/rodilla).",
    "Fijación sin nudos de perfil plano: Evita el abultamiento y la fricción de nudos tradicionales en espacios articulares estrechos.",
    "Biocompatibilidad PEEK inerte: Ausencia de blindaje de tensiones y excelente tolerancia biológica sin inflamación por degradación.",
    "Compatibilidad limpia con RMN: Permite evaluar la reparación tendinosa y la cicatrización biológica en resonancia sin distorsión metálica."
  ],
  43: [
    "Acero inoxidable importado de alta dureza: Filo afilado de larga duración que garantiza un corte limpio, rápido y sin desgarros tisulares.",
    "Mecanismo de seguridad Snap-Lock: Acoplamiento firme a la pieza de mano que previene cualquier desprendimiento intraoperatorio.",
    "Excelente concentricidad y mínimo cabeceo: Riguroso control de tolerancias mecánicas que asegura una rotación suave libre de vibraciones.",
    "Codificación por colores: Interfaces coloreadas para una identificación visual inmediata del modelo y tamaño del cabezal.",
    "Desechable de un solo uso: Erradica por completo el riesgo de infección cruzada y asegura un rendimiento de corte constante."
  ],
  49: [
    "Cabezal de acero 30Cr13 de alta tenacidad: Dureza óptima que permite un desbridamiento óseo agresivo y controlado sin desgaste del filo.",
    "Variantes cilíndricas y esféricas: Diseños adaptados para modelado de superficies planas o tallado de concavidades óseas estrechas.",
    "Compatibilidad universal del 90%: Interfaz optimizada compatible con las consolas motorizadas artroscópicas más comunes.",
    "Sistema de fijación Snap-Lock: Retención segura que previene desprendimientos o vibraciones a revoluciones elevadas.",
    "Formato estéril de un solo uso: Rendimiento de corte original en cada cirugía sin contaminación cruzada ni desgaste acumulado."
  ],
  46: [
    "Limitador de profundidad graduable: Permite fijar la penetración de la aguja, protegiendo vasos sanguíneos y nervios poplíteos.",
    "Técnica All-Inside mínimamente invasiva: Pequeño implante de PEEK con sutura 2-0 de alta resistencia que minimiza el daño al tejido meniscal.",
    "Activación activa con una sola mano: Mecanismo ergonómico de 360° que ofrece control total del tiempo de disparo con precisión táctil.",
    "Múltiples angulaciones de aguja: Diseños recto, curva hacia arriba 12° y curva hacia abajo 12° para alcanzar cualquier cuadrante meniscal.",
    "Nudo deslizante pretensado: Permite una compresión firme y uniforme de los bordes de la rotura meniscal para promover la cicatrización biológica."
  ],
  45: [
    "Material PEEK atraumático: Roscas de borde romo que evitan el corte o maceración del injerto durante la inserción en el túnel óseo.",
    "Total compatibilidad con RMN: Permite evaluar con total nitidez la osteointegración y revascularización del ligamento en resonancia.",
    "Modelos JM y JQ con vaina: El sistema JQ incluye vaina protectora que distribuye las cargas de compresión en hueso de baja densidad.",
    "Cuerpo canulado con insertador graduado: Inserción precisa guiada sobre aguja de Kirschner con marcas milimétricas de avance en el mango.",
    "Fijación bicortical rígida: Elevada resistencia a la tracción que asegura una fijación primaria estable para la rehabilitación funcional temprana."
  ],
  41: [
    "Aleación Co-Cr-Mo de alta resistencia: Extraordinaria rigidez mecánica y resistencia a la fatiga bajo cargas fisiológicas repetitivas.",
    "Dientes de fijación antideslizamiento: Estrías retentivas en las patas que inmovilizan los tendones sin comprometer su vascularización.",
    "Puntas afiladas de penetración ósea: Permiten un anclaje cortical firme y reproducible mediante instrumental de impacto.",
    "Perfil bajo redondeado: Minimiza el relieve superficial para evitar molestias y fricción con las partes blandas suprayacentes.",
    "Esterilización por radiación gamma: Suministro estéril desechable listo para su uso quirúrgico inmediato."
  ],
  42: [
    "Fijación suspensoria cortical de alta resistencia: Gran superficie de contacto entre la placa y la cortical externa para soportar cargas cíclicas elevadas.",
    "Ranuras de perfil bajo con acople limpio: Aloja las suturas y los lazos en ranuras pulidas que evitan el roce y salientes palpables.",
    "Hilos de tracción y volteo incorporados: Facilitan el paso a través del túnel y la báscula de la placa sobre la cortical de manera rápida e intuitiva.",
    "Compatibilidad con túneles reducidos: El bucle flexible atraviesa fácilmente túneles óseos estrechos sin deshilacharse.",
    "Opciones fijas y ajustables: Variedad completa de longitudes de bucle para adaptarse a cualquier longitud de túnel femoral y longitud de injerto."
  ],
  56: [
    "Ajuste continuo en tiempo real: Permite traccionar y tensar el injerto milimétricamente dentro del túnel óseo una vez basculada la placa.",
    "Bloqueo unidireccional seguro: Mecanismo de autobloqueo que resiste las cargas de desplazamiento cíclicas sin elongación del bucle.",
    "Máximo contacto hueso-injerto: Permite llevar el injerto hasta la profundidad completa del túnel femoral para acelerar la osteointegración.",
    "Diseño atraumático de bajo perfil: Placa anatómica redondeada que minimiza las molestias en los tejidos blandos de la cara lateral del fémur.",
    "Simplicidad intraoperatoria: Elimina la necesidad de disponer de múltiples tamaños de bucles fijos, reduciendo el stock y la complejidad."
  ],
  40: [
    "Fibra UHMWPE de alta resistencia: Tejida con polietileno de ultra alto peso molecular que garantiza una resistencia a la tracción biomecánicamente insuperable.",
    "Variedad cromática para navegación intraoperatoria: Disponible en blanco, azul y bicolor azul-blanco para una distinción inmediata de cabos en reparaciones complejas.",
    "Superficie lisa y sin memoria: Hilos uniformes sin nudos que se deslizan suavemente a través de tejidos blandos sin desgarros ni deshilachamiento.",
    "Agujas quirúrgicas de alta elasticidad: Agujas de acero inoxidable de calidad superior que ofrecen excelente rigidez torsional, flexibilidad y afilado de corte prolongado.",
    "Rendimiento estable y duradero: Biocompatibilidad demostrada sin degradación química en aplicaciones de fijación ortopédica permanente."
  ],
  58: [
    "Cierre dérmico rápido y ordenado: Afronta los bordes de la herida en una fracción del tiempo de una sutura tradicional.",
    "Disparo regular sin saltos de grapa: Mecanismo interno de precisión que asegura una expulsión y doblado perfecto de cada grapa.",
    "Grapas de acero médico biocompatible: Pulidas electrolíticamente para no adherirse a los tejidos ni causar dermatitis.",
    "Menor traumatismo y cicatriz reducida: Altura libre sobre la piel que previene la necrosis de bordes y mejora el resultado estético.",
    "Retiro suave e indoloro: Puntas afiladas y superficie lisa que se desprenden fácilmente con extractor de grapas convencional."
  ],
  47: [
    "Tubo transparente con gestión de suturas: Facilita el paso, visualización y control de hilos sin enredos en el portal de trabajo.",
    "Roscado exterior de alta estabilidad: Fija firmemente la cánula a la cápsula articular, evitando expulsiones o desplazamientos involuntarios.",
    "Sellado hermético antifugas: Sistema de válvulas que reduce la pérdida de presión hídrica y de suero durante el intercambio de instrumental.",
    "Diseño ergonómico: Permite un agarre seguro para la inserción suave y controlada a través de las partes blandas.",
    "Gama de tamaños para cada articulación: Múltiples diámetros y longitudes para hombro, rodilla, cadera y codo."
  ],
  52: [
    "Material de silicona suave atraumático: Minimiza el roce y la fricción sobre el cartílago articular y los tejidos periféricos.",
    "Punta excéntrica Tipo II: Facilita la entrada a través de la cápsula y se adhiere a las partes blandas evitando que se salga.",
    "Almohadilla en C de 5 mm de grosor: Regula y controla con precisión la profundidad efectiva de inserción en la articulación.",
    "Doble capa estanca antifuga: Bloquea la extravasación de líquido hacia tejidos periarticulares durante la intervención.",
    "Canal elástico para instrumental irregular: Su flexibilidad acomoda con soltura guías curvadas, fresas y pinzas de formas no cilíndricas."
  ],
  66: [
    "Motor brushless superconductor: Máxima eficiencia de corte con mínima elevación térmica tisular y marcha silenciosa.",
    "Cabezal orientable 360° en 8 posiciones: Permite posicionar la hoja de corte en ángulos complejos sin flexionar la muñeca.",
    "Conmutación de doble velocidad: Selección instantánea entre 12.000 y 10.000 oscilaciones por minuto según la densidad ósea.",
    "Mecanismo de seguridad anticaída de hoja: Asegura un bloqueo mecánico positivo y rígido de la cuchilla quirúrgica.",
    "Protección inteligente contra sobrecargas: Chip electrónico que previene el sobrecalentamiento y bloqueos durante el aserrado.",
    "Diseño ergonómico y carcasa antirrayaduras: Distribución equilibrada del peso que reduce la fatiga del cirujano en cirugías largas."
  ],
  67: [
    "Motor alemán de alto torque continuo: Perforación potente y estable sin atascos en hueso cortical esclerótico.",
    "Eje hueco cannulado integrado: Facilita el paso y posicionamiento exacto de agujas guía y de Kirschner.",
    "Doble régimen de velocidad (1.200 / 270 rpm): Transición rápida entre perforación ósea veloz y fresado de alto torque.",
    "Control de inversión y botón de seguridad: Cambio ágil entre avance y reversa con protección contra accionamientos accidentales.",
    "Función de recuperación automática tras bloqueo: Restablece la marcha de inmediato cuando cede la resistencia mecánica.",
    "Conector de acople rápido (Quick-Change): Reemplazo veloz e intuitivo de brocas, mandriles y fresadores en mesa quirúrgica."
  ],
  68: [
    "Batería de litio de 4000 mAh: Gran autonomía que cubre procedimientos quirúrgicos prolongados sin interrupciones.",
    "Adaptabilidad a sierra esternal: Compatible con arco protector para corte seguro del esternón en cirugía torácica.",
    "Motor brushless superconductor: Alto poder de corte continuado con baja emisión de calor y funcionamiento silencioso.",
    "Doble velocidad de oscilación (12.000 / 10.000 opm): Corte rápido y controlado adaptado a hueso compacto o esponjoso.",
    "Sistema de fijación de hoja anticaída: Retención positiva que evita el desprendimiento accidental de la sierra.",
    "Carga rápida de alta corriente: Reduce drásticamente el tiempo de preparación del equipo entre cirugías."
  ],
};

export const PRODUCT_FEATURES_EN: Record<number, string[]> = {
  24: [
    "Millisecond safety boundary control: Instantly halts milling if the tool reaches the planned boundary, providing fail-safe protection for ligaments and vessels.",
    "Maximum preservation of healthy bone stock: Resects solely damaged cartilage and bone according to individual anatomy, preserving intact cruciate ligaments.",
    "Tremor reduction system: Handheld motorized module dampens oscillatory hand movements for a mirror-smooth bone bed finish.",
    "Minimally invasive with rapid rehabilitation: Facilitates small incisions with reduced intraoperative blood loss and rapid patient ambulation.",
    "No complex draping or bulky robotic arms: Lightweight, ergonomic handheld unit eliminating cumbersome sterile draping and clutter in the OR.",
    "Live 3D intraoperative feedback: Continuous real-time on-screen tracking of grinding progress, depth, and unicompartmental implant alignment."
  ],
  59: [
    "Active dynamic motion compensation: Effectively prevents deviations caused by involuntary patient movement or instrument vibration.",
    "Intraoperative tremor suppression: Provides steady, controlled positioning of osteotomy guides for flawless bone resection.",
    "Real-time dynamic ligament balancing: Quantifies flexion-extension joint gaps, ensuring balanced soft-tissue tension across the entire range of motion.",
    "Rapid turnover with no bulky draping: Eliminates complex sterile draping for heavy mechanical arms, significantly shortening operating room turnover.",
    "Compact surgical footprint: Integrates seamlessly into standard operating rooms without crowding surgeons or nursing personnel.",
    "Intuitive clinical software: Logical workflow and visual interface reducing the learning curve to a minimum while delivering an intelligent surgical experience."
  ],
  139: [
    "Active tremor reduction: Reduces intraoperative instrument tremor, enabling an intelligent and highly reliable surgical workflow.",
    "Precise 3D navigation & positioning: Delivers sub-millimeter control over acetabular cup inclination and anteversion, preventing prosthetic malposition and impingement.",
    "Ultra-compact handheld footprint: Minimizes operating room space occupation with a flexible layout adaptable to diverse surgical environments.",
    "Streamlined sterilization & setup: Eliminates cumbersome machine draping and complex heavy robotic arm assembly, substantially saving operative time.",
    "Autonomous perception & intelligent control: Human-machine cognitive collaboration guiding the surgeon step-by-step with an exceptionally short learning curve.",
    "Modular multi-indication architecture: Compatible with validated prosthetic systems, optimizing clinical versatility and hospital efficiency."
  ],
  161: [
    "Comprehensive modularity: Interchangeable heads and stems accommodating diverse anatomical canal dimensions.",
    "Fluted tapered stems: Delivers superior rotational stability within the bone cement mantle.",
    "Congruent anatomical articulation: Preserves physiological dorsiflexion and plantarflexion without edge-loading.",
    "Medical-grade UHMWPE: Extremely low volumetric wear rates under repetitive forefoot loading.",
    "Targeted joint reconstruction: Reliably eliminates push-off pain and corrects severe joint destruction."
  ],
  162: [
    "Flattened double-stem architecture: Maximizes rotational stability within the narrow phalangeal medullary canals.",
    "Ligament tension adjustability: Enables precise balancing of collateral ligaments for multi-planar joint stability.",
    "Kinematic restoration: Supports natural digital flexo-extension and fine motor pinch grip.",
    "Extensive size matrix: Standardized sizes covering index, middle, ring, and little fingers.",
    "Biological osseointegration: Titanium surface profile promoting secure long-term bone anchorage."
  ],
  163: [
    "Rigid subchondral load-bearing: Directly reinforces necrotic bone plate to prevent articular collapse.",
    "Osteogenic trabecular structure: Accelerates cellular ingrowth and revascularization across the necrotic zone.",
    "Threaded lateral anchoring: Prevents rod migration and maintains stable axial positioning.",
    "Minimally invasive percutaneous approach: Significantly reduces operative trauma and recovery time.",
    "Hip joint preservation: Effectively defers or eliminates the immediate need for total hip replacement."
  ],
  173: [
    "Extended revision length: Bypasses proximal metadiaphyseal defects for stable distal cortical anchoring.",
    "Collarless polished taper-slip: Eliminates interface shear stresses and self-tightens within the cement.",
    "Dedicated distal centralizer: Guarantees a continuous, uniform cement mantle exceeding 2 mm in thickness.",
    "Superior fatigue resistance: Engineered for heavy cyclic loading in compromised or osteoporotic bone.",
    "Standard 12/14 taper: Fully compatible with metal and ceramic femoral heads of various neck lengths."
  ],
  183: [
    "Immediate skeletal restoration: Bypasses extensive femoral and tibial diaphyseal voids.",
    "Rigid anti-rotation coupling: Morse tapers with transverse bolts resisting high torsional and axial forces.",
    "Early functional load-bearing: Accelerates patient ambulation independent of biological bone union.",
    "Versatile modular stacking: Multiple spacer lengths adaptable to any segmental resection margin.",
    "Biocompatible anodized surface: Minimizes bacterial colonization and soft tissue irritation."
  ],
  185: [
    "Smooth anatomical tracking: Broad, low-constraint trochlear groove prevents patellar maltracking.",
    "Proximal trochlear lead-in: Seamlessly captures the patella in early flexion, eliminating crepitus.",
    "Maximum joint preservation: Spares cruciate ligaments, menisci, and tibiofemoral joint compartments.",
    "Targeted pain relief: Effectively eliminates anterior knee pain during stair climbing and squatting.",
    "Straightforward revision pathway: Readily converts to total knee arthroplasty if generalized disease develops."
  ],
  202: [
    "Humeral neck preservation: Avoids humeral neck resection and preserves anatomical retroversion.",
    "Bioactive Ti + HA coating: Promotes rapid osteoconduction and long-term biological anchorage.",
    "Native center of rotation restoration: Replicates individualized humeral anatomy without altering offset.",
    "Intact medullary canal: Leaves the humeral shaft completely untouched for any future interventions.",
    "Accelerated recovery: Minimizes operative blood loss and supports early active range of motion."
  ],
  210: [
    "Semi-constrained hinge mechanism: Dampens torsional peak stresses to protect the cement mantle.",
    "Replaceable UHMWPE bushings: Prevents metal-on-metal wear and reduces particulate debris generation.",
    "Anatomically contoured stems: Matches humeral and ulnar canals for uniform cement pressurization.",
    "Secure hinge pin locking: Eliminates risk of intraoperative disassembly and joint dislocation.",
    "Dramatic pain relief: Restores pain-free, stable flexion-extension for daily activities."
  ],
  211: [
    "Head-stem modularity: Permits precise restoration of the lateral column without overstuffing the joint.",
    "Valgus stability restoration: Replaces primary bony stabilizer against valgus displacement.",
    "Congruent articulating dish: Perfectly matches capitellar curvature during flexion and pronosupination.",
    "Atraumatic smooth stem: Preserves the proximal radial neck and simplifies extraction if needed.",
    "Essex-Lopresti protection: Prevents proximal radial migration and secondary distal radioulnar joint disruption."
  ],
  212: [
    "Anatomical elliptical design: Replicates natural radial asymmetry to eliminate excessive radioulnar contact.",
    "Fluid pronosupination: Beveled circumference prevents forearm rotational binding and post-op stiffness.",
    "Metaphyseal porous fixation: Delivers robust biological osseointegration without excessive diaphyseal stress.",
    "Capitellar cartilage protection: Decreases point contact stresses, preventing capitellar erosion.",
    "Multi-planar stability: Restores primary valgus and posterolateral rotatory elbow stability."
  ],
  217: [
    "True 1:1 anatomical fidelity: Exact tactile physical representation of complex osseous defects.",
    "Realistic preoperative rehearsal: Facilitates intraoperative plate pre-bending and implant positioning.",
    "Operative time reduction: Significantly cuts down surgical duration, blood loss, and anesthesia exposure.",
    "Enhanced clinical communication: Excellent tool for multi-disciplinary planning and patient education.",
    "Multi-regional coverage: Standardized protocols available for 16 distinct skeletal anatomical zones."
  ],
  219: [
    "Unique key-and-lock anatomical fit: Seats securely solely in the designated pre-planned position.",
    "Precise angular correction: Faithfully reproduces pre-planned weight-bearing mechanical axis alignment.",
    "Zero medullary canal violation: Completely avoids intramedullary reaming, minimizing fat embolism risks.",
    "Protected cutting slots: Ensures rigid blade guidance without saw deflection during bone resection.",
    "Reduced radiation exposure: Substantially lowers intraoperative fluoroscopy verification needs."
  ],
  220: [
    "Critical neurovascular shielding: Physical safety stops preventing inadvertent saw excursion.",
    "3D dysplasia correction: Delivers reproducible multi-planar acetabular fragment mobilization.",
    "Conservative surgical access: Facilitates smaller incisions with reduced soft-tissue stripping and blood loss.",
    "Minimized intraoperative radiation: Lessens reliance on repeated fluoroscopic C-arm confirmations.",
    "Standardized surgical safety: Transforms complex pelvic reconstructions into predictable procedures."
  ],
  221: [
    "Stable micro-anatomical seating: Conforms rigidly to tiny osseous ridges without rotational slippage.",
    "Millimetric hallux valgus correction: Faithfully reproduces target intermetatarsal and hallux valgus angles.",
    "Adjacent cartilage preservation: Prevents accidental blade penetration into neighboring healthy joints.",
    "Low-trauma micro-pinning: Fixes reliably without cracking delicate cortices of small bone fragments.",
    "Optimized bone union: Yields parallel, flush osteotomy surfaces maximizing compression screw fixation."
  ],
  222: [
    "Circumferential micro-grooves: Significantly elevates interfacial shear resistance and rotational stability.",
    "Multi-directional screw fixation: Targets healthy host bone in anterior/posterior pelvic columns.",
    "Massive bone defect reconstruction: Stabilizes pelvic discontinuities and severe acetabular deficiency.",
    "High impingement-free range of motion: Optimized equatorial profile prevents neck-cup impingement.",
    "Long-term biological osteointegration: Facilitates dense vascular and trabecular bone ingrowth."
  ],
  223: [
    "Effortless femoral exposure: Elevates and externalizes the proximal femur through tiny muscle-sparing incisions.",
    "True muscle-sparing workflow: Leaves gluteal tendons and external rotators entirely intact.",
    "Parametric traction control: Fine-tunes soft tissue tension, limb length, and joint stability in real time.",
    "Universal table compatibility: Rapidly clamps onto standard surgical tables without requiring expensive specialized beds.",
    "Rapid patient mobilization: Supports outpatient same-day discharge and accelerated functional recovery."
  ],
  225: [
    "Perfect anatomical congruence: Pre-emptively fits the post-resection defect, eliminating intraoperative force-fitting.",
    "Biomimetic porosity gradient: Facilitates extensive vascularization and deep three-dimensional osteointegration.",
    "Reduced modulus mismatch: Significantly dampens stress shielding and periprosthetic bone resorption.",
    "Targeted locking screw trajectories: Strategically directed through viable, dense host cortical pillars.",
    "Definitive salvage solution: Successfully reconstructs critical defects impossible to treat with standard implants."
  ],
  229: [
    "Active vacuum degassing: Reduces cured cement porosity by up to 90%, boosting fatigue resistance.",
    "Retrograde pressurized delivery: Eliminates air pockets and blood laminations in the canal.",
    "Transparent graduated nozzles: Provides clear real-time visibility of cement flow and delivery depth.",
    "Fume-free closed system: Shields surgical personnel from noxious methyl methacrylate monomer vapors.",
    "Comprehensive sterile kit: Fully pre-packaged and ready for immediate scrub table deployment."
  ],
  230: [
    "Concurrent irrigation and suction: Continuously clears debris without aerosolization or operating room splatter.",
    "Optimized cement mantle bonding: Deepens cement micro-interdigitation into cancellous trabeculae.",
    "PJI risk mitigation: Rapidly clears bacterial bioburden, microthrombi, and loose necrotic tissue.",
    "Selectable dual-speed trigger: Immediate tactile switching between gentle soft-tissue washing and deep bone reaming.",
    "Cable-free battery pack: Fully self-contained power for untethered mobility throughout the surgical case."
  ],
  231: [
    "Ultra-low friction coefficient: Substantially decreases volumetric bearing wear and periprosthetic osteolysis.",
    "Maximum fracture toughness: Zirconia phase transformation toughening actively impedes microcrack propagation.",
    "Hydrophilic surface wettability: Maintains a continuous fluid synovial lubrication film during gait.",
    "Zero metal ion release: Ideal bearing solution for patients with metal sensitivity or allergy.",
    "Third-body scratch resistance: Impervious to scratching by stray bone chips or cement particles."
  ],
  232: [
    "Stem salvage capability: Eliminates the morbidity and bone loss associated with removing well-fixed stems.",
    "Accurate leg length equalization: Optimizes abductor muscle tension and restores joint biomechanics.",
    "Titanium protective interface: Dampens micromotion and shields the trunnion from fretting corrosion.",
    "High taper lock strength: Withstands physiological cyclic peak forces without dissociation.",
    "Intraoperative adaptability: Comprehensive range of neck lengths to solve joint laxity or impingement."
  ],
  165: [
    "Proximal anti-rotation ribs: Significantly increases primary rotational stability in the trochanteric bed.",
    "Bioactive Ti + HA dual coating: Stimulates early osteoblast proliferation and durable long-term anchoring.",
    "Distal coronal slot: Moderates distal bending stiffness, effectively eliminating thigh pain.",
    "Tapered rectangular geometry: Establishes secure wedge stability without risk of axial subsidence.",
    "Lateralized offset options: Restores abductor muscle tension and native patient hip mechanics."
  ],
  167: [
    "Collarless mirror finish: Eliminates shear stress risers and promotes hydrostatic cement pressurization.",
    "Balanced double taper: Transfers axial compressive forces without localized stress concentrations.",
    "High-strength Co-Cr-Mo material: Outstanding fatigue endurance under continuous cyclical walking loads.",
    "Straightforward revision extraction: Smooth surface devoid of undercuts simplifies future revision if required.",
    "Extensively documented clinical history: High long-term implant survival rates in mature patient populations."
  ],
  168: [
    "Proximal EBM trabecular metal: Stimulates deep biological osseointegration and durable bone purchase.",
    "Physiological proximal load transfer: Prevents calcar bone resorption and femoral stress shielding.",
    "Self-locking double taper geometry: Delivers immediate axial and rotational stability upon seated impaction.",
    "Distal longitudinal flutes: Moderates diaphyseal stiffness and ensures self-centering canal alignment.",
    "Standard 12/14 Morse taper: Seamlessly pairs with metal and Biolox Delta ceramic femoral heads."
  ],
  170: [
    "Stabilizing triple-taper geometry: Provides rigid primary stability against axial and rotational forces.",
    "Bioactive Ti + HA dual coating: Accelerates biological bone apposition and secure osseointegration.",
    "Distal longitudinal flutes: Moderates stem-tip bending stiffness to prevent thigh pain.",
    "Slim polished neck profile: Increases impingement-free angular range of motion.",
    "High-precision 12/14 Morse taper: Exact coupling with ceramic and metal femoral heads."
  ],
  172: [
    "Extended 160 mm stem length: Bypasses proximal metaphyseal bone defects to establish stable distal diaphyseal fix.",
    "Longitudinal anti-rotation flutes: Provides outstanding rotational stability against physiological torsional forces.",
    "Coronal slot decompression tip: Lowers structural bending stiffness to eliminate distal stem-tip thigh pain.",
    "Proximal osteoconductive coating: Facilitates biological bone bridging in the surviving metaphyseal zone.",
    "Standard 12/14 Morse taper: Fully compatible with ceramic and metal heads in multiple neck lengths."
  ],
  174: [
    "Cross-linked HXLPE polyethylene: High resistance to abrasive wear prevents periprosthetic osteolysis.",
    "Anti-rotation locking tabs: Locks insert rigidly into the shell, preventing dislodgement.",
    "Optimized chamfered rim: Prevents femoral neck impingement during flexion and internal rotation.",
    "Oxygen-free sterilization: Precludes free-radical induced oxidative material breakdown.",
    "Micrometric congruency tolerances: Ensures even joint load distribution with the femoral head."
  ],
  175: [
    "Optical mirror surface finish: Minimizes frictional wear against the mobile polyethylene liner.",
    "Self-locking taper connection: Locks rigidly into the outer cup, preventing toggle and fretting.",
    "Maximum mechanical endurance: Co-Cr-Mo alloy withstands severe cyclical loads without deformation.",
    "Intraoperative versatility: Enables dual-mobility conversion based on patient-specific laxity.",
    "Individually gamma-sterilized: Preserves pristine surface integrity up to the moment of implantation."
  ],
  177: [
    "Biomimetic EBM trabecular mesh: Stimulates cell proliferation and continuous bone ingrowth across the dome.",
    "G20 3-hole cluster layout: Targeted at the strong posterosuperior iliac column for additional purchase.",
    "High coefficient of friction: Establishes solid initial press-fit stability without toggle.",
    "Low modulus of elasticity: Prevents stress shielding and secondary periprosthetic bone loss.",
    "Articular bearing compatibility: Pairs with highly cross-linked polyethylene and ceramic heads."
  ],
  178: [
    "G40 multi-hole layout: Complete freedom to place cancellous screws into any competent bone corridor.",
    "3D EBM trabecular porous network: Dramatically accelerates durable biological osseointegration.",
    "High frictional scratch-fit: Immobilizes the cup, eliminating micro-motion upon initial impaction.",
    "Low elastic modulus: Mirrors cancellous bone stiffness to prevent stress shielding.",
    "HXLPE liner compatibility: Accommodates neutral and elevated-rim high cross-linked liners."
  ],
  179: [
    "3D biomimetic trabecular structure: Stimulates deep internal bone ingrowth establishing permanent biological fusion.",
    "Physiological low elastic modulus: Reduces stress shielding and prevents secondary periprosthetic bone loss.",
    "Restores hip rotation center: Reconstructs uncontained superior rim defects to restore normal joint biomechanics.",
    "Integrated countersunk screw holes: Enables rigid screw anchoring without hardware proud of the augment surface.",
    "High compressive load endurance: Securely bears the mechanical loads transmitted from the overlying acetabular cup."
  ],
  180: [
    "Highest coefficient of friction: Porous tantalum delivers outstanding scratch-fit initial stability against bone.",
    "Highly porous cellular architecture: Accelerates cell adhesion, neovascularization, and deep physiological osteogenesis.",
    "Biomimetic elastic modulus: Prevents stress shielding and subsequent periprosthetic bone resorption.",
    "Immense biocompatibility and inertia: Elicits zero inflammatory response and resists all in vivo biological corrosion.",
    "Rigid structural support: Restores acetabular architecture and securely supports the overlying cup."
  ],
  181: [
    "High mechanical strength and toughness: Withstands severe physiological compression loads without fracture risk.",
    "High-precision mirror finish: Minimizes joint friction and abrasive wear against polyethylene.",
    "Rigid 12/14 Morse taper coupling: Prevents fretting corrosion and taper interface toggle.",
    "Four neck offset options: Restores leg length discrepancies and soft tissue tension precisely.",
    "Universal clinical compatibility: Pairs with primary and revision stems featuring standard 12/14 tapers."
  ],
  184: [
    "Comprehensive segmental modularity: Permits tailored reconstruction for any diaphyseal or total femoral resection length.",
    "Heavy-duty Morse taper junctions: Provides absolute rigidity against cyclical bending and torsional stresses.",
    "Tendon reattachment suture holes: Allows secure anatomical refixation of abductor musculature and psoas.",
    "Surface anodizing treatment: Generates a robust protective oxide barrier against fretting and corrosion.",
    "Fluted intramedullary stems: Ensures rigid distal diaphyseal anchoring without stem-tip pain."
  ],
  187: [
    "Single-radius spherical articular surface: Ensures minimal contact stress during omnidirectional movements, eliminating edge loading.",
    "Dual-post femoral fixation: Enhances rotational stability and reduces aseptic loosening risk.",
    "High angular tolerance: Provides a safe alignment margin of up to 10° varus/valgus.",
    "Mirror-polished tibial tray: Minimizes polyethylene backside wear and soft tissue irritation.",
    "Recessed cement pockets: Promotes uniform cement distribution and superior mechanical interlocking.",
    "Maximum tissue preservation: Leaves cruciate ligaments and unaffected compartment untouched for faster recovery and natural feel."
  ],
  190: [
    "Complete posterior cruciate preservation (CR): Anatomical intercondylar notch designed to protect native PCL fibers and preserve proprioception.",
    "Thinned anterior femoral flange: Reduces anterior pressure on the extensor mechanism, eliminating anterior knee pain.",
    "Extended and deepened trochlear groove: Provides smooth, centered patellar tracking and prevents patellar subluxation.",
    "Mirror-polished tibial tray: Superior surface finish dramatically reduces backside polyethylene wear.",
    "Uniform contact stress distribution: Dual-radius femoral geometry maintains high contact area across functional arc of motion."
  ],
  191: [
    "Thinned anterior condyle and optimized trochlea: Enhances smooth articulation with the patella, reducing crepitus and anterior knee pain while facilitating deep flexion.",
    "Optimized open intercondylar box: Preserves intercondylar bone volume.",
    "CR and PS prosthesis types available: Provides both Cruciate-Retaining and Posterior-Stabilized options to meet diverse clinical requirements.",
    "Highly polished anatomical tibial tray: Promotes uniform stress distribution across the tibial plateau and minimizes backside wear.",
    "Central locking mechanism with anti-rotation island: Ensures rigid insert fixation and prevents micro-motion.",
    "Improved PS cam design: Posteriorly positioned post enables early contact to prevent mid-flexion instability, with dual articular surfaces to reduce contact stress."
  ],
  192: [
    "Bioactive dual Ti + HA coating: Plasma-sprayed porous pure titanium and hydroxyapatite layer accelerates osteoblast integration and durable cementless biological fixation.",
    "Vitamin E highly cross-linked polyethylene (VE-HXLPE): High oxidative stability and minimal wear rate ensure longevity of articular contact surfaces.",
    "Gradual radius femoral condyle design: Smooth patellofemoral tracking along the trochlear groove prevents patellar binding and wear.",
    "Cementless press-fit fixation: Reliable primary mechanical press-fit eliminating bone cement preparation and curing times.",
    "Bone preservation: Maintains periprosthetic bone density and physiological stress transfer."
  ],
  194: [
    "Vitamin E highly cross-linked polyethylene (VE-HXLPE): Homogeneous antioxidant infusion prevents in vivo oxidative degradation while maintaining exceptional mechanical strength and wear resistance.",
    "Posteriorly positioned post: Enables early contact between post and femoral cam, preventing instability during mid-flexion.",
    "Dual articular surface post design: Reduces contact stress concentrations on the post, dramatically decreasing polyethylene wear.",
    "Deep anterior patellar notch: Eliminates patellar tendon impingement during high flexion movements.",
    "High-precision locking mechanism: Secure seating into the tibial tray prevents backside micro-motion and liner dislodgement."
  ],
  197: [
    "Thinned anterior condyle and curved bilateral contour: Reduces friction on anterior patellar musculature and ligaments, effectively preventing anterior knee pain.",
    "Semi-open intercondylar fossa design: Eliminates excessive intercondylar bone resection and lowers the risk of intercondylar fossa fractures.",
    "Highly polished tibial tray: Minimizes backside wear of the polyethylene insert.",
    "Comprehensive modular stems and blocks: Straight and eccentric stems paired with distal/posterior femoral and tibial augments to manage severe bone loss.",
    "Enhanced varo-valgus constraint: Robust revision spine provides high joint stability and reliable rotational guidance."
  ],
  199: [
    "Modular hinge mechanism: Load is borne by the tibial tray, reducing wear on the hinge polyethylene.",
    "Rotating platform design: Offsets torsional load exerted on soft tissues by the bone cement surface during prosthesis movement via rotation.",
    "Maximum 40 mm jump height: Prevents subluxation caused by mid-flexion instability after knee surgery.",
    "Optimized stress transfer design: Ensures uniform force distribution and long-term stable prosthesis performance.",
    "Cross-slot decompression tip: Reduces intramedullary extension stem stiffness and lowers the incidence of stem tip pain.",
    "Optimized tibial post: Connectable with eccentric extension stem for optimal adaptation to medullary cavity morphology."
  ],
  201: [
    "Three-dimensional porous network structure: High roughness and interconnected internal pores effectively stimulate osteogenesis and rapid bone ingrowth.",
    "Proportional solid-trabecular architecture: Maximizes compressive strength while preventing fatigue under continuous physiological loads.",
    "Biomimetic low elastic modulus: Resembles cancellous bone to minimize stress shielding and prevent secondary periprosthetic bone loss.",
    "Comprehensive anatomical shapes: Distal and posterior femoral blocks alongside multiple tibial wedge sizes for precise joint line restoration.",
    "Rigid primary fixation: Secured via forged TC4 screws to ensure absolute primary stability and promote rapid biological integration."
  ],
  203: [
    "Comprehensive System: Consists of a cementless humeral stem, anatomic eccentric humeral head, and UHMWPE glenoid component.",
    "Anti-Rotation Rectangular Stem: Delivers high primary torsional stability and features proximal pure titanium coating for biological bone ingrowth.",
    "Anatomic Eccentric Humeral Head: Curvature diameters from 36 to 48 mm (2 mm increments) providing coverage tailored to the anatomical neck.",
    "Bionic Physiological Kinematics: Restores natural glenohumeral kinematics relying on the patient's intact rotator cuff musculature.",
    "Proven Long-Term Survival: Complete relief of arthritic pain, low dislocation incidence, and reliable prosthesis survivorship."
  ],
  205: [
    "3D Trabecular Glenoid Fixator: Additive metal trabecular matrix with eccentric geometry prevents inferior glenoid notch formation and impingement.",
    "Humeral Stem with Porous Coating: Proximal oval profile with titanium powder coating and suture eyelets for soft tissue refixation.",
    "Variable-Angle Universal Screws: Adjustable trajectories from 0° to 30° with titanium coating provide superior purchase in the glenoid vault.",
    "Anatomic-to-Reverse Converter: Enables straightforward revision or conversion between anatomic and reverse shoulder configurations.",
    "Restores Joint Kinematics: Medializes and depresses the center of rotation to recruit deltoid fibers, delivering pain relief and restoring active mobility."
  ],
  207: [
    "Comprehensive Modular Architecture: Proximal humerus, modular osteotomy spacers, intramedullary stem, and universal anatomic / reverse heads.",
    "Anatomic Proximal Contour: Matches native proximal humerus anatomy with strategic suture holes for secure muscle and tendon reattachment.",
    "24 Intramedullary Specifications: Extensive selection of diameters and lengths, providing custom-like reconstruction for varied resection margins.",
    "Universal Articular Interchangeability: Seamlessly configurable into anatomic hemi/total arthroplasty or reverse shoulder reconstructive modes.",
    "Limb Salvage & Biomechanical Stability: Restores limb length and load-bearing function, minimizing postoperative complications during adjuvant oncology therapies."
  ],
  213: [
    "Electron beam melting (EBM) 3D printing: Tibial tray and sleeves engineered with biomimetic Ti6Al4V ELI porous network for maximum bone ingrowth and stress damping.",
    "Heavy-duty modular diaphyseal segments: Morse taper connections allow length adaptation to reconstruct any degree of bone loss.",
    "Intramedullary anchoring stems: Wide range of diameters and lengths with longitudinal venting slots for balanced canal fill without end-stem pain.",
    "Tailored constraint levels: Heavy-duty UHMWPE constraint inserts stabilize severe collateral ligament insufficiency.",
    "Hard surface anodizing: Creates a protective passive barrier against fretting wear and galvanic corrosion across interfaces."
  ],
  224: [
    "Type 60 uniform rough surface: Maximizes primary frictional grip to prevent rotational micro-motion.",
    "Circumferential micro-grooves: Enhances mechanical interlocking and accelerates deep bone ingrowth.",
    "Perimeter screw hole array: Permits rigid screw anchoring into surviving iliac bone columns.",
    "Flattened apical dome: Prevents bottoming out against cotyloid floor, ensuring rim compression.",
    "Pure titanium biocompatibility: Eliminates metal hypersensitivity risks in complex reconstructions."
  ],
  226: [
    "Triaxial connector with rotational damping: Restores natural flexion and physiological rotation while relieving torsional stresses on the cement mantle and stem.",
    "Modular diaphyseal osteotomy segments: Reconstructs massive femoral or tibial bone defects with customizable segment lengths.",
    "Heavy-duty intramedullary stems: Ensures stable diaphyseal anchoring with optimized stiffness to prevent stem-tip pain.",
    "Surface anodizing of titanium components: Forms an oxide barrier that dramatically improves corrosion resistance, wear performance, and fatigue life.",
    "Replaceable UHMWPE rotational bushings: Dampens cyclic impact loads and allows straightforward replacement during maintenance without disrupting bone-fixed implants."
  ],
  227: [
    "Sterile packaging and single-use design: Sterile packed for immediate use upon opening in the operating room.",
    "Rotary thread demolding design: Ensures smooth, quick and effortless spacer removal once cement cures.",
    "Medical-grade non-stick polypropylene (PP-R): Prevents acrylic cement adhesion, delivering smooth articular surfaces.",
    "Gap measurement blocks included: Three sizes (5 mm, 10 mm, 12 mm) to accurately assess and balance joint laxity.",
    "Wide range of models and specifications: Accurately matches diverse femoral and tibial patient anatomies."
  ],
  228: [
    "Sterile single-use packaging: Packed sterile for immediate intraoperative use under strict aseptic conditions.",
    "Non-stick PP-R polypropylene: Prevents PMMA cement adherence, delivering smooth articular surfaces.",
    "Quick demolding mechanism: Facilitates clean extraction of cured cement spacers without damage.",
    "Multiple head diameter options included: Matches patient acetabular dimension to restore joint stability.",
    "Preserves limb length and muscle tension: Prevents soft tissue contracture between stages of infection management."
  ],
  2: [
    "CVD Pure Porous Tantalum: Manufactured via world-leading chemical vapor deposition ensuring extreme toughness without particle shedding.",
    "Biomimetic Elastic Modulus: Matches human cancellous bone elasticity, preventing stress shielding and cage subsidence.",
    "Interconnected Porosity: Promotes cellular ingrowth, osteoblast proliferation, and deep bone-implant integration.",
    "Serrated Grip Surfaces: Superior primary mechanical anchoring prevents postoperative cage migration or retropulsion.",
    "Sagittal Alignment Restoration: Re-establishes anatomical disc space height and physiological lordotic curvature."
  ],
  154: [
    "Pioneering 3D-Printed Lamina Plate: Patented additive design precisely matching the geometry of spinal canal enlargement osteotomies.",
    "Porous Graft-Free Matrix: Integrated 3D trabecular regions eliminate the need for harvested bone graft while restoring canal space.",
    "Atraumatic Inner Contouring: Smooth internal face protects the spinal thecal sac and minimizes adjacent tissue friction.",
    "Rigid Open-Door Stabilization: Securely maintains laminar elevation, preventing postoperative recoil or re-stenosis.",
    "Versatile Screw Hole Arrays: Diversified hole patterns accommodate variable pedicle and lateral mass screw trajectories."
  ],
  34: [
    "Integrated Self-Stabilizing ALIF: Eliminates the necessity for supplementary posterior pedicle screws in primary cases.",
    "Four Divergent Locking Screws: Anchors firmly into adjacent vertebral bodies as a biomechanical bone wedge.",
    "Non-Rigid Load-Sharing Interface: Directs physiological compressive loads onto the graft matrix, promoting rapid fusion.",
    "Lordotic Restoration: Multiple lordotic angulations restore anatomical lumbosacral alignment and neural foramen volume.",
    "Streamlined Anterior Workflow: Minimizes surgical dissection and postoperative pain, facilitating early patient mobilization."
  ],
  69: [
    "49-Strand Braided Construction: Delivers superior flexibility and bend fatigue resistance, eliminating kink snapping.",
    "20° Adjustable Locking Clip: Accommodates anatomical contours, streamlining instrument tensioning and crimping.",
    "Titanium Biocompatibility: Eliminates adverse foreign-body reactions and supports long-term intraosseous stability.",
    "Atraumatic Sublaminar Passage: Pliable cable negotiates the spinal canal smoothly, safeguarding thecal sac integrity.",
    "Hybrid System Integration: Connects seamlessly with occipitocervical and lateral mass screw-rod systems."
  ],
  26: [
    "U-Shaped Shock-Absorbing Core: Dampens axial loads while maintaining neuroforaminal height and segmental kinematics.",
    "Serrated Anti-Rotational Wings: Four gripping flanges secure the spinous processes against hyper-extension and kyphosis.",
    "Staggered Multi-Level Flanges: Enables contiguous two-level intervention without adjacent hardware overlap.",
    "Ligament Suture Eyelets: Integrated holes allow secure supraspinous and interspinous ligament repair.",
    "Motion-Preserving Decompression: Delivers indirect canal expansion without destructive bone resection or rigid fusion."
  ],
  155: [
    "3D Biomimetic Trabecular Architecture: Cancellous-like modulus prevents stress concentration and endplate subsidence.",
    "Osteoinductive Microenvironment: Continuous interconnected porosity fosters rapid cellular migration and solid osseointegration.",
    "Anatomically Angled Endplates: Diverse lordotic profiles restore physiological sagittal balance and curvature.",
    "Cervical & Thoracolumbar Models: Tailored I-A (cervical) and I-B (thoracolumbar) configurations for segmental anatomy.",
    "High Compressive Load Capacity: Withstands rigorous anterior spinal column axial forces with durable structural integrity."
  ],
  71: [
    "Up to 100° Polyaxial Cone of Angulation: Greatly simplifies rod engagement across challenging cervical trajectories.",
    "Rigid Midline Occipital Plate: Delivers uncompromised craniocervical anchorage with supplementary lateral wing screws.",
    "Pre-Bent & Pre-Cut Titanium Rods: Eliminates notch sensitivity and fatigue risks associated with acute manual rod bending.",
    "Dedicated Lateral Mass & Pedicle Screws: Specific screw threads for lateral mass (20 mm).",
    "Low-Profile Posterior Contour: Reduces hardware prominence beneath the posterior cervical musculature."
  ],
  156: [
    "Arcuate Concave-Convex Footprints: Distributes axial loads across dense peripheral bone, drastically reducing subsidence.",
    "Immediate Self-Stabilization: Interlocking serrations anchor into subchondral bone, eliminating risk of canal migration.",
    "Central Cylindrical Height Adjustment: Delivers controlled distraction and reliable locking to restore anterior column height.",
    "Large Bone Graft Chamber: Expansive aperture provides direct endplate-to-endplate biological fusion continuity.",
    "Thoracolumbar System Synergy: Pairs seamlessly with posterior pedicle screw and rod instrumentation."
  ],
  157: [
    "Zero-Profile Architecture: Resides entirely within the disc interspace, drastically reducing postoperative dysphagia.",
    "Self-Locking Ring Screws: Securely locks the screw into the plate, eliminating the risk of screw extrusion.",
    "Standalone Fixation: Eliminates the need for supplementary anterior cervical plates, minimizing operative trauma.",
    "Lordotic Variations (0° to 8°): Restores natural cervical alignment according to patient-specific anatomy.",
    "Generous Graft Aperture: Expansive internal chamber supports robust through-growth fusion."
  ],
  158: [
    "High-Plasticity Pure Titanium: Enables smooth, notch-free intraoperative contouring to vertebral lamina.",
    "Integrated Lamina Retention Slot: Locks the osteotomized lamina securely open without mandatory bone grafting.",
    "Low-Profile Contouring: Significantly mitigates muscle impingement and chronic axial neck pain.",
    "Motion-Preserving Decompression: Expands the spinal canal while preserving physiological cervical motion.",
    "Spinal Canal Protection: Eliminates postoperative laminar spring-back and protects the decompressed cord."
  ],
  159: [
    "Percutaneous MIS Technique: Significantly reduces blood loss, tissue trauma, and postoperative recovery time.",
    "Extra-Long Extension Towers: Provide intuitive percutaneous guide-wire tracking and effortless rod reduction.",
    "Dual-Lead Thread Profile: Speeds insertion while delivering superior cortical and cancellous pullout anchoring.",
    "Square-Thread Torx Setscrew: Prevents cross-threading and driver cam-out during final torque tightening.",
    "Dual Rod Caliber (5.5 / 6.0 mm): Versatility across degenerative, traumatic, and deformity indications."
  ],
  160: [
    "Direct Screw-to-Rod Connection: Eliminates bulky offset links, resulting in a low profile that prevents soft-tissue ulceration.",
    "Sub-PSIS Entry Point: Sits 15 mm below the iliac crest, preserving bone stock and mitigating chronic post-op pain.",
    "Smooth Sacroiliac Shank: Prevents thread purchase across the SI joint, safeguarding the articular cartilage.",
    "Cannulated Versatility: Accommodates percutaneous navigated insertion as well as traditional open approaches.",
    "High-Rigidity Pelvic Foundation: Resists massive cantilever bending loads in long-segment spinal reconstructions."
  ],
  14: [
    "Cortical Bone Trajectory (CBT): Engages four dense cortical margins, delivering exceptional purchase in osteoporotic bone.",
    "Hook-Lock Anti-Splay Thread: Converts radial stresses into axial retention, preventing tulip expansion.",
    "Dual-Lead Thread Profile: Cuts 29% less bone volume during driving, speeding insertion and enhancing purchase.",
    "Reduced Midline Exposure: Medial start point requires less lateral paraspinal muscle dissection.",
    "Burr-Free Torx Setscrew: Low tightening torque with clean internal break-off reduces surrounding soft-tissue irritation."
  ],
  164: [
    "Calibrated Side Fenestrations: Directs uniform cement interdigitation into trabecular bone, preventing canal leakage.",
    "Superior Immediate Anchorage: The PMMA-screw-bone composite provides immense resistance against pullout and cyclic loosening.",
    "Three Thread Geometries: Optimized thread profiles maximize initial stability in osteopenic cancellous bone.",
    "Extended-Arm MIS Towers: Supports percutaneous minimally invasive instrumentation with streamlined screw delivery.",
    "Broad Reconstructive Utility: Indicated for severe osteoporosis, pathological fractures, and complex revision salvage."
  ],
  166: [
    "Anatomically Pre-Bent Lordosis: Replicates natural cervical lordosis, eliminating tedious intraoperative plate bending.",
    "Beveled Low-Profile Margins: Protects the esophagus and anterior soft tissue, significantly mitigating dysphagia.",
    "Integrated Anti-Retraction Lock: Secures screws swiftly with tactile locking confirmation, preventing screw back-out.",
    "Expansive Inspection Window: Enables unambiguous fluoroscopic and visual confirmation of graft positioning.",
    "Single & Multi-Level Options: 1- to 4-level plating configurations supporting fixed and variable-angle screws."
  ],
  70: [
    "Biomimetic 3D Porosity (50%-80%): Interconnected pores foster cellular colonization, angiogenesis, and rapid solid fusion.",
    "Bone-Matching Elastic Modulus: Suppresses stress shielding, preventing peripheral bone loss and endplate subsidence.",
    "High Frictional Grip Coefficient: Exceptional primary shear resistance eliminates cage dislodgement risks.",
    "Dedicated Cervical & Thoracolumbar Models: Tailored footprints suited for anterior, oblique, and transforaminal approaches.",
    "Physiological Lordotic Profiles: Restores anatomical intervertebral disc height and sagittal spinal balance."
  ],
  72: [
    "Omnidirectional Mesh Porosity: Fenestrated walls allow bone trabeculae to bridge freely throughout the cage core.",
    "Pre-Calibrated 1-2 mm Increments: Eliminates sharp edges, metal debris, and tedious intraoperative trimming.",
    "Arcuate End Caps (9 Footprints): Distribute axial loads to prevent endplate subsidence and restore anatomical alignment.",
    "Corrugated Insertion Margins: Ensure positive instrument engagement for rapid, controlled cage advancement.",
    "Pure Titanium Biocompatibility: Non-toxic formulation delivers clear fluoroscopic imaging and superior tissue tolerance."
  ],
  169: [
    "Cortical-Matching PEEK Modulus: Ensures balanced load sharing across the interspace, eliminating stress shielding.",
    "Reverse-Serrated Retention Teeth: Enhances friction, resisting postoperative retropulsion into the spinal canal.",
    "Extra-Large Bone Graft Window: Supports expansive endplate contact for rapid through-growth fusion.",
    "Disc Space & Lordosis Preservation: Long-term maintenance of disc height relieves neural foramen stenosis.",
    "Tantalum Radiopaque Markers: Enables precise fluoroscopic visualization of cage seating without imaging artifacts."
  ],
  171: [
    "Patient-Specific PA12 Construction: Tailored from preoperative 3D CT reconstruction for snug anatomical registration.",
    "Millimetric Trajectory Guidance: Exactly dictates osteotomy depth and resection angles, streamlining operative flow.",
    "Unilateral & Bilateral Variants: Types I and II for unilateral bone cuts; Type III for comprehensive bilateral osteotomies.",
    "Neural & Vascular Protection: Shields critical structures, reducing intraoperative bleeding and neurological complications.",
    "Standardized Surgical Execution: Shortens the surgical learning curve in complex sagittal deformity realignments."
  ],
  36: [
    "Pioneering 3D-Printed Anchor: Fabricated via Laser Beam Melting (LBM) using high-purity medical TC4 ELI titanium alloy powder.",
    "Biomimetic Elastic Modulus: Tailored additive matrix matches human bone elasticity, mitigating stress shielding and local bone damage.",
    "Osteoconductive Porous Surface: Optimized micro-rough topography maximizes cell adhesion, tissue ingrowth, and clinical recovery.",
    "Self-Tapping High-Low Double Thread: Delivers superior primary fixation strength without requiring pilot hole drilling.",
    "Independent Suture Eyelet: Prevents suture twisting, knotting, and entanglement during intraoperative tensioning and knot tying."
  ],
  39: [
    "PVD Tantalum Coating: Pioneering surface technology uniting titanium alloy elasticity with tantalum's bio-inductive matrix.",
    "Osteogenic & Antibacterial Activity: Enhances cellular proliferation and alkaline phosphatase activity while reducing postoperative infection risk.",
    "Corrosion Resistance & Barrier: Highly stable inert surface completely prevents trace ion release into surrounding tissue.",
    "Dual Thread Geometries: Offered in single-thread MD(I) and double-thread MD(II) profiles from 3.5 mm to 6.5 mm for versatile bone density matching.",
    "Extensive Joint Compatibility: Indicated for soft tissue reattachment across shoulder, knee, elbow, ankle, and digit procedures."
  ],
  51: [
    "Nitinol Retention Wings: Superelastic nickel-titanium wings expand subcortically to deliver exceptional axial pullout resistance.",
    "Micro Diameters from 1.3 mm: Minimizes cortical disruption, making it an outstanding choice for foot, ankle, and digit ligament repairs.",
    "Threadless Fast Insertion: Directly seated into the pilot hole and deployed, cutting down operative steps and surgical duration.",
    "Bone-Preserving Profile: Diminutive drill hole dimensions preserve local bone stock and foster rapid post-op tissue recovery.",
    "Pre-Loaded UHMWPE Sutures: Configured with one or two ultra-high molecular weight sutures for robust soft-tissue purchase."
  ],
  48: [
    "Bottom Self-Tapping Tip: Enables direct penetration into cortical bone without incision, reducing operative preparation time.",
    "Dual-Zone Thread Design: Proximal bone-plate matching threads combined with distal cortical threads ensure secure anchorage.",
    "Anodized High-Contrast Finish: Provides excellent anti-glare visibility and manipulation clarity under arthroscopic camera illumination.",
    "High-Strength Differentiated Sutures: Multi-color braided UHMWPE sutures facilitate straightforward knot management and tensioning.",
    "Permanent Non-Absorbable Fixation: Delivers long-term structural integrity against physiological cyclic tensile loads."
  ],
  149: [
    "High-Low Dual-Thread Architecture: Dual-pitch profile provides enhanced soft tissue compression and bone pullout resistance.",
    "Self-Tapping Tip without Pre-Drilling: Enables direct, straightforward insertion into cortical bone, preserving operating time.",
    "Independent Dual-Eyelet Design: Keeps sutures isolated in separate channels to prevent knotting, friction, and entanglement.",
    "High-Contrast Bicolor Sutures: White UHMWPE and blue polypropylene strands allow unambiguous identification during knot tying.",
    "Laser-Marked Depth Inserter: Inserter shaft features clear depth indicators for precise, flush seating against the bone cortex."
  ],
  150: [
    "100% All-Suture Textile Architecture: Replaces rigid metal implants, eliminating stress shielding and artifacts on CT/MRI imaging.",
    "Subcortical Bunching Fixation: Active tensioning bunches the braided sleeve into a dense ball for remarkable pullout resistance.",
    "Minimal Bone Stock Disruption: Requires a diminutive pilot hole, conserving bone volume and minimizing cortical damage.",
    "Fix(I) Concealed Deployment Tip: The anchor sleeve is concealed within the inserter tip, preventing premature catching during portal entry.",
    "Pre-Loaded High-Tenacity UHMWPE Sutures: Configured in white, blue, and blue-white combinations for clear strand management."
  ],
  151: [
    "Biocompatible PEEK Matrix: Elastic modulus matching human bone, superior fatigue strength, and complete absence of MRI artifacts.",
    "Hollow Osteoconductive Profile: Delivers robust primary purchase while offering a structural channel for bone ingrowth.",
    "Reduced Foreign Material Volume: Minimizes foreign body burden in the bone bed, dampening postoperative tissue reaction.",
    "High-Strength UHMWPE Sutures: Ensures low-friction tendon passage and uncompromised knot security.",
    "Zero Stress Shielding: Balanced mechanical properties prevent periprosthetic bone resorption."
  ],
  44: [
    "Radiolucent PEEK Construction: Delivers pristine post-op radiographic and MRI visualization without metallic artifact scatter.",
    "MB(II) and MB(III) Configurations: Tailored partial or fully threaded bodies optimizing pullout resistance across bone qualities.",
    "High-Contrast UHMWPE Strands: Pre-installed white and blue-white sutures allow quick knot differentiation under the scope.",
    "Laser Depth Gauge Inserter: Calibrated laser markings on the inserter drive rod ensure controlled, accurate cortical seating.",
    "Complete Size Spectrum: Comprehensive dimensions to accommodate diverse open and arthroscopic reconstructive scenarios."
  ],
  57: [
    "Knotless Technology: Eliminates bulky knot stacks, eliminating subacromial impingement and streamlining procedure steps.",
    "Hollow Cannulated Structure: Promotes cellular infiltration and osteoblast colonization for rapid socket healing.",
    "Optimized for Double-Row Repair: Specifically engineered for lateral-row compression in transosseous-equivalent cuff repairs.",
    "Multi-Strand Compatibility: Supports round sutures, wide tapes, and combinations handling 4 to 8 strands with equal holding power.",
    "PEEK Biocompatibility: Eliminates stress shielding, produces zero MRI artifacts, and guarantees long-term chemical inertness."
  ],
  152: [
    "Knock-In Impaction Technique: Convenient surgical workflow enabling accurate intraoperative tension calibration before locking.",
    "Broad Diameter Range (1.8 mm - 9.0 mm): Complete versatility spanning small-joint ligament reattachment to major joint stabilization.",
    "Low-Profile Knotless Locking: Eliminates bulky knot stacks and mechanical impingement in tight articular spaces.",
    "Inert PEEK Biocompatibility: Eliminates stress shielding, resists chemical breakdown, and triggers zero allergic response.",
    "Artifact-Free MRI Imaging: Allows clear visualization of tendon healing and joint remodeling during postoperative follow-up."
  ],
  43: [
    "Imported High-Strength Stainless Steel: Enduring cutting sharpness ensures clean, efficient soft tissue resection.",
    "Snap-Lock Safety Design: Robust hub coupling effectively prevents intraoperative blade detachment during high-speed rotation.",
    "Vibration-Free Concentricity: Strict runout testing delivers smooth, balanced rotation with minimal handpiece vibration.",
    "Color-Coded Hubs: Instant visual recognition of diameter and tip geometry in the sterile field.",
    "Single-Use Sterility: Eliminates cross-contamination hazards and ensures peak cutting performance in every case."
  ],
  49: [
    "Hardened 30Cr13 Burr Head: Superior wear resistance provides aggressive, controlled bone removal without dulling.",
    "Cylindrical & Spherical Geometries: Versatile tip profiles suited for flat bone resection or tight concavity sculpting.",
    "Universal Compatibility (>90%): Hub connection fits seamlessly with standard commercial arthroscopic handpieces.",
    "Snap-Lock Connection: Firmly secures the burr inside the drive sleeve, eliminating wobbling and high-speed detachment.",
    "Single-Use Sterility: Guarantees peak cutting performance, eradicating cross-contamination and instrument fatigue."
  ],
  46: [
    "Depth-Limiting Sheath: Adjustable stop prevents over-penetration, safeguarding popliteal vessels and nerves.",
    "Minimally Invasive All-Inside Technique: Ultra-small PEEK bars paired with 2-0 suture minimize native meniscus disruption.",
    "360° Single-Handed Firing: Active deployment trigger allows precise timing and tactile feedback during implant release.",
    "Versatile Angular Options: Straight, 12° up-curved, and 12° down-curved profiles access difficult posterior horn tears.",
    "Pre-Tensioned Sliding Knot: Delivers secure, uniform tear margin approximation to optimize vascular healing."
  ],
  45: [
    "Atraumatic PEEK Profile: Rounded thread edges prevent graft fiber laceration during clockwise tunnel advancement.",
    "Clean Postoperative MRI: Produces zero metallic distortion, allowing clear visualization of graft ligamentization.",
    "JM & JQ Sheath Configurations: JQ model includes an expansion sheath distributing radial compression in cancellous bone.",
    "Cannulated Insertion over Guide Wire: Driver handle features laser depth markings for precise tunnel depth monitoring.",
    "Rigid Primary Fixation: High pullout strength supports immediate stability and accelerated knee rehabilitation."
  ],
  41: [
    "Fatigue-Resistant Co-Cr-Mo Alloy: Exceptional yield strength and bending resistance under cyclic physiological loads.",
    "Serrated Non-Slip Teeth: Retentive spikes clamp tissue firmly without compromising regional vascular supply.",
    "Sharp Penetrating Prongs: Facilitates controlled, reproducible cortical bone seating using standard impaction drivers.",
    "Low-Profile Contoured Bridge: Reduces soft-tissue impingement and hardware irritation under the skin.",
    "Gamma Radiation Sterility: Single-use sterile packaging with a 5-year shelf life for immediate intraoperative readiness."
  ],
  42: [
    "High-Strength Cortical Suspension: Broad contact footprint against the outer femoral cortex resists cyclic elongation.",
    "Low-Profile Recessed Grooves: Recesses seat sutures and loops flush, eliminating irritation and sub-fascial prominence.",
    "Integrated Pulling & Flipping Leads: Dedicated leads streamline tunnel passage and tactile confirmation of cortical flipping.",
    "Small-Diameter Tunnel Passage: Highly pliable loop passes effortlessly through narrow bone tunnels without fraying.",
    "Fixed & Adjustable Configurations: Complete spectrum of loop lengths tailored to diverse tunnel depths and graft lengths."
  ],
  56: [
    "Continuous Real-Time Tensioning: Allows progressive graft advancement into the socket after cortical button deployment.",
    "Reliable One-Way Locking: Proprietary self-locking loop structure prevents slippage under high cyclic loads.",
    "Maximized Bone-Graft Interface: Draws the graft fully into the bone tunnel to optimize biological integration.",
    "Atraumatic Low-Profile Button: Rounded edges prevent lateral femoral soft-tissue friction and iliotibial band irritation.",
    "Streamlined Operative Workflow: One size fits all tunnel depths, reducing shelf inventory and simplifying decision-making."
  ],
  40: [
    "High-Strength UHMWPE Yarn: Woven from ultra-high molecular weight polyethylene fiber for permanent, stable tension retention.",
    "Multi-Color Knot Management: Offered in solid blue, pure white, and high-contrast blue-white combinations for unambiguous strand mapping.",
    "Smooth Non-Abrasive Strands: Knot-free uniform surface glides through tissues with low drag and zero fiber shedding.",
    "High-Elasticity Surgical Needles: Premium medical-grade stainless steel needles with sharp puncturing tip and bend resistance.",
    "Non-Absorbable Biostability: Inert biocompatible performance without allergic degradation in reconstructive shoulder and knee surgeries."
  ],
  58: [
    "Fast & Neat Wound Closure: Closes skin incisions in a fraction of the time required by traditional sutures.",
    "Jam-Free Consistent Firing: Precision internal ejector delivers predictable, accurate staple placement every stroke.",
    "Medical Stainless Steel Staples: High elasticity and tissue tolerance eliminate foreign-body dermal reactions.",
    "Minimal Trauma & Thin Scarring: Raised formed staple crown relieves skin tension and reduces postoperative scar marking.",
    "Smooth Skin Extraction: Polished staple surfaces glide out cleanly with standard staple extractors."
  ],
  47: [
    "Transparent Tube with Suture Control: High optical clarity prevents suture entanglement during intra-articular shuttling.",
    "Fully Threaded Body: Ensures exceptional capsular purchase, eliminating inadvertent cannula displacement.",
    "Fluid-Tight Sealing Valves: Prevents irrigation fluid spray and maintains intra-articular pressure during tool exchanges.",
    "Ergonomic Flange Design: Provides comfortable, positive grip for controlled percutaneous insertion.",
    "Comprehensive Dimensional Range: Sized to accommodate all standard arthroscopic portals across knee, shoulder, and hip."
  ],
  52: [
    "Atraumatic Soft Silicone Construction: Dampens tissue shear stress, safeguarding sensitive articular cartilage surfaces.",
    "Type II Eccentric Tip Geometry: Smoothly passes through the capsule and anchors gently to prevent retraction.",
    "5 mm C-Shaped Limiter Pad: Provides reliable tactile control over the effective working depth within the joint.",
    "Dual-Layer Watertight Seal: Effectively eliminates fluid extravasation into surrounding muscle and subcutaneous spaces.",
    "Flexible Channel for Curved Instruments: Pliable lumen readily accommodates angled probes, curved shavers, and specialized tools."
  ],
  66: [
    "Superconducting brushless motor: High cutting efficiency with minimal bone temperature rise and ultra-quiet execution.",
    "360° articulating head in 8 indexed gears: Aligns blade trajectory precisely to complex osteotomies without wrist straining.",
    "Dual-speed electronic switching: Rapid toggling between 12,000 and 10,000 oscillations/min tailored to bone mineral density.",
    "Anti-drop blade locking mechanism: Provides positive, vibration-proof retention of oscillating surgical saw blades.",
    "Intelligent overload & thermal defense: Microprocessor continuously prevents device stalling and overheating under heavy loads.",
    "Scratch-resistant ergonomic chassis: Perfectly balanced center of gravity minimizing hand and wrist fatigue in long surgeries."
  ],
  67: [
    "German high-torque brushless drive: Robust continuous rotational torque without stalling in dense sclerotic bone.",
    "Integrated hollow cannulation: Accommodates seamless coaxial passage of Kirschner wires and guiding pins.",
    "Dual speed regimes (1,200 / 270 rpm): Swift switching between high-speed osteotomy drilling and high-torque reaming.",
    "Forward/reverse toggle & safety lock: Instant direction control with tactile misoperation prevention latch.",
    "Automatic stall recovery: Resumes operation smoothly as soon as excessive mechanical resistance clears.",
    "Quick-change modular chuck: Facilitates rapid, tool-free swaps of drill bits, reamers, and pin drivers."
  ],
  68: [
    "High-capacity 4000 mAh lithium battery: Extended operating endurance across complex procedures without mid-case swaps.",
    "Sternum saw modular conversion: Accommodates sterile protective sternal bow guard for safe cardiothoracic osteotomy.",
    "Superconducting brushless drive: Delivers uncompromising cutting power with negligible heat buildup and whisper-quiet noise.",
    "Dual oscillating speeds (12,000 / 10,000 opm): Tuned cutting rates optimized for both compact cortical and cancellous bone.",
    "Anti-drop blade locking collar: Eliminates blade dislodgement or vibration slippage under heavy shear force.",
    "High-current fast charging station: Substantially curtails turnover and sterilization turnaround time between surgical cases."
  ],
};
