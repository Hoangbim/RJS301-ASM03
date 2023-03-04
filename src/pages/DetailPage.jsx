import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ProductsItem from '../components/contents/ProductsItem';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import { cartAction, modalAction } from '../store';

function DetailPage() {
  const dispatch = useDispatch();

  const [isShowAddCartMess, setIsShowAddCartMess] = useState(false);

  //đặt giá trị trang hiện tại
  useEffect(() => {
    dispatch(modalAction.setShopPage());
  }, [dispatch]);

  //nhận giá trị product hiện tại
  const currentProduct = useSelector((state) => state.product.currentProduct);

  ///tạo biến nhận ảnh của sản phẩm hiện tại
  let images = [];
  for (const key in currentProduct) {
    if (key.includes('img')) {
      images.push(currentProduct[key]);
    }
  }

  const [zoomedImage, setZoomedImage] = useState('');
  //đặt giá trị zoomedImage khi current product thay đổi
  useEffect(() => {
    setZoomedImage(currentProduct.img1);
  }, [currentProduct]);

  //biến lưu trữ số lượng sản phẩm
  const [productCount, setproductCount] = useState(1);

  //lấy thông tin của toàn bộ sản phẩm trên store
  const products = useSelector((state) => state.product.initProducts);
  const filtedProducts = products.filter(
    (item) => item.category === currentProduct.category
  );

  const setImage = (e) => {
    setZoomedImage(e.target.src);
  };

  //reset lại số lượng sản phẩm
  const resetQuantity = (e) => {
    if (e.target.id) {
      setproductCount(1);
    }
  };

  // giảm product quantity
  const decrement = () => {
    // setproductCount(count - 1);
    if (productCount > 1) setproductCount((prev) => prev - 1);
  };

  //tăng product Quantity
  const increment = () => {
    // setproductCount(count + 1);

    setproductCount((prev) => {
      return prev + 1;
    });
  };

  ////////////cập nhật usersCart//////////////////////
  // lấy currentUser
  const currentUser = useSelector((state) => state.cart);

  //thêm state vào redux store
  const addToCart = () => {
    const cart = {
      image: currentProduct.img1,
      name: currentProduct.name,
      price: currentProduct.price,
      quantity: productCount,
    };

    //cập nhật state cart
    dispatch(cartAction.addToCart(cart));

    //hiển thị thông báo đã thêm sản phẩm//
    setIsShowAddCartMess(true);
    //tắt thông báo
    setTimeout(() => {
      setIsShowAddCartMess(false);
    }, 2000);
  };

  return (
    <DetailWrapper>
      <NavBar />
      <ProductDetailWrapper>
        <div className="product-infomation">
          <div className="images">
            {images.map((url, i) => (
              <img key={i} src={url} alt="product" onClick={setImage} />
            ))}
            {/* <img src={currentProduct.img1} alt="Iphone" onClick={setImage} />
            <img src={currentProduct.img2} alt="Iphone" onClick={setImage} />
            <img src={currentProduct.img3} alt="Iphone" onClick={setImage} />
            <img src={currentProduct.img4} alt="Iphone" onClick={setImage} /> */}
          </div>
          <div className="zoomed-image">
            <img src={zoomedImage} alt="" />
          </div>
          <div className="infomation">
            <h2>{currentProduct.name}</h2>
            <p className="price">
              {' '}
              {currentProduct.price &&
                currentProduct.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              VND
            </p>
            <p className="short-desc">{currentProduct.short_desc}</p>
            <h4>
              CATEGORY: <span>{currentProduct.category}</span>
            </h4>
            {/* hiện thị thông báo khi người dùng chưa đăng nhập */}
            {currentUser.email && (
              <div className="add-cart">
                <div className="flex quantity-change space-between">
                  <p>QUANTITY</p>
                  <p>
                    <i
                      className="fa-solid fa-caret-left"
                      onClick={decrement}
                    ></i>{' '}
                    {productCount}{' '}
                    <i
                      className="fa-solid fa-caret-right"
                      onClick={increment}
                    ></i>
                  </p>
                </div>
                <button onClick={addToCart}>Add to cart</button>
              </div>
            )}
            {isShowAddCartMess && (
              <p>
                Đã thêm {productCount} {currentProduct.name} vào giỏ{' '}
              </p>
            )}
            {!currentUser.email && <p> Bạn cần đăng nhập để tiếp tục</p>}
          </div>
        </div>
        <div className="product-description">
          <p>DESCRIPTION</p>
          <p>PRODUCT DESCRIPTION</p>
          <p>{currentProduct.long_desc}</p>
        </div>
        <p>RELATED PRODUCTS</p>
        <div className="related-products" onClick={resetQuantity}>
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
    display: flex;
    flex-direction: column;
    gap: 20px;
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

  .add-cart {
    display: flex;
    height: 30px;
    width: 50%;
    justify-content: space-between;

    button {
      width: 40%;
      color: aliceblue;
      background-color: var(--color-footer_background);
    }
  }
  .quantity-change {
    width: 60%;
    border: solid 1px black;
    padding: 0 5px;
  }
`;
