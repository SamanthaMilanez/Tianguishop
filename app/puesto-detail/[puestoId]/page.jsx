"use client"
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../_utils/GlobalApi';
import ProductInfo from './_components/ProductInfo';
import ProductFilter from './_components/ProductFilter';
import { usePathname } from 'next/navigation';

function ProductDetail({ params }) {
  const path = usePathname();
  const [puestoDetail, setPuestoDetail] = useState();

  useEffect(() => {
    console.log("Product Path", path);
    getPuestoById();
  }, []);

  const getPuestoById = () => {
    GlobalApi.getPuestoById(params?.puestoId)
      .then(resp => {
        setPuestoDetail(resp.data.data);
      });
  }

  return (
    <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20'>
      <ProductInfo puesto={puestoDetail} />
      <hr className="my-6 border-t-2 border-gray-300" />
      <h2 className='p-5 mt-10 mb-5 text-3xl text-[#FF5757] font-semibold'>Productos similares</h2>
      {/* Renderiza el componente ProductFilter y pasa el puesto como prop */}
      <ProductFilter puesto={puestoDetail?.attributes?.puesto?.data.attributes?.NombrePuesto} />
    </div>
  );
}

export default ProductDetail;
