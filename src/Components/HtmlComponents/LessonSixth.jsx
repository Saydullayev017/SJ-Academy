import React from 'react'
import ContentRenderer from './ContentRenderer'
function LessonSixth({ title, content }) {
    return (
      <div className="text-display">
      <h2>{title}</h2>
      <ContentRenderer content={content} />
    </div>
    )
  }
  

export default LessonSixth