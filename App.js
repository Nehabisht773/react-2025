//JS
const jsHeading = document.createElement("h1");
jsHeading.innerHTML = "Hello World from JS";
const rootJS = document.getElementById("root");
rootJS.appendChild(jsHeading);


//REACT
const heading = React.createElement(
  "h1",
  { id: "heading", xyz:"abc" },
  "Hello World from React!!!!"
);
console.log(heading) //React.createELement just creates an object 
const root = ReactDOM.createRoot(document.getElementById("reactRoot"));
root.render(heading); // render takes the object and convert it to h1 tag and put it to root

//Nested 
{/* <div id="parent">
    <div id="child">
        <h1>I am H1 TAG</h1>
        <h2>I am H2 TAG</h2>
    </div>
        <div id="child2">
        <h1>I am H1 TAG</h1>
        <h2>I am H2 TAG</h2>
    </div>
</div> */

//ReactElement(Object) = HTM   L(Browser Understands)
}
const heading1 = React.createElement("h1", {}, "I am H1 Tag");
const heading2 = React.createElement("h2", {}, "I am H2 Tag");
const child = React.createElement("div", {id:"child"}, [heading1, heading2]);
const child2 = React.createElement("div", {id:"child2"}, [heading1, heading2]);
const parent = React.createElement("div", {id:"parent"} , [child, child2] );

root.render(parent);

//JSX