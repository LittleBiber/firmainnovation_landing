import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import pngImages from '../../constant/pngImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { parseLineSplit } from '../../util';
import { SectionTitle } from '../common';
import CoreValue from '../coreValue';
import AsIsGrid from '../grid/asIs';
import ToBeGrid from '../grid/toBe';
import UseCaseList from '../useCaseList';

const Content = styled.div`
    width: 100vw;
    background: ${Colors.gray[100]};
    padding: 120px 40px 160px;

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
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 133.333% */

    white-space: pre-wrap;
`;

const TechLogo = () => {
    return (
        <div style={{ position: 'relative', display: 'flex' }}>
            <img src="/images/tech_section_title.png" alt="tech-title" style={{ width: '270px' }} />
            <div style={{ width: '100%', height: '20px', position: 'absolute', bottom: 0, background: Colors.gray[100] }} />
        </div>
    );
};

const TechArrow = styled.img`
    width: 94px;
    height: 82px;

    margin-top: -47px;
`;

const Tech = () => {
    const { t } = useTranslation(['Tech']);
    const { lang } = useGlobalContext();

    return (
        <Content id="tech-section">
            <TechLogo />
            <TitleBox>
                <SectionTitle $lang={lang} style={{ color: Colors.white, whiteSpace: 'normal' }}>
                    {parseLineSplit(t('title'))}
                </SectionTitle>
                <SectionDesc>{parseLineSplit(t('desc'))}</SectionDesc>
            </TitleBox>
            <div style={{ height: '80px' }} />
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
                <AsIsGrid />
                <TechArrow src={pngImages.tech.arrow} alt="arrow" />
                <ToBeGrid />
            </div>

            <UseCaseList />

            <CoreValue />
        </Content>
    );
};

export default Tech;
