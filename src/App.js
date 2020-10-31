import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Chat from "./components/Chat";
import UserDetails from "./components/UserDetails";

function App() {
  const login = true; //REMOVE THIS AFTER DEVELOPMENT

  return (
    <div className="app">
      {!login ? (
        <Login />
      ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rooms/:roomId" component={Chat} />
            <Route path="/users/:userId" component={UserDetails} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
