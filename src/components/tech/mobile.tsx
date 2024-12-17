import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import pngImages from '../../constant/pngImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { parseLineSplit } from '../../util';
import AsIsCaurosel from '../carousel/asIs';
import ToBeCarousel from '../carousel/toBe';
import { SectionTitle } from '../common';
import CoreValue from '../coreValue';
import UseCaseList from '../useCaseList';

const Content = styled.div`
    width: 100vw;
    background: ${Colors.gray[100]};
    padding: 88px 16px 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleBox = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
});

const SectionDesc = styled.div`
    color: ${Colors.gray[400]};
    text-align: center;

    /* KR/Heading/K) H5 - Rg */
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 133.333% */

    white-space: normal;
`;

const TechArrow = styled.img`
    width: 80px;
    height: 68px;
    margin-top: -50px;
`;

const TechLogo = () => {
    return (
        <div style={{ position: 'relative', display: 'flex' }}>
            <img src="/images/tech_section_title.png" alt="tech-title" style={{ width: '140px', marginBottom: '4px' }} />
            <div style={{ width: '100%', height: '14px', position: 'absolute', bottom: 0, background: Colors.gray[100] }} />
        </div>
    );
};

const Tech = () => {
    const { t } = useTranslation(['Tech']);
    const { lang } = useGlobalContext();

    return (
        <Content id="tech-section">
            <TechLogo />
            <TitleBox>
                <SectionTitle $lang={lang} style={{ color: Colors.white }}>
                    {parseLineSplit(t('title'))}
                </SectionTitle>
                <SectionDesc>{parseLineSplit(t('desc'))}</SectionDesc>
            </TitleBox>
            <div style={{ height: '64px' }} />
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
                <AsIsCaurosel />

                <TechArrow src={pngImages.tech.arrow} alt="arrow" />
                <ToBeCarousel />
            </div>

            <UseCaseList />

            <CoreValue />
        </Content>
    );
};

export default Tech;
