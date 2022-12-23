class BookApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleRemoveOne = this.handleRemoveOne.bind(this)
        this.handleOnFormSubmit = this.handleOnFormSubmit.bind(this)
        this.state = {
            books: []
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
        this.setState(()=> {
        console.log("inside handlePick()")
        const randomnum = Math.floor(Math.random()*this.state.books.length) 
        console.log(randomnum)
        const bookselected = this.state.books[randomnum]
        console.log(bookselected)
        alert(bookselected)
        }
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
                <Action pickbook={this.handlePick}/>          
            </div>
        )
    }
}

// class Header extends React.Component {
//     render() {
//         return (
//         <div>
//             <h1>{this.props.mytitle}</h1>
//             <h2>{this.props.mysubtitle}</h2>
//         </div>
//         )
//     }
// }

const Header = (props) => {
        return (
        <div>
            <h1>{props.mytitle}</h1>
            <h2>{props.mysubtitle}</h2>
        </div>
        )  
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.pickbook}>Help me decide a book</button>
//             </div>
//         )
//     }
// }

const Action = (props) => {
            return (
                <div>
                    <button onClick={props.pickbook}>Help me decide a book</button>
                </div>
            )
    }

class AddOption extends React.Component {

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
            <form onSubmit={this.handleOnFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add book</button>
            </form> 
        )
    }
}

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//             {this.props.mybooks.map((mybook) => <Option optiontext={mybook} deleteOneBook={this.props.deleteBook}/>)}
//             <button onClick={this.props.deleteAll}>Remove all</button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
            return (
                <div>
                {props.mybooks.map((mybook) => <Option optiontext={mybook} deleteOneBook={props.deleteBook}/>)}
                <button onClick={props.deleteAll}>Remove all</button>
                </div>
            )
    }

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                  {this.props.optiontext}
//                 <button onClick={this.props.deleteOneBook}>Remove book</button> 
//             </div>
//         )
//     }
// }

const Option = (props) =>  { 
        return (
            <div>
                 {props.optiontext}
                <button onClick= { () =>  {props.deleteOneBook(props.optiontext)}}>Remove book</button> 
            </div>
        )
}

ReactDOM.render(<BookApp/>, document.getElementById("root"))