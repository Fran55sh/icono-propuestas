# ICONO SRL · Cuatro propuestas de homepage

Aplicación Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS 4. Las cuatro composiciones se implementan en páginas independientes; contenido factual y controles accesibles compartidos.

## Ejecutar

```powershell
npm ci
npm run dev
```

Abrir http://127.0.0.1:3100. Rutas: `/`, `/propuesta-a`, `/propuesta-b`, `/propuesta-c`, `/propuesta-d`.

```powershell
npm run build
npm start
```

## Verificar

`npm run typecheck` verifica TypeScript. Con el servidor activo, `npm run qa` verifica las cinco respuestas HTTP, imágenes y paridad del contenido principal. La revisión visual en navegador y las evidencias están en `qa/`. No reemplazar la revisión visual por el chequeo HTTP.

## Sistemas visuales

- A: Oswald + Manrope, azul noche, fotografía panorámica, composición de gran escala, servicios con imagen fija en desktop.
- B: Libre Baskerville + Manrope, blanco y azul institucional, filas editoriales y fotografía documental.
- C: Space Grotesk + Manrope, hero oscuro, secciones claras asimétricas y cierre azul.
- D: Libre Baskerville + Manrope, mismos textos y paleta de B, fotografía panorámica, franja azul y composición institucional. Cabecera fija con las cuatro secciones visibles en mobile y desktop, sección activa y destinos que respetan la altura del menú.

Fuentes alojadas localmente vía Fontsource. Fotografías y logos del sitio original, guardados en `public/images`. Previews del índice capturadas desde las páginas reales.

## Contenido y alcance

Relevamiento y dirección artística: `research/DIRECCION-ARTISTICA.md`. El directorio research incluye las páginas fuente consultadas. Los seis clientes seleccionados están presentes en el listado público de ICONO. La antigüedad conserva la declaración publicada «más de 26 años»; no se calculó una fecha de fundación. Las referencias normativas no se presentan como certificaciones.

Contacto por correo, teléfono y ubicación reales. No hay formulario de envío, backend comercial, analítica ni publicación del sitio empresarial. Las páginas están marcadas `noindex` porque son propuestas para revisión.

La barra inferior permite comparar propuestas. Menú mobile accesible, cierre con Escape, enlaces internos, detalles de servicios nativos de HTML, foco visible y movimiento reducido. El cambio de propuesta vuelve al inicio.
