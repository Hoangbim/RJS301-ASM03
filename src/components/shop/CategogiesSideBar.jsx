import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useFetchApi } from "../hooks/fetchApi";
import { productAction } from "../../store";

const CategogiesSideBar = () => {
  //nhận data về products
  const products = useSelector((state) => state.product.initProducts);

  const dispatch = useDispatch();

  const onSelectType = (e) => {
    //biến nhận giá trị của type
    const type = e.target.textContent.toLowerCase();
    console.log(e.target.classList[0]);

    //khoanh vùng event click, ngăn click sang tiêu đề hoặc phần khác gây ra lỗi
    if (e.target.classList[0] === "row") {
      //lọc product theo giá trị click, khi all thì hiện tất cả
      const filterProducts =
        type === "all"
          ? products
          : products.filter((item) => item.category === type);

      //đặt giá trị filtedProducts vào store
      dispatch(productAction.clicked());
      dispatch(productAction.setFilterProduct(filterProducts));
    }
  };
  return (
    <CategogiesSideBarWrapper onClick={onSelectType}>
      <h3>CATEGORIES</h3>
      <h5 className="brand row">APPLE</h5>
      <p className="row">All</p>
      <div className="type-group">
        <h5 className="product-type__name row">IPHONE & MAC</h5>
        <p className="row">Iphone</p>
        <p className="row">Ipad</p>
        <p className="row">Macbook</p>
      </div>
      <div className="type-group">
        <h5 className="product-type__name row">WIRELESS</h5>
        <p className="row">Airpod</p>
        <p className="row">Watch</p>
      </div>
      <div className="type-group">
        <h5 className="product-type__name row">OTHER</h5>
        <p className="row">Mouse</p>
        <p className="row">Keyboard</p>
        <p className="row">Other</p>
      </div>
    </CategogiesSideBarWrapper>
  );
};

export default CategogiesSideBar;

const CategogiesSideBarWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  text-align: left;
  .row {
    width: 100%;
    height: 30px;
    margin: 0;
    padding-left: 20px;
    padding-top: 10px;
  }
  .brand {
    background-color: var(--color-footer_background);
    color: var(--color-background);
  }
  .product-type__name {
    background-color: var(--color-background);
    user-select: none;
  }
  p {
    opacity: 0.5;
  }
`;
