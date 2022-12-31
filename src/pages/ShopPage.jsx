import React, { useState } from "react";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import Popup from "../components/PopUp";
import ShopContents from "../components/shop/ShopContents";
function ShopPage() {
  return (
    <div>
      <NavBar />
      <ShopContents />
      <Footer />
    </div>
  );
}

export default ShopPage;
