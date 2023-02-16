/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../styles/slick-theme.css';
import '../../styles/slick.css';
import Slider from 'react-slick';

const SImage = styled.img`
  width: 240px;
  height: 200px;
  /* border: 1px solid black; */
`;

const SSlider = styled(Slider)`
  margin-bottom: 2rem;
`;

function ImageCarousel(props) {
  const images = props.animalImages;

  const settings = {
    arrows: true,
    autoplay: true,
    centerPadding: '0px',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {images !== undefined ? (
        <SSlider {...settings}>
          {images.map(image => (
            <SImage src={image} />
          ))}
        </SSlider>
      ) : null}
    </div>
  );
}

export default ImageCarousel;
