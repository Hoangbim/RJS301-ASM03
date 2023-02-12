import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userAction } from "../store";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [formIsValid, setFormIsValid] = useState(false);
  //validate thông tin đầu vào
  const validateInputs = (name, value) => {
    switch (name) {
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
      default:
        break;
    }
  };

  //xử lý dữ liệu input
  const handleChange = (e) => {
    // đặt giá trị isRegister về '';
    setIsRegister("");
    const { name, value } = e.target;
    validateInputs(name, value);
    console.log(e.target, name, value);
    setInputs({
      ...inputs,
      [name]: value,
    });
    //kiểm tra form hợp lệ
    if (
      Object.values(errors).every((err) => err === "") &&
      Object.values(inputs).every((inp) => inp !== "")
    ) {
      setFormIsValid(() => true);
    } else {
      setFormIsValid(() => false);
    }
  };

  //submit dữ liệu
  const handleSubmit = (e) => {
    //ngăn mặc định
    e.preventDefault();

    //kiểm tra người dùng đã đăng ký hay chưa
    //lấy thông tin người dùng
    const userArr = JSON.parse(localStorage.getItem("USERARR") || []);
    let isExist = false;
    if (userArr) {
      userArr.forEach((user) => {
        if (inputs.email === user.email) isExist = true;
      });
    }

    if (isExist) {
      //lưu người dùng hiện tại vào store
      dispatch(userAction.setCurrentUser(inputs.email));

      //lưu người dùng hiện tại vào localStorage
      localStorage.setItem("CURRENTUSER", JSON.stringify(inputs.email));
      //chuyển hướng sang shoppage
      navigate("/shop", { replace: false });
    } else {
      setIsRegister("Email hoặc password không chính xác!");
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {/* <label>Email</label> */}
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={inputs.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}
      {/* <label>Mật khẩu</label> */}
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}
      <button type="submit" disabled={!formIsValid}>
        Gửi
      </button>
      {isRegister && <p>{isRegister}</p>}
    </FormWrapper>
  );
};

export default LoginForm;

const FormWrapper = styled.form`
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  input {
    height: 50px;
    padding-left: 20px;
  }
  button {
    height: 50px;
  }
`;
