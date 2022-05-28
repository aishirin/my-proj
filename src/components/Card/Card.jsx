import css from './card.module.css'
import {useEffect,useState} from 'react'
import axios from 'axios'

function Card({title, description, price, image,product }) {
    return (
      <article className={css.card}>
        <img src={image} alt="" className={css.image} />
        <h1 className={css.title}>{title}</h1>
        <p className={css.description}>{description}</p>
        <div >
            <span className={css.price}> {price} c</span>
            <button className={css.btn} onClick={()=>axios.post('http://localhost:3001/basket', {
        title: product.title,
        image: product.image,
        description:product.description,
        price:product.price,
        count:1
    })
    .then(function (response) {
        console.log(response.data);
    })}>В корзину</button>
        </div>
      </article>
    );
  }
  export default Card;

//   axios({
//     method: 'POST',
//     url: 'http://localhost:3001/basket',
//     params: { "title": "lala" },
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
// }).then((response) => {
//     console.log(response.data);
// })