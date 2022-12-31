import React from "react";
import styled from "styled-components";
import CategogiesSideBar from "./CategogiesSideBar";
import ProductsListWrapper from "./ProductsList";
// import ProductsList from "./ProductsList";
import ShopBanner from "./ShopBanner";

const ShopContents = () => {
  return (
    <ShopContentWrapper>
      <ShopBanner />
      <div className="main-content">
        <CategogiesSideBar />
        <ProductsListWrapper />
      </div>
    </ShopContentWrapper>
  );
};

export default ShopContents;

const ShopContentWrapper = styled.div`
  max-width: 996px;
  background-color: aliceblue;
  margin: auto;
  .main-content {
    display: flex;
    justify-content: space-between;
  }
`;
