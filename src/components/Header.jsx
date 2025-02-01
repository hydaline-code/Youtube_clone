import logo from '../assets/YouTube_2024.svg';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faMicrophone,faUser, faAdd } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import '../styles/Header.css';

export default function Header({inputRef, handleFilter}) {

  return (
    <header className="header flex items-center justify-between p-2 pr-4  w-full shadow-md sticky top-0 left-0">

     <div className='logo flex items-center justify-around gap-0  pl-8 '> 
     <FontAwesomeIcon icon={faBars} className="text-xl" />
     <img src={logo} className=' mr-9 object-fit w-20' alt="" />
     </div>
      

    <div className="flex items-center justify-center w-full search">
      <div className="search-input flex items-center w-2/3 max-w-2xl focus:border-gray-500 ">
    
        <input
          type="text"
          ref= {inputRef}
          placeholder="Search"
          className="flex-grow p-2 border border-gray-300 rounded-l-full  focus:outline-none focus:border-blue-500 shadow-inner "
        />
        <button onClick={handleFilter} className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200 w-1/7">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500"  />
        </button>
      </div>
      
      <button className="ml-4 p-4 bg-gray-100 rounded-full hover:bg-gray-200 h-12 w-12">
        <FontAwesomeIcon icon={faMicrophone} className="text-gray-500 text-sm flex ml-1" />
      </button>
    </div>

    <div className="user flex items-center justify-around">
    <button className="ml-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 flex flex-row-reverse gap-1 text-right text-sm font-sans btn-create w-1/2">
        Create
        <FontAwesomeIcon icon={faAdd} className="text-stone-900  mt-1 text-base plus-icon" />
      </button>

      <button className="ml-4 p-3 rounded-full hover:bg-gray-200 h-10 w-10 flex ">
      <FontAwesomeIcon icon={faBell} className="text-stone-700 text-base border-stone-600"  />
      </button>

      <button className="ml-4 p-4 bg-gray-100 rounded-full hover:bg-gray-200 h-12 w-12">
        <FontAwesomeIcon icon={faUser} className="text-stone-900 text-sm flex ml-1" />
      </button>
    </div>
    </header>
  )
}

Header.propTypes = {
  inputRef: PropTypes.object.isRequired
}
