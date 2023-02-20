import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useFetchApi } from './components/hooks/fetchApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatIcon from './components/ChatIcon';
import ChatPopUp from './components/ChatPopUp';
import { cartAction, productAction } from './store';

function App() {
  ////lấy data sản phẩm////
  useFetchApi();

  ////////lấy lại thông tin currentUser từ localStorage/////
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem('CURRENTUSER'));
  const product = JSON.parse(localStorage.getItem('CURRENTPRODUCT'));
  const userCart = useSelector((state) => state.cart);
  const currentProduct = useSelector((state) => state.product.currentProduct);
  useEffect(() => {
    currentUser && dispatch(cartAction.updateCurrentUserCart(currentUser));
    dispatch(productAction.setCurrent(product));
  }, []);

  useEffect(() => {
    localStorage.setItem('CURRENTPRODUCT', JSON.stringify(currentProduct));
  }, [currentProduct]);

  useEffect(() => {
    localStorage.setItem('CURRENTUSER', JSON.stringify(userCart));
  }, [userCart]);

  //////lấy biến điều khiển cửa sổ chat//////
  const isShowChatPopUp = useSelector((state) => state.modal.isShowChatPopUp);

  /////cập nhật thông tin giỏ hàng của người dùng vào localStorage/////
  const userArr = localStorage.getItem('USERARR')
    ? JSON.parse(localStorage.getItem('USERARR'))
    : [];

  useEffect(() => {
    for (let i = 0; i < userArr.length; i++) {
      if (userArr[i].email === userCart.email) {
        userArr[i].carts = userCart.carts;

        localStorage.setItem('USERARR', JSON.stringify(userArr));
      }
    }
  }, [userCart.carts]);

  return (
    <div className="App">
      <ChatIcon />
      {isShowChatPopUp && <ChatPopUp />}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/detail/:productId" element={<DetailPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
