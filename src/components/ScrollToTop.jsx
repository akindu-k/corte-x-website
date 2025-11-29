import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 group p-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 border border-blue-500/20"
                    aria-label="Scroll to top"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <ChevronUp className="w-5 h-5 text-white group-hover:translate-y-[-1px] transition-transform duration-300 relative z-10" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;