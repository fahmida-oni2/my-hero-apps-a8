import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
    return <>
   <div className='flex flex-col min-h-screen'>
     <Navbar></Navbar>
   <div className='flex-1'>
    <h1>page not found</h1>
   </div>
   <Footer></Footer>
   </div>
    </>
    
   
};

export default ErrorPage;