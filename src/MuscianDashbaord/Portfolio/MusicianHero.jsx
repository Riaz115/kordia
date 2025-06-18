import React from "react";
import { FaStar } from "react-icons/fa";
import img7 from "/assets/images/facebook-orange.png";
import img8 from "/assets/images/insta-orange.png";
import img9 from "/assets/images/chat-orange.png";
import feimg1 from "/assets/images/feimg1.png";
import { Typography } from "@mui/material";
const MusicianHero = () => {
  return (
    <section className="bg-main-blue hero pt-90 ">
      <div className="mycontainer">
        <div className="row align-items-center justify-content-center text-center text-md-start">
          {/* Image Section */}
          <div className="col-md-6 d-flex justify-content-center">
            <img
              className="rounded-lg"
              src={feimg1}
              alt="heroimg"
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "20px",
              }}
            />
          </div>

          {/* Content Section */}
          <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start mt-4 mt-md-0">
            <div>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Bebas Neue",
                  fontSize: { xs: 48, md: 70 },
                }}
              >
                Zain Korsgaard
              </Typography>
              <h5
                className="mb-0 font-bebas"
                style={{
                  color: "#fff",
                  fontSize: 26,
                }}
              >
                Artist Reviews
              </h5>
              <h5
                className="mb-0 font-poppins"
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 36,
                }}
              >
                4.7
              </h5>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mt-1">
                {/* Stars */}
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    size={17}
                    style={{
                      color: index < Math.floor(4.7) ? "#FF9700" : "#e0e0e0",
                      marginRight: "2px",
                    }}
                  />
                ))}
              </div>
              <div
                className="mt-2 font-poppins"
                style={{
                  fontSize: "10px",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                (570 Reviews)
              </div>

              <h5
                className="mb-0 font-bebas mt-3"
                style={{
                  color: "#fff",
                  fontSize: 36,
                }}
              >
                Follow On:
              </h5>

              {/* Social Media */}
              <div className="d-flex justify-content-center justify-content-md-start">
                <a href={"#"} target="_blank" rel="noopener noreferrer">
                  <img
                    className="icon-40px"
                    src={img7}
                    alt="Social"
                    style={{ marginLeft: 4, width: "30px", height: "30px" }}
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    className="icon-40px"
                    src={img8}
                    alt="Social"
                    style={{ marginLeft: 4, width: "30px", height: "30px" }}
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={img9}
                    alt="Social"
                    style={{ marginLeft: 4, width: "30px", height: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicianHero;
