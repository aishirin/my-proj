import { useState } from "react";
import { useRef, useEffect } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { ReactComponent as Boy } from "./assets/boy.svg";
import { ReactComponent as Logo } from "./assets/Group 329.svg";
import pizza  from "./assets/pizza.png";
import Footer from "./components/Footer/Footer";
import BasketPage from "./components/Basket/Basket";
import PizzaPage from './pages/PizzaPage/PizzaPage'
export default function App() {

  return (
    <div>
      <Boy className="boy" />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/pizza" element={<PizzaPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
