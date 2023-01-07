import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useFetchApi } from "../hooks/fetchApi";
import Popup from "../PopUp";
import ProductsItem from "./ProductsItem";

function TrendingProducts() {
  //lấy giá trị isShowDetail từ store
  const isShow = useSelector((state) => state.modal.isShowDetail);

  //fetch api để lấy giá trị products
  const products = useSelector((state) => state.product.initProducts);

  return (
    <ProductsWrapper>
      <p>MADE THE HARD WAY</p>
      <h3>TOP TRENDING PRODUCTS</h3>
      {isShow ? <Popup /> : null}
      <div className="products">
        {products.length > 0
          ? products.map((item) => (
              <ProductsItem
                key={item._id.$oid}
                id={item._id.$oid}
                imgUrl={item.img1}
                productName={item.name}
                price={item.price}
              />
            ))
          : ""}
      </div>
    </ProductsWrapper>
  );
}

export default TrendingProducts;

const ProductsWrapper = styled.div`
  text-align: left;
  margin: 30px 0;

  h3 {
    margin: 0 0 20px 0;
    padding: 0;
  }

  p {
    font-size: var(--fontsize-blur_title);
    opacity: 0.3;
    margin-bottom: 0;
  }

  .products {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
