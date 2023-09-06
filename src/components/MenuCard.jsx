import { REST_IMAGES } from "../utils/constants";

const MenuCard = ({ item }) => {
  return (
    <div className="text-lg mb-2 text-blue-600 bg-blue-300">
      <h2 className="text-2xl text-black font-bold">{item.card.info.name}</h2>
      <p>{item?.card?.info?.category}</p>
      <li className="flex">
        <div className="flex-col">
          <p>{item.card.info.name}</p>
          <p>
            Rs -
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </p>
          <p>{item.card.info.description}</p>
        </div>
        <img src={REST_IMAGES + item.card.info.imageId} className="w-32" />
      </li>
    </div>
  );
};

export default MenuCard;
