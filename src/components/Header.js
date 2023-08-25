import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src={LOGO_URL} alt="company logo" />
    </div>

    <ul className="nav-container">
      <li>Home</li>
      <li>Contact us</li>
      <li>Address</li>
      <li>About us</li>
    </ul>
  </div>
);

export default Header;
