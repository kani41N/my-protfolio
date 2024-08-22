import React, { useEffect, useState } from 'react';
import { IoMdArrowRoundUp } from "react-icons/io";

function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const GoToTopBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const listenToScroll = () => {
        const heightToShow = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToShow) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, []);

    return (
        <>
            {isVisible && ( 
                <div className="fixed bottom-5 right-5 cursor-pointer">
                    <div onClick={GoToTopBtn} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-950">
                        <IoMdArrowRoundUp size={25} className='animate-bounce' />
                    </div>
                </div>
            )}
        </>
    );
}

export default GoToTop;
