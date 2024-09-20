'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Overview.css'; // Ensure this file exists and contains your styles

const CardSlider = () => {
  const sliderRef = useRef(null);

  const cardsData = [
    { title: "Card 1", description: "Description for Card 1" },
    { title: "Card 2", description: "Description for Card 2" },
    { title: "Card 3", description: "Description for Card 3" },
    { title: "Card 4", description: "Description for Card 4" },
    { title: "Card 5", description: "Description for Card 5" },
  ];

  const settings = {
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings} className='mx-10'>
        {cardsData.map((card, index) => (
          <div className="card w-[300px] h-[300px] flex gap-6 bg-slate-300 mx-4 " key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </Slider>
      <div className="button-container">
        <button className="prev-button" onClick={goToPrev}>Previous</button>
        <button className="next-button" onClick={goToNext}>Next</button>
      </div>
    </div>
  );
};

export default CardSlider;
