import React from 'react'
import '../styles/Buttontag.css'

export default function ButtonTag({tag, className}) {
  return (
    <div>
        <button className={`btn rounded-md p-1 bg-stone-100  text-sm m-2 text-stone-950 font-sans  ${className}`}>
          {tag.category}  
        </button>
    </div>
  )
}
