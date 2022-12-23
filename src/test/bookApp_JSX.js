var Book = {
    title : "My Book Application",
    subtitle: "Help me with the book.",
    options: ["Mindset", "Wings of Fire", "The Art of Public Speaking"]
}

const onformsubmit = (e) => {
    e.preventDefault();
    const bookname = e.target.elements.option.value
    if(bookname) {
        Book.options.push(bookname)
        e.target.elements.option.value = ""
        renderapp()
    }
    console.log(bookname)
}

const removealloption = () => {
    console.log("Remove all triggered")
    Book.options = []
    renderapp()
}

const decide = () => {
    
    const randomnum = Math.floor(Math.random()*Book.options.length) 
    console.log(randomnum)
    const bookselected = Book.options[randomnum]
    console.log(bookselected)
    alert(bookselected)
}

const renderapp = () => {
    var template = <div>
    <form onSubmit={onformsubmit}>
    <input type="text" name="option"></input>
    <button>Add book</button>
    </form>    
    <button onClick={removealloption}>remove all</button>  
    <button onClick={decide}>Decide a book</button>
    <h1>{Book.title}</h1>
    <h2>{Book.subtitle}</h2>
    <h2>{Book.options.length}</h2>
    <p>{Book.options.length > 0 ? "There are books present" : "No books present"}</p>
    <ol>
        {
        Book.options.map( (mybook) => <li>{mybook}</li>)
        }
    </ol>
    </div>

    var approot = document.getElementById("root");
    ReactDOM.render(template,approot)
}
renderapp()
