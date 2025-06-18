import React, { useState } from "react";
import Navbar from "../landingpagecomponents/Navbar";
import Footer from "../landingpagecomponents/Footer";
import { Box, Typography } from "@mui/material";
import { FaSearch, FaUser } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import avtarimg from "/assets/images/eventorganizer2.png";
import img1 from "/assets/images/lesson.png";
import fimg1 from "/assets/images/feimg4.png";
import img2 from "/assets/images/use.png";
import img3 from "/assets/images/time.png";
import imgnno from "/assets/images/nocourse.png";
import { useNavigate } from "react-router-dom";
import CartItemLike from "../Components/CartItemLike";
import { GoDotFill } from "react-icons/go";

const CartPage = () => {
  const navigate = useNavigate();
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedDetail, setSelectedDetail] = useState([]);

  const courses = [
    {
      id: 1,
      title: "Mastering Musical Instruments: From Guitar to Harmonica",
      instructor: "Angela",
      rating: 4.7,
      reviews: 40649,
      duration: "1h 30m",
      lesson: "Lesson 5",
      price: 200,
      originalPrice: 300,
      image: fimg1,
    },
    {
      id: 2,
      title: "Photography Essentials for Beginners",
      instructor: "John",
      rating: 4.9,
      reviews: 52000,
      duration: "2h 15m",
      lesson: "Lesson 10",
      price: 150,
      originalPrice: 250,
      image: fimg1,
    },
  ];

  // Function to toggle course selection
  const handleToggleSelect = (courseId) => {
    const selectedCourse = courses.find((course) => course.id === courseId);

    setSelectedCourses((prevSelected) => {
      if (prevSelected.includes(courseId)) {
        // Remove from selectedCourses and selectedDetail
        setSelectedDetail((prevDetails) =>
          prevDetails.filter((detail) => detail.id !== courseId)
        );
        return prevSelected.filter((id) => id !== courseId);
      } else {
        // Add to selectedCourses and ensure no duplication in selectedDetail
        setSelectedDetail((prevDetails) => {
          const isAlreadySelected = prevDetails.some(
            (detail) => detail.id === courseId
          );
          if (!isAlreadySelected) {
            return [...prevDetails, selectedCourse];
          }
          return prevDetails; // No duplication
        });
        return [...prevSelected, courseId];
      }
    });
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
            Your Course Cart
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
            Review Your Selections Before Checkout
          </Typography>
        </div>
      </section>
      <div class="clip-btm-rt-box"></div>
      <div className="mycontainer py-90">
        <div className="row px-2 px-md-5">
          <div className="col-md-9">
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "18px",
                color: "#013C61",
                fontWeight: 500,
              }}
            >
              {courses.length} Course in Cart
            </Typography>
            <div>
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="py-2 d-flex justify-content-between"
                  style={{ borderTop: "1px solid #0000004D", padding: 2 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      style={{
                        width: "auto",
                        height: 120,
                      }}
                    />
                    <div className="d-flex flex-column gap-2 p-3 p-md-0">
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "15px",
                          color: "#013C61",
                          fontWeight: 500,
                        }}
                      >
                        {course.title}
                      </Typography>
                      <div className="d-flex align-items-center gap-2">
                        <FaUser color="#013C61" />
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "13px",
                            color: "#013C61",
                            fontWeight: 400,
                          }}
                        >
                          By {course.instructor}
                        </Typography>
                      </div>
                      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mt-1">
                        <div className="d-flex align-items-center">
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              color: "#013C61",
                              fontSize: "12px",
                              fontWeight: "500",
                              marginRight: 1,
                            }}
                          >
                            ({course.rating})
                          </Typography>
                          {Array.from({ length: 5 }, (_, index) => (
                            <FaStar
                              key={index}
                              size={15}
                              style={{
                                color:
                                  index < Math.floor(course.rating)
                                    ? "#FF9700"
                                    : "#e0e0e0",
                                marginRight: "2px",
                              }}
                            />
                          ))}
                        </div>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            color: "#009BFD",
                            fontSize: "12px",
                            fontWeight: "500",
                          }}
                        >
                          ({course.reviews.toLocaleString()} ratings)
                        </Typography>
                      </div>
                      <div className="d-flex gap-2">
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            color: "#809DAF",
                            fontWeight: 400,
                          }}
                        >
                          {course.duration} total hours
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            color: "#809DAF",
                            fontWeight: 400,
                          }}
                        >
                          <GoDotFill />
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            color: "#809DAF",
                            fontWeight: 400,
                          }}
                        >
                          {course.lesson}
                        </Typography>
                      </div>
                    </div>
                  </Box>
                  <div className="d-flex align-self-start gap-4">
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: selectedCourses.includes(course.id)
                          ? "#FF0000"
                          : "#029CFD",
                        cursor: "pointer",
                      }}
                      onClick={() => handleToggleSelect(course.id)}
                    >
                      {selectedCourses.includes(course.id)
                        ? "Remove"
                        : "Select"}
                    </Typography>
                    <div>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#013C61",
                        }}
                      >
                        ${course.price}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "16px",
                          color: "#406B86",
                          textDecorationLine: "line-through",
                        }}
                      >
                        ${course.originalPrice}
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  color: "#013C61",
                  fontWeight: 500,
                }}
              >
                Total
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#013C61",
                }}
              >
                $
                {selectedDetail
                  .reduce((total, item) => total + item.price, 0)
                  .toLocaleString()}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "#406B86",
                  textDecorationLine: "line-through",
                }}
              >
                $
                {selectedDetail
                  .reduce((total, item) => total + item.originalPrice, 0)
                  .toLocaleString()}
              </Typography>

              <Button
                className="mt-2"
                style={{
                  width: "100%",
                  backgroundColor: "#FF9700",
                  color: "white",
                  border: "none",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  height: "40px",
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CartItemLike />
      <div class="clip-top-lft-box"></div>
    </>
  );
};

export default CartPage;
