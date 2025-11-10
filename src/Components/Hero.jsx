import React from 'react';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa6";
import heroImg from '../assets/hero.png'
import useProducts from '../Hooks/useProducts';
import ProductCard from './ProductCard';
import { Link } from 'react-router';

const Hero = () => {

    const {products} = useProducts();

     const featuresProducts = products.slice(0, 6);

    return (
        <div className='my-10 text-center'>

            {/*==-== upper part designed ==-== */}

            <div className=' top-110 flex flex-col items-center gap-4'>
                <h1 className=' text-center font-bold text-3xl md:text-6xl'> We Build <br /> <span className='text-[#632EE3] '>Productive</span> Apps</h1>
                <p className=' p-1 md:w-1/2 text-center text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,
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

            <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
                <div className=' p-5 md:p-10 flex flex-col items-center  text-white gap-7'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Trusted By Million, Buits for you</h1>
                    <div className='flex gap-15'>
                        <p>Total Download</p>
                        <p>Total Review</p>
                        <p>Active Apps</p>
                    </div>
                    <div className='flex gap-15'>
                        <h1 className='text-2xl md:text-5xl font-bold'> 29.6M </h1>
                        <h1 className='text-2xl md:text-5xl font-bold'> 906k </h1>
                        <h1 className='text-2xl md:text-5xl font-bold'> 906k </h1>
                    </div>
                    <div className='flex gap-10'>
                        <p>20% More than last Month</p>
                        <p>40% More than last Month</p>
                        <p>50% More than last Month</p>
                    </div>
                </div>
                
            </div>

            {/* ==-== trending apps part ==-==  */}

             <div className='flex flex-col justify-center items-center m-5 gap-2 '>
                <h1 className='text-2xl md:text-4xl font-bold'>Trending Apps</h1>
                <p className=' md:text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className=' w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
            
                {
                    featuresProducts.map( product => 
                       <ProductCard key={product.id} product={product}> </ProductCard>
                     )
                }
            </div>

            <Link to='apps' className='text-white font-semibold text-xs btn hover:scale-103 w-40 bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
                <button > showAll </button>
            </Link>
         
        </div>
       

       
    );
};

export default Hero;