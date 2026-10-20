import { services } from "./content";

type ServiceSection = { title: string; items: string[] };
type Equipment = { name: string; description: string; image: string; specs: string[] };
type ServicePage = { id: string; slug: string; title: string; image: string; intro: string; source: string; sections: ServiceSection[]; equipment?: Equipment[] };

// Content summarized from the official source linked on each page.
export const servicePages: ServicePage[] = [
  {
    id: "01", slug: "ensayos-y-mediciones", title: "Ensayos y mediciones", image: "banner-menu1.jpg",
    intro: "Diagnóstico de equipos e instalaciones para conocer su estado y verificar su funcionamiento.",
    source: "https://iconosrl.com.ar/services/",
    sections: [
      { title: "Aislación y máquinas eléctricas", items: ["SFRA para transformadores; análisis de motores en servicio, vibraciones y rendimiento.", "Hi-Pot: continua hasta 80 kV, VLF hasta 80 kV y alterna a 50 Hz hasta 130 kV.", "Tangente delta, descargas parciales, Surge Test y resistencia de aislación.", "Relación de transformación, saturación, excitación, polaridad y resistencia de arrollamientos."] },
      { title: "Protecciones y maniobra", items: ["Inyección secundaria trifásica e inyección primaria para verificar protecciones.", "Pruebas de interruptores, reconectadores y seccionalizadores; medición de resistencia de contactos.", "Ensayos conforme a SRT 900 y al Procedimiento Técnico N.º 4 de CAMMESA."] },
      { title: "Instalaciones y diagnóstico", items: ["Puesta a tierra: resistencia, resistividad del terreno y tensiones de paso y contacto.", "Mediciones de campos eléctricos y magnéticos, termografía y ultrasonido.", "Localización de fallas en cables; pruebas de baterías, UPS, rectificadores y variadores."] },
      { title: "Calidad de energía", items: ["Registro de variables, demanda y curvas de carga en sistemas monofásicos y trifásicos.", "Análisis de armónicos, flicker, formas de onda, transitorios y perturbaciones."] },
    ],
  },
  {
    id: "02", slug: "ingenieria-y-estudios", title: "Ingeniería y estudios", image: "banner-menu2.jpg",
    intro: "Planificación y desarrollo de instalaciones eléctricas, desde la definición conceptual hasta los estudios de conexión.",
    source: "https://iconosrl.com.ar/estudios-electricos/",
    sections: [
      { title: "Planificación y proyectos", items: ["Previsión de demanda, expansión de redes, ubicación de instalaciones y planes de inversión.", "Ingeniería conceptual y básica de estaciones transformadoras, líneas, instalaciones industriales, iluminación y puesta a tierra.", "Planos, memorias, cómputos, presupuestos y pliegos de adquisición y montaje."] },
      { title: "Generación y eficiencia", items: ["Factibilidad eléctrica y ambiental de parques eólicos y solares; ensayos de puesta en marcha.", "Evaluación de pérdidas, autogeneración y selección de variadores para mejorar la eficiencia.", "Estudios de generación distribuida y calidad de potencia."] },
      { title: "Protecciones y selección de equipos", items: ["Regulación, coordinación y modelado digital de protecciones; coordinación de aislación frente a sobretensiones.", "Dimensionamiento técnico-económico de transformadores, motores, generadores y tableros.", "Aplicación de normas y supervisión de ensayos de recepción en fábrica."] },
      { title: "Mercado eléctrico mayorista", items: ["Estudios de etapas I, II y III del PT 1 de CAMMESA para generación, transporte, distribución y grandes usuarios.", "Previsión estacional de demanda, curvas de carga y proyecto de medición SMEC."] },
    ],
  },
  {
    id: "03", slug: "servicios-de-capacitacion", title: "Servicios de capacitación", image: "banner-menu3.jpg",
    intro: "Formación técnica en seguridad, operación y protección de instalaciones eléctricas.",
    source: "https://iconosrl.com.ar/cursos-de-capacitacion/",
    sections: [
      { title: "Seguridad eléctrica", items: ["Capacitación sobre el marco normativo argentino y las referencias NFPA, IEC e IEEE."] },
      { title: "Formación de operadores", items: ["Capacitación de operadores según el Procedimiento Técnico N.º 15 de CAMMESA.", "Operación segura de instalaciones de alta, media y baja tensión."] },
      { title: "Protección y confiabilidad", items: ["Cursos sobre protecciones eléctricas.", "Formación en confiabilidad eléctrica."] },
    ],
  },
  {
    id: "04", slug: "nuestro-equipamiento", title: "Nuestro equipamiento", image: "banner-menu4.jpg",
    intro: "Instrumentación para ensayos y diagnóstico eléctrico. Conocé los primeros cinco equipos de nuestro catálogo.",
    source: "https://iconosrl.com.ar/equipamento/", sections: [],
    equipment: [
      { name: "Sansion SXVLF-80/0.5", description: "Ensayos de cables, transformadores, motores y otros equipos eléctricos.", image: "https://i2.wp.com/iconosrl.com.ar/wp-content/uploads/2020/09/Sansion_.jpg?w=400&ssl=1", specs: ["Tensión máxima: 80 kV.", "Frecuencias: 0,1 / 0,05 / 0,02 Hz.", "Carga: 0,5 / 1,0 / 2,5 μF, respectivamente."] },
      { name: "Descargador de baterías Amperis", description: "Analizador automático de eficiencia de baterías industriales.", image: "https://i2.wp.com/iconosrl.com.ar/wp-content/uploads/2020/09/Descargador_.jpg?w=400&ssl=1", specs: ["Protección de polaridad y antiarco.", "Autocomprobación al encendido y registrador integrado."] },
      { name: "Fluke 80T-IR", description: "Medición infrarroja de temperatura sin contacto.", image: "https://i0.wp.com/iconosrl.com.ar/wp-content/uploads/2020/09/Medidor-infrarrojo.jpg?w=400&ssl=1", specs: ["Compatible con multímetros de 10 MΩ de entrada y medición de mV CC."] },
      // The source repeats the previous heading; its description identifies a low-resistance meter, without a reliable model.
      { name: "Medidor de bajas resistencias", description: "Medición de contactos en interruptores, barras, transformadores y motores.", image: "https://i1.wp.com/iconosrl.com.ar/wp-content/uploads/2020/09/Medidor-infrarrojo-de-temperatura.jpg?w=400&ssl=1", specs: ["Corrientes de prueba: 1 mA a 200 A.", "Resolución: 0,1 μΩ."] },
      { name: "Keysight U1733C", description: "Instrumento portátil para medición de capacidad e inductancia.", image: "https://i0.wp.com/iconosrl.com.ar/wp-content/uploads/2020/09/Keysight_.jpg?w=400&ssl=1", specs: ["20.000 cuentas; precisión de 0,2 %.", "Frecuencias: 100 Hz, 120 Hz, 1 kHz, 10 kHz y 100 kHz."] },
    ],
  },
  {
    id: "05", slug: "otros-servicios", title: "Otros servicios", image: "banner-menu5jpg.webp",
    intro: "Mantenimiento, asistencia en selección de equipos y estudios ambientales para instalaciones y proyectos energéticos.",
    source: "https://iconosrl.com.ar/otros-servicios/",
    sections: [
      { title: "Mantenimiento electromecánico", items: ["Intervenciones preventivas, predictivas y correctivas.", "Trabajos en electrónica industrial, máquinas, equipos e instalaciones eléctricas de potencia."] },
      { title: "Materiales y equipos", items: ["Asistencia para la selección y adquisición de materiales y equipamiento."] },
      { title: "Impacto ambiental de parques eólicos", items: ["Evaluación de ruido, sombras e impacto visual de aerogeneradores.", "Estudios de interferencias sobre enlaces de comunicación.", "Cálculo de ahorro de emisiones y distancias de seguridad para la localización de aerogeneradores.", "Diseño de planes de gestión ambiental para la construcción y operación de parques eólicos."] },
    ],
  },
];

export function serviceHref(slug: string) { return "/propuesta-d/servicios/" + slug; }
export const serviceCards = servicePages.map(page => ({ ...page, short: services.find(item => item.id === page.id)!.short }));
