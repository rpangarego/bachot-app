import React from "react";
import "./Home.css";
import ChatRoomOption from "./ChatRoomOption";
import { Avatar } from "@material-ui/core";
import Header from "../parts/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Header home />

      <div className="home__userProfile">
        <Link to={`/users/userId`}>
          <Avatar src="images/displayPic.png" alt="" />
        </Link>
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
        <ChatRoomOption />
        <ChatRoomOption />
        <ChatRoomOption />
        <ChatRoomOption />
        <ChatRoomOption />
        <ChatRoomOption />
        <ChatRoomOption />
        <ChatRoomOption />
        <ChatRoomOption />
      </div>
    </div>
  );
};

export default Home;
