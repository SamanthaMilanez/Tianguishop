"use client"
import CategoryList from './CategoryList';
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'


function CategorySection() {


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

  return  categoryList&& (
    <div>

    <div class="   p-10">
    <h1 class="font-bold text-4xl mb-4 mt-9 text-center text-[#FF5757]">Categorías</h1>
    <div> <CategoryList categoryList={categoryList}/></div>
</div>
</div>
  )
}

export default CategorySection