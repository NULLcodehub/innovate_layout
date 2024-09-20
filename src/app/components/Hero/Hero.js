import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
      <>
        <section className='hero h-auto lg:h-screen mb-10'>
          <div className="bg-div"></div>

          <div className="box-div  flex flex-wrap justify-center items-center gap-5 ">
            <div className="box w-72 h-72 bg-customRed"></div>
            <div className="box w-64 h-64 bg-customBlue"></div>
            <div className="box  w-72 h-72 bg-customOrange"></div>
            <div className="box w-64 h-64 bg-customGreen"></div>
          </div>
        </section>
      </>
    );
};

export default Hero;