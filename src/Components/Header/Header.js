import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <Link to="/">
                <img src = {logo} alt="Company Logo"/>              
            </Link>
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
export default Header
