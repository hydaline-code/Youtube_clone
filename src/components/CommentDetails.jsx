import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function CommentDetails() {
  return (
    <div className="comments-section">
    <FontAwesomeIcon icon={faUser} className="text-stone-900 text-lg" />
    <h3>Comments</h3>
    <p>Leave a comment...</p>
  </div>
  )
}
