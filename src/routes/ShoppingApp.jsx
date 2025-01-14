import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import ProductsPage from "../pages/productsPage/ProductsPage";
import CartPage from "../pages/cartPage/CartPage";

const ShoppingApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default ShoppingApp;
