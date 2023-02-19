import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { productAction } from '../../store';
import ProductsItem from '../contents/ProductsItem';

import Popup from '../PopUp';

const ProductsList = ({ className }) => {
  //lấy các gía trị từ store
  const isShow = useSelector((state) => state.modal.isShowDetail);
  const isInit = useSelector((state) => state.product.isInit);
  const products = useSelector((state) => state.product.initProducts);
  const filterProducts = useSelector((state) => state.product.filterProducts);
  const dispatch = useDispatch();

  const sortValue = useSelector((state) => state.product.sortValue);

  const [searchName, setSearchName] = useState('');
  //tạo biến nhận giá trị của list product, khi khởi chạy thì biến có giá trị là tất cả các products.
  const renderProducts = isInit ? products : filterProducts;

  //hàm search theo tên
  const searchByname = (e) => {
    dispatch(productAction.shopPageClicked());
    setSearchName(e.target.value);
    //lọc sản phẩm thoả mãn yêu cầu
    const seachProduct = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value)
    );
    //cập nhật state trong store
    dispatch(productAction.setFilterProduct(seachProduct));
  };

  const sortProduct = (e) => {
    const sortProduct = [...renderProducts];
    dispatch(productAction.shopPageClicked());

    if (e.target.value === 'increment') {
      sortProduct.sort((a, b) => +a.price - b.price);
    }
    if (e.target.value === 'decrement') {
      sortProduct.sort((a, b) => +b.price - a.price);
    }
    //cập nhật state trong store
    dispatch(productAction.setFilterProduct(sortProduct));
    dispatch(productAction.setSortValue(e.target.value));
  };

  return (
    <div className={className}>
      {isShow ? <Popup /> : null}
      <div className="flex space-between search-sort">
        <input
          type="text"
          placeholder="Enter Search Here"
          onChange={searchByname}
          value={searchName}
        />
        <select name="" id="" onChange={sortProduct} value={sortValue}>
          <option value="default">Default sort</option>
          <option value="increment">Giá tăng dần</option>
          <option value="decrement">Giá giảm dần</option>
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
          : ''}
      </div>

      <div className="page-button flex column">
        <div className="flex buttons">
          <div className=" button">
            <i className="fa-solid fa-angles-left"></i>
          </div>
          <p className="page">1</p>
          <div className="button">
            <i className="fa-solid fa-angles-right"></i>
          </div>
        </div>

        <p>
          Showing {renderProducts.length} of {renderProducts.length} results
        </p>
      </div>
    </div>
  );
};

const ProductsListWrapper = styled(ProductsList)`
  width: 75%;
  margin-bottom: 30px;

  .search-sort {
    input {
      height: 30px;
      padding: 15px;
    }
    select {
      border-radius: 5px;
      width: 20%;
      height: 20px;
    }
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .page-button {
    justify-content: flex-end;
    text-align: right;
  }
  .buttons {
    justify-content: flex-end;
  }
  .page {
    width: 40px;
    height: 27px;
    text-align: center;
    background-color: var(--color-footer_background);
    color: aliceblue;
  }
  .button {
    width: 40px;
    height: 27px;
    border: solid 1px black;
  }
  i {
    margin: auto 13px;
    transform: scale(1.1);
  }
`;

export default ProductsListWrapper;
