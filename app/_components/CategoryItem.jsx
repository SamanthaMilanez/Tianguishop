import React from 'react'
import Image from 'next/image'

function CategoryItem({ category }) {
  return (
    <div className='mt-10  p-1 rounded-lg hover:scale-125 flex flex-col items-center cursor-pointer'>  
      <Image
        src={category?.attributes?.Icon?.data[0]?.attributes?.url}
        alt="img"
        width={50}
        height={70}  
        className="rounded-t-lg object-cover" 
      />
      <div className='items-center p-3 rounded-b-lg mt-2'>
        <h2 className='text-[16px] font-bold'>{category.attributes?.CategoryName}</h2>
      </div>
    </div>
  );
}

export default CategoryItem;
