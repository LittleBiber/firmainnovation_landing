import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { HIRE_HREF } from '../../constant';
import { FIGLogo, Launch } from '../../constant/svgImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import ButtonBase from '../button';

const ContentBox = styled.div({
    width: '100vw',
    height: '80px',

    position: 'fixed',
    top: 0,
    left: 0,

    padding: '18px 56px 18px 52px',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
});

const PageTabs = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '48px'
});

const PageTabBtn = styled(ButtonBase)`
    color: ${Colors.white};

    font-size: 18px;
    font-weight: 900;

    text-transform: uppercase;

    display: flex;
    gap: 8px;

    transition: color 0.2s;

    svg {
        transition:
            fill 0.2s,
            stroke 0.2s;
        fill: #ffffff;
        stroke: #ffffff;
    }

    &:hover {
        color: #f15623;

        svg {
            fill: #f15623;
            stroke: #f15623;
        }
    }

    &:active {
        color: #f15623;

        svg {
            fill: #f15623;
            stroke: #f15623;
        }
    }
`;

const LangTabs = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '24px'
});

const buttonTypoColor = {
    light: {
        true: Colors.gray[100],
        false: Colors.gray[300]
    },
    dark: {
        true: Colors.white,
        false: Colors.gray[400]
    }
};

const LangButon = styled(ButtonBase)<{ $selected?: boolean; $theme: string }>`
    color: ${({ $selected, $theme }) => buttonTypoColor[$theme][$selected] || 'black'};

    font-size: 16px;
    font-style: normal;
    font-weight: ${({ $selected }) => ($selected ? '900' : '400')};
    line-height: 24px; /* 150% */

    background: transparent;
    margin: 0;
    padding: 0;
    border: unset;

    cursor: pointer;

    text-transform: uppercase;

    transition: all 0.2s;
`;

const LogoBtn = styled(FIGLogo)`
    cursor: pointer;
    transition: fill 0.2s ease-in-out;
    fill: white;
`;

const Header = () => {
    const { lang, setLang } = useGlobalContext();

    const navigate = useNavigate();

    const donueHref = lang === 'ko' ? 'https://donue.co.kr/' : 'https://donue.co.kr/en';

    const [overlapState, setOverlapState] = useState({
        div1: false,
        div2: false,
        div3: false
    });

    const headerRef = useRef(null); // Fixed 헤더 참조

    const checkOverlap = () => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const whoWeAreLight = document.getElementById('who-we-are-light');
        const techSection = document.getElementById('tech-section');

        const divs = [headerPlaceholder, whoWeAreLight, techSection];

        if (headerRef.current && divs.length > 0) {
            const headerRect = headerRef.current.getBoundingClientRect();

            const newState = {};
            divs.forEach((div, index) => {
                if (div) {
                    const divRect = div.getBoundingClientRect();

                    // 헤더와 해당 div가 겹치는지 확인
                    const overlapTop = Math.max(headerRect.top, divRect.top);
                    const overlapBottom = Math.min(headerRect.bottom, divRect.bottom);
                    const overlapHeight = Math.max(0, overlapBottom - overlapTop); // 음수 방지

                    // 헤더의 절반 이상이 덮였는지 확인
                    const headerHeight = headerRect.height;
                    const isOverlapping = overlapHeight >= headerHeight / 2;
                    // const isOverlapping = headerRect.bottom > divRect.top && headerRect.top < divRect.bottom;

                    // 상태값 업데이트용 객체 생성
                    newState[`div${index + 1}`] = isOverlapping;
                }
            });

            setOverlapState((prev) => ({ ...prev, ...newState }));
        }
    };

    useEffect(() => {
        // 스크롤이나 리사이즈 이벤트에 반응
        const handleScrollOrResize = () => {
            checkOverlap();
        };

        window.addEventListener('scroll', handleScrollOrResize, { passive: true });
        window.addEventListener('resize', handleScrollOrResize);

        // 컴포넌트 로드 시 초기 확인
        checkOverlap();

        return () => {
            window.removeEventListener('scroll', handleScrollOrResize);
            window.removeEventListener('resize', handleScrollOrResize);
        };
    }, []);

    const accentColor = useMemo(() => {
        if (overlapState.div2) return Colors.black;
        else return Colors.white;
    }, [overlapState]);

    const theme = useMemo(() => {
        if (overlapState.div2) return 'light';
        else return 'dark';
    }, [overlapState]);

    return (
        <>
            <ContentBox
                style={{
                    zIndex: 1001,
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'fit-content'
                }}
            >
                <PageTabs>
                    <PageTabBtn onClick={() => window.open(donueHref, '_blank')}>
                        donue <Launch />
                    </PageTabBtn>

                    <PageTabBtn onClick={() => window.open(HIRE_HREF, '_blank')}>
                        careers <Launch />
                    </PageTabBtn>
                </PageTabs>
            </ContentBox>
            <ContentBox style={{ zIndex: 1000 }} ref={headerRef}>
                <LogoBtn
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        navigate('/');
                    }}
                    style={{ fill: accentColor }}
                />

                <LangTabs>
                    <LangButon onClick={() => setLang('ko')} $selected={lang === 'ko'} $theme={theme}>
                        KR
                    </LangButon>
                    <LangButon onClick={() => setLang('en')} $selected={lang === 'en'} $theme={theme}>
                        EN
                    </LangButon>
                </LangTabs>
            </ContentBox>
        </>
    );
};

export default Header;