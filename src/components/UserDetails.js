import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import Header from "../parts/Header";
import { Avatar, Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import db from "../firebase";

const UserDetails = () => {
  const history = useHistory();
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    db.collection("users")
      .doc(userId)
      .get()
      .then((snapshot) => {
        setUserDetails(snapshot.data());
      });
  });

  return (
    <div className="userDetails">
      <Header headerName={userDetails.displayName} />

      <div className="userProfile">
        <Avatar />
        <h1>{userDetails.displayName}</h1>
        <h3>{userDetails.email}</h3>
        <p>{`Last activity at ${new Date(
          userDetails.lastTimeSignInTime?.toDate()
        ).toLocaleString()}`}</p>

        <Button onClick={() => history.goBack()}>Back</Button>
      </div>
    </div>
  );
};

export default UserDetails;
