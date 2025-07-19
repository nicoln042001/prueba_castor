const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
require('dotenv').config();

const sql = fs.readFileSync(path.join(__dirname, 'init.sql')).toString();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function migrate() {
  try {
    await client.connect();
    await client.query(sql);
    console.log('Migración completada: tablas creadas correctamente.');
  } catch (err) {
    console.error('Error ejecutando migración:', err);
  } finally {
    await client.end();
  }
}

migrate(); 