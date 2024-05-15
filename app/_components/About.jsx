import React from 'react';

function About() {
  return (
    //mensaje de prueba
    <div className="max-w-7xl mx-auto">
    <div className="sm:flex items-center">
      <div className="sm:w-1/2 p-10 my-8 sm:order-last">
        <div className="image object-center text-center">
          <img src="/verdev.png" alt="About Us" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text mb-8">
          <span className="text-gray-500 border-b-2 border-[#6e9d36] uppercase">¿Quiénes somos?</span>
          <p className="text-gray-700 text-justify">
            Somos un equipo de desarrolladores web que creen en el poder de la tecnología
            para impulsar el cambio positivo. 
            Nos dedicamos a colaborar con empresas
            comprometidas con el medio ambiente, brindando soluciones web innovadoras que
            no solo mejoran su presencia en línea, sino que también promueven prácticas
            empresariales responsables.
          </p>
        </div>
        <div className="text mb-8">
          <span className="text-gray-500 border-b-2 border-[#6e9d36] uppercase">NUESTRA VISIÓN</span>
          <p className="text-gray-700 text-justify">
            Ser líderes en el desarrollo web sostenible en México, proporcionando soluciones
            innovadoras que impulsen el cambio hacia un mundo más ecológico y responsable.
          </p>
          </div>
          <div className="text">
            <span className="text-gray-500 border-b-2 border-[#6e9d36] uppercase">NUESTRA MISIÓN</span>
                <p className="text-gray-700 text-justify">
                Nuestra misión es crear soluciones web de vanguardia que no solo cumplan con las
necesidades comerciales de nuestros clientes, sino que también promuevan
prácticas empresariales responsables con el medio ambiente, integrando
tecnologías verdes y promoviendo la conciencia ambiental en cada proyecto que
emprendemos.    
            </p>
          </div>
        </div>

        
      </div>

      
      <section className="py-12 bg-white mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
          <span className="text-gray-500 border-b-2 border-[#6e9d36] uppercase">NUESTROS VALORES</span>

          
           
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            Descubre nuestros valores fundamentales            </p>
          </div>
        
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="/programming-code-signs_59118.png"/>
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Innovación</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                Nos comprometemos a buscar constantemente nuevas formas de
integrar prácticas sostenibles en nuestro trabajo, adoptando tecnologías y enfoques
innovadores que minimicen nuestro impacto ambiental.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="social.png" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Responsabilidad social</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 text-justify"> Queremos contribuir positivamente al bienestar de nuestras
comunidades y del mundo en general. Esto implica no solo cumplir con las
obligaciones, sino también buscar activamente oportunidades para
hacer una diferencia positiva en la sociedad.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="transparency.png" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Transparencia</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 text-justify"> Creemos en la transparencia y la honestidad en todas nuestras
interacciones y relaciones comerciales. Nos comprometemos a ser abiertos y
honestos en nuestras comunicaciones, procesos y prácticas comerciales,
construyendo así relaciones de confianza con nuestros clientes y socios.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="/green_leaf_recycle_sign.jpg" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Sostenibilidad</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 text-justify"> Buscamos integrar prácticas y principios sostenibles en todas
nuestras operaciones y decisiones comerciales. Nos interesa minimizar nuestro
impacto ambiental, conservar los recursos naturales y promover la protección del
medio ambiente en todo lo que hacemos.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
