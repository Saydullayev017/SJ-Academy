import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Html = () => {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className='container mx-auto flex h-screen pt-20'>
      {/* Sidebar */}
      <div className={`sideba text-white w-1/4 p-4 h-full transition-transform duration-300 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:w-1/4 md:block fixed md:relative bg-neutral-900`}>
        <h1>HTML</h1>
        <nav>
          <ul>
            <li className='pt-3'>
              <Link to="/">Вступления</Link>
            </li>

            <li className='pt-3'>
              <Link to="/les2">Структура HTML-документа</Link>
            </li>
            
            <li className='pt-3'>
              <Link to="/les3">Базовые теги HTML</Link>
            </li>
            
            <li className='pt-3'>
              <Link to="/les4">Атрибуты тегов HTML</Link>
            </li>
            
            <li className='pt-3'>
              <Link to="/les5">Семантическая верстка</Link>
            </li>
            
            <li className='pt-3'>
              <Link to="/les6">Теги для создания форм </Link>
            </li>

            <li className='pt-3'>
              <Link to="/les7">Теги для создания таблиц в HTML</Link>
            </li>

            <li className='pt-3'>
              <Link to="/les8">Вставка видео и аудио</Link>
            </li>

            <li className='pt-3'>
              <Link to="/les9">Фреймы в HTML</Link>
            </li>

            <li className='pt-3'>
              <Link to="/les10">Lesson10</Link>
            </li>

            <li className='pt-3'>
              <Link to="/les11">Lesson11</Link>
            </li>

          </ul>
        </nav>
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2 h-[759px] w-0.5 bg-neutral-700"></div>
      </div>

      {/* Main content */}
      <div className='content text-white w-full md:w-3/4 p-4 h-full overflow-y-auto'>
        <Outlet />
      </div>

      {/* Toggle Button */}
      <button 
        className='fixed bottom-4 right-4 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center md:hidden' 
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? '✖' : '☰'}
      </button>
    </main>
  );
};

export default Html;
