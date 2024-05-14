"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'


function ProductFilter({ currentProductId }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts_();
  }, []);

  const getProducts_ = () => {
    GlobalApi.getProducts().then(resp => {
      setProductList(resp.data.data);
    });
  };

  const filterProductList = category => {
    if (!productList.length) return []; // Si la lista de productos está vacía, retorna un arreglo vacío
    const result = productList.filter(product =>
      product.id !== currentProductId && // Excluir el producto actual
      product?.attributes?.category?.data.attributes?.CategoryName === category
    );
    return result;
  };

  return (
 
  <div className="mt-15 p-10">

  <ProductList productList={filterProductList(product?.attributes?.category?.data.attributes?.CategoryName)} />
</div>

  );
}

export default ProductFilter;
