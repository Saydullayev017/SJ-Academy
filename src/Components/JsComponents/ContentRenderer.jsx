import React, { useState, useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Импорт стилей подсветки

const ContentRenderer = ({ content }) => {
    const [copyStatuses, setCopyStatuses] = useState({});

    const copyToClipboard = (code, index) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopyStatuses((prev) => ({
                ...prev,
                [index]: 'nusxa olindi !',
            }));
            setTimeout(() => {
                setCopyStatuses((prev) => ({
                    ...prev,
                    [index]: '',
                }));
            }, 2000); // Сброс статуса через 2 секунды
        });
    };

    const renderCode = (code) => {
        return (
            <pre className="whitespace-pre-wrap text-sm md:text-base">
                <code className="language-js">{code}</code> {/* Укажите язык для подсветки */}
            </pre>
        );
    };

    useEffect(() => {
        hljs.highlightAll(); // Инициализация подсветки после рендеринга
    }, [content]);

    return (
        <div className="space-y-4">
            {content.map((item, index) => {
                switch (item.type) {
                    case 'text':
                        return <p key={index} className="text-gray-400 text-base md:text-lg">{item.value}</p>;
                    case 'header':
                        return <div key={index} className="text-white text-xl md:text-xl font-bold">{item.value}</div>;
                    case 'code':
                        return (
                            <div key={index} className="p-4 border border-gray-600 rounded overflow-auto">
                                {renderCode(item.value)}
                                <div className="flex justify-end mt-2">
                                    <button
                                        onClick={() => copyToClipboard(item.value, index)}
                                        className="bg-gray-700 text-white text-xs md:text-sm px-2 py-1 rounded flex items-center"
                                    >
                                        {copyStatuses[index] || 'nusxa olish !'}
                                        {copyStatuses[index] && <span className="ml-1 md:ml-2 text-xs md:text-sm">✔️</span>}
                                    </button>
                                </div>
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default ContentRenderer;


