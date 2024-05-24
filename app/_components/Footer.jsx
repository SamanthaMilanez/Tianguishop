import React from 'react'

function Footer() {
  return (
<footer class="bg-[#FF5757] mt-20">
  <div class="container px-4 mx-auto">
    <div class="pt-24 pb-11 mx-auto max-w-4xl"><a class="block md:mx-auto mb-5 max-w-max" href="#">
    <img id="logo" src="/tianguinew1.png" width="300px" height="60px"/>
      </a>
      <div class="flex flex-wrap justify-center -mx-3 lg:-mx-6">
        <div class="w-full md:w-auto p-3 md:px-6"><a href="/"
            class="inline-block text-lg text-white font-medium">Inicio</a>
        </div>
        <div class="w-full md:w-auto p-3 md:px-6"><a href="/about"
            class="inline-block text-lg text-white font-medium">Sobre Nosotros</a>
        </div>
        <div class="w-full md:w-auto p-3 md:px-6"><a
            class="inline-block text-lg text-white font-medium" href="">F.A.Q</a>
        </div>
       
      </div>
    </div>
  </div>
  <div class="border-b border-gray-100"></div>
  <div class="container px-4 mx-auto">
    <p class="py-10 md:pb-20 text-md text-white font-medium text-center">
      © 2024 tianguishop
      Todos los derechos reservados.
    </p>
    
  </div>
</footer>
  )
}

export default Footer