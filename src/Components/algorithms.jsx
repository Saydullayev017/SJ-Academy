import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

function Algorithms() {
    // State to manage sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
  return (
    <main className='container mx-auto flex h-screen pt-20'>
      {/* Sidebar */}
      <div className={`sidebar text-white w-1/4 p-4 h-full transition-transform duration-300 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:w-1/4 md:block fixed md:relative bg-neutral-900`}>
        <h1>HTML</h1>
        <nav>
          <ul>
            <li className='pt-3'>
              <Link to="/">Lesson1</Link>
            </li>

            <li className='pt-3'>
              <Link to="/les2">Lesson2</Link>
            </li>
            
            <li className='pt-3'>
              <Link to="/les3">Lesson3</Link>
            </li>
            
            <li className='pt-3'>
              <Link to="/les4">Lesson4</Link>
            </li>
            
            <li className='pt-3'>
              <Link to="/les5">Lesson5</Link>
            </li>
            
            <li className='pt-3'>
              <Link to="/les6">Lesson6</Link>
            </li>

            <li className='pt-3'>
              <Link to="/les7">Lesson7</Link>
            </li>

            <li className='pt-3'>
              <Link to="/les8">Lesson8</Link>
            </li>

            <li className='pt-3'>
              <Link to="/les9">Lesson9</Link>
            </li>

            <li className='pt-3'>
              <Link to="/les10">Lesson10</Link>
            </li>

            <li className='pt-3'>
              <Link to="/les11">Lesson11</Link>
            </li>

          </ul>
        </nav>
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
  )
}

export default Algorithms