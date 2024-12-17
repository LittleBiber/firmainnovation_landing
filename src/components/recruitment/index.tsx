import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { HIRE_HREF } from '../../constant';
import { LeftArrowLong } from '../../constant/svgImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { parseLineSplit } from '../../util';
import ButtonBase from '../button';

const Content = styled.div<{ $isMobile: boolean }>`
    display: flex;
    width: 100vw;
    padding: ${({ $isMobile }) => ($isMobile ? '40px 16px' : '80px 40px')};
    flex-direction: column;
    align-items: center;

    background: linear-gradient(105deg, ${Colors.priamry[5]} 20.06%, ${Colors.priamry[4]} 87.55%), #fff;
`;

const InfoBox = styled.div<{ $isMobile: boolean }>`
    display: flex;
    width: 100%;
    max-width: 1200px;
    padding: ${({ $isMobile }) => ($isMobile ? '40px 12px' : '96px 40px')};
    flex-direction: column;
    align-items: center;
    // gap: 40px;

    border-radius: 24px;
    background: #fff;
`;

const Title = styled.div<{ $lang: string; $isMobile: boolean }>`
    color: ${Colors.gray[100]};
    text-align: center;

    /* KR/Title/K) T2 */
    // font-family: Pretendard;
    font-size: ${({ $isMobile }) => ($isMobile ? '22px' : '32px')};

    font-weight: ${({ $lang }) => ($lang === 'ko' ? 800 : 900)};
    line-height: ${({ $isMobile }) => ($isMobile ? '30px' : '44px')};
`;

const Desc = styled.div<{ $isMobile: boolean }>`
    color: ${Colors.gray[200]};
    text-align: center;

    /* KR/Heading/K) H3 - Rg */
    // font-family: Pretendard;
    font-size: ${({ $isMobile }) => ($isMobile ? '16px' : '20px')};
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    white-space: ${({ $isMobile }) => ($isMobile ? 'pre-line' : 'normal')};
`;

const OpenRolesBtn = styled(ButtonBase)<{ $lang: string }>`
    display: flex;
    height: 52px;
    width: fit-content;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
    gap: 16px;

    position: relative;

    .title {
        color: ${Colors.white};
        font-size: 18px;
        font-weight: 800;
        line-height: 24px;
    }

    > * {
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        border-radius: 60px;
        background: ${Colors.priamry[5]};

        filter: brightness(1);
        transition: filter 0.2s;
    }

    &:hover::before {
        filter: brightness(0.95);
    }

    &:active::before {
        filter: brightness(0.9);
    }
`;

const Recruitment = () => {
    const { lang, isMobile } = useGlobalContext();

    const { t } = useTranslation('Recruitment');

    return (
        <Content $isMobile={isMobile}>
            <InfoBox $isMobile={isMobile}>
                <Title $lang={lang} $isMobile={isMobile}>
                    {t('title')}
                </Title>
                <div style={{ height: isMobile ? '8px' : '12px' }} />
                <Desc $isMobile={isMobile}>{parseLineSplit(t('desc'))}</Desc>
                <div style={{ height: isMobile ? '24px' : '32px' }} />
                <OpenRolesBtn $lang={lang} onClick={() => window.open(HIRE_HREF, '_blank')}>
                    <span className="title">{t('buttonTypo')}</span>
                    <LeftArrowLong style={{ fill: Colors.white, stroke: Colors.white }} />
                </OpenRolesBtn>
            </InfoBox>
        </Content>
    );
};

export default Recruitment;
