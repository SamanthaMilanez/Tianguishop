"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi'
import ProductInfo from './_components/ProductInfo';
import ProductBanner from './_components/ProductBanner';
import ProductList from '@/app/_components/ProductList';
import { usePathname } from 'next/navigation';


function ProductDetail({params}) {

  const path =usePathname();
  const [productDetail, setProductDetail] = useState();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("Product Path", path);
   
      getProductById_();
    
  }, []);

 
  const getProductById_ = () => {
    GlobalApi.getProductById(params?.productId)
      .then(resp => {
        setProductDetail(resp.data.data);
        getProductListByCategory(resp.data.data);
      });
  }

  const getProductListByCategory = (product) => {
    
    GlobalApi.getProductListByCategory(product?.attributes?.category?.data?.attributes?.CategoryName)
      .then(resp => {
        console.log(resp);
        setProductList(resp)
       
      });
  }

  return (


    

    <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20'>
    <ProductInfo product={productDetail}/>
    <hr className="my-6 border-t-2 border-gray-300" /> {/* Línea divisoria */}
    <h2 className='p-5 mt-10 mb-5 text-3xl text-[#FF5757] font-semibold'>Productos similares</h2>
    {productList&& <div>
        <ProductList productList={productList}/>
    
    </div>}
  </div>
)
}

export default ProductDetail;
