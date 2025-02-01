import '../styles/LayoutHeader.css'
import ButtonTag from '../components/ButtonTag'
import { generateCustomYouTubeCards } from '../utils/mockData';
import { createContext, useMemo, useState } from 'react';


export default function LayoutHeader() {
  
  
const Tags = useMemo(()=> generateCustomYouTubeCards(22),[]);
//console.log(Tags);

//console.log("ici");

const [selectedtag, setSelectedTag] = useState("All");

function handleTagClick(tag){ 
  setSelectedTag(tag);
}
console.log(selectedtag);

  return (
    <header className='layout-header flex gap-1 items-center'>  
        <div className=" scroll-bar flex gap-2 overflow-x-auto  scrollbar-hide scroll-smooth w-full overflow-hidden">
          <ButtonTag tag={{category: 'All'}} className="btn-all bg-slate-950 text-slate-50 w-12 font-sans" />
            {Tags.map((tag) => (
              <div key={tag.id} className="flex shrink-0">
             <ButtonTag tag={tag}  handleclick={()=>handleTagClick(tag)}/>
          </div> 
        ))}
    
        </div>
     
    </header>
  )
}
