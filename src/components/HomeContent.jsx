import Layout from '../components/Layout'
import propTypes from 'prop-types'
import Sidebar from '../components/Sidebar'
import '../styles/Homecontent.css'

export default function HomeContent({filteredCard, shortCard, inputRef, setSelectedVideo}) {
  return (

    <section className='container h-screen flex'>
        <Sidebar />
        <Layout youtubecards={filteredCard}  youtubeshorts={shortCard} inputRef={inputRef} setSelectedVideo={setSelectedVideo}/> 
    </section>
  )
}

HomeContent.propTypes ={
  filteredCard: propTypes.array.isRequired,
  shortCard: propTypes.array.isRequired,
  inputRef:propTypes.object.isRequired,
  setSelectedVideo: propTypes.func.isRequired,
}