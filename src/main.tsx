import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home.tsx";
import CardInfo from "./routes/card-info/CardInfo.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import Cart from "./routes/cart/Cart.tsx";
import Checkout from "./routes/checkout/Checkout.tsx";
import OrderReview from "./routes/order-review/OrderReview.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index path="/" element={<Home />} />
            <Route path="/card/:name" element={<CardInfo />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/review" element={<OrderReview />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
