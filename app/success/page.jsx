import React from 'react'

function SUCCESS() {
  return (
    <main class="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
    <a>
    <img id="logo" src="/giphy.gif" width="300px" height="60px"/>
      
    </a>
    <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">Tu compra ha sido procesada
      
    </h1>
    <p class="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">¡Muchas gracias por tu compra! Apreciamos mucho tu apoyo a pequeños negocios.</p>
    <a class="bg-[#FF5757] rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80" href="/"> Continuar
    </a>
</main>
  )
}

export default SUCCESS