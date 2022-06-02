import css from './basket.module.css'
import axios from 'axios'

export default function Basket({title, description, price, image,product,count}){
    const del =()=>{axios.delete(`http://localhost:3001/basket/${product.id}`)
.then(function (response) {
  console.log(response.data);
    count ++
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