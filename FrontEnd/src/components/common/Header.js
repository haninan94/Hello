import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import styled from 'styled-components';
import axios from 'axios';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userAtom } from '../../recoilState';
import { getCookie, removeCookie } from '../../pages/Account/cookie';
import helloIcon from '../../images/logo/logo.png';
import "../../styles/fonts.css"
import API_URL from '../../api/api';


const SAppBar = styled(AppBar)`
  position: fixed;
  padding: 4px;
  background-color: rgba(217,217,243,1);
  a {
    text-decoration: none;
    color: white;
  }
`;
const SHomeLogo = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    color:black;
  }
`;
const SIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    display: flex;
  }
`;
const SAlarmIcon = styled(NotificationsActiveIcon)`
  margin-right: 2rem;
  color:black;
`;
const SLogout = styled(LogoutSharpIcon)`
  color:black;
  cursor: pointer;
`;
const SImg = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
`;
const SHello = styled.span`
  font-size: 2rem;
  font-family: mainFont;
`;

const SLink = styled(Link)`
  width: 19.5px;
`;

function Header() {
  const accessToken = getCookie('accessToken');
  const user = useRecoilValue(userAtom);
  const resetUser = useResetRecoilState(userAtom);
  const navigate = useNavigate();

  const handleLogout = () => {
    const isLogout = window.confirm('로그아웃 하시겠습니까?');
    if (isLogout) {
      axios
        .post(
          `${API_URL}/auth/logout`,
          {},
          {
            headers: {
              Authorization: accessToken,
            },
          },
          { withCredentials: true, validateStatus: false },
        )
        .then(() => {
          removeCookie('accessToken');
          resetUser();
          navigate('/');
        });
    }
  };

  return (
    <Box>
      <SAppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <SHomeLogo>
              <Link to="/">
                <SImg src={helloIcon} alt="hello" />
              </Link>
              <Link to="/">
                <SHello>반가워</SHello>
              </Link>
            </SHomeLogo>
          </Typography>
          <SIconDiv>
            {/* <SLink to={`/alarm/${user.userId}`}>
              <SAlarmIcon />
            </SLink> */}
            {!accessToken ? null : (
              <>
                <SLink
                  to={`/alarm/${user.userId}`}
                  style={{ marginRight: '1.5rem' }}
                >
                  <SAlarmIcon />
                </SLink>
                <SLogout onClick={handleLogout} />
              </>
            )}
          </SIconDiv>
        </Toolbar>
      </SAppBar>
    </Box>
  );
}

export default Header;
