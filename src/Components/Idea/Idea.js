import React from "react";
import s from "./idea.module.css";
import Picture from "../../images/illustration-stay-productive.png";
import Arrow from "../../images/icon-arrow.svg";
import {Link} from 'react-router-dom';

const Idea = () => {
    return(
        <div className={s.content}>
            <div>
                <img src={Picture} alt="Stay produktiv"/>
            </div>


            <div>
            <h2>Stay productive, wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email
                attachments required.</p>
                <Link to= "/" className={s.link}>See how Fylo works <img src={Arrow} alt="Arrow"/></Link>
            </div>
        </div>
    )
}
export default Idea