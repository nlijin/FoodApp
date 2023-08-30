import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.log("Error fetching menu: ", error);
    }
  };

  useEffect(() => {
    fetchMenu(); // fetch menu data when component mounts
  }, []);

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
