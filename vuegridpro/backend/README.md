# Backend - GridDataService

Descripción
-
Este backend es un servicio Spring Boot que expone un endpoint REST para suministrar datos paginados que alimentan el componente frontend `ReusableGrid`.

Contenido
-
- **Ejecutar y desarrollar**: comandos para arrancar la aplicación localmente.
- **API**: contrato del endpoint `/api/data` (parámetros y formato de respuesta).
- **Configuración útil**: CORS, compilación con `-parameters` y notas sobre generación de reportes.

Ejecutar localmente
-
Usando el wrapper de Maven incluido (Windows):

```cmd
cd "c:\Users\andra\Desktop\Proyectos\Vue js\vuegridpro\backend"
.\mvnw.cmd -DskipTests spring-boot:run
```

Comandos útiles
-
- Compilar: `mvnw.cmd -DskipTests package`
- Ejecutar tests: `mvnw.cmd test`

Endpoint principal
-
GET `/api/data`

Parámetros query esperados:
- `page` (int) — página 1-indexada. Ej: `page=1`
- `pageSize` (int) — tamaño de página. Ej: `pageSize=10`
- `sortKey` (string) — clave de ordenamiento, ej. `price`
- `sortDir` (string) — `asc` o `desc`
- `searchQuery` (string) — búsqueda por texto
- `categoryFilter` (string) — filtro por categoría
- `reportMode` (boolean) — si es `true` el endpoint devuelve todos los registros que coinciden con los filtros (modo reporte)

Formato de respuesta JSON:

```json
{
  "data": [ /* array de objetos Item */ ],
  "page": 1,
  "pageSize": 10,
  "totalElements": 100,
  "totalPages": 10
}
```

Estructura del objeto `Item` (ejemplo):

```json
{
  "id": "uuid",
  "name": "Producto 1",
  "category": "Electrónica",
  "price": 12.5,
  "isActive": true
}
```

Notas y recomendaciones
-
- Si el frontend y el backend están en dominios/puertos distintos, asegúrate de que los orígenes permitidos estén configurados en `GridDataServiceApplication` o habilita CORS adecuadamente.
- Para permitir que Spring y otras herramientas obtengan nombres de parámetros por reflexión (útil para frameworks), puedes habilitar el flag `-parameters` en el compilador del `pom.xml` (opcional). Puedo aplicarlo si lo deseas.
- Para generación de reportes masivos, es preferible que el backend ofrezca un endpoint de exportación que genere y devuelva el CSV desde el servidor.

Contacto
-
- Proporciona ejemplos de peticiones y respuestas si necesitas que adapte la API a requisitos específicos.
