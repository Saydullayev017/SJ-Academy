import React, { useState, useEffect } from 'react'; // Импортируем React и хуки useState и useEffect
import { Outlet, NavLink } from 'react-router-dom'; // Импортируем Outlet и NavLink для маршрутизации

const Html = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Состояние для управления видимостью сайдбара

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Проверяем, был ли клик вне сайдбара и кнопки переключения
            if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.toggle-button')) {
                setIsSidebarOpen(false); // Закрываем сайдбар
            }
        };

        document.addEventListener('pointerdown', handleOutsideClick); // Добавляем обработчик события клика

        return () => {
            document.removeEventListener('pointerdown', handleOutsideClick); // Убираем обработчик при размонтировании
        };
    }, [isSidebarOpen]); // Эффект зависит от состояния isSidebarOpen

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev); // Переключаем состояние сайдбара
    };

    return (
        <main className='container mx-auto flex h-screen pt-16'>
            {/* Sidebar */}
            <div className={`sidebar text-white p-4 h-full transition-transform duration-300 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0 md:w-1/4 md:block fixed md:relative bg-neutral-900 z-20 overflow-y-auto`}>
                <h1 className='border bg-neutral-900 text-center rounded '>JavaScript</h1>
                <nav>
                    <ul>
                        {['Asoslar', 'Massivlar', "Ob'ektlar", 'Shartlar', 'Halqa', 'Standart Metodlar', 
                          'Foydalanuvchi funktsiyalari', "O'zgaruvchan funktsiyalar", 'Funktsiya turlari', 
                          'Ichki funktsiyalar', "Yopish 'closures'", 'IIFE', 'Rekursiya', 
                          'Tarjima usullari', 'Spread operatori', 'Rest operatori', 
                          'Destruktizatsiya', 'DOM', 'Atributlar', 'Stilizatsiya', 
                          'Qidiruv', 'Tugunlar', 'Forma', 'Dropdown lists', 
                          'Event Obyekti', 'Kontekst', 'Taymerlar', 
                          'Elementlarni manipulyatsiya qilish', 'Amaliyot', 
                          'Funktsiyalar va DOM', 'Clouser orqli modullar']
                        .map((item, index) => (
                            <li key={index} className='pt-3'>
                                <NavLink 
                                    to={`./js${index + 1}`} // Генерируем путь для каждой ссылки
                                    className={({ isActive }) => (isActive ? 'text-blue-400 font-bold' : 'text-white')}
                                >
                                    {item} {/* Название элемента меню */}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Main content */}
            <div className='content w-full md:w-3/4 p-4 h-full overflow-y-auto z-10 relative'>
                <Outlet /> {/* Вставляем вложенные маршруты */}
            </div>

            {/* Toggle Button */}
            <button 
                className='toggle-button fixed bottom-4 right-4 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center md:hidden z-30'
                onClick={toggleSidebar} // Обработчик клика для переключения сайдбара
            >
                {isSidebarOpen ? '✖' : '☰'} {/* Изменяем текст кнопки в зависимости от состояния сайдбара */}
            </button>
        </main>
    );
};

export default Html; // Экспортируем компонент Html для использования в других частях приложения