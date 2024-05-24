"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GlobalApi from '../_utils/GlobalApi'; // Ensure the correct path to GlobalApi
import withAuth from '../_utils/withAuth';

function CreateStore() {
  const [storeData, setStoreData] = useState({
    NombrePuesto: '',
    Address: '',
    StoreImage: null
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [userId, setUserId] = useState(null); // Store user ID
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await GlobalApi.getUserData(token);
      setUserId(response.data.id); // Store the user ID
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'StoreImage') {
      setStoreData({ ...storeData, StoreImage: files[0] });
    } else {
      setStoreData({ ...storeData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!userId) {
      setError('User not authenticated');
      return;
    }

    try {
      // Step 1: Create the store
      const storeResponse = await GlobalApi.createStore(storeData, userId);
      console.log('Store creation successful', storeResponse.data);
      setSuccess('Store created and assigned successfully!');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during store creation', error);
      if (error.response) {
        setError(error.response.data.message || 'Store creation failed');
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Crea tu tienda</h2>
        </div>
      </section>
      <section className="flex flex-col items-center pt-6">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Crea una nueva tienda</h1>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
              <div>
                <label htmlFor="NombrePuesto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la tienda</label>
                <input type="text" name="NombrePuesto" id="NombrePuesto" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mi Tienda" required onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="StoreImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fotografía de la tienda</label>
                <input type="file" name="StoreImage" id="StoreImage" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ubicación</label>
                <input type="text" name="Address" id="Address" placeholder="Ubicación de la tienda" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} />
              </div>
              <button type="submit" className="w-full text-white bg-[#FF5757] hover:bg-[#F64B4B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#FF5757] dark:hover:bg-[#FF5757] dark:focus:ring-blue-800">Crear mi tienda</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default withAuth(CreateStore);
