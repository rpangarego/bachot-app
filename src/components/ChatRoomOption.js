import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./ChatRoomOption.css";
import { Link } from "react-router-dom";

const ChatRoomOption = ({ createRoom }) => {
  const createNewRoom = () => {
    const newRoom = prompt("Enter room name:");

    if (newRoom) {
      alert("New room created!");
    }
  };

  return (
    <div className="chatRoomOption">
      {createRoom ? (
        <div onClick={() => createNewRoom()}>
          <IconButton>
            <AddIcon />
          </IconButton>
          <div className="chatRoomOption__info">
            <h3>Create New Room</h3>
          </div>
        </div>
      ) : (
        <div>
          <Link to="/rooms/123456">
            <Avatar />
            <div className="chatRoomOption__info">
              <h3>Room Name</h3>
              <p>Some message</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ChatRoomOption;
