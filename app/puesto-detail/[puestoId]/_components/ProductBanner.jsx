import React from 'react'
import Image from 'next/image'

function ProductBanner({product}) {
  return (
    <div className='w-fill'>
       {product? <Image src={product?.attributes?.image?.data.attributes?.url}
        alt='img'
        width={400}
        height={400}
        className='rounded-lg object-cover'/>:
        <div className='h-[400px]
        w-[400px] bg-slate-200
        animate-pulse'>

        </div>}
    </div>
  )
}

export default ProductBanner