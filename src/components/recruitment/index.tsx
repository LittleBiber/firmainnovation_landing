import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { HIRE_HREF } from '../../constant';
import { LeftArrowLong } from '../../constant/svgImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import ButtonBase from '../button';

const Content = styled.div`
    display: flex;
    width: 100vw;
    padding: 80px 40px;
    flex-direction: column;
    align-items: center;

    background: linear-gradient(105deg, ${Colors.priamry[5]} 20.06%, ${Colors.priamry[4]} 87.55%), #fff;
`;

const InfoBox = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    padding: 96px 40px;
    flex-direction: column;
    align-items: center;
    // gap: 40px;

    border-radius: 24px;
    background: #fff;
`;

const Title = styled.div<{ $lang: string }>`
    color: ${Colors.gray[100]};
    text-align: center;

    /* KR/Title/K) T2 */
    // font-family: Pretendard;
    font-size: 32px;

    font-weight: ${({ $lang }) => ($lang === 'ko' ? 800 : 900)};
    line-height: 44px;
`;

const Desc = styled.div`
    color: ${Colors.gray[200]};
    text-align: center;

    /* KR/Heading/K) H3 - Rg */
    // font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    white-space: pre-wrap;
`;

const OpenRolesBtn = styled(ButtonBase)<{ $lang: string }>`
    display: flex;
    height: 52px;
    width: fit-content;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
    gap: 16px;

    border-radius: 60px;
    background: ${Colors.priamry[5]};

    margin: 0;

    border: unset;

    cursor: pointer;

    transition: all 0.2s;

    .title {
        color: var(--Gray-900, #fff);
        font-size: 20px;
        font-weight: ${({ $lang }) => ($lang === 'ko' ? 700 : 800)};
    }

    &:hover {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), ${Colors.priamry[5]};
    }

    &:active {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), ${Colors.priamry[5]};
    }
`;

const Recruitment = () => {
    const { lang } = useGlobalContext();

    const { t } = useTranslation('Recruitment');

    return (
        <Content>
            <InfoBox>
                <Title $lang={lang}>{t('title')}</Title>
                <div style={{ height: '12px' }} />
                <Desc>{t('desc')}</Desc>
                <div style={{ height: '32px' }} />
                <OpenRolesBtn $lang={lang} onClick={() => window.open(HIRE_HREF, '_blank')}>
                    <span className="title">{t('buttonTypo')}</span>
                    <LeftArrowLong style={{ fill: Colors.white, stroke: Colors.white }} />
                </OpenRolesBtn>
            </InfoBox>
        </Content>
    );
};

export default Recruitment;
