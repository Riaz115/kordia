import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material"; // Import MUI Tabs and Tab
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap grid system
import { Carousel } from "react-bootstrap";
import img1 from "/assets/images/Musician.png";
import img2 from "/assets/images/Musical-genre.png";
import img3 from "/assets/images/BANDS.png";
import img4 from "/assets/images/Projects.png";
import img5 from "/assets/images/Ensembles.png";
import img6 from "/assets/images/music-equalizer.png";
import locimg from "/assets/images/location.png";
import musicimg from "/assets/images/music.png";
import albumimg from "/assets/images/album.png";
import { FaLocationArrow, FaMusic, FaStar } from "react-icons/fa";
import img7 from "/assets/images/spotify-orange.png";
import img8 from "/assets/images/insta-orange.png";
import img9 from "/assets/images/facebook-orange.png";
import fimg1 from "/assets/images/feimg1.png";
import fimg2 from "/assets/images/feimg2.png";
import fimg3 from "/assets/images/feimg3.png";
import feimg1 from "/assets/images/feimg1.png";
import feimg2 from "/assets/images/feimg2.png";
import feimg3 from "/assets/images/feimg3.png";
import eventorganizer1 from "/assets/images/eventorganizer1.png";
import eventorganizer2 from "/assets/images/eventorganizer2.png";

import previmg from "/assets/images/slider-prev.png";
import nextimg from "/assets/images/slider-next.png";
import { Typography } from "@mui/material";
import avtarimg from "/assets/images/eventorganizer2.png";

//my images
import generimage from "/assets/images/mygenero.png";
import bandimage from "/assets/images/myband.png";
import projectimage from "/assets/images/myprojetos.png";
import essenmbleimage from "/assets/images/myensemble.png";
import audioimage from "/assets/images/myaudiovisual.png";
import studioimage from "/assets/images/mystudio.png";
import kordiacadmyimage from "/assets/images/mykordiaacademy.png";

