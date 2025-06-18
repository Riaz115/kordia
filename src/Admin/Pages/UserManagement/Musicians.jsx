import {
  Checkbox,
  Box,
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoEye, IoSearch } from "react-icons/io5";
import TableMui from "../../../mui/TableMuiCustom";
import eventorganizer1 from "/assets/images/eventorganizer1.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import Paginate from "../../../Components/Paginate";
import viewProfileIcon from "/assets/images/view-profile-icon.png";
import unblockProfileIcon from "/assets/images/unblock-profile-icon.png";
import blockProfileIcon from "/assets/images/block-profile-icon.png";
import { IoIosArrowBack } from "react-icons/io";
import ProfileModal from "../../Modals/ProfileModal";

const Musicians = () => {
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMenuOpen = Boolean(menuAnchorEl);
  const [selectedItems, setSelectedItems] = useState([]);
  const totalItems = 1000;
  const itemsPerPage = 10;
  const tableData = [
    {
      image: eventorganizer1,
      name: "Ahmad Torff",
      genre: "Classical, Indie Folk",
      registrationDate: "12/12/24",
      location: "Lisbon",
      subscriptionPlan: "Standard",
      status: "Active",
    },
    {
      image: eventorganizer1,
      name: "Ryan Levin",
      genre: "Classical, Indie Folk",
      registrationDate: "12/12/24",
      location: "Lisbon",
      subscriptionPlan: "Basic",
      status: "Active",
    },
    {
      image: eventorganizer1,
      name: "Talon Torff",
      genre: "Classical, Indie Folk",
      registrationDate: "12/12/24",
      location: "Lisbon",
      subscriptionPlan: "Standard",
      status: "Block",
    },
    {
      image: eventorganizer1,
      name: "Jaydan Curtis",
      genre: "Classical, Indie Folk",
      registrationDate: "12/12/24",
      location: "Lisbon",
      subscriptionPlan: "Premium",
      status: "Active",
    },
    {
      image: eventorganizer1,
      name: "Randy Vaccaro",
      genre: "Classical, Indie Folk",
      registrationDate: "12/12/24",
      location: "Lisbon",
      subscriptionPlan: "Standard",
      status: "Active",
    },
    {
      image: eventorganizer1,
      name: "Angel Donin",
      genre: "Classical, Indie Folk",
      registrationDate: "12/12/24",
      location: "Lisbon",
      subscriptionPlan: "Basic",
      status: "Active",
    },
    {
      image: eventorganizer1,
      name: "Gustavo Gelatt",
      genre: "Classical, Indie Folk",
      registrationDate: "12/12/24",
      location: "Lisbon",
      subscriptionPlan: "Basic",
      status: "Active",
    },
  ];

  const tableHeaders = [
    { key: "image", label: "IMAGE" },
    { key: "name", label: "NAME" },
    { key: "genre", label: "GENRE" },
    { key: "registrationDate", label: "REGISTRATION DATE" },
    { key: "location", label: "LOCATION" },
    { key: "subscriptionPlan", label: "SUBSCRIPTION PLAN" },
    { key: "status", label: "STATUS" },
    { key: "more", label: "MORE" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleViewProfile = (profile) => {
    setSelectedProfile(profile);
    setModalVisible(true);
    handleMenuClose();
  };

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

  const menuItems = [
    "With Band ",
    "Un band",
    "Block",
    "Active",
    "Male",
    "Female",
  ];
  const handleSelectAll = () => {
    setSelectedItems([...menuItems]);
  };

  const handleUnselectAll = () => {
    setSelectedItems([]);
  };

  const handleToggleItem = (item) => {
    setSelectedItems(
      (prev) =>
        prev.includes(item)
          ? prev.filter((i) => i !== item) // Remove if already selected
          : [...prev, item] // Add if not selected
    );
  };

  return (
    <div className="container-fluid" style={{ color: "#f5f5f5" }}>
      <div className="row search justify-content-between m-2 p-2 mt-4 ">
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
                  width: "350px",
                },
              }}
            >
              <div className="d-flex align-items-center gap-2">
                <MenuItem
                  className="poppins m-2"
                  sx={{
                    justifyContent: "center",
                    fontSize: "16px",
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
                    fontSize: "16px",
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
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap", // Allows wrapping to the next line
                  gap: "8px", // Adds spacing between items
                  padding: "8px",
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item}
                    className="font-bebas m-1"
                    sx={{
                      justifyContent: "center",
                      fontSize: "16px",
                      color: selectedItems.includes(item)
                        ? "#ffffff"
                        : "#002B46",
                      fontWeight: 400,
                      backgroundColor: selectedItems.includes(item)
                        ? "#003a5e"
                        : "#ffffff",
                      border: "2px solid #003a5e",
                      borderRadius: "20px",
                      padding: "5px 15px", // Adjust padding for a better fit
                      whiteSpace: "nowrap", // Prevents text wrapping inside the button
                      "&:hover": {
                        backgroundColor: "#003a5e",
                        color: "#ffffff",
                      },
                    }}
                    onClick={() => handleToggleItem(item)}
                  >
                    {item}
                  </MenuItem>
                ))}
              </div>

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
                    width: "50%", // Same width as "Select All"
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
              name: "image",
              data: (value, item) => <Avatar src={value} />,
            },
            {
              name: "name",
              data: (value, item) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "genre",
              data: (value, item) => (
                <Typography
                  sx={{
                    color: "#013c61",
                    fontSize: "13px",
                    fontFamily: "poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "registrationDate",
              data: (value, item) => (
                <Typography
                  sx={{
                    color: "#013c61",
                    fontSize: "13px",
                    fontFamily: "poppins",
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
                    color: "#013c61",
                    fontSize: "13px",
                    fontFamily: "poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "subscriptionPlan",
              data: (value, item) => (
                <Typography
                  sx={{
                    color: "#013c61",
                    fontSize: "13px",
                    fontFamily: "poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
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
                      task.status === "Active"
                        ? "#cfebcc"
                        : task.status === "Block"
                        ? "#f2cccc"
                        : "#99C3FF", // Default color for other statuses
                    color:
                      task.status === "Active"
                        ? "#13b104"
                        : task.status === "Block"
                        ? "#c00000"
                        : "#003a5e",
                    padding: "3px 7px",
                    borderRadius: "20px",
                    fontFamily: "poppins",
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
                  <IconButton
                    onClick={handleMenuClick}
                    sx={{
                      backgroundColor: "#ededed",
                      color: "#013c61",
                      borderRadius: "10%",
                      padding: "5px",
                    }}
                  >
                    <BsThreeDotsVertical />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    sx={{
                      boxShadow: "none",
                      borderRadius: "10px",
                      "& .MuiPaper-root": {
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px 0px rgba(6, 47, 85, 0.1)",
                      },
                    }}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <Typography
                      className="font-bebas"
                      variant="h6"
                      sx={{
                        padding: "8px 16px",
                        fontWeight: "bold",
                        color: "#000000",
                        fontSize: "16px",
                        fontFamily: "poppins",
                      }}
                    >
                      View More
                    </Typography>
                    <MenuItem
                      onClick={() => handleViewProfile(item)}
                      sx={{
                        position: "relative",
                        paddingRight: "40px",
                        fontFamily: "poppins",
                        fontSize: "14px",
                        color: "#1d1d1d",
                        fontWeight: 400,
                      }}
                    >
                      <img
                        src={viewProfileIcon}
                        alt="viewProfileIcon"
                        style={{
                          marginRight: "16px",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      View Profile
                      <IoIosArrowBack
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          marginLeft: "8px",
                        }}
                      />
                    </MenuItem>
                    <MenuItem
                      onClick={handleMenuClose}
                      sx={{
                        position: "relative",
                        paddingRight: "40px",
                        fontFamily: "poppins",
                        fontSize: "14px",
                        color: "#1d1d1d",
                        fontWeight: 400,
                      }}
                    >
                      <img
                        src={blockProfileIcon}
                        alt="blockProfileIcon"
                        style={{
                          marginRight: "16px",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      Block Profile
                      <IoIosArrowBack
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          marginLeft: "8px",
                        }}
                      />
                    </MenuItem>
                    <MenuItem
                      onClick={handleMenuClose}
                      sx={{
                        position: "relative",
                        paddingRight: "40px",
                        fontFamily: "poppins",
                        fontSize: "14px",
                        color: "#1d1d1d",
                        fontWeight: 400,
                      }}
                    >
                      <img
                        src={unblockProfileIcon}
                        alt="unblockProfileIcon"
                        style={{
                          marginRight: "16px",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      Unblock Profile
                      <IoIosArrowBack
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          marginLeft: "8px",
                        }}
                      />
                    </MenuItem>
                  </Menu>
                </>
              ),
            },
          ]}
          styleTableTh={{
            backgroundColor: "#003a5e",
            color: "#FF9700",
            fontWeight: 400,
            fontSize: 20,
            fontFamily: "poppins",
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
        <ProfileModal
          show={modalVisible}
          handleClose={closeModal}
          profileData={selectedProfile}
        />
      )}
    </div>
  );
};

export default Musicians;
