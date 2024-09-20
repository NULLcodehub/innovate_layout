'use client';
import React, {useState} from 'react';

import './OverviewMain.css'
import Overview from './Overview';

const OverviewMain = () => {
    const [bigDivColor, setBigDivColor] = useState("green");
    const [border,setBorder]=useState('')
  
  const changeColor = (color) => {
    setBigDivColor(color);
    setBorder(color)
  };
    return (

        <main className='h-auto ' >

            {/* <Overview/> */}

            <div className='block md:w-5/12 ml-16   overview-text relative top-64'>
                <h1 className='text-5xl mb-5  font-bold'>Overview</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="bg-div-overview">
                
            </div>
            <section className=' flex flex-warp flex-col md:flex-row relative bottom-60'>

            
                <div className='w-12/12 md:w-6/12 flex justify-center items-center'>
                    <div>
                        <div className=' flex gap-4'>
                            <div style={{backgroundColor:bigDivColor}} className=' size-[250px] md:size-[400px] rounded-3xl '></div>
                            <div className=''>
                                <div style={{backgroundColor:'#0FA958',border:border ==='#0FA958'? '4px solid black': 'none'}} onClick={() => changeColor("#0FA958")} className='  size-[70px] md:size-[120px] bg-blue-200 my-3 rounded-2xl md:rounded-3xl'></div>
                                <div style={{backgroundColor:'#BE92FB',border:border === '#BE92FB' ? '4px solid black': 'none'}} onClick={() => changeColor("#BE92FB")}className='  size-[70px] md:size-[120px] bg-blue-200 my-3 rounded-2xl md:rounded-3xl'></div>
                                <div style={{backgroundColor:'#FFACAC',border:border === '#FFACAC'? '4px solid black': 'none'}} onClick={() => changeColor("#FFACAC")}className='  size-[70px] md:size-[120px] bg-blue-200 my-3 rounded-2xl md:rounded-3xl'></div>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                                <div style={{backgroundColor:'#2E4E3E',border:border === '#2E4E3E'? '4px solid black': 'none'}} onClick={() => changeColor("#2E4E3E")} className='  size-[70px] md:size-[120px] bg-blue-200 mt-2 rounded-2xl md:rounded-3xl'></div>
                                <div style={{backgroundColor:'#26DBDB',border:border === '#26DBDB'? '4px solid black': 'none'}} onClick={() => changeColor("#26DBDB")}className='  size-[70px] md:size-[120px] bg-blue-200 mt-2 rounded-2xl md:rounded-3xl'></div>
                                <div style={{backgroundColor:'#B126DB',border:border === '#B126DB'? '4px solid black': 'none'}} onClick={() => changeColor("#B126DB")}className='  size-[70px] md:size-[120px] bg-blue-200 mt-2 rounded-2xl md:rounded-3xl'></div>
                                <div style={{backgroundColor:'#DB4126',border:border === '#DB4126'? '4px solid black': 'none'}} onClick={() => changeColor("#DB4126")}className='  size-[70px] md:size-[120px] bg-blue-200 mt-2 rounded-2xl md:rounded-3xl'></div>
                        </div>
                    </div>
                </div>
                <div className='w-12/12 md:w-6/12 flex justify-center items-center '>
                    <div className='md:w-7/12 p-5'>
                        <h1 className='text-3xl font-bold'>Collection Featured</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tet ut labore et dolore magna aliqrit in  vol uptate velit esse cillumsunt in culpa</p>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default OverviewMain;