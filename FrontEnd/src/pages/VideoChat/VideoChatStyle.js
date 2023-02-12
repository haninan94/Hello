import styled from 'styled-components';

export const VideoChatRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin: 10%;
`;

export const JoinForm = styled.form`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10%;
  margin: 5%;
`;

export const WaitingDiv = styled.div``;

export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 10%; */
  margin-left: 10%;
  margin-right: 10%;
`;

export const RoomNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10%;
`;

export const JoinDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const JoinButton = styled.button`
  background-color: #3f51b5;
  border-radius: 5px;
  border: 1px solid #3f51b5;
  text-decoration: none;
  color: white;
  width: 40%;
  height: 8vh;
  /* font-size: 32px; */
`;

export const div = styled.div`
  position: relative;
`;

export const WaitingMessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

export const WaitingMessage = styled.p`
  font-size: 16px;
`;

export const SmallCamera = styled.div`
  position: absolute;
  top: 0em;
  right: 0em;
  width: 30%;
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ChatForm = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ChattingListBox = styled.ul`
  height: 20vh;
  border: 1px solid black;
  border-radius: 10px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Chat = styled.li``;

/* 
.stream-container {
	padding: 0;
} */