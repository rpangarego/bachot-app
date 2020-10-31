import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

const Login = () => {
  return (
    <div className="login">
      <img src="images/bachot-logo.png" alt="Bachot app!" />

      <div>
        <img
          src="illustration-image.png"
          alt=""
          className="illustration-image"
        />
        <p>
          Create room and start <br />
          fun chat with your friend
        </p>
      </div>

      <Button>Sign In With Google</Button>
    </div>
  );
};

export default Login;
