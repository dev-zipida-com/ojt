import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { Card, Button } from "react-bootstrap";
import ChatLog from "../components/ChatLog";
// import ChatInput from "../components/ChatInput";
// import axios from "axios";

// const socket = io("http://localhost:4000", { transports: ["websocket"] });

function Chat({ username }) {
  const [currentSocket, setCurrentSocket] = useState();
  const [chatMessage, setChatMessage] = useState("");
  const myInfo = {
    userName: username ? username : localStorage.getItem("username"),
  };

  useEffect(() => {
    setCurrentSocket(socketIOClient("localhost:4000"));
  }, []);

  if (currentSocket) {
    currentSocket.on("connect", () => {
      currentSocket.emit("join", myInfo);
    });
  }

  const onChange = (e) => {
    setChatMessage(e.target.value);
  };

  const onSend = (e) => {
    e.preventDefault();
    currentSocket.emit("onSend", {
      userName: myInfo.userName,
      msg: chatMessage,
    });
    setChatMessage("");
  };

  return (
    <>
      <Card className="text-center">
        <Card.Header>채팅방</Card.Header>
        <Card.Body
          className="h-10"
          style={{ height: "50rem", overflow: "scroll" }}
        >
          {currentSocket ? (
            <>
              <ChatLog socket={currentSocket}></ChatLog>
              {/* <ChatInput userName={username} socket={currentSocket}></ChatInput> */}
            </>
          ) : (
            <></>
          )}
        </Card.Body>
        <Card.Footer className="text-muted">
          <form onSubmit={onSend}>
            <input type="text" onChange={onChange} value={chatMessage}></input>
            <Button className="ms-2" variant="success">
              Success
            </Button>
          </form>
        </Card.Footer>
      </Card>
    </>
  );
}

export default Chat;
