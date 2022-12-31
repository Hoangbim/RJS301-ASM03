import React from "react";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import Content from "../components/layout/Content";
import Popup from "../components/PopUp";
// import NavBar from "../components/layout/NavBar";
function HomePage() {
  return (
    <div>
      <NavBar />

      <Content />
      <Footer />
    </div>
  );
}

export default HomePage;
