//import React from 'react'
import '../styles/Shorts.css'
import propTypes from 'prop-types';
import {faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Shorts({shortcard}) {
  return (
    <div className='mt-2 flex gap-2 flex-col'>
                   
                   <div className=''>
                        <img src={shortcard.thumbnail} alt={shortcard.titre} className=" rounded-lg"/>
                    </div>
                    <div className='gap-4 mb-2 p-2 mt-2'>
                    <div className="video-infos flex justify-between text-xs">
                       <div className="dot flex justify-between gap-4 pl-1 ">
                       <h3 className="text-xs font-bold">{shortcard.titre}</h3>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                      </div>
                    </div>
                    <div className='flex gap-2 text-gray-600'>
                        <p className="text-sm text-gray-500 "> <span className='hover:text-gray-700'>{shortcard.views}</span></p>
                        </div>
                    </div>
                   
        
    </div>
  )
}

Shorts.propTypes ={
  shortcard: propTypes.shape({
    id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    titre: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    views: propTypes.number.isRequired,

  }).isRequired,
}