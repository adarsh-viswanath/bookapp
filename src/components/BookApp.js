import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";
import React from "react";
import "../styles/styles.scss"
export default class BookApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleRemoveOne = this.handleRemoveOne.bind(this)
        this.handleOnFormSubmit = this.handleOnFormSubmit.bind(this)
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this)
        this.state = {
            books: [],
            selectedOption: undefined
        }
    }

    componentDidMount() {
        const json = localStorage.getItem("books")
        const books = JSON.parse(json)
        this.setState(() => {
            return {
            books:books
            }
        })
        console.log("Inside componentDidMount()")
    }

    componentDidUpdate(a,b) {
        const json = JSON.stringify(this.state.books)
        localStorage.setItem("books",json)
        console.log("Inside componentDidUpdate")
    }

    handleClearSelectedOption() {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handleOnFormSubmit(bookname) {
        this.setState((oldState) => ({
            books: oldState.books.concat(bookname) 
        }))
        console.log("inside onformsubmit()")  
    }

    handleRemoveOne(book){
        console.log("inside handleRemoveOne"+book)
        this.setState((oldState) => ({
            books: oldState.books.filter((mybook) => book !== mybook)
        }))
    }

    handlePick() {
        const randomnum = Math.floor(Math.random()*this.state.books.length) 
        const bookselected = this.state.books[randomnum]
        this.setState(()=> ({  
            selectedOption : bookselected    
        })
        )
    }

    handleRemoveAll() {
        console.log("inside removeall()")
        this.setState(()=> {
            return {
                books: []
            }
        })
        console.log("inside removeall()")
    }



    render() {
        const title = "Tcs Book Application"
        const subtitle = "Help me decide a book"
        
        return(
            <div>  
                <Header mytitle={title} mysubtitle={subtitle}/>
                <Options mybooks={this.state.books} deleteAll={this.handleRemoveAll} deleteBook={this.handleRemoveOne}/>
                <AddOption handleOnFormSubmit={this.handleOnFormSubmit}/>
                <Action pickbook={this.handlePick} hasOption={this.state.books.length>0}/>   
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />       
            </div>
        )
    }
}