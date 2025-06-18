import { Avatar, Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  FaEllipsisV,
  FaPaperclip,
  FaCamera,
  FaSmile,
  FaMicrophone,
} from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { BsArrowRight, BsEmojiGrin, BsExclamationCircle } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import chatList from "/assets/images/eventorganizer2.png";

const ChatScreen = ({ chatId }) => {
  const [showProfile, setShowProfile] = useState(false);
  const messageEndRef = useRef(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setShow(false);
  };

  let id = chatId;
  console.log(id);
  const isAbove576 = useMediaQuery("(min-width:576px)");
  const isBelow576 = useMediaQuery("(max-width:576px)");

  const messages = [
    { id: 1, sender: "other", text: "Hey There!", time: "Today, 8:30pm" },
    { id: 2, sender: "other", text: "How are you?", time: "Today, 8:30pm" },
    { id: 3, sender: "me", text: "Hello!", time: "Today, 8:33pm" },
    {
      id: 4,
      sender: "me",
      text: "I am fine and how are you?",
      time: "Today, 8:34pm",
    },
    {
      id: 5,
      sender: "other",
      text: "I am doing well, Can we meet tomorrow?",
      time: "Today, 8:36pm",
    },
    { id: 6, sender: "me", text: "Yes Sure!", time: "Today, 8:58pm" },
  ];
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the last message on component mount or when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <Box className="row m-0 h-100 bg-white rounded-3">
      {/* Chat Section */}
      <Box
        className={`${
          showProfile && isAbove576 ? "col-8" : "col-12"
        } h-100 p-0 d-flex flex-column`}
        sx={{
          position: "relative",
        }}
      >
        {/* Chat Header */}
        <Box
          className="p-2 d-flex justify-content-between align-items-center"
          sx={{
            borderBottom: "1px solid #cdc7c7",
          }}
        >
          <Box className="d-flex gap-2 align-items-center">
            <Avatar
              src={chatList}
              sx={{
                height: "60px",
                width: "60px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Victoria H
              </Typography>
              <Typography
                sx={{
                  color: "#7c7c7c",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                Online - Last seen: Today, 8:00pm
              </Typography>
            </Box>
          </Box>
          <Box>
            <FaEllipsisV className="text_blue" size={20} />
          </Box>
        </Box>

        {/* Chat Messages */}
        <Box
          className="p-3 d-flex flex-column gap-2"
          style={{
            maxHeight: "calc(100vh - 260px)",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          {messages.map((msg) => (
            <Box
              key={msg.id}
              className={`d-flex pb-5 ${
                msg.sender === "me"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <Box
                className={`d-flex flex-column gap-2 ${
                  msg.sender === "me" ? "align-items-end" : "align-items-start"
                }`}
              >
                <Box
                  className="rounded-5 p-2 px-4"
                  sx={{
                    backgroundColor:
                      msg.sender === "me" ? "#fe9600" : "#e7e7e7",
                  }}
                >
                  <Typography
                    sx={{
                      color: msg.sender === "me" ? "white" : "black",
                      fontFamily: "Poppins",
                      fontSize: "12px",
                    }}
                  >
                    {msg.text}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#707070",
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                      msg.sender === "me" ? "flex-end" : "flex-start",
                  }}
                >
                  {msg.sender !== "me" && (
                    <span
                      className="mb-4"
                      style={{
                        height: "8px",
                        width: "8px",
                        backgroundColor: "#e7e7e7",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginRight: "8px",
                      }}
                    ></span>
                  )}
                  {msg.time}
                  {msg.sender === "me" && (
                    <span
                      className="mb-4"
                      style={{
                        height: "8px",
                        width: "8px",
                        backgroundColor: "#fe9600",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginLeft: "8px",
                      }}
                    ></span>
                  )}
                </Typography>
              </Box>
            </Box>
          ))}
          <div ref={messageEndRef} />
        </Box>

        {/* Chat Input Section */}
        <Box
          className="row me-1 ms-0 bg-white bg-white"
          style={{
            position: "absolute",
            bottom: 0,
            left: "0",
            width: "100%",
            padding: "8px",
          }}
        >
          <Box
            className="d-flex align-items-center col-6 "
            style={{
              border: "1px solid #ddd",
              borderRadius: "20px",
              padding: "5px 10px",
              backgroundColor: "#F1F7FC",
              flex: 1,
            }}
          >
            <FaPaperclip
              size={16}
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
            <input
              type="text"
              placeholder="Type your message here..."
              style={{
                flexGrow: 1,
                padding: "10px",
                backgroundColor: "#F1F7FC",
                outline: "none",
                border: "none",
              }}
            />
            <BsEmojiGrin
              size={18}
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
            <IoCameraOutline
              size={20}
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
          </Box>

          <Box
            className="col-2 d-flex justify-content-center align-items-center m"
            style={{
              backgroundColor: "#fe9600",
              borderRadius: "50%",
              height: "50px",
              width: "50px",
              cursor: "pointer",
              marginLeft: 4,
            }}
          >
            <FaMicrophone size={20} color="white" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatScreen;
