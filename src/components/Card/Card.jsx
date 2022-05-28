import css from './card.module.css'
import {useEffect,useState} from 'react'
import axios from 'axios'

function Card({title, description, price, image,basket,setBasket,product }) {
    return (
      <article className={css.card}>
        <img src={image} alt="" className={css.image} />
        <h1 className={css.title}>{title}</h1>
        <p className={css.description}>{description}</p>
        <div >
            <span className={css.price}>от {price} c</span>
            <button className={css.btn} onClick={()=>console.log(product)}>В корзину</button>
        </div>
      </article>
    );
  }
  export default Card;