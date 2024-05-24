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

    const filterProductList=(category)=>{
      const result = productList.filter(product=>
        product?.attributes?.category?.data.attributes?.CategoryName==category);
      return result;
    }
  return productList&& (
    
    <div>
  
  <div class="   p-10">
    <h1 class="font-bold text-3xl mb-4 mt-9  text-[#FF5757]"> ¡Dales otra oportunidad!</h1>
</div>

     
       
        <ProductList productList={productList}/>
        <div></div>

        <div class=" mt-15  p-10">
   
</div>

      
        <div></div>
        <Pagination/>

        
    </div>

    

    
  )
}

export default ProductSection