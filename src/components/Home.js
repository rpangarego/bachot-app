import React from "react";
import "./Home.css";
import ChatRoomOption from "./ChatRoomOption";
import { Avatar } from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Header from "../parts/Header";

const Home = () => {
  return (
    <div className="home">
      <Header home />

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
