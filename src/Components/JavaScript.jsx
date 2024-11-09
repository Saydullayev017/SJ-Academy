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

                <h1 className='border bg-neutral-900 text-center rounded '>JavaScript</h1>
                <nav>
                    <ul>
                        <li className='pt-3'>
                            <NavLink 
                                to="./" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Asoslar
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js2" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Massivlar
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js3" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Ob'ektlar
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js4" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Shartlar
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js5" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Halqa
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js6" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Standart Metodlar
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js7" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Foydalanuvchi funktsiyalari
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js8" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                O'zgaruvchan funktsiyalar
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js9" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Funktsiya turlari
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js10" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Ichki funktsiyalar
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js11" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Yopish 'closures'
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js12" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                IIFE
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js13" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Rekursiya
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js14" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Tarjima usullari
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js15" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Spread operatori
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js16" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Rest operatori
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Destruktizatsiya
                            </NavLink>
                        </li>
{/* 
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                DOM
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Atributlar
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Stilizatsiya
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Qidiruv
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Tugunlar
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Forma
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Dropdown lists
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Event Obyekti
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Kontekst
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Taymerlar
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Elementlarni manipulyatsiya qilish
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Amaliyot
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Funktsiyalar va DOM
                            </NavLink>
                        </li>
                        <li className='pt-3'>
                            <NavLink 
                                to="./js17" 
                                className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                            >
                                Clouser orqli modullar
                            </NavLink>
                        </li> */}
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
