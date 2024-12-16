import { useEffect, useMemo, useState } from 'react';

type UseBreakpointResult = {
    width: number;
    matches: {
        underMobile: boolean;
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
    current: keyof UseBreakpointResult['matches'];
};

/**
 * Custom hook to get the current window width and whether it matches a breakpoint.
 * @param {Breakpoints} breakpoints - An object with mobile, tablet, and desktop breakpoint thresholds.
 * @returns {UseBreakpointResult} - { width: number, matches: { mobile: boolean, tablet: boolean, desktop: boolean }, current: keyof UseBreakpointResult['matches'] }
 */

const breakpoints = {
    mobile: 360,
    tablet: 768,
    desktop: 1200
};

const useBreakpoint = (): UseBreakpointResult => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [matches, setMatches] = useState<UseBreakpointResult['matches']>(() => ({
        underMobile: window.innerWidth < breakpoints.mobile,
        mobile: window.innerWidth >= breakpoints.mobile && window.innerWidth < breakpoints.tablet,
        tablet: window.innerWidth >= breakpoints.tablet && window.innerWidth < breakpoints.desktop,
        desktop: window.innerWidth >= breakpoints.desktop
    }));

    const current: keyof UseBreakpointResult['matches'] = useMemo(() => {
        if (matches.underMobile) return 'underMobile';
        if (matches.mobile) return 'mobile';
        if (matches.tablet) return 'tablet';
        return 'desktop';
    }, [matches]);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);

            setMatches({
                underMobile: newWidth < breakpoints.mobile, // most of view would break with this size :(
                mobile: newWidth >= breakpoints.mobile && newWidth < breakpoints.tablet,
                tablet: newWidth >= breakpoints.tablet && newWidth < breakpoints.desktop,
                desktop: newWidth >= breakpoints.desktop
            });
        };

        window.addEventListener('resize', handleResize, { passive: true });
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoints]);

    return { width: windowWidth, matches, current };
};

export default useBreakpoint;

// Example usage:
// const { width, matches } = useBreakpoint({ mobile: 360, tablet: 768, desktop: 1200 });
// console.log(width); // Current window width
// console.log(matches); // { mobile: true, tablet: false, desktop: false }
