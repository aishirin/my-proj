import clsx from 'clsx'
import News from '../../components/News/News'
import css from './PizzaPage.module.css';
import Card from "../../components/Card/Card";
import axios from 'axios';
import { useEffect ,useState } from 'react';
export default function PizzaPage(){
    const [pizza , setPizza]=useState([]);
    const fetchPizza= async () => {
        const [resPizza]=await Promise.all([axios.get("http://localhost:3001/pizza?_limit")])
        setPizza(resPizza.data)
        };
    useEffect(()=>{
        fetchPizza()
    },[])
    return(<div>
        <h2 className={css.listTitle}>Пиццы</h2>
            <div className={css.list}>
            {pizza.map((product)=>(
                <Card key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
                product={product}
                />
            ))}
            </div>
    </div>)
}