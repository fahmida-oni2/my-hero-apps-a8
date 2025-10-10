import React from 'react';
import errorImg from '../../assets/App-Error.png'
import App from '../../App';
import { Link } from 'react-router';
const ErrorApp = () => {
    return (
        <div className='flex flex-col min-h-screen bg-base-200 space-y-3 items-center justify-center'>
            <img src={errorImg} alt="" />
            <h1 className='text-center font-extrabold text-4xl text-[#001931]'>OPPS!! APP NOT FOUND</h1>
            <p className='text-center  text-[#001931]'>The App you are requesting is not found on our system.  please try another apps</p>
            <div className='flex items-center justify-center'>
             <Link to='/apps' className='btn rounded-xl text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Go Back!</Link>
            </div>
        </div>
    );
};

export default ErrorApp;