import clsx from 'clsx'
import News from '../../components/News/News'
import css from './combo.module.css';
import Card from "../../components/Card/Card";
import axios from 'axios';
import { useEffect ,useState } from 'react';
export default function ComboPage(){
    const [combo , setCombo]=useState([]);
    const fetchCombo= async () => {
        const [resPizza]=await Promise.all([axios.get("http://localhost:3001/combo?_limit")])
        setCombo(resPizza.data)
        };
    useEffect(()=>{
        fetchCombo()
    },[])
    
    return(<div>
        <h2 className={css.listTitle}>Комбо</h2>
            <div className={css.list}>
            {combo.map((product)=>(
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