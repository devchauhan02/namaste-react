import React from "react"
import ReactDOM from "react-dom/client"

// const parent = React.createElement( "h1" , {id : "parent"} , "Namaste React" )

// jsx (transpiled before it reaches the js) - transpiled with the help of parcel ->parcel do it with the help of package called babel

//and at the end of the day jsx  gets converted to => React.createElement(with the help of Babel) then => ReactElement - JS Object => HTMLElement(render)

//const jsxHeading = (<h1 className="head" tabIndex="1">JSX IT IS</h1>) same as react.createElement so no need for above line


//React Components

// ClassBased
// Funtional  => function returning some piece of jsx or reactElement


//This is react functional components

const Title = () => (
    <h1 className="head" tabIndex="1">Namaste Title</h1>
);

// at the end of the title is a function right so we can call title inside another component as {Title()} as well this is also correct

const element = (
    <h2>Namaste Element</h2>
)

//Component Composition => composing 2 or more components into one another
const Heading = () => (
    <div id = "container">
        <h1 className="heading">Namaste Funtional components</h1>
        {Title()}
        <Title /> {/* // this is how u can pass another component inside a component */}
        {element}  
        
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading />) // this is how u render a component

