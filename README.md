# Presentaciones Quálitas

Presentación ejecutiva en HTML para reportes trimestrales de Quálitas. El proyecto usa HTML, CSS y JavaScript puro, sin dependencias externas, para poder abrirse localmente con doble clic en `index.html`.

## Estructura

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── logos/
    ├── fondos/
    ├── capturas/
    └── referencias/
```

## Cómo usar

1. Abre `index.html` en el navegador.
2. Navega con los botones inferiores o con el teclado:
   - Flecha derecha, espacio o Page Down: siguiente slide.
   - Flecha izquierda o Page Up: slide anterior.
   - Home: primera slide.
   - End: última slide.
3. Edita el contenido directamente en `index.html`.
4. Ajusta colores, tipografía y espaciados desde las variables de `:root` en `styles.css`.

## Cómo editar la presentación

Cada slide está definido como una sección:

```html
<section class="slide" data-slide-title="Resumen ejecutivo">
  ...
</section>
```

Para cambiar textos, reemplaza los títulos, insights, resultados y recomendaciones dentro de cada sección. Mantén la estructura base de cada slide para conservar una lectura ejecutiva clara:

- Título.
- Insight.
- Evidencia visual.
- Recomendación.

## Cómo agregar capturas

Guarda las imágenes en `assets/capturas/`. Después, reemplaza un placeholder como este:

```html
<figure class="screenshot-placeholder">
  <span>Captura principal</span>
  <figcaption>assets/capturas/evidencia-principal.png</figcaption>
</figure>
```

Por una imagen real:

```html
<figure class="screenshot-placeholder">
  <img src="assets/capturas/evidencia-principal.png" alt="Descripción breve de la evidencia">
  <figcaption>Evidencia principal del trimestre</figcaption>
</figure>
```

Si agregas imágenes reales, puedes complementar el CSS con:

```css
.screenshot-placeholder img {
  display: block;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}
```

## Personalización visual

La paleta inicial está basada en negro, blanco, grises y amarillo institucional. Las variables principales están al inicio de `styles.css`:

```css
:root {
  --color-black: #050505;
  --color-white: #ffffff;
  --color-yellow: #ffd200;
  --color-yellow-dark: #caa100;
}
```

## Slides incluidas

1. Portada.
2. Objetivo del reporte.
3. Resumen ejecutivo.
4. Contexto del trimestre.
5. Principales resultados.
6. Evidencia visual / capturas.
7. Aprendizajes.
8. Oportunidades detectadas.
9. Recomendaciones para el siguiente trimestre.
10. Cierre.

## Recomendaciones de edición

- Usa frases cortas y orientadas a decisión.
- Prioriza capturas reales como evidencia principal.
- Evita saturar una slide con demasiados datos.
- Deja una recomendación clara por cada hallazgo relevante.
- Actualiza periodo, área y responsable en la portada antes de presentar.
