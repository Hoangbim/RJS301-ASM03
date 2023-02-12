import React, { useState } from "react";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store";
function RegisterPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [formIsValid, setFormIsValid] = useState(false);

  //validate form đăng ký
  const validateInputs = (name, value) => {
    switch (name) {
      case "fullName":
        setErrors({
          ...errors,
          fullName: !value.trim().includes(" ")
            ? "Điền họ tên đầy đủ của bạn!"
            : "",
        });
        break;
      case "email":
        setErrors({
          ...errors,
          email:
            !value.includes("@") || !value.includes(".")
              ? "Email không hợp lệ"
              : "",
        });
        break;
      case "password":
        setErrors({
          ...errors,
          password: value.length < 8 ? "Mật khẩu phải có ít nhất 8 ký tự" : "",
        });
        break;

      case "phone":
        setErrors({
          ...errors,
          phone:
            isNaN(value) || !value[0] === "+"
              ? "Số điện thoại chưa hợp lệ"
              : "",
        });
        break;
      default:
        break;
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    validateInputs(name, value);
    setInputs({
      ...inputs,
      [name]: value,
    });

    //kiểm tra validate thành công và tất cả các trường input đã được nhập thì mới chuyển trạng thái của form sang valid
    if (
      Object.values(errors).every((err) => err === "") &&
      Object.values(inputs).every((inp) => inp !== "")
    ) {
      setFormIsValid(() => true);
    } else {
      setFormIsValid(() => false);
    }
  };

  //submit form
  const submitHandler = (e) => {
    //ngăn mặc định
    e.preventDefault();
    //lấy thông tin người dùng

    const userArr = JSON.parse(localStorage.getItem("USERARR")) || [];

    const newUserArr = [...userArr, inputs];
    //lưu vào localstorage
    localStorage.setItem("USERARR", JSON.stringify(newUserArr));
    console.log(inputs, errors, userArr);

    //đặt các giá trị về ban đầu
    setInputs({
      fullName: "",
      email: "",
      password: "",
      phone: "",
    });
    setErrors({
      fullName: "",
      email: "",
      password: "",
      phone: "",
    });
    setFormIsValid(false);
    //chuyển hướng sang trang login
    navigate("/login", { replace: false });
  };

  return (
    <RegisterWrapper backgroundImg="images/banner1.jpg">
      <NavBar />
      {/* <img src="./images/banner1.jpg" alt="" />
      <img src="./images/banner1.jpg" alt="" />
      <Footer /> */}
      <form className="register-form" onSubmit={submitHandler}>
        <h3 className="sign-up">Sign Up</h3>
        <input
          type="text"
          name="fullName"
          className="input name-input"
          value={inputs.fullName}
          placeholder="Full name"
          onChange={changeHandler}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
        <input
          type="text"
          name="email"
          className="input email-input"
          value={inputs.email}
          placeholder="Email"
          onChange={changeHandler}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          className="input pass-input"
          value={inputs.password}
          placeholder="Password"
          onChange={changeHandler}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <input
          type="text"
          name="phone"
          className="input phone-input"
          value={inputs.phone}
          placeholder="Phone"
          onChange={changeHandler}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
        <button className="signup-btn" disabled={!formIsValid}>
          SIGN UP
        </button>
      </form>
      <p className="link-to__login">
        Login? <Link to={"/login"}>Click</Link>
      </p>
      <Footer />
    </RegisterWrapper>
  );
}

export default RegisterPage;

const RegisterWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  // background-image: url('${(props) => props.backgroundImg}');
  background: url("${(props) => props.backgroundImg}");
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
