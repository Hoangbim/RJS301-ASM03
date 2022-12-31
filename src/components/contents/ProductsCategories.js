import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProductsCategories() {
  return (
    <CategoriesWrapper>
      <p>CAREFULLY CREATED COLLECTIONS</p>
      <h3>BROWSE OUR CATEGOGIES</h3>
      <div className="categogy-row row-2">
        <Link to={"/shop"}>
          <div className="image-overlay"></div>
          <img className="row-2" src="./images/product_1.png" alt="iphone" />
        </Link>

        <Link to={"/shop"}>
          <div className="image-overlay"></div>
          <img src="./images/product_2.png" alt="iphone" />
        </Link>
      </div>
      <div className="categogy-row row-2">
        <Link to={"/shop"}>
          <div className="image-overlay"></div>
          <img className="row-2" src="./images/product_3.png" alt="iphone" />
        </Link>

        <Link to={"/shop"}>
          <div className="image-overlay"></div>
          <img src="./images/product_4.png" alt="iphone" />
        </Link>

        <Link to={"/shop"}>
          <div className="image-overlay"></div>
          <img src="./images/product_5.png" alt="iphone" />
        </Link>
      </div>
    </CategoriesWrapper>
  );
}

export default ProductsCategories;

const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 0;
  p {
    font-size: var(--fontsize-blur_title);
    opacity: 0.3;
    margin: 0;
  }
  h3 {
    margin: 5px 0 0px 0;
  }

  .categogy-row {
    display: flex;
    gap: 25px;
    margin: 10px 0;
  }

  .row-2 a {
    height: 300px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }

    .image-overlay {
      position: absolute;
      background-color: var(--color-background);
      z-index: 1;
      opacity: 0;
      width: 100%;
      height: 100%;
      :hover {
        opacity: 0.3;
      }
      border-radius: 15px;
    }
  }
`;
