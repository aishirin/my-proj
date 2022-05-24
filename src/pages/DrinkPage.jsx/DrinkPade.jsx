import clsx from 'clsx'
import News from '../../components/News/News'
import css from './drink.module.css';
import Card from "../../components/Card/Card";
import axios from 'axios';
import { useEffect ,useState } from 'react';
export default function DrinkPage(){
    const [drink , setDrink]=useState([]);
    // const [basket,setBasket]=useState([])
    const fetchDrink= async () => {
        const [resDrink]=await Promise.all([axios.get("http://localhost:3001/drink?_limit")])
        setDrink(resDrink.data)
        };
    useEffect(()=>{
        fetchDrink()
    },[])
    return(<div>
        <h2 className={css.listTitle}>Напитки</h2>
            <div className={css.list}>
            {drink.map((product)=>(
                <Card key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
                product={product}
                // basket={basket}
                // setBasket={setBasket}
                />
            ))}
            </div>
    </div>)
}