// DropdownMenu.jsx
import React, { useState } from 'react';
import { useClient } from 'next/client';

function DropdownMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const client = useClient();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        onClick={toggleMenu}
      >
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {client && menuOpen && (
        <nav className="md:hidden">
          {/* Agrega aquí tus elementos de menú para dispositivos móviles */}
        </nav>
      )}
    </>
  );
}

export default DropdownMenu;
