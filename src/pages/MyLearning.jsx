import React, { useState } from "react";
import { Typography, Box, Tabs, Tab, Grid } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import avtarimg from "/assets/images/eventorganizer2.png";
import img1 from "/assets/images/lesson.png";
import fimg1 from "/assets/images/feimg4.png";
import img2 from "/assets/images/use.png";
import img3 from "/assets/images/time.png";
import imgnno from "/assets/images/nocourse.png";
import { useNavigate } from "react-router-dom";

const MyLearning = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const courseDataArray = [
    {
      id: 1,
      image: fimg1,
      category: "Pop",
      rating: 4.7,
      title: "Mastering Musical Instruments: From Guitar to Harmonica",
      author: {
        name: "John Doe",
        avatar: avtarimg,
      },
    },
    {
      id: 2,
      image: fimg1,
      category: "Trending",
      rating: 4.9,
      title: "The Art of Digital Painting: From Basics to Advanced",
      author: {
        name: "Alice Smith",
        avatar: avtarimg,
      },
    },
    {
      id: 3,
      image: fimg1,
      category: "Most Popular",
      rating: 4.5,
      title: "Introduction to Python Programming",
      author: {
        name: "Mike Johnson",
        avatar: avtarimg,
      },
    },
    {
      id: 4,
      image: fimg1,
      category: "Newest",
      rating: 4.8,
      title: "Graphic Design Masterclass: Tools and Techniques",
      author: {
        name: "Sarah Connor",
        avatar: avtarimg,
      },
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/my-learning/details/${id}`);
  };

  return (
    <>
      <section class="about-page-top bg-main-blue pt-90">
        <div class="mycontainer">
          <Typography
            sx={{
              fontSize: { xs: "48px", sm: "48px", lg: "60px" }, // Adjust for small screens
              letterSpacing: "2px", // Add gap between letters
              fontFamily: "Bebas Neue",
            }}
            className="mb-0 text-main-orange text-uppercase"
          >
            Welcome, Jhon
          </Typography>

          <Typography
            className="mb-2 text-white font-poppins"
            sx={{
              width: { sm: "100%", lg: "50%" },
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 18,
            }}
          >
            Skills that put you ahead
          </Typography>
          <Typography
            className="mb-0 text-white font-poppins"
            sx={{
              width: { sm: "100%", lg: "50%" },
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 14,
            }}
          >
            Discover the courses that will help you get where you want to go.
          </Typography>
        </div>
      </section>
      <div class="clip-btm-rt-box"></div>
      <Box className="mycontainer" sx={{ padding: { xs: "15px", md: "90px" } }}>
        <div className="bg-white shadow-sm p-3">
          {/* Heading */}
          <Typography style={{ fontFamily: "Poppins", borderRadius: "8px" }}>
            Explore the Musicians
          </Typography>

          <Box
            className="mt-3"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: 2, md: 2 },
              alignItems: "center",
            }}
          >
            {/* Left Section: Search Input and Button */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: { xs: 2, md: 2 },
                flexGrow: 1,
              }}
            >
              {/* Search input field */}
              <div
                className="position-relative"
                style={{
                  width: "100%", // Use full width initially
                }}
              >
                <input
                  type="text"
                  placeholder="Search for Course by name"
                  className="form-control"
                  style={{
                    height: "38px",
                    backgroundColor: "#F9F9F9",
                    border: "none",
                    paddingLeft: "30px", // Space for the icon
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    borderRadius: "8px",
                  }}
                />
                <FaSearch
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    color: "#809DAF",
                  }}
                />
              </div>

              {/* Search button */}
              <Button
                className="d-flex align-items-center"
                style={{
                  backgroundColor: "#FF9700",
                  fontFamily: "Poppins",
                  border: "none",
                  color: "#fff",
                  borderRadius: "8px",
                  height: "38px",
                  padding: "0 25px", // Adjusted padding to widen button
                  fontSize: "14px",
                  textTransform: "capitalize",
                  fontWeight: 400,
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
        </div>

        <div className=" mt-4">
          {/* Tabs Section */}
          <Box
          className="my-3"
            sx={{
              display: "flex",
              justifyContent: "start",
              mt: 2, // Margin top for spacing
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              TabIndicatorProps={{
                style: { display: "none" }, // Hides the default indicator
              }}
              sx={{
                backgroundColor: "#BFCDD6",
                border: "1px solid #034F75",
                borderRadius: "8px",
                p: "2px", // Padding inside the tabs
                width: { xs: "200px", md: "300px" },
              }}
            >
              <Tab
                label="Online"
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  fontSize: { xs: 8, md: 14 },
                  flex: 1,
                  px: 2,
                  backgroundColor: activeTab === 0 ? "#FFFFFF" : "transparent",
                  color: activeTab === 0 ? "#034F75" : "#034F75",
                  fontWeight: activeTab === 0 ? 600 : 400,
                  borderRadius: "5px",
                }}
              />
              <Tab
                label="In-person"
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  fontSize: { xs: 8, md: 14 },
                  flex: 1,
                  px: 2,
                  backgroundColor: activeTab === 1 ? "#FFFFFF" : "transparent",
                  color: activeTab === 1 ? "#034F75" : "#034F75",
                  fontWeight: activeTab === 1 ? 600 : 400,
                  borderRadius: "5px",
                }}
              />
             
            
            </Tabs>
          </Box>

          <div className="row">
            {courseDataArray.length > 0 ? (
              courseDataArray.map((data, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
                >
                  <div
                    className="d-flex flex-column bg-white p-3 pt-3 shadow"
                    style={{ width: "320px", cursor: "pointer" }}
                    onClick={() => handleCardClick(data.id)} // Pass data.id for specific handling
                  >
                    {/* Image Section with Category */}
                    <div style={{ position: "relative" }}>
                      <img
                        src={data.image}
                        alt="Course"
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          backgroundColor: "#FF9700",
                          color: "#FFFFFF",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          fontFamily: "Poppins",
                          fontSize: "12px",
                          fontWeight: 300,
                          zIndex: 1,
                        }}
                      >
                        {data.category}
                      </span>
                    </div>

                    {/* Rating Section */}
                    <div className="d-flex flex-row align-items-center mt-2">
                      <div className="d-flex align-items-center">
                        {Array.from({ length: 5 }, (_, index) => (
                          <FaStar
                            key={index}
                            size={13}
                            style={{
                              color:
                                index < Math.floor(data.rating)
                                  ? "#FF9700"
                                  : "#e0e0e0",
                              marginRight: "2px",
                            }}
                          />
                        ))}
                      </div>
                      <div
                        className="font-poppins mt-1"
                        style={{
                          fontSize: "10px",
                          color: "#013C61",
                          fontWeight: 500,
                        }}
                      >
                        ({data.rating})
                      </div>
                    </div>

                    {/* Title */}
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        marginTop: 2,
                        color: "#013C61",
                      }}
                    >
                      {data.title}
                    </Typography>

                    {/* Author and Price Section */}
                    <div
                      className="d-flex flex-column"
                      style={{
                        marginTop: "2px",
                      }}
                    >
                      {/* Author Section */}
                      <div className="d-flex align-items-center">
                        <img
                          src={data.author.avatar}
                          alt="Author Avatar"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginRight: "8px",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            fontSize: "12px",
                            color: "#013C61",
                          }}
                        >
                          by {data.author.name}
                        </span>
                      </div>
                      {/* Dotted Line */}
                      <hr
                        style={{
                          border: "none",
                          borderTop: "2px dotted black",
                          margin: "10px 0",
                        }}
                      />

                      {/* Price and Buy Now Button */}
                      <div className="d-flex align-items-center ">
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontStyle: "Poppins",
                            color: "#406B86",
                          }}
                        >
                          40% Complete
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="d-flex flex-column align-items-center justify-content-center text-center">
                <div>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "24px",
                      color: "#809DAF",
                    }}
                  >
                    You Don’t Have Any Courses Yet
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "12px",
                      color: "#809DAF",
                    }}
                  >
                    Start your learning journey today by exploring our wide
                    range of
                    <br /> courses tailored to your interests
                  </Typography>
                </div>
                <img
                  src={imgnno}
                  alt="imgnno"
                  style={{ width: "auto", height: 400 }}
                />

                <div
                  onClick={() => {
                    navigate("/kordia-acadamy");
                  }}
                  class="d-flex justify-content-center mt-5 text-white py-2 px-3 rounded  fw-medium font-poppins"
                  style={{ backgroundColor: "#013C61", cursor: "pointer" }}
                >
                  Explore Courses
                </div>
              </div>
            )}
          </div>
        </div>
      </Box>

      <div class="clip-top-lft-box"></div>
    </>
  );
};

export default MyLearning;
