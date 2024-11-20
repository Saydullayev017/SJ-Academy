import React, { useState, useEffect } from 'react'; // Импортируем React и хуки useState и useEffect
import hljs from 'highlight.js'; // Импортируем библиотеку подсветки синтаксиса
import 'highlight.js/styles/github.css'; // Импорт стилей подсветки

const ContentRenderer = ({ content }) => {
    const [copyStatuses, setCopyStatuses] = useState({}); // Состояние для отслеживания статусов копирования кода

    // Функция для копирования текста в буфер обмена
    const copyToClipboard = (code, index) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopyStatuses((prev) => ({
                ...prev,
                [index]: 'nusxa olindi !', // Устанавливаем статус успешного копирования
            }));
            setTimeout(() => {
                setCopyStatuses((prev) => ({
                    ...prev,
                    [index]: '', // Сбрасываем статус через 2 секунды
                }));
            }, 2000);
        });
    };

    // Функция для рендеринга кода с подсветкой
    const renderCode = (code) => {
        return (
            <pre className="whitespace-pre-wrap text-sm md:text-base">
                <code className="language-js">{code}</code> {/* Указываем язык для подсветки */}
            </pre>
        );
    };

    // Эффект для инициализации подсветки после рендеринга контента
    useEffect(() => {
        hljs.highlightAll(); // Запускаем подсветку для всех кодов на странице
    }, [content]); // Эффект зависит от контента

    return (
        <div className="space-y-4">
            {content.map((item, index) => {
                switch (item.type) {
                    case 'text':
                        return <p key={index} className="text-gray-400 text-base md:text-lg">{item.value}</p>; // Рендерим текст
                    case 'header':
                        return <div key={index} className="text-white text-xl md:text-xl font-bold">{item.value}</div>; // Рендерим заголовок
                    case 'code':
                        return (
                            <div key={index} className="p-4 border border-gray-600 rounded overflow-auto">
                                {renderCode(item.value)} {/* Рендерим код с подсветкой */}
                                <div className="flex justify-end mt-2">
                                    <button
                                        onClick={() => copyToClipboard(item.value, index)} // Обработчик клика для копирования кода
                                        className="bg-gray-700 text-white text-xs md:text-sm px-2 py-1 rounded flex items-center"
                                    >
                                        {copyStatuses[index] || 'nusxa olish !'} {/* Отображаем статус копирования */}
                                        {copyStatuses[index] && <span className="ml-1 md:ml-2 text-xs md:text-sm">✔️</span>} {/* Иконка успешного копирования */}
                                    </button>
                                </div>
                            </div>
                        );
                    default:
                        return null; // Возвращаем null для неизвестных типов контента
                }
            })}
        </div>
    );
};

export default ContentRenderer; // Экспортируем компонент ContentRenderer для использования в других частях приложения