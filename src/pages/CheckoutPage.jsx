import React from 'react';
import Checkout from '../components/cart/Checkout';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';

function CheckoutPage() {
  return (
    <div>
      <NavBar />
      <Checkout />
      <Footer />
    </div>
  );
}

export default CheckoutPage;
