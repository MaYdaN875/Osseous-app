import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "es" | "en";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.products": "Productos",
    "nav.catalog": "Catálogo",
    "nav.about": "Empresa",
    "nav.services": "Servicios",
    "nav.blog": "Blog",
    "nav.specs": "Fichas técnicas",
    "nav.contact": "Contacto",
    "nav.catalog_full": "Catálogo completo (Chunli)",
    
    // Categories/Submenus
    "cat.shoulder": "Prótesis de Hombro",
    "cat.knee": "Reemplazo de Rodilla",
    "cat.hip": "Prótesis de Cadera",
    "cat.surgical": "Instrumental Quirúrgico",
    "categories.title": "Líneas de Productos",
    "categories.subtitle": "Explora nuestras soluciones avanzadas para cirugía ortopédica, diseñadas con tecnología médica de alta precisión.",
    "categories.back_home": "Volver al inicio",
    "categories.view_products": "Ver {count} productos",
    "categories.view_details": "Ver detalles",
    
    // Footer
    "footer.rights": "© 2026 Osseous. Todos los derechos reservados.",
    "footer.contact": "Contáctanos para más información y atención:",
    "footer.about_title": "Sobre Osseous",
    "footer.about_desc": "Distribuidora de implantes, prótesis y equipo médico de alta especialidad para traumatología y ortopedia.",
    "footer.links_title": "Enlaces Rápidos",
    "footer.address_title": "Dirección",
    "footer.address_val": "Ciudad de México, México",
    
    // Product List UI
    "list.search_placeholder": "Buscar en {category}...",
    "list.search_stats": "Mostrando {count} de {total} productos",
    "list.no_results": "Sin resultados",
    "list.no_results_desc": "No encontramos ningún producto que coincida con tu búsqueda: “{query}”.",
    "list.clear_search": "Limpiar búsqueda",
    "list.back_categories": "Volver a Líneas de Productos",
    "list.empty_desc": "Actualmente no tenemos cargada la lista individual de productos en esta sección. Puedes descargar las fichas técnicas en PDF o ponerte en contacto con nosotros para recibir asesoría personalizada.",
    "list.contact_btn": "Contactar Asesor",
    "list.pdf_btn": "Ver Fichas PDF",
    "list.line_not_found": "Línea de productos no encontrada.",
    
    // Product Detail UI
    "detail.back_to": "Volver a {category}",
    "detail.home": "Inicio",
    "detail.empty_info": "Solicita información detallada de este producto con nuestro equipo.",
    "detail.availability": "Consultar disponibilidad",
    "detail.more_products": "Ver más productos",
    
    // Catalog UI
    "catalog.title": "Catálogo de Productos",
    "catalog.subtitle": "Explore la gama completa de productos médicos Chunli y soluciones ortopédicas.",
    "catalog.stats": "{cats} categorías y {prods} productos para cirugía ortopédica y traumatología.",
    "catalog.cat_not_found": "Categoría no encontrada.",
    "catalog.cat_stats": "<b>{count}</b> productos en {category}",
    "catalog.prod_not_found": "Producto no encontrado.",
    "catalog.video_toast": "Reproducción del video técnico del producto (demo).",
    "catalog.quote_toast": "Solicitud enviada. Un especialista Osseous se pondrá en contacto pronto.",
    "catalog.pdf_toast": "Descarga del catálogo PDF iniciada (demo).",
    "catalog.3d_toast": "Visor 3D disponible próximamente en la versión final.",
    "catalog.3d_btn": "Modelo 3D",
    "catalog.compatible": "Componentes Compatibles",
    "catalog.prod_count": "{count} productos",
    "catalog.view_products": "Ver productos",
    "catalog.search_placeholder": "Buscar en el catálogo...",
    "catalog.empty": "No hay productos en esta categoría.",
    "catalog.brand": "Marca",
    "catalog.brand_val": "Chunli Medical",
    "catalog.sku": "SKU",
    "catalog.back": "Volver al Catálogo",
    "catalog.back_cat": "Volver a la Categoría",
    "catalog.quote": "Cotizar Producto",
    "catalog.specs": "Especificaciones Técnicas",
    "catalog.spec_name": "Especificación",
    "catalog.spec_val": "Valor",
    
    // Contact Form UI
    "contact.name": "Nombre completo",
    "contact.email": "Correo electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.success": "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
    "contact.error": "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
    
    // Search Overlay
    "search.placeholder": "Buscar páginas o productos...",
    "search.pages_group": "Páginas",
    "search.catalog_group": "Catálogo",
    "search.products_group": "Productos",
    "search.no_results": "No se encontraron resultados para la búsqueda."
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.catalog": "Catalog",
    "nav.about": "Company",
    "nav.services": "Services",
    "nav.blog": "Blog",
    "nav.specs": "Specs",
    "nav.contact": "Contact",
    "nav.catalog_full": "Complete Catalog (Chunli)",
    
    // Categories/Submenus
    "cat.shoulder": "Shoulder Prosthesis",
    "cat.knee": "Knee Replacement",
    "cat.hip": "Hip Prosthesis",
    "cat.surgical": "Surgical Instruments",
    "categories.title": "Product Lines",
    "categories.subtitle": "Explore our advanced solutions for orthopedic surgery, designed with high-precision medical technology.",
    "categories.back_home": "Back to Home",
    "categories.view_products": "View {count} products",
    "categories.view_details": "View details",
    
    // Footer
    "footer.rights": "© 2026 Osseous. All rights reserved.",
    "footer.contact": "Contact us for more information and support:",
    "footer.about_title": "About Osseous",
    "footer.about_desc": "Distributor of orthopedic and trauma medical devices, providing cutting-edge solutions for surgeons and healthcare providers.",
    "footer.links_title": "Quick Links",
    "footer.address_title": "Address",
    "footer.address_val": "Mexico City, Mexico",
    
    // Product List UI
    "list.search_placeholder": "Search in {category}...",
    "list.search_stats": "Showing {count} of {total} products",
    "list.no_results": "No results",
    "list.no_results_desc": "No products match your search: \"{query}\".",
    "list.clear_search": "Clear search",
    "list.back_categories": "Back to Product Lines",
    "list.empty_desc": "Currently we do not have individual products loaded for this category. You can download the PDF sheets or contact us for personalized support.",
    "list.contact_btn": "Contact Representative",
    "list.pdf_btn": "View PDF Sheets",
    "list.line_not_found": "Product line not found.",
    
    // Product Detail UI
    "detail.back_to": "Back to {category}",
    "detail.home": "Home",
    "detail.empty_info": "Request detailed information for this product from our team.",
    "detail.availability": "Check availability",
    "detail.more_products": "View more products",
    
    // Catalog UI
    "catalog.title": "Product Catalog",
    "catalog.subtitle": "Explore the full range of Chunli medical products and orthopedic solutions.",
    "catalog.stats": "{cats} categories and {prods} products for orthopedic surgery and traumatology.",
    "catalog.cat_not_found": "Category not found.",
    "catalog.cat_stats": "<b>{count}</b> products in {category}",
    "catalog.prod_not_found": "Product not found.",
    "catalog.video_toast": "Technical video playback (demo).",
    "catalog.quote_toast": "Request sent. An Osseous specialist will contact you soon.",
    "catalog.pdf_toast": "PDF catalog download started (demo).",
    "catalog.3d_toast": "3D viewer coming soon in the final version.",
    "catalog.3d_btn": "3D Model",
    "catalog.compatible": "Compatible Components",
    "catalog.prod_count": "{count} products",
    "catalog.view_products": "View products",
    "catalog.search_placeholder": "Search in catalog...",
    "catalog.empty": "No products in this category.",
    "catalog.brand": "Brand",
    "catalog.brand_val": "Chunli Medical",
    "catalog.sku": "SKU",
    "catalog.back": "Back to Catalog",
    "catalog.back_cat": "Back to Category",
    "catalog.quote": "Request Quote",
    "catalog.specs": "Technical Specifications",
    "catalog.spec_name": "Specification",
    "catalog.spec_val": "Value",
    
    // Contact Form UI
    "contact.name": "Full name",
    "contact.email": "Email address",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully! We will contact you soon.",
    "contact.error": "There was an error sending your message. Please try again.",
    
    // Search Overlay
    "search.placeholder": "Search pages or products...",
    "search.pages_group": "Pages",
    "search.catalog_group": "Catalog",
    "search.products_group": "Products",
    "search.no_results": "No results found for your search."
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("osseous_lang");
    if (saved === "es" || saved === "en") return saved;
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "en" ? "en" : "es";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("osseous_lang", newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string, replacements?: Record<string, string | number>): string => {
    let text = translations[lang][key] || translations["es"][key] || key;
    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        text = text.replace(new RegExp(`{${k}}`, "g"), String(v));
      });
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
