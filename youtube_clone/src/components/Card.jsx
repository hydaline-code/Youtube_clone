import React from 'react'
import '../styles/card.css'
import {faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileimg from '../assets/react1.jpeg'

export default function Card({card, className}) {
  console.log("Props in Card:", { card, className });
  console.log('Card className:', className);

return (
  <div className={`card rounded-lg cards ${className}`}>
              <div className='card-img'>
                  <img src={card.thumbnail} alt={card.title} className="w-full h-40 object-cover rounded-lg"/>
              </div>
              <div className='gap-4 mb-2 p-2 mt-2'>
              <div className="video-infos flex justify-between text-xs">
                <div className="infos flex gap-2">
                  <div>
                  <img src={profileimg} className='rounded-full  h-7 w-7 border-1  border-blue-600' />
                  </div>
                 <div>
                 <h3 className="text-xs font-bold">{card.title}</h3>
                 <p className="text-xs text-gray-600">{card.channelName}</p>
                  <div className='flex gap-2 text-gray-600'>
                  <p className="text-sm text-gray-500 "> <span className='hover:text-gray-700'>{card.views}</span> • {card.uploadedAt}</p>
                  </div>
                 </div>
                  
                </div>
                <div className="dot">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
               
              </div>
              </div>
             
  </div>
);
}



