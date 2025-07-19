# Proyecto Fullstack: Consumo de API Externa y Autenticación

## 🚀 Descripción
Aplicación web fullstack que permite a los usuarios registrarse, iniciar sesión y buscar contenido en una API externa (Spotify, YouTube o Netflix). Incluye historial de búsquedas y una interfaz amigable. El backend está desarrollado en Node.js (Express) y el frontend en React.

---

## 📁 Estructura del Proyecto

```
prueba_castor/
├── backend/      # Servidor Express, lógica de negocio y base de datos
├── frontend/     # Aplicación React, interfaz de usuario
├── context/      # Documentación y contexto del proyecto
```

### Backend
- **Node.js + Express**
- Autenticación JWT
- Contraseñas hasheadas con bcrypt
- Modelos: User, ApiRequestHistory
- Base de datos: PostgreSQL
- Consumo de API externa (Spotify/YouTube/Netflix)

### Frontend
- **React**
- Login y registro de usuario
- Búsqueda y visualización de contenido externo
- Historial de búsquedas
- Buen diseño y experiencia de usuario

---

## 🔐 Autenticación
- Registro y login con email y contraseña
- Contraseñas seguras (bcrypt)
- JWT para autenticación
- Middleware para proteger rutas privadas

---

## 🌐 Funcionalidad de API Externa
- Búsqueda de artistas, canciones, videos, etc.
- Visualización de resultados y detalles
- Reproducción (previews o videos, según API)

---

## 🗄️ Modelos principales
- **User**: id, name, email, password, createdAt, updatedAt
- **ApiRequestHistory**: id, userId, query, type, source, responseSummary, createdAt

---

## 🏁 Cómo ejecutar el proyecto

### 1. Clonar el repositorio
```bash
git clone <url-del-repo>
cd prueba_castor
```

### 2. Instalar dependencias
#### Backend
```bash
cd backend
npm install
```
#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Configurar variables de entorno
- Copiar y editar los archivos `.env.example` en `backend/` y `frontend/` (si existen).

### 4. Inicializar la base de datos
- Asegúrate de tener PostgreSQL corriendo.
- Ejecuta los scripts de migración en `backend/database/` si es necesario.

### 5. Ejecutar el backend
```bash
cd backend
npm start
```

### 6. Ejecutar el frontend
```bash
cd frontend
npm start
```

---

## 🧠 Uso de IA (Cursor)
- Generación de modelos y rutas
- Refactorización de controladores
- Validación de formularios en frontend

