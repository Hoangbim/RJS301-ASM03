import React from "react";

import styled from "styled-components";
import AboutShop from "../contents/AboutShop";
import Banner from "../contents/Banner";
import ProductsCategories from "../contents/ProductsCategories";
import TrendingProducts from "../contents/TrendingProducts";
// import banner1 from "../../../public";

function Content() {
  return (
    <ContentWrapper>
      <Banner />
      <ProductsCategories />
      <TrendingProducts />
      <AboutShop />
    </ContentWrapper>
  );
}

export default Content;

const ContentWrapper = styled.div`
  max-width: 996px;
  background-color: aliceblue;
  // height: 50rem;
  margin: auto;
`;
