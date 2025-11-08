import React from 'react';
import errorImg from '../assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center gap-5 min-h-screen'>
           <img src={errorImg} alt="errorImg" />
           <div className='flex flex-col text-center gap-1'>
              <h1>Oops, page not found</h1>
              <p>The page you are looking for is not available.</p>
                <Link to='/' > 
                    <button className='btn w-35 mt-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'> Go Back </button>
                </Link>  
           </div>
        </div>
    );
};

export default Error;