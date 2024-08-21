import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Html = () => {
  return (
    <div className='container mx-auto flex flex-row h-screen pt-20'>
      {/* Сайдбар */}
      <div className='sidebar text-white w-1/4 p-4 h-full'>
        <h1>HTML</h1>
        <nav>
          <li className='pt-3'>
            <Link to="/">
              Lesson1
            </Link>
          </li>

          <li className='pt-3'>
            <Link to="/les2">
              Lesson2
            </Link>
          </li>

          <li className='pt-3'>
            <Link to="/les3">
              Lesson3
            </Link>
          </li>

          <li className='pt-3'>
            <Link to="/les4">
              Lesson4
            </Link>
          </li>

          <li className='pt-3'>
            <Link to="/les5">
              Lesson5
            </Link>
          </li>
        </nav>

      </div>
      
      {/* Основной контент */}
      <div className='content text-white w-3/4 p-4 h-full overflow-y-auto'>
        <h1>Основной контент</h1>
        <Outlet />

      </div>
    </div>
  );
};

export default Html;
