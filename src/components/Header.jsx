import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useStatusOnline from "../utils/useStatusOnline";

const Header = () => {
  const onlineStatus = useStatusOnline();

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="company logo" />
      </div>

      <ul className="nav-container">
        <li>{onlineStatus ? "Status: Online" : "Status: offline"}</li>
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
      </ul>
    </div>
  );
};

export default Header;
