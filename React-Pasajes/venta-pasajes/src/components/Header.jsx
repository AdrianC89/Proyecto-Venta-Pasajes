import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between w-screen box-border">
      <div className="flex items-center">
        {/* Cambia la imagen del logo cuando lo desees */}
        <img
          src="https://via.placeholder.com/50"
          alt="Logo"
          className="rounded-full h-12 w-12"
        />
      </div>
    </header>
  );
};

export default Header;
