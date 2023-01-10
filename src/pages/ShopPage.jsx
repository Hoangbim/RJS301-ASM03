import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import { modalAction, productAction } from '../store';
import ShopContents from '../components/shop/ShopContents';

function ShopPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    //gửi trạng thái trang hiện tại vào store (shop)
    dispatch(modalAction.setShopPage());
  }, []);
  const currentPage = useSelector((state) => state.modal.isShopPage);
  console.log(currentPage);
  return (
    <div>
      <NavBar />
      <ShopContents />
      <Footer />
    </div>
  );
}

export default ShopPage;
