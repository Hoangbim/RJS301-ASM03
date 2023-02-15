import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <BannerWrapper>
      <img
        className="banner-image"
        src="./images/banner1.jpg"
        alt="banner"
      ></img>

      <div className="banner-content">
        <p className="title banner-content__text">NEW INSPIRATION 2020</p>
        <h2 className="sale-title banner-content__text">
          20% OFF ON NEW SEASON
        </h2>
        <Link to="/shop">
          <p className="type banner-content__text">Browse collections</p>
        </Link>
      </div>
    </BannerWrapper>
  );
}

export default Banner;

const BannerWrapper = styled.div`
  position: relative;

  .banner-image {
    width: 100%;
    height: auto;
  }

  .banner-content {
    width: 30%;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    text-align: left;
  }
  .banner-content__text {
    margin: 0;
  }

  .title {
    font-size: var(--fontsize-blur_title);
    opacity: 0.3;
  }
  .sale-title {
    font-weight: light;
    margin: 15px 0;
  }
  .type {
    background-color: var(--color-footer_background);
    color: var(--color-background);
    width: 60%;
    height: 40px;
    text-align: center;
    padding-top: 3%;
    font-size: 13px;
  }
`;
