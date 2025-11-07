import React from 'react';
import { Link, NavLink } from 'react-router';
import './style.css'
import { FaGithub } from "react-icons/fa";
import logoImg from '../assets/logo.png';





const Navbar = () => {
    const Links =
      <>
        <NavLink  to='/' >Home</NavLink>
        <NavLink  to='/apps'>Apps</NavLink>
        <NavLink  to='/installation'>Installation</NavLink>
      </>
       

    return (
     <div className="navbar bg-base-100 shadow-sm px-7">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                  {Links}
            </ul>
            </div>
            <div className='flex justify-center items-center gap-1 m-1 '>
                <img className='w-8' src={logoImg} alt="" />
               <Link className='text-2xl font-bold text-[#632EE3] '  to='/'>HERO.IO</Link>
            </div>
            
        </div>
      
         <div className="navbar-center hidden lg:flex">
            <ul className="menu flex text-[1.1rem] gap-3 font-semibold menu-horizontal px-1">
                 {Links}
            </ul>
        </div>
    
       <div className="navbar-end">
            <a
                href="https://github.com/iqbal700?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1.5 rounded-lg justify-center items-center lg:w-1/5 p-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold"
            >
                <FaGithub className="text-xl" />
                Contribute
            </a>
        </div>

  </div>
    );
};

export default Navbar;