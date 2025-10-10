import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';

const Root = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
 useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    },500);
     return () => clearTimeout(timer);
  }, [location]);


    return (
        <div className='flex flex-col min-h-screen'> 
            <Navbar></Navbar>

             {loading ? (
        <Spinner></Spinner>
      ) : (
        <div > 
                <Outlet></Outlet>
            </div>
      )}
            
            <Footer></Footer>
        </div>
    );
};

export default Root;