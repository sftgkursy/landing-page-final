import React from "react";
import styles from './Cards.module.css';
import Access from "../../images/icon-access-anywhere.svg";
import Security from "../../images/icon-security.svg";
import Time from "../../images/icon-collaboration.svg";
import Store from "../../images/icon-any-file.svg";
import Pros from "../../Components/Pros/Pros";

const Cards = () => {
    return(
        <div className={styles.wrapper}>
            <Pros icon={Access} title="Access your files, anywhere" desc="The ability to use a smartphone, tablet, or computer to access your account means your files follow
you everywhere."/>
            <Pros icon={Security} title="Security you can trust" desc="2-factor authentication and user controlled encryption are just a couple of the security features we
allow to help secure your files."/>
            <Pros icon={Time} title="Real-time collaboration" desc="Securely share files and folders with friends, family and colleagues for live collaboration. No email
attachments required."/>
            <Pros icon={Store} title="Store any type of file" desc="Whether you are sharing holidays photos or work documents, Fylo has you covered allowing for all file
types to be securely stored and shared."/>
        </div>
    )
}
export default Cards