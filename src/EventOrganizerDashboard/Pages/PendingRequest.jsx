import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  Tooltip,
} from "@mui/material";
import TableMui from "../../mui/TableMuiCustom";
import Paginate from "../../Components/Paginate";
import { MdChatBubbleOutline } from "react-icons/md";
import PendingRequestModalCheck from "../Modals/PendingRequestModalCheck";
import eventorganizer1 from "/assets/images/eventorganizer1.png";
import Icon1 from "/assets/images/eye-icon-blue-circle.png";
import Icon2 from "/assets/images/check-icon-blue-circle.png";
import Icon3 from "/assets/images/x-icon-blue-circle.png";
import PendingRequestModalEye from "../Modals/PendingRequestModalEye";
import BookingPaymentModal from "../Modals/BookingPaymentModal";
import PayNow from "../Modals/PayNow";
import { AiFillQuestionCircle } from "react-icons/ai";

const PendingRequest = () => {
  const [page, setPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 10;
  const [showEye, setShowEye] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [showBookingPayment, setShowBookingPayment] = useState(false);

  const [showPayment, setShowPayment] = useState(false);
  const handleShowBookingPayment = () => setShowBookingPayment(true);
  const handleCloseBookingPayment = () => setShowBookingPayment(false);
  const handleShowPayment = () => setShowPayment(true);
  const handleClosePayment = () => setShowPayment(false);
  const handleShowEye = () => setShowEye(true);
  const handleCloseEye = () => setShowEye(false);
  const handleShowCheck = () => setShowCheck(true);
  const handleCloseCheck = () => setShowCheck(false);

  const headers = [
    { key: "musicianImage", label: "Musician Image" },
    { key: "musicianName", label: "Musician/Band Name" },
    { key: "eventName", label: "Event Name" },
    { key: "eventType", label: "Event Type" },
    { key: "eventDate", label: "Event date & time" },
    { key: "applicationReceivedDate", label: "Application Received Date" },
    { key: "eventBudget", label: "Event Budget" },
    { key: "status", label: "Status" },
    { key: "chat", label: "Chat" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      musicianImage: eventorganizer1,
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival mockkkkk",
      eventType: "Wedding",
      eventDate: "15/12/24 11:30: PM",
      applicationReceivedDate: "12/12/24",
      eventBudget: "$500",
      status: "Pending",
      chat: "Chat",
      action: "More Options",
    },
    {
      musicianImage: eventorganizer1,
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "15/12/24 11:30: PM",
      applicationReceivedDate: "11/12/24",
      eventBudget: "$500",
      status: "Pending",
      chat: "Chat",
      action: "More Options",
    },
    {
      musicianImage: eventorganizer1,
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "15/12/24 11:30: PM",
      applicationReceivedDate: "12/12/24",
      eventBudget: "$500",
      status: "Pending",
      chat: "Chat",
      action: "More Options",
    },
    {
      musicianImage: eventorganizer1,
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "15/12/24 11:30: PM",
      applicationReceivedDate: "12/12/24",
      eventBudget: "$500",
      status: "Pending",
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
              name: "status",
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
                  case "accept":
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
                  <img
                    src={Icon2}
                    alt="Icon 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      margin: "0 5px",
                      cursor: "pointer",
                    }}
                    onClick={handleShowCheck}
                  />
                  <img
                    src={Icon3}
                    alt="Icon 3"
                    style={{
                      width: "30px",
                      height: "30px",
                      margin: "0 5px",
                      cursor: "pointer",
                    }}
                  />
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

      <PendingRequestModalEye show={showEye} handleClose={handleCloseEye} />
      <PendingRequestModalCheck
        show={showCheck}
        handleClose={handleCloseCheck}
        handleShowBookingPayment={handleShowBookingPayment}
        handleBookingPaymentClose={handleCloseBookingPayment}
      />
      <BookingPaymentModal
        show={showBookingPayment}
        handleClose={handleCloseBookingPayment}
        handleOpenPayNow={handleShowPayment}
      />
      <PayNow show={showPayment} handleCloses={handleClosePayment} />
    </div>
  );
};

export default PendingRequest;
