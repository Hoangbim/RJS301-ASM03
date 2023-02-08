import React, { useState } from 'react';
import styled from 'styled-components';

const FormComponent = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateInputs(name, value);
    console.log(e.target, name, value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).every((err) => err === '')) {
      console.log('Form đã được gửi');
    } else {
      console.log('Form chưa được gửi');
    }
    console.log(inputs);
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
      <button type="submit">Gửi</button>
    </FormWrapper>
  );
};

export default FormComponent;

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
