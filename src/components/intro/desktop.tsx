import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { WHO_WE_ARE_HREF } from '../../constant';
import pngImages from '../../constant/pngImages';
import { DownArrowSmall, LeftArrowLong } from '../../constant/svgImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { hexToRGBA, parseLineSplit } from '../../util';
import ButtonBase from '../button';

const IntroBox = styled.div`
    position: relative;

    display: flex;
    width: 100vw;
    height: 100vh;
    min-height: 500px; // set minimal height not to break layout
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;

    background: url(${pngImages.main});
    background-size: cover;
    background-position: center center;

    background-repeat: no-repeat; /* Prevent bg repeat */
    background-position: center center; /* Align center */
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

const Title = styled.div`
    color: ${Colors.white};

    /* EN/Title/E) T1 */

    font-size: 64px;
    font-weight: 900;

    text-align: center;

    .accent {
        background: linear-gradient(90deg, #f15623 0%, #cf3919 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const SubTitle = styled.div`
    color: ${Colors.gray[500]};
    font-size: 20px;
    font-weight: 400;

    text-align: center;
`;

const SectionMoveBtn = styled(ButtonBase)`
    position: relative;

    display: flex;
    height: 55px;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
    gap: 16px;

    transition: all 0.2s;

    .typo {
        color: ${Colors.white};
        font-size: 20px;
        font-weight: 900;
    }

    > * {
        z-index: 1; // prevent other elements go down ::before
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        border-radius: 80px;
        background: linear-gradient(90deg, #f15623 0%, #ad2211 100%);

        transition: filter 0.2s ease-in-out;

        filter: brightness(1);
    }

    &:hover::before {
        filter: brightness(0.85);
    }

    &:active::before {
        filter: brightness(0.75);
    }
`;

const GoToNextSectionBtn = styled.div<{ $lang: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    position: absolute;
    bottom: 32px;

    animation: bounce 2s ease-in-out infinite;

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0);
        }
    }

    .typo {
        color: ${hexToRGBA(Colors.gray[400], 0.5)};

        font-size: 16px;
        font-style: normal;
        font-weight: ${({ $lang }) => ($lang === 'ko' ? 600 : 700)};
        line-height: 24px; /* 150% */
    }

    svg {
        width: 12px;
        height: 12px;
        stroke: ${hexToRGBA(Colors.white, 0.5)};
    }
`;

const Intro = () => {
    const { lang } = useGlobalContext();

    const { t } = useTranslation(['WhoWeAre']);

    const titleAccent = t('title').slice(0, 2);
    const titleRest = t('title').slice(2);

    return (
        <IntroBox>
            <TitleBox>
                <Title>
                    <span className="accent">{titleAccent}</span>
                    {titleRest}
                </Title>
                <SubTitle>{parseLineSplit(t('subTitle'))}</SubTitle>
            </TitleBox>

            <SectionMoveBtn onClick={() => window.open(WHO_WE_ARE_HREF, '_blank')}>
                <span className="typo">Who We Are</span>
                <LeftArrowLong style={{ fill: Colors.white, stroke: Colors.white }} />
            </SectionMoveBtn>

            <GoToNextSectionBtn $lang={lang}>
                <div className="typo">{t('scrollTypo')}</div>
                <DownArrowSmall />
            </GoToNextSectionBtn>
        </IntroBox>
    );
};

export default Intro;
