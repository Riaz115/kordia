import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Menu, MenuItem } from "@mui/material";
import { CiFilter } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import feimg4 from "/assets/images/feimg4.png";
import Card from "./Forums/Card";
import AddPost from "./Modal/AddPost";

const dummyData = [
  {
    id: 1,
    name: "Jaxson Curtis",
    date: "Jun, 15",
    category: "Networking & Collaboration",
    comments: 567,
    likes: 800,
  },
  {
    id: 2,
    name: "Alex Johnson",
    date: "Jun, 16",
    category: "Technical Resources",
    comments: 123,
    likes: 456,
  },
  // Add more dummy data objects here
  // ...
  {
    id: 10,
    name: "Taylor Swift",
    date: "Jun, 25",
    category: "Personal Promotion",
    comments: 789,
    likes: 1011,
  },
  {
    id: 1,
    name: "Jaxson Curtis",
    date: "Jun, 15",
    category: "Networking & Collaboration",
    comments: 567,
    likes: 800,
  },
  {
    id: 2,
    name: "Alex Johnson",
    date: "Jun, 16",
    category: "Technical Resources",
    comments: 123,
    likes: 456,
  },
  // Add more dummy data objects here
  // ...
  {
    id: 10,
    name: "Taylor Swift",
    date: "Jun, 25",
    category: "Personal Promotion",
    comments: 789,
    likes: 1011,
  },
];
const filterOptions = [
  "Networking & Collaboration",
  "Technical Resources",
  "Education",
  "Technical Resources & Equipment",
  "Job Market",
  "Feedback",
  "Legislation & Bureaucracy",
  "Personal Promotion",
  "Others",
];

const Forums = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMenuOpen = Boolean(menuAnchorEl);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleFaBarsClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleFaBarsMenuClose = () => {
    setMenuAnchorEl(null);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 col-md-12 d-flex align-items-start justify-content-start">
          <div
            className="d-flex align-items-center contactus-input bg-white p-2 rounded-pill position-relative t"
            style={{ width: "100%" }}
          >
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
        <div
          onClick={handleFaBarsClick}
          className="col-xl-2 col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-evenly p-2 bg-white border border-1 tes "
        >
          <span className="icon-class" style={{ marginRight: "8px" }}>
            <CiFilter
              size={30}
              style={{ cursor: "pointer", color: "#979797" }}
            />
          </span>
          <span
            className="text-class"
            style={{
              marginRight: "18px",
              fontSize: "18px",
              color: "#979797",
              fontWeight: "500",
              fontFamily: "Poppins",
            }}
          >
            Filter
          </span>
          <span className="dropdown-icon-class">
            <IoMdArrowDropdown
              size={30}
              style={{ cursor: "pointer", color: "#979797" }}
            />
          </span>
        </div>
        <Menu
          anchorEl={menuAnchorEl}
          open={isMenuOpen}
          onClose={handleFaBarsMenuClose}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 0px rgba(6, 47, 85, 0.1)",
              padding: "10px",
              width: "450px",
            },
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center flex-wrap gap-3"
          
          >
            {filterOptions
              .slice() 
              .sort((a, b) => a.localeCompare(b)) // Sorts the options in ascending order
              .map((option, index) => (
                <MenuItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    color: "#002B46",
                    fontWeight: 400,
                    border: "2px solid #003a5e",
                    borderRadius: "20px",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "#013c65",
                      color: "white",
                    },
                  }}
                >
                  {option}
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
              sx={{
                justifyContent: "center",
                fontSize: "13px",
                color: "#ffffff",
                fontWeight: 700,
                backgroundColor: "#ff9700",
                borderRadius: "8px",
                padding: "9px",
                width: "30%",
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
      </div>
      <div className="row w-100 mt-2 g-3">
        <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
          <div
            style={{
              border: "1px solid #003a5e",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "#013c61",
              height: "325px",
            }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ backgroundColor: "#013c61", height: "100%" }}
            >
              <AiFillPlusCircle
                size={40}
                style={{ color: "#ff9700", cursor: "pointer" }}
                onClick={handleShow}
              />
              <p
                className="card-text text-center mt-2"
                style={{
                  color: "#ff9700",
                  fontSize: "28px",
                  fontWeight: "400",
                  fontFamily: "Bebas Neue",
                }}
              >
                Add POST
              </p>
            </div>
          </div>
        </div>

        <Card dummyData={dummyData} feimg4={feimg4} />
      </div>
      <AddPost show={show} onHide={handleClose} />
    </div>
  );
};

export default Forums;
