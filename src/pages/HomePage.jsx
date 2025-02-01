import { useMemo, useRef, useState } from 'react'
import propTypes from 'prop-types'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'
import { youtubeShortData } from '../utils/Shorts.js'
import { generateCustomYouTubeCards } from '../utils/mockData'
import TagProvider from '../TagContext';

export default function HomePage({setSelectedVideo}) {

  const cards = useMemo(()=> generateCustomYouTubeCards(8), []);
  const shorts = youtubeShortData(5);

  const [filteredCards, setFilteredCards] = useState(cards);
  const [showShorts, setShowShorts] = useState(shorts);

  const inputRef = useRef(null);

  const handleFilter = () => {
    if (!inputRef.current) return; // Prevent errors if inputRef is null
  
    let newInput = inputRef.current.value.trim();
    if (newInput === '') {
      setFilteredCards(cards);
      setShowShorts(shorts);
    } else {
      const filtered = cards.filter((card) => 
        card.category.toLowerCase().includes(newInput.toLowerCase())
      );
      setFilteredCards(filtered);
      setShowShorts([]);
    }
  };

  return (
    <main>
      <Header inputRef={inputRef} handleFilter={handleFilter} />
        <TagProvider>
          <HomeContent filteredCard={filteredCards} shortCard={showShorts} inputRef={inputRef} setSelectedVideo={setSelectedVideo}/>
        </TagProvider>
    </main>
  )
}

HomePage.propTypes={
  setSelectedVideo:propTypes.func.isRequired,
};