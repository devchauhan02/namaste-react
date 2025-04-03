import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div>
        <img
          className="food_img"
          src={LOGO_URL}
          alt="Food App Logo"
        />
      </div>
      <div className="nav-items">
        <ul className="nav_list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li onClick={() => {
            loginBtn === "Login" ?
            setLoginBtn("LogOut") :
            setLoginBtn("Login")
          }}>{loginBtn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;