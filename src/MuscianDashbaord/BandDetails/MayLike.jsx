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
import img9 from "/assets/images/chat-orange.png";
import fimg1 from "/assets/images/feimg1.png";
import fimg2 from "/assets/images/feimg2.png";
import fimg3 from "/assets/images/feimg3.png";
import previmg from "/assets/images/slider-prev.png";
import nextimg from "/assets/images/slider-next.png";
import nextarrow_blue from "/assets/images/nextarrow_blue.png";
import prevarrow_blue from "/assets/images/prevarrow_blue.png";
import { Typography } from "@mui/material";
import avtarimg from "/assets/images/eventorganizer2.png";
import lesson from "/assets/images/lesson.png";
const MayLike = () => {
  const [groupSize, setGroupSize] = useState(3);
  const [value, setValue] = useState(0); // State for active tab
  const [index, setIndex] = useState(0);
  const cardData = [
    {
      id: 1,
      image: "/public/assets/images/eventorganizer1.png",
      category: "Instrument",
      title: "Graphic Design Masterclass: Tools and Techniques ",
      rating: 4.5,
      lessons: "12 Lessons",
      duration: "6 Hours",
      level: "Beginner Friendly",
      author: "John Doe",
      originalPrice: "$199",
      discountedPrice: "$99",
    },
    {
      id: 2,
      image: "/public/assets/images/eventorganizer1.png",
      category: "Instrument",
      title: "Graphic Design Masterclass: Tools and Techniques",
      rating: 5.0,
      lessons: "20 Lessons",
      duration: "10 Hours",
      level: "Intermediate",
      author: "Jane Smith",
      originalPrice: "$299",
      discountedPrice: "$149",
    },
    {
      id: 3,
      image: "/public/assets/images/eventorganizer1.png",
      category: "Instrument",
      title: "Graphic Design Masterclass: Tools and Techniques",
      rating: 5.0,
      lessons: "20 Lessons",
      duration: "10 Hours",
      level: "Intermediate",
      author: "Jane Smith",
      originalPrice: "$299",
      discountedPrice: "$149",
    },
    {
      id: 4,
      image: "/public/assets/images/eventorganizer4.png",
      category: "Instrument",
      title: "Graphic Design Masterclass: Tools and Techniques",
      rating: 5.0,
      lessons: "20 Lessons",
      duration: "10 Hours",
      level: "Intermediate",
      author: "Jane Smith",
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
    <section className="featured-artists py-90" id="artists">
      <div className="mycontainer">
        <h1
          className=" text-center display-4  font-bebas"
          style={{ color: "#013c61" }}
        >
          Discover more bands you may enjoy
        </h1>

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
                        style={{ width: "330px" }}
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
                src={prevarrow_blue}
                alt="Previous"
                onClick={() => {
                  const newIndex =
                    (index - 1 + groupedData.length) % groupedData.length;
                  if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                }}
              />
            </div>

            {/* Custom Next Button */}
            <div className="testimonial-slider-next  d-none d-sm-block position-absolute translate-middle-y top-50 end-0 z-2">
              <img
                className="slider-arrow"
                src={nextarrow_blue}
                alt="Next"
                onClick={() => {
                  const newIndex = (index + 1) % groupedData.length;
                  if (groupedData[newIndex]?.length > 0) setIndex(newIndex);
                }}
              />
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center mt-5 tests">
          <a
            class="btn-orange-solid text-white py-2 px-5 rounded-pill text-uppercase fw-medium font-bebas"
            href="#"
          >
            Browse More
          </a>
        </div>
      </div>
    </section>
  );
};

export default MayLike;
