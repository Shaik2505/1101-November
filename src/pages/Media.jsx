import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import chatImage from "../assets/chat.jpg";

const Media = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const chatList = [
    { name: "Meta AI", date: "20/11/2024", msg: "Photo", count: 0 },
    { name: "Me (You)", date: "21/11/2024", msg: "YouTube Link", count: 0 },
    { name: "Kotesh Bro 10k", date: "10:34", msg: "Shareef", count: 5 },
    { name: "Amazon", date: "10:01", msg: "Shopping spree!", count: 1 },
    { name: "Chin Sai", date: "09:58", msg: "Cylinder refill", count: 1 },
    { name: "Chin Sai", date: "09:58", msg: "Cylinder refill", count: 1 },
    { name: "Chin Sai", date: "09:58", msg: "Cylinder refill", count: 1 },
    { name: "Sai Kiran", date: "08:43", msg: "Google Doc Link", count: 0 },
  ];

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedChat.name]: [
        ...(prevMessages[selectedChat.name] || []),
        inputValue,
      ],
    }));
    setInputValue("");
  };

  const handleBackClick = () => {
    setSelectedChat(null);
  };

  // Filter chat list based on search query
  const filteredChats = chatList.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-16 h-screen grid grid-cols-1 md:grid-cols-4 bg-background text-text dark:bg-darkBackground dark:text-darkText">
      {/* Sidebar */}
      <div
        className={`col-span-1 bg-white border-r border-border p-4 h-full dark:bg-darkPrimary dark:border-darkText ${
          selectedChat ? "hidden md:flex" : "flex"
        } flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-cXL font-semibold text-primary dark:text-darkHighlight">
              Chats
            </h2>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            className="w-full p-2 border border-border rounded focus:outline-none focus:ring focus:ring-primary dark:border-darkText dark:bg-darkPrimary"
          />
        </div>

        {/* Scrollable chat links */}
        <div className="overflow-y-auto h-[80vh] scrollbar scrollbar-thumb-primary scrollbar-track-background">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 hover:bg-background hover:shadow rounded mb-2 dark:hover:bg-darkBackground cursor-pointer"
                onClick={() => handleChatClick(chat)}
              >
                <div>
                  <h3 className="font-semibold">{chat.name}</h3>
                  <p className="text-sm text-border dark:text-darkText">
                    {chat.msg}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-border dark:text-darkText">
                    {chat.date}
                  </p>
                  {chat.count > 0 && (
                    <span className="text-white bg-secondary px-2 py-1 text-xs rounded-full">
                      {chat.count}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No chats found</div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`col-span-3 h-full flex flex-col ${selectedChat ? "block" : "hidden md:block"}`}
      >
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="bg-accent p-4 flex justify-between items-center dark:bg-darkPrimary shadow-md">
              <button
                onClick={handleBackClick}
                className="text-primary dark:text-darkHighlight"
              >
                Back
              </button>
              <h2 className="text-c2XL font-bold text-primary dark:text-darkHighlight">
                {selectedChat.name}
              </h2>
              <FaSearch size={20} className="cursor-pointer" />
            </div>

            {/* Chat Messages */}
            <div className="flex-1 flex flex-col justify-end bg-background p-4 dark:bg-darkBackground overflow-y-auto scrollbar scrollbar-thumb-primary scrollbar-track-background">
              {messages[selectedChat.name] &&
                messages[selectedChat.name].map((message, index) => (
                  <div key={index} className="flex justify-end">
                    <p className="inline-block bg-gray-300 text-cSM text-text mb-4 dark:text-darkText p-2 rounded-md dark:bg-darkBackground shadow-lg border">
                      {message}
                    </p>
                  </div>
                ))}
            </div>

            {/* Input Box */}
            <div className="flex items-center p-4 bg-gray-300 dark:bg-darkPrimary shadow-md">
              <MdEmojiEmotions size={30} className="mr-4 cursor-pointer" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 p-2 border border-black rounded dark:bg-darkBackground dark:text-darkText"
                placeholder="Type a message"
              />
              <IoMdSend
                size={30}
                className="ml-4 cursor-pointer"
                onClick={handleSendMessage}
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center max-w-md text-center w-full m-auto mt-28">
            <img
              src={chatImage}
              alt="Chat App"
              className="mb-4 animate-pulse rounded-2xl dark:grayscale"
            />
            <h2 className="text-c2XL font-bold text-primary dark:text-darkHighlight">
              Chat Story
            </h2>
            <p className="text-cSM mb-4 dark:text-darkText">
              Engage with chat-based stories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
