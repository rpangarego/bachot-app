import React from "react";
import "./UserDetails.css";
import Header from "../parts/Header";
import { Avatar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const UserDetails = () => {
  const history = useHistory();

  return (
    <div className="userDetails">
      <Header headerName="Username" />

      <div className="userProfile">
        <Avatar />
        <h1>Display Name</h1>
        <h3>user-email@mail.com</h3>
        <p>Last activity at...</p>

        <Button onClick={() => history.goBack()}>Back</Button>
      </div>
    </div>
  );
};

export default UserDetails;
