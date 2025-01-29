import '../styles/LayoutHeader.css'
import ButtonTag from '../components/ButtonTag'
import { generateCustomYouTubeCards } from '../utils/mockData';


export default function LayoutHeader() {
  
const Tags = generateCustomYouTubeCards(22);
  return (
    <header className='layout-header flex gap-1 items-center'>  
        <div className=" scroll-bar flex gap-2 overflow-x-auto  scrollbar-hide scroll-smooth w-full overflow-hidden">
          <ButtonTag tag={{category: 'All'}} className="btn-all bg-slate-950 text-slate-50 w-12 font-sans" />
            {Tags.map((tag) => (
              <div key={tag.id} className="flex shrink-0">
             <ButtonTag tag={tag}/>
          </div> 
        ))}
    
        </div>
     
    </header>
  )
}
