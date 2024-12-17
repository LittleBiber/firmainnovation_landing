import styled from 'styled-components';

import { AsIsGridData } from '../../@types';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';

const BoxBase = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
`;

const AsIsContent = styled(BoxBase)<{ $lang: string; $carousel?: boolean }>`
    width: ${({ $carousel }) => ($carousel ? '100%' : '344px')};
    padding: ${({ $carousel }) => ($carousel ? '20px 22px' : '24px')};
    gap: 12px;

    border: 1px solid rgba(117, 112, 114, 0.5);
    background: rgba(35, 31, 32, 0.6);

    img {
        width: 40px;
        aspect-ration: 1/1;
    }

    .title-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: ${({ $carousel }) => ($carousel ? 'center' : 'flex-start')};
        gap: 6px;
    }

    .title {
        color: ${Colors.gray[700]};

        /* KR/Body/K) Body1 - Bd */
        // font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: ${({ $lang }) => ($lang === 'ko' ? 600 : 900)};
        line-height: 24px; /* 150% */

        text-align: center;
    }

    .tag-box {
        display: flex;
        justify-content: ${({ $carousel }) => ($carousel ? 'center' : 'flex-start')};
        align-items: ${({ $carousel }) => ($carousel ? 'center' : 'flex-start')};
        flex-direction: ${({ $carousel }) => ($carousel ? 'column' : 'row')};
        gap: 8px;
        width: 100%;
    }

    .tag {
        padding: 6px 12px;
        border-radius: 40px;
        background: rgba(117, 112, 114, 0.3);

        color: ${Colors.gray[400]};
        text-align: center;

        /* KR/Body/K) Body4 - Rg */

        font-size: 12px;
        font-style: normal;
        font-weight: 400;

        white-space: pre;

        width: fit-content;
    }
`;

const AsIsGridBox = (data: AsIsGridData) => {
    const { lang } = useGlobalContext();

    return (
        <AsIsContent $lang={lang}>
            <div className="title-box">
                <img src={data.img} alt={data.img} />
                <div className="title">{data.title}</div>
            </div>
            <div className="tag-box">
                {data.tags.map((tag: string, key) => (
                    <div className="tag" key={`${data.title}_${key}`}>
                        {tag}
                    </div>
                ))}
            </div>
        </AsIsContent>
    );
};

export default AsIsGridBox;
