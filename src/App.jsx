import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { ReactComponent as Boy } from "./assets/boy.svg";
import Footer from "./components/Footer/Footer";
import PizzaPage from './pages/PizzaPage/PizzaPage'
import SaladPage from "./pages/SaladPage/SaladPage";
import PastaPage from "./pages/PastaPage/PastaPage";
import SoupPage from "./pages/SoupPage/SoupPage";
import DessertPage from "./pages/DessertPage/DessertPage";
import DrinkPage from "./pages/DrinkPage.jsx/DrinkPade";
import StockPage from "./pages/StockPage/StockPage"
import ComboPage from "./pages/ComboPage/ComboPage"
import ContactPage from "./pages/ContactPage/ContactPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import RegisterPage from "./pages/Register/Register"

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
          <Route path="/pasta" element={<PastaPage />} />
          <Route path="/salad" element={<SaladPage />} />
          <Route path="/soup" element={<SoupPage />} />
          <Route path="/dessert" element={<DessertPage />} />
          <Route path="/drink" element={<DrinkPage />} />
          <Route path="/combo" element={<ComboPage />} />
          <Route path="/stocks" element={<StockPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}                                                 