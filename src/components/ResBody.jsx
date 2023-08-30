import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANTS_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const ResBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
          }}
        />
      </label>
      <button
        onClick={() => {
          const filteredRest = listOfRestaurants.filter((restaurant) => {
            return restaurant.info.name
              .toLowerCase()
              .includes(searchText.toLowerCase());
          });
          setFilteredRestaurant(filteredRest);
        }}
      >
        Search
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredArray = listOfRestaurants.filter((restaurant) => {
            return restaurant.info.avgRating > 4.1;
          });
          setFilteredRestaurant(filteredArray);
        }}
      >
        Top rated restaurants
      </button>
      <div className="res-body">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard key={restaurant.info.id} resList={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResBody;
