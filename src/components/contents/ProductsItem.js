import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { modalAction } from '../../store';
import { productAction } from '../../store';

function ProductsItem(props) {
  //lấy giá trị từ store
  const products = useSelector((state) => state.product.initProducts);
  const isShopPage = useSelector((state) => state.modal.isShopPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showProductDetail = (e) => {
    //khi ở không phải ở shopPage thì hiện thị popUp
    if (!isShopPage) {
      dispatch(modalAction.showDetail());
    }
    //khi ở shopPage thì chuyển hướng đến trang detail
    if (isShopPage) {
      navigate(`/detail/${e.target.id}`, { replace: false });
    }
    let curProduct;
    if (products.length > 0) {
      [curProduct] = products.filter((item) => item._id.$oid === e.target.id);

      dispatch(productAction.setCurrent(curProduct));
    }
  };
  return (
    <ItemWrapper>
      <div>
        <div className="product-image">
          <div
            className="overlay"
            onClick={showProductDetail}
            id={props.id}
          ></div>
          <img src={props.imgUrl} alt="Product" />
        </div>
        <p className="product-name">{props.productName}</p>
        <p>{props.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND</p>
      </div>
    </ItemWrapper>
  );
}

export default ProductsItem;

const ItemWrapper = styled.div`
  // width: 23%;
  max-width: 230px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 20px 0 0 0;
  
  animation-name: appear;
  animation-duration: 1s;
  

  @keyframes appear {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    90% { opacity: 0.6}
    100% {transform: scale(1);
    opacity: 1;}
  };


  

  a {
    text-decoration: none;
    color: var(--color-footer_background)
  }
  p {
    width: 80%;
    margin: 0 auto;
    // opacity: 0.8;
  }
  .product-name {
    opacity: 0.8;
  }

  .product-image {
    position: relative;
  }
  img {
    width: 100%;
height: 100%
    margin-bottom: 10px;
  }

  .overlay {
    position: absolute;
      background-color: var(--color-background);
      z-index: 1;
      opacity: 0;
      width: 100%;
      height: 100%;
      :hover {
        opacity: 0.2;
      }
      // border-radius: 15px;
    }
  }

`;
