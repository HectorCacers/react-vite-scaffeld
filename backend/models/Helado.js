// backend/models/Helado.js
const mongoose = require('mongoose');

const heladoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  },
  sku: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  sirve: {
    type: String,
    required: true,
    enum: ['galleta', 'wafle', 'vaso'],
    lowercase: true
  }
}, {
  timestamps: true
});

// Generar SKU automáticamente si no se proporciona
heladoSchema.pre('save', function(next) {
  if (!this.sku) {
    this.sku = 'HEL-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
  }
  next();
});

const Helado = mongoose.model('Helado', heladoSchema);
module.exports = Helado;