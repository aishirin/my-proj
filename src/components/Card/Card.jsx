import css from './card.module.css'
import {useState} from 'react'
import axios from 'axios'
import Modal from '../Modal/Modal'

function Card({title, description, price, image,product }) {
  const [modal,setModal]=useState(false)
  const lala=()=>{axios.post('http://localhost:3001/basket', {
  title: product.title,
  image: product.image,
  description:product.description,
  price:product.price,
  count:1
})
.then(function (response) {
  console.log(response);
})

setModal(true)
setTimeout(() => {
  setModal(false)
}, 1500);
}
    return (
      <div className={css.mainCard}>
        <div className={css.modal}>
        {modal && <Modal />}
        </div>
      <article className={css.card}>
        <img src={image} alt="" className={css.image} />
        <h1 className={css.title}>{title}</h1>
        <p className={css.description}>{description}</p>
        <div >
            <span className={css.price}> {price} c</span>
            <button className={css.btn} onClick={lala}>В корзину</button>
        </div>
      </article>
      </div>
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