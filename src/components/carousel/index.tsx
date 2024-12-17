import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ReactNode } from 'react';
import styled from 'styled-components';

import Colors from '../../theme/color';

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

const Carousel = ({ list }: { list: ReactNode[] }) => {
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
        appendDots: (dots: any) => <CustomDots>{dots}</CustomDots>
    };

    return (
        <Container>
            <Slider {...settings}>
                {list.map((Component, index) => {
                    return <Slide key={`grid-section-${index}`}>{Component}</Slide>;
                })}
            </Slider>
        </Container>
    );
};

export default Carousel;
