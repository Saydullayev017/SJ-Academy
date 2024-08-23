import React from 'react'

function Lesson1({ title, content }) {
  return (
    <div className="text-display">
    <h2>{title}</h2>
    <p>{content}</p>
</div>
  )
}

export default Lesson1