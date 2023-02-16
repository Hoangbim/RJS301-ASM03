import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { cartAction, userAction } from '../store';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState('');
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [formIsValid, setFormIsValid] = useState(false);
  //validate thông tin đầu vào
  const validateInputs = (name, value) => {
    switch (name) {
      case 'email':
        setErrors({
          ...errors,
          email:
            !value.includes('@') || !value.includes('.')
              ? 'Email không hợp lệ'
              : '',
        });
        break;
      case 'password':
        setErrors({
          ...errors,
          password: value.length < 8 ? 'Mật khẩu phải có ít nhất 8 ký tự' : '',
        });
        break;
      default:
        break;
    }
  };

  //xử lý dữ liệu input
  const handleChange = (e) => {
    // đặt giá trị isRegister về '';
    setIsRegister('');
    const { name, value } = e.target;
    validateInputs(name, value);
    console.log(e.target, name, value);
    setInputs({
      ...inputs,
      [name]: value,
    });
    //kiểm tra form hợp lệ
    if (
      Object.values(errors).every((err) => err === '') &&
      Object.values(inputs).every((inp) => inp !== '')
    ) {
      setFormIsValid(() => true);
    } else {
      setFormIsValid(() => false);
    }
  };

  //submit dữ liệu
  const handleSubmit = (e) => {
    e.preventDefault();
    //lấy data người dùng từ localStorage
    const userArr = localStorage.getItem('USERARR')
      ? JSON.parse(localStorage.getItem('USERARR'))
      : [];

    let isExist = false;
    //cập nhật người dùng hiện tại
    userArr.forEach((user) => {
      if (inputs.email === user.email) {
        isExist = true;
        console.log(user);
        // dispatch(userAction.setCurrentUser(user));
        dispatch(cartAction.updateCurrentUserCart(user));

        console.log('Cập nhật  currentUser vào localstorage!');
        //lưu người dùng hiện tại vào localStorage
        localStorage.setItem('CURRENTUSER', JSON.stringify(user));
      }
    });

    if (isExist) {
      //chuyển hướng sang shopage
      navigate('/shop', { replace: false });
    } else {
      setIsRegister('Email hoặc password không chính xác!');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={inputs.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}
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
  margin: 80px auto;
  input {
    height: 50px;
    padding-left: 20px;
  }
  button {
    height: 50px;
  }
`;
