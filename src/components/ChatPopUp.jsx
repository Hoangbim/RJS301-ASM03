import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

function ChatPopUp() {
  return createPortal(
    <ChatPopUpWrapper className="flex column ">
      <div className="chat-header flex space-between">
        <h3>Customer Support</h3>
        <button>Let's Chat App</button>
      </div>
      <div className="conversations flex column">
        <div className="flex conversation">
          <img src="/images/customer.png" alt="chat bot" />
          <p> Xin chào!</p>
        </div>
        <div className="flex conversation">
          <img src="/images/customer.png" alt="chat bot" />
          <p> Đây là Dummy chat box!</p>
        </div>
      </div>
      <div className="chat-footer flex">
        <img src="/images/customer.png" alt="" />
        <input type="text" placeholder="Enter Message!" />
        <div className="buttons flex space-between">
          <i className="fa-solid fa-paperclip"></i>
          <i className="fa-solid fa-face-smile-wink"></i>
          <i className="fa-solid fa-paper-plane send-button"></i>
        </div>
      </div>
    </ChatPopUpWrapper>,
    document.getElementById('popup')
  );
}

export default ChatPopUp;

const ChatPopUpWrapper = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  position: fixed;
  top: 45%;
  right: 5%;
  z-index: 100;
  transition: smooth;

  //////animation
  animation-name: chat-popup;
  animation-duration: 0.3s;

  @keyframes chat-popup {
    0% {
      transform: scale(0) rotateZ(-45deg);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .chat-header {
    padding: 0 20px;
    border-bottom: solid 1px black;
    height: 40px;
    h3 {
      margin: auto 0;
    }
    button {
      height: 25px;
      width: 130px;
      margin: auto 0;
      border-radius: 5px;
      background-color: var(--color-background);
      opacity: 0.6;
    }
  }
  .conversations {
    height: 410px;
    padding: 20px 10px;
    gap: 10px;
  }
  .conversation {
    height: 30px;
    p {
      background-color: var(--color-background);
      margin-left: 10px;
      padding: 0 5px;
    }
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    margin-left: 10px;
    background-color: var(--color-background);
  }
  .chat-footer {
    height: 50px;
    border-top: 1px solid black;
    background-color: var(--color-background);
    border-radius: 0 0 10px 10px;
    padding: 7px 0;
    input {
      border: none;
      padding: 20px;
      width: 250px;
      background-color: var(--color-background);
    }
  }
  .buttons {
    width: 90px;
    padding-top: 10px;
    margin-left: 20px;
  }
  .send-button {
    color: var(--color-messenger);
  }
`;
