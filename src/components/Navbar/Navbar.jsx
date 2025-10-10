import React from 'react';
import logoImg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router';
import { Link } from 'react-router';
import { FaHome } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm pl-5 pr-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
   <NavLink to='/' className='m-2 hover:text-[#632EE3]'>Home</NavLink>
   <NavLink to='/apps' className='m-2 hover:text-[#632EE3]'>Apps</NavLink>
   <NavLink to='/installation' className='m-2 hover:text-[#632EE3]'>Installation</NavLink>

      </ul>
    </div>
    <img className='h-10 w-10' src={logoImg} alt="" />
    <Link to='/' className=" text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <NavLink to='/' className='m-2 hover:text-[#632EE3] flex justify-center items-center gap-1'><FaHome />Home</NavLink>
   <NavLink to='/apps' className='m-2 hover:text-[#632EE3] flex justify-center items-center gap-1'><FaAppStore />Apps</NavLink>
   <NavLink to='/installation' className='m-2 hover:text-[#632EE3] flex justify-center items-center gap-1'><MdInstallDesktop />Installation</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a 
  href="https://github.com/fahmida-oni2" 
  className="btn rounded-xl text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
>
  <FaGithub />Contribute
</a>
  </div>
</div>
    );
};

export default Navbar;