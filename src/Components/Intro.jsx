import React, { useState, useEffect } from 'react'; // Импортируем React и хуки useState и useEffect

const Intro = () => {
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

    return (
        <main className='container mx-auto flex h-screen pt-20'>
            {/* Здесь можно добавить контент для страницы Intro */}
        </main>
    );
};

export default Intro; // Экспортируем компонент Intro для использования в других частях приложения