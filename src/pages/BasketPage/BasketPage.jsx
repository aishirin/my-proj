import Card from "../../components/Card/Card";
import axios from "axios";
import { useEffect,useState } from "react";
import css from './basketPage.module.css'
import Basket from '../../components/Basket/Basket'
export default function BasketPage(){
    const [basket , setBasket]=useState([]);
    const fetchBasket= async () => {
        const [resBasket]=await Promise.all([axios.get("http://localhost:3001/basket")])
        setBasket(resBasket.data)
        };
    useEffect(()=>{
        fetchBasket()
    },[])
    let total=0
    for(let i=0;i<basket.length;i++){
        total+=basket[i].price
    }
    return (
        <div>
            <h2>Корзина</h2>
            <div className={css.box}>
            {basket.map((product)=>(
                <Basket key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                product={product}
                count={product.count}
                />
            ))}
            <h3>Общая сумма заказа: {total}</h3>
        </div>
        </div>
    )
}
