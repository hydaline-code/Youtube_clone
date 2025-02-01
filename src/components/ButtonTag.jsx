import PropTypes from 'prop-types'
import '../styles/Buttontag.css'
import { useTag } from '../TagContext'


export default function ButtonTag({tag, className}) {

  const {handleTagClick} = useTag();

  return (
    <div>
        <button  onClick={() => handleTagClick(tag.category)} 
        className={`btn rounded-md p-1 bg-stone-100  text-sm m-2 text-stone-950 font-sans  ${className}`}>
          {tag.category}
        </button>
    </div>
  )
}

ButtonTag.propTypes={
  tag: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
}