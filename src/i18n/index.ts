import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './lang/en';
import ko from './lang/ko';

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
    order: ['localStorage', 'navigator'], // 탐지 순서: 로컬 스토리지 > 브라우저 설정
    caches: ['localStorage'], // 언어 정보를 저장할 위치
    lookupLocalStorage: 'lang' // 로컬 스토리지에 사용할 키
};

i18n.use(LanguageDetector)
    .use(initReactI18next) // React와 연동
    .init({
        detection: options,
        resources: { en, ko },

        fallbackLng: 'en', // 기본 언어
        debug: true,
        returnObjects: true,
        interpolation: {
            escapeValue: false // React는 XSS 방지를 기본으로 처리
        }
    });

export default i18n;
