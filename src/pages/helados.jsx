import React, { useState, useEffect } from 'react';
import './helados.css';

const Helados = () => {
  const [helados, setHelados] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    sku: '',
    sirve: 'vaso'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // URL de la API
  const API_URL = 'http://localhost:5000/api/helados';

  // Cargar helados al iniciar
  useEffect(() => {
    fetchHelados();
  }, []);

  // Obtener todos los helados
  const fetchHelados = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setHelados(data);
      } else {
        setError('Error al cargar helados');
      }
    } catch (error) {
      setError('Error de conexión');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Generar SKU automático
  const generarSKU = () => {
    const sku = 'HEL-' + Date.now();
    setFormData(prev => ({ ...prev, sku }));
  };

  // Crear nuevo helado
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const nuevoHelado = await response.json();
        setHelados(prev => [nuevoHelado, ...prev]);
        setFormData({ nombre: '', precio: '', sku: '', sirve: 'vaso' });
        alert('¡Helado creado exitosamente!');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error al crear helado');
      }
    } catch (error) {
      setError('Error de conexión');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Eliminar helado
  const eliminarHelado = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este helado?')) {
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          setHelados(prev => prev.filter(helado => helado._id !== id));
          alert('Helado eliminado correctamente');
        } else {
          setError('Error al eliminar helado');
        }
      } catch (error) {
        setError('Error de conexión');
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="helados-container">
      <h1 className="helados-title">🍦 Heladería Vanguardia</h1>
      
      {error && <div className="error-message">{error}</div>}

      {/* Formulario para crear helado */}
      <div className="form-section">
        <h2>Crear Nuevo Helado</h2>
        <form onSubmit={handleSubmit} className="helado-form">
          <div className="form-group">
            <label>Nombre del Helado:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              placeholder="Ej: Chocolate con chips"
            />
          </div>

          <div className="form-group">
            <label>Precio:</label>
            <input
              type="number"
              name="precio"
              value={formData.precio}
              onChange={handleInputChange}
              required
              min="0"
              step="0.01"
              placeholder="Ej: 15.50"
            />
          </div>

          <div className="form-group">
            <label>SKU (Código de barras):</label>
            <div className="sku-input">
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleInputChange}
                required
                placeholder="Ej: HEL-001"
              />
              <button type="button" onClick={generarSKU} className="btn-generar">
                Generar SKU
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Se sirve en:</label>
            <select
              name="sirve"
              value={formData.sirve}
              onChange={handleInputChange}
              required
            >
              <option value="vaso">Vaso</option>
              <option value="galleta">Galleta</option>
              <option value="wafle">Wafle</option>
            </select>
          </div>

          <button type="submit" disabled={loading} className="btn-submit">
            {loading ? 'Creando...' : 'Crear Helado'}
          </button>
        </form>
      </div>

      {/* Lista de helados */}
      <div className="lista-section">
        <h2>Lista de Helados ({helados.length})</h2>
        
        {loading && <p>Cargando helados...</p>}
        
        <div className="helados-grid">
          {helados.map(helado => (
            <div key={helado._id} className="helado-card">
              <h3>{helado.nombre}</h3>
              <p className="precio">Precio: ${helado.precio}</p>
              <p className="sku">SKU: {helado.sku}</p>
              <p className="sirve">Se sirve en: <span>{helado.sirve}</span></p>
              <button 
                onClick={() => eliminarHelado(helado._id)}
                className="btn-eliminar"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        {helados.length === 0 && !loading && (
          <p className="no-helados">No hay helados registrados</p>
        )}
      </div>
    </div>
  );
};

export default Helados;