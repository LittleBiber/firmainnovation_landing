import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Carousel from '.';
import pngImages from '../../constant/pngImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { hexToRGBA, parseLineSplit } from '../../util';
import ToBeCarouselBox from '../box/toBeCarouselBox';

const keys = ['intelligentContract', 'automatedContract', 'enforcedNego', 'enforcedSecurity', 'automatedLifeCycle', 'insightBasedOnData'];

const Wrapper = styled.div({ position: 'relative', paddingTop: '26px', width: '100%', maxWidth: '1200px' });

const ContentBox = styled.div<{ $variant: 'as-is' | 'to-be' }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 44px 0 28px;
    gap: 20px;

    z-index: 1;
    position: relative;

    border-radius: 16px;
    background: rgba(51, 47, 48, 0.4);
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.1);
`;

const ToBeTitle = styled.div`
    display: flex;
    width: 200px;
    height: 55px;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;

    border-radius: 40px;
    background: linear-gradient(98deg, ${Colors.priamry[4]} -4.12%, ${Colors.priamry[5]} 74.28%);

    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    z-index: 2;

    // Text
    color: ${Colors.gray[100]};
    /* EN/Heading/E) H4 - Bd */
    font-size: 18px;
    font-weight: 900;
`;

const ToBeSubTitle = styled.div<{ $lang: string; $isMobile: boolean }>`
    color: ${Colors.white};

    /* KR/Heading/K) H5 - Bd */

    font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '18px')};

    font-weight: ${({ $lang }) => ($lang === 'ko' ? 600 : 700)};
    line-height: 19px;

    text-align: center;

    white-space: pre;
`;

const ToBeCarousel = () => {
    const { lang, isMobile } = useGlobalContext();

    const { t } = useTranslation('Tech');

    const gridTitle = parseLineSplit(t('toBe.title'));

    const toBeList = useMemo(() => {
        const base = keys.map((key: string) => ({
            img: pngImages.tech[key],
            title: t(`toBe.${key}.title`),
            tags: t(`toBe.${key}.tags`) as unknown as string[],
            detail: t(`toBe.${key}.detail`) as unknown as { title: string; desc: string }[]
        }));

        return base.map((v) => <ToBeCarouselBox {...v} />);
    }, [t]);

    return (
        <Wrapper>
            <ToBeTitle>TO-BE</ToBeTitle>
            <ContentBox $variant={'to-be'}>
                <ToBeSubTitle $lang={lang} $isMobile={isMobile}>
                    {gridTitle}
                </ToBeSubTitle>
                <Carousel list={toBeList} />
            </ContentBox>
        </Wrapper>
    );
};

export default ToBeCarousel;
