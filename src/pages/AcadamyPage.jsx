import React, { useState } from "react";
import Navbar from "../landingpagecomponents/Navbar";
import Footer from "../landingpagecomponents/Footer";
import {
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import fimg1 from "/assets/images/feimg1.png";
import fimg2 from "/assets/images/feimg2.png";
import sale from "/assets/images/sale.png";

import fimg3 from "/assets/images/feimg3.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CourseCard from "../Components/CourseCard";
import BundleCard from "../Components/BundleCard";
import avtarimg from "/assets/images/eventorganizer2.png";

const AcadamyPage = () => {
  const musicCategories = [
    "Instrument",
    "Children's Musicalization",
    "Music Theory",
    "Composition",
    "Music Production",
    "Improvisation",
    "Chamber Music",
    "Audition Preparation",
    "Music Therapy"
];

  const age = ["Beginner", "Intermediate", "Expert"];
  const availability = ["In-person", "Online (Recorded)"];
  const [selectedCourseType, setSelectedCourseType] = useState("Course");
  const coursetype = ["Course", "Packages/Bundle"];

  const handleCourseChange = (event) => {
    setSelectedCourseType(event.target.value);
  };
  const [selections, setSelections] = useState({
    musicCategories: [],
    age: [],
    availability: [],
  });

  const handleCheckboxChange = (category, value) => {
    setSelections((prevState) => {
      const updatedCategory = prevState[category].includes(value)
        ? prevState[category].filter((item) => item !== value)
        : [...prevState[category], value];

      return { ...prevState, [category]: updatedCategory };
    });
  };
  const bundleDataArray = [
    {
      id: 1,
      image: sale,
      title: "Complete Music Mastery Bundle",
      description:
        "This bundle is designed for aspiring musicians and producers, offering comprehensive courses in guitar, piano, and cutting-edge music production techniques. Whether you're a beginner or looking to enhance your skills, this bundle has something for everyone. Dive into the world of music with detailed lessons, practical exercises, and expert guidance.",
      courseDetails: "03 Courses",
      tags: ["Pop", "Rock", "Jazz"],
      author: { name: "John Doe", avatar: avtarimg },
      price: { original: 300, discounted: 200 },
    },
    {
      id: 2,
      image: sale,
      title: "Jazz Essentials Bundle",
      description:
        "Explore the essence of jazz with this carefully curated bundle. From learning classic jazz techniques to mastering the blues, this bundle is perfect for both beginners and advanced learners. Immerse yourself in the history, theory, and improvisation skills that make jazz such a vibrant genre.",
      courseDetails: "05 Courses",
      tags: ["Jazz", "Blues"],
      author: { name: "Jane Smith", avatar: avtarimg },
      price: { original: 500, discounted: 400 },
    },
    {
      id: 3,
      image: sale,
      title: "Ultimate Piano Mastery Bundle",
      description:
        "Take your piano skills to the next level with this all-inclusive bundle. Featuring advanced techniques, beginner-friendly guides, and performance tips, this bundle is perfect for anyone passionate about playing the piano. Learn from top instructors and gain confidence in your ability to play and perform.",
      courseDetails: "04 Courses",
      tags: ["Classical", "Jazz", "Pop"],
      author: { name: "Emma Brown", avatar: avtarimg },
      price: { original: 400, discounted: 350 },
    },
    {
      id: 4,
      image: sale,
      title: "Rock Guitar Legends Bundle",
      description:
        "Unleash your inner rock star with this bundle that covers everything from basic guitar skills to advanced rock techniques. Learn iconic riffs, solos, and the secrets to playing like the pros. This bundle is your ticket to becoming a rock legend, with lessons inspired by the greats of the genre.",
      courseDetails: "06 Courses",
      tags: ["Rock", "Metal", "Blues"],
      author: { name: "Chris Wilson", avatar: avtarimg },
      price: { original: 450, discounted: 300 },
    },
    {
      id: 5,
      image: sale,
      title: "Music Production Pro Bundle",
      description:
        "Dive deep into the world of music production with this extensive bundle. From understanding DAWs and mixing techniques to creating professional-quality tracks, this bundle has everything you need to kickstart your music production journey. Learn the art of sound design, mixing, and mastering from industry experts.",
      courseDetails: "07 Courses",
      tags: ["Production", "Mixing", "Sound Design"],
      author: { name: "Sophia Lee", avatar: avtarimg },
      price: { original: 600, discounted: 450 },
    },
    {
      id: 6,
      image: sale,
      title: "Classical Masterpieces Bundle",
      description:
        "Immerse yourself in the world of classical music with this unique bundle. Featuring courses on classical piano, violin, and orchestral arrangement, this bundle is perfect for those who admire the timeless beauty of classical compositions. Learn from seasoned instructors and refine your musical artistry.",
      courseDetails: "04 Courses",
      tags: ["Classical", "Orchestral", "Piano"],
      author: { name: "Liam Gray", avatar: avtarimg },
      price: { original: 500, discounted: 350 },
    },
    {
      id: 7,
      image: sale,
      title: "Electronic Music Creator Bundle",
      description:
        "Step into the future of music with this bundle, perfect for aspiring electronic music producers. Covering topics like beat-making, synthesizers, and remixing, this bundle will guide you in creating electronic tracks that stand out. Explore the tools and techniques used by top producers in the industry.",
      courseDetails: "05 Courses",
      tags: ["Electronic", "EDM", "Mixing"],
      author: { name: "Alex Green", avatar: avtarimg },
      price: { original: 550, discounted: 400 },
    },
    {
      id: 8,
      image: sale,
      title: "Songwriting Secrets Bundle",
      description:
        "Unlock the secrets to writing hit songs with this songwriting bundle. Learn about melody creation, lyric writing, and crafting memorable hooks. Whether you're a budding songwriter or an experienced musician, this bundle will provide you with the tools to express your creativity through music.",
      courseDetails: "06 Courses",
      tags: ["Songwriting", "Lyrics", "Melody"],
      author: { name: "Olivia Carter", avatar: avtarimg },
      price: { original: 450, discounted: 300 },
    },
    {
      id: 9,
      image: sale,
      title: "The Vocalist's Ultimate Guide Bundle",
      description:
        "Perfect your singing skills with this comprehensive bundle designed for vocalists. From vocal warm-ups and breathing techniques to mastering stage presence, this bundle covers it all. Learn how to captivate audiences with your voice and perform confidently in any setting.",
      courseDetails: "05 Courses",
      tags: ["Vocal", "Performance", "Breathing"],
      author: { name: "Mia Thompson", avatar: avtarimg },
      price: { original: 500, discounted: 350 },
    },
  ];

  const courseDataArray = [
    {
      id: 1,
      image: fimg1,
      category: "Instrument",
      rating: 4.7,
      title: "Mastering Musical Instruments: From Guitar to Harmonica",
      details: [
        { text: "Lesson 5" },
        { text: "1h 30m" },
        { text: "Enrolled 20+" },
      ],
      experienceLevel: "Beginner",
      author: {
        name: "John Doe",
        avatar: avtarimg,
      },
      price: {
        original: 300,
        discounted: 200,
      },
    },
    {
      id: 2,
      image: fimg1,
      category: "Music Theory",
      rating: 4.9,
      title: "The Art of Digital Painting: From Basics to Advanced",
      details: [
        { text: "Lesson 8" },
        { text: "2h 15m" },
        { text: "Enrolled 50+" },
      ],
      experienceLevel: "Intermediate",
      author: {
        name: "Alice Smith",
        avatar: avtarimg,
      },
      price: {
        original: 400,
        discounted: 300,
      },
    },
    {
      id: 3,
      image: fimg1,
      category: "Composition ",
      rating: 4.5,
      title: "Introduction to Python Programming",
      details: [
        { text: "Lesson 10" },
        { text: "3h 45m" },
        { text: "Enrolled 100+" },
      ],
      experienceLevel: "Beginner",
      author: {
        name: "Mike Johnson",
        avatar: avtarimg,
      },
      price: {
        original: 200,
        discounted: 150,
      },
    },
    {
      id: 4,
      image: fimg1,
      category: "Music Production",
      rating: 4.8,
      title: "Graphic Design Masterclass: Tools and Techniques",
      details: [
        { text: "Lesson 6" },
        { text: "1h 50m" },
        { text: "Enrolled 30+" },
      ],
      experienceLevel: "Advanced",
      author: {
        name: "Sarah Connor",
        avatar: avtarimg,
      },
      price: {
        original: 500,
        discounted: 350,
      },
    },
    {
      id: 5,
      image: fimg1,
      category: "Improvization",
      rating: 4.6,
      title: "Web Development: From HTML to Full-Stack",
      details: [
        { text: "Lesson 12" },
        { text: "5h 10m" },
        { text: "Enrolled 150+" },
      ],
      experienceLevel: "Intermediate",
      author: {
        name: "David Lee",
        avatar: avtarimg,
      },
      price: {
        original: 450,
        discounted: 300,
      },
    },
    {
      id: 6,
      image: fimg1,
      category: "Chamber Music",
      rating: 4.4,
      title: "SEO Optimization: Boost Your Website's Traffic",
      details: [
        { text: "Lesson 7" },
        { text: "1h 20m" },
        { text: "Enrolled 70+" },
      ],
      experienceLevel: "Beginner",
      author: {
        name: "Emma Watson",
        avatar: avtarimg,
      },
      price: {
        original: 350,
        discounted: 250,
      },
    },
    {
      id: 7,
      image: fimg1,
      category: "Children's Musicalization",
      rating: 4.7,
      title: "Photography Fundamentals: Master Your Camera",
      details: [
        { text: "Lesson 9" },
        { text: "2h 30m" },
        { text: "Enrolled 120+" },
      ],
      experienceLevel: "Intermediate",
      author: {
        name: "Chris Brown",
        avatar: avtarimg,
      },
      price: {
        original: 300,
        discounted: 180,
      },
    },
    {
      id: 8,
      image: fimg1,
      category: "Audition Preperation",
      rating: 4.3,
      title: "Mobile App Development: iOS and Android",
      details: [
        { text: "Lesson 15" },
        { text: "4h 10m" },
        { text: "Enrolled 200+" },
      ],
      experienceLevel: "Advanced",
      author: {
        name: "Olivia Martinez",
        avatar: avtarimg,
      },
      price: {
        original: 600,
        discounted: 500,
      },
    },
    {
      id: 9,
      image: fimg1,
      category: "Music Therapy",
      rating: 4.2,
      title: "Culinary Arts: The Joy of Cooking",
      details: [
        { text: "Lesson 4" },
        { text: "1h 15m" },
        { text: "Enrolled 40+" },
      ],
      experienceLevel: "Expert",
      author: {
        name: "Rachel Green",
        avatar: avtarimg,
      },
      price: {
        original: 250,
        discounted: 200,
      },
    },
    {
      id: 10,
      image: fimg1,
      category: "Expert",
      rating: 4.9,
      title: "Fitness Training: Building Strength and Endurance",
      details: [
        { text: "Lesson 20" },
        { text: "6h 30m" },
        { text: "Enrolled 300+" },
      ],
      experienceLevel: "Advanced",
      author: {
        name: "John Cena",
        avatar: avtarimg,
      },
      price: {
        original: 800,
        discounted: 700,
      },
    },
    {
      id: 11,
      image: fimg1,
      category: "Beginner",
      rating: 4.9,
      title: "Fitness Training: Building Strength and Endurance",
      details: [
        { text: "Lesson 20" },
        { text: "6h 30m" },
        { text: "Enrolled 300+" },
      ],
      experienceLevel: "Beginner",
      author: {
        name: "John Cena",
        avatar: avtarimg,
      },
      price: {
        original: 800,
        discounted: 700,
      },
    },
    {
      id: 12,
      image: fimg1,
      category: "Intermediate",
      rating: 4.9,
      title: "Fitness Training: Building Strength and Endurance",
      details: [
        { text: "Lesson 20" },
        { text: "6h 30m" },
        { text: "Enrolled 300+" },
      ],
      experienceLevel: "Intermediate",
      author: {
        name: "John Cena",
        avatar: avtarimg,
      },
      price: {
        original: 800,
        discounted: 700,
      },
    },
    {
      id: 13,
      image: fimg1,
      category: "In-person",
      rating: 4.9,
      title: "Fitness Training: Building Strength and Endurance",
      details: [
        { text: "Lesson 20" },
        { text: "6h 30m" },
        { text: "Enrolled 300+" },
      ],
      experienceLevel: "Intermediate",
      author: {
        name: "John Cena",
        avatar: avtarimg,
      },
      price: {
        original: 800,
        discounted: 700,
      },
    },
    {
      id: 14,
      image: fimg1,
      category: "Online (Recorded)",
      rating: 4.9,
      title: "Fitness Training: Building Strength and Endurance",
      details: [
        { text: "Lesson 20" },
        { text: "6h 30m" },
        { text: "Enrolled 300+" },
      ],
      experienceLevel: "Intermediate",
      author: {
        name: "John Cena",
        avatar: avtarimg,
      },
      price: {
        original: 800,
        discounted: 700,
      },
    },
  ];

  const filteredData = courseDataArray.filter((data) => {
    if (
      selections.musicCategories.length === 0 &&
      selections.age.length === 0 &&
      selections.availability.length === 0
    ) {
      return true; // Show all if no selection
    }

    const matchesGenres = selections.musicCategories.includes(data.category);
    const matchesAge = selections.age.includes(data.category);
    const matchesAvailability = selections.availability.includes(data.category);

    // Return true if artist matches any of the selected categories
    return matchesGenres || matchesAge || matchesAvailability;
  });
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
            Discover Talented Artists for Your Next Event
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
            Search, explore, and connect with skilled musicians and bands to
            make your event unforgettable
          </Typography>
        </div>
      </section>
      <div class="clip-btm-rt-box"></div>
      <section className="bg-white">
        <div className="mycontainer container">
          <Box
            className="row mt-2  "
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 0 },
            }}
          >
            <div className="col-lg-2 col-md-12 col-sm-12 ">
              <Box sx={{ backgroundColor: "#fff", borderRadius: 2 }}>
                {/* Heading */}
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#013C61",
                    fontFamily: "Poppins",
                  }}
                  className="mb-1"
                >
                  Filter by
                </Typography>

                <div className="">
             
                  <FormGroup
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "row", lg: "column" },
                      flexWrap: "wrap",
                      gap: { xs: "15px", lg: "0" },
                    }}
                  >
                    {musicCategories.map((category, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={selections.musicCategories.includes(category)} // Check if category is selected in state
                            onChange={() =>
                              handleCheckboxChange("musicCategories", category)
                            } // Pass category and item to handler
                            sx={{
                              "&.Mui-checked": { color: "#FF9700" },
                              "& .MuiSvgIcon-root": {
                                width: 20,
                                height: 20,
                              },
                            }}
                          />
                        }
                        label={category}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "12px",
                            fontFamily: "Poppins",
                            color: "#013C61",
                          },
                        }}
                      />
                    ))}
                  </FormGroup>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#013C61",
                      fontFamily: "Poppins",
                      marginBottom: 2,
                    }}
                    className="mb-2 mt-4"
                  >
                    Single / Bundle
                  </Typography>

                  {/* Radio for Course */}
                  <FormGroup
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "row", lg: "column" },
                      flexWrap: "wrap",
                      gap: { xs: "15px", lg: "0" },
                    }}
                  >
                    <RadioGroup
                      value={selectedCourseType} // Bind the selected value
                      onChange={handleCourseChange} // Update the state on change
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "row", lg: "column" },
                        flexWrap: "wrap",
                        gap: { xs: "15px", lg: "0" },
                      }}
                    >
                      {coursetype.map((course, index) => (
                        <FormControlLabel
                          key={index}
                          value={course}
                          control={
                            <Radio
                              sx={{
                                "&.Mui-checked": {
                                  color: "#FF9700", // Color when selected
                                },
                                "& .MuiSvgIcon-root": {
                                  width: 20, // Adjust width of the radio
                                  height: 20, // Adjust height of the radio
                                },
                              }}
                            />
                          }
                          label={course}
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: "12px",
                              fontFamily: "Poppins",
                              color: "#013C61", // Set label color to #013C61
                            },
                          }}
                        />
                      ))}
                    </RadioGroup>
                  </FormGroup>

                  <Typography
                    sx={{
                      mt: 4,
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#013C61",
                      fontFamily: "Poppins",
                    }}
                  >
                    Age
                  </Typography>
                  <FormGroup
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "row", lg: "column" },
                      flexWrap: "wrap",
                      gap: { xs: "15px", lg: "0" },
                    }}
                  >
                    {age.map((category, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={selections.age.includes(category)} // Check if category is selected in state
                            onChange={() =>
                              handleCheckboxChange("age", category)
                            } // Pass category and item to handler
                            sx={{
                              "&.Mui-checked": { color: "#FF9700" },
                              "& .MuiSvgIcon-root": {
                                width: 20,
                                height: 20,
                              },
                            }}
                          />
                        }
                        label={category}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "12px",
                            fontFamily: "Poppins",
                            color: "#013C61",
                          },
                        }}
                      />
                    ))}
                  </FormGroup>

                  <Typography
                    sx={{
                      mt: 4,
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#013C61",
                      fontFamily: "Poppins",
                    }}
                  >
                    Availability
                  </Typography>

                  <FormGroup
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "row", lg: "column" },
                      flexWrap: "wrap",
                      gap: { xs: "15px", lg: "0" },
                    }}
                  >
                    {availability.map((category, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={selections.availability.includes(category)} // Check if category is selected in state
                            onChange={() =>
                              handleCheckboxChange("availability", category)
                            } // Pass category and item to handler
                            sx={{
                              "&.Mui-checked": { color: "#FF9700" },
                              "& .MuiSvgIcon-root": {
                                width: 20,
                                height: 20,
                              },
                            }}
                          />
                        }
                        label={category}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "12px",
                            fontFamily: "Poppins",
                            color: "#013C61",
                          },
                        }}
                      />
                    ))}
                  </FormGroup>
                </div>
              </Box>
            </div>
            <div className="col-lg-10 col-md-12 col-sm-12  ">
              <div className="bg-white shadow-sm p-3">
                {/* Heading */}
                <Typography
                  style={{ fontFamily: "Poppins", borderRadius: "8px" }}
                >
                  Explore the Musicians
                </Typography>

                {/* Input fields and button */}
                <Box
                  className=" mt-3"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 2, md: 0 },
                  }}
                >
                  {/* Search input field */}
                  <div className="position-relative flex-grow-1 me-2">
                    <input
                      type="text"
                      placeholder="Search for artists by name"
                      className="form-control"
                      style={{
                        height: "38px",
                        backgroundColor: "#F9F9F9",
                        border: "none",
                        paddingLeft: "30px", // Space for the icon
                        fontSize: "14px", // Adjust font size if needed
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

                  {/* Location input field */}
                  <div className="position-relative flex-grow-1 me-2">
                    <input
                      type="text"
                      placeholder="Location"
                      className="form-control"
                      style={{
                        height: "38px",
                        backgroundColor: "#F9F9F9",
                        border: "none",
                        paddingLeft: "30px", // Space for the icon
                        fontSize: "14px", // Adjust font size if needed
                      }}
                    />
                    <FaMapMarkerAlt
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
                    sx={{
                      backgroundColor: "#FF9700",
                      fontFamily: "Poppins",
                      color: "#fff",
                      borderRadius: "8px",
                      height: "38px",
                      padding: "0 30px", // Increased horizontal padding to widen button
                      fontSize: "14px", // Adjust font size if needed
                      textTransform: "capitalize",
                      fontWeight: 400,
                    }}
                  >
                    Search
                  </Button>
                </Box>
              </div>
              <div className="mt-4">
                <div className="container">
                  {/* Responsive Grid */}
                  <div className="row">
                    {selectedCourseType === "Course" && (
                      <div className="row">
                        {filteredData.map((course, index) => (
                          <div
                            key={index}
                            className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center"
                          >
                            <CourseCard data={course} />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Render Placeholder for Packages/Bundle */}
                    {selectedCourseType === "Packages/Bundle" && (
                      <div className="row">
                        {bundleDataArray.map((bundle, index) => (
                          <div
                            key={index}
                            className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center"
                          >
                            <BundleCard data={bundle} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </section>
      <div class="clip-top-lft-box"></div>
    </>
  );
};

export default AcadamyPage;
