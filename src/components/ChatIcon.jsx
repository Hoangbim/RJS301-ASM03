import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { modalAction } from '../store';

function ChatIcon() {
  const dispatch = useDispatch();

  const showChatWindow = () => {
    dispatch(modalAction.showHideChatPopUp());
  };
  return (
    <ChatIconWrapper onClick={showChatWindow}>
      <i className="fa-brands fa-facebook-messenger"></i>
    </ChatIconWrapper>
  );
}

export default ChatIcon;

const ChatIconWrapper = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  top: 95%;
  right: 5%;
  transform: scale(3);
  color: aliceblue;
  background-color: var(--color-messenger);
  border-radius: 14px;
  z-index: 100;

  i {
    transform: translateY(-1px);
    width: 16px;
    height: 16px;
  }
`;
