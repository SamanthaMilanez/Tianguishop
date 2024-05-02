"use client"
import React, { useEffect } from 'react'
import GlobalApi from '../../_utils/GlobalApi'



function ProductDetail({params}) {
  console.log("Product Id", params?.productId)

    useEffect(()=>{
      params?.productId&&getProductById_();
    },[params?.productId])
   const getProductById_=()=>{
GlobalApi.getProductById(params?.productId).then(resp=>{
    console.log(resp.data.data)
})
   }
                   
  return (
    <div>Product Detail</div>
  )
}

export default ProductDetail