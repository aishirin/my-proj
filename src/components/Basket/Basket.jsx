import css from './basket.module.css'
export default function Basket({basket}){
    console.log(basket);
    return (
        <div>
            <h1 className={css.title}>{basket.title}</h1>
        </div>
    )
}