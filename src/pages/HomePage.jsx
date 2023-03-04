import React, { useEffect } from 'react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import Content from '../components/layout/Content';
import { modalAction, productAction } from '../store';
import { useDispatch } from 'react-redux';

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(modalAction.setHomePage());
    //thiết lập trạng thái hiện tại của shopPage là chưa xem
    dispatch(productAction.shopPageInit());
  }, []);

  return (
    <div>
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default HomePage;
