import React from "react";
import styled from "styled-components";

const AboutShop = () => {
  return (
    <AboutWrapper>
      <div className="row-1 shipping">
        <div className="col-3">
          <h3>FREE SHIPPING</h3>
          <p>Free shipping worlwide</p>
        </div>
        <div className="col-3">
          <h3>24 X 7 SERVICE</h3>
          <p>Free shipping worlwide</p>
        </div>
        <div className="col-3">
          <h3>FESTIVAL OFFER</h3>
          <p>Free shipping worlwide</p>
        </div>
      </div>
      <div className="row-1 contact">
        <div className="col-2">
          <h3>LET'S BE FRIENDS!</h3>
          <p>Nisi nisi tempor consequat laboris nisi</p>
        </div>
        <div className="col-2 right">
          <input type="text" placeholder="Enter your email andress" />
          <button>Subscribe</button>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default AboutShop;

const AboutWrapper = styled.div`
  .row-1 {
    display: flex;
    justify-content: space-between;
    text-align: center;
    height: 130px;
    padding: 32px 0;
  }
  .shipping {
    background-color: var(--color-background);
  }
  p {
    font-size: var(--fontsize-blur_title);
    opacity: 0.3;
  }
  .col-3 {
    width: 33%;
    margin: auto 0;
    h3 {
      margin: auto;
    }
  }

  .contact {
    margin: auto 0;
  }

  .col-2 {
    margin: auto 0;
    text-align: left;
    width: 50%;
    height: 80px;

    h3,
    p {
      margin: 0 0 10px 0;
    }

    input {
      height: 50px;
      width: 65%;
      padding: 0 0 0 20px;
      border: 1px solid;
    }

    button {
      height: 52px;
      width: 30%;
      background-color: var(--color-footer_background);
      color: var(--color-background);
      font-size: 18px;
      border: none;
      padding: 0;
      transform: translateY(1px);
    }
  }

  .right {
    text-align: right;
  }
`;
