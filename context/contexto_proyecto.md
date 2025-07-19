# CONTEXTO DEL PROYECTO FULLSTACK

## Objetivo
Aplicación web fullstack con autenticación, consumo de API externa (Spotify/YouTube/Netflix) y una interfaz amigable. Stack: Node.js (Express) en backend, React en frontend. Uso de IA (Cursor) para acelerar el desarrollo.

---

## 📁 Arquitectura del Proyecto

### Backend (Node.js + Express)
- src/
  - controllers/
  - models/
  - routes/
  - middlewares/
  - services/
  - config/
  - database/
  - utils/

### Frontend (React)
- src/
  - components/
  - pages/
  - services/
  - hooks/
  - utils/
  - contexts/
  - routes/

---

## 🔐 Autenticación
- Registro y login con email y contraseña.
- Contraseñas hasheadas con bcrypt.
- Tokens JWT para autenticación.
- Middleware de autenticación para proteger rutas privadas.

---

## 📄 Modelos (Base de datos PostgreSQL)

### User
- id: string (UUID o Mongo ID)
- name: string
- email: string (único)
- password: string (hasheado)
- createdAt: date
- updatedAt: date

### ApiRequestHistory
- id: string
- userId: string → referencia al modelo `User`
- query: string → lo que el usuario buscó (ej. "Coldplay")
- type: string → tipo de búsqueda (ej. "artist", "track", "video")
- source: string → nombre de la API externa usada (ej. "Spotify", "YouTube")
- responseSummary: object → resumen o parte de la respuesta para mostrar rápido (opcional)
- createdAt: date

---

## 🌐 API externa
- [Spotify / YouTube / Netflix] (elegir una)
- Funcionalidad esperada:
  - Búsqueda de contenido (videos, artistas, canciones)
  - Mostrar resultados con detalles
  - Reproducción (en el caso de YouTube o previews de Spotify)

---

## 🖥️ Funcionalidades clave del frontend
- Login/registro de usuario
- Búsqueda de contenido externo
- Listado y detalles del contenido
- Historial de búsquedas realizadas
- Buen diseño y experiencia de usuario

---

## 🧠 Uso de IA (Cursor)
- Generación de modelos y rutas.
- Refactorización de controladores.
- Validación de formularios en frontend.
- Explicación de errores en tiempo de ejecución.
