import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { cartAction } from '../../store';

function NavBar() {
  const currentUser = useSelector((state) => state.cart.fullName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    //xoá thông tin người dùng hiện tại
    dispatch(cartAction.resetCart());

    ///cập nhật localStorage
    const resetUser = {
      carts: [],
      email: '',
      fullName: '',
      password: '',
      phone: '',
    };
    localStorage.setItem('CURRENTUSER', JSON.stringify(resetUser));
    //
    navigate('/', { replace: false });
  };

  return (
    <NavbarWraper>
      <div className="navbar-container">
        <div className="buttons right flex">
          <NavLink
            to="/"
            className={(navData) => {
              return navData.isActive ? 'active' : '';
            }}
          >
            {' '}
            Home
          </NavLink>

          <NavLink
            className={(navData) => {
              return navData.isActive ? 'active' : '';
            }}
            to="/shop"
          >
            Shop
          </NavLink>
        </div>
        <h2 className="">BOUTIQUE</h2>
        <div className="buttons right flex">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i> Cart{' '}
          </Link>

          {currentUser && (
            <p className="user-name">
              <i className="fa-solid fa-user"></i> {currentUser}{' '}
              <span onClick={logOut}>(Log out)</span>
            </p>
          )}
          {!currentUser && (
            <Link to={'/login'}>
              <i className="fa-solid fa-user"></i> Login
            </Link>
          )}
        </div>
      </div>
    </NavbarWraper>
  );
}

export default NavBar;

const NavbarWraper = styled.div`
  .navbar-container {
    max-width: 996px;
    color: var(--color-footer_background);
    display: flex;
    justify-content: space-between;
    font-style: italic;
    height: 80px;
    font-size: 15px;
    margin: auto;
  }

  a {
    text-decoration: none;
    padding: 10px;
    // margin-top: 20px;
    color: var(--color-footer_background);
  }

  .buttons {
    padding-top: 20px;
  }

  .active {
    color: #fcbc6d;
  }
  .user-name {
    margin-top: 10px;
  }
  h2 {
    padding-top: 10px;
  }
`;
