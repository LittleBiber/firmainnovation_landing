import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { SectionTitle } from '../common';

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

    font-size: 16px;
    font-weight: 900;
    line-height: 24px;

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

const WhoWeAre = () => {
    const { lang } = useGlobalContext();

    const { t } = useTranslation(['WhoWeAre']);

    return (
        <DetailBox id="who-we-are-light">
            <DetailSectionSubTitle>who we are</DetailSectionSubTitle>
            <SectionTitle $lang={lang} style={{ color: Colors.black }}>
                {t('detailTitle')}
            </SectionTitle>
            <DetailDesc>{t('detailDesc')}</DetailDesc>
        </DetailBox>
    );
};

export default WhoWeAre;
