"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import GlobalApi from '../_utils/GlobalApi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const [categoryList, setCategoryList] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getCategory_();
    checkAuthStatus();

    // Listen for custom login and logout events
    const handleAuthChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('login', handleAuthChange);
    window.addEventListener('logout', handleAuthChange);

    return () => {
      window.removeEventListener('login', handleAuthChange);
      window.removeEventListener('logout', handleAuthChange);
    };
  }, []);

  const getCategory_ = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.data.data);
    });
  };

  const checkAuthStatus = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsAuthenticated(true);
      fetchUserData(token);
    } else {
      setIsAuthenticated(false);
      setUserData(null); // Clear user data on logout
    }
  };

  const fetchUserData = async (token) => {
    try {
      const response = await GlobalApi.getUserData(token);
      console.log('Fetched user data:', response.data); // Log the user data
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 shadow-sm w-full items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href={'/'}> <img id="logo" src="/tianguinew2.png" width="300px" height="60px" /></Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-[#FF5757]" href="/">Inicio</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-[#FF5757]" href="/about">Sobre Nosotros</a>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className='outline-none'>
                    <a className="text-gray-500 transition hover:text-[#FF5757]" href="/collection">Categorias</a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    {categoryList.map((category, index) => (
                      <Link key={index} href={'/products-category/' + category.attributes.CategoryName}>
                        <DropdownMenuItem>
                          <h2>{category.attributes?.CategoryName}</h2>
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-[#FF5757]" href="/FAQ">FAQ</a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                {userData && userData.puesto && userData.puesto.StoreImage && (
                  <div className="flex items-center space-x-2">
                    <img src={userData.puesto.StoreImage.url} alt="Store" className="w-10 h-10 rounded-full" />
                    <span className="text-gray-800"> {userData.username}</span>
                  </div>
                )}
              </>
            ) : (
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-[#FF5757] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#F64B4B]"
                  href="/sign-in"
                >
                  Login
                </a>
                <a
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#FF5757] transition hover:text-[#F64B4B] sm:block"
                  href="/create-account"
                >
                  Registro
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
