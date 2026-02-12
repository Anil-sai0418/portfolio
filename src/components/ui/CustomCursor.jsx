import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }

            // Check if hovering over clickable element
            const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
            if (hoveredElement) {
                const isClickable =
                    hoveredElement.tagName === 'A' ||
                    hoveredElement.tagName === 'BUTTON' ||
                    hoveredElement.closest('a') ||
                    hoveredElement.closest('button') ||
                    hoveredElement.getAttribute('role') === 'button' ||
                    (hoveredElement.className && typeof hoveredElement.className === 'string' && hoveredElement.className.includes('cursor-pointer'));

                setIsPointer(!!isClickable);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        >
            <div
                ref={dotRef}
                className={`bg-white rounded-full transition-all duration-300 ease-out ${isPointer ? 'w-6 h-6 opacity-80' : 'w-3 h-3 opacity-100'
                    }`}
            />
        </div>
    );
};

export default CustomCursor;
