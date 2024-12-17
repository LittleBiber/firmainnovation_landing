import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Carousel from '.';
import { AsIsGridData } from '../../@types';
import pngImages from '../../constant/pngImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { groupIntoPairs, hexToRGBA, parseLineSplit } from '../../util';
import AsIsCarouselBox from '../box/asIsCarouselBox';

const keys = ['minify', 'efficiency', 'security', 'nego', 'tracking', 'insight'];

const Wrapper = styled.div({ position: 'relative', paddingTop: '26px', width: '100%', maxWidth: '1200px' });

const ContentBox = styled.div<{ $variant: 'as-is' | 'to-be' }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 44px 0 28px;
    gap: 20px;
    border-radius: 24px;

    ${({ $variant }) =>
        $variant === 'as-is'
            ? `
			background: #332f30;
		`
            : `
			border: 1px solid ${hexToRGBA(Colors.priamry[2], 0.2)};
    		background: radial-gradient(39.03% 49.86% at 57% 25.64%, rgba(255, 84, 46, 0.6) 0%, rgba(255, 84, 46, 0.06) 100%), ${Colors.gray[100]};
		`}
`;

const AsIsTitle = styled.div`
    display: flex;
    width: 200px;
    height: 52px;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 40px;
    background: linear-gradient(98deg, #cfcfcf 15.1%, ${Colors.gray[300]} 87.03%);

    position: absolute;
    top: 0;

    // Text
    color: ${Colors.gray[100]};
    /* EN/Heading/E) H4 - Bd */
    font-size: 18px;
    font-weight: 900;
`;

const AsIsSubTitle = styled.div<{ $lang: string }>`
    color: ${Colors.gray[300]};

    font-size: 14px;
    font-style: normal;
    font-weight: ${({ $lang }) => ($lang === 'ko' ? 600 : 700)};
    line-height: 19px; /* 150% */

    text-align: center;
    white-space: pre;

    padding: 0 40px;
`;

const AsIsCaurosel = () => {
    const { t } = useTranslation('Tech');
    const { lang } = useGlobalContext();

    const gridTitle = parseLineSplit(t('asIs.title'));

    const asIsList = useMemo(() => {
        const base = keys.map((key: string) => ({
            img: pngImages.tech[key],
            title: t(`asIs.${key}.title`),
            tags: t(`asIs.${key}.tags`) as unknown as string[]
        }));

        const duet = groupIntoPairs(base);

        return duet.map((duet: AsIsGridData[]) => {
            return (
                <div key={`grid-section-${duet[0].title}`} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {duet.map((v) => (
                        <AsIsCarouselBox {...v} key={`grid-duet-${v.title}`} />
                    ))}
                </div>
            );
        });
    }, [t]);

    return (
        <Wrapper>
            <ContentBox $variant={'as-is'}>
                <AsIsTitle>AS-IS</AsIsTitle>

                <AsIsSubTitle $lang={lang}>{gridTitle}</AsIsSubTitle>
                <Carousel list={asIsList} />
            </ContentBox>
        </Wrapper>
    );
};

export default AsIsCaurosel;
