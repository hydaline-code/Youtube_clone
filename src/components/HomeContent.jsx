import Layout from '../components/Layout'
import propTypes from 'prop-types'
import Sidebar from '../components/Sidebar'
import '../styles/Homecontent.css'

export default function HomeContent({filteredCard, shortCard, inputtext, setSelectedVideo}) {
  return (
    <section className='container h-screen flex'>
        <Sidebar />
        <Layout youtubecards={filteredCard}  youtubeshorts={shortCard} inputtext={inputtext} setSelectedVideo={setSelectedVideo}/> 
       
    </section>
  )
}

HomeContent.propTypes ={
  filteredCard: propTypes.array.isRequired,
  shortCard: propTypes.array.isRequired,
  inputtext: propTypes.string.isRequired,
  setSelectedVideo: propTypes.func.isRequired,
}