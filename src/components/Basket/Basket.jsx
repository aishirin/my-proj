import css from './basket.module.css'
import Card from '../Card/Card';
export default function Basket({basket}){
    console.log(basket);
    return (
        <div>
            <h1 className={css.title}>{basket.title}</h1>
        </div>
    )
}