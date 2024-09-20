import React from 'react';
import Image from 'next/image'
// import OverviewImage from '@/app/Image/collagePhoto.png';
import OverviewImage from '@/app/Image/collagePhoto.jpg';
const Signup = () => {
    return (
        <section className='h-auto lg:h-screen'>
            <div className='flex flex-wrap'>
                <div className='overview-image p-16 flex justify-center items-center w-screen  lg:w-6/12'>
                    <Image src={OverviewImage}/>
                </div>
                 <div className='overview-text flex flex-col justify-center items-center  p-5 md:p-16 w-screen  lg:w-6/12'>
                    <p className='w-full md:w-9/12 md:text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.</p>
                    <button className=' my-10 px-8 py-3 text-Button hover:bg-Button hover:text-white rounded-2xl border-2 border-Button'>Sign up</button>
                </div>
            </div>
        </section>
    );
};

export default Signup;