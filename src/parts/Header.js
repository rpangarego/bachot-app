import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Header = ({ home }) => {
  return (
    <div className={`header ${home && "home"}`}>
      {home ? (
        <>
          <img src="images/bachot-logo-white.png" alt="" className="logo" />
          <div className="headerRight">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <ExitToAppIcon />
            </IconButton>
          </div>
        </>
      ) : (
        <>
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
          <div className="header__info">
            <Avatar />
            <div className="header__infoDetails">
              <h3>Room Name</h3>
              <p>Last activity at...</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
