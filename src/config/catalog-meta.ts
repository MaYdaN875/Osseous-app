// Textos que le agregué yo a las categorías del catálogo, porque los datos
// originales solo traen nombres e imágenes y quedaba muy pelón.

// La descripción cortita que sale en la tarjeta y el hero de cada categoría
export const CATEGORY_DESC: Record<number, string> = {
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

// La tabla de "Especificaciones Técnicas" de la vista de producto.
// Van por categoría (todos los productos de una categoría comparten specs);
// cada entrada es un par [nombre, valor] que se pinta como renglón de la tabla.
export const CATEGORY_SPECS: Record<number, [string, string][]> = {
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
