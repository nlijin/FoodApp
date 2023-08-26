import { REST_IMAGES } from "../utils/constants";

const RestaurantCard = ({ resList }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, locality, areaName } =
    resList?.info;

  return (
    <div className="card-container">
      <div className="img-container">
        <img src={REST_IMAGES + cloudinaryImageId} alt="food photo" />
      </div>
      <div className="res-details">
        <h3>{name}</h3>
        <p>{cuisines.join(" ")}</p>
        <p>{avgRating}</p>
        <p>{locality}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
