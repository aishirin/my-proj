import clsx from 'clsx'
import News from '../../components/News/News'
import css from './stock.module.css';
import Card from "../../components/Card/Card";
import axios from 'axios';
import { useEffect ,useState } from 'react';
import Stocks from '../../components/Stocks/Stocks';
export default function SaladPage(){
    const [stock , setStock]=useState([]);
    // const [basket,setBasket]=useState([])
    const fetchStock= async () => {
        const [resPizza]=await Promise.all([axios.get("http://localhost:3001/stocks?_limit")])
        setStock(resPizza.data)
        };
    useEffect(()=>{
        fetchStock()
    },[])
    return(<div>
    <h2 className={clsx(css.listTitle,css.stocks)}>Наши акции</h2>
    <div className={css.list}>
    {stock.map((product)=>(
        <Stocks key={product.id}
        image={product.image}
        />
    ))}
    </div>
    </div>)
}