import React, { useEffect, useState } from 'react';
import useProducts from '../Hooks/useProducts';
import { Link, useParams } from 'react-router';
import errorAppImg from '../assets/App-Error.png'

const Appdetails = () => {
   const {id} = useParams();
    const [appData, setAppData] = useState(null);
  const [loading, setLoading] = useState(true);
   
   
  useEffect(() => {
    fetch('/AppData.json')
      .then(res => res.json())
      .then(data =>
           {  const singleApp = data.find(item => item.id.toString() === id);
            setAppData(singleApp);
            setLoading(false);
           }
          
      )
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [id]);

   
  if (loading) {
          return (
            <div className="flex justify-center items-center h-screen">
                 <span className="loading loading-spinner loading-xl"></span>
            </div>
          );
        }


        if (!appData) {
              return <div className='flex flex-col justify-center items-center text-center gap-5 min-h-screen'>
                         <img src={errorAppImg} alt="errorImg" />
                         <div className='flex flex-col text-center gap-1'>
                            <h1>Oops, page not found</h1>
                            <p>The page you are looking for is not available.</p>
                              <Link to='/' > 
                                  <button className='btn w-35 mt-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'> Go Back </button>
                              </Link>  
                         </div>
                      </div>
            } 

    return (
        <div>
            <h1>app details part 01</h1>
        </div>
    );
};

export default Appdetails;