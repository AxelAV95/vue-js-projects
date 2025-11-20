# Proyectos Vue y laboratorios — Resumen del repositorio

Este repositorio agrupa varios proyectos y laboratorios enfocados en Vue.js, ejercicios prácticos y ejemplos frontend/backend. El objetivo de este `README` es dar una vista rápida y práctica de qué hay en la raíz y cómo arrancar cada proyecto o laboratorio.

**Estructura en la raíz**
- **`directorio-componentes/`**: Proyecto Vue que actúa como catálogo de componentes reutilizables. Incluye ejemplos de componentes, configuración de Vue CLI y un `README.md` con pasos para ejecutar.
- **`laboratorio-fundamentos/`**: Colección de ejercicios y prácticas básicas (cada ejercicio suele tener su propio `index.html`).
- **`laboratorio-v-model/`**: Ejercicios numerados centrados en `v-model` y manejo de formularios en Vue. Cada subcarpeta contiene su propio `index.html` y ejemplo autocontenidos.
- **`mi-primer-proyecto/`**: Proyecto Vue (plantilla con Vite). Contiene `package.json`, `vite.config.js`, `src/` y `public/`. Es una base para empezar proyectos más estructurados.
- **`training-intro-to-vue/`**: Carpeta con lecciones estructuradas de introducción a Vue (por ejemplo `01-vue-instance`, `02-attribute-binding`, ..., `11-tabs`, etc.). Ideal para repasar conceptos básicos paso a paso.
- **`training-vuetify/`**: Ejercicios y ejemplos centrados en Vuetify (UI library). Actualmente contiene un ejemplo `event-dashboard`.
- **`vuegridpro/`**: Proyecto dividido en backend y frontend:
  - `vuegridpro/backend/`: Servicio Java/Spring Boot (con Maven y `mvnw` wrappers).
  - `vuegridpro/frontend/`: Aplicación frontend en Vue (tiene `package.json` y configuración típica de Vue).

**Archivos y carpetas internas**
- Revisa dentro de cada carpeta por `README.md` específicos (si existen) y por ficheros de configuración como `package.json`, `pom.xml` o `vite.config.js`.

**Cómo ejecutar los proyectos (resumen rápido)**
- `directorio-componentes` (Vue CLI):
  - `cd directorio-componentes`
  - `npm install`
  - `npm run serve` (o `npm run dev` si está disponible)

- `mi-primer-proyecto` (Vite + Vue):
  - `cd mi-primer-proyecto`
  - `npm install`
  - `npm run dev`

- `training-intro-to-vue` (lecciones):
  - Cada subcarpeta es una lección o mini-proyecto. En muchos casos basta con abrir el `index.html` en el navegador o servir la lección con un servidor estático:

```
npx serve <ruta-a-la-leccion>
```

  - Para lecciones que son proyectos Vue, entra en la subcarpeta y sigue los pasos habituales (`npm install` / `npm run serve`).

- `training-vuetify/event-dashboard` (Vuetify example):
  - `cd training-vuetify/event-dashboard`
  - `npm install`
  - `npm run serve`

- `vuegridpro/backend` (Java / Maven — Windows):
  - `cd vuegridpro/backend`
  - Ejecutar con wrapper (Windows): `mvnw.cmd spring-boot:run` o con PowerShell `./mvnw.cmd spring-boot:run`
  - O con Maven instalado: `mvn spring-boot:run`

- `vuegridpro/frontend` (Vue):
  - `cd vuegridpro/frontend`
  - `npm install`
  - `npm run serve` o `npm run dev` (según el `package.json`)

**Notas prácticas**
- En Windows, ejecuta el wrapper Maven con `mvnw.cmd` desde `cmd.exe` o `./mvnw.cmd` desde PowerShell.
- Si un proyecto no tiene scripts en `package.json`, puedes ejecutar el archivo principal con `node <archivo>` (por ejemplo `node app.js`) o inspeccionar el `package.json` para ver los scripts disponibles.
- Revisa los `README.md` locales dentro de cada subcarpeta para instrucciones específicas o variables de entorno necesarias.

**Contribuciones**
- Para añadir un nuevo ejercicio, crea una carpeta clara y autocontenida (por ejemplo `7-nombre-del-ejercicio/`) y añade un `README.md` con instrucciones si es necesario.

---
Este `README.md` ofrece una descripción general; abre las carpetas indicadas para ver instrucciones y archivos específicos de cada proyecto.
