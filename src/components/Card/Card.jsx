import css from './card.module.css'
import {useEffect} from 'react'
function Card({title, description, price, image,basket,setBasket,product }) {
  console.log(basket)
    return (
      <article className={css.card}>
        <img src={image} alt="" className={css.image} />
        <h1 className={css.title}>{title}</h1>
        <p className={css.description}>{description}</p>
        <div >
            <span className={css.price}>от {price} c</span>
            <button className={css.btn} onClick={()=>setBasket([...basket ,product])}>В корзину</button>
        </div>
      </article>
    );
  }
  
  export default Card;