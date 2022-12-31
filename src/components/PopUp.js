import React, { Fragment, ReactDOM } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Modal = (props) => {
  return (
    <ModalWrapper>
      <h1>Modal</h1>
      <img src="" alt="Product image" />
      <div className="description">
        <h3 className="product-name">{props.test}</h3>
        <p className="product-price"></p>
        <p className="product-description"></p>
        <button>
          <i className="fa-solid fa-cart-shopping"></i> View Detail
        </button>
      </div>
      <button onClick={props.closePopup}>X</button>
    </ModalWrapper>
  );
};

const Overlay = (props) => {
  return <OverlayWrapper></OverlayWrapper>;
};

const Popup = (props) => {
  return createPortal(
    <Fragment>
      <Modal test={props.test} closePopup={props.closePopup} /> <Overlay />
    </Fragment>,
    document.getElementById("popup")
  );
};

export default Popup;

const ModalWrapper = styled.div`
  width: 700px;
  height: 450px;
  background-color: var(--color-content_background);
  position: fixed;
  top: 25%;
  left: 25%;
  z-index: 10;
`;

const OverlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
  background-color: black;
  opacity: 0.2;
`;
