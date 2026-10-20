# Propuesta D — Energía Institucional

20 de octubre de 2026.

Cuarta alternativa en `/propuesta-d`, integrada al índice y al comparador A/B/C/D. Mantiene el contenido de B mediante los mismos datos compartidos, sus encabezados y textos, contactos, clientes y detalles de servicios. Conserva Libre Baskerville + Manrope y la paleta de B: `#fafbf9`, `#183e75`, `#bfc8cd`, `#232e38`, con los fondos y tonos secundarios que ya utiliza B.

La composición utiliza una fotografía panorámica, una franja institucional azul, tarjetas de servicios desplegables y una sección de empresa con imagen y texto en columnas. El menú de secciones permanece visible al desplazarse, también en mobile: no requiere abrir un desplegable. Incluye indicador de sección actual, áreas táctiles de al menos 44 px, foco visible y separación entre los destinos de ancla y la cabecera.

## Validación

- Compilación de producción y TypeScript satisfactorios.
- Chequeo HTTP de las cinco rutas, imágenes y contenido compartido satisfactorio; resultado en `http-content.json`.
- Navegador Chromium a 1440, 768, 390 y 320 px: sin desbordamiento horizontal en D; las cuatro opciones del menú visibles y accesibles al desplazarse; destinos de ancla sin quedar detrás de la cabecera; indicador de sección activa comprobado.
- Desplegables operables con Enter, enlace de salto al contenido con foco en `main`, navegación desde el índice a D y comparador con estado actual comprobados.
- Comparación de los textos visibles de B con D, omitiendo únicamente el rótulo de marca y los índices decorativos de clientes. Los datos extensos de servicios proceden del mismo componente y la misma fuente compartida.
- Comparador completo dentro de la pantalla de 320 px en las cuatro propuestas. Sin errores de JavaScript durante estas pruebas.
- Capturas reales: `d-desktop.jpg`, `d-mobile.jpg`, `public/images/preview-d.jpg`. Capturas del índice actualizadas para mostrar las cuatro alternativas.

## Referencia y alcance

Se solicitó Transener como referencia. El proxy de este entorno rechazó el acceso a `https://www.transener.com.ar/` con HTTP 403, por lo que no fue posible observarla ni contrastar visualmente la semejanza. Esta entrega propone una composición institucional con el contenido y la paleta de B; la fidelidad a la referencia queda pendiente de acceso o capturas facilitadas por el usuario.

La revisión de accesibilidad es funcional y visual; no constituye una certificación WCAG. No se publicó ni desplegó el sitio.
