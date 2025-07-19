const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const pool = require('../database/connection');

// Ruta protegida: obtener datos del usuario autenticado
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, email, createdAt FROM "User" WHERE id = $1', [req.user.id]);
    const user = result.rows[0];
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado.' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuario', error });
  }
});

module.exports = router; 