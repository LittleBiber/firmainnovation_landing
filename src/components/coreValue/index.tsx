import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';

const Content = styled.div<{ $isMobile: boolean }>`
    display: flex;
    width: 100%;
    max-width: 1200px;
    flex-direction: column;
    align-items: center;
    gap: ${({ $isMobile }) => ($isMobile ? '28px' : '56px')};
`;

const Title = styled.div`
    color: ${Colors.white};

    /* EN/Heading/E) H3 - Bd */
    // font-family: 'Satoshi Variable';
    font-size: 22px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

    text-transform: uppercase;
    text-align: center;
`;

const ValueList = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    width: 100%;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Card = styled.div<{ $lang: string }>`
    display: flex;
    flex-direction: column;
    gap: 12px;

    max-width: 224px;
    height: 156px;

    width: 100%;
    padding: 20px;

    z-index: 1;

    position: relative;

    &::before {
        box-sizing: border-box;
        border-radius: 12px; // 16px; // change by request
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        border: 1px solid transparent; // create border for 1px (maybe 0.1rem)
        background:
            linear-gradient(${Colors.gray[100]}, ${Colors.gray[100]}),
            // select filling color (same with background)
            linear-gradient(165deg, ${Colors.priamry[4]}, ${Colors.gray[100]}); // select border gradient as linear-gradient
        background-origin: border-box; // include borderline space in background
        background-clip: content-box, border-box; // use first color to content-box, second color to border-box
    }

    .title {
        color: ${Colors.priamry[4]};

        font-size: 18px;
        font-style: normal;
        font-weight: ${({ $lang }) => ($lang === 'ko' ? 800 : 900)};
        line-height: 24px; /* 133.333% */
    }

    .desc {
        color: var(--Gray-900, #fff);

        /* KR/Body/K) Body1 - Rg */

        font-size: 14px;

        font-weight: 400;
        line-height: ${({ $lang }) => ($lang === 'ko' ? '20px' : 'normal')};

        white-space: pre-wrap;
    }

    @media (max-width: 1200px) {
        max-width: 892px;
        height: fit-content;

        .desc {
            white-space: unset;
        }
    }
`;

const CoreValue = () => {
    const { t } = useTranslation('CoreValue');
    const { lang, isMobile } = useGlobalContext();

    const list = t('list') as unknown as { title: string; desc: string }[];

    return (
        <Content $isMobile={isMobile}>
            <Title>{t('title')}</Title>
            <ValueList>
                {list.map((data, index) => (
                    <Card key={`core-value-index-${index}`} $lang={lang}>
                        <div className="title">{data.title}</div>
                        <div className="desc">{data.desc}</div>
                    </Card>
                ))}
            </ValueList>
        </Content>
    );
};

export default CoreValue;
