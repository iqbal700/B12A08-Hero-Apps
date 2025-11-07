import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({product}) => {
    console.log(product)
     const {name, image, downloads, ratingAvg} = product;
    return (
            <div className=' w-full border-2 p-5 rounded-lg hover:scale-101 transition ease-in-out '>
                        <div className="card bg-base-100shadow-sm">
                            <figure>
                                <img className='w-50' src={image} />
                            </figure>
                             <h2 className='card-title'> {name} </h2>
                            <div className="">
                                <div className='flex justify-between'>
                                     <p>{downloads}</p>
                                     <div className='flex items-center gap-1'>
                                        <p>{ratingAvg}  </p>
                                        <FaStarHalfAlt />
                                     </div>
                                     
                                </div>
                               
                            </div>
                        </div>
          </div>
       
        
    );
};

export default ProductCard;