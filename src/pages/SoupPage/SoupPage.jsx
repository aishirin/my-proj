import clsx from 'clsx'
import News from '../../components/News/News'
import css from './SoupPage.module.css';
import Card from "../../components/Card/Card";
import axios from 'axios';
import { useEffect ,useState } from 'react';
export default function SoupPage(){
    const [soup , setSoup]=useState([]);
    const [basket,setBasket]=useState([]);
    const fetchSoup= async () => {
        const [resPizza]=await Promise.all([axios.get("http://localhost:3001/soup?_limit")])
        setSoup(resPizza.data)
        };
    useEffect(()=>{
        fetchSoup()
    },[])
    return(
    <div>
        <h2 className={css.listTitle}>Супы</h2>
            <div className={css.list}>
            {soup.map((product)=>(
                <Card key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
                product={product}
                basket={basket}
                setBasket={setBasket}
                />
            ))}
            </div>
    </div>
    )}