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
    const fetchPizza=async()=>{
        const {data }=await axios.get("http://localhost:3001/pizza?_limit=8");
        setPizza(data);
    }
    const fetchPasta=async()=>{
        const {data }=await axios.get("http://localhost:3001/pasta?_limit=8");
        setPasta(data);
    }
    const fetchNews=async()=>{
        const {data }=await axios.get("http://localhost:3001/news");
        setNews(data);
    }
    const fetchSalad=async()=>{
        const {data }=await axios.get("http://localhost:3001/salads?_limit=8");
        setSalad(data);
    }
    const fetchStocks=async()=>{
        const {data }=await axios.get("http://localhost:3001/stocks?_limit=8");
        setStocks(data);
    }
    useEffect(()=>{
        fetchPizza()
        fetchNews()
        fetchPasta()
        fetchSalad()
        fetchStocks()
    },[])
    return (
        <div>
            <h2>Новинки</h2>
            <div className={css.main}>
            {news.map((item)=>(
                <News 
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