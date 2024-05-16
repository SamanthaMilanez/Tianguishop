"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import GlobalApi from '../_utils/GlobalApi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';




function Header() {
  
  const[categoryList,setCategoryList]=useState([]);    
  useEffect(()=>{
     getCategory_();
 },[])   
    const getCategory_ =()=>{
         GlobalApi.getCategory().then(resp=>{
             console.log(resp.data.data);
             setCategoryList(resp.data.data);
         })
     }

  
  
  
  return (


    <header className="bg-white">
    <div className="mx-auto flex h-16 shadow-sm w-full items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Link href={'/'}> <img id="logo" src="/tianguinew2.png" width="300px" height="60px"/></Link>
  
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
          
            <li>
              <a className="text-gray-500 transition hover:text-[#FF5757]" href="/"> Inicio </a>
            </li>
          
            
            <li>
              <a className="text-gray-500 transition hover:text-[#FF5757]" href="/about"> Sobre Nosotros </a>
            </li>
           


            <li>

            <DropdownMenu>
  <DropdownMenuTrigger className='outline-none'> <a className="text-gray-500 transition hover:text-[#FF5757]" href="/collection">Categorias
              </a></DropdownMenuTrigger>
  <DropdownMenuContent>
   
    <DropdownMenuSeparator />
    {categoryList.map((category,index)=>(
        <Link href={'/products-category/'+category.attributes.CategoryName}>
         <DropdownMenuItem>
            <h2>{category.attributes?.CategoryName}</h2>
         </DropdownMenuItem>
         </Link>
    ))}
  </DropdownMenuContent>
</DropdownMenu>

             
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-[#FF5757]" href="/FAQ"> FAQ </a>
            </li>
  
         
  
        
          </ul>
        </nav>
  
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="block rounded-md bg-[#FF5757] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#F64B4B]"
              href="#"
            >
              Login
            </a>
  
            <a
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#FF5757] transition hover:text-[#F64B4B] sm:block"
              href="#"
            >
              Registro
            </a>
          </div>
  
          <button
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
          >
          
              <DropdownMenu>
  <DropdownMenuTrigger><MenuIcon/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href={'/'}>Inicio</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href={'/about'}>Sobre nosotros</Link></DropdownMenuItem>
    <DropdownMenuItem> <DropdownMenu>
  <DropdownMenuTrigger className='outline-none'> <a href="/collection">Categorias
              </a></DropdownMenuTrigger>
  <DropdownMenuContent>
   
    <DropdownMenuSeparator />
    {categoryList.map((category,index)=>(
        <Link href={'/products-category/'+category.attributes.CategoryName}>
         <DropdownMenuItem>
            <h2>{category.attributes?.CategoryName}</h2>
         </DropdownMenuItem>
         </Link>
    ))}
  </DropdownMenuContent>
</DropdownMenu></DropdownMenuItem>
    <DropdownMenuItem><Link href={'/FAQ'}>FAQ </Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header