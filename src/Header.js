import React from "react";
import "./Header.css";
import Logo from "./robinhood.svg";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} alt="" width={25} />
      </div>
      {/*Search*/}
      <div className="header__search">
        <div className="header__searchContainer">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      {/*Menu Items*/}
      <div className="header__menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
