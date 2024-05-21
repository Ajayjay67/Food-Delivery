import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="appLogo">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/008/687/818/large_2x/food-delivery-logo-free-vector.jpg" />
            </div>
            <div className="elements">
                <h1>Home</h1>
                <h1>About us</h1>
                <h1>Contact us</h1>
                <h1>Cart</h1>
            </div>
        </div>
    )
}

const RestroCard = (props) => {
    return (
        <div className="restroCard">
            <div className="foodLogo">
                <img  className="foodImg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/11d931db73b1e6cac81e046b7a0c8e7f" />
            </div>
                <h4>{props.resName}</h4>
                <h4>{props.type}</h4>
                <h4>{props.rating}</h4>
                <h4>{props.time}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="searchBar">Search</div>
            <div className="restroCont">
                <RestroCard resName="Appamma Tiffins" type="Breakfast"/>
                <RestroCard resName="Appamma Foods" type="Biryani"/>
                <RestroCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);