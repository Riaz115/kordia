import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Tabs, Tab, Menu, MenuItem } from "@mui/material";
import img1 from "/assets/images/Musician.png";
import img2 from "/assets/images/Musical-genre.png";
import img3 from "/assets/images/BANDS.png";
import img4 from "/assets/images/Projects.png";
import img5 from "/assets/images/Ensembles.png";
import img6 from "/assets/images/Musician.png";
import feimg1 from "/assets/images/feimg1.png";
import feimg2 from "/assets/images/feimg2.png";
import feimg3 from "/assets/images/feimg3.png";
import userChatOrange from "/assets/images/user-chat-orange.png";
import eventorganizer1 from "/assets/images/eventorganizer1.png";
import eventorganizer2 from "/assets/images/eventorganizer2.png";
import eventorganizer3 from "/assets/images/eventorganizer3.png";
import eventorganizer4 from "/assets/images/eventorganizer4.png";
import searchMusician1 from "/assets/images/search-musician1.png";
import searchMusician2 from "/assets/images/search-musician2.png";
import searchMusician3 from "/assets/images/search-musician3.png";
import searchMusician4 from "/assets/images/search-musician4.png";
import searchMusician5 from "/assets/images/search-musician5.png";
import searchMusician6 from "/assets/images/search-musician6.png";
import searchMusician7 from "/assets/images/search-musician7.png";
import musician1 from "/assets/images/musician-1.png";
import musician2 from "/assets/images/musician-2.png";
import musician3 from "/assets/images/musician-3.png";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { IoIosArrowRoundForward, IoMdStar } from "react-icons/io";
import ProfileModal from "../Modals/ProfileModal";
import SendProposalModal from "../../Admin/Modals/SendProposalModal";

const dummyData = {
  musicians: Array(16)
    .fill()
    .map((_, index) => ({
      id: `musician-${index}`,
      image:
        index % 4 === 0
          ? searchMusician1
          : index % 4 === 1
          ? searchMusician2
          : index % 4 === 2
          ? searchMusician3
          : searchMusician4, // Use appropriate images
      name: `Musician ${index + 1}`,
      group: `Solo Artist`,
      rating: (4 + Math.random()).toFixed(1),
      reviews: Math.floor(Math.random() * 100),
      description:
        "Professional musician specializing in multiple instruments.",
    })),

  genres: Array(16)
    .fill()
    .map((_, index) => ({
      id: `genre-${index}`,
      image:
        index % 3 === 0
          ? searchMusician5
          : index % 3 === 1
          ? searchMusician6
          : searchMusician7,
      name: `Genre ${index + 1}`,
      group: `Music Style`,
      rating: (4 + Math.random()).toFixed(1),
      reviews: Math.floor(Math.random() * 100),
      description: "Unique blend of contemporary and classical styles.",
    })),

  bands: Array(12)
    .fill()
    .map((_, index) => ({
      id: `band-${index}`,
      image:
        index % 3 === 0 ? musician1 : index % 3 === 1 ? musician2 : musician3,
      name: `Band ${index + 1}`,
      group: `The Rock Band`,
      rating: (4 + Math.random()).toFixed(1),
      reviews: Math.floor(Math.random() * 100),
      description: "High-energy band perfect for live performances.",
    })),

  projects: Array(16)
    .fill()
    .map((_, index) => ({
      id: `project-${index}`,
      image:
        index % 4 === 0
          ? eventorganizer1
          : index % 4 === 1
          ? eventorganizer2
          : index % 4 === 2
          ? eventorganizer3
          : eventorganizer4,
      name: `Project ${index + 1}`,
      group: `Music Project`,
      rating: (4 + Math.random()).toFixed(1),
      reviews: Math.floor(Math.random() * 100),
      description: "Innovative music project pushing boundaries.",
    })),

  ensembles: Array(12)
    .fill()
    .map((_, index) => ({
      id: `ensemble-${index}`,
      image: index % 3 === 0 ? feimg1 : index % 3 === 1 ? feimg2 : feimg3,
      name: `Ensemble ${index + 1}`,
      group: `Classical Ensemble`,
      rating: (4 + Math.random()).toFixed(1),
      reviews: Math.floor(Math.random() * 100),
      description: "Professional ensemble for sophisticated events.",
    })),
};

