import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./ChatRoomOption.css";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import db from "../firebase";

const ChatRoomOption = ({
  createRoom,
  roomId,
  roomName,
  photoURL,
  createDetails
}) => {
  const history = useHistory();

  const createNewRoom = () => {
    const roomName = prompt("Enter room name:");
    const roomPassword = prompt("Enter room password:");

    if (roomName && roomPassword) {
      // background avatar colors
      const colors = [
        "F4A261",
        "2A9D8F",
        "0096C7",
        "023E8A",
        "FCA311",
        "6D6875",
        "E5989B",
        "FAA307",
        "6930C3",
        "5390D9"
      ];
      const setColor = colors[Math.floor(Math.random() * colors.length - 1)];
      const _roomName = roomName.toUpperCase().split(" ");
      const _additionalParameter = _roomName < 2 && "&length=1";
      const photoURL = `https://avatar.oxro.io/avatar.svg?name=${_roomName.join(
        "+"
      )}&background=${setColor}&color=fff&bold=true${_additionalParameter}`;

      db.collection("rooms")
        .add({
          roomName,
          roomPassword,
          photoURL,
          created: {
            email: "useremail@mail.com",
            name: "username",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          }
        })
        .then((docRef) => history.push(`/rooms/${docRef.id}`))
        .catch((error) => alert(error.message));
    } else {
      alert("Create room failed");
    }
  };

  const deleteRoom = (roomId, roomName) => {
    const somekindLikeCaptha = [
      "dieticat",
      "abstep",
      "supress",
      "atious",
      "beauction",
      "signom",
      "brigat",
      "grilled",
      "puloby",
      "diumed",
      "dithorit",
      "gention"
    ];
    const confirmKey =
      somekindLikeCaptha[
        Math.floor(Math.random() * somekindLikeCaptha.length - 1)
      ];
    const confirmDelete = prompt(
      `Type "${confirmKey}" to delete ${roomName} room`
    );

    if (confirmDelete === confirmKey) {
      db.collection("rooms").doc(roomId).delete();
      alert(`${roomName} room deleted!`);
    } else {
      alert(`Fail to delete ${roomName} room! What you type is not match.`);
    }
  };

  return (
    <div
      className="chatRoomOption"
      onDoubleClick={() => deleteRoom(roomId, roomName)}
    >
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
        <Link to={`/rooms/${roomId}`}>
          <Avatar src={photoURL} />
          <div className="chatRoomOption__info">
            <h3>{roomName}</h3>
            <p>{`Created by ${createDetails.name}`}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ChatRoomOption;
