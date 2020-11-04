import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import db from "../firebase";
import { useDataLayerValue } from "../DataLayer";

const Message = ({
  receiver,
  name,
  message,
  timestamp,
  photoURL,
  uid,
  messageId,
  roomId,
}) => {
  const [{ user }] = useDataLayerValue();
  const deleteMessage = (roomId, messageId, uid) => {
    // delete message when that user is the one who send the message
    if (uid === user.uid) {
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .doc(messageId)
        .delete();
    }
  };

  return (
    <div
      className="message"
      onDoubleClick={() => deleteMessage(roomId, messageId, uid)}
    >
      {!receiver && (
        <Link to={`/users/${uid}`}>
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
