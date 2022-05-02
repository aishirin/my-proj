import css from './news.module.css'
function News({image,title,price}){
    return (
        <div className={css.block}>
            <img src={image} className={css.img}></img>
            <div>
            <h2>{title}</h2>
            <p className={css.price}>от {price} с</p>
            </div>
        </div>
    )
}
export default News