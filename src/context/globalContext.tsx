import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import useBreakpoint from '../hook/useBreakPoint';

// get all return types with ReturnType, and select type of 'matches' property.
type MatchesType = ReturnType<typeof useBreakpoint>['matches'];

type CurrentSizeType = keyof ReturnType<typeof useBreakpoint>['matches'];

interface GlobalContextProps {
    lang: string;
    setLang: (v: string) => void;

    theme: string;
    setTheme: (v: string) => void;

    breakPoints: MatchesType;

    breakPoint: CurrentSizeType;

    isMobile: boolean;
}

const LOCAL_LANG_KEY = 'lang';

const supportLang: Record<string, boolean> = {
    ko: true,
    en: true
};

const supportTheme: Record<string, boolean> = {
    light: true,
    dark: true
};

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

const localLang = supportLang[localStorage.getItem(LOCAL_LANG_KEY)] ? localStorage.getItem(LOCAL_LANG_KEY) : 'ko';

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const { i18n } = useTranslation();

    const [lang, _setLang] = useState(localLang);
    const [theme, _setTheme] = useState('dark');

    const { matches, current } = useBreakpoint();

    const setLang = (v: string) => {
        if (supportLang[v]) {
            _setLang(v);
            localStorage.setItem(LOCAL_LANG_KEY, v);
            i18n.changeLanguage(v);
        }
    };

    const isMobile = current !== 'desktop';

    const setTheme = (v: string) => {
        if (supportTheme[v]) _setTheme(v);
    };

    return (
        <GlobalContext.Provider
            value={{
                breakPoints: matches,
                breakPoint: current,
                lang,
                setLang,
                theme,
                setTheme,
                isMobile
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
