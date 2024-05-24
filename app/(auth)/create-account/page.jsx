"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import GlobalApi from '../../_utils/GlobalApi'; // Ensure the correct path to GlobalApi

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    try {
      const registrationResponse = await GlobalApi.registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log('Registration successful', registrationResponse.data);

      // Log in the user automatically
      const loginResponse = await GlobalApi.loginUser({
        identifier: formData.email,
        password: formData.password,
      });

      console.log('Login successful', loginResponse.data);

      // Store the JWT token
      localStorage.setItem('jwt', loginResponse.data.jwt);

      // Redirect to the store creation page
      router.push('/Create-store');
    } catch (error) {
      console.error('Error during registration', error);
      if (error.response) {
        setError(error.response.data.message || 'Registration failed');
      } else if (error.request) {
        setError('No response received from server');
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <>
      <section className="bg-[#FF5757] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-lg md:text-xl mb-8">Registrate ahora y aumenta tus ventas</p>
        </div>
      </section>
      <section className="flex flex-col items-center pt-6">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Crear una nueva cuenta</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre completo</label>
                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-red-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Emelia Erickson" required onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="emelia_erickson@example.com" required onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} />
              </div>
              <button type="submit" className="w-full text-white bg-[#FF5757] hover:bg-[#F64B4B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#FF5757] dark:hover:bg-[#FF5757] dark:focus:ring-blue-800">Crear mi cuenta</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">¿Ya tienes cuenta? <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin">Inicia sesión aquí</a></p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
