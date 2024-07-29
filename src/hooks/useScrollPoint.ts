import React from 'react';

export const useScrollPoint = (point = 0) => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    const handleScroll = React.useCallback(() => {
        const position = window.scrollY || window.pageYOffset || 0;

        if (position <= point && isScrolled) {
            setIsScrolled(() => false);
            return;
        }

        if (position > point && !isScrolled) {
            setIsScrolled(() => true);
        }
    }, [isScrolled, point]);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return isScrolled;
};
