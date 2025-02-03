import PropTypes from 'prop-types';
import '../styles/Layout.css';
import LayoutHeader from './LayoutHeader';
import Card from './Card.jsx';
import Shorts from './Shorts.jsx';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/card.css';
import { useTag } from '../TagContext.jsx';

export default function Layout({ youtubecards, youtubeshorts, inputRef, setSelectedVideo }) {
  const { selectedtag } = useTag();

  const searchText = inputRef?.current?.value?.trim()?.toLowerCase(); // Get the search text from the input element to be used as a filter for the cards

  // Combine the filters: selectedtag and searchText
  let filtered = selectedtag === 'All' ? youtubecards : youtubecards.filter((card) => card.category === selectedtag); 
  // Apply the selected tag filter and display all cards if the tag is 'All' or the selected tag matches the card's category

  if (searchText) {
    filtered = filtered.filter((card) =>
      card.category.toLowerCase().includes(searchText) // Apply the search filter
    );
  }

  const halfwayIndex = Math.ceil(filterTags.length / 2);
  const firstHalfCards = filtered.slice(0, halfwayIndex);
  const secondHalfCards = filtered.slice(halfwayIndex);

  return (
    <section className='layout flex-grow ml-4'>
      <LayoutHeader />

      <div className="video-grid">
        {filtered.length > 0 ? (
          firstHalfCards.map((card) => (
            <div key={card.id} onClick={() => setSelectedVideo(card)} className='card-container'>
              <Card
                card={card}
                className={`${
                  searchText && card.category.toLowerCase().includes(searchText) ? 'search-highlight' : ''
                }`}
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

      <div className="video-grid">
        {secondHalfCards.map((card) => (
          <div key={card.id} onClick={() => setSelectedVideo(card)} className='card-container'>
            <Card
              card={card}
              className={`${
                searchText && card.category.toLowerCase().includes(searchText) ? 'search-highlight' : ''
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}


Layout.propTypes = {
  inputRef: PropTypes.object.isRequired,
  youtubecards: PropTypes.array.isRequired,
  youtubeshorts: PropTypes.array.isRequired,
  setSelectedVideo: PropTypes.func.isRequired,
};
