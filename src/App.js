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
import { useSelector } from 'react-redux';
//mk realme c2 : 123123

function App() {
  const currentProduct = useSelector((state) => state.product.currentProduct);
  useFetchApi();

  const userArr = localStorage.getItem('USERARR')
    ? JSON.parse(localStorage.getItem('USERARR'))
    : [];
  //lấy giá trị người dùng hiện tại từ store(redux)
  const currentUser = useSelector((state) => state.cart);
  ////////////cập nhật thông tin currentuser vào localStorage

  useEffect(() => {
    console.log('Cập nhật  currentUser vào localstorage!');
    //lưu người dùng hiện tại vào localStorage
    localStorage.setItem('CURRENTUSER', JSON.stringify(currentUser));
  }, [currentUser]);

  //cập nhật thông tin giỏ hàng của người dùng vào localStorage
  useEffect(() => {
    for (let i = 0; i < userArr.length; i++) {
      if (userArr[i].email === currentUser.email) {
        userArr[i].carts = currentUser.carts;

        localStorage.setItem('USERARR', JSON.stringify(userArr));
      }
    }
  }, [currentUser.carts]);

  return (
    <div className="App">
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
