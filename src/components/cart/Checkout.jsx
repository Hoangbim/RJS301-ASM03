import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Checkout() {
  const carts = useSelector((state) => state.cart.carts);
  let total = 0;
  carts.forEach((cart) => {
    total = total + cart.price * cart.quantity;
  });
  return (
    <CheckoutWrapper>
      <div className="checkout-header flex space-between">
        <h1 className="header-content">CHECKOUT</h1>
        <h3 className="header-content">
          HOME / CART / <span>CHECKOUT</span>
        </h3>
      </div>
      <h2>BILLING DETAILS</h2>
      <div className="checkout-detail flex space-between">
        <form className="checkout-info">
          <h3>FULL NAME</h3>
          <input type="text" placeholder="Enter Your Full Name Here!" />
          <h3>EMAIL</h3>
          <input type="text" placeholder="Enter Your Email Here!" />
          <h3>PHONE NUMBER</h3>
          <input type="text" placeholder="Enter Your Phone Number Here!" />
          <h3>ADDRESS</h3>
          <input type="text" placeholder="Enter Your Address Here!" />
          <button>Place Order</button>
        </form>
        <div className="cart-info flex column">
          <h2>YOUR ORDER</h2>
          {carts.map((cart, i) => (
            <div className="product-info flex space-between" key={i}>
              <p className="product-name">{cart.name}</p>
              <p className="price-amount">
                {cart.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND x{' '}
                {cart.quantity}
              </p>
            </div>
          ))}
          <div className=" flex space-between total">
            <h3>TOTAL</h3>
            <h3>
              {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND
            </h3>
          </div>
        </div>
      </div>
    </CheckoutWrapper>
  );
}

export default Checkout;

const CheckoutWrapper = styled.div`
  width: 1250px;
  margin: 0 auto;
  text-align: left;
  .checkout-header {
    // display: flex;
    // justify-content: space-between;
    width: 100%;
    height: 150px;
    background-color: var(--color-background);
    padding: 0 50px;
  }

  //   .flex {
  //     display: flex;
  //   }
  //   .space-between {
  //     justify-content: space-between;
  //   }

  .header-content {
    margin: auto 0;
    span {
      opacity: 0.5;
    }
  }
  h2 {
    margin: 30px 0;
  }
  .checkout-detail {
    // display: flex;
    // justify-content: space-between;
  }

  .checkout-info {
    width: 58%;
    display: flex;
    flex-direction: column;
    h3 {
      opacity: 0.6;
      font-weight: lighter;
      margin: 10px 0;
    }
    input {
      height: 43px;
      padding: 15px;
      margin-right: 20px;
    }
    button {
      color: aliceblue;
      background-color: var(--color-footer_background);
      width: 30%;
      height: 40px;
      margin: 34px 0;
    }
  }
  .cart-info {
    width: 40%;
    // height: 300px;
    background-color: var(--color-background);
    padding: 0 33px;
    margin-bottom: 34px;
  }
  .product-name {
    font-weight: bold;
    width: 63%;
  }
  .product-info {
    height: 45px;
    border-bottom: 1px solid black;
  }
  .price-amount {
    opacity: 0.7;
    width: 35%;
  }
`;
