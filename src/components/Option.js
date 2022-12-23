import React from "react";
const Option = (props) =>  { 
    return (
        <div className="option">
             <p className="option__text">{props.optiontext}</p>
            <button className="button" onClick= { () =>  {props.deleteOneBook(props.optiontext)}}>Remove book</button> 
        </div>
    )
}
export default Option;