import css from './basket.module.css'

export default function Basket({title, description, price, image,product,count}){
    return (
        <div className={css.box}>
            <img src={image} alt="image" className={css.image} />
            <div>
                <h3 className={css.title}>{title}</h3>
                <p className={css.description}>{description}</p>
            </div>
            <p className={css.price}> {price} c</p>
            <button className={css.btn} onClick={()=>console.log(product)}>X</button>
            
        </div>
    )
}