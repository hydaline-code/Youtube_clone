import React from 'react'
import Layout from '../components/Layout'
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
