import React from 'react';

const SearchResults = ({ results, onClose, onResultClick }) => {
    if (results.length === 0) return null;

    return (
        <div className="flex flex-col bg-neutral-800 border border-gray-500 rounded-lg shadow-lg z-10 w-full max-h-60 overflow-y-auto">
            <button onClick={onClose} className="self-end text-gray-500 hover:text-red-500 transition-colors">
                ✖️
            </button>
            <ul className="divide-y divide-gray-200 flex-1 overflow-y-auto">
                {results.map((doc, index) => (
                    <li 
                        key={index} 
                        className="p-4 hover:bg-neutral-600 cursor-pointer transition-colors" 
                        onClick={() => onResultClick(doc)}
                    >
                        <h3 className="font-bold text-lg text-gray-800">{doc.title}</h3>
                        <p className="text-white">{doc.content.map(item => item.value).join(' ')}</p>
                    </li>
                ))}
            </ul>   
        </div>
    );
};

export default SearchResults;
