import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
        alt="company logo"
      />
    </div>

    <ul className="nav-container">
      <li>Home</li>
      <li>Contact us</li>
      <li>Address</li>
      <li>About us</li>
    </ul>
  </div>
);

const SearchBar = () => (
  <div className="search-container">
    <label for="username">Search</label>
    <input type="text" className="search-input" name="username" />
  </div>
);

const RestaurantCard = () => (
  <div className="card-container">
    <div className="img-container">
      <img
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt="food photo"
      />
    </div>
    <div className="res-details">
      <h3>Restaurant name</h3>
      <h4>Restaurant Address</h4>
      <h4>Restaurant Rating</h4>
      <h4>Restaurant delivery time</h4>
    </div>
  </div>
);

const ResBody = () => (
  <div className="res-body">
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
  </div>
);

const AppLayout = () => (
  <div>
    <Header />
    <SearchBar />
    <ResBody />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
