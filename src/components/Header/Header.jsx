import clsx from "clsx";
import css from "./header.module.css";
import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from "../../assets/logo.svg";
import logo from '../../assets/logo.svg'
import { ReactComponent as Star } from "../../assets/star.svg";
function Header() {
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
      </div>
      <div className={css.nav}>
            <Link className={css.item} to="/category">Пицца</Link>
            <Link className={css.item} to="/category">Паста</Link>
            <Link className={css.item} to="/category">Супы</Link>
            <Link className={css.item} to="/category">Салаты</Link>
            <Link className={css.item} to="/category">Напитки</Link>
            <Link className={css.item} to="/category">Десерты</Link>
            <Link className={css.item} to="/category">Акции</Link>
            <Link className={css.item} to="/category">Комбо</Link>
            <Link className={css.item} to="/category">Контакты</Link>
            <Link to="/category" className={clsx(css.item, css.account)}>Войти</Link>
            <button className={css.basket}>Корзина</button>
      </div>
    </div>
  );
}
export default Header;
