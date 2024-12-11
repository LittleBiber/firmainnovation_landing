import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { WHO_WE_ARE_HREF } from '../../constant';
import pngImages from '../../constant/pngImages';
import { DownArrowSmall, LeftArrowLong } from '../../constant/svgImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { hexToRGBA } from '../../util';
import ButtonBase from '../button';
import { SectionTitle } from '../common';

const IntroBox = styled.div`
    position: relative;

    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;

    background: url(${pngImages.main});
    background-size: cover;
    background-position: center center;

    background-repeat: no-repeat; /* 이미지 반복 방지 */
    background-position: center center; /* 중앙 정렬 */
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

const DetailBox = styled.div`
    width: 100vw;
    height: 440px;
    flex-shrink: 0;

    padding: 120px 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 20px;

    background: rgba(254, 233, 210, 0.4);
    backdrop-filter: blur(6px);

    background-image: url(/images/who-we-are-bg.png);
    background-size: cover;
    background-repeat: no-repeat; /* 이미지 반복 방지 */
    background-position: center center; /* 중앙 정렬 */

    scroll-margin-top: calc(100vh / 4);
`;

const DetailSectionSubTitle = styled.div`
    color: ${Colors.priamry[5]};
    text-align: center;

    /* EN/Heading/E) H5 - Bd */

    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

    text-transform: uppercase;
`;

const DetailDesc = styled.div`
    color: ${Colors.gray[200]};

    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
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

const WhoWeAre = () => {
    const { lang } = useGlobalContext();

    const { t } = useTranslation(['WhoWeAre']);

    const titleAccent = t('title').slice(0, 2);
    const titleRest = t('title').slice(2);

    return (
        <>
            <IntroBox>
                <TitleBox>
                    <Title>
                        <span className="accent">{titleAccent}</span>
                        {titleRest}
                    </Title>
                    <SubTitle>{t('subTitle')}</SubTitle>
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
            <DetailBox id="who-we-are-light">
                <DetailSectionSubTitle>who we are</DetailSectionSubTitle>
                <SectionTitle $lang={lang} style={{ color: Colors.black }}>
                    {t('detailTitle')}
                </SectionTitle>
                <DetailDesc>{t('detailDesc')}</DetailDesc>
            </DetailBox>
        </>
    );
};

export default WhoWeAre;
