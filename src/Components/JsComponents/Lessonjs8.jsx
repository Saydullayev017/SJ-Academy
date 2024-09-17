import React from 'react'
import ContentRenderer from './ContentRenderer'

function Lessonjs8({title, content}) {
  return (
    <div className="text-display">
    <h2 className="text-2xl font-bold">{title}</h2>
    <ContentRenderer content={content} />
</div>
  )
}

export default Lessonjs8