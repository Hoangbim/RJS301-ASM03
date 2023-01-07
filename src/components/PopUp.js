import React, { Fragment } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../store";

const Modal = () => {
  const currentProduct = useSelector((state) => state.product.currentProduct);
  console.log(currentProduct);
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
        <button className="btn-detail">
          <i className="fa-solid fa-cart-shopping"></i> View Detail
        </button>
      </div>
    </ModalWrapper>
  );
};

const Overlay = () => {
  return <OverlayWrapper></OverlayWrapper>;
};

const Popup = () => {
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
  width: 800px;
  height: 600px;
  background-color: var(--color-content_background);
  position: fixed;
  top: 15%;
  left: 25%;
  z-index: 10;

  .description {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
  .btn-detail {
    width: 70%;
    height: 30px;
    background-color: var(--color-footer_background);
    color: var(--color-background);
    margin: auto;
  }

  img {
    height: auto;
    width: 50%;
    margin: auto;
    padding: 0 10px;
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
  opacity: 0.3;
`;
