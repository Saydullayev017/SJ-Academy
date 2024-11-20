import React from "react"; // Импортируем библиотеку React
import ContentRenderer from "./ContentRenderer"; // Импортируем компонент для рендеринга контента

function Lessonjs1({ title, content }) {
  return (
    <div className="text-display">
      <h2 className="text-2xl font-bold">{title}</h2> {/* Заголовок урока */}

      {/* 
      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          // Вставляем YouTube видео
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.youtube.com/embed/gqC0IZVAlsk?si=Tm5OcongyNxroQEo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>    
      </div> 
      */}
      
      {/* Рендерим контент с помощью компонента ContentRenderer */}
      <ContentRenderer content={content} />
    </div>
  );
}

export default Lessonjs1; // Экспортируем компонент Lessonjs1 для использования в других частях приложения