import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const json = await data.json();

    const { restaurants } =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle;

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const handleSearch = () => {
    const filteredRest = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRest);
  };

  const handleTopRatedFilter = () => {
    const filteredArray = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.1
    );
    setFilteredRestaurant(filteredArray);
  };

  if (listOfRestaurants === null) return <Shimmer />;

  return (
    <div className="resbody-container">
      <label>
        Search:
        <input
          type="text"
          name="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
      <button className="filter-btn" onClick={handleTopRatedFilter}>
        Top rated restaurants
      </button>
      <div className="res-body">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            <RestaurantCard key={restaurant.info.id} resList={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResBody;
