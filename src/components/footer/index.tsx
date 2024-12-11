import styled from 'styled-components';

import { HIRE_HREF } from '../../constant';
import { Launch } from '../../constant/svgImages';
import { useGlobalContext } from '../../context/globalContext';
import Colors from '../../theme/color';
import ButtonBase from '../button';

const Content = styled.div`
    width: 100vw;

    padding: 40px 52px;

    display: flex;

    align-items: center;
    justify-content: space-between;

    background: ${Colors.gray[100]};
`;

const CopyRightTypo = styled.div`
    color: ${Colors.gray[200]};

    /* EN/Heading/E) H5 - Rg */
    // font-family: 'Satoshi Variable';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const RoutBox = styled.div`
    display: flex;
    flex-direciton: row;
    align-items: center;
    gap: 40px;
`;

const RouteButton = styled(ButtonBase)`
    color: ${Colors.white};

    display: flex;
    align-items: center;
    gap: 8px;

    // font-family: 'Satoshi Variable';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

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
        fill: ${Colors.white};
        stroke: ${Colors.white};
    }

    &:hover {
        color: ${Colors.priamry[5]};

        svg {
            fill: ${Colors.priamry[5]};
            stroke: ${Colors.priamry[5]};
        }
    }

    &:active {
        color: ${Colors.priamry[5]};

        svg {
            fill: ${Colors.priamry[5]};
            stroke: ${Colors.priamry[5]};
        }
    }
`;

const thisYear = new Date().getFullYear();

const Footer = () => {
    const { lang } = useGlobalContext();

    const donueHref = lang === 'ko' ? 'https://donue.co.kr/' : 'https://donue.co.kr/en';

    return (
        <Content>
            <CopyRightTypo>ⓒ {thisYear} FIG all rights reserved</CopyRightTypo>

            <RoutBox>
                <RouteButton onClick={() => window.open(donueHref, '_blank')}>
                    donue <Launch />
                </RouteButton>

                <RouteButton onClick={() => window.open(HIRE_HREF, '_blank')}>
                    careers <Launch />
                </RouteButton>
            </RoutBox>
        </Content>
    );
};

export default Footer;
