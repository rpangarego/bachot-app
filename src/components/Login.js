import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useDataLayerValue } from "../DataLayer";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useDataLayerValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user
        });
      })
      .catch((error) => alert(error.message));
  };

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

      <Button onClick={signIn}>Sign In With Google</Button>

      <p className="login__developerInfo">
        Developed by{" "}
        <a
          href="https://rpangarego.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ronaldo Pangarego
        </a>
      </p>
    </div>
  );
};

export default Login;
