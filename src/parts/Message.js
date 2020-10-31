import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Message = ({ receiver, name, message, timestamp, photoURL, userId }) => {
  return (
    <div className="message">
      {!receiver && (
        <Link to={`/users/${userId}`}>
          <Avatar src={photoURL} />
        </Link>
      )}

      <div className={`messageDetails ${receiver && "messageReceiver"}`}>
        {!receiver && <h3 className="message__name">{name}</h3>}
        <p className="message__text"> {message} </p>
        <h6 className="message__time">{timestamp}</h6>
      </div>
    </div>
  );
};

export default Message;