import React from "react";
import styles from "./Footer.module.css";
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <header className={styles.wrapper}>
                <img src = {logo} alt="Company Logo"/>              

            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link className={styles.list} to="/features">Features</Link>
                    </li>
                    <li>
                        <Link className={styles.list} to="/team">Team</Link>
                    </li>
                    <li>
                        <Link className={styles.list} to="/signin">Sign in</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Footer
