import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import { modalAction } from '../store';
import ShopContents from '../components/shop/ShopContents';

function ShopPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    //gửi trạng thái trang hiện tại vào store (shop)
    dispatch(modalAction.setShopPage());
  }, []);

  return (
    <div>
      <NavBar />
      <ShopContents />
      <Footer />
    </div>
  );
}

export default ShopPage;
