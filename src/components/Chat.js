import React from "react";
import "./Chat.css";
import Header from "../parts/Header";
import Message from "../parts/Message";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Button, IconButton } from "@material-ui/core";

const Chat = () => {
  return (
    <div className="chat">
      <Header />

      <div className="chat__body">
        <Message
          name="James"
          message="Idk.. Should we go now?"
          timestamp="3:50PM"
        />
        <Message
          name="Popcorn"
          message="Wait! I go things to do 1st"
          timestamp="3:54PM"
        />
        <Message receiver message="Okay. I'm on my way" timestamp="3:58PM" />
        <Message name="James" message="See you there!" timestamp="3:58PM" />
      </div>

      {/* chat form */}
      <div className="chat__form">
        <form>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <input
            type="text"
            className="chat__input"
            placeholder="Type a message..."
          />
          <Button type="submit">
            <SendIcon />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
