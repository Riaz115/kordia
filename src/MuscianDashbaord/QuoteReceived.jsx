import React, { useState } from "react";
import { IoCheckmark, IoClose, IoEye, IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import TableMuiCustom from "../mui/TableMuiCustom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Paginate from "../Components/Paginate";
import EventQuoteModal from "./Modal/EventQuoteModal";
import { useNavigate } from "react-router-dom";

const QuoteReceived = () => {
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalItems = 70; // Adjust based on your needs
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const tableRows = [
    {
      eventName: "Wedding Gala",
      eventOrganizer: "Sarah Johnson",
      dateReceived: "2024-11-01",
      eventDate: "2024-12-10, 6:00 PM",
      location: "New York",
      performanceType: "Live Music",
      eventStatus: "Ongoing",
      paymentStatus: "Paid",
      quoteAmount: 5000,
      quoteStatus: "Pending",
    },
    {
      eventName: "Corporate Meetup",
      eventOrganizer: "James Smith",
      dateReceived: "2024-11-05",
      eventDate: "2024-12-15, 2:00 PM",
      location: "Chicago",
      performanceType: "Speech",
      eventStatus: "Cancelled",
      paymentStatus: "Refunded",
      quoteAmount: 10000,
      quoteStatus: "Accepted",
    },
    {
      eventName: "Music Festival",
      eventOrganizer: "Emma Williams",
      dateReceived: "2024-11-07",
      eventDate: "2024-12-20, 5:00 PM",
      location: "Los Angeles",
      performanceType: "Concert",
      eventStatus: "Pending",
      paymentStatus: "Pending",
      quoteAmount: 15000,
      quoteStatus: "Rejected",
    },
    {
      eventName: "Charity Auction",
      eventOrganizer: "Michael Brown",
      dateReceived: "2024-11-10",
      eventDate: "2024-12-25, 7:00 PM",
      location: "San Francisco",
      performanceType: "Auction",
      eventStatus: "Ongoing",
      paymentStatus: "Paid",
      quoteAmount: 7000,
      quoteStatus: "Accepted",
    },
    {
      eventName: "Product Launch",
      eventOrganizer: "Olivia Johnson",
      dateReceived: "2024-11-15",
      eventDate: "2024-12-30, 11:00 AM",
      location: "Seattle",
      performanceType: "Presentation",
      eventStatus: "Pending",
      paymentStatus: "Pending",
      quoteAmount: 8000,
      quoteStatus: "Pending",
    },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="row g-0 search justify-content-between p-3 pt-4">
        <div className="col-12 col-lg-5 col-md-12 d-flex align-items-start mb-sm-2 mb-xs-2">
          <div
            className="d-flex align-items-center contactus-input bg-white p-2 rounded-pill position-relative "
            style={{ width: "100%" }}
          >
            <FaBars
              className="start-icon position-absolute"
              style={{
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#49454f",
              }}
            />
            <input
              className="w-100 bg-transparent border-0 focus-none ms-2"
              type="search"
              name="search"
              id="search"
              placeholder="Hinted search text"
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            />
            <label
              htmlFor="search"
              className="position-absolute"
              style={{
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <IoSearch className="text-secondary" />
            </label>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-12 d-flex flex-column flex-md-row align-items-start gap-3 ms-0 mt-sm-2 mt-xs-2 mt-md-3 mt-lg-0 ">
          <select
            className="form-select focus-none sort-by-bg border-0 rounded-pill responsive-select"
            name="sortby"
            id="sortby"
            style={{
              width: "100%",
              color: "#013c61",
              backgroundColor: "#F6F6F6",
              padding: "10px 15px",
              fontSize: "16px",
            }}
          >
            <option className="d-none" value="Sortby" selected disabled>
              Sort by newest
            </option>
            <option value="newestfirst">Newest first</option>
            <option value="oldestfirst">Oldest first</option>
          </select>
          {/* Filter Dropdown */}
          <select
            className="form-select focus-none sort-by-bg border-0 rounded-pill"
            name="filterby"
            id="filterby"
            style={{
              width: "100%",
              color: "#013c61",
              backgroundColor: "#F6F6F6",
              padding: "10px 15px",
              fontSize: "16px",
            }}
          >
            <option className="d-none" value="filterby" selected disabled>
              Filter by genre
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <div className="table p-3">
        <TableMuiCustom
          headerRounded={true}
          th={{
            eventName: "Event Name",
            eventOrganizer: "Event Organizer",
            dateReceived: "Request Received Date",
            eventDate: "Event Date & Time",
            location: "Location",
            performanceType: "Performance Type",
            quoteAmount: "Quote Amount",
            eventStatus: "Event Status",
            quoteStatus: "Quote Status",
            paymentStatus: "Payment Status",
            chat: "Chat",
            action: "Action",
          }}
          td={tableRows}
          customFields={[
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
              name: "eventOrganizer",
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
              name: "dateReceived",
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
              name: "location",
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
              name: "quoteAmount",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  ${value}
                </Typography>
              ),
            },
            {
              name: "quoteStatus",
              data: (value) => {
                let statusStyle = {};
                if (value === "Rejected") {
                  statusStyle = {
                    backgroundColor: "#C0000033",
                    color: "#C00000",
                    textAlign: "center",
                  };
                } else if (value === "Accepted") {
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
                    fontSize: "16px",
                    fontFamily: "Bebas Neue",
                    "&:hover": {
                      color: "#ffffff",
                    },
                  }}
                  onClick={() => {
                    navigate(`/musician/chatScreen/1`);
                  }}
                >
                  Chat
                </Button>
              ),
            },
            {
              name: "action",
              data: (value) => (
                <Box display="flex" gap={1}>
                  <IconButton
                    onClick={() => {
                      handleOpenModal();
                    }}
                    sx={{
                      backgroundColor: "#013c61",
                      color: "#ffffff",
                      borderRadius: "50%",
                      padding: "6px",
                      fontSize: "18px",
                      width: "30px",
                      height: "30px",
                      "&:hover": {
                        backgroundColor: "#012241",
                      },
                    }}
                  >
                    <IoEye />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleOpenModal();
                    }}
                    sx={{
                      backgroundColor: "#013c61",
                      color: "#ffffff",
                      borderRadius: "50%",
                      padding: "6px",
                      fontSize: "18px",
                      width: "30px",
                      height: "30px",
                      "&:hover": {
                        backgroundColor: "#012241",
                      },
                    }}
                  >
                    <IoCheckmark />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: "#013c61",
                      color: "#ffffff",
                      borderRadius: "50%",
                      padding: "6px",
                      fontSize: "18px",
                      width: "30px",
                      height: "30px",
                      "&:hover": {
                        backgroundColor: "#012241",
                      },
                    }}
                  >
                    <IoClose />
                  </IconButton>
                </Box>
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

      <EventQuoteModal show={isModalOpen} handleClose={handleCloseModal} />
      <div className="pagination mt-2 me-1 mb-2 justify-content-end">
        <Paginate
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default QuoteReceived;
