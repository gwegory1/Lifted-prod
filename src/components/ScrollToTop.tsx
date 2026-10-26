import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On route change: jump to top and move focus to <main> so screen readers start at the new page.
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.getElementById('main')?.focus({ preventScroll: true });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
