import React from 'react'

function Hero() {
  return (
  
<section class="px-3 py-5 bg-neutral-100 lg:py-10">
    <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p class="text-4xl font-bold md:text-5xl text-[#FF5757]">HASTA 50%</p>
            <p class="text-4xl font-bold md:text-5xl">REBAJAS DE VERANO</p>
            <p class="mt-2 text-sm md:text-lg">Aprovecha la temporada</p>
            
        </div>
        <div class="order-1 lg:order-2">
            <img class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="/summer.PNG" alt=""/>
        </div>
    </div>
</section>
  )
}

export default Hero