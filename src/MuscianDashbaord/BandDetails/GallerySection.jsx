import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import img1 from "/assets/images/search-musician11.jpeg";
import img2 from "/assets/images/musician-slider-2.jpeg";
import img3 from "/assets/images/search-musician14.jpeg";
import bm1 from "/assets/images/bm1.png";
import bm2 from "/assets/images/bm2.png";
import bm3 from "/assets/images/bm3.png";
import bm4 from "/assets/images/bm4.png";
import bm5 from "/assets/images/bm5.png";
import bm6 from "/assets/images/bm6.png";
import bm7 from "/assets/images/bm7.png";
import bm8 from "/assets/images/bm8.png";
import bm9 from "/assets/images/bm9.png";
import videosrc from "/assets/video/vid1.mp4";
import thumsrc from "/assets/images/gal1.png";
import gal2 from "/assets/images/gal2.png";
import gal3 from "/assets/images/gal3.png";
import { IoPlayCircleOutline } from "react-icons/io5";
const GallerySection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  const bandmembers = [
    {
      name: "My REED",
      subtitle: "QUINTET",
      img: bm1,
    },
    {
      name: "John Doe",
      subtitle: "GUITARIST",
      img: bm2,
    },
    {
      name: "Jane Smith",
      subtitle: "PIANIST",
      img: bm3,
    },
    {
      name: "My REED",
      subtitle: "QUINTET",
      img: bm4,
    },
    {
      name: "John Doe",
      subtitle: "GUITARIST",
      img: bm5,
    },
    {
      name: "Jane Smith",
      subtitle: "PIANIST",
      img: bm6,
    },
    {
      name: "My REED",
      subtitle: "QUINTET",
      img: bm7,
    },
    {
      name: "John Doe",
      subtitle: "GUITARIST",
      img: bm8,
    },
    {
      name: "Jane Smith",
      subtitle: "PIANIST",
      img: bm9,
    },
  ];

  return (
    <section className="bg-main-blue hero py-5">
      <div className="mycontainer ">
        <h1
          style={{
            fontSize: "60px", // Increase font size
            letterSpacing: "2px", // Add gap between letters
          }}
          className="mb-2 display-2 text-main-orange text-uppercase text-center fw-medium font-bebas"
        >
          Band Members
        </h1>

        <div className=" container-sm mx-auto" style={{maxWidth:"1000px"}}>
          <div className="row  ">
            {bandmembers.map((member, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-10 d-flex align-items-center justify-content-center mb-4  "
              >
                <div
                  className="d-flex flex-column bg-white p-2 shadow rounded-1"
                  style={{ width: "350px", cursor: "pointer" }}
                >
                  {/* Image Section */}
                  <div>
                    <img
                      src={member.img}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h3 className="font-bebas text-main-blue m-0">
                      {member.name}
                    </h3>
                    <div className="d-flex justify-content-center align-items-center gap-1">
                      <span className=" fw-semibold text-main-orange">
                        Role:
                      </span>
                      <span className="font-poppins text-main-blue">
                        {member.subtitle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default GallerySection;