const FeaturedSection = () => {
  const [groupSize, setGroupSize] = useState(3);
  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(0);
  const cardData = [
    {
      id: 1,

      image: feimg1,
      category: "Instrument",
      title: "Graphic Design Masterclass: Tools and Techniques ",
      rating: 4.5,
      lessons: "12 Lessons",
      duration: "6 Hours",
      level: "Beginner Friendly",
      author: "John Doe",
      image: eventorganizer1,
      originalPrice: "$199",
      discountedPrice: "$99",
    },
    {
      id: 2,
      image: feimg2,
      category: "Instrument",
      title: "Graphic Design Masterclass: Tools and Techniques",
      rating: 5.0,
      lessons: "20 Lessons",
      duration: "10 Hours",
      level: "Intermediate",
      author: "Jane Smith",
      image: eventorganizer2,
      originalPrice: "$299",
      discountedPrice: "$149",
    },
    {
      id: 3,
      image: feimg3,
      category: "Instrument",
      title: "Graphic Design Masterclass: Tools and Techniques",
      rating: 5.0,
      lessons: "20 Lessons",
      duration: "10 Hours",
      level: "Intermediate",
      author: "Jane Smith",
      image: eventorganizer1,
      originalPrice: "$299",
      discountedPrice: "$149",
    },
    {
      id: 4,
      image: feimg1,
      category: "Instrument",
      title: "Graphic Design Masterclass: Tools and Techniques",
      rating: 5.0,
      lessons: "20 Lessons",
      duration: "10 Hours",
      level: "Intermediate",
      author: "Jane Smith",
      image: eventorganizer2,
      originalPrice: "$299",
      discountedPrice: "$149",
    },
    // Add more cards as needed
  ];
  const dataList = [
    {
      imgSrc: fimg1,
      name: "John Doe",
      locationDetails: "New York, USA",
      category: "Jazz Musician",
      albums: "10 Albums",
      rating: 3.7,
      reviewsCount: 578,
    },
    {
      imgSrc: fimg2,
      name: "Jane Smith",
      locationDetails: "London, UK",
      category: "Rock Band",
      albums: "5 Albums",
      rating: 4.5,
      reviewsCount: 320,
    },

    {
      imgSrc: fimg3,
      name: "Alice Cooper",
      locationDetails: "Los Angeles, USA",
      category: "Pop Artist",
      albums: "8 Albums",
      rating: 4.9,
      reviewsCount: 842,
    },
    {
      imgSrc: fimg1,
      name: "Sarah Brown",
      locationDetails: "Houston, USA",
      category: "Classical Pianist",
      albums: "20 Albums",
      rating: 4.8,
      reviewsCount: 675,
    },
    {
      imgSrc: fimg2,
      name: "Tom Davis",
      locationDetails: "Austin, USA",
      category: "Hip-hop Artist",
      albums: "6 Albums",
      rating: 4.2,
      reviewsCount: 399,
    },
    {
      id: 6,
      imgSrc: fimg3,
      name: "Emma Wilson",
      locationDetails: "Miami, USA",
      category: "Country Singer",
      albums: "10 Albums",
      rating: 4.5,
      reviewsCount: 543,
    },
    {
      id: 7,
      imgSrc: fimg1,
      name: "Chris Evans",
      locationDetails: "Phoenix, USA",
      category: "Indie Musician",
      albums: "7 Albums",
      rating: 4.1,
      reviewsCount: 357,
    },
    {
      id: 8,
      imgSrc: fimg2,
      name: "Olivia Green",
      locationDetails: "Seattle, USA",
      category: "Folk Singer",
      albums: "14 Albums",
      rating: 4.6,
      reviewsCount: 498,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setGroupSize(1); // Small screens: 1 item per group
      } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        setGroupSize(2); // Medium screens: 2 items per group
      } else {
        setGroupSize(3); // Large screens: 3 items per group
      }
    };

    handleResize(); // Set initial group size on component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, []);

  // Group data based on group size
  const groupedData = dataList.reduce((rows, item, i) => {
    if (i % groupSize === 0) rows.push(dataList.slice(i, i + groupSize));
    return rows;
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="featured-artists pb-90" id="artists">
      <div className="mycontainer">
        {/* Tabs Section */}
        <Container className="mt-4">
          <Row className="justify-content-center">
            <Col xs="auto">
              <Tabs
                value={value}
                onChange={handleTabChange}
                indicatorColor="none"
                textColor="primary"
                centered
                variant="scrollable"
              >
                <Tab
                  label="Musician"
                  className="font-bebas"
                  icon={
                    <img
                      src={img1}
                      alt="Musician"
                      style={{
                        width: "80px",
                        height: "80px",
                        opacity: value === 0 ? 1 : 0.6,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  }
                  style={{
                    color: value === 0 ? "#1976d2" : "#809DAF", // Active tab color
                    fontWeight: value === 0 ? "bold" : "normal", // Active tab font weight
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: 20,
                  }}
                />
                <Tab
                  label="Musical genre"
                  icon={
                    <img
                      src={generimage}
                      alt="genre"
                      style={{
                        width: "80px",
                        height: "80px",
                        opacity: value === 1 ? 1 : 0.6,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  }
                  style={{
                    color: value === 1 ? "#1976d2" : "#809DAF",
                    fontWeight: value === 1 ? "bold" : "normal",
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: 20,
                  }}
                />
                <Tab
                  label="Bands"
                  icon={
                    <img
                      src={bandimage}
                      alt="band"
                      style={{
                        width: "80px",
                        height: "80px",
                        opacity: value === 2 ? 1 : 0.6,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  }
                  style={{
                    color: value === 2 ? "#1976d2" : "#809DAF",
                    fontWeight: value === 2 ? "bold" : "normal",
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: 20,
                  }}
                />
                <Tab
                  label="Projects"
                  icon={
                    <img
                      src={projectimage}
                      alt="project"
                      style={{
                        width: "80px",
                        height: "80px",
                        opacity: value === 3 ? 1 : 0.6,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  }
                  style={{
                    color: value === 3 ? "#1976d2" : "#809DAF",
                    fontWeight: value === 3 ? "bold" : "normal",
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: 20,
                  }}
                />
                <Tab
                  label="Ensembles"
                  icon={
                    <img
                      src={essenmbleimage}
                      alt="essenmble"
                      style={{
                        width: "80px",
                        height: "80px",
                        opacity: value === 4 ? 1 : 0.6,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  }
                  style={{
                    color: value === 4 ? "#1976d2" : "#809DAF",
                    fontWeight: value === 4 ? "bold" : "normal",
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: 20,
                  }}
                />
                <Tab
                  label="Audiovisual"
                  icon={
                    <img
                      src={audioimage}
                      alt="audiovisual"
                      style={{
                        width: "80px",
                        height: "80px",
                        opacity: value === 5 ? 1 : 0.6,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  }
                  style={{
                    color: value === 5 ? "#1976d2" : "#809DAF",
                    fontWeight: value === 5 ? "bold" : "normal",
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: 20,
                  }}
                />
                <Tab
                  label="Studio"
                  icon={
                    <img
                      src={studioimage}
                      alt="studio"
                      style={{
                        width: "80px",
                        height: "80px",
                        opacity: value === 6 ? 1 : 0.6,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  }
                  style={{
                    color: value === 6 ? "#1976d2" : "#809DAF",
                    fontWeight: value === 6 ? "bold" : "normal",
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: 20,
                  }}
                />{" "}
                <Tab
                  label=" kordia academy"
                  icon={
                    <img
                      src={kordiacadmyimage}
                      alt="kordiaAccadamy"
                      style={{
                        width: "80px",
                        height: "80px",
                        opacity: value === 7 ? 1 : 0.6,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  }
                  style={{
                    color: value === 7 ? "#1976d2" : "#809DAF",
                    fontWeight: value === 7 ? "bold" : "normal",
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: 20,
                  }}
                />
              </Tabs>
            </Col>
          </Row>
        </Container>
        <div style={{ marginTop: 20 }}>
          {value === 0 && (
            <div>
              <div className="position-relative ">
                {/* Carousel */}
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  controls={false}
                  indicators={false}
                  interval={null} // Manual control
                >
                  {groupedData.map((row, i) => (
                    <Carousel.Item key={i} className="bg-white p-3 ">
                      <div className="d-flex bg-white justify-content-center gap-3">
                        {row.map((data, idx) => (
                          <div
                            key={idx}
                            className="d-flex flex-column bg-white p-3 shadow"
                            style={{ width: "350px" }}
                          >
                            {/* Image */}
                            <img
                              src={data.imgSrc}
                              alt="Card"
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                              }}
                            />
                            <div className="d-flex flex-row justify-content-between">
                              {/* Content */}
                              <div className="mt-3">
                                {/* Name */}
                                <h4
                                  className="mb-1 font-bebas"
                                  style={{ color: "#013C61" }}
                                >
                                  {data.name}
                                </h4>

                                {/* Location */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={locimg}
                                    alt="Location"
                                    style={{
                                      width: "13px",
                                      height: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
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
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.locationDetails}
                                  </span>
                                </div>

                                {/* Category */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={musicimg}
                                    alt="Category"
                                    style={{
                                      width: "9px",
                                      height: "10px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    Category:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.category}
                                  </span>
                                </div>

                                {/* Albums */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={albumimg}
                                    alt="Albums"
                                    style={{
                                      width: "10px",
                                      height: "12px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    No of Albums:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.albums}
                                  </span>
                                </div>
                              </div>

                              {/* Right Section (Rating & Social Media) */}
                              <div className="mt-3">
                                {/* Rating */}
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div>
                                    <h5
                                      className="mb-0 font-poppins"
                                      style={{
                                        color: "#013C61",
                                        fontWeight: 700,
                                        fontSize: 26,
                                      }}
                                    >
                                      {data.rating}
                                    </h5>
                                    <div className="d-flex align-items-center mt-1">
                                      {/* Stars */}
                                      {Array.from({ length: 5 }, (_, index) => (
                                        <FaStar
                                          key={index}
                                          size={17}
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
                                      className="mt-2 font-poppins"
                                      style={{
                                        fontSize: "10px",
                                        color: "#013C61",
                                        fontWeight: 500,
                                      }}
                                    >
                                      ({data.reviewsCount} Reviews)
                                    </div>

                                    {/* Social Media */}
                                    <div className="d-flex ">
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img7}
                                          alt="Social"
                                          style={{ marginLeft: 2 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img8}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img9}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>

                {/* Custom Previous Button */}
                <div className="testimonial-slider-prev d-none d-sm-block position-absolute translate-middle-y translate-middle-x top-50 start-0 z-2">
                  <img
                    className="slider-arrow"
                    src={previmg}
                    alt="Previous"
                    onClick={() => {
                      const newIndex =
                        (index - 1 + groupedData.length) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>

                {/* Custom Next Button */}
                <div className="testimonial-slider-next d-none d-sm-block position-absolute translate-middle-y top-50 end-0 z-2">
                  <img
                    className="slider-arrow"
                    src={nextimg}
                    alt="Next"
                    onClick={() => {
                      const newIndex = (index + 1) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {value === 1 && (
            <div>
              <div className="position-relative">
                {/* Carousel */}
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  controls={false}
                  indicators={false}
                  interval={null} // Manual control
                >
                  {groupedData.map((row, i) => (
                    <Carousel.Item key={i} className="bg-white p-3">
                      <div className="d-flex bg-white justify-content-center gap-3">
                        {row.map((data, idx) => (
                          <div
                            key={idx}
                            className="d-flex flex-column bg-white p-3 shadow"
                            style={{ width: "350px" }}
                          >
                            {/* Image */}
                            <img
                              src={data.imgSrc}
                              alt="Card"
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                              }}
                            />
                            <div className="d-flex flex-row justify-content-between">
                              {/* Content */}
                              <div className="mt-3">
                                {/* Name */}
                                <h4
                                  className="mb-1 font-bebas"
                                  style={{ color: "#013C61" }}
                                >
                                  {data.name}
                                </h4>

                                {/* Location */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={locimg}
                                    alt="Location"
                                    style={{
                                      width: "13px",
                                      height: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
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
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.locationDetails}
                                  </span>
                                </div>

                                {/* Category */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={musicimg}
                                    alt="Category"
                                    style={{
                                      width: "9px",
                                      height: "10px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    Category:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.category}
                                  </span>
                                </div>

                                {/* Albums */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={albumimg}
                                    alt="Albums"
                                    style={{
                                      width: "10px",
                                      height: "12px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    No of Albums:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.albums}
                                  </span>
                                </div>
                              </div>

                              {/* Right Section (Rating & Social Media) */}
                              <div className="mt-3">
                                {/* Rating */}
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div>
                                    <h5
                                      className="mb-0 font-poppins"
                                      style={{
                                        color: "#013C61",
                                        fontWeight: 700,
                                        fontSize: 26,
                                      }}
                                    >
                                      {data.rating}
                                    </h5>
                                    <div className="d-flex align-items-center mt-1">
                                      {/* Stars */}
                                      {Array.from({ length: 5 }, (_, index) => (
                                        <FaStar
                                          key={index}
                                          size={17}
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
                                      className="mt-2 font-poppins"
                                      style={{
                                        fontSize: "10px",
                                        color: "#013C61",
                                        fontWeight: 500,
                                      }}
                                    >
                                      ({data.reviewsCount} Reviews)
                                    </div>

                                    {/* Social Media */}
                                    <div className="d-flex ">
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img7}
                                          alt="Social"
                                          style={{ marginLeft: 2 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img8}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img9}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>

                {/* Custom Previous Button */}
                <div className="testimonial-slider-prev d-none d-sm-block position-absolute translate-middle-y translate-middle-x top-50 start-0 z-2">
                  <img
                    className="slider-arrow"
                    src={previmg}
                    alt="Previous"
                    onClick={() => {
                      const newIndex =
                        (index - 1 + groupedData.length) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>

                {/* Custom Next Button */}
                <div className="testimonial-slider-next d-none d-sm-block position-absolute translate-middle-y top-50 end-0 z-2">
                  <img
                    className="slider-arrow"
                    src={nextimg}
                    alt="Next"
                    onClick={() => {
                      const newIndex = (index + 1) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {value === 2 && (
            <div>
              <div className="position-relative">
                {/* Carousel */}
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  controls={false}
                  indicators={false}
                  interval={null} // Manual control
                >
                  {groupedData.map((row, i) => (
                    <Carousel.Item key={i} className="bg-white p-3">
                      <div className="d-flex bg-white justify-content-center gap-3">
                        {row.map((data, idx) => (
                          <div
                            key={idx}
                            className="d-flex flex-column bg-white p-3 shadow"
                            style={{ width: "350px" }}
                          >
                            {/* Image */}
                            <img
                              src={data.imgSrc}
                              alt="Card"
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                              }}
                            />
                            <div className="d-flex flex-row justify-content-between">
                              {/* Content */}
                              <div className="mt-3">
                                {/* Name */}
                                <h4
                                  className="mb-1 font-bebas"
                                  style={{ color: "#013C61" }}
                                >
                                  {data.name}
                                </h4>

                                {/* Location */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={locimg}
                                    alt="Location"
                                    style={{
                                      width: "13px",
                                      height: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
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
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.locationDetails}
                                  </span>
                                </div>

                                {/* Category */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={musicimg}
                                    alt="Category"
                                    style={{
                                      width: "9px",
                                      height: "10px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    Category:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.category}
                                  </span>
                                </div>

                                {/* Albums */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={albumimg}
                                    alt="Albums"
                                    style={{
                                      width: "10px",
                                      height: "12px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    No of Albums:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.albums}
                                  </span>
                                </div>
                              </div>

                              {/* Right Section (Rating & Social Media) */}
                              <div className="mt-3">
                                {/* Rating */}
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div>
                                    <h5
                                      className="mb-0 font-poppins"
                                      style={{
                                        color: "#013C61",
                                        fontWeight: 700,
                                        fontSize: 26,
                                      }}
                                    >
                                      {data.rating}
                                    </h5>
                                    <div className="d-flex align-items-center mt-1">
                                      {/* Stars */}
                                      {Array.from({ length: 5 }, (_, index) => (
                                        <FaStar
                                          key={index}
                                          size={17}
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
                                      className="mt-2 font-poppins"
                                      style={{
                                        fontSize: "10px",
                                        color: "#013C61",
                                        fontWeight: 500,
                                      }}
                                    >
                                      ({data.reviewsCount} Reviews)
                                    </div>

                                    {/* Social Media */}
                                    <div className="d-flex ">
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img7}
                                          alt="Social"
                                          style={{ marginLeft: 2 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img8}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img9}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>

                {/* Custom Previous Button */}
                <div className="testimonial-slider-prev d-none d-sm-block position-absolute translate-middle-y translate-middle-x top-50 start-0 z-2">
                  <img
                    className="slider-arrow"
                    src={previmg}
                    alt="Previous"
                    onClick={() => {
                      const newIndex =
                        (index - 1 + groupedData.length) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>

                {/* Custom Next Button */}
                <div className="testimonial-slider-next d-none d-sm-block position-absolute translate-middle-y top-50 end-0 z-2">
                  <img
                    className="slider-arrow"
                    src={nextimg}
                    alt="Next"
                    onClick={() => {
                      const newIndex = (index + 1) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {value === 3 && (
            <div>
              <div className="position-relative">
                {/* Carousel */}
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  controls={false}
                  indicators={false}
                  interval={null} // Manual control
                >
                  {groupedData.map((row, i) => (
                    <Carousel.Item key={i} className="bg-white p-3">
                      <div className="d-flex bg-white justify-content-center gap-3">
                        {row.map((data, idx) => (
                          <div
                            key={idx}
                            className="d-flex flex-column bg-white p-3 shadow"
                            style={{ width: "350px" }}
                          >
                            {/* Image */}
                            <img
                              src={data.imgSrc}
                              alt="Card"
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                              }}
                            />
                            <div className="d-flex flex-row justify-content-between">
                              {/* Content */}
                              <div className="mt-3">
                                {/* Name */}
                                <h4
                                  className="mb-1 font-bebas"
                                  style={{ color: "#013C61" }}
                                >
                                  {data.name}
                                </h4>

                                {/* Location */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={locimg}
                                    alt="Location"
                                    style={{
                                      width: "13px",
                                      height: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
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
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.locationDetails}
                                  </span>
                                </div>

                                {/* Category */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={musicimg}
                                    alt="Category"
                                    style={{
                                      width: "9px",
                                      height: "10px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    Category:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.category}
                                  </span>
                                </div>

                                {/* Albums */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={albumimg}
                                    alt="Albums"
                                    style={{
                                      width: "10px",
                                      height: "12px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    No of Albums:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.albums}
                                  </span>
                                </div>
                              </div>

                              {/* Right Section (Rating & Social Media) */}
                              <div className="mt-3">
                                {/* Rating */}
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div>
                                    <h5
                                      className="mb-0 font-poppins"
                                      style={{
                                        color: "#013C61",
                                        fontWeight: 700,
                                        fontSize: 26,
                                      }}
                                    >
                                      {data.rating}
                                    </h5>
                                    <div className="d-flex align-items-center mt-1">
                                      {/* Stars */}
                                      {Array.from({ length: 5 }, (_, index) => (
                                        <FaStar
                                          key={index}
                                          size={17}
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
                                      className="mt-2 font-poppins"
                                      style={{
                                        fontSize: "10px",
                                        color: "#013C61",
                                        fontWeight: 500,
                                      }}
                                    >
                                      ({data.reviewsCount} Reviews)
                                    </div>

                                    {/* Social Media */}
                                    <div className="d-flex ">
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img7}
                                          alt="Social"
                                          style={{ marginLeft: 2 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img8}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img9}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>

                {/* Custom Previous Button */}
                <div className="testimonial-slider-prev d-none d-sm-block position-absolute translate-middle-y translate-middle-x top-50 start-0 z-2">
                  <img
                    className="slider-arrow"
                    src={previmg}
                    alt="Previous"
                    onClick={() => {
                      const newIndex =
                        (index - 1 + groupedData.length) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>

                {/* Custom Next Button */}
                <div className="testimonial-slider-next d-none d-sm-block position-absolute translate-middle-y top-50 end-0 z-2">
                  <img
                    className="slider-arrow"
                    src={nextimg}
                    alt="Next"
                    onClick={() => {
                      const newIndex = (index + 1) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {value === 4 && (
            <div>
              <div className="position-relative">
                {/* Carousel */}
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  controls={false}
                  indicators={false}
                  interval={null} // Manual control
                >
                  {groupedData.map((row, i) => (
                    <Carousel.Item key={i} className="bg-white p-3">
                      <div className="d-flex bg-white justify-content-center gap-3">
                        {row.map((data, idx) => (
                          <div
                            key={idx}
                            className="d-flex flex-column bg-white p-3 shadow"
                            style={{ width: "350px" }}
                          >
                            {/* Image */}
                            <img
                              src={data.imgSrc}
                              alt="Card"
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                              }}
                            />
                            <div className="d-flex flex-row justify-content-between">
                              {/* Content */}
                              <div className="mt-3">
                                {/* Name */}
                                <h4
                                  className="mb-1 font-bebas"
                                  style={{ color: "#013C61" }}
                                >
                                  {data.name}
                                </h4>

                                {/* Location */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={locimg}
                                    alt="Location"
                                    style={{
                                      width: "13px",
                                      height: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
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
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.locationDetails}
                                  </span>
                                </div>

                                {/* Category */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={musicimg}
                                    alt="Category"
                                    style={{
                                      width: "9px",
                                      height: "10px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    Category:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.category}
                                  </span>
                                </div>

                                {/* Albums */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={albumimg}
                                    alt="Albums"
                                    style={{
                                      width: "10px",
                                      height: "12px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    No of Albums:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.albums}
                                  </span>
                                </div>
                              </div>

                              {/* Right Section (Rating & Social Media) */}
                              <div className="mt-3">
                                {/* Rating */}
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div>
                                    <h5
                                      className="mb-0 font-poppins"
                                      style={{
                                        color: "#013C61",
                                        fontWeight: 700,
                                        fontSize: 26,
                                      }}
                                    >
                                      {data.rating}
                                    </h5>
                                    <div className="d-flex align-items-center mt-1">
                                      {/* Stars */}
                                      {Array.from({ length: 5 }, (_, index) => (
                                        <FaStar
                                          key={index}
                                          size={17}
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
                                      className="mt-2 font-poppins"
                                      style={{
                                        fontSize: "10px",
                                        color: "#013C61",
                                        fontWeight: 500,
                                      }}
                                    >
                                      ({data.reviewsCount} Reviews)
                                    </div>

                                    {/* Social Media */}
                                    <div className="d-flex ">
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img7}
                                          alt="Social"
                                          style={{ marginLeft: 2 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img8}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img9}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>

                {/* Custom Previous Button */}
                <div className="testimonial-slider-prev d-none d-sm-block position-absolute translate-middle-y translate-middle-x top-50 start-0 z-2">
                  <img
                    className="slider-arrow"
                    src={previmg}
                    alt="Previous"
                    onClick={() => {
                      const newIndex =
                        (index - 1 + groupedData.length) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>

                {/* Custom Next Button */}
                <div className="testimonial-slider-next d-none d-sm-block position-absolute translate-middle-y top-50 end-0 z-2">
                  <img
                    className="slider-arrow"
                    src={nextimg}
                    alt="Next"
                    onClick={() => {
                      const newIndex = (index + 1) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {value === 5 && (
            <div>
              <div className="position-relative">
                {/* Carousel */}
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  controls={false}
                  indicators={false}
                  interval={null} // Manual control
                >
                  {groupedData.map((row, i) => (
                    <Carousel.Item key={i} className="bg-white p-3">
                      <div className="d-flex bg-white justify-content-center gap-3">
                        {row.map((data, idx) => (
                          <div
                            key={idx}
                            className="d-flex flex-column bg-white p-3 shadow"
                            style={{ width: "350px" }}
                          >
                            {/* Image */}
                            <img
                              src={data.imgSrc}
                              alt="Card"
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                              }}
                            />
                            <div className="d-flex flex-row justify-content-between">
                              {/* Content */}
                              <div className="mt-3">
                                {/* Name */}
                                <h4
                                  className="mb-1 font-bebas"
                                  style={{ color: "#013C61" }}
                                >
                                  {data.name}
                                </h4>

                                {/* Location */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={locimg}
                                    alt="Location"
                                    style={{
                                      width: "13px",
                                      height: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
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
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.locationDetails}
                                  </span>
                                </div>

                                {/* Category */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={musicimg}
                                    alt="Category"
                                    style={{
                                      width: "9px",
                                      height: "10px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    Category:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.category}
                                  </span>
                                </div>

                                {/* Albums */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={albumimg}
                                    alt="Albums"
                                    style={{
                                      width: "10px",
                                      height: "12px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    No of Albums:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.albums}
                                  </span>
                                </div>
                              </div>

                              {/* Right Section (Rating & Social Media) */}
                              <div className="mt-3">
                                {/* Rating */}
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div>
                                    <h5
                                      className="mb-0 font-poppins"
                                      style={{
                                        color: "#013C61",
                                        fontWeight: 700,
                                        fontSize: 26,
                                      }}
                                    >
                                      {data.rating}
                                    </h5>
                                    <div className="d-flex align-items-center mt-1">
                                      {/* Stars */}
                                      {Array.from({ length: 5 }, (_, index) => (
                                        <FaStar
                                          key={index}
                                          size={17}
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
                                      className="mt-2 font-poppins"
                                      style={{
                                        fontSize: "10px",
                                        color: "#013C61",
                                        fontWeight: 500,
                                      }}
                                    >
                                      ({data.reviewsCount} Reviews)
                                    </div>

                                    {/* Social Media */}
                                    <div className="d-flex ">
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img7}
                                          alt="Social"
                                          style={{ marginLeft: 2 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img8}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img9}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>

                {/* Custom Previous Button */}
                <div className="testimonial-slider-prev d-none d-sm-block position-absolute translate-middle-y translate-middle-x top-50 start-0 z-2">
                  <img
                    className="slider-arrow"
                    src={previmg}
                    alt="Previous"
                    onClick={() => {
                      const newIndex =
                        (index - 1 + groupedData.length) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>

                {/* Custom Next Button */}
                <div className="testimonial-slider-next d-none d-sm-block position-absolute translate-middle-y top-50 end-0 z-2">
                  <img
                    className="slider-arrow"
                    src={nextimg}
                    alt="Next"
                    onClick={() => {
                      const newIndex = (index + 1) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {value === 6 && (
            <div>
              <div className="position-relative">
                {/* Carousel */}
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  controls={false}
                  indicators={false}
                  interval={null} // Manual control
                >
                  {groupedData.map((row, i) => (
                    <Carousel.Item key={i} className="bg-white p-3">
                      <div className="d-flex bg-white justify-content-center gap-3">
                        {row.map((data, idx) => (
                          <div
                            key={idx}
                            className="d-flex flex-column bg-white p-3 shadow"
                            style={{ width: "350px" }}
                          >
                            {/* Image */}
                            <img
                              src={data.imgSrc}
                              alt="Card"
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                              }}
                            />
                            <div className="d-flex flex-row justify-content-between">
                              {/* Content */}
                              <div className="mt-3">
                                {/* Name */}
                                <h4
                                  className="mb-1 font-bebas"
                                  style={{ color: "#013C61" }}
                                >
                                  {data.name}
                                </h4>

                                {/* Location */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={locimg}
                                    alt="Location"
                                    style={{
                                      width: "13px",
                                      height: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
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
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.locationDetails}
                                  </span>
                                </div>

                                {/* Category */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={musicimg}
                                    alt="Category"
                                    style={{
                                      width: "9px",
                                      height: "10px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    Category:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.category}
                                  </span>
                                </div>

                                {/* Albums */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={albumimg}
                                    alt="Albums"
                                    style={{
                                      width: "10px",
                                      height: "12px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    No of Albums:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.albums}
                                  </span>
                                </div>
                              </div>

                              {/* Right Section (Rating & Social Media) */}
                              <div className="mt-3">
                                {/* Rating */}
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div>
                                    <h5
                                      className="mb-0 font-poppins"
                                      style={{
                                        color: "#013C61",
                                        fontWeight: 700,
                                        fontSize: 26,
                                      }}
                                    >
                                      {data.rating}
                                    </h5>
                                    <div className="d-flex align-items-center mt-1">
                                      {/* Stars */}
                                      {Array.from({ length: 5 }, (_, index) => (
                                        <FaStar
                                          key={index}
                                          size={17}
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
                                      className="mt-2 font-poppins"
                                      style={{
                                        fontSize: "10px",
                                        color: "#013C61",
                                        fontWeight: 500,
                                      }}
                                    >
                                      ({data.reviewsCount} Reviews)
                                    </div>

                                    {/* Social Media */}
                                    <div className="d-flex ">
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img7}
                                          alt="Social"
                                          style={{ marginLeft: 2 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img8}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img9}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>

                {/* Custom Previous Button */}
                <div className="testimonial-slider-prev d-none d-sm-block position-absolute translate-middle-y translate-middle-x top-50 start-0 z-2">
                  <img
                    className="slider-arrow"
                    src={previmg}
                    alt="Previous"
                    onClick={() => {
                      const newIndex =
                        (index - 1 + groupedData.length) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>

                {/* Custom Next Button */}
                <div className="testimonial-slider-next d-none d-sm-block position-absolute translate-middle-y top-50 end-0 z-2">
                  <img
                    className="slider-arrow"
                    src={nextimg}
                    alt="Next"
                    onClick={() => {
                      const newIndex = (index + 1) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {value === 7 && (
            <div>
              <div className="position-relative">
                {/* Carousel */}
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  controls={false}
                  indicators={false}
                  interval={null} // Manual control
                >
                  {groupedData.map((row, i) => (
                    <Carousel.Item key={i} className="bg-white p-3">
                      <div className="d-flex bg-white justify-content-center gap-3">
                        {row.map((data, idx) => (
                          <div
                            key={idx}
                            className="d-flex flex-column bg-white p-3 shadow"
                            style={{ width: "350px" }}
                          >
                            {/* Image */}
                            <img
                              src={data.imgSrc}
                              alt="Card"
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                              }}
                            />
                            <div className="d-flex flex-row justify-content-between">
                              {/* Content */}
                              <div className="mt-3">
                                {/* Name */}
                                <h4
                                  className="mb-1 font-bebas"
                                  style={{ color: "#013C61" }}
                                >
                                  {data.name}
                                </h4>

                                {/* Location */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={locimg}
                                    alt="Location"
                                    style={{
                                      width: "13px",
                                      height: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
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
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.locationDetails}
                                  </span>
                                </div>

                                {/* Category */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={musicimg}
                                    alt="Category"
                                    style={{
                                      width: "9px",
                                      height: "10px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    Category:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.category}
                                  </span>
                                </div>

                                {/* Albums */}
                                <div className="d-flex align-items-center mb-2">
                                  <img
                                    src={albumimg}
                                    alt="Albums"
                                    style={{
                                      width: "10px",
                                      height: "12px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: "#FF9700",
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    No of Albums:
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{
                                      color: "#013C61",
                                      fontSize: "10px",
                                      fontWeight: 500,
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {data.albums}
                                  </span>
                                </div>
                              </div>

                              {/* Right Section (Rating & Social Media) */}
                              <div className="mt-3">
                                {/* Rating */}
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div>
                                    <h5
                                      className="mb-0 font-poppins"
                                      style={{
                                        color: "#013C61",
                                        fontWeight: 700,
                                        fontSize: 26,
                                      }}
                                    >
                                      {data.rating}
                                    </h5>
                                    <div className="d-flex align-items-center mt-1">
                                      {/* Stars */}
                                      {Array.from({ length: 5 }, (_, index) => (
                                        <FaStar
                                          key={index}
                                          size={17}
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
                                      className="mt-2 font-poppins"
                                      style={{
                                        fontSize: "10px",
                                        color: "#013C61",
                                        fontWeight: 500,
                                      }}
                                    >
                                      ({data.reviewsCount} Reviews)
                                    </div>

                                    {/* Social Media */}
                                    <div className="d-flex ">
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img7}
                                          alt="Social"
                                          style={{ marginLeft: 2 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img8}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          className="icon-15px"
                                          src={img9}
                                          alt="Social"
                                          style={{ marginLeft: 4 }}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>

                {/* Custom Previous Button */}
                <div className="testimonial-slider-prev d-none d-sm-block position-absolute translate-middle-y translate-middle-x top-50 start-0 z-2">
                  <img
                    className="slider-arrow"
                    src={previmg}
                    alt="Previous"
                    onClick={() => {
                      const newIndex =
                        (index - 1 + groupedData.length) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>

                {/* Custom Next Button */}
                <div className="testimonial-slider-next d-none d-sm-block position-absolute translate-middle-y top-50 end-0 z-2">
                  <img
                    className="slider-arrow"
                    src={nextimg}
                    alt="Next"
                    onClick={() => {
                      const newIndex = (index + 1) % groupedData.length;
                      if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div class="d-flex justify-content-center mt-5">
          <a
            class="btn-orange-solid text-main-blue py-2 px-5 rounded-pill text-uppercase fw-medium font-bebas"
            href="#"
          >
            Browse More
          </a>
        </div>
        <div
          className="position-relative  mt-5 
        "
        >
          <h1
            className=" text-center display-4  font-bebas"
            style={{ color: "#013c61" }}
          >
            Our Popular courses
          </h1>
          <p className="text-center font-poppins" style={{ color: "#013c61" }}>
            Gain valuable skills and insights directly from a professional
            musician
          </p>
          {/* Carousel */}
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}
            indicators={false}
            interval={null} // Manual control
          >
            {groupedData.map((row, i) => (
              <Carousel.Item key={i} className="bg-white p-3">
                <div className="d-flex bg-white justify-content-center gap-3">
                  {cardData.slice(0, 3).map((data) => (
                    <div
                      key={data.id}
                      className="d-flex flex-column bg-white p-3 pt-3 shadow"
                      style={{ width: "350px", cursor: "pointer" }}
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
                                  index < Math.round(data.rating)
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
                          color: "#4D5756",
                        }}
                      >
                        {data.title}
                      </Typography>

                      {/* Course Details */}
                      <div
                        className="d-flex justify-content-between align-items-center mt-2"
                        style={{
                          borderRadius: "8px",
                        }}
                      >
                        {[
                          {
                            text: data.lessons,
                            icon: "/assets/images/lesson.png",
                          },
                          {
                            text: data.duration,
                            icon: "/assets/images/time.png",
                          },
                          {
                            text: data.level,
                            icon: "/assets/images/user.png",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center"
                          >
                            <img
                              src={item.icon}
                              alt={`${item.text} Icon`}
                              style={{
                                width: "12px",
                                height: "12px",
                                marginRight: "8px",
                              }}
                            />
                            <span
                              style={{
                                fontSize: "12px",
                                fontFamily: "Poppins",
                                color: "#013C61",
                                fontWeight: 500,
                              }}
                            >
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Experience Level */}
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          marginTop: 1,
                          fontSize: "12px",
                          color: "#406B86",
                        }}
                      >
                        Experience level: {data.level}
                      </Typography>

                      {/* Dotted Line */}
                      <hr
                        style={{
                          border: "none",
                          borderTop: "2px dotted black",
                          margin: "10px 0",
                        }}
                      />

                      {/* Author and Price Section */}
                      <div
                        className="d-flex flex-column"
                        style={{ marginTop: "2px" }}
                      >
                        {/* Author Section */}
                        <div className="d-flex align-items-center">
                          <img
                            src={data.image}
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
                            by {data.author}
                          </span>
                        </div>

                        {/* Price and Buy Now Button */}
                        <div
                          className="d-flex align-items-center mt-2 justify-content-between"
                          style={{ flexGrow: 1 }}
                        >
                          {/* Price Section */}
                          <div>
                            <span
                              style={{
                                fontFamily: "Poppins",
                                fontWeight: 700,
                                fontSize: "18px",
                                color: "#809DAF",
                                textDecoration: "line-through",
                                marginRight: "10px",
                              }}
                            >
                              {data.originalPrice}
                            </span>
                            <span
                              style={{
                                fontFamily: "Poppins",
                                fontWeight: 700,
                                fontSize: "18px",
                                color: "#013C61",
                                marginLeft: "10px",
                              }}
                            >
                              {data.discountedPrice}
                            </span>
                          </div>

                          {/* Buy Now Button */}
                          <button
                            style={{
                              backgroundColor: "#FF9700",
                              color: "#FFFFFF",
                              fontFamily: "Poppins",
                              fontWeight: 500,
                              fontSize: "12px",
                              padding: "8px 15px",
                              border: "none",
                              borderRadius: "8px",
                              cursor: "pointer",
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Custom Previous Button */}
          <div className="testimonial-slider-prev d-none d-sm-block position-absolute translate-middle-y translate-middle-x top-50 start-0 z-2">
            <img
              className="slider-arrow"
              src={previmg}
              alt="Previous"
              onClick={() => {
                const newIndex =
                  (index - 1 + groupedData.length) % groupedData.length;
                if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
              }}
            />
          </div>

          {/* Custom Next Button */}
          <div className="testimonial-slider-next d-none d-sm-block position-absolute translate-middle-y top-50 end-0 z-2">
            <img
              className="slider-arrow"
              src={nextimg}
              alt="Next"
              onClick={() => {
                const newIndex = (index + 1) % groupedData.length;
                if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
              }}
            />
          </div>
        </div>

        <div class="d-flex justify-content-center mt-5">
          <a
            class="btn-orange-solid text-main-blue py-2 px-5 rounded-pill text-uppercase fw-medium font-bebas"
            href="#"
          >
            Browse More
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
