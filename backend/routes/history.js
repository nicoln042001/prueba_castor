const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const pool = require('../database/connection');

// Obtener historial de búsquedas del usuario autenticado
router.get('/', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, query, type, source, responseSummary, createdAt FROM "ApiRequestHistory" WHERE userId = $1 ORDER BY createdAt DESC',
      [req.user.id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener historial', error });
  }
});

module.exports = router; 