import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
