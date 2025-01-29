import React, { useState } from 'react'
import '../styles/sidebarbtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function SidebarButton({ key, label, icon, subcategories, className }) {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle((prev) => !prev);
  }
  
  return (
    <div className='pr-2 mr-2'>
      <div>
        <button key={key} className={`sidebar-btn flex justify-between  p-2 hover:bg-gray-200 rounded-md flex-row-reverse mt-1 w-1/9 text-stone-900 text-xs font-sans ${className}`}> 
        <span className='flex ml-8'>{label}</span>
        <FontAwesomeIcon icon={icon} className='ml-2 pb-0' />
        </button>
        </div>
        {subcategories && subcategories.length > 0 && ( // if subcategories exist, render them
          <div className='subcategories'>
            {subcategories.map((subcategory) => (
              <button key={subcategory.id} className='subcategories-btn flex justify-between  p-2 hover:bg-gray-200 rounded-md flex-row-reverse mt-1 w-1/9'>
              <span className='flex ml-8'>{subcategory.label}</span>
              <FontAwesomeIcon icon={subcategory.icon} />
              </button>
            ))}
          </div>
        )}  
    </div>

  )
}

