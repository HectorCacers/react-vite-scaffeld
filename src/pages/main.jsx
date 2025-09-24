import React from 'react';
import Btn from '../components/btn';

const Main = ({ onNavigate }) => {

  const handleButton1 = () => {
    alert('¡Bienvenido a Heladería Vanguardia!');
  };

  const handleButton2 = () => {
    // Navegar a la página de helados
    if (onNavigate) {
      onNavigate('helados');
    }
  };

  const handleButton3 = () => {
    alert('📞 Contacto: heladeria@vanguardia.com');
  };

  return (
    <div className="main-container">
      <h1 className="main-title">🍦 Heladería Vanguardia</h1>
      <p className="main-description">
        ¡Bienvenido a la mejor heladería! Gestiona tus helados de manera fácil y rápida.
      </p>
      
      {/* Componente con 3 botones */}
      <Btn 
        titulo1="Bienvenida" 
        color1="#007bff"
        titulo2="Ver Helados" 
        color2="#28a745"
        titulo3="Contacto" 
        color3="#dc3545"
        onClick1={handleButton1}
        onClick2={handleButton2}
        onClick3={handleButton3}
      />

      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        background: '#f8f9fa', 
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h3>🎯 Funciones disponibles:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✅ Crear nuevos helados</li>
          <li>✅ Ver lista de helados</li>
          <li>✅ Generar códigos SKU</li>
          <li>✅ Gestionar precios</li>
          <li>✅ Eliminar helados</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;