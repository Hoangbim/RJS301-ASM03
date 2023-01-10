import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ProductsItem from '../components/contents/ProductsItem';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import { modalAction } from '../store';

function DetailPage() {
  //đặt giá trị trang hiện tại
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(modalAction.setHomePage());
  }, []);
  //nhận giá trị product hiện tại
  const currentProduct = useSelector((state) => state.product.currentProduct);

  //nếu để state này điều khiển việc hiển thị của ảnh zoomed thì khi click vào sản phẩm ở related ảnh sẽ không thay đổi!!!! cho nên thử đưa biêns này vào store, và khi setCurrentProduct cũng set lại luôn biến này !!
  const [zoomedImage, setZoomedImage] = useState(currentProduct.img1);
  const products = useSelector((state) => state.product.initProducts);
  console.log(products);
  const filtedProducts = products.filter(
    (item) => item.category === currentProduct.category
  );
  console.log(filtedProducts);
  const setImage = (e) => {
    console.log(currentProduct);
    setZoomedImage(e.target.src);
  };

  return (
    <DetailWrapper>
      <NavBar />
      <ProductDetailWrapper>
        <div className="product-infomation">
          <div className="images">
            <img src={currentProduct.img1} alt="Iphone" onClick={setImage} />
            <img src={currentProduct.img2} alt="Iphone" onClick={setImage} />
            <img src={currentProduct.img3} alt="Iphone" onClick={setImage} />
            <img src={currentProduct.img4} alt="Iphone" onClick={setImage} />
          </div>
          <div className="zoomed-image">
            <img src={zoomedImage} alt="" />
          </div>
          <div className="infomation">
            <h3>{currentProduct.name}</h3>
            <p className="price"> {currentProduct.price}</p>
            <p className="short-desc">{currentProduct.short_desc}</p>
            <h6>
              CATEGORY: <span>{currentProduct.category}</span>
            </h6>
          </div>
        </div>
        <div className="product-description">
          <p>DESCRIPTION</p>
          <p>PRODUCT DESCRIPTION</p>
          <p>{currentProduct.long_desc}</p>
        </div>
        <p>RELATED PRODUCTS</p>
        <div className="related-products">
          {/* {filtedProducts.map((item) => (
            <div className="related-item" key={item._id.$oid}>
              <img src={item.img1} alt="iphone" />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))} */}

          {filtedProducts.length > 0
            ? filtedProducts.map((item) => (
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
      </ProductDetailWrapper>
      <Footer />
    </DetailWrapper>
  );
}

export default DetailPage;

const DetailWrapper = styled.div``;
const ProductDetailWrapper = styled.div`
  max-width: 996px;
  display: flex;
  flex-direction: column;
  margin: auto;

  .product-infomation {
    display: flex;
  }

  .images {
    width: 10%;
    display: flex;
    flex-direction: column;
  }
  .zoomed-image {
    width: 40%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .infomation {
    width: 48%;
    text-align: left;
    padding-left: 20px;
  }
  .product-description {
    // width: 60%;
    text-align: left;
  }
  span {
    font-weight: lighter;
  }
  .related-products {
    display: flex;
    gap: 20px;
  }
  .related-item {
    width: 20%;
    text-align: left;
    img {
      width: 100%;
      height: auto;
    }
  }
`;
