import React from "react";
import ReactDOM from "react-dom/client";

//Create react element using React
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React in 2025"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//root.render converts the heading createElement oject to HTML object and replaces it in DOM. (Not append )
 
//Create react element using JSX
const headingJSX = (
  <h1 id="heading" className="heading" tabIndex={5}>
    Namaste React using JSX
  </h1>
); //This is not HTML using JS. JSX is HTML/XML like syntax.

const HeadingComponent = () => {
    return (
        <h1>Namaste React Heading component</h1>
    )
}
console.log(headingJSX);
