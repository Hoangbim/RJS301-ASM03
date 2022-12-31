import React, { useState } from "react";
import styled from "styled-components";
import ProductsItem from "../contents/ProductsItem";
import { useFetchApi } from "../hooks/fetchApi";
import Popup from "../PopUp";

const ProductsList = ({ className }) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const onCloseHandler = () => {
    setIsShowDetail(false);
  };

  const showProductDetail = () => {
    setIsShowDetail(true);
  };

  const [products] = useFetchApi();
  return (
    <div className={className}>
      {isShowDetail ? (
        <Popup closeHandler={onCloseHandler} closePopup={onCloseHandler} />
      ) : null}
      <div>
        <input type="text" placeholder="Enter Search Here" />
        <select name="" id="">
          <option value="">Default sorting</option>
        </select>
      </div>

      <div className="products">
        {products.length > 0
          ? products.map((item) => (
              <ProductsItem
                key={item._id.$oid}
                id={item._id.$oid}
                imgUrl={item.img1}
                productName={item.name}
                price={item.price}
                showDetail={showProductDetail}
              />
            ))
          : ""}
      </div>

      <div className="page-button">
        <p className="back-button">
          <i className="fa-regular fa-backward-step"></i>
        </p>
        <p>1</p>
        <p className="forward-button">
          <i className="fa-regular fa-backward-step"></i>
        </p>
      </div>
    </div>
  );
};

const ProductsListWrapper = styled(ProductsList)`
  //   display: flex;
  //   flex-direction: column;
  width: 75%;

  .products {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
  .page-button {
    display: flex;
    justify-content: flex-end;
  }
  .back-button {
    width: 40px;
    height: 30px;
  }
`;

export default ProductsListWrapper;
