"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'
import Pagination from './Pagination';


function ProductSection() {

const[productList,setProductList]=useState([]);    
 useEffect(()=>{
    getProducts_();
 },[])   
    const getProducts_ =()=>{
        GlobalApi.getProducts().then(resp=>{
            console.log(resp.data.data);
            setProductList(resp.data.data);
        })
    }
  return productList&& (
    
    <div>
  
  <div class=" mt-15 text-center p-10">
    <h1 class="font-bold text-4xl mb-4 mt-9">Productos nuevos</h1>
    <h1 class="text-3xl">Descubre los productos más nuevos</h1>
</div>

        <ProductList productList={productList}/>
        <div></div>
        <Pagination/>
    </div>
  )
}

export default ProductSection