"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GlobalApi from '../_utils/GlobalApi'; // Ensure the correct path to GlobalApi
import withAuth from '../_utils/withAuth';

function Dashboard() {
  const [formData, setFormData] = useState({
    name: '',
    descripcion: '',
    image: null,
    price: '',
    category: ''
  });
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [view, setView] = useState('dashboard'); // Add view state
  const [userId, setUserId] = useState(null); // Update userId state
  const [puestoId, setPuestoId] = useState(null); // Add puestoId state
  const [sidebarOpen, setSidebarOpen] = useState(false); // Add sidebarOpen state
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      fetchUserData(token);
    }
    fetchCategories();
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await GlobalApi.getUserData(token);
      setUserId(response.data.id); // Store the user ID
      setPuestoId(response.data.puesto.id); // Store the puesto ID
      fetchUserProducts(response.data.id); // Fetch products after setting userId
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await GlobalApi.getCategory();
      setCategories(response.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchUserProducts = async (userId) => {
    try {
      const response = await GlobalApi.getUserProducts(userId);
      setProducts(response);
    } catch (error) {
      console.error('Error fetching user products:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!puestoId) {
      setError('User not authenticated');
      return;
    }
    try {
      const response = await GlobalApi.createProduct(formData, puestoId);
      setQrCodeUrl(response.qrCodeUrl);
      setSuccess('Se ha registrado un nuevo producto!');
      fetchUserProducts(userId); // Refresh products list
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Error');
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<html><head><title>Print QR Code</title></head><body><img src="${qrCodeUrl}" onload="window.print();window.close()" /></body></html>`);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
const logoutEvent = new Event('logout');
window.dispatchEvent(logoutEvent);
    router.push('/');
    
  };

  return (
<div className="flex h-screen bg-gray-100">
  {/* sidebar */}
  <div className={`fixed inset-0 z-40 md:static md:inset-auto md:z-auto ${sidebarOpen ? 'block' : 'hidden'} md:flex md:flex-col w-64 bg-gray-800`}>
    <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
      <span className="text-white font-bold uppercase mx-auto">Menu</span>
      <button className="md:hidden text-gray-500 focus:outline-none focus:text-gray-700" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div className="flex flex-col flex-1 overflow-y-auto">
      <nav className="flex-1 px-2 py-4 bg-gray-800">
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
          onClick={() => {
            setView('dashboard');
            setSidebarOpen(false); // Collapse sidebar on mobile
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" stroke="none">
            <circle cx="12" cy="12" r="3" />
          </svg>
          Agregar producto
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
          onClick={() => {
            setView('reportes');
            setSidebarOpen(false); // Collapse sidebar on mobile
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" stroke="none">
            <circle cx="12" cy="12" r="3" />
          </svg>
          Reportes
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
          onClick={() => {
            setView('products');
            setSidebarOpen(false); // Collapse sidebar on mobile
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" stroke="none">
            <circle cx="12" cy="12" r="3" />
          </svg>
          Mis Productos
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
          onClick={handleLogout}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" stroke="none">
            <circle cx="12" cy="12" r="3" />
          </svg>
          Logout
        </a>
      </nav>
    </div>
  </div>

  {/* Main content */}
  <div className="flex flex-col flex-1 overflow-y-auto">
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4">
      <button className="text-gray-500 focus:outline-none focus:text-gray-700" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <div className="p-4 container">
      {view === 'dashboard' && (
        <>
          <h1 className="text-2xl font-bold">Registrar un nuevo producto</h1>
          {success && <p className="text-green-500">{success}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Nombre de tu producto:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Descripción:</label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Sube una imagen de tu producto:</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Cual sera su precio?</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Selecciona una categoria:</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              >
                <option value="">Seleccione una categoría</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.attributes.CategoryName}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="w-100 px-4 py-2 bg-[#FF5757] text-white rounded-md">
              Guardar
            </button>
          </form>
          {qrCodeUrl && (
            <div className="mt-4">
              <h2 className="text-xl font-bold">QR Code</h2>
              <img src={qrCodeUrl} alt="QR Code" className="w-32 h-32" />
              <button onClick={handlePrint} className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md">
                Print QR Code
              </button>
            </div>
          )}
        </>
      )}
      {view === 'reportes' && (
        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 p-8">
          <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Ganancias al dia</span>
              </div>
              <div className="text-3xl dark:text-gray-100">
                $1192.10
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                <span>554.43 Incremento</span>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Nuevos Clientes</span>
              </div>
              <div className="text-3xl dark:text-gray-100">
                10
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">
                <span>3% Bajada</span>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Nuevas ventas</span>
              </div>
              <div className="text-3xl dark:text-gray-100">
                10
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                <span>7% Incremento</span>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          {/* Add 3 more cards here with similar structure */}
          <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Total de ventas</span>
              </div>
              <div className="text-3xl dark:text-gray-100">
                $101033.50
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                <span>5% Incremento</span>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Nuevas reseñas</span>
              </div>
              <div className="text-3xl dark:text-gray-100">
                15
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                <span>10% Incremento</span>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Rembolsos</span>
              </div>
              <div className="text-3xl dark:text-gray-100">
                3
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">
                <span>2% Bajada</span>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      {view === 'products' && (
        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 p-8">
          {products.map((product) => (
            <div key={product.id} className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
              <div className="space-y-2">
                <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                  <img src={product.attributes.image.data.attributes.url} alt={product.attributes.name} className="absolute top-0 left-0 w-full h-full object-cover rounded-md" />
                </div>
                <div className="text-xl dark:text-gray-100">{product.attributes.name}</div>
                <div className="text-gray-500 dark:text-gray-400">{product.attributes.descripcion}</div>
                <div className="text-gray-500 dark:text-gray-400">${product.attributes.price}</div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                  <a href={product.attributes.qrCodeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">QR Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  </div>
</div>
  );
}

export default withAuth(Dashboard);
