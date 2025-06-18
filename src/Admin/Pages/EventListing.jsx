import { Checkbox, Box, Avatar, Typography, IconButton } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoEye, IoSearch } from "react-icons/io5";
import TableMui from "../../mui/TableMuiCustom";
import { BsThreeDotsVertical } from "react-icons/bs";
import Paginate from "../../Components/Paginate";
import EventListingModal from "../Modals/EventLsitingModal";
import Icon1 from "/assets/images/eye-icon-blue-circle.png";

const EventListing = () => {
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const totalItems = 1000;
  const itemsPerPage = 10;
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMenuOpen = Boolean(menuAnchorEl);
  const [selectedEventStatus, setSelectedEventStatus] = useState([]);
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState([]);

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProfile(null);
  };
  const handleFaBarsClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleFaBarsMenuClose = () => {
    setMenuAnchorEl(null);
  };
  const tableData = [
    {
      eventName: "Summer Jazz Festival",
      eventOrganizer: "Mira Carder",
      musicianBooked: "Lincoln Geidt",
      eventDate: "15/12/24 11:30 PM",
      bookkingDate: "15/12/24 11:30 PM",
      eventType: "Festival",
      paymentStatus: "Paid",
      proposedFee: "$1500",
      location: "Lisbon",
      status: "Ongoing",
    },
    {
      eventName: "Summer Jazz Festival",
      eventOrganizer: "Mira Carder",
      musicianBooked: "Lincoln Geidt",
      eventDate: "15/12/24 11:30 PM",
      bookkingDate: "15/12/24 11:30 PM",
      eventType: "Festival",
      paymentStatus: "Pending",
      proposedFee: "$1500",
      location: "Lisbon",
      status: "Completed",
    },
    {
      eventName: "Summer Jazz Festival",
      eventOrganizer: "Mira Carder",
      musicianBooked: "Lincoln Geidt",
      eventDate: "15/12/24 11:30 PM",
      bookkingDate: "15/12/24 11:30 PM",
      eventType: "Festival",
      paymentStatus: "Paid",
      proposedFee: "$1500",
      location: "Lisbon",
      status: "Completed",
    },
    {
      eventName: "Autumn Jazz Festival",
      eventOrganizer: "John Doe",
      musicianBooked: "Jane Smith",
      eventDate: "15/12/24 11:30 PM",
      bookkingDate: "15/12/24 11:30 PM",
      eventType: "Festival",
      paymentStatus: "Pending",
      proposedFee: "$2000",
      location: "Paris",
      status: "Scheduled",
    },
    {
      eventName: "Winter Jazz Festival",
      eventOrganizer: "Alice Johnson",
      musicianBooked: "Bob Brown",
      eventDate: "15/12/24 11:30 PM",
      bookkingDate: "15/12/24 11:30 PM",
      eventType: "Festival",
      paymentStatus: "Refunded",
      proposedFee: "$1800",
      location: "Berlin",
      status: "Ongoing",
    },
    {
      eventName: "Spring Jazz Festival",
      eventOrganizer: "Charlie Davis",
      musicianBooked: "Diana Green",
      eventDate: "15/12/24 11:30 PM",
      bookkingDate: "15/12/24 11:30 PM",
      eventType: "Festival",
      paymentStatus: "Pending",
      proposedFee: "$1600",
      location: "Rome",
      status: "Completed",
    },
    {
      eventName: "New Year Jazz Festival",
      eventOrganizer: "Eve White",
      musicianBooked: "Frank Black",
      eventDate: "15/12/24 11:30 PM ",
      bookkingDate: "15/12/24 11:30 PM",
      eventType: "Festival",
      paymentStatus: "Paid",
      proposedFee: "$2500",
      location: "New York",
      status: "Pending",
    },
  ];

  const tableHeaders = [
    { key: "eventName", label: "Event Name" },
    { key: "eventOrganizer", label: "Event Organizer" },
    { key: "musicianBooked", label: "Musician Booked" },
    { key: "bookkingDate", label: "Booking Date & time" },
    { key: "eventDate", label: "Event Date & Time" },
    { key: "eventType", label: "Event Type" },
    { key: "proposedFee", label: "Proposed Fee" },
    { key: "location", label: "Location" },
    { key: "paymentStatus", label: "Payment Status" },
    { key: "status", label: "Event Status" },
    { key: "more", label: "Action" },
  ];

  const eventStatusOptions = ["Ongoing", "Cancel", "Completed", "Pending"];
  const paymentStatusOptions = ["Pending", "Paid", "Refund"];

  const handleSelectAll = () => {
    setSelectedEventStatus([...eventStatusOptions]);
    setSelectedPaymentStatus([...paymentStatusOptions]);
  };

  const handleUnselectAll = () => {
    setSelectedEventStatus([]);
    setSelectedPaymentStatus([]);
  };

  const handleToggleEventStatus = (status) => {
    setSelectedEventStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const handleTogglePaymentStatus = (status) => {
    setSelectedPaymentStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  return (
    <div className="container-fluid" style={{ color: "#f5f5f5" }}>
      <div className="row search justify-content-between m-2 p-2 mt-4">
        <div className="col-12 col-lg-6 col-md-12 d-flex align-items-start justify-content-start">
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
                cursor: "pointer",
              }}
              onClick={handleFaBarsClick}
            />

            <Menu
              anchorEl={menuAnchorEl}
              open={isMenuOpen}
              onClose={handleFaBarsMenuClose}
              sx={{
                "& .MuiPaper-root": {
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px 0px rgba(6, 47, 85, 0.1)",
                  width: "310px",
                },
              }}
            >
              {/* Select and Unselect Buttons */}
              <div className="d-flex align-items-center gap-2">
                <MenuItem
                  className="font-bebas m-2"
                  sx={{
                    justifyContent: "center",
                    fontSize: "14px",
                    color: "#ffffff",
                    fontWeight: 400,
                    backgroundColor: "#003a5e",
                    borderRadius: "20px",
                    padding: "7px",
                    width: "50%",
                    "&:hover": {
                      backgroundColor: "#003a5e",
                    },
                  }}
                  onClick={handleSelectAll}
                >
                  Select All
                </MenuItem>
                <MenuItem
                  className="font-bebas m-1"
                  sx={{
                    flex: 0.2,
                    justifyContent: "center",
                    fontSize: "14px",
                    color: "#002B46",
                    fontWeight: 400,
                    border: "2px solid #003a5e",
                    borderRadius: "20px",
                    margin: "0 5px",
                  }}
                  onClick={handleUnselectAll}
                >
                  Unselect All
                </MenuItem>
              </div>
              <hr style={{ border: "1px solid #6d6a6a" }} />

              {/* Event Status Section */}
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  fontFamily: "Poppins",
                  margin: "8px 12px 4px",
                  color: "#003A5E",
                }}
              >
                Event Status
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  padding: "8px",
                }}
              >
                {eventStatusOptions.map((status) => (
                  <MenuItem
                    key={status}
                    className="font-bebas m-1"
                    sx={{
                      justifyContent: "center",
                      fontSize: "14px",
                      color: selectedEventStatus.includes(status)
                        ? "#ffffff"
                        : "#002B46",
                      fontWeight: 400,
                      backgroundColor: selectedEventStatus.includes(status)
                        ? "#003a5e"
                        : "#ffffff",
                      border: "2px solid #003a5e",
                      borderRadius: "20px",
                      padding: "5px 15px",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        backgroundColor: "#003a5e",
                        color: "#ffffff",
                      },
                    }}
                    onClick={() => handleToggleEventStatus(status)}
                  >
                    {status}
                  </MenuItem>
                ))}
              </div>

              {/* Payment Status Section */}
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  fontFamily: "Poppins",
                  margin: "8px 12px 4px",
                  color: "#003A5E",
                }}
              >
                Payment Status
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  padding: "8px",
                }}
              >
                {paymentStatusOptions.map((status) => (
                  <MenuItem
                    key={status}
                    className="font-bebas m-1"
                    sx={{
                      justifyContent: "center",
                      fontSize: "14px",
                      color: selectedPaymentStatus.includes(status)
                        ? "#ffffff"
                        : "#002B46",
                      fontWeight: 400,
                      backgroundColor: selectedPaymentStatus.includes(status)
                        ? "#003a5e"
                        : "#ffffff",
                      border: "2px solid #003a5e",
                      borderRadius: "20px",
                      padding: "5px 15px",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        backgroundColor: "#003a5e",
                        color: "#ffffff",
                      },
                    }}
                    onClick={() => handleTogglePaymentStatus(status)}
                  >
                    {status}
                  </MenuItem>
                ))}
              </div>

              {/* Apply Now Button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "8px",
                }}
              >
                <MenuItem
                  className="font-syne m-2"
                  sx={{
                    justifyContent: "center",
                    fontSize: "13px",
                    color: "#ffffff",
                    fontWeight: 700,
                    backgroundColor: "#ff9700",
                    borderRadius: "8px",
                    padding: "9px",
                    width: "50%",
                    "&:hover": {
                      backgroundColor: "#ff9700",
                    },
                  }}
                  onClick={handleFaBarsMenuClose}
                >
                  Apply Now
                </MenuItem>
              </div>
            </Menu>
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
        <div className="col-12 col-lg-6 col-md-12 d-flex flex-column flex-md-row align-items-start gap-3 ms-0 mt-3 mt-md-3 mt-lg-0">
          {/* Sort Dropdown */}
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
          td={tableData}
          customFields={[
            {
              name: "eventName",
              data: (value, item) => (
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
              data: (value, item) => (
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
              name: "musicianBooked",
              data: (value, item) => (
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
              data: (value, item) => (
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
              name: "bookkingDate",
              data: (value, item) => (
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
              data: (value, item) => (
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
              name: "proposedFee",
              data: (value, item) => (
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
              data: (value, item) => (
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
              name: "status",
              data: (value, task) => (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    backgroundColor:
                      task.status === "Pending"
                        ? "#ffffb9"
                        : task.status === "Scheduled"
                        ? "#cce5ff"
                        : task.status === "Cancelled"
                        ? "#f2cccc"
                        : task.status === "Ongoing"
                        ? "#ffffb9"
                        : task.status === "Completed"
                        ? "#d0efcd"
                        : "#99C3FF", // Default color for other statuses
                    color:
                      task.status === "Request Pending"
                        ? "#9b9b00"
                        : task.status === "Scheduled"
                        ? "#007bff"
                        : task.status === "Cancelled"
                        ? "#c00000"
                        : task.status === "Ongoing"
                        ? "#9b9b00"
                        : task.status === "Completed"
                        ? "#13b104"
                        : "#9b9b00",
                    padding: "3px 7px",
                    borderRadius: "20px",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                  }}
                >
                  {task.status}
                </Box>
              ),
            },
            {
              name: "more",
              data: (value, item) => (
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
                  />
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
      <div className="pagination mt-2 me-1 mb-2  justify-content-end">
        <Paginate
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
        />
      </div>
      {modalVisible && (
        <EventListingModal
          show={modalVisible}
          handleClose={closeModal}
          profileData={selectedProfile}
        />
      )}
    </div>
  );
};

export default EventListing;
