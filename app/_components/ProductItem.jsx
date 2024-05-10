import React from 'react';
import Image from 'next/image';
import { ChevronRightSquare, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

function ProductItem({ product }) {
  return (
    <Link href={'/product-detail/'+product.id}>
      <div className='hover:border p-1 rounded-lg border-[#FF5757]'>  
        <Image
          src={product?.attributes?.image?.data.attributes?.url}
          alt="img"
          width={500}
          height={450}  
          className="rounded-t-lg h-[190px] object-cover" 
        />
        <div className='flex justify-between 
        items-center bg-gray-50 p-3 rounded-b-lg'>
         <div className=''>
          <h2 className='text-[16px] font-bold'>{product.attributes.name} </h2>
          <h2 className='text-[14px] text-gray-400 flex gap-2'>
            <ChevronRightSquare className='h-4 w-4'/>{product?.attributes?.category?.data.attributes?.CategoryName}</h2>
            
        </div>
        <h2 className='font-bold text-[#FF5757] '>MX${product.attributes.price}</h2>
        </div>
       
</div>
</Link>
     
  );
}

export default ProductItem;

