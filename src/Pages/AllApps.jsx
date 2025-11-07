import React from 'react';
import useProducts from '../Hooks/useProducts';
import { FaStarHalfAlt } from "react-icons/fa";

const AllApps = () => {
     const {products, loading, error} = useProducts();

     const allproducts = products;

       return (

        <div className=' w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10'>
            {
                allproducts.map(product => 
                    <div className=' w-full border-2 p-5 rounded-lg hover:scale-101 transition ease-in-out '>
                           <div className="card bg-base-100shadow-sm">
                               <figure>
                                   <img className='w-50' src={product.image} />
                               </figure>
                                <h2 className='card-title'> {product.name} </h2>
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
                      </div> 

                )
            }
                
             
        </div>
               
            )
};

export default AllApps;

