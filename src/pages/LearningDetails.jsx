import React, { useState, useRef } from "react";
import { IoCheckmarkCircle, IoChevronForward } from "react-icons/io5";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Avatar,
  Checkbox,
  Box,
} from "@mui/material";
import { FaCirclePlay } from "react-icons/fa6";
import feimg2 from "/assets/images/feimg2.png";
import avtarimg from "/assets/images/eventorganizer4.png";
import updateimg from "/assets/images/lasttupdate.png";
import { FaFacebook, FaLink, FaStar, FaYoutube } from "react-icons/fa";
import "video.js/dist/video-js.css"; // Import Video.js styles
import videojs from "video.js";
import videosr from "/assets/video/vid1.mp4";
import thumbn from "/assets/images/contact-card-2.jpeg";
import { BsPatchExclamationFill } from "react-icons/bs";
import { MdLanguage, MdSubtitles } from "react-icons/md";

const LearningDetails = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing
  const videoRef = useRef(null); // Reference for Video.js player

  // Video source and thumbnail
  const videoSrc = videosr;
  const thumbnailSrc = thumbn;

  const handlePlayClick = () => {
    setIsPlaying(true); // Set state to playing
    const player = videojs(videoRef.current); // Initialize Video.js
    player.play(); // Start playing the video
  };
  const coursedata = [
    {
      title: "Introduction: Course Overview",
      lessons: [{ title: "Introduction", duration: "5m", completed: true }],
    },
    {
      title: "Lesson 1: Getting Started",
      lessons: [
        { title: "Video 1", duration: "5m", completed: false },
        { title: "Video 2", duration: "6m", completed: false },
      ],
    },
    {
      title: "Lesson 2: Intermediate Techniques ",
      lessons: [
        { title: "Video 1", duration: "10m", completed: false },
        { title: "Video 2", duration: "7m", completed: false },
      ],
    },
  ];
  const [courseContent, setCourseContent] = useState(coursedata);

  const [activeKey, setActiveKey] = useState(null);

  const toggleLessonCompletion = (sectionIndex, lessonIndex) => {
    setCourseContent((prev) =>
      prev.map((section, sIndex) => {
        if (sIndex === sectionIndex) {
          return {
            ...section,
            lessons: section.lessons.map((lesson, lIndex) => {
              if (lIndex === lessonIndex) {
                return {
                  ...lesson,
                  completed: !lesson.completed,
                };
              }
              return lesson;
            }),
          };
        }
        return section;
      })
    );
  };

  const handleAccordionToggle = (index) => {
    setActiveKey((prevKey) => (prevKey === index ? null : index));
  };

  const videoContainerStyle = {
    width: "100%",
    position: "relative",
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
            Welcome to Kordia Academy
          </Typography>

          <Typography
            className="mb-0 text-main-orange font-poppins"
            sx={{
              width: { sm: "100%", lg: "50%" },
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 18,
            }}
          >
            Master the art of music with expert-led courses in instruments,
            vocals, music theory, production, and more. Unleash your potential
            today!
          </Typography>
        </div>
      </section>
      <div class="clip-btm-rt-box"></div>
      <div className="mycontainer">
        <div className="row px-4 py-5 justify-content-between">
          <div className="col-md-7">
            <div style={videoContainerStyle}>
              {!isPlaying ? (
                <div
                  style={{
                    position: "relative",
                    cursor: "pointer",
                  }}
                  onClick={handlePlayClick}
                >
                  <img
                    src={thumbnailSrc}
                    alt="Video Thumbnail"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "orange",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div data-vjs-player>
                  <video
                    ref={videoRef}
                    className="video-js vjs-default-skin"
                    controls
                    preload="auto"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
            <h3
              className="font-poppins"
              style={{ color: "#013C61", fontWeight: 700, marginTop: 20 }}
            >
              Mastering Musical Instruments: From Guitar to Harmonica
            </h3>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center gap-4">
                <div>
                  <div className="d-flex flex-row align-items-center  gap-1">
                    <div className="d-flex align-items-center">
                      {Array.from({ length: 5 }, (_, index) => (
                        <FaStar
                          key={index}
                          size={14}
                          style={{
                            color:
                              index < Math.floor(4.7) ? "#FFD25D" : "#e0e0e0",
                            marginRight: "2px",
                          }}
                        />
                      ))}
                    </div>
                    <div
                      className="font-poppins"
                      style={{
                        fontSize: "13px",
                        color: "#000",
                        fontWeight: 600,
                      }}
                    >
                      4.7
                    </div>
                  </div>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: 10,
                      color: "#6A6F73",
                    }}
                  >
                    5,047 ratings
                  </Typography>
                </div>
                <div>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "13px",
                      color: "#000",
                      fontWeight: 700,
                    }}
                  >
                    24,333
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: 10,
                      color: "#6A6F73",
                    }}
                  >
                    Students
                  </Typography>
                </div>
                <div>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "13px",
                      color: "#000",
                      fontWeight: 700,
                    }}
                  >
                    6 hours
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: 10,
                      color: "#6A6F73",
                    }}
                  >
                    Total
                  </Typography>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <BsPatchExclamationFill />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "13px",
                    color: "#000",
                    fontWeight: 400,
                  }}
                >
                  Last updated September 2022
                </Typography>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex align-items-center gap-2">
                  <MdLanguage />
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "13px",
                      color: "#000",
                      fontWeight: 400,
                    }}
                  >
                    English
                  </Typography>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <MdSubtitles />
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "13px",
                      color: "#000",
                      fontWeight: 400,
                    }}
                  >
                    English [Auto]
                  </Typography>
                </div>
              </div>
            </div>

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
            <div className="row pt-4">
              <div className="col-4">
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#2D2F31",
                  }}
                >
                  Instructor
                </Typography>
              </div>
              <div className="col-8">
                <div className="d-flex flex-column mb-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <Avatar
                        alt="User Avatar"
                        src={avtarimg}
                        sx={{ width: 60, height: 60 }}
                      />
                    </div>
                    <div
                      className=" d-flex flex-column justify-content-center"
                      style={{ marginLeft: 4 }}
                    >
                      <h4
                        className="mb-1"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Poppins",
                          fontWeight: 600,
                        }}
                      >
                        John Doe
                      </h4>
                      <h5
                        style={{
                          fontSize: "10px",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                        }}
                      >
                        300,000+ Students | Graphic Design, Adobe, Affinity &
                        More
                      </h5>
                    </div>
                  </div>

                  {/* Social Media Icons */}
                  <div className="d-flex justify-content-start mt-3">
                    <div
                      className="social-icon d-flex align-items-center justify-content-center rounded-5"
                      style={{
                        backgroundColor: "#6A6F73",
                        width: 40,
                        height: 40,
                        borderRadius: "10%",
                        marginRight: 10,
                      }}
                    >
                      <FaFacebook color="white" size={20} />
                    </div>
                    <div
                      className="social-icon d-flex align-items-center justify-content-center rounded-5"
                      style={{
                        backgroundColor: "#6A6F73",
                        width: 40,
                        height: 40,
                        borderRadius: "10%",
                        marginRight: 10,
                      }}
                    >
                      <FaYoutube color="white" size={20} />
                    </div>
                    <div
                      className="social-icon d-flex align-items-center justify-content-center rounded-5"
                      style={{
                        backgroundColor: "#6A6F73",
                        width: 40,
                        height: 40,
                        borderRadius: "10%",
                      }}
                    >
                      <FaLink color="white" size={20} />
                    </div>
                  </div>
                </div>

                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#406B86",
                  }}
                >
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus. Curabitur tempor quis
                  eros tempus lacinia. Nam bibendum pellentesque quam a
                  convallis. Sed ut vulputate nisi. Integer in felis sed leo
                  vestibulum venenatis. Suspendisse quis arcu sem. Aenean
                  feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.
                  Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
                  Mauris sit amet magna non ligula vestibulum eleifend. Nulla
                  varius volutpat turpis sed lacinia. Nam eget mi in purus
                  lobortis eleifend. Sed nec ante dictum sem condimentum
                  ullamcorper quis venenatis nisi. Proin vitae facilisis nisi,
                  ac posuere leo.
                </Typography>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-4 mt-md-0 ">
            <div>
              <div className="d-flex">
                <h5
                  className="font-poppins"
                  style={{ color: "#013C61", fontWeight: 500 }}
                >
                  Course content
                </h5>
              </div>
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
                          {section.lessons.reduce((totalTime, lesson) => {
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
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box display="flex" alignItems="center">
                            <Checkbox
                              checked={lesson.completed}
                              onChange={() =>
                                toggleLessonCompletion(index, lessonIndex)
                              }
                              sx={{
                                color: "#00DDC0", // Default color
                                "&.Mui-checked": {
                                  color: "green", // Color when checked
                                },
                                marginRight: "5px",
                              }}
                            />
                          </Box>

                          <div>
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
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div class="clip-top-lft-box"></div>
    </>
  );
};

export default LearningDetails;
