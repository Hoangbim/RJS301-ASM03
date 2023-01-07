import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductsItem from "../contents/ProductsItem";

import Popup from "../PopUp";

const ProductsList = ({ className }) => {
  //lấy các gía trị từ store
  const isShow = useSelector((state) => state.modal.isShowDetail);
  const isInit = useSelector((state) => state.product.isInit);
  const products = useSelector((state) => state.product.initProducts);
  const filterProducts = useSelector((state) => state.product.filterProducts);

  //tạo biến nhận giá trị của list product, khi khởi chạy thì biến có giá trị là tất cả các products.
  const renderProducts = isInit ? products : filterProducts;
  return (
    <div className={className}>
      {isShow ? <Popup /> : null}
      <div>
        <input type="text" placeholder="Enter Search Here" />
        <select name="" id="">
          <option value="">Default sorting</option>
        </select>
      </div>

      <div className="products">
        {renderProducts.length > 0
          ? renderProducts.map((item) => (
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
