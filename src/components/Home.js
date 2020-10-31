import React from "react";
import "./Home.css";
import ChatRoomOption from "./ChatRoomOption";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <img src="images/bachot-logo-white.png" alt="" className="logo" />
        <div className="home__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>

      <div className="home__userProfile">
        <Avatar src="images/displayPic.png" alt="" />
        <div className="userInfo">
          <h3>Ronaldo Pangarego</h3>
          <p>rpangarego@mail.com</p>
        </div>
      </div>

      <div className="home__rooms">
        <ChatRoomOption createRoom />
        <ChatRoomOption />
        <ChatRoomOption />
        <ChatRoomOption />
      </div>
    </div>
  );
};

export default Home;
