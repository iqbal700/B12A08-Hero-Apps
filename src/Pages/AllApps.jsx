import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import { FaStarHalfAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router';


const AllApps = () => {
    const [search , setSearch] = useState('');
     const {products, loading} = useProducts();

     const term = search.trim().toLocaleLowerCase()
     const searchProducts = term ? products.filter(product =>
         product.title.toLocaleLowerCase().includes(term)
    
    ) : products ;

        if (loading) {
          return (
            <div className="flex justify-center items-center h-screen">
                 <span className="loading loading-spinner loading-xl"></span>
            </div>
          );
        }

       return (

       <div className='w-10/12 mx-auto'>

             <div className='flex flex-col justify-center items-center m-5 gap-2 '>
                <h1 className='text-2xl md:text-3xl font-bold'>Our All Application</h1>
                <p className=' md:text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
             </div>

             <div className='flex justify-between'>
                <h1>Total App : {products.length} </h1>

                 <label className="input">
                   <CiSearch />
                    <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                      type="search" 
                      placeholder="Search products" />
                 </label>

             </div>


             <div className=' my-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
               searchProducts.map(product => 
                        <Link 
                            to={`/appsdetails/${product.id}`} 
                            className='w-full border-2 p-5 rounded-lg hover:scale-101 transition ease-in-out block'
                            >
                           <div className="card bg-base-100shadow-sm text-center">
                               <figure>
                                   <img className='w-50' src={product.image} />
                               </figure>
                                <h2 className='text-xl font-bold py-4'> {product.title} </h2>
                               <div className="">
                                   <div className='flex justify-between'>
                                        <p>{product.downloads}</p>
                                        <div className='flex items-center gap-1'>
                                           <p>{product.ratingAvg}  </p>
                                           <FaStarHalfAlt />
                                        </div>
                                        
                                     </div>
                                  
                                  </div>
                             </div>
                      </Link>

                )
            }
        </div>
       </div>
               
    )
};

export default AllApps;

