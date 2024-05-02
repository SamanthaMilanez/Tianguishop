import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" style={{ marginLeft: '10px' }}>
    {productList.map((item, index) => (
        <div key={index}>
            <ProductItem product={item}/>            
        </div>
      
    ))}
</div>



  )
}

export default ProductList