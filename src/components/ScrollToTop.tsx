import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that scrolls the window to the top whenever
 * the pathname in the location changes.
 * 
 * Usage: Place this component inside your Router in App.tsx
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top when the route changes
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // This component doesn't render anything
};

export default ScrollToTop;