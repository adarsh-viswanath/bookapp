let count = 0
const addone = () => {
    count++
    renderapp()
    console.log("addone executed")
}

const minusone = () => {
    count--
    renderapp()
    console.log("subone executed")

}

const reset = () => {
    count = 0
    renderapp()
    console.log("reset executed")
}

const renderapp = () => {
    var template3 = 
    <div>
    <h1>count:{count}</h1>
    <button onClick={addone}>+1</button>
    <button onClick={minusone}>-1</button>
    <button onClick={reset}>reset</button>
    </div>
    ReactDOM.render(template3,approot)
}

renderapp()