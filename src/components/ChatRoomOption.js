import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./ChatRoomOption.css";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import db from "../firebase";
import { useDataLayerValue } from "../DataLayer";
import { getRandomColor } from "../utils";

const ChatRoomOption = ({ createRoom, roomId, room }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ user, accessRoomId }, dispatch] = useDataLayerValue();
  const history = useHistory();

  const createNewRoom = () => {
    const roomName = prompt("Set room name:");
    // const roomPassword = prompt("Set room password:");

    if (roomName) {
      // background avatar colors
      const setBgColor = getRandomColor();
      const _roomName = roomName.toUpperCase().split(" ");
      const _additionalParameter = _roomName.length < 2 && "&length=1";
      const photoURL = `https://avatar.oxro.io/avatar.svg?name=${_roomName.join(
        "+"
      )}&background=${setBgColor}&color=fff&bold=true${_additionalParameter}`;

      db.collection("rooms")
        .add({
          name: roomName,
          password: "12345",
          photoURL,
          created: {
            email: user.email,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          },
        })
        .then((result) => {
          history.push(`/rooms/${result.id}`);
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <div className="chatRoomOption">
      {createRoom ? (
        <div onClick={createNewRoom}>
          <IconButton>
            <AddIcon />
          </IconButton>
          <div className="chatRoomOption__info">
            <h3>Create New Room</h3>
          </div>
        </div>
      ) : (
        <div onClick={() => history.push(`/rooms/${roomId}`)}>
          <Avatar src={room.photoURL} />
          <div className="chatRoomOption__info">
            <h3>{room.name}</h3>
            <p>{`Created by ${room.created.name}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRoomOption;
