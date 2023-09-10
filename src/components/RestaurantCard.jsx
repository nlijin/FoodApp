import { REST_IMAGES } from "../utils/constants";

const RestaurantCard = ({ resList }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, locality, areaName } =
    resList?.info;

  return (
    <div className="w-72 m-5 block rounded-lg duration-200 hover:scale-105 bg-sky-50 hover:bg-slate-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.06)] dark:bg-neutral-700">
      <div className="">
        <img
          src={REST_IMAGES + cloudinaryImageId}
          alt="food photo"
          className="rounded-t-lg object-cover h-64 w-full "
        />
      </div>

      <div className="px-2 py-2">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <p className="truncate">{cuisines.join(" ")}</p>
        <p>Rating - {avgRating}</p>
        <p className="truncate">{locality}</p>
        <p>{areaName}</p>
        {/* <p>{aggregatedDiscountInfoV3.header}</p> */}
      </div>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="">
      <label className="absolute px-4 py-2 bg-green-500 text-black z-10 ml-5">
        discount: {props.resList.info.aggregatedDiscountInfoV3.header}
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
