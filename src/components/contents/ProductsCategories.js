import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { productAction } from '../../store';

function ProductsCategories() {
  //lấy products từ store
  const products = useSelector((state) => state.product.initProducts);
  const dispatch = useDispatch();
  const goToCategory = (e) => {
    console.log(e.target.id);
    if (products.length > 0) {
      const filtedProducts = products.filter(
        (item) => item.category === e.target.id
      );
      //đặt trạng thái của shopPage là đã click để hiển thị theo filtedProducts
      dispatch(productAction.shopPageClicked());
      //đặt filtedProducts vào store
      dispatch(productAction.setFilterProduct(filtedProducts));
    }
  };
  return (
    <CategoriesWrapper>
      <p>CAREFULLY CREATED COLLECTIONS</p>
      <h3>BROWSE OUR CATEGOGIES</h3>
      <div className="categogy-row row-2" onClick={goToCategory}>
        <Link to={'/shop'}>
          <div id="iphone" className="image-overlay"></div>
          <img className="row-2" src="./images/product_1.png" alt="iphone" />
        </Link>

        <Link to={'/shop'}>
          <div id="macbook" className="image-overlay"></div>
          <img src="./images/product_2.png" alt="iphone" />
        </Link>
      </div>
      <div className="categogy-row row-2" onClick={goToCategory}>
        <Link to={'/shop'}>
          <div id="ipad" className="image-overlay"></div>
          <img className="row-2" src="./images/product_3.png" alt="iphone" />
        </Link>

        <Link to={'/shop'}>
          <div id="watch" className="image-overlay"></div>
          <img src="./images/product_4.png" alt="iphone" />
        </Link>

        <Link to={'/shop'}>
          <div id="airpod" className="image-overlay"></div>
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
