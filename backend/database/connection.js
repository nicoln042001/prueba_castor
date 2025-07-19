// Conexión a PostgreSQL
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Puedes agregar más opciones aquí si es necesario
});

module.exports = pool; 