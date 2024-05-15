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
    GlobalApi.getProductListByCategory(productDetail.attributes?.category?.data?.attributes?.CategoryName)
      .then(resp => {
        console.log(resp);
        setProductList(resp.data.data);
      });
  }

  return (


    

    <div className=' container mx-auto p-5'>
    <ProductInfo product={productDetail}/>
    <hr className="my-6 border-t-2 border-gray-300" /> {/* Línea divisoria */}
    <h2 className='p-5 mt-10 mb-5 text-3xl text-[#FF5757] font-semibold'>Productos similares</h2>
    <div>
      {productList.length > 0 ? (
        <ProductList productList={productList}/>
      ) : (
        <p>No se encontraron productos similares.</p>
      )}
    </div>
  </div>
)
}

export default ProductDetail;
