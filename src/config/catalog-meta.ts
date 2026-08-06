// Textos que le agregué yo a las categorías del catálogo, porque los datos
// originales solo traen nombres e imágenes y quedaba muy pelón.

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
