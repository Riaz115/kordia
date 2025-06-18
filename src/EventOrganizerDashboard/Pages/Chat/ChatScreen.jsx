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
import ChatList from "/assets/images/eventorganizer2.png";
import ReportProfile from "../../Modals/ReportProfile";
import SendContractModal from "../../../Admin/Modals/SendContractModal";

const ChatScreen = () => {
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

  let { id } = useParams();
  console.log(id);
  const isAbove576 = useMediaQuery("(min-width:576px)");
  const isBelow576 = useMediaQuery("(max-width:576px)");

  const handleProfileToggle = () => {
    if (isBelow576) {
      navigate("/event-organizer/profile");
    } else {
      setShowProfile(!showProfile);
    }
  };

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
    <Box className="row m-0 h-100 bg-white">
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
              src={ChatList}
              sx={{
                height: "70px",
                width: "70px",
                cursor: "pointer",
              }}
              onClick={handleProfileToggle}
            />
            <Box>
              <Typography className="fw-bold">Victoria H</Typography>
              <Typography sx={{ color: "#7c7c7c" }}>
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
              className={`d-flex ${
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
                    sx={{ color: msg.sender === "me" ? "white" : "black" }}
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
          className="row me-2 ms-1"
          style={{
            position: "absolute",
            bottom: 0,
            left: "0",
            width: "100%",
            padding: "10px",
          }}
        >
          <Box
            className="d-flex align-items-center col-10"
            style={{
              border: "1px solid #ddd",
              borderRadius: "20px",
              padding: "5px 10px",
              backgroundColor: "#F1F7FC",
              flex: 1,
            }}
          >
            <FaPaperclip
              size={20}
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
              size={24}
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
            <IoCameraOutline
              size={24}
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

      {/* Profile Section */}
      {showProfile && isAbove576 && (
        <Box
          className="col-4 p-3"
          sx={{
            backgroundColor: "#f8f9fa",
            borderLeft: "1px solid #ccc",
          }}
        >
          <Box className="d-flex flex-column align-items-center">
            <Avatar
              src={ChatList}
              sx={{
                height: "100px",
                width: "100px",
                marginBottom: "10px",
              }}
            />
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "900",
                color: "#013c65",
                fontFamily: "Poppins",
              }}
            >
              Fred Williams
            </Typography>
            <Typography
              sx={{ color: "#809DAF", fontSize: "12px", fontFamily: "Poppins" }}
            >
              Leeds, England
            </Typography>
            <Typography
              className="text-center mt-4"
              sx={{ fontSize: "14px", fontFamily: "Poppins", color: "#013c65" }}
            >
              DJ, Producer.
            </Typography>
            <Typography
              className="text-center "
              sx={{ fontSize: "14px", fontFamily: "Poppins", color: "#013c65" }}
            >
              I love playing guitar as well in free time.
            </Typography>
            <Box
              className="mt-4"
              sx={{
                borderTop: "2px solid #809daf",
                borderBottom: "2px solid #809daf",
                paddingTop: "10px",
                width: "100%", // Full width for the border
                textAlign: "center", // Center the text
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  color: "#013c65",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    color: "#809daf",
                    marginRight: "5px",
                  }}
                >
                  Phone:
                </Typography>
                +44 23 123 45 89
              </Typography>

              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  mt: 2,
                  mb: 4,
                  color: "#013c65",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    color: "#809daf",
                    marginRight: "5px",
                  }}
                >
                  Email:
                </Typography>
                info@fredwilliams.com
              </Typography>
            </Box>

            <Box className="mt-4 ">
              <Button
               onClick={(e) => {
                console.log("Book now clicked");
                // navigate("/musician/portfolio");
                e.stopPropagation();
                handleShow();
              }}
                variant="outlined"
                style={{
                  borderRadius: "25px",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                  backgroundColor: "#003A5E",
                  border: "none",
                  padding: "8px 15px",
                  textTransform: "capitalize",
                }}
                endIcon={<BsArrowRight />}
              >
                Send Contract
              </Button>

              <Button
                variant="outlined"
                color="error"
                onClick={handleShow}
                style={{
                  marginLeft: "10px",
                  borderRadius: "25px",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                  backgroundColor: "#C00000", // Changed background color
                  border: "none",
                  padding: "8px 15px",
                  textTransform: "capitalize",
                }}
                endIcon={<BsExclamationCircle />}
              >
                Report Profile
              </Button>
            </Box>
          </Box>
        </Box>
      )}
            <SendContractModal show={show} handleClose={handleClose} />

      <ReportProfile show={show} handleClose={handleClose} />
    </Box>
  );
};

export default ChatScreen;
