import { useMemo, useRef, useState } from 'react'
import propTypes from 'prop-types'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'
import { youtubeShortData } from '../utils/Shorts.js'
import { generateCustomYouTubeCards } from '../utils/mockData'

export default function HomePage({setSelectedVideo}) {
  //const [inputtext, setInputText] = useState('');
  const inputRef = useRef(null);

  // function handleEdit(event) {
  //   const inputValue = event.target.value;
  //   setInputText(inputValue);  // Update the state
  // }

  const cards = useMemo(()=> generateCustomYouTubeCards(8), []);
  const shorts = youtubeShortData(5);

  const [filteredCards, setFilteredCards] = useState(cards);
  const [showShorts, setShowShorts] = useState(shorts);

  // const handleFilter = (inputtext) => {
  //   if (inputtext.trim() === '') {
  //     setFilteredCards(cards); 
  //     setShowShorts(shorts); 
  //   } else {
  //     const filteredCards = cards.filter((card) =>
  //       card.category.toLowerCase().includes(inputtext.toLowerCase()) 
  //     );
  //     setFilteredCards(filteredCards);
  //     setShowShorts([]); // Reset to no shorts
  //   }
  // };


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

  // const handlesearch = () =>{
  //   const searchText = inputRef.current.value;
  //   const filtered = cards.filter((card) => card.category.toLowerCase().includes(searchText.toLowerCase()));
  //   setFilteredCards(filtered);
  //   setShowShorts([]);
  // }

  return (
    <main >
        <Header inputRef={inputRef} handleFilter={handleFilter} />
        <HomeContent filteredCard={filteredCards} shortCard={showShorts} setSelectedVideo={setSelectedVideo}/>
    </main>
  )
}

HomePage.propTypes={
  setSelectedVideo:propTypes.func.isRequired,
};