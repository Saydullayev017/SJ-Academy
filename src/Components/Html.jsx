import React, { useState, useEffect } from 'react';
import { Outlet, NavLink} from 'react-router-dom';


const Html = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


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
                    </ul>
                </nav>
            </div>

            {/* Main content */}
            <div className='content w-full md:w-3/4 p-4 h-full overflow-y-auto z-10 relative'>
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
