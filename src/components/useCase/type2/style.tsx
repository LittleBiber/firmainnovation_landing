import styled from 'styled-components';

import Colors from '../../../theme/color';
import { hexToRGBA } from '../../../util';

export interface IUseCaseTpy1 {
    index: number;
    title: string;
    desc: string;
    list: { title: string; desc: string }[];
}

export const ContentBox = styled.div<{ $lang: string; $isMobile: boolean }>`
    max-width: 1200px;
    width: 100%;

    border-radius: 24px; // 16px; // change by request
    background: ${hexToRGBA(Colors.gray[200], 0.15)}; // rgba(117, 112, 114, 0.05); // change by request
    backdrop-filter: blur(1px);

    padding: ${({ $isMobile }) => ($isMobile ? '40px 24px 36px' : '64px 40px')};

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: ${({ $isMobile }) => ($isMobile ? '32px' : '48px')};

    .case-number {
        color: rgba(117, 112, 114, 0.5);

        /* EN/Body/E) Body1 - Bd */
        // font-family: 'Satoshi Variable';
        font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
        font-style: normal;
        font-weight: 900;
        line-height: 24px; /* 150% */

        text-transform: uppercase;
    }

    .title {
        color: var(--Gray-900, #fff);

        /* EN/Heading/E) H3 - Bd */
        font-size: ${({ $isMobile }) => ($isMobile ? '20px' : '22px')};
        font-style: normal;
        font-weight: ${({ $lang }) => ($lang === 'ko' ? 800 : 900)};
        line-height: 30px;

        text-align: center;
    }

    .desc {
        color: rgba(249, 245, 246, 0.4);
        text-align: center;

        /* KR/Heading/K) H5 - Rg */
        // font-family: Pretendard;
        font-size: ${({ $isMobile }) => ($isMobile ? '14px' : '16px')};
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 133.333% */

        white-space: pre-wrap;
    }
`;

export const PointBox = styled.div<{ $lang: string }>`
    display: flex;
    align-items: center;

    max-width: 892px;
    width: 100%;
    height: 80px;

    border-radius: 80px;
    background: linear-gradient(90deg, rgba(149, 149, 149, 0.5) 0%, rgba(67, 64, 65, 0.5) 99.05%);

    .title-box {
        flex: 1;
        width: 100%;
        height: 100%;

        border-radius: 80px;
        background: linear-gradient(93deg, ${Colors.priamry[6]} -0.59%, ${Colors.priamry[4]} 150.18%); //${Colors.priamry[5]};
        box-shadow: 0px 4px 32px 0px rgba(71, 33, 21, 0.4);

        display: flex;
        align-items: center;
        justify-content: center;

        // Text
        color: ${Colors.gray[700]};

        /* KR/Heading/K) H5 - Bd */
        // font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: ${({ $lang }) => ($lang === 'ko' ? 600 : 700)};
        line-height: 24px; /* 133.333% */
    }

    .desc-box {
        flex: 1;
        width: 100%;

        // padding-right: 40px;

        color: ${Colors.gray[700]};

        /* KR/Body/K) Body1 - Rg */
        // font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 150% */

        text-align: center;

        white-space: pre-wrap;
    }
`;

export const PointBoxMobile = styled.div<{ $lang: string }>`
    width: 100%;

    .title-box {
        width: 100%;
        border-radius: 12px 12px 0px 0px;
        background: linear-gradient(93deg, #cf3919 -0.59%, #f68a58 150.18%);
        box-shadow: 0px 4px 32px 0px rgba(71, 33, 21, 0.4);

        padding: 16px 12px;

        text-align: center;

        // Text
        color: ${Colors.white};
        font-size: 16px;
        font-style: normal;
        font-weight: ${({ $lang }) => ($lang === 'ko' ? 600 : 700)};
        line-height: 24px; /* 150% */

        white-space: pre-line;
    }

    .desc-box {
        width: 100%;
        border-radius: 0px 0px 12px 12px;
        background: linear-gradient(90deg, rgba(67, 64, 65, 0.5) 0%, rgba(149, 149, 149, 0.5) 99.05%);

        padding: 16px 12px;

        text-align: center;

        // Text
        color: ${Colors.gray[700]};
        text-align: center;

        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 138.462% */

        white-space: pre-wrap;
    }
`;
