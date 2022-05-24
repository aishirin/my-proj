import clsx from 'clsx'
import News from '../../components/News/News'
import css from './pastaPage.module.css';
import Card from "../../components/Card/Card";
import axios from 'axios';
import { useEffect ,useState } from 'react';
export default function PastaPage(){
    const [pasta , setPasta]=useState([]);
    // const [basket,setBasket]=useState([])
    const fetchPasta= async () => {
        const [resPizza]=await Promise.all([axios.get("http://localhost:3001/pasta?_limit")])
        setPasta(resPizza.data)
        };
    useEffect(()=>{
        fetchPasta()
    },[])
    return(<div>
        <h2 className={css.listTitle}>Пасты</h2>
            <div className={css.list}>
            {pasta.map((product)=>(
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