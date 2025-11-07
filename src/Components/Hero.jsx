import React from 'react';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa6";
import heroImg from '../assets/hero.png'

const Hero = () => {
    return (
        <div>

            {/*==-== upper part designed ==-== */}

            <div className=' top-110 flex flex-col items-center gap-4'>
                <h1 className=' text-center font-bold text-6xl'> We Build <br /> <span className='text-[#632EE3] '>Productive</span> Apps</h1>
                <p className='w-1/2 text-center text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,
                and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                <div className='flex gap-2'>  
                    <button className="btn bg-white text-black border-[#e5e5e5]">
                        <a href="https://play.google.com/store/apps?hl=en&pli=1">Google Play</a>
                        <BiLogoPlayStore className="text-xl "/> 
                    </button>

                    <button className="btn bg-white text-black border-[#e5e5e5]">
                        <a href="https://www.apple.com/app-store/">App store</a>
                        <FaAppStoreIos className="text-xl "/> 
                    </button>
                </div>

                <div>
                    <img src={heroImg} alt="" />
                </div>
            </div>

                {/*== Bottom designed part ==  */}

            <div className='  bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
                <div className=' p-10 flex flex-col items-center  text-white gap-7'>
                    <h1 className='text-3xl font-bold'>Trusted By Million, Buits for you</h1>
                    <div className='flex gap-15'>
                        <p>Total Download</p>
                        <p>Total Review</p>
                        <p>Active Apps</p>
                    </div>
                    <div className='flex gap-15'>
                        <h1 className='text-5xl font-bold'> 29.6M </h1>
                        <h1 className='text-5xl font-bold'> 906k </h1>
                        <h1 className='text-5xl font-bold'> 906k </h1>
                    </div>
                    <div className='flex gap-10'>
                        <p>20% More than last Month</p>
                        <p>40% More than last Month</p>
                        <p>50% More than last Month</p>
                       
                    </div>
                </div>
                
            </div>

        </div>
       

       
    );
};

export default Hero;