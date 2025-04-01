// const heading = React.createElement("h1" , {id : "h_1"} , "Helooo from React"); 
// root.render(heading)

// .createElement() takes three element as an argument 
// 1->what type of value it is,  
// 2-> attributes , 
// 3-> children and if u want more than one children in response u can convert it into the array like =>
// const heading = React.createElement("h1" , {id : "h_1"} , [React.createElement("h1" ,  {} , "I AM h1") , React.createElement("h2" ,  {} , "I AM h2")])

// the above is just for the one element inside div , what if we have nested div

            // <div>
            //     <div>
            //         <h1></h1>
            //     </div>
            // </div>

// React.createElement => dont thinK that its creating some html noooo => its creating an object and while
// its rendering (root.render()) onto the DOM it converts into the HTML and then puts it up into the DOM.
const parent = React.createElement(
    "div" ,  
    {id : "parent"} , 
    [React.createElement("div" 
        , {id : "child1"} , 
        [React.createElement("h1" ,  {} , "I AM h1") , React.createElement("h2" ,  {id : "h_2"} , "I AM h2")])
    ],
    [React.createElement("div" 
        , {id : "child2"} , 
        [React.createElement("h1" ,  {} , "I AM h1") , React.createElement("h2" ,  {id : "h_2"} , "I AM h2")])
    ]
);  
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

// what above thing  looks like in html => <div id="parent">
//                                               <div id="child1">
//                                                    <h1>I AM h1</h1>
//                                                    <h2 id="h_2">I AM h2</h2>
//                                               </div>
//                                               <div id="child2">
//                                                    <h1>I AM h1</h1>
//                                                    <h2 id="h_2">I AM h2</h2>
//                                               </div>
//                                         </div>
    
// you can see how complicated its looking in react so that why we have jsx

