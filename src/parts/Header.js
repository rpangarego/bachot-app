import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory, useParams } from "react-router-dom";
import db from "../firebase";
import { useDataLayerValue } from "../DataLayer";
import { getGibberishWord } from "../utils";

const Header = ({ home, chatRoom, headerName, lastActivity, photoURL }) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useDataLayerValue();
  const history = useHistory();
  const { roomId } = useParams();

  const signOutUser = () => {
    dispatch({
      type: "SET_USER",
      user: "",
    });
  };

  const deleteRoom = (roomId, headerName) => {
    const confirmKey = getGibberishWord();

    if (chatRoom) {
      const confirmDelete = prompt(
        `Type "${confirmKey}" to delete ${headerName} room`
      );

      if (confirmDelete === confirmKey) {
        db.collection("rooms").doc(roomId).delete();
        alert(`"${headerName}" room deleted!`);
        history.push("/");
      } else {
        alert(`Fail to delete ${headerName} room! What you type is not match.`);
      }
    }
  };

  return (
    <div className={`header ${home && "home"}`}>
      {home ? (
        <>
          <img src="images/bachot-logo-white.png" alt="" className="logo" />
          <div className="headerRight">
            <IconButton onClick={signOutUser}>
              <ExitToAppIcon />
            </IconButton>
          </div>
        </>
      ) : (
        <>
          <IconButton onClick={() => history.goBack()}>
            <ArrowBackIosIcon />
          </IconButton>
          <div
            className="header__info"
            onDoubleClick={() => deleteRoom(roomId, headerName)}
          >
            <Avatar src={photoURL} />
            <div className="header__infoDetails">
              <h3>{headerName}</h3>
              <p>{lastActivity}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
