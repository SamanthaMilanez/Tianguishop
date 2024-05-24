"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import jwt_decode from 'jwt-decode';
import GlobalApi from '../../_utils/GlobalApi'; // Ensure the correct path to GlobalApi

function Page() {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    try {
      console.log('Submitting login request', formData);
      const response = await GlobalApi.loginUser({
        identifier: formData.identifier,
        password: formData.password,
      });
      console.log('Login successful', response.data);
      // Store JWT token in localStorage
      localStorage.setItem('jwt', response.data.jwt);
      const loginEvent = new Event('login');
      window.dispatchEvent(loginEvent);
      
      // Fetch user data
      const userResponse = await GlobalApi.getUserData(response.data.jwt);
      setUserData(userResponse.data);

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during login', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
        setError(error.response.data.message || 'Login failed');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request data:', error.request);
        setError('No response received from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      GlobalApi.getUserData(token).then(response => {
        setUserData(response.data);
      }).catch(error => {
        console.error('Error fetching user data', error);
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="xl:w-[700px] px-10 h-[400px] rounded-3xl xl:shadow-xl">
        <h1 className="text-center text-3xl font-bold mt-2 mb-2">Inicia sesión</h1>
        <hr />
        <div className="flex justify-center mt-10">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="identifier"
              className="py-3 p-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-[#FF5757]"
              placeholder="Correo electrónico"
              value={formData.identifier}
              onChange={handleChange}
            />
            <br /><br />
            <input
              type="password"
              name="password"
              className="py-3 p-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-[#FF5757]"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="flex justify-end mt-3 mb-4">
              <a href="/create-account" className="text-blue-700">¿No tienes cuenta? Regístrate</a>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="py-3 bg-[#FF5757] text-white w-full rounded-md font-bold">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
