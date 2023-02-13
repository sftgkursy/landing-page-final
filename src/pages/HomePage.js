import React from "react";
import Location from "../Components/Location/Location";
import Cards from "../Components/Cards/Cards";
import Idea from "../Components/Idea/Idea";
import Opinions from "../Components/Opinions/Opinions";
import Message from "../Components/Message/Message";
import Footer from "../Components/Footer/Footer"
import MainTemplate from "../Components/MainTemplate/MainTemplate";


const HomePage = () => {
    return (
            <MainTemplate>
            <Location/>
            <Cards/>
            <Idea/>
            <Opinions/>
            <Message/>
            </MainTemplate> 
    )
}
export default HomePage