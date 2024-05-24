import React, { useEffect, useState } from 'react';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isClient, setIsClient] = useState(false); // State to check if it's client-side

    useEffect(() => {
      setIsClient(true); // Indicate that the component is running on the client

      const token = localStorage.getItem('jwt');
      if (token) {
        setIsAuthenticated(true);
      } else {
        window.location.href = '/sign-in'; // Use window.location to redirect
      }
    }, []);

    if (!isClient) {
      return null; // Render nothing on the server
    }

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return null; // or a loading spinner
    }
  };

  return AuthComponent;
};

export default withAuth;
