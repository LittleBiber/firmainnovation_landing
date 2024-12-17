import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { HIRE_HREF } from '../../constant';
import { Close, FIGLogo, Hamburger, Launch } from '../../constant/svgImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { hexToRGBA } from '../../util';
import ButtonBase from '../button';

const Content = styled.div<{ $open: boolean; $theme: string }>`
    position: fixed;
    top: 0;
    z-index: ${1000};

    width: 100%;
    height: 56px;

    padding: 16px 14px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background: ${({ $open, $theme }) => ($open ? 'transparent' : hexToRGBA($theme === 'light' ? Colors.black : Colors.white, 0.02))};
    backdrop-filter: blur(8px) ${({ $open }) => ($open ? 'opacity(0)' : 'opacity(1)')};

    // transition: all 0.3s;

    pointer-events: none;

    > button {
        pointer-events: auto;
    }
`;

const HamburgerBtn = styled(ButtonBase)`
    display: flex;
`;

const FullScreenMenu = styled.div<{ $open: boolean }>`
    width: ${({ $open }) => ($open ? '100vw' : '0px')};
    height: 100vh;

    padding: 56px 16px 0;

    background: ${Colors.gray[100]};

    position: fixed;
    right: ${({ $open }) => ($open ? '0px' : 'calc(-100vw)')};
    top: 0;
    z-index: ${999};

    // transition: all 0.5s ease-in-out;
`;

const MenuBox = styled(ButtonBase)`
    width: 100%;
    height: 68px;
    border-bottom: 1px solid ${hexToRGBA(Colors.white, 0.2)};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    .title {
        color: ${Colors.gray[700]};

        font-size: 16px;
        font-weight: 700;
        line-height: 24px; /* 150% */

        text-transform: uppercase;
    }
`;

const MenuButton = (menu: { name: string; isOuterLink: boolean; onClick: () => void }) => {
    return (
        <MenuBox onClick={menu.onClick}>
            <div className="title">{menu.name}</div>
            {menu.isOuterLink && <Launch style={{ width: '16px', height: '16px', fill: Colors.white, stroke: Colors.white }} />}
        </MenuBox>
    );
};

const MobileLangBtnBox = styled.div`
    height: 56px;
    position: absolute;
    right: 64px;
    top: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
`;

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

const FIGLogoIcon = styled(FIGLogo)<{ $accentColor: string; $open: boolean }>`
    transition: all 0.2s;

    fill: ${({ $open, $accentColor }) => ($open ? Colors.white : $accentColor) || 'black'};

    width: 28px;
    height: 28px;
`;

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

const HamburgerIcon = styled(Hamburger)<{ $accentColor: string }>`
    transition: all 0.2s;

    fill: ${({ $accentColor }) => $accentColor || 'black'};
`;

const Mobile = () => {
    const { lang, setLang } = useGlobalContext();

    const donueHref = lang === 'ko' ? 'https://donue.co.kr/' : 'https://donue.co.kr/en';

    const [open, setOpen] = useState(false);

    const [overlapState, setOverlapState] = useState({
        div1: false,
        div2: false,
        div3: false
    });

    const headerRef = useRef(null); // Ref to fixed header

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

                    // Check if header overlap to each component
                    const overlapTop = Math.max(headerRect.top, divRect.top);
                    const overlapBottom = Math.min(headerRect.bottom, divRect.bottom);
                    const overlapHeight = Math.max(0, overlapBottom - overlapTop); // block value below zero

                    // Check more than half has covered
                    const headerHeight = headerRect.height;
                    const isOverlapping = overlapHeight >= headerHeight / 2;
                    // const isOverlapping = headerRect.bottom > divRect.top && headerRect.top < divRect.bottom;

                    // Create new obj for update
                    newState[`div${index + 1}`] = isOverlapping;
                }
            });

            setOverlapState((prev) => ({ ...prev, ...newState }));
        }
    };

    useEffect(() => {
        // Response to scroll / resize
        const handleScrollOrResize = () => {
            checkOverlap();
        };

        window.addEventListener('scroll', handleScrollOrResize, { passive: true });
        window.addEventListener('resize', handleScrollOrResize);

        // Inital check when load
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

    const blockScroll = (state: boolean) => {
        const body = document.getElementsByTagName('html')[0];
        if (state) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'auto';
        }
    };

    useEffect(() => {
        return () => {
            setOpen(false); // Close full-screen menu when mobile header removed
            blockScroll(false);
        };
    }, []);

    useEffect(() => {
        blockScroll(open);
    }, [open]);

    return (
        <>
            <Content $open={open} $theme={theme} ref={headerRef}>
                <FIGLogoIcon $accentColor={accentColor} $open={open} />

                <HamburgerBtn onClick={() => setOpen(!open)}>
                    {open ? <Close style={{ fill: Colors.white }} /> : <HamburgerIcon $accentColor={accentColor} />}
                </HamburgerBtn>
            </Content>
            <FullScreenMenu $open={open}>
                <MobileLangBtnBox>
                    <LangButon onClick={() => setLang('ko')} $selected={lang === 'ko'} $theme={'dark'}>
                        KR
                    </LangButon>
                    <LangButon onClick={() => setLang('en')} $selected={lang === 'en'} $theme={'dark'}>
                        EN
                    </LangButon>
                </MobileLangBtnBox>

                <MenuButton name="donue" isOuterLink onClick={() => window.open(donueHref, '_blank')} />
                <MenuButton name="careers" isOuterLink onClick={() => window.open(HIRE_HREF, '_blank')} />
            </FullScreenMenu>
        </>
    );
};

export default Mobile;
