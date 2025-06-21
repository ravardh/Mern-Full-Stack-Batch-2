import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4500");

function Test() {
  const [username, setUsername] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("user_list", (users) => {
      setOnlineUsers(users.filter((u) => u !== username));
    });

    socket.on("receive_private_message", ({ from, message }) => {
      setMessages((prev) => [...prev, `${from}: ${message}`]);
    });

    return () => {
      socket.off("user_list");
      socket.off("receive_private_message");
    };
  }, [username]);

  const registerUser = () => {
    if (username.trim() !== "") {
      socket.emit("register", username);
      setIsRegistered(true);
    }
  };

  const sendMessage = () => {
    if (input && selectedUser) {
      socket.emit("private_message", {
        from: username,
        to: selectedUser,
        message: input
      });
      setMessages((prev) => [...prev, `You: ${input}`]);
      setInput("");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      {!isRegistered ? (
        <div>
          <h2>Enter Username</h2>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name"
          />
          <button onClick={registerUser}>Join Chat</button>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "2rem" }}>
          <div>
            <h3>Online Users</h3>
            <ul>
              {onlineUsers.map((user) => (
                <li
                  key={user}
                  onClick={() => {
                    setSelectedUser(user);
                    setMessages([]);
                  }}
                  style={{
                    cursor: "pointer",
                    fontWeight: selectedUser === user ? "bold" : "normal"
                  }}
                >
                  {user}
                </li>
              ))}
            </ul>
          </div>
          <div>
            {selectedUser ? (
              <>
                <h3>Chat with {selectedUser}</h3>
                <div
                  style={{
                    height: "300px",
                    width: "300px",
                    border: "1px solid #ccc",
                    padding: "1rem",
                    overflowY: "scroll",
                    marginBottom: "1rem"
                  }}
                >
                  {messages.map((msg, i) => (
                    <div key={i}>{msg}</div>
                  ))}
                </div>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message"
                />
                <button onClick={sendMessage}>Send</button>
              </>
            ) : (
              <p>Select a user to chat</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Test;
