import { ShoppingBag } from 'lucide-react'
import React from 'react'

function ProductInfo({product}) {
  return (

    //actualizacion
    <div class=" dark:bg-gray-800 py-20 content-center">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 justify-center">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={product?.attributes?.image?.data.attributes?.url} alt="Product Image "/>
                </div>
               
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product?.attributes?.name}</h2>
                
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Precio:</span>
                        <span class="text-[#FF5757] font-bold dark:text-gray-300"> $ {product?.attributes?.price}</span>
                    </div>
                   
                </div>
              
                
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Detalles del producto:</span>
                    <span class="text-gray-600 dark:text-gray-300 text-sm mb-4">  {product?.attributes?.descripcion}</span>
                    <a href="/checkout" style={{ width: '150px' }} className='flex gap-2 p-4 px-5 mt-5 bg-[#FF5757] hover:bg-[#F64B4B] text-white rounded-lg'>
  <ShoppingBag/> Comprar
</a>
                </div>
            </div>
        </div>
    </div>
</div>


    
   
  )
}

export default ProductInfo