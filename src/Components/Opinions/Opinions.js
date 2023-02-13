import React from "react";
import s from "./Opinions.module.css";
import Note from "../../Components/Note/Note";
import pic1 from "../../images/profile-1.jpg";
import pic2 from "../../images/profile-2.jpg";
import pic3 from "../../images/profile-3.jpg";
import quotes from "../../images/bg-quotes.png";

const Opinions = () => {
    return (
        <div className={s.container}>
            <img className={s.hide} src={quotes} alt=""/>
        <div>
            <Note 
            Text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                    team has become a well-oiled collaboration machine." 
            Picture={pic1} 
            Person="Satish Patel" 
            Position="Founder & amp; CEO, Huddle"/>
        </div>
        <div>
            <Note 
            Text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                    team has become a well-oiled collaboration machine." 
            Picture={pic2} 
            Person="Bruce McKenzie" 
            Position="Founder & amp; CEO, Huddle"/>
        </div>    
        <div>
            <Note 
            Text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                    team has become a well-oiled collaboration machine." 
            Picture={pic3} 
            Person="Iva Boyd" 
            Position="Founder & amp; CEO, Huddle"/>
        </div>
        </div>
    )
}
export default Opinions