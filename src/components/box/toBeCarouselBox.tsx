import styled from 'styled-components';

import { ToBeGridData } from '../../@types';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { hexToRGBA } from '../../util';

const BoxBase = styled.div`
    display: flex;
    width: 344px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    // border-radius: 12px;
`;

const ContentBox = styled(BoxBase)<{ $lang: string }>`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: ${({ $lang }) => ($lang === 'ko' ? '310px' : '402px')};

    &:hover {
        .outer-box {
            opacity: 0;
        }

        .detail-box {
            opacity: 1;
        }
    }

    transition: all 0.3s ease-in-out;
    box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05);

    overflow: hidden;
    border-radius: 12px;

    &::before {
        box-sizing: border-box;
        border-radius: 12px; // for gradient border
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        border: 1px solid transparent; // create border for 1px (maybe 0.1rem)
        background: linear-gradient(${Colors.gray[100]}, ${Colors.gray[100]}),
            linear-gradient(
                65deg,
                ${hexToRGBA(Colors.priamry[4], 0.4)} 40%,
                ${hexToRGBA(Colors.priamry[9], 0.7)} 60%,
                ${hexToRGBA(Colors.priamry[9], 1)} 100%
            );
        background-origin: border-box; // include borderline space in background
        background-clip: content-box, border-box; // use first color to content-box, second color to border-box

        // border: 1px solid transparent; // create border for 1px (maybe 0.1rem)
        // background:
        //     linear-gradient(180deg, ${Colors.gray[100]} -6.94%, #262626 28.89%),
        //     linear-gradient(180deg, ${hexToRGBA('#383737', 0.2)} 10%, ${hexToRGBA(Colors.gray[300], 0.2)}) 100%;
        // background-origin: border-box; // include borderline space in background
        // background-clip: content-box, border-box; // use first color to content-box, second color to border-box
    }
`;

const DetailContent = styled.div<{ $lang: string }>`
    display: flex;
    width: 100%;
    height: 100%;

    padding: 20px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    // border-radius: 12px;
    background: radial-gradient(85.91% 150.13% at 50% -23.31%, rgba(35, 31, 32, 0.4) 65%, rgba(241, 86, 35, 0.4) 100%);
    box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05);

    position: absolute;
`;

const ToBeDetailCardTitle = styled.div<{ $lang: string }>`
    display: flex;
    // padding: 12px 24px;
    justify-content: center;
    align-items: center;

    align-self: stretch;

    // border-radius: 12px;
    // border: 1px solid var(--Orange-400, #f68a58);
    // background: rgba(246, 138, 88, 0.1);

    color: ${Colors.white};

    /* EN/Body/E) Body1 - Bd */
    font-size: 16px;
    font-weight: ${({ $lang }) => ($lang === 'ko' ? 800 : 900)};
    line-height: 24px; /* 150% */

    text-align: center;
    white-space: pre;
`;

const ToBeDetailBox = styled.div<{ $lang: string }>`
    display: flex;
    gap: 2px;

    flex-direction: column;

    .title {
        color: var(--Orange-400, #f68a58);

        /* KR/Body/K) Body2 - Md */
        font-size: 14px;
        font-weight: ${({ $lang }) => ($lang === 'ko' ? 600 : 700)};
        line-height: 19px; /* 135.714% */
    }

    .desc {
        color: ${Colors.white};
        /* KR/Body/K) Body2 - Rg */
        font-size: 14px;
        font-weight: 400;
        line-height: ${({ $lang }) => ($lang === 'ko' ? '20px' : 'normal')};

        word-break: ${({ $lang }) => ($lang === 'ko' ? 'break-all' : 'keep-all')};
    }
`;

const TitleDivider = styled.div`
    align-self: stretch;
    border-bottom: 1px solid;
    border-color: ${hexToRGBA(Colors.priamry[3], 0.4)};

    margin-top: -2px;
    margin-bottom: -2px;
`;

const ToBeCarouselBox = (data: ToBeGridData) => {
    const { lang, isMobile } = useGlobalContext();

    return (
        <div style={{ width: '100%', padding: '0 20px', display: 'flex' }}>
            <ContentBox $lang={lang}>
                <DetailContent className="detail-box" $lang={lang}>
                    <ToBeDetailCardTitle $lang={lang}>{data.title}</ToBeDetailCardTitle>

                    <TitleDivider />

                    {data.detail.map((detail, index) => (
                        <ToBeDetailBox key={detail.title} $lang={lang}>
                            <div className="title">{detail.title}</div>
                            <div className="desc">{detail.desc}</div>
                        </ToBeDetailBox>
                    ))}
                </DetailContent>
            </ContentBox>
        </div>
    );
};

export default ToBeCarouselBox;
