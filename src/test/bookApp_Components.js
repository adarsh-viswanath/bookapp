class BookApp extends React.Component {
    render() {
        const title = "Tcs Book Application"
        const subtitle = "Help me decide a book"
        const books = ["book1", "book2", "book3"]
        return(
            <div>  
                <Header mytitle={title} mysubtitle={subtitle}/>
                <Options mybooks={books}/>
                <AddOption/>
                <Action/>
                
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
        <div>
            <h1>{this.props.mytitle}</h1>
            <h2>{this.props.mysubtitle}</h2>
        </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        console.log("inside handlePick()")
        alert("this is an alert inside handlePick()")
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>Help me decide a book</button>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleOnFormSubmit(e) {
        e.preventDefault()
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

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        console.log(this.props.mybooks)
        console.log("inside removeall()")
    }
    render() {
        return (
            <div>
            {this.props.mybooks.map((mybook) => <Option optiontext={mybook}/>)}
            <button onClick={this.handleRemoveAll}>Remove all</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optiontext}
            </div>
        )
    }
}

ReactDOM.render(<BookApp/>, document.getElementById("root"))