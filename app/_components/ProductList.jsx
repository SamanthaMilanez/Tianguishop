import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ productList }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3" style={{ marginLeft: '10px' }}>
 {productList && productList.map((item, index) => (
        <div key={index}>
          <ProductItem product={item}/>            
        </div>
      ))}
    </div>
  );
}

export default ProductList