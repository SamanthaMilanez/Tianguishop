"use client"
import { useState, useEffect } from 'react';
import React from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import { LayoutGrid, Search } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from 'next/link';


function Dropdownmenu() {

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
    
    <div class="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 flex gap-8">
       
        <DropdownMenu>
  <DropdownMenuTrigger className='outline-none'><h2 className='flex gap-5 items-center  rounded-full p-2 px-10 mt-10 bg-[#FF5757] text-white font-medium'>
        <LayoutGrid className='h-5 w-5'/>Categorías</h2></DropdownMenuTrigger>
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

        <div className='flex gap-5 items-center border rounded-full p-2 px-5 mt-10'>
            <Search/>
            <input type="text" placeholder="Buscar producto" className='outline-none'/>
        </div>
       
    </div>
 
  )
}

export default Dropdownmenu