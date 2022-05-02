import css from './stocks.module.css'
export default function ({image}){
    return(
        <div className={css.stocks}>
            <img src={image} alt="img"  className={css.img}/>
        </div>
    )
}