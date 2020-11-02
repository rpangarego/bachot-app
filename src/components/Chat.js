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
import { useDataLayerValue } from "../DataLayer";

const Chat = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useDataLayerValue();

  // auto scroll to bottom
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };
  useEffect(scrollToBottom, []);

  // messages state
  const [inputMessage, setInputMessage] = useState("");
  const [room, setRoom] = useState([]);
  const [messages, setMessages] = useState([]);
  const [messagesId, setMessagesId] = useState([]);
  const { roomId } = useParams();

  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => {
        setRoom(snapshot.data());
      });

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
        setMessagesId(snapshot.docs.map((doc) => doc.id));
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (inputMessage) {
      db.collection("rooms").doc(roomId).collection("messages").add({
        email: user.email,
        uid: user.uid,
        message: inputMessage,
        name: user.displayName,
        photoURL: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

    setInputMessage("");
  };

  return (
    <div className="chat">
      <Header chatRoom headerName={room.roomName} photoURL={room.photoURL} />

      <div className="chat__body">
        {messages.length ? (
          messages.map((message, index) => (
            <Message
              receiver={user.email === message.email ? true : false}
              roomId={roomId}
              uid={message.uid}
              messageId={messagesId[index]}
              name={message.name}
              email={message.email}
              message={message.message}
              photoURL={message.photoURL}
              timestamp={new Date(message.timestamp?.toDate()).toLocaleString()}
            />
          ))
        ) : (
          <h5>Tips: double tap message to delete it.</h5>
        )}
        {/* <Message receiver message="Okay. I'm on my way" timestamp="3:58PM" /> */}
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
            onChange={(e) => setInputMessage(e.target.value)}
            value={inputMessage}
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
