import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { cartAction } from '../../store';
import { Link } from 'react-router-dom';

function CartContent() {
  const carts = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.cart.carts);

  let subtotal = 0;
  for (let i = 0; i < carts.length; i++) {
    subtotal = subtotal + carts[i].price * carts[i].quantity;
  }

  //xoá sản phẩm khỏi giỏ hàng
  const deleteProduct = (e) => {
    const { name } = e.target.dataset;
    console.log(name);
    dispatch(cartAction.deleteCart(name));
  };

  //tăng số lượng sản phẩm
  const increment = (e) => {
    const { name } = e.target.dataset;

    for (let i = 0; i < carts.length; i++) {
      if (carts[i].name === name) {
        dispatch(cartAction.increaseQuantity(i));
        console.log(carts[i]);
      }
    }
  };

  //giảm số lượng sản phẩm
  const decrement = (e) => {
    const { name } = e.target.dataset;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].name === name) dispatch(cartAction.decreaseQuantity(i));
    }
    // dispatch(cartAction.decreaseQuantity(name));
  };
  return (
    <Fragment>
      <CartContentWrapper>
        <div className="cart-header">
          <h1>CART</h1>
          <h3>CART</h3>
        </div>
        <h2>SHOPPING CART</h2>
        <div className="cart-detail">
          <div className="cart-detail__left">
            <table>
              <thead>
                <tr className="table-head">
                  <th className="col-1">IMAGE</th>
                  <th className="col-2">PRODUCT</th>
                  <th className="col-1"> PRICE</th>
                  <th className="col-1">QUANTITY</th>
                  <th className="col-1">TOTAL</th>
                  <th className="col-1">REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {userCart.map((product, i) => (
                  <tr key={i}>
                    <td className="col-1">
                      <img src={product.image} alt="product-img" />
                    </td>
                    <td className="col-2">{product.name}</td>
                    <td className="col-1">
                      {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND
                    </td>
                    <td className="col-1">
                      <i
                        className="fa-solid fa-caret-left"
                        onClick={decrement}
                        data-name={product.name}
                      >
                        {' '}
                      </i>
                      {'   '}
                      {product.quantity}
                      {'  '}
                      <i
                        className="fa-solid fa-caret-right"
                        onClick={increment}
                        data-name={product.name}
                      ></i>
                    </td>
                    <td className="col-1">
                      {(product.price * product.quantity)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                      VND
                    </td>
                    <td className="col-1">
                      <i
                        className="fa-solid fa-trash"
                        data-name={product.name}
                        onClick={deleteProduct}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="page-navigate">
              <Link to="/shop" className="nav-button">
                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                <p>Continue shopping</p>
              </Link>

              <Link to="/checkout" className="nav-button">
                Proceed to check out
                {'  '}
                <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="cart-detail__right">
            <h3>CART TOTAL</h3>
            <div className="subtotal">
              <p>SUBTOTAL</p>
              <p>
                {subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND
              </p>
            </div>
            <div className="subtotal">
              <p>TOTAL</p>
              <p>
                {subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND
              </p>
            </div>
            <div className="coupon">
              <input type="text" placeholder="Enter your coupon" />
              <button>
                <i className="fa-solid fa-gift"></i> {'  '} Apply coupon
              </button>
            </div>
          </div>
        </div>
      </CartContentWrapper>
    </Fragment>
  );
}

export default CartContent;

const CartContentWrapper = styled.div`
  max-width: 1250px;
  min-height: 730px;
  margin: 0 auto;
  text-align: left;
  // .message {
  //   height: 500px;
  // }
  .cart-header {
    width: 1250px;
    height: 200px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    background-color: var(--color-background);
    h1 {
      margin: auto 0;
      // font-weight: lighter;
    }

    h3 {
      margin: auto 0;
      opacity: 0.3;
      font-weight: lighter;
    }
  }
  h2 {
    margin: 30px 0;
    font-weight: lighter;
  }
  table {
    border-collapse: collapse;
    text-align: center;
    width: 100%;
  }
  tr {
    height: 60px;
    justify-content: space-between;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
  .table-head {
    background-color: var(--color-background);
  }

  .col-1 {
    width: 14.286%;
  }
  .col-2 {
    width: 28.571%;
  }
  .cart-detail {
    display: flex;
    justify-content: space-between;
  }
  .cart-detail__left {
    width: 70%;
  }
  .page-navigate {
    display: flex;
    justify-content: space-between;
    height: 60px;
    background-color: var(--color-background);
    margin-bottom: 50px;
  }
  .nav-button {
    display: flex;
    margin-top: 15px;
    color: var(--color-footer_background);
    text-decoration: none;
  }
  .nav-button i {
    padding-top: 6px;
    margin: 0 5px;
  }
  .cart-detail__right {
    width: 27%;
    height: 270px;
    // background_color: aliceblue;
    background-color: var(--color-background);
    text-align: left;
    padding: 20px;
  }
  .subtotal {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px black;
    height: 40px;
    padding-top: 5px;
  }

  tr {
  }
  .coupon {
    input {
      width: 100%;
      padding-left: 10px;
      height: 40px;
    }
    button {
      width: 100%;
      height: 40px;
      color: aliceblue;
      background-color: var(--color-footer_background);
    }
  }
`;
