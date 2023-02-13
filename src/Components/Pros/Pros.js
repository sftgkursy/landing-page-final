import React from 'react';
import styles from './Pros.module.css';

const Card = ({icon,title,desc}) => {
  return (
    <article className={styles.pros}>
        <img alt={title} src={icon}/>
        <h3>{title}</h3>
        <p>{desc}</p>
    </article>
  )
}

export default Card