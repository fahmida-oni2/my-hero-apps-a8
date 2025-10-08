import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
    const error = useRouteError();
    return <>
    <Navbar></Navbar>
   <div>{error.message}</div>
   <Footer></Footer>
    </>
    
   
};

export default ErrorPage;