import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // Check if menu data is still being fetched
  if (resInfo === null) return <Shimmer />;

  // Destructuring the nested properties
  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  // Destructuring Restaurant info
  const { name, cuisines } = resInfo.cards[0].card.card.info;

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Menu items</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}
            {": Rs - "}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;