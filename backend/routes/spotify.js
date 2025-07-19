const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { searchSpotify } = require('../services/spotifyService');
const pool = require('../database/connection');

// Ruta protegida para buscar en Spotify
router.get('/search', authMiddleware, async (req, res) => {
  const { q, type } = req.query;
  if (!q || !type) {
    return res.status(400).json({ message: 'Parámetros q y type son obligatorios.' });
  }
  try {
    const data = await searchSpotify(q, type);
    // Guardar historial de búsqueda
    await pool.query(
      'INSERT INTO "ApiRequestHistory" (userId, query, type, source, responseSummary) VALUES ($1, $2, $3, $4, $5)',
      [req.user.id, q, type, 'Spotify', JSON.stringify(data)]
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar en Spotify', error: error.response?.data || error.message });
  }
});

module.exports = router; 