import { useDispatch } from "react-redux";
import { REST_IMAGES } from "../utils/constants";
import { addItem } from "../utils/cartSlice.js";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return items.map((item) => (
    <div
      className="flex justify-between text-left border-gray-200 border-b-2 p-4 bg-gray-50 items-center"
      key={item.card.info.id}
    >
      <div className="w-10/12">
        <li className="text-xl font-bold">{item.card.info.name}</li>
        <p className="text-sm">{item.card.info.description}</p>
        <li className="text-xl font-bold my-4">
          Price: ₹
          {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
        </li>
      </div>
      <div className="w-2/12 mx-2">
        <div className="absolute ">
          <button
            className="text-white p-2 bg-black rounded-lg mx-9 font-bold"
            onClick={() => handleAddItem(item)}
          >
            Add +
          </button>
        </div>
        <img
          src={REST_IMAGES + item.card.info.imageId}
          className="rounded-lg w-32"
        />
      </div>
    </div>
  ));
};

export default ItemList;
