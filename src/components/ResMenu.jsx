import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [menuItems, setMenuItems] = useState(true);

  // Check if menu data is still being fetched
  if (resInfo === null) return <Shimmer />;

  // Destructuring the nested properties
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // const listItems =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // const listitems2 =
  //   resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  // console.log(itemCards);

  // Destructuring Restaurant info
  const { name, cuisines } = resInfo.cards[0].card.card.info;

  return (
    <div className="mx-10">
      <h2 className="font-bold text-4xl mb-1">{name}</h2>
      <h3 className="text-2xl mb-8">{cuisines.join(", ")}</h3>
      <ul className="">
        <div className="header">
          <h3
            className="text-2xl mb-2 font-bold"
            onClick={() => {
              setMenuItems(!menuItems);
            }}
          >
            Menu items
          </h3>
        </div>
        {itemCards.map(
          (item) =>
            menuItems && (
              <div
                className="text-lg mb-2 text-blue-600"
                key={item.card.info.id}
              >
                {item.card.info.name}
                {": Rs - "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </div>
            )
        )}
      </ul>
    </div>
  );
};

export default ResMenu;
