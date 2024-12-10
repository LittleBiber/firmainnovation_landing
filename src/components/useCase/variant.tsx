import styled from 'styled-components';

import { LeftArrowLong } from '../../constant/svgImages';
import { useGlobalContext } from '../../context/globalContext';
import { IUserCaseTyp2Section, Type2UseCase } from '../../i18n';
import { ContentBox, PointBox } from './style';

const SectionTitle = styled.div`
    color: var(--Orange-300, #faac7a);
    text-align: center;

    /* KR/Body/K) Body2 - Md */
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px; /* 135.714% */
`;

const ExampleBox = styled.div`
    max-width: 892px;
    width: 100%;

    display: flex;
    padding: 12px;
    justify-content: center;
    align-items: center;

    border-radius: 40px;
    border: 1px solid var(--Orange-300, #faac7a);

    .typo {
        color: var(--Gray-600, #f4f0f1);
        text-align: center;

        /* KR/Body/K) Body2 - Rg */

        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
    }
`;

const Section = ({ data }: { data: IUserCaseTyp2Section }) => {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionTitle>{data.title}</SectionTitle>
            <div style={{ height: '16px' }} />
            <ExampleBox>
                <div className="typo">{data.example}</div>
            </ExampleBox>

            <LeftArrowLong style={{ fill: 'rgba(250, 172, 122, 0.40)', width: '20px', transform: 'rotate(90deg)' }} />

            <div style={{ height: '20px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
                {data.features.map((feat) => (
                    <PointBox $lang={'ko'}>
                        <div className="title-box">{feat.title}</div>
                        <div className="desc-box">
                            <div style={{ width: '100%', paddingRight: '25px', textAlign: 'center' }}>{feat.desc}</div>
                        </div>
                    </PointBox>
                ))}
            </div>
        </div>
    );
};

const UseCase2 = ({ data }: { data: Type2UseCase }) => {
    const { lang } = useGlobalContext();

    return (
        <ContentBox $lang={lang}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="case-number">use cases {data.index}</div>
                <div style={{ height: '8px' }} />
                <div className="title">{data.caseTitle}</div>
                <div style={{ height: '16px' }} />
                <div className="desc">{data.caseDesc}</div>
            </div>
            {data.sections.map((section, index) => (
                <Section data={section} key={`use-case-typ2-index-${index}`} />
            ))}
        </ContentBox>
    );
};

export default UseCase2;
