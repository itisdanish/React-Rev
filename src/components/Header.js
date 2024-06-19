import { LOGO_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtn] = useState("Log In");
  let btnName = "Login";
  return (
    <nav className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="test" />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            Cart <FontAwesomeIcon icon={faShoppingCart} />
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact == "Log In" ? setBtn("Log Out") : setBtn("Log In");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
