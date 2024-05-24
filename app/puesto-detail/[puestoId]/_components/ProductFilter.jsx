"use client"
import React, { useEffect, useState } from 'react';
import ProductList from '@/app/_components/ProductList';
import GlobalApi from '@/app/_utils/GlobalApi';

function ProductFilter({ puesto }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductsByPuesto();
  }, [puesto]);

  const getProductsByPuesto = () => {
    GlobalApi.getProductListByPuesto(puesto).then(resp => {
      setProductList(resp);
    });
  };

  return (
    <div className="mt-15 p-10">
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductFilter;
