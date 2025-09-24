const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar a MongoDB local
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/heladeria';

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('🍦 Conectado a MongoDB local');
  console.log('📍 Base de datos: heladeria');
})
.catch((error) => console.error('❌ Error conectando a MongoDB:', error));

// Rutas
app.use('/api/helados', require('./routes/helados'));

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    message: '🍦 API de Heladería Vanguardia funcionando!',
    database: 'heladeria',
    status: 'connected'
  });
});

// Manejo de errores 404
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor de Heladería corriendo en http://localhost:${PORT}`);
  console.log(`🔗 Prueba la API en: http://localhost:${PORT}/api/helados`);
});