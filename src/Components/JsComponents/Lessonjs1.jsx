import React from 'react'
import ContentRenderer from './ContentRenderer'
import YouTubeEmbed from './YouTubeEmbed';

function Lessonjs1({title, content}) {
  return (
    <div className="text-display">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Мое видео с YouTube</h1>
            <YouTubeEmbed embedId="gOkChJITdaU" />
        </div>
      <ContentRenderer content={content} />
    </div>
  )
}

export default Lessonjs1