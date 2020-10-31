import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

const Header = ({ home, headerName, lastActivity }) => {
  const history = useHistory();

  const doSomething = () => {
    console.log("Doing something magical");
  };

  return (
    <div className={`header ${home && "home"}`}>
      {home ? (
        <>
          <img src="images/bachot-logo-white.png" alt="" className="logo" />
          <div className="headerRight">
            <IconButton>
              <SearchIcon />
            </IconButton>

            <IconButton onClick={() => doSomething()}>
              <ExitToAppIcon />
            </IconButton>
          </div>
        </>
      ) : (
        <>
          <IconButton onClick={() => history.goBack()}>
            <ArrowBackIosIcon />
          </IconButton>
          <div className="header__info">
            <Avatar />
            <div className="header__infoDetails">
              <h3>{headerName}</h3>
              <p>{lastActivity}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
