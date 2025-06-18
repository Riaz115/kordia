import React, { useState } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { IoEye, IoSearch } from "react-icons/io5";
import TableMui from "../../mui/TableMuiCustom";
import Paginate from "../../Components/Paginate";
import { MdChatBubbleOutline } from "react-icons/md";
import EventQuote from "../Modals/EventQuote";

const Schedules = () => {
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalItems = 70; // Adjust based on your needs
  const itemsPerPage = 10;

  const tableHeaders = [
    { key: "musicianBandName", label: "MUSICIAN/BAND NAME" },
    { key: "eventName", label: "EVENT NAME" },
    { key: "eventType", label: "EVENT TYPE" },
    { key: "eventDate", label: "EVENT DATE" },
    { key: "location", label: "LOCATION" },
    { key: "performanceType", label: "PERFORMANCE TYPE" },
    { key: "paymentStatus", label: "PAYMENT STATUS" },
    { key: "eventStatus", label: "EVENT STATUS" },
    { key: "chat", label: "CHAT" },
    { key: "trackProgress", label: "Track Progress" },
    { key: "actionStatus", label: "ACTION" },
  ];

  const tableRows = [
    {
      musicianBandName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "15/12/24",
      location: "Lisbon",
      performanceType: "With Band",
      eventStatus: "Ongoing", // New field
      paymentStatus: "Paid", // New field
      chat: "Chat",
      actionStatus: "View",
    },
    {
      musicianBandName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "16/12/24",
      location: "Lisbon",
      performanceType: "With Band",
      eventStatus: "Complete", // New field
      paymentStatus: "Pending", // New field
      chat: "Chat",
      actionStatus: "View",
    },
    {
      musicianBandName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "15/12/24",
      location: "Lisbon",
      performanceType: "With Band",
      eventStatus: "Pending", // New field
      paymentStatus: "Refunded", // New field
      chat: "Chat",
      actionStatus: "View",
    },
    {
      musicianBandName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "16/12/24",
      location: "Lisbon",
      performanceType: "With Band",
      eventStatus: "Ongoing", // New field
      paymentStatus: "Paid", // New field
      chat: "Chat",
      actionStatus: "View",
    },
    {
      musicianBandName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "15/12/24",
      location: "Lisbon",
      performanceType: "With Band",
      eventStatus: "Cancelled", // New field
      paymentStatus: "Refunded", // New field
      chat: "Chat",
      actionStatus: "View",
    },
    {
      musicianBandName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "16/12/24",
      location: "Lisbon",
      performanceType: "With Band",
      eventStatus: "Complete", // New field
      paymentStatus: "Pending", // New field
      chat: "Chat",
      actionStatus: "View",
    },
    {
      musicianBandName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "16/12/24",
      location: "Lisbon",
      performanceType: "With Band",
      eventStatus: "Ongoing", // New field
      paymentStatus: "Paid", // New field
      chat: "Chat",
      actionStatus: "View",
    },
  ];

  const handleOpenModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="row g-0 search justify-content-between p-3 pt-4">
        <div className="col-12 col-lg-5 col-md-12 d-flex align-items-start mb-sm-2 mb-xs-2">
          <div
            className="d-flex align-items-center contactus-input bg-white p-2 rounded-pill position-relative"
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
              backgroundColor: "#f0f0f0",
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
              backgroundColor: "#f0f0f0",
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
      <div className="table">
        <TableMui
          headerRounded={true}
          th={tableHeaders.reduce((acc, header) => {
            acc[header.key] = header.label;
            return acc;
          }, {})}
          td={tableRows}
          customFields={[
            {
              name: "musicianBandName",
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
              name: "status",
              data: (value) => (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    backgroundColor:
                      value === "Complete" ? "#d0efcd" : "#ffffb9",
                    color: value === "Complete" ? "#13b104" : "#9b9b00",
                    padding: "3px 7px",
                    borderRadius: "20px",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                  }}
                >
                  {value}
                </Box>
              ),
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
              name: "trackProgress",
              data: (item, data) => {
                const { paymentStatus, eventStatus } = data;
                let buttonProps = {
                  disabled: true, // Default state: disabled
                  sx: {
                    backgroundColor: "#E0E0E0", // Default dull color
                    color: "#A0A0A0",
                    borderRadius: "20px",
                    padding: "5px 15px",
                    textTransform: "none",
                    fontSize: "13px",
                    fontFamily: "Poppins",
                  },
                };

                // Conditions for button
                if (paymentStatus === "Paid" && eventStatus === "Ongoing") {
                  buttonProps = {
                    ...buttonProps,
                    disabled: false,
                    sx: {
                      ...buttonProps.sx,
                      backgroundColor: "#FF9700", // Enabled color
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#FF7B00",
                        color: "white",
                      },
                    },
                  };
                }

                return (
                  <Button
                    {...buttonProps}
                    onClick={() => {
                      if (!buttonProps.disabled) {
                        console.log("Track Progress clicked");
                        // Add your tracking logic here
                      }
                    }}
                  >
                    Completed
                  </Button>
                );
              },
            },
            {
              name: "actionStatus",
              data: (value) => (
                <IconButton
                  sx={{
                    color: "#013c61",
                    borderRadius: "10%",
                    padding: "5px",
                    fontSize: "24px",
                  }}
                  onClick={() => {
                    handleOpenModal();
                    console.log("clicked");
                  }}
                >
                  <IoEye />
                </IconButton>
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

      <EventQuote show={isModalOpen} handleClose={handleCloseModal} />
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

export default Schedules;
