import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useStatusOnline from "../utils/useStatusOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useStatusOnline();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-gray-50 py-3 text-xl">
      <div className="">
        <img src={LOGO_URL} alt="company logo" className="w-32 rounded-full" />
      </div>

      <ul className="flex gap-4 items-center m-4 p-4">
        <li>
          {onlineStatus ? (
            <label className=" px-2 py-2 bg-green-500 rounded-lg">online</label>
          ) : (
            <label className="px-2 py-2 bg-red-500 rounded-lg">offline</label>
          )}
        </li>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/about"> About us</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li className="font-bold">
          <Link to="/cart">Cart - ({cartItems.length} items)</Link>
        </li>
        <li className="text-green-500 text-3xl font-bold">
          <Link to="/groceries"> Groceries </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
