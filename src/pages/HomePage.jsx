import React, { useMemo, useState } from 'react'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'
import { youtubeShortData } from '../utils/Shorts.js'
import { generateCustomYouTubeCards } from '../utils/mockData'

export default function HomePage({setSelectedVideo}) {
  const [inputtext, setInputText] = useState('');

  function handleEdit(event) {
    const inputValue = event.target.value;
    setInputText(inputValue);   // Update the state
  }

  const cards = useMemo(()=> generateCustomYouTubeCards(8), []);
 // const cards = generateCustomYouTubeCards(8);
  //console.log(cards);
  const shorts = youtubeShortData(5);

  const [filteredCards, setFilteredCards] = useState(cards);
  const [showShorts, setShowShorts] = useState(shorts);

  const handleFilter = (inputtext) => {
    if (inputtext.trim() === '') {
      setFilteredCards(cards); 
      setShowShorts(shorts); 
    } else {
      const filteredCards = cards.filter((card) =>
        card.category.toLowerCase().includes(inputtext.toLowerCase()) 
      );
      setFilteredCards(filteredCards);
      setShowShorts([]); // Reset to no shorts
    }
  };

  return (
    <main >
        <Header onfilter={handleFilter} handleEdit={handleEdit} inputtext={inputtext} setinputtext={setInputText} />
        <HomeContent filteredCard={filteredCards} shortCard={showShorts} setSelectedVideo={setSelectedVideo} inputtext={inputtext}/>
    </main>
  )
}
