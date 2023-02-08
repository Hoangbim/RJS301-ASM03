import React from 'react';
import styled from 'styled-components';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import FormComponent from '../components/FormCoponentGPT';

function LoginPage() {
  const navigate = useNavigate();
  const goToSignUpPage = () => {
    navigate('/register', { replace: true });
  };
  return (
    <LoginWrapper backgroundImg="images/banner1.jpg">
      <NavBar />
      {/* <img src="./images/banner1.jpg" alt="" />
      <img src="./images/banner1.jpg" alt="" />
      <Footer /> */}
      {/* <div className="login-form">
        <h3>Sign Up</h3>
        <input type="text" className="input name-input" />{' '}
        <input type="text" className="input email-input" />
        <input type="password" className="input pass-input" />
        <input type="text" className="input phone-input" />
        <button className="signup-btn" onClick={goToSignUpPage}>
          SIGN UP
        </button>
        <p>
          Login? <Link to={'/login'}></Link>
        </p>
      </div> */}
      <FormComponent />
      <p>
        Create an account? <Link to={'/register'}>Sign Up</Link>
      </p>
      <Footer />
    </LoginWrapper>
  );
}

export default LoginPage;
const LoginWrapper = styled.div`
  max-width: 996px;
  margin: auto;
  background-image: url('${(props) => props.backgroundImg}');
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: repeat; /* Do not repeat the image */
  background-size: 100% 100%; /* Resize the background image to cover the entire container */
  img {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }
`;
