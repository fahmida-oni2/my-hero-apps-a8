import React from 'react';
import bannerImg from '../../assets/hero.png'
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="hero bg-base-200 lg:min-h-screen ">
  <div className="hero-content flex-col  ">
    <div>
      <h1 className="text-5xl font-bold text-center">We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h1>
      <p className="py-6 text-[#627382] text-center">
       At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className='flex justify-center items-center'>
      <button className="btn m-2 shadow"><FaGooglePlay />Google Play </button>
      <button className="btn m-2 shadow"><FaAppStoreIos />App Store </button>
      </div>
      
    </div>

     <img
      src={ bannerImg}
      className="lg:max-w-screen rounded-lg  "
    />
  </div>
</div>
    );
};

export default Banner;