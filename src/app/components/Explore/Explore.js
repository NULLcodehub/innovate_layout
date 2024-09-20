import React from 'react';
import Image from 'next/image'
import explore from "@/app/Image/explore.jpg"
import './Explore.css'
const Explore = () => {
    return (
        <>
         <section className=' h-auto lg:h-screen lg:mt-16'>
            <div className='h-5/6 flex-col-reverse lg:flex-row flex flex-warp '>

                <div className='explore-text h-full lg:w-6/12 p-10 lg:p-16 flex flex-col justify-center items-center mt-10'>

                    <p className='md:text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  qui officia deserunt mollit anim id est laborum.</p>
                    <button className=' my-10 px-8 py-3 text-customPurple hover:bg-customPurple hover:text-white rounded-2xl border-2 border-customPurple'>Explore Now</button>

                </div>

                <div className='explore-card-section flex  justify-center md:items-center p-10 h-full lg:w-6/12'>
                

                    <div className='card relative h-fit  '>
                        {/* <div className='explore-card1 rounded-2xl  md:size-[316px] h-[316px] bg-black relative top-0 left-0 md:top-10 md:left-32'></div>
                        <div className='explore-card2 rounded-2xl  md:size-[358px] bg-slate-600  absolute top-0 left-0 md:top-5 md:left-16'></div>
                        <div className='explore-card3 rounded-2xl size-[300px] md:size-[395px] absolute top-0 left-0'></div> */}

                        <Image src={explore} className='explore-image'/>
                    </div>
                
                </div>




            </div>
         </section>
        </>
    );
};

export default Explore;