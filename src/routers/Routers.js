import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";


function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
     
      <Route
        path="/checkout"
        element={
          
            <Checkout />
         
        }
      />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Routers;
