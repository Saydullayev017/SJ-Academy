import React from 'react'
import ContentRenderer from './ContentRenderer'

function Lessonjs13({title, content}) {
  return (
    <div className="text-display">
    <h2 className="text-2xl font-bold">{title}</h2>
    <ContentRenderer content={content} />
</div>
  )
}

export default Lessonjs13