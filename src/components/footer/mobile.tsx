import styled from 'styled-components';

import { HIRE_HREF } from '../../constant';
import { Launch } from '../../constant/svgImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import { hexToRGBA } from '../../util';
import ButtonBase from '../button';

const Content = styled.div`
    display: flex;
    width: 100%;
    padding: 32px 52px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    background: ${Colors.gray[100]};
`;

const CopyRightTypo = styled.div`
    color: ${Colors.gray[200]};
    font-size: 13px;
    font-weight: 400;
`;

const RoutBox = styled.div`
    display: flex;
    flex-direciton: row;
    align-items: center;
    gap: 40px;
`;

const RouteButton = styled(ButtonBase)`
    color: ${Colors.gray[300]};

    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 16px;

    font-weight: 700;
    line-height: 24px;

    background: transparent;
    margin: 0;
    padding: 0;
    border: unset;

    cursor: pointer;

    text-transform: uppercase;

    transition: color 0.2s;

    svg {
        transition:
            fill 0.2s,
            stroke 0.2s;
        fill: ${Colors.gray[300]};
        stroke: ${Colors.gray[300]};
    }

    &:active {
        color: ${Colors.priamry[5]};

        svg {
            fill: ${Colors.priamry[5]};
            stroke: ${Colors.priamry[5]};
        }
    }
`;

const Divider = styled.div`
    width: 100%;
    border-bottom: 1px solid;
    border-color: ${hexToRGBA(Colors.gray[200], 0.3)};
`;

const thisYear = new Date().getFullYear();

const Mobile = () => {
    const { lang } = useGlobalContext();

    const donueHref = lang === 'ko' ? 'https://donue.co.kr/' : 'https://donue.co.kr/en';

    return (
        <Content>
            <RoutBox>
                <RouteButton onClick={() => window.open(donueHref, '_blank')}>
                    donue <Launch />
                </RouteButton>

                <RouteButton onClick={() => window.open(HIRE_HREF, '_blank')}>
                    careers <Launch />
                </RouteButton>
            </RoutBox>

            <Divider />

            <CopyRightTypo>ⓒ {thisYear} FIG all rights reserved</CopyRightTypo>
        </Content>
    );
};

export default Mobile;
