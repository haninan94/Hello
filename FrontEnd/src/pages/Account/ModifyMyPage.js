import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import Header from '../../components/common/Header';
import Nav from '../../components/common/Nav';
import { userAtom } from '../../recoilState';
import API_URL from '../../api/api';

const SImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px;
  background-color: grey;
`;

// const SLinkList = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 20px;
//   a {
//     text-decoration: none;
//     color: grey;
//   }
// `;

function ModifyMyPage() {
  const [user, setUser] = useRecoilState(userAtom);
  const [name, setName] = useState(user.name);
  const [nickname, setNickname] = useState(user.nickname);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  // const [profileImg, setProfileImg] = useState(user.profileImg);
  const handleName = () => {
    setName(name);
  };
  const handleNickname = () => {
    setNickname(nickname);
  };
  const handlePhoneNumber = () => {
    setPhoneNumber(phoneNumber);
  };

  const handleModifyUserInfo = () => {
    setUser({
      name,
      nickname,
      phoneNumber,
    });
    axios.put(`${API_URL}/user/${nickname}`).then(res => console.log(res));
    // 추가 수정 필요
  };

  return (
    <>
      <Header />
      <SImage />
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <Input placeholder={user.email} disabled />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <Input
            placeholder={user.name}
            defaultValue={name}
            onChange={handleName}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SentimentSatisfiedAltIcon />
            </Avatar>
          </ListItemAvatar>
          <Input
            placeholder={user.nickname}
            defaultValue={nickname}
            onChange={handleNickname}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SmartphoneIcon />
            </Avatar>
          </ListItemAvatar>
          <Input
            placeholder="핸드폰 번호 입력"
            defaultValue={phoneNumber}
            onChange={handlePhoneNumber}
          />
        </ListItem>
      </List>
      <Button onClick={handleModifyUserInfo}>수정</Button>

      <Nav />
    </>
  );
}

export default ModifyMyPage;
