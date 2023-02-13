import React from "react";
import s from "./Message.module.css";

const Message = () => {
    return(
    <div className={s.container}>
        <h2>Get early access today</h2>
        <p>It only takes a minute to sign up and our starter tier is exttremely generous. Ifyou have any questions, our suport team would be happy to help you.</p>
    <div>
        <input className={s.inp} type="email" placeholder="      Johnapleased#mail.com"></input>
        <button className={s.btn}>Get started for free</button>
    </div>
    <div className={s.desc}>
        <label>Please enter a vaild email adress</label>
    </div>
    </div>
    )
}
export default Message