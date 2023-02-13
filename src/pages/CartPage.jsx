import React from 'react';
import CartContent from '../components/cart/CartContent';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';

function CartPage() {
  return (
    <div>
      <NavBar />
      <CartContent />
      <Footer />
    </div>
  );
}

export default CartPage;
