import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { IoMdDoneAll, IoMdSearch } from "react-icons/io";
import ChatList from "/assets/images/eventorganizer2.png";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
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
  return (
    <Box className="bg-white  rounded ">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            color: "#303030",
            fontWeight: 600,
            fontSize: 20,
          }}
        >
          Messages
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              border: "1px solid #00000066",
              padding: "8px 12px",
              borderRadius: "30px",
              boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <IoMdSearch
              size={25}
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
                width: "300px",
              }}
            />
          </span>
        </div>
      </div>

      {chatData.map((item, index) => (
        <Box
          onClick={() => navigate(`/event-organizer/chatScreen/${item.id}`)}
          key={index}
          className="m-1 d-flex  align-items-center justify-content-between p-3 "
          sx={{
            cursor: "pointer",
            backgroundColor: "#fff",
            borderBottom: "1px solid gray",
            color: "#013c65",
            "&:hover": {
              backgroundColor: "#013c65",
              borderRadius: 3,
              "& .text-content": {
                color: "white",
              },
            },
          }}
        >
          <Box className="d-flex align-items-center gap-2">
            <Avatar src={ChatList} sx={{ height: "70px", width: "70px" }} />
            <Box className="text-content">
              <Typography className="fw-bold">{item.name}</Typography>
              <Typography sx={{ color: "#7c7c7c" }}>
                {item.highlightedMsg}
              </Typography>
            </Box>
          </Box>
          <Box className="text-end text-content">
            <Typography sx={{ color: "#7c7c7c" }}>{item.time}</Typography>
            {item.status === "noread" ? (
              <Typography
                component={"span"}
                sx={{ backgroundColor: "#f24e1e", fontSize: "12px" }}
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
  );
};

export default Chat;
