import React, { useState, useEffect } from "react";
import photo from "../assets/Steve-jobs.webp";
import { Link } from "react-router-dom";
import backend from "../config/api";

const recentDummyChats = [
  {
    id: 1,
    name: "Elon Musk",
    lastMessage: "Hey, how are you?",
  },
  {
    id: 2,
    name: "Bill Gates",
    lastMessage: "Let's catch up soon!",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    lastMessage:
      "Did you see the latest news? It was amazing! I can't believe how quickly things are changing in the tech world. We should discuss it over coffee sometime.",
  },
];

const dummyChat = [
  {
    senderID: 1,
    receiverID: 2,
    message: "Hey, how are you doing?",
  },
  {
    senderID: 2,
    receiverID: 1,
    message: "I'm good, just been working on a new project.",
  },
  {
    senderID: 2,
    receiverID: 1,
    message: "Are we still meeting tomorrow?",
  },
  {
    senderID: 1,
    receiverID: 2,
    message: "Yes, let's meet at the café at 11 AM.",
  },
  {
    senderID: 1,
    receiverID: 2,
    message: "Don't forget to bring the documents.",
  },
  {
    senderID: 2,
    receiverID: 1,
    message: "Sure, I’ve packed them already.",
  },
  {
    senderID: 1,
    receiverID: 2,
    message: "Did you check the latest design draft?",
  },
  {
    senderID: 2,
    receiverID: 1,
    message: "Yes, it looks great. Just a few minor edits.",
  },
  {
    senderID: 2,
    receiverID: 1,
    message: "Can you send me the updated code files?",
  },
  {
    senderID: 1,
    receiverID: 2,
    message: "Sure, I’ll share it on GitHub by evening.",
  },
];

const Chat = () => {
  const [chatID, setChatID] = useState(null);
  const [sendMessage, setSendMessage] = useState("");
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );

  const [recentChats, setRecentChats] = useState(recentDummyChats);

  const handelSendMessage = () => {
    if (sendMessage.trim() === "") return; // Prevent sending empty messages
    console.log("Message sent:", sendMessage);
    setSendMessage(""); // Clear the input after sending
  };

  const handelOpenChat = (id) => {
    console.log("Chat opened");
    setChatID(id); // Example chat ID, you can change this based on your logic
  };

  const fetchallRecentChats = async () => {
    try {
      const res = await backend.get("/user/getAllUsers"); // for now getting all users
      setRecentChats(res.data.users);
    } catch (error) {
      console.error("Error fetching recent chats:", error);
    }
  };

  useEffect(() => {
    // Simulate fetching user data from session storage
    fetchallRecentChats();
  }, []);

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div className="w-1/4 h-full bg-pink-200 p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4 border-b pb-4">
            <h2 className="text-2xl font-bold text-[#1A3C5A] flex items-center gap-2">
              <img
                src={user?.profilePicture || photo}
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
              <Link
                to={"/profile"}
                className="text-black hover:text-[#FF4081]/90"
              >
                {user?.name || "User Name"}
              </Link>
            </h2>
            <button className="px-4 py-2 bg-[#FF4081] text-white rounded-lg hover:bg-[#FF4081]/90 transition-colors">
              New Chat
            </button>
          </div>
          <div className="">
            <h3 className="text-lg text-[#ff4081] font-bold">Recents Chats</h3>
          </div>
          {recentChats.map((chat) => (
            <div
              key={chat.id}
              className="relative flex items-center gap-2 p-2 hover:bg-[#FF4081]/10 rounded-lg cursor-pointer mb-2"
              onClick={() => handelOpenChat(chat.id)}
            >
              <img
                src={chat.profilePicture || photo}
                alt=""
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[#1A3C5A] font-semibold">
                  {chat.fullName || chat.name || "Unknown User"}
                </span>
                {chat.lastMessage ? (
                  <span className="text-gray-500 text-sm">
                    {chat.lastMessage.length > 40
                      ? chat.lastMessage.slice(0, 40) + "..."
                      : chat.lastMessage}
                  </span>
                ) : (
                  <span className="text-gray-500 text-sm"></span>
                )}
              </div>
            </div>
          ))}
        </div>
        {console.log("Chat ID:", chatID)}
        <div className="w-3/4 h-full bg-green-200 p-4 flex flex-col">
          <div className="flex items-center gap-3 mb-4 border-b pb-4">
            <img
              src={photo}
              alt=""
              className="w-8 h-8 object-cover rounded-full"
            />
            <h2 className="text-2xl font-bold text-[#1A3C5A]">
              {recentDummyChats.find((chat) => chat.id === chatID)?.name ||
                "Welcome to ChatApp"}
            </h2>
          </div>
          {chatID ? (
            <div className="flex-1 flex flex-col justify-between min-h-0">
              <div className="flex-1 w-full overflow-y-auto p-4 bg-green-50 rounded min-h-0">
                {dummyChat.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      msg.senderID === 1 ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`inline-block px-4 py-2 rounded-lg ${
                        msg.senderID === 1
                          ? "bg-white text-[#1A3C5A]"
                          : "bg-[#FF4081] text-white"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
                  value={sendMessage}
                  onChange={(event) => {
                    setSendMessage(event.target.value);
                  }}
                />
                <button
                  className="px-4 py-2 bg-[#FF4081] text-white rounded-lg hover:bg-[#FF4081]/90 transition-colors"
                  onClick={handelSendMessage}
                >
                  Send Message
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-1">
              <p className="text-gray-500">Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;
