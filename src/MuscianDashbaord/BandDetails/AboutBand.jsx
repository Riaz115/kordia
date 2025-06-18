import React from "react";
import locimg from "/assets/images/location.png";
import musicimg from "/assets/images/music.png";
import albumimg from "/assets/images/album.png";
import bandimg from "/assets/images/band.png";
import { Typography } from "@mui/material";
import { PiGuitarLight } from "react-icons/pi";
import { CiMoneyCheck1 } from "react-icons/ci";

const AboutBand = () => {
  return (
    <div className="mycontainer bg-white py-4 px-1 px-md-5">
      <div className="row align-items-center justify-content-center text-center text-md-start p-2">
        <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start mt-4 mt-md-0 ">
          {/* Location */}
          <div className="d-flex align-items-center mb-3 ">
            <img
              src={locimg}
              alt="Location"
              style={{
                width: "16px",
                height: "17px",
                marginRight: "8px",
              }}
            />
            <span
              style={{
                color: "#FF9700",
                fontSize: "14px",
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
            >
              Location:
            </span>
            <span
              className="ms-2"
              style={{
                color: "#013C61",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              Lisbon , Portugal
            </span>
          </div>

          {/* Category */}
          <div className="d-flex align-items-center mb-3">
            <img
              src={musicimg}
              alt="Category"
              style={{
                width: "14px",
                height: "17px",
                marginRight: "8px",
              }}
            />
            <span
              style={{
                color: "#FF9700",
                fontSize: "14px",
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
            >
              Genre :
            </span>
            <span
              className="ms-2"
              style={{
                color: "#013C61",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              Classical, Indie Folk
            </span>
          </div>

          <div class="d-flex  mt-5 w-100 justify-content-center justify-content-md-start">
            <a
              class="btn-orange-solid   w-100 text-white py-1 px-5  rounded-pill text-uppercase fw-medium font-bebas text-center"
              href="#"
              style={{ maxWidth: "250px" }}
            >
              Get A Quote
            </a>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start mt-4 mt-md-0">
          <Typography
            sx={{
              color: "#FF9700",
              fontFamily: "Bebas Neue",
              fontSize: { xs: 38, md: 40 },
            }}
          >
            About Zain Korsgaard
          </Typography>

          <p
            style={{
              color: "#013C61",
              fontFamily: "Poppins",
              fontWeight: 300,
              fontSize: 11,
              lineHeight: 2,
            }}
          >
            Sarah D. is a Lisbon City-based violinist known for her captivating
            blend of classical mastery and contemporary flair. A graduate of The
            Juilliard School, she has performed at iconic venues like Carnegie
            Hall and Lincoln Center, earning praise for her emotive, dynamic
            performances. While rooted in classical music, Sarah is passionate
            about exploring new genres, often collaborating with indie and folk
            artists to create a unique, genre-defying sound. When not
            performing, she teaches private violin lessons and conducts
            masterclasses, inspiring the next generation of musicians to find
            their voice through the violin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBand;
