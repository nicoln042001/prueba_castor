// Punto de entrada principal del backend

const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cors = require('cors');
// Configuración de CORS para permitir el despliegue
const corsOptions = {
  origin: [
    '*'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};
app.use(cors(corsOptions));
const spotifyRoutes = require('./routes/spotify');
const historyRoutes = require('./routes/history');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/spotify', spotifyRoutes);
app.use('/api/history', historyRoutes);

// Rutas base (se irán agregando más adelante)
app.get('/', (req, res) => {
  res.send('API Backend funcionando');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en puerto ${PORT}`);
}); 