import React from 'react'

function Hero() {
  return (
  
<section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Artículos únicos y de calidad.
        <strong className="font-extrabold text-[#f87829] sm:block"> Sé parte del cambio. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Juntos, podemos hacer la diferencia. 
      ¡Únete a nosotros y haz tu compra hoy mismo!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-[#ff914d] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#f87829] focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
         Comenzar
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-[#ff914d] shadow hover:text-[#f87829] focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Saber más
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero