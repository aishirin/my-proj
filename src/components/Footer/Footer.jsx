import css from './footer.module.css'
import clsx from 'clsx'
import logo from '../../assets/logo.svg'
import viber from '../../assets/facebook.svg'
import skype from '../../assets/vk.svg'
import tg from '../../assets/tg.svg'

export default function Footer(){
    return(
        <div className={css.footer}>
            <div className={css.headerList}>
            <img src={logo} />
            <h6>Мы в соцсетях</h6>
            <div className={css.list}>
                <div><a href="#">YouTube</a>
                <a href="#">Instagram</a></div>
                <div><a href="#">Facebook</a>
                <a href="#">ВКонтакте</a></div>
                <div><a>Бишкек Проспект</a>
                <a>Жибек жолу 63/2</a></div>
            </div>
            </div>
            <div className={css.phoneInfo}>
                <h6>Остались вопросы? А мы всегда на связи:</h6>
                <div  className={css.telList}>
                <a href='#'><img className={css.infoImg} src={viber}></img></a>
                <a href='#'><img className={css.infoImg} src={skype}></img></a>
                <a href='#'><img className={css.infoImg} src={tg}></img></a>
                {/* <a href='#'><img className={css.infoImg} src={skype}></img></a>
                <a href='#'><img className={css.infoImg} src={skype}></img></a>
                <a href='#'><img className={css.infoImg} src={skype}></img></a> */}
                <button className={css.btn}>Напишите нам</button>
                </div>
                <a className={css.tel} href="tel:84993918449">8 499 391-84-49</a>
                <button className={css.telButton}>Заказать звонок</button>
            </div>
            <p>YaBao Все праав защищены © 2021</p>
        </div>
    )
}