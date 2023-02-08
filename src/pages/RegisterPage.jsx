import React from 'react';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function RegisterPage() {
  const nameChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <RegisterWrapper backgroundImg="images/banner1.jpg">
      <NavBar />
      {/* <img src="./images/banner1.jpg" alt="" />
      <img src="./images/banner1.jpg" alt="" />
      <Footer /> */}
      <div className="register-form">
        <h3 className="sign-up">Sign Up</h3>
        <input
          type="text"
          name="fullName"
          className="input name-input"
          placeholder="Full name"
          onChange={nameChangeHandler}
        />{' '}
        <input type="text" className="input email-input" placeholder="Email" />
        <input
          type="password"
          name="password"
          className="input pass-input"
          placeholder="Password"
        />
        <input
          type="text"
          name="phone"
          className="input phone-input"
          placeholder="Phone"
        />
        <button className="signup-btn">SIGN UP</button>
        <p className="link-to__login">
          Login? <Link to={'/login'}>Click</Link>
        </p>
      </div>
      <Footer />
    </RegisterWrapper>
  );
}

export default RegisterPage;

const RegisterWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  // background-image: url('${(props) => props.backgroundImg}');
  background: url('${(props) => props.backgroundImg}');
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: repeat; /* Do not repeat the image */
  background-size: 200% 200%; /* Resize the background image to cover the entire container */

  .sign-up {
    margin-top: 50px;
    font-size: var(--fontsize-blur_title);
    opacity: 0.5;
  }

  img {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }
  .register-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    border-radius: 10px;
    background-color: white;
    h3 {
      margin-bottom: 120px;
      font-size: 30px;
    }
  }
  .input {
    height: 70px;
    width: 70%;
    margin: auto;
    padding: 0 30px;
  }
  .signup-btn {
    height: 70px;
    margin: 30px auto;
    width: 70%;
    padding: 0 30px;
  }
  .link-to__login {
    margin: 30px auto 60px auto;
  }
`;
