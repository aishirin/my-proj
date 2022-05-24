import clsx from 'clsx'
import News from '../../components/News/News'
import css from './dessert.module.css';
import Card from "../../components/Card/Card";
import axios from 'axios';
import { useEffect ,useState } from 'react';
export default function DessertPage(){
    const [dessert , setDessert]=useState([]);
    // const [basket,setBasket]=useState([])
    const fetchDessert= async () => {
        const [resDessert]=await Promise.all([axios.get("http://localhost:3001/dessert?_limit")])
        setDessert(resDessert.data)
        };
    useEffect(()=>{
        fetchDessert()
    },[])
    return(<div>
        <h2 className={css.listTitle}>Десерты</h2>
            <div className={css.list}>
            {dessert.map((product)=>(
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