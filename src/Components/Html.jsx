import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import SearchResults from './SearchResults';
import { 
  HtmlDocumentFirst,
  HtmlDocumentSecond,
  HtmlDocumenеТhird,
  HtmlDocumentFourth,
  HtmlDocumentFifth,
  HtmlDocumentSixth,
  HtmlDocumentSeventh,
  HtmlDocumentEighth,
  HtmlDocumentNinth,
  HtmlDocumentTenth,
  HtmlDocumentEleventh
} from '../data/HtmlDocument';

const Html = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (term) => {
        setSearchTerm(term);
        const filteredResults = [...HtmlDocumentFirst, ...HtmlDocumentSecond, ...HtmlDocumenеТhird, ...HtmlDocumentFourth, ...HtmlDocumentFifth, ...HtmlDocumentSixth, ...HtmlDocumentSeventh, ...HtmlDocumentEighth, ...HtmlDocumentNinth, ...HtmlDocumentTenth, ...HtmlDocumentEleventh].filter(doc => 
            doc.title?.toLowerCase().includes(term.toLowerCase()) || 
            doc.content.some(item => item.value.toLowerCase().includes(term.toLowerCase()))
        );
        setResults(filteredResults);
        setShowResults(term.length > 0 && filteredResults.length > 0);
    };

    const handleResultClick = (doc) => {
        setSearchTerm('');
        setShowResults(false);
        navigate(doc.path);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <main className='container mx-auto flex h-screen pt-20'>
            {/* Sidebar */}
            <div className={`sidebar text-white p-4 h-full transition-transform duration-300 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0 md:w-1/4 md:block fixed md:relative bg-neutral-900 z-20`}>

                <h1>HTML</h1>
                <nav>
                    <ul>
                        <li className='pt-3'>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Вступления
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="/les2" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Структура HTML-документа
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="/les3" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Базовые теги HTML
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="/les4" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Атрибуты тегов HTML
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="/les5" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Семантическая верстка
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="/les6" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Теги для создания форм
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="/les7" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Теги для создания таблиц в HTML
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="/les8" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Вставка видео и аудио
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="/les9" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Фреймы в HTML
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="/les10" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Lesson10
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="/les11" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Lesson11
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[759px] w-0.5 bg-neutral-700"></div>
            </div>

            {/* Main content */}
            <div className='content w-full md:w-3/4 p-4 h-full overflow-y-auto z-10 relative'>
                {/* Search Field */}
                <div className="relative w-full mb-4">
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
                </div>
                <Outlet />
            </div>

            {/* Toggle Button */}
            <button 
                className='fixed bottom-4 right-4 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center md:hidden z-30'
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? '✖' : '☰'}
            </button>
        </main>
    );
};

export default Html;
