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

import TableMui from "../../../mui/TableMuiCustom";

import { BsThreeDots } from "react-icons/bs";

import Paginate from "../../../Components/Paginate";

import EventQuote from "../../Modals/EventQuote";

import { MdChatBubbleOutline } from "react-icons/md";

import { IoEye } from "react-icons/io5";

import eventorganizer1 from "/assets/images/eventorganizer1.png";

import BookingPaymentModal from "../../Modals/BookingPaymentModal";

import PayNow from "../../Modals/PayNow";

import RefundModal from "../../Modals/RefundModal";

import { AiFillQuestionCircle } from "react-icons/ai";

import CancelConfirmationModal from "../../Modals/CancelConfirmationModal";
import EditProposalModal from "../../../Admin/Modals/EditProposalModal";

const ProposalTab = () => {
  const [showPayNow, setShowPayNow] = useState(false);

  const [page, setPage] = useState(1);

  const [anchorEl, setAnchorEl] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const [isRefundOpen, setIsRefundModalOpen] = useState(false);

  const [paymentModalData, setPaymentModalData] = useState(null);
  const [showEditProposalModal, setShowEditProposalModal] = useState(false);

  // Handlers for opening and closing the modal
  const handleOpenEditProposalModal = () => setShowEditProposalModal(true);
  const handleCloseEditProposalModal = () => setShowEditProposalModal(false);

  const totalItems = 1000;

  const itemsPerPage = 10;

  const headers = [
    { key: "musicianImage", label: "Musician Image" },

    { key: "musicianName", label: "Musician/Band Name" },

    { key: "eventName", label: "Event Name" },

    { key: "eventType", label: "Event Type" },

    { key: "eventDate", label: "Event date & time" },

    { key: "performanceType", label: "Performance Type" },
    { key: "quoteStatus", label: "Proposal Status" },
    { key: "chat", label: "Chat" },

    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      musicianImage: eventorganizer1,

      musicianName: "Christine Brooks",

      eventName: "Summer Jazz Festival",

      eventType: "Wedding",

      eventDate: "15/12/24 11:30: PM",

      performanceType: "With Band",

      eventStatus: "Pending",

      quoteStatus: "Pending",

      paymentStatus: "Pending",
    },

    {
      musicianImage: eventorganizer1,

      musicianName: "Christine Brooks",

      eventName: "Summer Jazz Festival",

      eventType: "Wedding",

      eventDate: "15/12/24 11:30: PM",

      performanceType: "With Band",

      eventStatus: "Pending",

      quoteStatus: "Accept",

      paymentStatus: "Pending",
    },

    {
      musicianImage: eventorganizer1,

      musicianName: "Christine Brooks",

      eventName: "Summer Jazz Festival",

      eventType: "Wedding",

      eventDate: "15/12/24 11:30: PM",

      performanceType: "With Band",

      eventStatus: "Pending",

      quoteStatus: "Reject",

      paymentStatus: "Pending",
    },

    {
      musicianImage: eventorganizer1,

      musicianName: "Christine Brooks",

      eventName: "Summer Jazz Festival",

      eventType: "Wedding",

      eventDate: "15/12/24 11:30: PM",

      performanceType: "With Band",

      eventStatus: "Cancel",

      quoteStatus: "Accept",

      paymentStatus: "Paid",
    },

    {
      musicianImage: eventorganizer1,

      musicianName: "Christine Brooks",

      eventName: "Summer Jazz Festival",

      eventType: "Wedding",

      eventDate: "15/12/24 11:30: PM",

      performanceType: "With Band",

      eventStatus: "Cancel",

      quoteStatus: "Accept",

      paymentStatus: "Refunded",
    },
  ];

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

  const handleDelete = () => {
    // Implement delete functionality here

    handleMenuClose();
  };

  const [cancelModal, setCancelModal] = useState(false);

  const handleCancel = () => {
    handleMenuClose();

    setCancelModal(true);
  };

  const handleClose = () => {
    setCancelModal(false);
  };

  const handleConfirm = () => {
    // Add your confirmation logic here

    setCancelModal(false);
  };

  const handleOpenModal = (row) => {
    setPaymentModalData(row);

    console.log("Opening modal");

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handleOpenRefundModal = () => {
    setIsRefundModalOpen(true);
  };

  const handleCloseRefundModal = () => {
    setIsRefundModalOpen(false);
  };

  const handleOpenPayNow = () => {
    setShowPayNow(true);
  };

  const handleClosePayNow = () => {
    setShowPayNow(false);
  };

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
              name: "performanceType",

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
              name: "quoteStatus",

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

                      padding: "3px",

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
              name: "payment",

              data: (value, row) => {
                const { eventStatus, quoteStatus, paymentStatus } = row;

                if (eventStatus === "Pending" && quoteStatus === "Pending") {
                  return <></>;
                }

                if (eventStatus === "Pending" && quoteStatus === "Accept") {
                  return (
                    <Button
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
                      onClick={() => handleOpenPaymentModal(row)}
                    >
                      Pay Now to Start Event
                    </Button>
                  );
                }

                if (eventStatus === "Pending" && quoteStatus === "Reject") {
                  return <></>;
                }

                if (
                  eventStatus === "Cancel" &&
                  quoteStatus === "Accept" &&
                  paymentStatus === "Paid"
                ) {
                  return (
                    <Button
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
                      onClick={() => handleOpenRefundModal(row)}
                    >
                      Refund Request
                    </Button>
                  );
                }

                if (
                  eventStatus === "Cancel" &&
                  quoteStatus === "Accept" &&
                  paymentStatus === "Refunded"
                ) {
                  return <></>;
                }
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
                  Chat
                </Button>
              ),
            },

            {
              name: "action",

              data: () => (
                <>
                  <IconButton
                    sx={{
                      color: "#fff",

                      backgroundColor: "#003A5E",

                      borderRadius: "50%",

                      padding: "2px",

                      marginRight: 1,

                      "&:hover": {
                        color: "#fff",

                        backgroundColor: "#809daf",
                      },
                    }}
                    onClick={handleOpenModal}
                  >
                    <IoEye />
                  </IconButton>

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
                      Delete
                    </MenuItem>

                    <MenuItem
        sx={{
          color: "#ffff",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: 500,
        }}
        onClick={handleOpenEditProposalModal} // Open modal when clicked
      >
        Edit
      </MenuItem>

                    {/* <MenuItem
                      onClick={handleCancel}
                      sx={{
                        color: "#ffff",

                        fontFamily: "Poppins",

                        fontSize: "14px",

                        fontWeight: 500,
                      }}
                    >
                      Cancel
                    </MenuItem> */}
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

      <EventQuote show={isModalOpen} handleClose={handleCloseModal} />

      <BookingPaymentModal
        show={isPaymentModalOpen}
        handleClose={handleClosePaymentModal}
        data={paymentModalData}
        handleOpenPayNow={handleOpenPayNow}
      />
        <EditProposalModal show={showEditProposalModal} handleClose={handleCloseEditProposalModal} />

      <RefundModal show={isRefundOpen} handleClose={handleCloseRefundModal} />

      <PayNow show={showPayNow} handleCloses={handleClosePayNow} />

      <CancelConfirmationModal
        show={cancelModal}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      />
    </div>
  );
};

export default ProposalTab;
