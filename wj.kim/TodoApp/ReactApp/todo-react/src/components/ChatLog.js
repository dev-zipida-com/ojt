import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function ChatLog({ socket }) {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    // messsgeItem : {msg: String, name: String, timeStamp: String}
    socket.on("onReceive", (messageItem) => {
      setMsgList((msgList) => [...msgList, messageItem]);
      console.log(messageItem);
    });
    socket.on("onConnect", (systemMessage) => {
      console.log(systemMessage);
      setMsgList((msgList) => [...msgList, { msg: systemMessage }]);
    });
    socket.on("onDisconnect", (systemMessage) => {
      setMsgList((msgList) => [...msgList, { msg: systemMessage }]);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div>
      {msgList.map((msg, idx) => (
        <Card.Text key={idx}>
          {msg.userName} : {msg.msg}
        </Card.Text>
      ))}
    </div>
  );
}

export default ChatLog;
