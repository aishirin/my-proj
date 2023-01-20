import clsx from "clsx";
import css from "./header.module.css";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import burger from '../../assets/burger.svg'
import { ReactComponent as Star } from "../../assets/star.svg";
import axios from "axios";
import { useEffect, useState } from "react";
function Header() {
  const [count,setCount]=useState(0)
  const [basket,setBasket]=useState([])
  const fetchBasket= async () => {
    const [resBasket]=await Promise.all([axios.get("http://localhost:3001/basket")])
    setBasket(resBasket.data)
    setCount(basket.length)
    };
useEffect(()=>{
    fetchBasket()
},[basket])
  
    // useEffect(()=>{
    //   axios.get('http://localhost:3001/basket')
    // .then(function (response) {
    //   setBasket(response.data)
    // })
    // },[])
  return (
    <div className={css.header}>
      <div className={css.headerTop}>
        <div>
         <Link to='/'> <img src={logo} alt="logo" /></Link>
        </div>
        <div className={css.textBlock}>
          <span className={css.text}>Доставка пасты</span>{" "}
          <span className={clsx(css.text, css.textYel)}>Бишкек</span>
          <p>
            Яндекс еда 4.8 <Star /> Время доставки от 31 мин.
          </p>
        </div>
        <div className={css.tel}>
          <button>Заказать звонок</button>
          <a href="tel:84993918449">8 499 391-84-49</a>
        </div>
        <button className={css.burgerbtn} ><img src={burger}></img></button>
      </div>
      <div className={css.nav}>
            <Link className={css.item} to="/pizza">Пицца</Link>
            <Link className={css.item} to="/pasta">Паста</Link>
            <Link className={css.item} to="/soup">Супы</Link>
            <Link className={css.item} to="/salad">Салаты</Link>
            <Link className={css.item} to="/drink">Напитки</Link>
            <Link className={css.item} to="/dessert">Десерты</Link>
            <Link className={css.item} to="/stocks">Акции</Link>
            <Link className={css.item} to="/combo">Комбо</Link>
            <Link className={css.item} to="/contacts">Контакты</Link>
            <Link to="/register" className={clsx(css.item, css.account)}>Войти</Link>
            <Link to="/basket"><button className={css.basket}>Корзина | {count} </button></Link>
      </div>
    </div>
  );
}
export default Header;
