// Modelo ApiRequestHistory

/*
- id: string
- userId: string → referencia al modelo `User`
- query: string → lo que el usuario buscó (ej. "Coldplay")
- type: string → tipo de búsqueda (ej. "artist", "track", "video")
- source: string → nombre de la API externa usada (ej. "Spotify")
- responseSummary: object → resumen o parte de la respuesta para mostrar rápido (opcional)
- createdAt: date
*/

const { v4: uuidv4 } = require('uuid');

class ApiRequestHistory {
  constructor({ id = uuidv4(), userId, query, type, source, responseSummary = null, createdAt = new Date() }) {
    this.id = id;
    this.userId = userId;
    this.query = query;
    this.type = type;
    this.source = source;
    this.responseSummary = responseSummary;
    this.createdAt = createdAt;
  }
}

module.exports = ApiRequestHistory; 