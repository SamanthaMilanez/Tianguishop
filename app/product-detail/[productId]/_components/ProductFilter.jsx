"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'
import Pagination from './Pagination';


function ProductFilter() {

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
  
  <div class=" mt-15  p-10">
  
    <h1 class="text-3xl">Productos similares</h1>
</div>

        <ProductList productList={filterProductList('Ropa')}/>
        <div></div>
       


       

        
    </div>

    

    
  )
}

export default ProductSection