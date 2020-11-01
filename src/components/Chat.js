import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import Header from "../parts/Header";
import Message from "../parts/Message";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Button, IconButton } from "@material-ui/core";
import firebase from "firebase";
import db from "../firebase";

const Chat = () => {
  // auto scroll to bottom
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };
  useEffect(scrollToBottom, []);

  // messages state
  const [room, setRoom] = useState({});
  const [messages, setMessages] = useState([]);
  const { roomId } = useParams();
  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) =>setRoom(snapshot.data()));

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data()));
      });

    console.log(room, messages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (e) => {
    e.preventDefault()

    console.log("send message");
  };

  return (
    <div className="chat">
      <Header headerName="Room name" lastActivity="10/31/2020 8:00PM" />

      <div className="chat__body">
        <Message
          name="James"
          message="=== 1st message ==="
          timestamp="3:50PM"
        />
        <Message receiver message="Okay. I'm on my way" timestamp="3:58PM" />

        <div ref={messagesEndRef}></div>
      </div>

      {/* chat form */}
      <div className="chat__form">
        <form>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <input
            type="text"
            className="chat__input"
            placeholder="Type a message..."
          />
          <Button type="submit" onClick={sendMessage}>
            <SendIcon />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
