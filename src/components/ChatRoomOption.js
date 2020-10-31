import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./ChatRoomOption.css";

const ChatRoomOption = ({ createRoom }) => {
  return (
    <div className="chatRoomOption">
      {createRoom ? (
        <>
          <IconButton>
            <AddIcon />
          </IconButton>
          <div className="chatRoomOption__info">
            <h3>Create New Room</h3>
          </div>
        </>
      ) : (
        <>
          <Avatar />
          <div className="chatRoomOption__info">
            <h3>Room Name</h3>
            <p>Some message</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatRoomOption;
