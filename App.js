import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1737664008"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({resName, cuisine}) => { //destructing props on the fly
    return (
        <div className="restro-card" style= {{backgroundColor: "#f0f0f0"}}>
        <img class="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gehax5kizfwncsgkris2" />
        <h3>{resName}</h3>     
        <h4>{cuisine}</h4>
        <h4>4.4 stars</h4>
        <h4>38 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
           <div className="search">Search</div>
           <div className="restro-container">
             <RestaurantCard resName="Meghana Foods" cuisine="North Indian, Asian"/>
             <RestaurantCard resName="KFC" cuisine="Burger"/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>

           </div>
        </div>
    )
}

const AppLayOut = () => {
    return (
        <div className="app">
        <Header/>
        <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut/>);
