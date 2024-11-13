import React, { useState } from 'react';

const ContentRenderer = ({ content }) => {
    const [copyStatus, setCopyStatus] = useState('');

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopyStatus('Nusxa olindi!');
            setTimeout(() => setCopyStatus(''), 2000); // Сброс статуса через 2 секунды
        });
    };

    const renderCodeWithLineNumbers = (code) => {
        const lines = code.trim().split('\n');
        const indentSize = 4; // Размер отступа в пробелах
    
        return (
            <div className="flex">
                <div className="text-gray-500 pr-2 text-right">
                    {lines.map((_, index) => (
                        <div key={index}>{index + 1}</div>
                    ))}
                </div>
                <pre className="whitespace-pre-wrap text-white text-sm md:text-base">
                {lines.map((line, index) => {
                    const indent = ' '.repeat(Math.max(0, line.search(/\S/)) / indentSize); // Вычисляем отступ для каждой строки
                    return (
                        <div key={index}>
                            {indent}
                            {line.trim()}
                        </div>
                    );
                })}
            </pre>
            </div>
        );
    };

    return (
        <div className="space-y-4">
            {content.map((item, index) => {
                switch (item.type) {
                    case 'text':
                        return <p key={index} className="text-gray-500 text-base md:text-lg">{item.value}</p>; // Увеличение текста на md
                    case 'header':
                        return <div key={index} className="text-white text-xl md:text-xl font-bold">{item.value}</div>; // Увеличение заголовка на md
                    case 'code':
                        return (
                            <div key={index} className="flex flex-col p-4 bg-neutral-900 border border-gray-300 rounded overflow-auto">
                                {renderCodeWithLineNumbers(item.value)} {/* Вызов функции для отображения кода с нумерацией строк */}
                                <div className="flex justify-end mt-2"> {/* Flex для выравнивания кнопки */}
                                    <button
                                        onClick={() => copyToClipboard(item.value)}
                                        className="bg-blue-500 text-white text-xs md:text-sm px-2 py-1 rounded flex items-center"
                                    >
                                        {copyStatus || 'Nusxa olish'}
                                        {copyStatus && <span className="ml-1 md:ml-2 text-xs md:text-sm">✔️</span>} {/* Иконка при успешном копировании */}
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
