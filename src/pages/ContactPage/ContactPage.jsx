import css from './contactPage.module.css'
export default function ContactPage(){
    return (
        <div className={css.box}>
            <a href="tel:84993918449" className={css.num}>8 499 391-84-49</a>
            <p className={css.address}>пр. Жибек Жолу 63/2</p>
            <p className={css.info}>Доставка и самовывоз 10:00 — 23:00</p>
        </div>
    )
}