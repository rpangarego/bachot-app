import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import Header from "../parts/Header";
import ChatRoomOption from "./ChatRoomOption";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import db from "../firebase";

const Home = () => {
  // Scroll to top element
  const homeTopElement = useRef(null);
  const scrollToTop = () => {
    homeTopElement.current.scrollIntoView();
  };
  useEffect(scrollToTop, []);

  // Set rooms state
  const [stateStatus, setStateStatus] = useState("fetch data");
  const [rooms, setRooms] = useState([]);
  const [roomsId, setRoomsId] = useState([]);
  useEffect(() => {
    db.collection("rooms")
      .orderBy("created.timestamp", "desc")
      .onSnapshot((snapshot) => {
        setRooms(snapshot.docs.map((doc) => doc.data()));
        setRoomsId(snapshot.docs.map((doc) => doc.id));
      });

    rooms.length
      ? setStateStatus(["data exists"])
      : setStateStatus(["no data"]);

    console.log(stateStatus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <div ref={homeTopElement} />
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

        {stateStatus === "fetch data" ? (
          <CircularProgress />
        ) : stateStatus === "no data" ? (
          <h3 className="no-data">No room yet.</h3>
        ) : (
          rooms.map((room, index) => (
            <ChatRoomOption
              key={roomsId[index]}
              roomId={roomsId[index]}
              roomName={room.roomName}
              photoURL={room.photoURL}
              createDetails={room.created}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
