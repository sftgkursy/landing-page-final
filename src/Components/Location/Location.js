import React from "react";
import introImg from "../../images/illustration-intro.png";
import styles from "./Location.module.css";



const Location = () => {
    return (
        <article className={styles.content}>
        
        <img src={introImg} alt="Intro image" className={styles.image}/>
        
        <h2 className={styles.title}>All your files inone secure location, accessible anywhere</h2>
        <p className={styles.desc}>Fylo stores all your most important files in one secure location. Access them wherever you need, shere and collaborate with friends family, and co-workers </p>
        <button className={styles.btn}> Get started </button>
        </article>
    )
}
export default Location
