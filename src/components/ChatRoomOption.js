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
    const roomPassword = prompt("Set room password:");

    if (roomName && roomPassword) {
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
          password: roomPassword,
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

  const enterRoom = () => {
    // check if user has access to that room before
    if (accessRoomId !== roomId) {
      const _roomPassword = prompt("Enter room password:");
      if (room.password !== _roomPassword) {
        alert("Room password incorrect!");
        return false;
      }
    }
    setRoomAccessAndRedirect();
  };

  const setRoomAccessAndRedirect = () => {
    dispatch({
      type: "SET_ACCESSROOMID",
      accessRoomId: roomId,
    });

    history.push(`/rooms/${roomId}`);
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
        <div onClick={enterRoom}>
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
