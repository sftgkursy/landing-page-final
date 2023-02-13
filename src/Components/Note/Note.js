import React from 'react';
import styles from './Note.module.css';

const Note= ({Text,Picture,Person,Position}) => {
  return (
    <article className={styles.note}>
        <div>
        <p>{Text}</p>
        </div>
        <div className={styles.picture}>
            <img alt={Person} src={Picture} className={styles.img}/>
            <div className={styles.ident}>
            <h3>{Person}</h3>
            <a>{Position}</a>
            </div>
        </div>
    </article>
  )
}
export default Note