import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement(
    "div" ,  
    {id : "parent"} , 
    [React.createElement("div" 
        , {id : "child1"} , 
        [React.createElement("h1" ,  {} , "HELLO FROM H1") , React.createElement("h2" ,  {id : "h_2"} , "I AM h2")])
    ],
    [React.createElement("div" 
        , {id : "child2"} , 
        [React.createElement("h1" ,  {} , "I AM h1") , React.createElement("h2" ,  {id : "h_2"} , "I AM h2")])
    ]
);  
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)


