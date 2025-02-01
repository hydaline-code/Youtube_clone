import PropTypes from 'prop-types'
import '../styles/Buttontag.css'

export default function ButtonTag({tag, className, handleclick}) {
  return (
    <div>
        <button onClick={handleclick} className={`btn rounded-md p-1 bg-stone-100  text-sm m-2 text-stone-950 font-sans  ${className}`}>
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