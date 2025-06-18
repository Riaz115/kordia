import { color } from "chart.js/helpers";
import React, { useState } from "react";
import eventorganizer3 from "/assets/images/eventorganizer3.png";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const ChatList = ({ chatData, setSelectedChat }) => {
  const [activeChat, setActiveChat] = useState(null); // State to track the active card

  const handleCardClick = (chat) => {
    setActiveChat(chat.id);
    setSelectedChat(chat);
  };

  return (
    <div className="container ms-0 ps-0">
      <div
        className="input-group mb-3  "
        style={{
          borderRadius: "20px",
          backgroundColor: "white",
          boxShadow: "0px 0px 10px 0px rgba(15, 2, 39, 0.1)",
        }}
      >
        <div
          className="input-group-prepend"
          style={{ display: "flex", alignItems: "center", padding: "0 10px" }}
        >
          <FaSearch style={{ color: "#c4c4c4" }} />
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search chats"
          style={{
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
            color: "#c4c4c4",
          }}
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="short-list-chat d-flex justify-content-lg-start align-items-center gap-2">
        <p
          style={{
            color: "#809DAF",
            fontSize: "18px",
            fontWeight: "700",
            fontFamily: "Lato",
            marginBottom: "0", // Ensure vertical alignment with the select box
          }}
        >
          Sort by:
        </p>

        <div style={{ position: "relative", display: "inline-block" }}>
          <select
            className="form-select w-auto"
            aria-label="Default select example"
            style={{
              borderRadius: "20px",
              backgroundColor: "#f8f8f8",
              border: "none",
              outline: "none",
              cursor: "default",
              boxShadow: "none",
              color: "#013c61",
              fontFamily: "Heboo",
              fontSize: "16px",
              fontWeight: "600",
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              backgroundImage: "none",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",

              paddingRight: "30px",
            }}
          >
            <option selected>Latest</option>
            <option value="1">Oldest</option>
            <option value="2">Unread</option>
            <option value="3">Read</option>
          </select>
          <FaChevronDown
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#013c61",
            }}
          />
        </div>
      </div>

      {/* Add a scrollable container for the chat cards */}
      <div style={{ maxHeight: "400px", overflowY: "auto" }}>
        {chatData.map((chat) => (
          <div
            key={chat.id}
            className="card w-100 py-2 mt-2"
            style={{
              cursor: "pointer",
              position: "relative",
              border: "none",
              boxShadow: "0px 4px 8px rgba(20, 2, 37, 0.1)",
              backgroundColor: activeChat === chat.id ? "#013c65" : "", // Active
              color: activeChat === chat.id ? "white" : "", // Active text color
              transition: "background-color 0.3s, color 0.3s",
            }}
            onClick={() => handleCardClick(chat)}
          >
            <div className="d-flex align-items-start m-0 p-2 px-0">
              <div className="ms-2" style={{ position: "relative" }}>
                <img
                  src={eventorganizer3}
                  alt="profile"
                  className="rounded-circle"
                  width="40"
                  style={{ marginRight: "0" }} // Removed margin-right
                />
                <span
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "5px",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                    border: "2px solid white",
                  }}
                ></span>
              </div>
              <div className="row px-0 m-0 justify-content-between w-100">
                <div className="col-8">
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: "900",
                      fontFamily: "Poppins",
                      color: activeChat === chat.id ? "white" : "#013c61",
                    }}
                  >
                    {chat.name}
                  </p>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                      color: "#809DAF",
                    }}
                  >
                    online
                  </p>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                      color: "#809DAF",
                    }}
                  >
                    3h ago
                  </p>
                </div>
              </div>
            </div>
            <div className="w-100 p-2 d-flex justify-content-between align-items-center">
              <p
                className="mb-0"
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  color: activeChat === chat.id ? "white" : "#013c61",
                }}
              >
                Analysis of foreign experience, as it is commo…
              </p>
              <span
                style={{
                  display: "inline-block",
                  minWidth: "20px",
                  height: "20px",
                  backgroundColor: "#fe9600",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "500",
                  textAlign: "center",
                  lineHeight: "20px",
                  fontFamily: "Poppins",
                }}
              >
                2
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
