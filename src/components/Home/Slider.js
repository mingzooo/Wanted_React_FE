import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SLIDERDATA from '../../data/SliderData';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const sliderList = SLIDERDATA;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        {sliderList.map((data, idx) => {
          return (
            <SliderItem key={idx}>
              <ImageContainer alt={data.name} src={data.src}>
                <TextContainer>
                  <TextBox>
                    <Texts>
                      <Title>{data.title}</Title>
                      <SubTitle>{data.detail}</SubTitle>
                      <hr />
                      <DirectLink>바로가기 &gt;</DirectLink>
                    </Texts>
                  </TextBox>
                </TextContainer>
              </ImageContainer>
            </SliderItem>
          );
        })}
      </Slider>
    </SliderContainer>
  );
}


const SliderContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const SliderItem = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center center;

  hr {
    margin-bottom: 10px;
  }
`;

const TextContainer = styled.div`
  width: 70%;
`;

const TextBox = styled.div`
  display:flex;
  flex-direction:column;
  width: 30%;
  height: 147px;
  margin-top: 130px;
  border-radius: 3px;
  background-color: white;
`;

const Texts = styled.div`
  width:90%;
  margin:auto;
`;

const Title = styled.h2`
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  font-size: 22px;
  font-weight: 600;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
`;

const DirectLink = styled.span`
  color: #4da0f8;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
`;

export default SimpleSlider;