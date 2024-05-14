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
    if (params?.productId) {
      getProductById_();
    }
  }, [params?.productId]);

  useEffect(() => {
    if (productDetail) {
      getProductListByCategory();
    }
  }, [productDetail]);

  const getProductById_ = () => {
    GlobalApi.getProductById(params?.productId)
      .then(resp => {
        setProductDetail(resp.data.data);
      });
  }

  const getProductListByCategory = () => {
    if (!productDetail) return; // Esperar a que se cargue productDetail
    GlobalApi.getProductListByCategory(productDetail.attributes.category.data.attributes.CategoryName)
      .then(resp => {
        console.log(resp);
        setProductList(resp.data.data);
      });
  }

  return (
    <div className='p-5 py-10 px-10 md:px-28'>
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-5 justify-evenly'>
      
        <ProductInfo product={productDetail}/>
      </div>
      <div >
      <h2 className='mt-10 text-[20px] font-bold'>Productos similares</h2>
      {productList.length > 0 ? (
        <ProductList productList={productList}/>
      ) : (
        <p>No similar products found.</p>
      )}
      </div>
    </div>
  )
}

export default ProductDetail;
