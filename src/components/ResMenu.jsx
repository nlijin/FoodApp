import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // Check if menu data is still being fetched
  if (resInfo === null) return <Shimmer />;

  // Destructuring the nested properties
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // Destructuring Restaurant info
  const { name, cuisines } = resInfo.cards[0].card.card.info;

  return (
    <div className="text-center">
      <h2 className="font-bold text-4xl mb-1">{name}</h2>
      <h3 className="text-2xl mb-8">{cuisines.join(", ")}</h3>
      <ul className="">
        {categories.map((category) => (
          <div key={category.card.card.itemCards[0].card.info.id}>
            <RestaurantCategory data={category?.card?.card} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
