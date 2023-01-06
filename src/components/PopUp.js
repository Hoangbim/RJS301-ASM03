import React, { Fragment } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../store";

const Modal = (props) => {
  const currentProduct = useSelector((state) => state.modal.currentProduct);
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(modalAction.hideDetail());
  };

  return (
    <ModalWrapper>
      <img src={currentProduct.img1} alt="Product" />
      <div className="description">
        <button onClick={closePopup} className="close-popup">
          X
        </button>
        <h3 className="product-name">{currentProduct.name}</h3>
        <p className="product-price">{`${currentProduct.price.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        )} VND`}</p>
        <p className="product-description">{currentProduct.short_desc}</p>
        <button>
          <i className="fa-solid fa-cart-shopping"></i> View Detail
        </button>
      </div>
    </ModalWrapper>
  );
};

const Overlay = (props) => {
  return <OverlayWrapper></OverlayWrapper>;
};

const Popup = (props) => {
  return createPortal(
    <Fragment>
      <Modal />
      <Overlay />
    </Fragment>,
    document.getElementById("popup")
  );
};

export default Popup;

const ModalWrapper = styled.div`
  display: flex;
  width: 700px;
  height: 450px;
  background-color: var(--color-content_background);
  position: fixed;
  top: 25%;
  left: 25%;
  z-index: 10;

  .description {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 100%;
    width: 50%;
  }

  .close-popup {
    width: 40px;
    float: right;
    position: absolute;
    right: 2px;

    top: 2px;
  }
`;

const OverlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
  background-color: black;
  opacity: 0.2;
`;
