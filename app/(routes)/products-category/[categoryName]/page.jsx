import GlobalApi from '@/app/_utils/GlobalApi'
import React from 'react'

import Dropdownmenu from './_components/Dropdownmenu';
import ProductList from '@/app/_components/ProductList';

async function ProductCategory({params}) {
  
    
    const productList = await GlobalApi.getProductListByCategory(params.categoryName)
    console.log(productList)


    return (

    <div>

       <h2 className=' p-4 bg-[#FF5757] text-white font-bold text-3xl text-center'>{params.categoryName}</h2> 
       <Dropdownmenu/>
       <div className='mt-10 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20'><ProductList productList={productList}/></div>
       
        </div>
        
  )
}

export default ProductCategory