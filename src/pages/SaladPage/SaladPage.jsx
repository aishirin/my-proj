import css from './salad.module.css';
import Card from "../../components/Card/Card";
import axios from 'axios';
import { useEffect ,useState } from 'react';
export default function SaladPage(){
    const [salad , setSalad]=useState([])
    const fetchSalad= async () => {
        const [resPizza]=await Promise.all([axios.get("http://localhost:3001/salad?_limit")])
        setSalad(resPizza.data)
        };
    useEffect(()=>{
        fetchSalad()
    },[])
    return(<div>
        <h2 className={css.listTitle}>Салаты</h2>
            <div className={css.list}>
            {salad.map((product)=>(
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