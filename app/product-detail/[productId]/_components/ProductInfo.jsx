import { ShoppingBag } from 'lucide-react'
import React from 'react'

function ProductInfo({product}) {
  return (
    <div>
        <h2 className='text-[20px] font-bold'>{product?.attributes?.name}</h2>
        <h2 className='text-[15px] text-gray-400 font-medium'>{product?.attributes?.category?.data.attributes?.CategoryName}</h2>
        <h2 className='text-[15px] mt-5 font-normal'>{product?.attributes?.description}</h2>
        <h2 className='text-[35px] text-[#FF5757] mt-5 font-medium '>MX$ {product?.attributes?.price}</h2>
        <button className='flex gap-2 p-4 px-10 mt-5 bg-[#FF5757] hover:bg-[#F64B4B] text-white rounded-lg'><ShoppingBag/> Comprar</button>
    </div>
  )
}

export default ProductInfo