import React, { useState } from "react";
import { IoCheckmarkCircle, IoChevronForward } from "react-icons/io5";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import { FaCirclePlay } from "react-icons/fa6";
import feimg2 from "/assets/images/feimg2.png";
import userimg from "/assets/images/user.png";
import lessonimg from "/assets/images/vid.png";
import duraimg from "/assets/images/duration.png";
import updateimg from "/assets/images/update.png";
import { FaStar } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";

const CourseDetails = () => {
  const courseContent = [
    {
      title: "Introduction: Course Overview",
      lessons: [
        {
          title: "Introduction",
          duration: "5m",
          color: "#1B1B1B99",
        },
      ],
    },
    {
      title: "Lesson 1: Getting Started",
      lessons: [
        {
          title: "Video 1",
          duration: "5m",
          color: "#1B1B1B99",
        },
        {
          title: "Video 2",
          duration: "6m",
          color: "#1B1B1B99",
        },
      ],
    },
    {
      title: "Lesson 2: Intermediate Techniques ",
      lessons: [
        {
          title: "Video 1",
          duration: "10m",
          color: "#1B1B1B99",
        },
        {
          title: "Video 2",
          duration: "7m",
          color: "#1B1B1B99",
        },
      ],
    },
  ];
  const [activeKey, setActiveKey] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveKey((prevKey) => (prevKey === index ? null : index));
  };

  return (
    <>
      <section class="about-page-top bg-main-blue pt-90">
        <div class="mycontainer">
          <h1
            style={{
              fontSize: "60px", // Increase font size
              letterSpacing: "2px", // Add gap between letters
            }}
            class="py-5 mb-0 display-2 text-main-orange text-uppercase text-center fw-medium font-bebas"
          >
            Course Details
          </h1>
        </div>
      </section>
      <div class="clip-btm-rt-box"></div>
      <div className="mycontainer">
        <div className="row px-4 py-5 justify-content-between">
          <div className="col-md-7">
            <h3
              className="font-poppins"
              style={{ color: "#013C61", fontWeight: 700 }}
            >
              Mastering Musical Instruments: From Guitar to Harmonica
            </h3>

            <h5
              className="font-poppins pt-4"
              style={{ color: "#013C61", fontWeight: 500 }}
            >
              About the course
            </h5>
            <p className="font-poppins" style={{ color: "#406B86" }}>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros
              tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut
              vulputate nisi. Integer in felis sed leo vestibulum venenatis.
              Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum
              vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu
              mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula
              vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam
              eget mi in purus lobortis eleifend. Sed nec ante dictum sem
              condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis
              nisi, ac posuere leo.
            </p>
            <div className="pt-4">
              <h5
                className="font-poppins"
                style={{ color: "#013C61", fontWeight: 500 }}
              >
                What you'll learn
              </h5>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                {/* Learning Point 1 */}
                <Grid item xs={12} sm={6} display="flex">
                  <IoCheckmarkCircle
                    size={24}
                    color="#013C61"
                    style={{ marginRight: "8px" }}
                  />
                  <span
                    className="font-poppins"
                    style={{ color: "#013C61", fontSize: "15px" }}
                  >
                    Master the basics of guitar playing
                  </span>
                </Grid>

                {/* Learning Point 2 */}
                <Grid item xs={12} sm={6} display="flex">
                  <IoCheckmarkCircle
                    size={24}
                    color="#013C61"
                    style={{ marginRight: "8px" }}
                  />
                  <span
                    className="font-poppins"
                    style={{ color: "#013C61", fontSize: "15px" }}
                  >
                    Understand music theory for all instruments
                  </span>
                </Grid>

                {/* Learning Point 3 */}
                <Grid item xs={12} sm={6} display="flex">
                  <IoCheckmarkCircle
                    size={24}
                    color="#013C61"
                    style={{ marginRight: "8px" }}
                  />
                  <span
                    className="font-poppins"
                    style={{ color: "#013C61", fontSize: "15px" }}
                  >
                    Learn advanced guitar techniques
                  </span>
                </Grid>

                {/* Learning Point 4 */}
                <Grid item xs={12} sm={6} display="flex">
                  <IoCheckmarkCircle
                    size={24}
                    color="#013C61"
                    style={{ marginRight: "8px" }}
                  />
                  <span
                    className="font-poppins"
                    style={{ color: "#013C61", fontSize: "15px" }}
                  >
                    Play harmonica like a professional
                  </span>
                </Grid>

                {/* Learning Point 5 */}
                <Grid item xs={12} sm={6} display="flex">
                  <IoCheckmarkCircle
                    size={24}
                    color="#013C61"
                    style={{ marginRight: "8px" }}
                  />
                  <span
                    className="font-poppins"
                    style={{ color: "#013C61", fontSize: "15px" }}
                  >
                    Develop rhythm and timing skills
                  </span>
                </Grid>

                {/* Learning Point 6 */}
                <Grid item xs={12} sm={6} display="flex">
                  <IoCheckmarkCircle
                    size={24}
                    color="#013C61"
                    style={{ marginRight: "8px" }}
                  />
                  <span
                    className="font-poppins"
                    style={{ color: "#013C61", fontSize: "15px" }}
                  >
                    Master chord progressions and improvisation
                  </span>
                </Grid>
              </Grid>
            </div>
            <div className="pt-5">
              <div className="d-flex justify-content-between">
                <h5
                  className="font-poppins"
                  style={{ color: "#013C61", fontWeight: 500 }}
                >
                  Course content
                </h5>

                <h6
                  className="font-poppins"
                  style={{ color: "#013C61", fontWeight: 500 }}
                >
                  03 Lessons
                </h6>
              </div>
              <div>
                {courseContent.map((section, index) => (
                  <Accordion
                    expanded={activeKey === String(index)}
                    onChange={() => handleAccordionToggle(String(index))}
                    sx={{
                      boxShadow: "none", // Removes shadow for a clean look
                      border: "none", // Removes the border
                      backgroundColor: "#f4f4f4",
                      "&:not(.Mui-expanded)": {
                        backgroundColor: "#f4f4f4",
                      },
                      "&.Mui-expanded": {
                        backgroundColor: "#BFCDD6",
                      },
                    }}
                    key={index}
                  >
                    <AccordionSummary
                      expandIcon={<IoChevronForward />}
                      aria-controls={`panel-${index}-content`}
                      id={`panel-${index}-header`}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "15px", // Make sure the header has rounded corners
                        backgroundColor:
                          activeKey === String(index) ? "#BFCDD6" : "#f4f4f4",
                      }}
                    >
                      <div>
                        <Typography
                          sx={{
                            color: "#013C61",
                            fontWeight: "600",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                          }}
                        >
                          {section.title}
                        </Typography>
                        <div className="d-flex align-content-center gap-2">
                          <Typography
                            sx={{ fontFamily: "Poppins", fontSize: "12px" }}
                          >
                            {section.lessons.length} Videos
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "red",
                            }}
                          >
                            {/* Display total time for lessons */}
                            {section.lessons.reduce((totalTime, lesson) => {
                              // Assuming `lesson.duration` is in 'Xm' format, e.g. '5m'
                              const minutes = parseInt(
                                lesson.duration.replace("m", "")
                              );
                              return totalTime + minutes;
                            }, 0)}
                            m
                          </Typography>
                        </div>
                      </div>
                    </AccordionSummary>

                    <AccordionDetails
                      sx={{
                        backgroundColor:
                          activeKey === String(index) ? "#f9f9f9" : "#fff",
                        padding: "10px",
                      }}
                    >
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} style={{ padding: "8px 0" }}>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Typography
                              style={{
                                fontSize: "13px",
                                fontFamily: "Poppins",
                                fontWeight: "300",
                              }}
                            >
                              {lesson.title}
                            </Typography>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <FaCirclePlay
                                size={13}
                                color={"#00DDC0"}
                                style={{ marginRight: "5px" }}
                              />
                              <Typography
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "10px",
                                  color: "#00DDC0",
                                }}
                              >
                                {lesson.duration}
                              </Typography>
                            </div>
                          </div>
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-4 mt-md-0 ">
            <div
              className="bg-white shadow"
              style={{ width: "350px", borderRadius: "15px" }}
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "350px",
                  height: "300px",
                }}
              >
                {/* Image */}
                <img
                  style={{
                    borderRadius: "15px 15px 0px 0",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={feimg2} // Your image source
                  alt="feimg2"
                />

                {/* Play Icon */}
                <IoIosPlay
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "50px",
                    color: "white",
                    backgroundColor: "orange",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="p-3  ">
                <div className="d-flex align-items-center mt-1">
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#013C61",
                      fontSize: "12px",
                      fontWeight: "500",
                      marginRight: 1,
                    }}
                  >
                    (4.7)
                  </Typography>
                  {/* Stars */}
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      size={15}
                      style={{
                        color: index < Math.floor(4.7) ? "#FF9700" : "#e0e0e0",
                        marginRight: "2px",
                      }}
                    />
                  ))}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#009BFD",
                      fontSize: "12px",
                      fontWeight: "500",
                      marginLeft: 1,
                    }}
                  >
                    (40,649 ratings)
                  </Typography>
                </div>
                <div className="d-flex flex-column mt-4 gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={lessonimg}
                      alt="lessonimg"
                      style={{ width: "14px", height: "14px" }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        color: "#013C61",
                        fontSize: "12px",
                        fontWeight: "500",
                        marginRight: 1,
                      }}
                    >
                      Lesson 5
                    </Typography>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={duraimg}
                      alt="duraimg"
                      style={{ width: "14px", height: "14px" }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        color: "#013C61",
                        fontSize: "12px",
                        fontWeight: "500",
                        marginRight: 1,
                      }}
                    >
                      1h 30m
                    </Typography>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={userimg}
                      alt="userimg"
                      style={{ width: "14px", height: "14px" }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        color: "#013C61",
                        fontSize: "12px",
                        fontWeight: "500",
                        marginRight: 1,
                      }}
                    >
                      Enrolled 20+
                    </Typography>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={updateimg}
                      alt="updateimg"
                      style={{ width: "14px", height: "14px" }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        color: "#013C61",
                        fontSize: "12px",
                        fontWeight: "500",
                        marginRight: 1,
                      }}
                    >
                      Last Update 10/2024
                    </Typography>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={lessonimg}
                      alt="lessonimg"
                      style={{ width: "14px", height: "14px" }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        color: "#013C61",
                        fontSize: "12px",
                        fontWeight: "500",
                        marginRight: 1,
                      }}
                    >
                      Lesson 5
                    </Typography>
                  </div>
                </div>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    color: "#013C61",
                    fontSize: "12px",
                    fontWeight: "500",
                    marginTop: 1,
                  }}
                >
                  Experience level : Beginner
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    color: "#013C61",
                    fontSize: "12px",
                    fontWeight: "500",
                    marginTop: 1,
                  }}
                >
                  Created by Angela
                </Typography>

                <button
                  class="d-flex w-100 justify-content-center btn-orange-solid text-white py-2    font-poppins mt-5 "
                  style={{
                    border: "0px",
                    borderRadius: "10px",
                    fontSize: "14px",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clip-top-lft-box"></div>
    </>
  );
};

export default CourseDetails;
