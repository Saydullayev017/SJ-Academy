import React, { useState, useEffect } from 'react';
import { Outlet, NavLink} from 'react-router-dom';
// import SearchResults from './SearchResults';
// import { 
//   JsDocumentFirst,
//   JsDocumentSecond,
//   JsDocumentТhird,
//   JsDocumentFourth,
//   JsDocumentFifth,
//   JsDocumentSixth,
//   JsDocumentSeventh,
//   JsDocumentEighth,
//   JsDocumentNinth,
//   JsDocumentTenth,
//   JsDocumentEleventh,
//   JsDocumentTwelfth,
//   JsDocumentThirteenth,
//   JsDocumentFourteenth,
//   JsDocumentFifteenth,
//   JsDocumentSixteenth,
//   JsDocumentSeventeenth
// } from '../data/JsDocument';

const Html = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const [searchTerm, setSearchTerm] = useState('');
    // const [results, setResults] = useState([]);
    // const [showResults, setShowResults] = useState(false);
    // const navigate = useNavigate();

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

    // const handleSearch = (term) => {
    //     setSearchTerm(term);
    //     const filteredResults = [...JsDocumentFirst, ...JsDocumentSecond, ...JsDocumentТhird, ...JsDocumentFourth, ...JsDocumentFifth, ...JsDocumentSixth, ...JsDocumentSeventh, ...JsDocumentEighth, ...JsDocumentNinth, ...JsDocumentTenth, ...JsDocumentEleventh, ...JsDocumentTwelfth, ...JsDocumentThirteenth, ...JsDocumentFourteenth, ...JsDocumentFifteenth, ...JsDocumentSixteenth, ...JsDocumentSeventeenth].filter(doc => 
    //         doc.title?.toLowerCase().includes(term.toLowerCase()) || 
    //         doc.content.some(item => item.value.toLowerCase().includes(term.toLowerCase()))
    //     );
    //     setResults(filteredResults);
    //     setShowResults(term.length > 0 && filteredResults.length > 0);
    // };

    // const handleResultClick = (doc) => {
    //     setSearchTerm('');
    //     setShowResults(false);
    //     navigate(doc.path);
    // };

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <main className='container mx-auto flex h-screen pt-20'>
            {/* Sidebar */}
            <div className={`sidebar text-white p-4 h-full transition-transform duration-300 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0 md:w-1/4 md:block fixed md:relative bg-neutral-900 z-20`}>

                <h1 className='border bg-neutral-900 text-center rounded '>HTML</h1>
                <nav>
                    <ul>
                        <li className='pt-3'>
                            <NavLink 
                                to="./" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                переменные и типы данных
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js2" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Операторы
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js3" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                3
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js4" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                4
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js5" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                5
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js6" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                6
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js7" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                7
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js8" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                8
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js9" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                9
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js10" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                10
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js11" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                11
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js12" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                12
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js13" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                13
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js14" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                14
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js15" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                15
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js16" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                16
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                17
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
};

export default Html;
