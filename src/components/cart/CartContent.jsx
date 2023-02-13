import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function CartContent() {
  const userCart = useSelector((state) => state.cart.carts);
  const deleteProduct = () => {};
  return (
    <CartContentWrapper>
      <div className="cart-header">Cart</div>
      <div className="cart-detail">
        <h1>SHOPPING CART</h1>
        <div className="cart-detail__left">
          <table>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            {userCart.map((product) => (
              <tr>
                <td>
                  <img src={product.image} alt="product-img" />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.price * product.quantity}</td>
                <td>
                  <i class="fa-solid fa-trash" onClick={deleteProduct}></i>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </CartContentWrapper>
  );
}

export default CartContent;

const CartContentWrapper = styled.div``;
