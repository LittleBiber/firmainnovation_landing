import { useMemo } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from 'styled-components';

import { AsIsGridData, ToBeGridData } from '../../@types';
import Colors from '../../theme/color';
import ToBeCarouselBox from '../box/toBeCarouselBox';

const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: 330px;
    margin: 0 auto;

    padding-bottom: 28px;
    position: relative;
`;

const Slide = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CustomDots = styled.ul`
    display: flex !important;
    justify-content: center;
    padding: 0;
    margin: 0;

    li {
        width: 8px;
        height: 8px;
        margin: 0 5px;
        border-radius: 50%;
        background-color: #807e7e;
        list-style: none;
        transition: width 0.3s ease;

        &.slick-active {
            background-color: ${Colors.priamry[5]};
            border-radius: 4px;
        }

        button {
            display: none;
        }
    }
`;

const CarouselSection = ({ variableCards, list }: { variableCards?: boolean; list: AsIsGridData[] | ToBeGridData[] }) => {
    const responsiveOptions = useMemo(() => {
        if (variableCards)
            return [
                {
                    breakpoint: 1320,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ];
        else return undefined;
    }, [variableCards]);

    const settings: Settings = {
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        customPaging: (i) => <ul style={{ opacity: 0 }}>{i}</ul>,
        appendDots: (dots: any) => <CustomDots>{dots}</CustomDots>,
        responsive: responsiveOptions
    };

    return (
        <Container>
            <Slider {...settings}>
                {list.map((data: ToBeGridData) => {
                    return (
                        <Slide key={`grid-section-${data.title}`}>
                            <ToBeCarouselBox {...data} key={`grid-duet-${data.title}`} />
                        </Slide>
                    );
                })}
            </Slider>
        </Container>
    );
};

export default CarouselSection;
