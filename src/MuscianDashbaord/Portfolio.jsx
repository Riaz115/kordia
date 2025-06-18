import React from "react";
import img1 from "/assets/images/feimg2.png";
import { Box, Button, Typography } from "@mui/material";
import { TbEdit } from "react-icons/tb";
import img2 from "/assets/images/gal1.png";
import img3 from "/assets/images/horiimg.png";
import img4 from "/assets/images/gal2.png";
import img5 from "/assets/images/eventorganizer1.png";
import img6 from "/assets/images/gal3.png";
import { useState } from "react";
import EditProfile from "./Modal/EditProfile";

const Portfolio = () => {
  const [show, setShow] = useState(false);

  const images = [
    { src: img2, alt: "Image 1" },
    { src: img3, alt: "Image 2" },
    { src: img1, alt: "Image 3" },
    { src: img4, alt: "Image 3" },
    { src: img5, alt: "Image 3" },
    { src: img6, alt: "Image 3" },
    // Add more images as needed
  ];
  return (
    <div className="bg-white p-4" style={{ borderRadius: 10 }}>
      <div className="row">
        <Box
          className="col-md-4"
          sx={{ borderRight: { xs: "0px solid", md: "1px solid #809DAF" } }}
        >
          <img
            src={img1}
            alt="img1"
            style={{ width: "220px", height: "180px", borderRadius: "12px" }}
          />
          <div className="d-flex flex-column p-2" style={{ paddingRight: 10 }}>
            <div className="d-flex  align-content-center row  ">
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#809DAF",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Full Name:
                </Typography>
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#013C61",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Jhon Smith
                </Typography>
              </div>
            </div>
            <div className="d-flex  align-content-center row mt-2 ">
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#809DAF",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Email Address:
                </Typography>
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#013C61",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  info@email.com
                </Typography>
              </div>
            </div>
            <div className="d-flex  align-content-center row mt-2 ">
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#809DAF",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Phone Number:
                </Typography>
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#013C61",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  +91 0365 2369 02
                </Typography>
              </div>
            </div>
            <div className="d-flex  align-content-center row mt-2 ">
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#809DAF",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Gender
                </Typography>
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#013C61",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Female
                </Typography>
              </div>
            </div>
            <div className="d-flex  align-content-center row mt-2 ">
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#809DAF",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Language:
                </Typography>
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#013C61",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  English
                </Typography>
              </div>
            </div>
            <div className="d-flex  align-content-center row mt-2 ">
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#809DAF",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Number of Albums Released :
                </Typography>
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#013C61",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  05
                </Typography>
              </div>
            </div>
            <div className="d-flex  align-content-center row mt-2 ">
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#809DAF",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Genre:
                </Typography>
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#013C61",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Musician
                </Typography>
              </div>
            </div>
            <div className="d-flex  align-content-center row mt-2 ">
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#809DAF",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Location:
                </Typography>
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    color: "#013C61",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  Srednja ulica 54, Čabar 83565 USA
                </Typography>
              </div>
            </div>
          </div>
        </Box>
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-end">
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#013C61",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              About me
            </Typography>
            <Button
              startIcon={<TbEdit />}
              sx={{
                backgroundColor: "#FF9700", // Orange background
                color: "#FFFFFF", // White text
                textTransform: "none", // Disable uppercase text
                fontFamily: "Poppins", // Use preferred font
                fontSize: "14px", // Adjust font size
                fontWeight: 500, // Set font weight
                padding: "8px 16px", // Add padding for better spacing
                borderRadius: "8px", // Rounded corners
                "&:hover": {
                  backgroundColor: "#e68600", // Slightly darker orange on hover
                },
              }}
              onClick={() => setShow(!show)}
            >
              Edit
            </Button>
          </div>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "#013C61",
              fontSize: "14px",
              fontWeight: 400,
              marginTop: 2,
            }}
          >
            When referring to Lorem ipsum, different expressions are used,
            namely fill text , fictitious text , blind text or placeholder text
            : in short, its meaning can also be zero, but its usefulness is so
            clear as to go through the centuries and resist the ironic and
            modern versions that came with the arrival of the web. consectetur
            adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur. Quis aute iure reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
            cupiditat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
          <div className="d-flex flex-column mt-2">
            <Typography
              sx={{
                color: "#013C61",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Gallery:
            </Typography>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {images.map((image, index) => (
                <div key={index} style={{ height: "100px", width: "auto" }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      height: "100%",
                      width: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <EditProfile show={show} handleClose={() => setShow(false)} />
    </div>
  );
};

export default Portfolio;
