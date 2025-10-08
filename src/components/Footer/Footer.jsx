import React from 'react';
import logoImg from '../../assets/logo.png'
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className='bg-[#001931]' >
 <div className='text-white p-10 flex justify-between items-center border-b-1 border-solid border-b-gray-700 mb-5' >
     <div className="flex items-center">
    <img className="h-10 w-10" src={logoImg} alt="" />
    <a className="text-xl font-bold ml-2">HERO.IO</a>
  </div>

  <div>
    <h6 className="text-lg mb-2">Social Links</h6>
    <div className="flex gap-5 ">
      {/* social icons here */}
      <FaXTwitter className='bg-white text-black rounded-full' />
       <FaLinkedin className='bg-white text-black rounded-full' />
      <CiFacebook className='bg-white text-black rounded-full'/>
     
    </div>
  </div>
 </div>
 <div className='text-center text-white pb-5'>
    Copyright © 2025 - All right reserved
 </div>
</footer>

    );
};

export default Footer;