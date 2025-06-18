import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { GoSearch } from "react-icons/go";
import { GoLocation } from "react-icons/go";
import { GoStack, GoChevronDown } from "react-icons/go";
import { CiUser, CiClock2, CiLocationOn } from "react-icons/ci";
import img1 from "/assets/images/conatct-card-1.jpeg";
import img2 from "/assets/images/contact-card-2.jpeg";
import EventDetail from "./Modal/EventDetail";

const EventsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const data = [
    {
      id: 1,
      name: "Kaiya Herwitz",
      date: "12/12/24 - 5:00 pm",
      eventTitle: "Summer Jazz Festival",
      address: "333 Main Street, Tewksbury MA 1876",
      price: "$99.99",
      image: img1, // replace with actual image
    },
    {
      id: 2,
      name: "John Doe",
      date: "14/12/24 - 6:00 pm",
      eventTitle: "Winter Jazz Festival",
      address: "456 Oak Street, Boston MA 02110",
      price: "$79.99",
      image: img2, // replace with actual image
    },
    {
      id: 3,
      name: "Jane Smith",
      date: "15/12/24 - 7:00 pm",
      eventTitle: "Pop Music Night",
      address: "789 Pine Street, Boston MA 02111",
      price: "$89.99",
      image: img1, // replace with actual image
    },
    {
      id: 4,
      name: "Jane Smith",
      date: "15/12/24 - 7:00 pm",
      eventTitle: "Pop Music Night",
      address: "789 Pine Street, Boston MA 02111",
      price: "$89.99",
      image: img1, // replace with actual image
    },
    {
      id: 5,
      name: "Jane Smith",
      date: "15/12/24 - 7:00 pm",
      eventTitle: "Pop Music Night",
      address: "789 Pine Street, Boston MA 02111",
      price: "$89.99",
      image: img1, // replace with actual image
    },
  ];

  return (
    <div className="p-2">
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: {
              xs: "column", // Stack vertically on small screens
              md: "row", // Align in a row on large screens
            },
          }}
        >
          {/* Search Field */}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Search by tittle or Event name"
              sx={{
                backgroundColor: "white",
                border: "1px solid gray",

                borderRadius: "30px",
                height: "40px",
                "& .MuiOutlinedInput-root": {
                  fontSize: "14px",
                  fontFamily: "Poppins",
                },
                "& .MuiInputBase-root": {
                  height: "40px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "30px",
                  border: "none", // Remove default border
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "30px",
                  border: "1px solid gray", // Add gray border on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "30px",
                  border: "1px solid gray", // Remove blue border on focus
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GoSearch style={{ color: "orange" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Location Field */}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Location"
              sx={{
                backgroundColor: "white",
                border: "1px solid gray",
                borderRadius: "30px",

                height: "40px",
                "& .MuiOutlinedInput-root": {
                  fontSize: "14px",
                  fontFamily: "Poppins",
                },
                "& .MuiInputBase-root": {
                  height: "40px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "30px",
                  border: "none", // Remove default border
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "30px",
                  border: "1px solid gray", // Add gray border on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "30px",
                  border: "1px solid gray", // Remove blue border on focus
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GoLocation style={{ color: "orange" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Select Field */}
          <Grid item xs={12} md={4}>
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              IconComponent={() => null} // Remove the default dropdown icon
              sx={{
                backgroundColor: "white",
                border: "1px solid gray",
                borderRadius: "30px",
                color: "gray",
                fontFamily: "Poppins",
                fontSize: "14px",
                height: "40px", // Reduced height
                "& .MuiInputBase-root": {
                  height: "40px",
                  padding: "0 15px", // Adjust padding
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove default border
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid gray", // Add gray border on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid gray", // Remove blue border on focus
                },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <GoStack style={{ color: "orange", marginRight: "8px" }} />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <GoChevronDown style={{ color: "gray" }} />
                </InputAdornment>
              }
            >
              <MenuItem
                value=""
                disabled
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                Select Category
              </MenuItem>
              <MenuItem
                value="category1"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                Category 1
              </MenuItem>
              <MenuItem
                value="category2"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                Category 2
              </MenuItem>
              <MenuItem
                value="category3"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                Category 3
              </MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Box>

      <div className="mt-3">
        <Grid
          container
          spacing={2}
          className=" p-1"
          style={{
            maxHeight: "600px", // Set a fixed height for the card container
            overflowY: "auto", // Enable vertical scrolling when content overflows
          }}
        >
          {data.map((item) => (
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Box
                onClick={() => {
                  handleOpenModal();
                }}
                key={item.id}
                className="d-flex flex-column p-3 bg-white"
                sx={{
                  borderRadius: "10px",
                  cursor: "pointer",
                  border: "2px solid #0000001A",
                  minWidthidth: "320px",
                  width: "auto",
                  marginBottom: "20px",
                  transition: "border 0.2s ease-in-out",
                  "&:hover": {
                    border: "2px solid #00ABD2",
                    boxShadow: "0 0 10px 2px rgba(0,171,210,0.5)",
                  },
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-1">
                    <CiUser size={12} color="#809DAF" />
                    <Typography
                      sx={{
                        color: "#809DAF",
                        fontFamily: "Poppins",
                        fontWeight: 300,
                        fontSize: "10px",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <CiClock2 size={12} color="#809DAF" />
                    <Typography
                      sx={{
                        color: "#809DAF",
                        fontFamily: "Poppins",
                        fontWeight: 300,
                        fontSize: "10px",
                      }}
                    >
                      {item.date}
                    </Typography>
                  </div>
                </div>
                <Typography
                  className="mt-2"
                  sx={{
                    color: "#013C61",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: "20px",
                  }}
                >
                  {item.eventTitle}
                </Typography>
                <Divider
                  sx={{
                    color: "#BFCDD6",
                    height: "2px",
                    backgroundColor: "#BFCDD6",
                    borderRadius: "15px",
                    marginTop: 1,
                  }}
                />
                <div className="d-flex align-items-center gap-1 mt-2">
                  <CiLocationOn size={15} color="#809DAF" />
                  <Typography
                    sx={{
                      color: "#809DAF",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "12px",
                    }}
                  >
                    {item.address}
                  </Typography>
                </div>
                <div className="mt-2">
                  <img
                    src={item.image}
                    alt="event"
                    style={{
                      width: "100%",
                      height: "160px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <Typography
                    sx={{
                      color: "#013C61",
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    {item.price}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF9700",
                      color: "white",
                      borderRadius: "5px",
                      padding: "7px 36px",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      boxShadow: "none",
                      textTransform: "capitalize",
                      fontSize: "12px",
                    }}
                  >
                    Apply Now
                  </Button>
                </div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>

      <EventDetail show={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default EventsList;
