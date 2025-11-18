# Proyectos Vue y laboratorios — Resumen del repositorio

Este repositorio agrupa varios proyectos y laboratorios enfocados en Vue.js, ejercicios prácticos y un par de ejemplos de backend/frontend. El objetivo de este `README` es dar una vista rápida y práctica de qué hay en la raíz y cómo arrancar cada proyecto o laboratorio.

**Estructura en la raíz**
- **`laboratorio-fundamentos/`**: Carpeta con colecciones de ejercicios y prácticas básicas (cada ejercicio suele tener su propio `index.html`). Puede incluir sub-proyectos o ejemplos adicionales.
- **`laboratorio-v-model/`**: Ejercicios numerados centrados en `v-model` y manejo de formularios en Vue. Cada subcarpeta contiene su propio `index.html` y ejemplo auto-contenido.
- **`mi-primer-proyecto/`**: Proyecto Vue (plantilla con Vite). Contiene `package.json`, `vite.config.js`, `src/` y `public/`. Es el punto de partida para proyectos más estructurados.
- **`vuegridpro/`**: Proyecto dividido en backend y frontend:
  - `vuegridpro/backend/`: Servicio Java/Spring Boot (con Maven y `mvnw` wrappers).
  - `vuegridpro/frontend/`: Aplicación frontend en Vue (tiene `package.json` y configuración típica de Vue).

**Archivos y carpetas internas**
- Revisa dentro de cada carpeta por `README.md` específicos (si existen) y por ficheros de configuración como `package.json`, `pom.xml` o `vite.config.js`.

**Cómo ejecutar los proyectos (resumen rápido)**
- `mi-primer-proyecto` (Vite + Vue):
  - `cd mi-primer-proyecto`
  - `npm install`
  - `npm run dev`  (levanta el servidor de desarrollo)

- `laboratorio-*` (ejercicios estáticos):
  - Muchos son ejemplos con `index.html`. Basta abrir el archivo en un navegador o servir la carpeta con un servidor estático (por ejemplo `npx serve` o `npx http-server`).

- `vuegridpro/backend` (Java / Maven — Windows):
  - `cd vuegridpro/backend`
  - Ejecutar con wrapper: `./mvnw.cmd spring-boot:run` (desde `cmd.exe` o PowerShell)
  - O con Maven: `mvn spring-boot:run` si tienes Maven instalado globalmente.

- `vuegridpro/frontend` (Vue):
  - `cd vuegridpro/frontend`
  - `npm install`
  - `npm run serve` o `npm run dev` (dependiendo del `package.json`)

**Notas prácticas**
- En Windows, ejecuta el wrapper Maven con `.
  mvnw.cmd` desde PowerShell o `mvnw.cmd` desde `cmd.exe`.
- Si un proyecto no tiene scripts en `package.json`, puedes ejecutar el archivo principal con `node <archivo>` (por ejemplo `node app.js`) o inspeccionar el `package.json` para ver los scripts disponibles.
- Revisa los `README.md` locales dentro de cada subcarpeta para instrucciones específicas o variables de entorno necesarias.

**Contribuciones**
- Para añadir un nuevo ejercicio, crea una carpeta clara y autocontenida (por ejemplo `7-nombre-del-ejercicio/`) y añade un `README.md` con instrucciones si es necesario.

---
Este `README.md` ofrece una descripción general; abre las carpetas indicadas para ver instrucciones y archivos específicos de cada proyecto.
