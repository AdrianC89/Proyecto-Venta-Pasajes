import React from 'react';
import './Header.css'; // Importamos el archivo CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* Cambia la imagen del logo cuando lo desees */}
        <img src="https://via.placeholder.com/50" alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
