import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { userAction } from '../../store';

function NavBar() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(userAction.setCurrentUser(''));
  };
  return (
    <NavbarWraper>
      <div className="navbar-container">
        <div className="buttons right">
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
        <div className="buttons right">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i> Cart{' '}
          </Link>

          {currentUser && (
            <p>
              <i className="fa-solid fa-user"></i>
              {currentUser} <span onClick={logOut}>(Log out)</span>
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
  //   position: fixed;
  //   top: 5px;
  //   left: 50%;
  //   width: 996px;
  //   margin-left: -498px;

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
    margin-top: 20px;
    color: var(--color-footer_background);
  }

  .buttons {
    padding-top: 20px;
  }

  .active {
    color: #fcbc6d;
  }
`;
