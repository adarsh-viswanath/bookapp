import React from "react";
import Option from "./Option"
const Options = (props) => {
    return (
        <div>
        <div className="widget-header">
            <h2 className="widget-header__title">List of books</h2>
        {props.mybooks.map((mybook) => <Option optiontext={mybook} deleteOneBook={props.deleteBook}/>)}
        <button className="button" onClick={props.deleteAll}>Remove all</button>
        </div>
        </div>
    )
}
export default Options;
