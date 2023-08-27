// import mockData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const ResBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9879659&lng=77.6895248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  //Conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="resbody-container">
      <label>
        Search:
        <input
          type="text"
          name="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText);
          }}
        />
      </label>
      <button
        onClick={() => {
          const filteredRest = listOfRestaurants.filter((restaurant) => {
            return restaurant.info.name.includes(searchText);
          });
          setListOfRestaurants(filteredRest);
        }}
      >
        Search
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredArray = listOfRestaurants.filter((restaurant) => {
            return restaurant.info.avgRating > 4.2;
          });
          setListOfRestaurants(filteredArray);
        }}
      >
        Top rated restaurants
      </button>
      <div className="res-body">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default ResBody;
