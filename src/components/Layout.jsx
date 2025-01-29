import propTypes from 'prop-types'
import '../styles/Layout.css'
import LayoutHeader from './LayoutHeader'
import Card from './Card.jsx'
import Shorts from './Shorts.jsx'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/card.css';

export default function Layout({youtubecards, youtubeshorts, inputtext, setSelectedVideo}) {

  console.log("Input text:", inputtext);

  const halfwayIndex = Math.ceil(youtubecards.length / 2);
  const firstHalfCards = youtubecards.slice(0, halfwayIndex);
  const secondHalfCards = youtubecards.slice(halfwayIndex);

  return (
    <section className='layout flex-grow ml-4'>

      <LayoutHeader />

<div className="video-grid">
        {youtubecards.length > 0 ? (
          firstHalfCards.map((card) => (
            <div key={card.id}
            onClick={() => setSelectedVideo(card)}
            // className={`card-container ${
            //   inputtext &&
            //    // Ensure inputtext is not empty or just spaces
            //   card.category.toLowerCase().includes(inputtext.toLowerCase())
            //     ? 'filtered-card'
            //     : ''
            // }`}>
              className='card-container'>
              <Card card={card}
              className={`${
                inputtext &&
                card.category.toLowerCase().includes(inputtext.toLowerCase())
                  ? 'search-highlight'
                  : ''}`
                }
              />
            </div>
          
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      

<div className='mr-8'>
        <h2>
          <FontAwesomeIcon icon={faCompass} className="text-gray-500 text-lg mb-1" /> Shorts
        </h2>
      <div className="shorts p-2 ml-2">
        {youtubeshorts.map((short) => (
          <div key={short.id} className="short-card mt-2">
            <Shorts shortcard={short} />
          </div>
        ))}
      </div>
</div>

      {/* <div className="video-grid">
        {secondHalfCards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedVideo(card)}
            className={`card-container ${
              inputtext &&  
              card.category.toLowerCase().includes(inputtext.toLowerCase())
                ? 'filtered-card'
                : ''
            }`}
          >
            <Card card={card} />
          </div>
        ))}
      </div> */}

<div className="video-grid">
  {secondHalfCards.map((card) => (
    <div
      key={card.id}
      
      onClick={() => setSelectedVideo(card)}
      className='card-container'
      // className={`card-container ${
      //   inputtext &&
      //   card.category.toLowerCase().includes(inputtext.toLowerCase())
      //     ? 'filtered-card search-result'
      //     : ''
      // }`}
    >
      <Card card={card}
      
        className={`${
          inputtext &&
        card.category.toLowerCase().includes(inputtext.toLowerCase())
          ? 'search-highlight'
          : ''}`
        }
      />
    </div>
  ))}
</div>
    </section>
  )
}

Layout.propTypes = {
  inputtext: propTypes.string.isRequired,
  youtubecards: propTypes.array.isRequired,
  youtubeshorts: propTypes.array.isRequired,
  setSelectedVideo: propTypes.func.isRequired,
}