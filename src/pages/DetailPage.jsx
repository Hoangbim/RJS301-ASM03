import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ProductsItem from '../components/contents/ProductsItem';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import { cartAction, modalAction } from '../store';

function DetailPage() {
  const dispatch = useDispatch();

  //đặt giá trị trang hiện tại
  useEffect(() => {
    dispatch(modalAction.setShopPage());
  }, [dispatch]);

  //nhận giá trị product hiện tại
  const currentProduct = useSelector((state) => state.product.currentProduct);

  const [zoomedImage, setZoomedImage] = useState('');
  //đặt giá trị zoomedImage khi current product thay đổi
  useEffect(() => {
    setZoomedImage(currentProduct.img1);
  }, [currentProduct]);

  //biến lưu trữ số lượng sản phẩm
  const [productCount, setproductCount] = useState(1);

  //lấy thông tin của toàn bộ sản phẩm trên store
  const products = useSelector((state) => state.product.initProducts);
  const carts = useSelector((state) => state.cart.carts);
  const filtedProducts = products.filter(
    (item) => item.category === currentProduct.category
  );

  const setImage = (e) => {
    setZoomedImage(e.target.src);
  };

  //reset lại số lượng sản phẩm
  const resetQuantity = (e) => {
    console.log('product', e.target.id);
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

  // const cartArr = useSelector((state) => state.cart);
  // useEffect(() => {
  //   console.log(cartArr);
  // }, [carts]);

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

    ///////cập nhật localstorage///////
    const userCarts = localStorage.getItem('USERCARTS')
      ? JSON.parse(localStorage.getItem('USERCARTS'))
      : [];

    // trường hợp localStorage chưa có thông tin USERCARTS
    if ((userCarts.length = 0)) {
      const newUsercart = [
        {
          user: currentUser,
          carts: [
            {
              image: currentProduct.img1,
              name: currentProduct.name,
              price: currentProduct.price,
              quantity: productCount,
            },
          ],
        },
      ];

      localStorage.setItem('USERCARTS', JSON.stringify(newUsercart));
    }

    //trường hợp trong localstorage đã có thông tin về USERCARTS: update

    userCarts.forEach((userCart) => {
      if (userCart.user === currentUser) {
        userCart.carts.push(cart);
      }
    });

    localStorage.setItem('USERCARTS', JSON.stringify(userCarts));
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
            <h2>{currentProduct.name}</h2>
            <p className="price">
              {' '}
              {currentProduct.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND
            </p>
            <p className="short-desc">{currentProduct.short_desc}</p>
            <h4>
              CATEGORY: <span>{currentProduct.category}</span>
            </h4>
            {/* hiện thị thông báo khi người dùng chưa đăng nhập */}
            {currentUser && (
              <div className="add-cart">
                <div className="flex quantity-change space-between">
                  <p>QUANTITY</p>
                  <p>
                    <i class="fa-solid fa-caret-left" onClick={decrement}></i>{' '}
                    {productCount}{' '}
                    <i class="fa-solid fa-caret-right" onClick={increment}></i>
                  </p>
                </div>
                <button onClick={addToCart}>Add to cart</button>
              </div>
            )}
            {!currentUser && <p> Bạn cần đăng nhập để tiếp tục</p>}
          </div>
        </div>
        <div className="product-description">
          <p>DESCRIPTION</p>
          <p>PRODUCT DESCRIPTION</p>
          <p>{currentProduct.long_desc}</p>
        </div>
        <p>RELATED PRODUCTS</p>
        <div className="related-products" onClick={resetQuantity}>
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
