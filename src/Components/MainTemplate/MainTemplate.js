import React, { children } from "react";
import Header from "../Header/Header";


const MainTemplate = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}
export default MainTemplate