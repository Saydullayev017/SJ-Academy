import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Проверяем, если клик был вне меню и кнопки
      if (isOpen && !event.target.closest('.menu-container') && !event.target.closest('.burger-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className={`container mx-auto fixed top-0 left-0 right-0 text-white p-4 z-50 bg-neutral-900`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-mono">SJ</h1>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="burger-button focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <nav className={`menu-container md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-lg md:text-xl font-serif">
            {/* <li>
              <Link className="hover:text-lime-800" to="/" onClick={() => setIsOpen(false)}>
                HTML
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime-800" to="/css" onClick={() => setIsOpen(false)}>
                CSS
              </Link>
            </li> */}
            <li>
              <Link className="hover:text-lime-800" to="/js" onClick={() => setIsOpen(false)}>
                JavaScript
              </Link>
            </li>
            {/* <li>
              <Link className="hover:text-lime-800" to="/algo" onClick={() => setIsOpen(false)}>
                Алгоритмы
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
