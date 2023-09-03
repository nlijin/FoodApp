import { REST_IMAGES } from "../utils/constants";

const RestaurantCard = ({ resList }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, locality, areaName } =
    resList?.info;

  return (
    <div className="w-72 m-5 block rounded-lg bg-gray-50 hover:bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="">
        <img
          src={REST_IMAGES + cloudinaryImageId}
          alt="food photo"
          className="rounded-t-lg object-cover h-64 w-full"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <p className="truncate">{cuisines.join(" ")}</p>
        <p>Rating - {avgRating}</p>
        <p className="truncate">{locality}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
