import Layout from '../components/Layout'
import PropTypes from 'prop-types'
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
  filteredCard: PropTypes.array.isRequired,
  shortCard: PropTypes.array.isRequired,
  inputRef:PropTypes.object.isRequired,
  setSelectedVideo: PropTypes.func.isRequired,
}