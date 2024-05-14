import React from 'react'
import Image from 'next/image'
import CategoryItem from './CategoryItem'

function CategoryList({categoryList}) {


  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3" style={{ marginLeft: '10px' }}>
    {categoryList && categoryList.map((item, index) => (
           <div key={index}>
             <CategoryItem category={item}/>            
           </div>
         ))}
       </div>

  )
}

export default CategoryList