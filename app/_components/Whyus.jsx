import React from 'react';

export default function Whyus() {
  return (
    <section className="text-gray-700 body-font">
      <div className="flex justify-center mt-10 text-4xl font-bold">
      ¿Por qué Tianguishop?     
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src="/card.PNG" className="w-32 mb-3" alt="Latest Milling Machinery" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">Facilidad de pago</h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" className="w-32 mb-3" alt="Reasonable Rates" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">Precios razonables</h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" className="w-32 mb-3" alt="Time Efficiency" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">Conveniencia</h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3" alt="Expertise in Industry" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">Apoyo a la comunidad</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
