import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory, useParams } from "react-router-dom";
import db from "../firebase";
import { useDataLayerValue } from "../DataLayer";

const Header = ({ home, chatRoom, headerName, lastActivity, photoURL }) => {
  const [{}, dispatch] = useDataLayerValue();
  const history = useHistory();
  const { roomId } = useParams();

  const signOutUser = () => {
    dispatch({
      type: "SET_USER",
      user: ""
    });
  };

  const deleteRoom = (roomId, headerName) => {
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
            <IconButton>
              <SearchIcon />
            </IconButton>

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
