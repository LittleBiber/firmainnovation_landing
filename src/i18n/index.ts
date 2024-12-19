import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './lang/en';
import ko from './lang/ko';

export const supprotedLangCode: Record<string, boolean> = {
    ko: true,
    en: true
};

export const LOCAL_LANG_KEY = 'lang';

export const FALLBACK_LANG_CODE = 'ko';

export interface IWhoWeAre {
    title: string;
    subTitle: string;
    detailTitle: string;
    detailDesc: string;

    scrollTypo: string;
}
export interface ITech {
    title: string;
    desc: string;

    asIs: {
        title: string;

        minify: {
            title: string;
            tags: string[];
        };
        efficiency: {
            title: string;
            tags: string[];
        };
        security: {
            title: string;
            tags: string[];
        };
        nego: {
            title: string;
            tags: string[];
        };
        tracking: {
            title: string;
            tags: string[];
        };
        insight: {
            title: string;
            tags: string[];
        };
    };

    toBe: {
        title: string;

        intelligentContract: {
            title: string;
            tags: string[];
            detail: { title: string; desc: string }[];
        };
        automatedContract: {
            title: string;
            tags: string[];
            detail: { title: string; desc: string }[];
        };
        enforcedNego: {
            title: string;
            tags: string[];
            detail: { title: string; desc: string }[];
        };
        enforcedSecurity: {
            title: string;
            tags: string[];
            detail: { title: string; desc: string }[];
        };
        automatedLifeCycle: {
            title: string;
            tags: string[];
            detail: { title: string; desc: string }[];
        };
        insightBasedOnData: {
            title: string;
            tags: string[];
            detail: { title: string; desc: string }[];
        };
    };
}

export interface Type1UseCase {
    index: number;
    title: string;
    desc: string;
    list: { title: string; desc: string }[];
}

export interface Type2UseCase {
    index: number;
    caseTitle: string;
    caseDesc: string;
    sections: IUserCaseTyp2Section[];
}

export interface IUserCaseTyp2Section {
    title: string;
    example: string;
    features: { title: string; desc: string }[];
}

export interface IUseCase {
    type1Example: Type1UseCase[];
    type2Example: Type2UseCase[];
}
export interface ICoreValue {
    title: string;
    list: { title: string; desc: string }[];
}
export interface IRecruitment {
    title: string;
    desc: string;
    buttonTypo: string;
}

const options = {
    order: ['localStorage'], // Detect order: localStorage -> browser
    caches: ['localStorage'], // save to
    lookupLocalStorage: LOCAL_LANG_KEY // key using on localstorage
};

const getLanguage = () => {
    const storedLang = localStorage.getItem(LOCAL_LANG_KEY);

    if (storedLang && !!supprotedLangCode[storedLang]) {
        return storedLang; // return valid langcode
    }

    // save fallback langcode and return it
    localStorage.setItem(LOCAL_LANG_KEY, FALLBACK_LANG_CODE);
    return FALLBACK_LANG_CODE;
};

i18n.use(LanguageDetector).use(initReactI18next).init({
    detection: options,
    resources: { en, ko },

    fallbackLng: FALLBACK_LANG_CODE, // Default lang
    debug: false,
    returnObjects: true,

    load: 'languageOnly', // Always return lang code in ISO 639-1. ex) en, ko
    lng: getLanguage() // Check lang code on load ans set fallback langcode if saved value is corrupted
});

export default i18n;
