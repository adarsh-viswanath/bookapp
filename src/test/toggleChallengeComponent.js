class Togglechallenge extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle=this.handleToggle.bind(this)
        this.state={
            text: false
        }
    }
    handleToggle() {
        console.log("inside method")
        this.setState((oldState)=> {
            return{
            text: !oldState.text
            }
        })
    }
    render() {
        return(
            <div>
                <button onClick={this.handleToggle}>{this.state.text?"Hide":"Show"}</button>
                <h2>{this.state.text?"This is a text":""}</h2>
            </div>
        )
    }
}

ReactDOM.render(<Togglechallenge/>, document.getElementById("root"))