import React from 'react'
import ContentRenderer from './ContentRenderer'

function Lessonjs30({title, content}) {
  return (
    <div className="text-display">
    <h2 className="text-2xl font-bold">{title}</h2>
          {/* <div className="container mx-auto p-4">
        <div className="flex justify-center">
        // Youtube ga kirib ifrem kopya qlish kere 
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.youtube.com/embed/gqC0IZVAlsk?si=Tm5OcongyNxroQEo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>    
      </div> */}
    <ContentRenderer content={content} />
</div>
  )
}

export default Lessonjs30