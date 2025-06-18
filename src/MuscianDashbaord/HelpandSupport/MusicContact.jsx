import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { IoMdDoneAll, IoMdSearch } from "react-icons/io";
import nochat from "/assets/images/nochat.png";
import ChatList from "/assets/images/eventorganizer2.png";
import { useNavigate } from "react-router-dom";
import ChatScreen from "./ChatScreen";

const MusicContact = () => {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(null);
  const chatData = [
    {
      id: 1,
      name: "Victoria H",
      highlightedMsg: "Hello, I am interested in the job",
      time: "Today, 9.52pm",
      status: "delivered",
      count: 0,
    },
    {
      id: 2,
      name: "John Doe",
      highlightedMsg: "Hello, I am interested in the job",
      time: "Today, 9.52pm",
      status: "noread",
      count: 2,
    },
    {
      id: 3,
      name: "Jane Doe",
      highlightedMsg: "Hello, I am interested in the job",
      time: "Today, 9.52pm",
      status: "delivered",
      count: 0,
    },
    {
      id: 4,
      name: "John Doe",
      highlightedMsg: "Hello, I am interested in the job",
      time: "Today, 9.52pm",
      status: "noread",
      count: 1,
    },
    {
      id: 5,
      name: "Jane Doe",
      highlightedMsg: "Hello, I am interested in the job",
      time: "Today, 9.52pm",
      status: "delivered",
      count: 0,
    },
    {
      id: 6,
      name: "John Doe",
      highlightedMsg: "Hello, I am interested in the job",
      time: "Today, 9.52pm",
      status: "noread",
      count: 1,
    },
    {
      id: 7,
      name: "Jane Doe",
      highlightedMsg: "Hello, I am interested in the job",
      time: "Today, 9.52pm",
      status: "noraed",
      count: 5,
    },
    {
      id: 8,
      name: "John Doe",
      highlightedMsg: "Hello, I am interested in the job",
      time: "Today, 9.52pm",
      status: "noread",
      count: 1,
    },
    {
      id: 9,
      name: "Jane Doe",
      highlightedMsg: "Hello, I am interested in the job",
      time: "Today, 9.52pm",
      status: "delivered",
      count: 0,
    },
    {
      id: 10,
      name: "John Doe",
      highlightedMsg: "Hello, I am interested in the job",
      time: "Today, 9.52pm",
      status: "noread",
      count: 1,
    },
  ];
  const handleChatClick = (id) => {
    setSelectedChat(id);
  };

  return (
    <div className="row mt-2" style={{ flex: 1 }}>
      <div className="col-4">
        <Box className="bg-white rounded-4 p-1" sx={{ height: "100%" }}>
          {/* Header Section */}
          <div className="p-3">
            <span
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                border: "1px solid #00000066",
                padding: "5px 12px",
                borderRadius: "30px",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <IoMdSearch
                size={20}
                style={{ color: "#9e9e9e", marginRight: "8px" }}
              />
              <input
                type="text"
                placeholder="Search"
                style={{
                  border: "none",
                  outline: "none",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  color: "#303030",
                  background: "transparent",
                  width: "100%",
                }}
              />
            </span>
          </div>

          {/* Scrollable Chat List Section */}
          <Box
            sx={{
              height: {
                md: "calc(100vh - 40vh)",
                lg: "calc(100vh - 45vh)",
                xl: "calc(100vh - 35vh)",
              },
              overflowY: "auto",
              padding: "0 0.5rem",
              scrollbarWidth: "none", // For Firefox
              "&::-webkit-scrollbar": {
                display: "none", // For WebKit-based browsers
              },
            }}
          >
            {chatData.map((item, index) => (
              <Box
                onClick={() => {
                  handleChatClick(item.id);
                }}
                key={index}
                className="m-1 d-flex align-items-center justify-content-between p-3"
                sx={{
                  cursor: "pointer",
                  backgroundColor:
                    item.id === selectedChat ? "#E0E6FA" : "#fff",
                  border: "1px solid #F5F5F5",
                  color: "#013c65",
                  borderRadius: 3,
                  "&:hover": {
                    backgroundColor: "#E0E6FA",
                  },
                }}
              >
                {/* Chat Details */}
                <Box className="d-flex align-items-center gap-2">
                  <Avatar
                    src={ChatList}
                    sx={{ height: "60px", width: "60px" }}
                  />
                  <Box className="text-content">
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#7c7c7c",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                      }}
                    >
                      {item.highlightedMsg}
                    </Typography>
                  </Box>
                </Box>
                {/* Time and Status */}
                <Box className="text-end text-content">
                  <Typography
                    sx={{
                      color: "#7c7c7c",
                      fontFamily: "Poppins",
                      fontSize: "10px",
                    }}
                  >
                    {item.time}
                  </Typography>
                  {item.status === "noread" ? (
                    <Typography
                      component={"span"}
                      sx={{
                        backgroundColor: "#f24e1e",
                        fontSize: "12px",
                      }}
                      className="rounded-5 p-1 text-white px-2"
                    >
                      {item.count}
                    </Typography>
                  ) : (
                    <IoMdDoneAll style={{ color: "#9747ff" }} />
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </div>
      <div className="col-8">
        {selectedChat ? (
          <ChatScreen chatId={selectedChat} /> // Pass selectedChat to ChatScreen
        ) : (
          <div className="w-100 h-100 bg-white d-flex flex-column align-items-center justify-content-center rounded-4">
            <img
              src={nochat}
              alt="nochat"
              style={{ width: "60%", height: "auto" }}
            />
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "20px",
                color: "#003A5E",
                fontWeight: 600,
              }}
            >
              Select a chat to view details
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicContact;
