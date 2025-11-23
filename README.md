# Proyectos Vue y Laboratorios — Resumen del repositorio

Este repositorio agrupa una colección de proyectos, laboratorios y ejemplos prácticos centrados en Vue.js y tecnologías relacionadas (Vite, Vue CLI, Vuetify, Vuex, Vue Router), además de un ejemplo de backend en Java/Spring Boot. Este `README` ofrece una descripción clara de cada proyecto presente en la raíz y pasos rápidos para ejecutarlos.

## Proyectos y carpetas en la raíz

- `directorio-componentes/` — Catálogo de componentes Vue
  - Propósito: Biblioteca y ejemplos de componentes reutilizables construidos con Vue (proyecto creado con Vue CLI).
  - Contenido clave: `src/` con componentes, `public/`, `package.json`, `README.md`.
  - Ejecutar:

```cmd
cd "directorio-componentes"
npm install
npm run serve
```

- `laboratorio-fundamentos/` — Ejercicios básicos
  - Propósito: Ejercicios y recursos introductorios; incluye ejemplos estáticos y, dentro de esta carpeta, el ejemplo `mangahook-api`.
  - Contenido clave: `index.html` y la subcarpeta `mangahook-api/` (API de ejemplo basada en Node/Express).
  - Ejecutar `mangahook-api` (si tiene `package.json` en `server/`):

```cmd
cd "laboratorio-fundamentos/mangahook-api/server"
npm install
npm run start   # o `node app.js` si no hay script
```

- `laboratorio-v-model/` — Ejercicios con `v-model`
  - Propósito: Pequeños ejercicios numerados para practicar `v-model`, formularios y binding.
  - Contenido clave: subcarpetas como `1-login`, `2-filtros-buscador`, `3-checkboxes-selects`, `4-validacion-modificadores`, `5-componentes-reutilizables`, `6-desafio-credenciales`, `plantilla-base`.
  - Ejecutar: normalmente cada ejercicio incluye `index.html`; abre en el navegador o usa un servidor estático.

- `mi-primer-proyecto/` — Plantilla Vite + Vue
  - Propósito: Proyecto base con Vite para iniciar aplicaciones con Vue 3.
  - Contenido clave: `package.json`, `vite.config.js`, `src/`, `public/`, `README.md` con instrucciones.
  - Ejecutar:

```cmd
cd mi-primer-proyecto
npm install
npm run dev
```

- `training-intro-to-vue/` — Lecciones paso a paso de Vue
  - Propósito: Curso práctico con lecciones independientes para aprender Vue desde cero.
  - Lecciones incluidas (ejemplos):
    - `01-vue-instance`
    - `02-attribute-binding`
    - `03-conditional-rendering`
    - `04-list-rendering`
    - `05-event-handling`
    - `06-class-and-style-binding`
    - `07-computed-properties`
    - `08-components`
    - `09-communicating-events`
    - `10-forms`
    - `11-tabs`
    - `sock-shop` (ejemplo práctico)
  - Ejecutar: muchas lecciones son estáticas (`index.html`) — abre directamente o usa `npx serve`:

```cmd
npx serve "training-intro-to-vue/01-vue-instance"
```

- `training-vue-router/` — Ejemplos con Vue Router
  - Propósito: Proyectos que demuestran enrutado en Vue (creados con Vue CLI o Vite según el caso).
  - Ejecutar:

```cmd
cd training-vue-router
npm install
npm run serve
```

- `training-vuetify/` — Ejemplos con Vuetify
  - Propósito: Ejercicios que muestran cómo usar Vuetify (UI library) en proyectos Vue.
  - Contenido típico: `event-dashboard`.
  - Ejecutar:

```cmd
cd training-vuetify/event-dashboard
npm install
npm run serve
```

- `training-vuex/` — Ejemplos con Vuex (manejo de estado)
  - Propósito: Demostraciones del uso de Vuex para estado global en aplicaciones Vue.
  - Ejecutar:

```cmd
cd training-vuex
npm install
npm run serve
```

- `vuegridpro/` — Proyecto completo (Frontend + Backend)
  - Propósito: Componente/solución escalable tipo Data Grid para manejar grandes volúmenes de datos, con backend en Spring Boot y frontend en Vue.
  - Contenido clave:
    - `backend/` — Servicio Java (Spring Boot) con endpoints paginados y filtros.
    - `frontend/` — Aplicación Vue 2 con `ReusableGrid.vue`.
  - Ejecutar backend (Windows):

```cmd
cd vuegridpro/backend
mvnw.cmd spring-boot:run
```

  - Ejecutar frontend:

```cmd
cd vuegridpro/frontend
npm install
npm run serve
```

## Notas generales y recomendaciones

- Revisa el `README.md` y `package.json` dentro de cada subcarpeta para scripts y dependencias específicas; muchos proyectos creados con Vue CLI incluyen un `README.md` con instrucciones.
- En Windows, ejecuta wrappers Maven con `mvnw.cmd` desde `cmd.exe` o `./mvnw.cmd` desde PowerShell.
- Para proyectos estáticos (ej. ejercicios con `index.html`) puedes abrir el archivo directamente en el navegador o usar `npx serve` / `npx http-server`.

## Contribuciones y organización

- Para añadir nuevos ejercicios o proyectos: crea una carpeta descriptiva, añade un `README.md` con pasos para ejecutar y lista de dependencias.
- Mantén la convención de separar ejercicios estáticos (HTML) y proyectos con `package.json` (Vue CLI / Vite).

