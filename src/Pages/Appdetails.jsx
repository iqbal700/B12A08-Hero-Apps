import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import errorAppImg from '../assets/App-Error.png'
import { FaArrowDown } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { addToStoreDB } from '../utilities/addtoDB';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';


const Appdetails = () => {

    const {id} = useParams();

    console.log(id)
    const [appData, setAppData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [installBtn, setInstallBtn] = useState(false)

    console.log(appData)

    const handleInstalledApp = () => {

      addToStoreDB(id)
      setInstallBtn(true);
    }
  
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
                            <h1>Oops, Apps not found</h1>
                            <p>The App you are looking for is not available.</p>
                              <Link to='/' > 
                                  <button className='btn w-35 mt-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'> Go Back </button>
                              </Link>  
                         </div>
                      </div>
            } 

    return (

        <div className='w-10/12 mx-auto m-10'>

            {/* ==-== top part ==-==  */}
            <div className='shadow-sm md:shadow-none p-7 rounded-lg'>
              <div className='flex flex-col lg:flex-row gap-5 items-center border-b border-b-[#627382] pb-7'>
                <img className='w-70' src={appData.image} alt="" />
                <div className='flex flex-col gap-6 '>
                  <div className='space-y-1.5 border-b border-b-[#627382] pb-5'>
                    <h1 className=' md:text-2xl font-semibold md:font-bold'>{appData.description}</h1>
                    <p className='text-[15px] md:font-semibold'>
                      Developed by <span className='text-[#9F62F2]'>{appData.companyName}</span>
                    </p>
                  </div>
                
                <div className='flex justify-around'>
                     <div className='flex flex-col gap-1'>
                      <FaArrowDown />
                      <p>Downloads</p>
                        <span className='text-2xl font-bold'>{appData.downloads}</span>
                    </div>

                    <div className='flex flex-col gap-1'>
                      <CiStar />
                      <p >Ratings</p>
                      <span className='text-2xl font-bold'>{appData.ratingAvg}</span>
                    </div>

                    <div className='flex flex-col gap-1'>
                      <AiFillLike />
                      <p>Avg Ratings</p>
                      <span className='text-2xl font-bold'>54K</span>
                    </div>

                </div>
                <Link to={''} >
                  <div>
                      <button
                          onClick={() => handleInstalledApp(id)}
                            className='btn w-50 bg-[#00D390] text-white hover:scale-101'
                          >
                            {installBtn ? (
                              'Installed'
                            ) : (
                              <span>
                                Install Now (<span className="font-semibold">{appData.size} MB</span>)
                              </span>
                            )}
                      </button>

                  </div>
                </Link>
                </div>
            </div>
          </div>


          {/* ==-== Chart Option start here ==-==  */}


          
        <div className='space-y-3'>
            <h1 className='text-2xl font-bold'>Ratings</h1>
            <div className='bg-base-100 rounded-xl h-150 p-4'>
                <ComposedChart
                      layout="vertical"
                      style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1 / 1.618 }}
                      responsive
                       data={[...(appData?.ratings || [])].sort((a, b) => b.name.localeCompare(a.name))}
                      margin={{
                        top: 20,
                        right: 0,
                        bottom: 0,
                        left: 0,
                      }}
                    >
                      <XAxis
                       type="ratings"
                        dataKey="count" />
                      <YAxis
                         dataKey="name"
                         type="category"
                         scale="band"
                         width="auto" />
                      <Tooltip />
                      <Bar dataKey="count" barSize={30} fill="#FF8811" />
                       <Line dataKey="uv" stroke="#FF8811" />
                  </ComposedChart>
            </div>
        </div>


          {/* ==-== bottom description part ==-==  */}

          <div className='my-5'>
            <h1 className='text-3xl font-bold '>Description</h1>
             <p className='text-[#627382] text-justify leading-relaxed'>
            This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
            <br />
            <div className='py-3'></div>
            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere. <br />
            <div className='py-4'></div>
            For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
             </p>
          </div>
       </div>
    );
};

export default Appdetails;

