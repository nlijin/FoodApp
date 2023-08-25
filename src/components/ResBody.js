import mockData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const ResBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(mockData);
  return (
    <div className="res-body">
      {mockData.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resList={restaurant} />
      ))}
    </div>
  );
};

export default ResBody;
