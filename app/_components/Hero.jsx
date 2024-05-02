import React from 'react'

function Hero() {
  return (
  
<section class="bg-[#FF5757] py-20">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <h1 class="text-white font-bold text-5xl leading-tight mb-6">Artículos únicos para ti y tu familia</h1>
                <p class="text-white text-xl mb-8">¡Únete a nosotros y haz tu compra hoy mismo!</p>
                <a href="/collection"
                    class="px-6 py-3 bg-white text-[#FF5757] font-bold rounded-full ">Comprar ahora</a>
            </div>
            <div class="md:w-1/2">
                <img src="/pexels-photo-1745747.jpeg" alt="Coffee beans"
                    class="w-full rounded-lg shadow-lg"/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Hero