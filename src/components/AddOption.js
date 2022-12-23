import React from "react";
export default class AddOption extends React.Component {

    constructor(props) {
        super(props)
        this.handleOnFormSubmit=this.handleOnFormSubmit.bind(this)
    }
    handleOnFormSubmit(e) {
        e.preventDefault()
        const bookname = e.target.elements.option.value
        this.props.handleOnFormSubmit(bookname)
        console.log("inside onformsubmit()")  
    }
    render() {
        return (
            <form className="add-option" onSubmit={this.handleOnFormSubmit}>
            <input className="add-option__input" type="text" name="option"></input>
            <button className="button">Add book</button>
            </form> 
        )
    }
}