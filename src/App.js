import React, { useState } from 'react';
import Main from './pages/main';
import Helados from './pages/helados';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  const renderPage = () => {
    switch(currentPage) {
      case 'helados':
        return <Helados />;
      default:
        return <Main onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {/* Barra de navegación simple */}
      <nav style={{ 
        padding: '10px', 
        background: '#f8f9fa', 
        borderBottom: '1px solid #ddd',
        textAlign: 'center'
      }}>
        <button 
          onClick={() => setCurrentPage('main')}
          style={{
            margin: '0 10px',
            padding: '8px 16px',
            backgroundColor: currentPage === 'main' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Inicio
        </button>
        <button 
          onClick={() => setCurrentPage('helados')}
          style={{
            margin: '0 10px',
            padding: '8px 16px',
            backgroundColor: currentPage === 'helados' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          🍦 Helados
        </button>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;