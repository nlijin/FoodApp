import { useState, useEffect } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { RESTAURANTS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardDiscounted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const json = await data.json();

    const { restaurants } =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle;
    // json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle;

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
    <div className="">
      <div className="flex justify-between items-center bg-slate-100 p-5">
        <div className="flex">
          <input
            type="search"
            className="relative m-0 -mr-0.5 w-48 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            aria-label="Search"
            aria-describedby="button-addon1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/*  Search button  */}
          <button
            className="flex items-center rounded-r bg-blue-400 px-6 py-4 text-sm font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-300 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="flex items-center rounded-md bg-blue-400 px-6 py-4 text-sm font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-300 active:shadow-lg"
            onClick={handleTopRatedFilter}
          >
            Top rated
          </button>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            {restaurant.info.aggregatedDiscountInfoV3.header ? (
              <RestaurantCardDiscounted resList={restaurant} />
            ) : (
              <RestaurantCard resList={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResBody;
