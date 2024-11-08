import React, { useState, useEffect } from 'react';
import { Outlet, NavLink} from 'react-router-dom';
// import SearchResults from './SearchResults';
// import { 
//   CssDocumentFirst,
//   CssDocumentSecond,
//   CssDocumentТhird,
//   CssDocumentFourth,
//   CssDocumentFifth,
//   CssDocumentSixth,
//   CssDocumentSeventh,
//   CssDocumentEighth,
//   CssDocumentNinth,
//   CssDocumentTenth,
//   CssDocumentEleventh
// } from '../data/CssDocument';

function Css() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.toggle-button')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
    };
  }, [isSidebarOpen]);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     const filteredResults = [
//       ...CssDocumentFirst,
//       ...CssDocumentSecond,
//       ...CssDocumentТhird,
//       ...CssDocumentFourth,
//       ...CssDocumentFifth,
//       ...CssDocumentSixth,
//       ...CssDocumentSeventh,
//       ...CssDocumentEighth,
//       ...CssDocumentNinth,
//       ...CssDocumentTenth,
//       ...CssDocumentEleventh
//     ].filter(doc => 
//       doc.title?.toLowerCase().includes(term.toLowerCase()) || 
//       doc.content.some(item => item.value.toLowerCase().includes(term.toLowerCase()))
//     );
//     setResults(filteredResults);
//     setShowResults(term.length > 0 && filteredResults.length > 0);
//   };

//   const handleResultClick = (doc) => {
//     setSearchTerm('');
//     setShowResults(false);
//     navigate(doc.path);
//   };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className='container mx-auto flex h-screen pt-20'>
      {/* Sidebar */}
      <div className={`sidebar text-white p-4 h-full transition-transform duration-300 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:w-1/4 md:block fixed md:relative bg-neutral-900 z-20`}>
                <h1 className='border bg-neutral-900 text-center rounded '>CSS</h1>

          <nav>
              <ul>
                  <li className='pt-3'>
                      <NavLink 
                          to="./" 
                          // className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Синтаксис
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css2" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Блочная модель
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css3" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Контент Позиционирование
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css4" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Типы элементов
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css5" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Способы задания цветов
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css6" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Свойства шрифтов 
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css7" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Свойства текста 
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css8" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                        Фон
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css9" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Блочная верстка
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css10" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Flexbox
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css11" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                           Grid Layout
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css12" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Медиа-запросы
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css13" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Относительные единицы
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css14" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Анимации
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css15" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          Тени и Градиенты
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css16" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          БЭМ
                      </NavLink>
                  </li>
                  <li className='pt-3'>
                      <NavLink 
                          to="./css17" 
                          className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                      >
                          OOCSS
                      </NavLink>
                  </li>
              </ul>
          </nav>
          {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[759px] w-0.5 bg-neutral-700"></div> */}
      </div>

      {/* Main content */}
      <div className='content w-full md:w-3/4 p-4 h-full overflow-y-auto z-10 relative'>
          {/* Search Field */}
          {/* <div className="relative w-full mb-4">
              <input
                  type="text"
                  value={searchTerm}
                  placeholder="Поиск..."
                  onChange={(e) => handleSearch(e.target.value)}
                  className="p-2 border text-white bg-neutral-800 border-gray-600 rounded w-full"
                  onFocus={() => setShowResults(true)}
              />
              {showResults && (
                  <SearchResults 
                      results={results} 
                      onClose={() => setShowResults(false)} 
                      onResultClick={handleResultClick} 
                  />
              )}
          </div> */}
          <Outlet />
      </div>

      {/* Toggle Button */}
      <button 
          className='toggle-button fixed bottom-4 right-4 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center md:hidden z-30'
          onClick={toggleSidebar}
      >
          {isSidebarOpen ? '✖' : '☰'}
      </button>
    </main>
  );
}

export default Css;
