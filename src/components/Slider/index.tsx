import React from 'react';  
import Slider from "react-slick"; 

interface Props {
    slidesToShow?: any;
    slidesToScroll?: any;
    children?: React.ReactNode;
}

export const SlickSlider: React.FC<Props> = (props: Props) => {
    const slidesToShow = props?.slidesToShow;
    const slidesToScroll = props?.slidesToScroll;
    const children = props?.children;
    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll, 
    };
  return (
    <Slider {...settings} {...slidesToShow} {...slidesToScroll}>
        {children}
    </Slider>
  );
};

export default SlickSlider;