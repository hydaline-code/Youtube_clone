import './App.css'
import { useState } from 'react'
import './index.css'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'



function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
  <div className="App">
    {selectedVideo ? (
        <DetailPage video={selectedVideo} setSelectedVideo={setSelectedVideo} />
      ) : (
        <HomePage setSelectedVideo={setSelectedVideo} />
      )}
    {/* <HomePage /> */}
    </div>
  )
}

export default App
