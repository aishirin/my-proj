import clsx from 'clsx'
import css from './header.module.css';
import {ReactComponent as Logo} from '../../assets/logo.svg' 
import {ReactComponent as Star} from '../../assets/star.svg' 
function Header(){
 return (
     <div className={css.header}>
        <div><Logo /></div>
        <div><span>Доставка пасты</span><span>Бишкек</span>
             <p>Яндекс еда 4.8 <Star />     Время доставки от 31 мин.</p></div>    
        <div><a href='tel:84993918449'>8 499 391-84-49</a></div>
        
     </div>
    
 )
}
export default Header