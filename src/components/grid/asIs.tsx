import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { AsIsGridData } from '../../@types';
import pngImages from '../../constant/pngImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { hexToRGBA } from '../../util';
import AsIsGridBox from '../box/asIsGridBox';

// const asIsList: TechGridData[] = [
//     { img: pngImages.tech.minify, title: '계약 프로세스 간소화', tags: ['표준화된 템플릿', '강력한 데이터 기반 분석'] },
//     { img: pngImages.tech.efficiency, title: '계약 효율성 상승', tags: ['신뢰할 수 있는 전자 계약', '디지털화를 통한 효율성'] },
//     { img: pngImages.tech.security, title: '안전한 보안성', tags: ['블록체인 보안', '투명한 버전 관리'] },
//     { img: pngImages.tech.nego, title: '협상 및 협업', tags: ['협업 도구 사용', '신속한 의사소통'] },
//     { img: pngImages.tech.tracking, title: '실시간 트래킹', tags: ['체계적인 추적', '필요 정보 적시 제공'] },
//     { img: pngImages.tech.insight, title: '과거 데이터 분석', tags: ['비즈니스 인사이트 제공', '데이터 기반 전략 제공'] }
// ];

const keys = ['minify', 'efficiency', 'security', 'nego', 'tracking', 'insight'];

const Wrapper = styled.div({ position: 'relative', paddingTop: '26px', width: '100%', maxWidth: '1200px' });

const ContentBox = styled.div<{ $variant: 'as-is' | 'to-be' }>`
    // 공용
    // max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 60px;
    gap: 28px;
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
    padding: 14px 40px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 40px;
    background: linear-gradient(98deg, #cfcfcf 15.1%, ${Colors.gray[300]} 87.03%);

    position: absolute;
    top: 0;

    // 텍스트
    color: ${Colors.gray[100]};
    /* EN/Heading/E) H4 - Bd */
    font-size: 18px;
    font-weight: 900;
`;

const AsIsSubTitle = styled.div<{ $lang: string }>`
    color: ${Colors.gray[400]};

    /* KR/Body/K) Body1 - Rg */
    // font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: ${({ $lang }) => ($lang === 'ko' ? 600 : 700)};
    line-height: 24px; /* 150% */
`;

const AsIsGrid = () => {
    const { t } = useTranslation('Tech');
    const { lang } = useGlobalContext();

    const gridTitle = t('asIs.title');

    const asIsList = useMemo(() => {
        return keys.map((key: string) => ({
            img: pngImages.tech[key],
            title: t(`asIs.${key}.title`),
            tags: t(`asIs.${key}.tags`) as unknown as string[]
        }));
    }, [t]) satisfies AsIsGridData[];

    return (
        <Wrapper>
            <ContentBox $variant={'as-is'}>
                <AsIsTitle>AS-IS</AsIsTitle>

                <AsIsSubTitle $lang={lang}>{gridTitle}</AsIsSubTitle>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(auto-fill, 344px)`,
                        gap: '24px 20px',
                        justifyItems: 'center',
                        width: '100%',
                        justifyContent: 'center'
                    }}
                >
                    {asIsList.map((data, key) => (
                        <AsIsGridBox {...data} key={`as-is-${key}`} />
                    ))}
                </div>
            </ContentBox>
        </Wrapper>
    );
};

export default React.memo(AsIsGrid);
