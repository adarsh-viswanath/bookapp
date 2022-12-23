import React from "react";
import ReactDOM from "react-dom";
const Header = (props) => {
    return (
    <div className="header">
        <div className="container">
        <div className="header__title"><h1>{props.mytitle}</h1></div>
        <div className="header__subtitle"><h2>{props.mysubtitle}</h2></div>
    </div>
    </div>
    )  
}
export default Header;