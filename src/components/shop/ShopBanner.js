import React from 'react';
import styled from 'styled-components';

const ShopBanner = () => {
  return (
    <ShopBannerWrapper className="flex space-between">
      <h1>SHOP</h1>
      <h3>SHOP</h3>
    </ShopBannerWrapper>
  );
};

export default ShopBanner;
const ShopBannerWrapper = styled.div`
  padding: 0 35px;
  height: 150px;
  background-color: var(--color-background);
  margin-bottom: 29px;
  h3 {
    margin: auto 0;
    opacity: 0.5;
  }
  h1 {
    margin: auto 0;
  }
`;
