import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

const Login = () => {
  const doSomething = () => {
    console.log("Doing something magical...");
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

      <Button onClick={() => doSomething()}>Sign In With Google</Button>

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
