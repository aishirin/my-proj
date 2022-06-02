import { useState } from 'react'
import css from './register.module.css'
export default function RegisterPage(){
    const [name,setName]=useState(" ")
    const [address,setAddress]=useState(" ")
    const [tel,setTel]=useState(" ")
    const [comment,setComment]=useState(" ")

    // console.log(name,address,tel,comment);
    // const total=[name,address,tel,comment]
    
        const total=[{
            "name":name,
            "address":address,
            "tel":tel,
            "comment":comment
        }]


        console.log(total);
    
    return (
        <div>
      <section className={css.formWrapper}>
        <h3 className={css.listTitle}>Запоните поля, чтобы оформить заказ</h3>
        <form>
          <label>
            <p>Ваше имя</p>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
          </label>
          <label>
            <p>Адрес</p>
            <input type="text" placeholder='Город, район,улица, дом, кв.' onChange={(e)=>setAddress(e.target.value)}/>
          </label>
          <label>
            <p>Номер телефона</p>
            <input type="numbe0r"  onChange={(e)=>setTel(e.target.value)}/>
          </label>
          <label>
            <p>Комментарий к заказу</p>
            <input type="text"  onChange={(e)=>setComment(e.target.value)}/>
          </label>
          <div className={css.actions}>
            <button className={css.btn} onClick={console.log("hi")}>Sign Up</button>
          </div>
        </form>
      </section>
        </div>
    )
}