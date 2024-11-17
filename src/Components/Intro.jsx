

import React, { useState, useEffect } from 'react';


const Intro = () => {
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


 

    return (
        <main className='container mx-auto flex h-screen pt-20'>

        </main>
    );
};

export default Intro;
