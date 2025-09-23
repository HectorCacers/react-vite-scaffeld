import React from 'react';
import Btn from '../components/btn';

const Main = () => {

  const handleButton1 = () => {
    alert('¡Has clickeado el Botón Azul!');
  };

  const handleButton2 = () => {
    alert('¡Has clickeado el Botón Verde!');
  };

  const handleButton3 = () => {
    alert('¡Has clickeado el Botón Rojo!');
  };

  return (
    <div className="main-container">
      <h1 className="main-title">Página Principal</h1>
      <p className="main-description">
        Bienvenido a la página principal con 3 botones personalizados
      </p>
      
      {/* Componente con 3 botones */}
      <Btn 
        titulo1="Inicio" 
        color1="#007bff"
        titulo2="Productos" 
        color2="#28a745"
        titulo3="Contacto" 
        color3="#dc3545"
        onClick1={handleButton1}
        onClick2={handleButton2}
        onClick3={handleButton3}
      />
    </div>
  );
};

export default Main;