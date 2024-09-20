import Image from 'next/image';
import cardMini from '@/app/Image/cardMini.png'
import './Card.css'
export default function Card({ title, price, image }) {
    return (
      <div className="bg-white shadow-2xl   rounded-3xl overflow-hidden card">
        <Image src={image} alt={title} width={300} height={300} className="w-full h-50 p-6  object-cover" />
        <Image src={cardMini}  className='relative left-8 bottom-10'/>
        <div className="pb-4 px-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <div className="flex justify-between mt-5">
            <p>{price}</p>
            <p>1 of 9</p>
          </div>
          <div className="flex justify-between mt-5">
            <button className="px-4 py-2 bg-slate-600 rounded-full b1">DSVBD</button>
            <button className="px-4 py-2 bg-slate-600 rounded-full b2">DSVBD</button>
          </div>
        </div>
      </div>
    );
  }
  