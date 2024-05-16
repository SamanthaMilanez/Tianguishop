import React from 'react';

function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="xl:w-[700px] px-10 h-[400px] rounded-3xl xl:shadow-xl">
        <h1 className="text-center text-3xl font-bold mt-2 mb-2">Inicia sesión</h1>
        <hr />
        <div className="flex justify-center mt-10">
          <form action="">
            <input
              type="text"
              name=""
              id=""
              className="py-3 p-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-[#FF5757]"
              placeholder="Correo electrónico"
            />
            <br /><br />
            <input
              type="text"
              name=""
              id=""
              className="py-3 p-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-[#FF5757]"
              placeholder="Contraseña"
            />
            <div className="flex justify-end mt-3 mb-4">
              <a href="#" className="text-blue-700">¿No tienes cuenta? Regístrate</a>
            </div>
            <button type="submit" className="py-3 bg-[#FF5757] text-white w-full rounded-md font-bold">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
