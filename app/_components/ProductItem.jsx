import React from 'react';
import Image from 'next/image';

function ProductItem({ product }) {
  return (
    <div className="h-[500px] w-[50] shadow-md hover:shadow-lg flex flex-col">
      <div className="flex-grow relative">
        <Image
          src={product?.attributes?.image?.data.attributes?.url}
          alt="img"
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg" 
        />
         <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">NUEVO
        </div>
      </div>

      <div class="p-4">
        <h3 class="text-lg font-medium mb-2">{product?.attributes?.name}</h3>
        <p class="text-gray-600 text-sm mb-4">{product?.attributes?.description}</p>
        <div class="flex items-center justify-between">
            <span class="font-bold text-lg">MX$ {product?.attributes?.price}</span>
            <button class="bg-[#FF5757] hover:bg-[#F64B4B] text-white font-bold py-2 px-4 rounded">
        Comprar
      </button>
        </div>
        </div>
        </div>
  );
}

export default ProductItem;

