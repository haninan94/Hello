/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */

import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../styles/slick-theme.css';
import '../../styles/slick.css';
import Slider from 'react-slick';
import cat1 from '../../images/dummy/cat1.png';
import gaejookee from '../../images/dummy/gaejookee.png';
import dog1 from '../../images/dummy/dog1.jpg';
import dogYawn from '../../images/dummy/dogYawn.jpg';

const SBox = styled.div`
  display: flex;
`;

const SImage = styled.img`
  // 기존
  /* width: 240px; */
  min-width: 25rem;
  max-height: 14.4rem;
  border: 1px solid black;
`;

const SSlider = styled(Slider)`
  /* margin-bottom: 5rem; */
`;

const SLiveInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px 15px 0 0;
  margin-top: 1rem;
  /* margin-bottom: 1rem; */
  font-family: mainFont;
`;

const SLiveTitleBox = styled.div`
  font-size: 1.5rem;
  margin-left: 1rem;
  text-align: center;
  display: flex;
  align-items: flex-start;
  width: 20rem;
`;

const SShelterNicknameBox = styled.div`
  /* width: 50%; */
  /* text-align: center; */
  align-items: flex-end;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

function HomeImageCarousel() {
  const settings = {
    arrows: false,
    autoplay: true,
    centerPadding: '0px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [cat1, gaejookee, dogYawn, dog1];
  const roomTitle = [
    '믹스견 사료 먹방',
    '한성깔 하지만 하찮은 솜뭉치',
    '서로 입질하고 노는 인절미들',
    '귀여운 개들 한번에 몰아보기',
  ];
  const ShelterName = ['도그마루', '도그마루', '천사의집', '천사의집'];

  const indexNum = [0, 1, 2, 3];

  return (
    <div>
      {images !== undefined ? (
        <>
          <SSlider {...settings}>
            {indexNum.map((item, index) => (
              <>
                <SLiveInfoBox>
                  <SLiveTitleBox>{roomTitle[index]}</SLiveTitleBox>
                </SLiveInfoBox>
                <SLiveInfoBox>
                  <SShelterNicknameBox>
                    {ShelterName[index]}
                  </SShelterNicknameBox>
                </SLiveInfoBox>
                <SImage src={images[index]} alt="준비중입니다" />
              </>
            ))}
          </SSlider>
        </>
      ) : null}
    </div>
  );
}

export default HomeImageCarousel;
