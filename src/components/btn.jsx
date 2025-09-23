import React from 'react';
import './btn.css';

const Btn = ({ titulo1, color1, titulo2, color2, titulo3, color3, onClick1, onClick2, onClick3 }) => {
  return (
    <div className="btn-group">
      <button 
        className="btn-custom"
        style={{ backgroundColor: color1 }}
        onClick={onClick1}
      >
        {titulo1}
      </button>
      
      <button 
        className="btn-custom"
        style={{ backgroundColor: color2 }}
        onClick={onClick2}
      >
        {titulo2}
      </button>
      
      <button 
        className="btn-custom"
        style={{ backgroundColor: color3 }}
        onClick={onClick3}
      >
        {titulo3}
      </button>
    </div>
  );
};

// Props por defecto
Btn.defaultProps = {
  titulo1: 'Botón 1',
  color1: '#007bff',
  titulo2: 'Botón 2',
  color2: '#28a745',
  titulo3: 'Botón 3',
  color3: '#dc3545',
  onClick1: () => console.log('Botón 1 clickeado'),
  onClick2: () => console.log('Botón 2 clickeado'),
  onClick3: () => console.log('Botón 3 clickeado')
};

export default Btn;