# Auditoría final — ICONO SRL

Fecha: 17 de octubre de 2026.

## Resultado

Las cuatro rutas están implementadas. Se revisaron las tres propuestas renderizadas en navegador en desktop y mobile, y se guardaron capturas completas en esta carpeta. No se observaron defectos bloqueantes en las vistas revisadas.

## Guías aplicadas

- Dirección artística: frontend-skill publicada por OpenAI en https://developers.openai.com/blog/designing-delightful-frontends-with-gpt-5-4.
- Auditoría: web-design-guidelines y las reglas de https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md.

## Comprobaciones

- Compilación de producción y verificación TypeScript satisfactorias.
- Las cuatro rutas responden HTTP 200. Resultado automatizado en `http-content.json`.
- Revisión visual de las tres homepages a 1440 px y 390 px; controles adicionales de adaptación a 320 px y 768 px.
- Sin desbordamiento horizontal detectado en los tamaños revisados.
- Un título H1 por ruta; imágenes con texto alternativo y dimensiones; enlaces internos con destino existente y controles con nombre accesible.
- Navegación entre propuestas, enlaces de sección, menú mobile, cierre con Escape y desplegables de servicios comprobados.
- Estados de foco, enlace para saltar al contenido y preferencia de movimiento reducido contemplados.
- Corrección del desplazamiento al cambiar de propuesta y del aviso de Next.js sobre desplazamiento suave.
- Contenido fundamental compartido y contrastado con el sitio original. Fotografías y logotipos originales de ICONO; no se agregaron clientes, certificaciones, proyectos ni cifras inventadas.

## Alcance

Revisión manual de diseño y accesibilidad, junto con controles DOM y de contenido; no constituye una certificación formal WCAG. La entrega funciona localmente. Los contactos utilizan enlaces de correo y teléfono reales; no hay un formulario que simule envíos.

## Evidencia

- `a-desktop.jpg`, `b-desktop.jpg`, `c-desktop.jpg`.
- `a-mobile.jpg`, `b-mobile.jpg`, `c-mobile.jpg`.
- `index-desktop.jpg`, `index-mobile.jpg`.
