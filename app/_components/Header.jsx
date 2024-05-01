import React from 'react'
import Image from 'next/image';
import Link from "next/link";



function Header() {
  return (
    <header className="bg-white">
    <div className="mx-auto flex h-16 shadow-sm w-full items-center gap-8 px-4 sm:px-6 lg:px-8">
    <img id="logo" src="logoTiangui1.png" width="300px" height="70px"/>
  
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
          
            <li>
              <a className="text-gray-500 transition hover:text-[#f87829]" href="/"> Inicio </a>
            </li>
          
            
            <li>
              <a className="text-gray-500 transition hover:text-[#f87829]" href="/about"> Sobre Nosotros </a>
            </li>
           
            <li>
              <a className="text-gray-500 transition hover:text-[#f87829]" href="/collection"> Categorias</a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-[#f87829]" href="/FAQ"> FAQ </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-[#f87829]" href="#"> Proyectos </a>
            </li>
  
        
          </ul>
        </nav>
  
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="block rounded-md bg-[#ff914d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#f87829]"
              href="#"
            >
              Login
            </a>
  
            <a
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#ff914d] transition hover:text-[#f87829] sm:block"
              href="#"
            >
              Registro
            </a>
          </div>
  
          <button
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header