const SearchMusiciansBand = () => {
  const [show, setShow] = useState(false); 

  const [value, setValue] = useState(0); 
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedMusician, setSelectedMusician] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMenuOpen = Boolean(menuAnchorEl);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }
  const menuItems = [
    "Chamber music groups",
    "Trio",
    "Duet",
    "Quartet",
    "Quintet",
    "Fanfarras",
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
  const handleFaBarsClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleFaBarsMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleCardClick = (item, e) => {
    e.stopPropagation();
    
      setSelectedMusician(item);
      navigate(`/artist-details`);
      console.log("Navigating to musician details");
    
      // setShowModal(true);
    
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMusician(null);
  };

  const getCurrentData = () => {
    switch (value) {
      case 0:
        return dummyData.musicians;
      case 1:
        return dummyData.genres;
      case 2:
        return dummyData.bands;
      case 3:
        return dummyData.projects;
      case 4:
        return dummyData.ensembles;
      default:
        return [];
    }
  };

  return (
    <div className="container" style={{ backgroundColor: "#f9f9f9" }}>
      <div className=" search justify-content-between m-2 p-2 mt-4 te ">
        <div className="d-flex flex-column align-items-start justify-content-start">
          <div
            className="d-flex align-items-center contactus-input bg-white p-2 rounded-pill position-relative mb-3"
            style={{ width: "30%" }}
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
                  className="font-bebas m-2"
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
          <div
            className="d-flex gap-3 mb-3 w-100 mx-auto"
            style={{ maxWidth: "400px" }}
          >
            {/* Sort Dropdown */}
            <select
              className="form-select focus-none sort-by-bg border-0 rounded-pill responsive-select "
              name="sortby"
              id="sortby"
              style={{
                flex: 1,
                color: "#013c61",
                backgroundColor: "#f0f0f0",
                padding: "10px 15px",
                fontSize: "16px",
                maxWidth: "400px",
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
                flex: 1,
                color: "#013c61",
                backgroundColor: "#f0f0f0",
                padding: "10px 15px",
                fontSize: "16px",
                maxWidth: "400px",
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
        <div
          className="mx-auto"
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Tabs
            value={value}
            onChange={handleTabChange}
            indicatorColor="none"
            textColor="primary"
            centered
            variant="scrollable"
          >
            <Tab
              label="Musician"
              className="font-bebas"
              icon={
                <img
                  src={img1}
                  alt="Musician"
                  style={{
                    width: "80px",
                    height: "80px",
                    opacity: value === 0 ? 1 : 0.6,
                    transition: "opacity 0.3s ease",
                  }}
                />
              }
              style={{
                color: value === 0 ? "#003a5e" : "#809DAF",
                fontWeight: value === 0 ? "bold" : "normal",
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 20,
              }}
            />
            <Tab
              label="Musical genre"
              icon={
                <img
                  src={img2}
                  alt="Musician"
                  style={{
                    width: "80px",
                    height: "80px",
                    opacity: value === 1 ? 1 : 0.6,
                    transition: "opacity 0.3s ease",
                  }}
                />
              }
              style={{
                color: value === 1 ? "#003a5e" : "#809DAF",
                fontWeight: value === 1 ? "bold" : "normal",
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 20,
              }}
            />
            <Tab
              label="Bands"
              icon={
                <img
                  src={img3}
                  alt="Musician"
                  style={{
                    width: "80px",
                    height: "80px",
                    opacity: value === 2 ? 1 : 0.6,
                    transition: "opacity 0.3s ease",
                  }}
                />
              }
              style={{
                color: value === 2 ? "#003a5e" : "#809DAF",
                fontWeight: value === 2 ? "bold" : "normal",
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 20,
              }}
            />
            <Tab
              label="Projects"
              icon={
                <img
                  src={img4}
                  alt="Musician"
                  style={{
                    width: "80px",
                    height: "80px",
                    opacity: value === 3 ? 1 : 0.6,
                    transition: "opacity 0.3s ease",
                  }}
                />
              }
              style={{
                color: value === 3 ? "#003a5e" : "#809DAF",
                fontWeight: value === 3 ? "bold" : "normal",
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 20,
              }}
            />
            <Tab
              label="Ensembles"
              icon={
                <img
                  src={img5}
                  alt="Musician"
                  style={{
                    width: "80px",
                    height: "80px",
                    opacity: value === 4 ? 1 : 0.6,
                    transition: "opacity 0.3s ease",
                  }}
                />
              }
              style={{
                color: value === 4 ? "#003a5e" : "#809DAF",
                fontWeight: value === 4 ? "bold" : "normal",
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 20,
              }}
            />
          </Tabs>
        </div>
      </div>
      <div className="row search justify-content-between m-2 p-2">
        {getCurrentData().map((item) => (
          <div
            key={item.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 aspect-ratio-1"
            onClick={(e) => handleCardClick(item, e)}
            style={{ cursor: "pointer" }}
          >
            <div className="position-relative chat-musician-box h-100 rounded-4">
              <img
                className="h-100 w-100 object-fit-cover rounded-inherit"
                src={item.image}
                alt={item.name}
              />
              <div className="position-absolute chat-musician-hover-content rounded-inherit text-white text-12 w-100 p-2">
                <p
                  className="mb-0  font-poppins fs-5 "
                  style={{ fontWeight: 400 }}
                >
                  {item.name}
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 fw-semibold font-poppins">{item.group}</p>
                  <div className="d-flex align-items-center justify-content-end fw-semibold">
                    <IoMdStar size={15} />
                    <span>
                      {item.rating}({item.reviews})
                    </span>
                  </div>
                </div>

                <p className=" font-poppins fw-light">{item.description}</p>
                <div className="d-flex justify-content-between  ">
                  {value !== 0 && (
                    <a
                      className="d-flex align-items-center my-1 text-decoration-none text-main-orange px-2 py-1 gap-1 me-2 border rounded-pill border-orange"
                      href="#"
                    >
                      <MdOutlineChatBubbleOutline size={20} />
                      <span className="font-bebas fs-6">Chat</span>
                    </a>
                  )}

                  <a
                    className="d-flex  align-items-center my-1 text-decoration-none text-white bg-main-orange px-2 py-1 me-2 border rounded-pill border-orange pointer"
                    href="#"
                  >
                    <span
                      className="font-poppins"
                      onClick={(e) => {
                        console.log("Book now clicked");
                        // navigate("/musician/portfolio");
                        e.stopPropagation();
                        handleShow();
                      }}
                      style={{ fontSize: "12px" }}
                    >
                      Book Now
                    </span>
                    <IoIosArrowRoundForward size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProfileModal
        show={showModal}
        onHide={handleCloseModal}
        data={selectedMusician}
      />

      <SendProposalModal show={show} handleClose={handleClose}/>
    </div>
  );
};

export default SearchMusiciansBand;
