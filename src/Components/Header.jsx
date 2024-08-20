import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`container mx-auto fixed top-0 left-0 right-0 text-white p-4 z-10 ${isOpen ? 'bg-neutral-900' : 'bg-neutral-900'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-mono">SJ-Cadamy</h1>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
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

        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-lg md:text-xl font-serif">
            <li>
              <Link className="hover:text-lime-800" to="/">HTML</Link>
            </li>
            <li>
              <Link className="hover:text-lime-800" to="/css">CSS</Link>
            </li>
            <li>
              <Link className="hover:text-lime-800" to="/js">JavaScript</Link>
            </li>
            <li>
              <Link className="hover:text-lime-800" to="/algo">Алгоритмы</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
