//import React from 'react'
import Header from '../components/Header'
import propTypes from 'prop-types';
//import Layout from '../components/Layout'
import '../styles/detailpage.css'
import { faArrowCircleLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function DetailPage({video, setSelectedVideo }) {
  return (
    <>
     <Header />
    <section className="detail-page min-h-screen bg-gray-100 p-4">
      <button
        className="back-button  px-2 py-2 bg-stone-100 text-white rounded-full"
        onClick={() => setSelectedVideo(null)} 
      >
       <FontAwesomeIcon icon={faArrowCircleLeft} className="text-stone-900 text-lg" />
      </button>

      <div className="detail-layout grid grid-cols-3 gap-4 p-4">
       
        <div className="col-span-2">
          <div className="video-player">
            <img src={video.thumbnail} alt="" className='' />
          </div>
          <div className="comments-section">
            <FontAwesomeIcon icon={faUser} className="text-stone-900 text-lg" />
            <h3>Comments</h3>
            <p>Leave a comment...</p>
          </div>
        </div>

        <div className="reduced-homepage">
          <h3>Recommended Videos</h3>
          <p>Display other videos here...</p>
        </div>
      </div>
    </section>
    </>
  );
}

DetailPage.propTypes ={
  video: propTypes.object.isReqired,
  setSelectedVideo:propTypes.func.isRequired,
}