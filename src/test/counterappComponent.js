
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne=this.handleAddOne.bind(this)
        this.handleSubOne=this.handleSubOne.bind(this)
        this.handleReset=this.handleReset.bind(this)
        this.state={
            countValue: 0
        }
    }
    componentDidMount() {
        const json = localStorage.getItem("countValue")
        const countValue = JSON.parse(json)
        this.setState(() => {
            return {
            countValue:countValue
            }
        })
        console.log("Inside componentDidMount()")
    }

    componentDidUpdate(a,b) {
        const json = JSON.stringify(this.state.countValue)
        localStorage.setItem("countValue",json)
        console.log("Inside componentDidUpdate")
    }
    handleAddOne() {
        console.log(this.props.Name)
        this.setState((oldState)=>{
            return {
                countValue: oldState.countValue + 1
            }
        })
        console.log("inside handleAddOne()")
    }
    handleSubOne() {
        this.setState((oldState)=>{
            return {
                countValue: oldState.countValue - 1
            }
        })
        console.log(this.props.Name)
        console.log("inside handleSubOne()")
    }
    handleReset() {
        this.setState(()=>{
            return {
                countValue: 0
            }
        })
        console.log(this.props.Name)
        console.log("inside handleReset()")
    }
    render() {
        return(
            <div>
                <h2>Count : {this.state.countValue}</h2>
                <button onClick={this.handleAddOne}>Add One</button>
                <button onClick={this.handleSubOne}>Sub One</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter Name="Sachin"/>, document.getElementById("root"))