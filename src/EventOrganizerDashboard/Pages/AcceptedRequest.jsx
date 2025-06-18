import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Box,
} from "@mui/material";
import TableMui from "../../mui/TableMuiCustom";
import Paginate from "../../Components/Paginate";
import { MdChatBubbleOutline } from "react-icons/md";
import eventorganizer1 from "/assets/images/eventorganizer1.png";
import Icon1 from "/assets/images/eye-icon-blue-circle.png";
import AcceptedRequestModal from "../Modals/AcceptedRequestModal";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const AcceptedRequest = () => {
  const [page, setPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 10;
  const [showEye, setShowEye] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // Implement edit functionality here
    handleMenuClose();
  };

  const handleCancel = () => {
    handleMenuClose();
  };

  const handleDelete = () => {
    // Implement delete functionality here
    handleMenuClose();
  };

  const handleShowEye = () => setShowEye(true);
  const handleCloseEye = () => setShowEye(false);

  const headers = [
    { key: "musicianImage", label: "Musician Image" },
    { key: "musicianName", label: "Musician/Band Name" },
    { key: "eventName", label: "Event Name" },
    { key: "eventType", label: "Event Type" },
    { key: "eventDate", label: "Event Date & Time" },
    { key: "applicationReceivedDate", label: "Application Received Date" },
    { key: "eventBudget", label: "Event Budget" },
    { key: "eventStatus", label: "Event Status" },
    { key: "paymentStatus", label: "Payment Status" },
    { key: "requestStatus", label: "Request Status" },
    { key: "chat", label: "Chat" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      musicianImage: eventorganizer1,
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival mockkkkk",
      eventType: "Wedding",
      eventDate: "15/12/24 11:30 PM",
      applicationReceivedDate: "12/12/24",
      eventBudget: "$500",
      eventStatus: "Complete",
      paymentStatus: "Paid",
      requestStatus: "Accepted",
      chat: "Chat",
      action: "More Options",
    },
    {
      musicianImage: eventorganizer1,
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "15/12/24 11:30 PM",
      applicationReceivedDate: "11/12/24",
      eventBudget: "$500",
      eventStatus: "Ongoing",
      paymentStatus: "Pending",
      requestStatus: "Accepted",
      chat: "Chat",
      action: "More Options",
    },
    {
      musicianImage: eventorganizer1,
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "15/12/24 11:30 PM",
      applicationReceivedDate: "12/12/24",
      eventBudget: "$500",
      eventStatus: "Cancelled", // Added field
      paymentStatus: "Refunded", // Added field
      requestStatus: "Accepted",
      chat: "Chat",
      action: "More Options",
    },
    {
      musicianImage: eventorganizer1,
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "15/12/24 11:30 PM",
      applicationReceivedDate: "12/12/24",
      eventBudget: "$500",
      eventStatus: "Pending", // Added field
      paymentStatus: "Pending", // Added field
      requestStatus: "Accepted",
      chat: "Chat",
      action: "More Options",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="table pt-4">
        <TableMui
          th={headers.reduce((acc, header) => {
            acc[header.key] = header.label;
            return acc;
          }, {})}
          td={rows}
          customFields={[
            {
              name: "musicianImage",
              data: (value) => (
                <img
                  src={value}
                  alt="Musician"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              ),
            },
            {
              name: "musicianName",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "eventName",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "eventType",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "eventDate",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "applicationReceivedDate",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "eventBudget",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "eventStatus",
              data: (value) => {
                let statusStyle = {};
                if (value === "Cancelled") {
                  statusStyle = {
                    backgroundColor: "#C0000033",
                    color: "#C00000",
                    textAlign: "center",
                  };
                } else if (value === "Ongoing") {
                  statusStyle = {
                    backgroundColor: "#007BFF33",
                    color: "#007BFF",
                    textAlign: "center",
                  };
                } else if (value === "Pending") {
                  statusStyle = {
                    backgroundColor: "#FFFF7433",
                    color: "#9B9B00",
                    textAlign: "center",
                  };
                } else if (value === "Complete") {
                  statusStyle = {
                    backgroundColor: "#13B10433",
                    color: "#13B104",
                    textAlign: "center",
                  };
                }
                return (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      ...statusStyle,
                      padding: "3px 7px",
                      borderRadius: "20px",
                      fontFamily: "Poppins",
                      fontWeight: 600,
                    }}
                  >
                    {value}
                  </Box>
                );
              },
            },
            {
              name: "paymentStatus",
              data: (value) => {
                let statusStyle = {};
                if (value === "Refunded") {
                  statusStyle = {
                    backgroundColor: "#9F9F9F33",
                    color: "#7A7A7A",
                    textAlign: "center",
                  };
                } else if (value === "Paid") {
                  statusStyle = {
                    backgroundColor: "#13B10433",
                    color: "#13B104",
                    textAlign: "center",
                  };
                } else if (value === "Pending") {
                  statusStyle = {
                    backgroundColor: "#FFFF7433",
                    color: "#9B9B00",
                    textAlign: "center",
                  };
                }
                return (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      ...statusStyle,
                      padding: "3px 7px",
                      borderRadius: "20px",
                      fontFamily: "Poppins",
                      fontWeight: 600,
                    }}
                  >
                    {value}
                  </Box>
                );
              },
            },
            {
              name: "requestStatus",
              data: (value) => {
                let backgroundColor;
                let color;
                switch (value.toLowerCase()) {
                  case "pending":
                    backgroundColor = "#ffffb9";
                    color = "#a0a00c";
                    break;
                  case "cancel":
                    backgroundColor = "#f2cccc";
                    color = "#800000";
                    break;
                  case "accepted":
                    backgroundColor = "#d0efcd";
                    color = "#008000";
                    break;
                  case "reject":
                    backgroundColor = "#f2cccc";
                    color = "#800000";
                    break;
                  default:
                    backgroundColor = "transparent";
                }
                return (
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color,
                      fontWeight: 600,
                      fontFamily: "Poppins",
                      backgroundColor,
                      padding: "5px",
                      borderRadius: "25px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {value}
                  </Typography>
                );
              },
            },
            {
              name: "chat",
              data: (value) => (
                <Button
                  startIcon={<MdChatBubbleOutline />}
                  sx={{
                    backgroundColor: "#ff9700",
                    color: "white",
                    borderRadius: "20px",
                    padding: "5px 15px",
                    textTransform: "none",
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    "&:hover": {
                      color: "#ffffff",
                    },
                  }}
                >
                  {value}
                </Button>
              ),
            },
            {
              name: "action",
              data: () => (
                <>
                  <img
                    src={Icon1}
                    alt="Icon 1"
                    style={{
                      width: "30px",
                      height: "30px",
                      margin: "0 5px",
                      cursor: "pointer",
                    }}
                    onClick={handleShowEye}
                  />
                  <IconButton
                    sx={{
                      color: "#fff",
                      backgroundColor: "#809daf",
                      borderRadius: "50%",
                      padding: "2px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#809daf",
                      },
                    }}
                    onClick={handleMenuOpen}
                  >
                    <BsThreeDots />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    sx={{
                      "& .MuiMenu-paper": {
                        backgroundColor: "#003a5e",
                        borderRadius: "10px",
                        boxShadow: "none",
                      },
                      "& .MuiMenu-list": {
                        backgroundColor: "#003a5e",
                        padding: "10px",
                        boxShadow: "none",
                        width: "140px",
                      },
                    }}
                  >
                    <MenuItem
                      onClick={handleDelete}
                      sx={{
                        color: "#ffff",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Refund
                    </MenuItem>
                    <MenuItem
                      onClick={handleCancel}
                      sx={{
                        color: "#ffff",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Cancel
                    </MenuItem>
                  </Menu>
                  <Tooltip
                    title={
                      <Box
                        sx={{
                          backgroundColor: "#C00000",
                          borderRadius: "15px",
                          padding: "12px",
                          maxWidth: "250px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "10px",
                            color: "white",
                            fontFamily: "Poppins",
                            textAlign: "center",
                          }}
                        >
                          Once the payment is made, you have up to 24 hours to
                          cancel the event for a refund. After 24 hours, the
                          payment will no longer be eligible for a refund.
                        </Typography>
                      </Box>
                    }
                    arrow
                    placement="top"
                  >
                    <IconButton sx={{ color: "#C00000" }}>
                      <AiFillQuestionCircle size={18} />
                    </IconButton>
                  </Tooltip>
                </>
              ),
            },
          ]}
          styleTableTh={{
            backgroundColor: "#003a5e",
            color: "#FF9700",
            fontWeight: 400,
            fontSize: 20,
            fontFamily: "Bebas Neue",
          }}
        />
      </div>
      <div className="pagination pt-4 justify-content-end">
        <Paginate
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
        />
      </div>

      <AcceptedRequestModal show={showEye} handleClose={handleCloseEye} />
    </div>
  );
};

export default AcceptedRequest;
