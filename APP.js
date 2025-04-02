import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => (
    <h1 className="head" tabIndex="1">Namaste Title</h1>
);

const element = (
    <h2>Namaste Element</h2>
)

const Heading = () => (
    <div id = "container">
        <h1 className="heading">Namaste Funtional components</h1>
        {Title()}
        <Title /> {/* // this is how u can pass another component inside a component */}
        {element}  
        
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading />) 

