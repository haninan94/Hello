/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import '../../styles/slick-theme.css';
import '../../styles/slick.css';
import Slider from 'react-slick';
import { useRecoilState } from 'recoil';
import API_URL from '../../api/api';
import { getCookie } from '../../pages/Account/cookie';
import { twoWeeksAtom } from '../../recoilState';

const SContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;
const STimeList = styled.div``;
const STimeBox = styled.div`
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  background-color: white;
`;
const STime = styled.div`
  font-size: 2.5rem;
  font-family: 'cafe24';
`;
const SNickName = styled.div`
  font-size: 1.5rem;
  font-family: 'cafe24';
`;

const SButtonDiv = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const SButton = styled.button`
  width: 80%;
  height: 5vh;
  background-color: rgba(180, 210, 210, 0.8);
  border: none;
  font-size: 1.2rem;
  border-radius: 10px;
  font-family: 'cafe24';
  color: grey;
  &:active,
  &:hover {
    color: black;
    background-color: rgba(180, 230, 230);
  }
`;

const SClickButton = styled.button`
  width: 5.5rem;
  height: 3.5vh;
  border: none;
  font-size: 1.2rem;
  border-radius: 10px;
  font-family: 'cafe24';
  color: white;
  background-color: ${props => props.bgColor};
`;

function CreateSchedule() {
  const settings = {
    arrows: false,
    autoplay: false,
    centerPadding: '10px',
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [twoWeeks, setTwoWeeks] = useRecoilState(twoWeeksAtom);

  useEffect(() => {
    const weeks = [];
    for (let i = 0; i < 14; i += 1) {
      const to = new Date();
      const nxtDay = new Date(to.setDate(to.getDate() + i));
      const todayMonth = (nxtDay.getMonth() + 1).toString();
      const todayDate = nxtDay.getDate().toString();
      weeks.push({ month: todayMonth, day: todayDate });
    }
    setTwoWeeks(weeks);
  });

  return (
    <>
      <Slider {...settings}>
        {twoWeeks.map((date, index) => (
          <SButtonDiv key={index}>
            <SButton
              type="button"
              value={date.month.padStart(2, '0') + date.day.padStart(2, '0')}
            >
              {date.month}월 {date.day}일
            </SButton>
          </SButtonDiv>
        ))}
      </Slider>
      <STimeList>
        {/* {todaySchedule.map((schedule, index) => (
          <STimeBox key={index}>
            <SContainer>
              <div>
                <STime>
                  {schedule.time.toString().padStart(2, '0')}:00 ~{' '}
                  {(schedule.time + 1).toString().padStart(2, '0')}:00
                </STime>
                <SNickName>{schedule.userNickname}</SNickName>
              </div>
              <div>예약</div>
            </SContainer>
          </STimeBox>
        ))} */}
      </STimeList>
    </>
  );
}
export default CreateSchedule;