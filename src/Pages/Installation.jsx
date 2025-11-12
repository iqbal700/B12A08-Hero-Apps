import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FaArrowDown } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import useProducts from '../Hooks/useProducts';
import { getStoreApp } from '../utilities/addtoDB';

const Installation = () => {
  const { id } = useParams();
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const { loading } = useProducts();

  useEffect(() => {
    axios('/AppData.json')
      .then(res => {
        const data = res.data;
        const storeAppData = getStoreApp();
        const convertNum = storeAppData.map(id => parseInt(id));
        const storeApp = data.filter(app => convertNum.includes(app.id));
        setInstalled(storeApp);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });
  }, [id]);

  // ==-==  Sorting functionality ==-== //
  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...installed];
    if (order === 'high-low') {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (order === 'low-high') {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }
    setInstalled(sorted);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className='w-10/12 mx-auto'>
      <div className='flex flex-col text-center justify-center items-center m-5 gap-2 '>
        <h1 className='text-2xl md:text-3xl font-bold'>Your Installed Apps</h1>
        <p className='md:text-xl text-[#627382]'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-bold'>Total Apps Found : {installed.length}</h1>

          {/* Added dropdown for sorting */}

          <div className="relative">
            <select
              onChange={(e) => handleSort(e.target.value)}
              value={sortOrder}
              className="select select-bordered w-32"
            >
              <option value="">Sort by</option>
              <option value="high-low">High - Low</option>
              <option value="low-high">Low - High</option>
            </select>
          </div>
        </div>

        <div>
          {installed.map(app =>
            <div key={app.id} className='bg-gray-100 p-5 my-5 hover:scale-101'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center gap-3'>
                  <img className='w-10 h-10' src={app.image} alt="" />
                  <div>
                    <h1 className='font-semibold'>{app.companyName}</h1>
                    <div className='flex gap-3 my-1'>
                      <div className='flex items-center gap-0.5'>
                        <FaArrowDown className='text-xs text-[#00D390]' />
                        <p className='text-[#00D390]'>{app.downloads}</p>
                      </div>
                      <div className='flex items-center gap-0.5'>
                        <CiStar className='text-[#FF8811]' />
                        <p className='text-[#FF8811]'>{app.ratingAvg}</p>
                      </div>
                      <p className='text-gray-400'>{app.size}MB</p>
                    </div>
                  </div>
                </div>

                <div>
                  <button className='btn md:w-30 bg-[#00D390] text-white hover:scale-101'>updated</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;



