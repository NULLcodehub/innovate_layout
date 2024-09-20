'use client';
import Card from './Card';
import './EndSection.css';
import { useState } from 'react';
import { GoFilter } from "react-icons/go";

import Rectangle30 from '@/app/Image/Rectangle30.png'
import Rectangle31 from '@/app/Image/Rectangle31.png'
import Rectangle32 from '@/app/Image/Rectangle32.png'
import Rectangle33 from '@/app/Image/Rectangle33.png'
const EndSection = () => {

  const images = [
    Rectangle30,
    Rectangle31,
    Rectangle32,
    Rectangle33


  ];


  const cardsData = [
    {
      title: "All stuff",
      price:'598 TK'

    },
    {
      title: "ABCD",
      price:'777 TK'
    },
    {
      title: "EFGH",
      price:'0'
    },
    {
      title: "XYZ",
      price:'598 TK'
    },
    {
      title: "All stuff",
      description: "This is the description for card 5",
    },
    {
      title: "ABCD",
      price:'777 TK'
    },
    {
        title: "EFGH",
        price:'58 TK'
      },
      {
        title: "XYZ",
        price:'0'
      },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  
  const categories = ['All Categories', 'Art', 'Celebrities', 'Gaming', 'Sports', 'Music'];

  return (
    <section className="mx-20 md:p-4">
 
      <div>
        <div>
          <h1 className="text-3xl font-extrabold">DISCOVER MORE</h1>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-wrap gap-6 my-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`rounded-full px-4 py-2 font-semibold discover ${
                  selectedCategory === category ? 'bg-blue-700 text-white' : 'bg-slate-200 text-black'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 my-8 bg-slate-200 text-purple-800 rounded-full flex justify-center items-center gap-2">
            <GoFilter />All Filters
          </button>
        </div>
      </div>

      <div className="container mx-auto p-0 md:p-4">
        <div className="grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              price={card.price}
              image={images[index % images.length]}  
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EndSection;