# 📚 VueGridPro — Tabla Grid escalable para grandes volúmenes de datos

VueGridPro es un componente reutilizable creado en **Vue 2** que funciona como una tabla (Data Grid) lista para manejar **miles de registros** sin que el navegador se bloquee.
La idea es simple: en vez de cargar 10,000 elementos como si metieras todo tu clóset en una mochila, este componente deja que el **servidor** cargue solo lo necesario, como si pidieras prendas específicas cuando las necesitas.

---

## 🌟 1. Introducción

Este proyecto nace para resolver un problema común:

> **Los navegadores no están hechos para manejar listas gigantes en memoria.**

Por eso, VueGridPro delega el trabajo pesado al backend (Spring Boot):

* Filtrar
* Ordenar
* Buscar
* Contar
* Y generar reportes masivos

### ✔ Funciones clave logradas

| Característica   | Implementación                                       |
| ---------------- | ---------------------------------------------------- |
| Reutilización    | Columnas y URLs por props                            |
| Escalabilidad    | Paginación, filtros y ordenamiento desde el servidor |
| Selección Masiva | “Selección por Regla”                                |
| Reportes         | Exportación CSV sin cargar miles de filas            |
| Buen UX/UI       | Alineación, iconografía, formato                     |

---

## ⚙ 2. Tecnologías Utilizadas

### Frontend

* **Vue.js 2**
* **Axios**
* CSS estilo BEM

### Backend

* **Spring Boot 3.x**
* **Java 21+**

---

## 🧠 3. Arquitectura de Escalabilidad

La clave de toda la solución es la técnica de **“Selección por Regla”**, que evita saturar el navegador con datos innecesarios.

### A. Paginación en el servidor

En vez de pedir *toda* la caja de productos, Vue pide solo “del 21 al 30”.

* Vue envía: `page=3`, `pageSize=10`
* Backend devuelve: solo esos 10 registros

### B. Selección por Regla (modo inteligente)

Imagina que quieres seleccionar *todos los productos*, pero solo estás viendo 10 en pantalla.

* Si seleccionas uno por uno → selección manual
* Si pulsas “Seleccionar TODOS” → modo global

En modo global, Vue **no carga los miles de registros**.
En cambio, guarda una simple regla:

> “Todo lo que coincida con los filtros actuales está seleccionado”.

### Generación de reporte masivo

Cuando el usuario pide un CSV:

1. Vue envía un flag: `reportMode=true`.
2. Backend ignora la paginación y envía *solo los datos filtrados*.
3. Vue genera el CSV sin mostrarlos en pantalla.

Resultado: un reporte de 50,000 filas pesa lo mismo para el navegador que uno de 10.

---

## ✨ 4. Características del Frontend

### Interfaz de Usuario (UX/UI)

* Alineación automática (ej. precios a la derecha)
* Iconos para estados (ej. ✔ activo / ❌ inactivo)
* Indicadores claros: “Mostrando 1-10 de 100”

### Funcionalidad

* Ordenamiento por columnas (desde backend)
* Búsqueda global
* Filtros por categoría mediante dropdown
* Exportación CSV en modo manual o masivo

---

## 🚀 5. Instalación y Ejecución

### 5.1 Backend (Spring Boot)

Asegúrate de incluir:

* `Item.java`
* `PagedResponse.java`
* `ItemController.java`
* `GridDataServiceApplication.java` (CORS + parámetros)

Dependencias:

* Spring Web
* Lombok
* Compilador con `-parameters`

Ejecuta el servidor:

```
http://localhost:8080
```

---

### 5.2 Frontend (Vue.js 2)

Instala Axios:

```bash
npm install axios
```

Archivos necesarios:

* `App.vue`
* `ReusableGrid.vue`

Ejecuta la app:

```bash
npm run serve
```

La tabla se cargará automáticamente con datos mock del backend.

---

## 📦 Estructura del Proyecto

* **Backend**: expone endpoints paginados + filtros + reportes
* **Frontend**: recibe props de configuración y renderiza dinámicamente
* **Comunicación**: Axios maneja las solicitudes de página, filtros y reportes

---

## 🏁 Conclusión

VueGridPro es una solución adecuada cuando necesitas:

* Mostrar miles de registros sin colapsar el navegador
* Mantener una interfaz rápida
* Aplicar filtros, búsqueda y ordenamiento desde el backend
* Exportar CSV enormes sin consumir memoria del cliente

