import React from 'react'

function LessonFirst({ title, content }) {
  return (
    <div className="text-display">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default LessonFirst