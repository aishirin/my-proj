import clsx from 'clsx'
import News from '../../components/News/News'
import css from './homepage.module.css';
import Card from "../../components/Card/Card";
import axios from 'axios';
import { useEffect ,useState } from 'react';
import Stocks from '../../components/Stocks/Stocks';
function HomePage(){
    const [pizza , setPizza]=useState([]);
    const [news,setNews]=useState([]);
    const [pasta,setPasta]=useState([])
    const [salad,setSalad]=useState([])
    const [stocks,setStocks]=useState([])
    // console.log(basket);
    const fetchAllData= async () => {
        const [resPizza ,resPasta , resNews ,resSalad , resStocks]=await Promise.all([axios.get("http://localhost:3001/pizza?_limit=8"),axios.get("http://localhost:3001/pasta?_limit=8"),axios.get("http://localhost:3001/news"),axios.get("http://localhost:3001/salad?_limit=8"),axios.get("http://localhost:3001/stocks?_limit=4")])
        setNews(resNews.data)
        setPasta(resPasta.data)
        setPizza(resPizza.data)
        setSalad(resSalad.data)
        setStocks(resStocks.data)
    };
    useEffect(()=>{
        fetchAllData()
    },[])
    return (
        <div>
            <h2>Новинки</h2>
            <div className={css.main}>
            {news.map((item)=>(
                <News key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                />
            ))}
            </div>
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
            <h2 className={css.listTitle}>Паста</h2>
            <div className={css.list}>
            {pasta.map((product)=>(
                <Card key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
                product={product}
                />
            ))}
            </div>
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
            <h2 className={clsx(css.listTitle,css.stocks)}>Наши акции</h2>
            <div className={css.list}>
            {stocks.map((product)=>(
                <Stocks key={product.id}
                image={product.image}   
                />
            ))}
            </div>
        </div>
    )
}
export default HomePage