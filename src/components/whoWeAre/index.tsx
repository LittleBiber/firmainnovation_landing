import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { WHO_WE_ARE_HREF } from '../../constant';
import { LeftArrowLong } from '../../constant/svgImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import ButtonBase from '../button';
import { SectionTitle } from '../common';

const IntroBox = styled.div`
    display: flex;
    width: 100vw;
    height: 800px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    background: ${Colors.black};
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
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
`;

const DetailSectionSubTitle = styled.div`
    color: ${Colors.priamry[5]};
    text-align: center;

    /* EN/Heading/E) H5 - Bd */
    // font-family: 'Satoshi Variable';
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

    text-transform: uppercase;
`;

const DetailDesc = styled.div`
    color: ${Colors.gray[200]};
    // font-family: 'Satoshi Variable';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
`;

const Title = styled.div`
    color: ${Colors.white};

    /* EN/Title/E) T1 */
    // font-family: 'Satoshi Variable';
    font-size: 48px;
    font-weight: 900;

    text-align: center;
`;

const SubTitle = styled.div`
    color: ${Colors.gray[500]};
    font-size: 20px;
    font-weight: 400;

    text-align: center;
`;

const SectionMoveBtn = styled(ButtonBase)`
    display: flex;
    height: 64px;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
    gap: 16px;

    border-radius: 80px;
    background: var(--Gray-900, #fff);

    transition: background 0.2s;

    .typo {
        color: ${Colors.gray[100]};
        font-size: 20px;
        font-weight: 900;
    }

    &:hover {
        background: #e2dedf;
    }

    &:active {
        background: #bab6b7;
    }
`;

const WhoWeAre = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const { lang } = useGlobalContext();

    const { t } = useTranslation(['WhoWeAre']);

    return (
        <>
            <IntroBox>
                <TitleBox>
                    <Title>{t('title')}</Title>
                    <SubTitle>{t('subTitle')}</SubTitle>
                </TitleBox>

                <SectionMoveBtn onClick={() => window.open(WHO_WE_ARE_HREF, '_blank')}>
                    <span className="typo">Who We Are</span>
                    <LeftArrowLong style={{ fill: Colors.black, stroke: Colors.black }} />
                </SectionMoveBtn>
            </IntroBox>
            <DetailBox ref={scrollRef} id="who-we-are-light">
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
