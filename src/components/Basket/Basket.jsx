import css from './basket.module.css'
import axios from 'axios'
import { useEffect } from 'react';
// import { useState } from 'react';

export default function Basket({title, description, price, image,product,basket,setBasket}){
    // const basket=axios.get('http://localhost:3001/basket')
    // .then(function (response) {
    //   console.log(response.data);
    // })
    // const [bask,setBask]=useState(basket)
    // console.log(bask);
    const del =()=>{axios.delete(`http://localhost:3001/basket/${product.id}`)
.then(function (response) {
  console.log(response.data);
})
    }

    return (
        <div className={css.box}>
            <img src={image} alt="img" className={css.image} />
            <div>
                <h3 className={css.title}>{title}</h3>
                <p className={css.description}>{description}</p>
            </div>
            <p className={css.price}> {price} c</p>
            <button className={css.btn} onClick={del}>X</button>
            
        </div>
    )
}