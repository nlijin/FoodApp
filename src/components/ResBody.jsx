import mockData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const ResBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(mockData);

  return (
    <div className="resbody-container">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredArray = listOfRestaurants.filter((restaurant) => {
            return restaurant.info.avgRating > 4;
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
