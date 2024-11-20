import React, { useState, useEffect } from "react"; // Импортируем необходимые модули из React
import { Link } from "react-router-dom"; // Импортируем компонент Link для навигации

const Header = () => {
  // Состояние для отслеживания открытости меню
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Меняем состояние на противоположное
  };

  // Используем эффект для обработки кликов вне меню
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Проверяем, если клик был вне меню и кнопки
      if (
        isOpen && // Если меню открыто
        !event.target.closest(".menu-container") && // И клик не в контейнере меню
        !event.target.closest(".burger-button") // И клик не на кнопке-бургер
      ) {
        setIsOpen(false); // Закрываем меню
      }
    };

    document.addEventListener("click", handleOutsideClick); // Добавляем обработчик события клика

    return () => {
      document.removeEventListener("click", handleOutsideClick); // Убираем обработчик при размонтировании компонента
    };
  }, [isOpen]); // Эффект зависит от состояния isOpen

  return (
    <header
      className={`container mx-auto fixed top-0 left-0 right-0 text-white p-4 z-50 bg-neutral-900`}
    >
      {/* Основной контейнер заголовка */}
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-mono">SJ</h1> {/* Заголовок сайта */}

        <div className="md:hidden">
          {/* Кнопка-бургер для мобильных устройств */}
          <button
            onClick={toggleMenu} // Обработчик клика для переключения меню
            className="burger-button focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Иконка бургер-меню */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7" // Линии бургер-меню
              />
            </svg>
          </button>
        </div>

        {/* Навигационное меню */}
        <nav
          className={`menu-container md:flex ${isOpen ? "block" : "hidden"}`} 
          // Отображаем меню в зависимости от состояния isOpen
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-lg md:text-xl font-serif">
            <li>
              <Link
                className="hover:text-lime-800"
                to="/" // Ссылка на главную страницу
                onClick={() => setIsOpen(false)} // Закрываем меню при клике
              >
                Kirish {/* Текст ссылки */}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-lime-800"
                to="/js/js1" // Ссылка на страницу JavaScript
                onClick={() => setIsOpen(false)} // Закрываем меню при клике
              >
                JavaScript {/* Текст ссылки */}
              </Link>
            </li>

                                    {/* <li>
              <Link className="hover:text-lime-800" to="/algo" onClick={() => setIsOpen(false)}>
                Алгоритмы
              </Link>
            </li> */}

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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; // Экспортируем компонент Header для использования в других частях приложения



