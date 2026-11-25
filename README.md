# Dayana Vallejo · Portafolio

Portafolio personal hecho con React y Vite, con estética retro neón.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:5173.

## Cómo editar el contenido

Todos los textos, proyectos, experiencia y enlaces están en `src/data/portafolio.js`.
Los componentes de `src/components/` solo leen esos datos, así que para actualizar el portafolio normalmente basta con editar ese archivo.

En cada proyecto, `demo` y `codigo` son opcionales: si los dejas vacíos, el botón no aparece.

## Compilar

```bash
npm run build
```

Genera la carpeta `dist/`, lista para publicar (por ejemplo en GitHub Pages, Netlify o Vercel).
