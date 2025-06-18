import React, { useEffect, useState } from "react";
import fimg1 from "/assets/images/feimg1.png";
import fimg2 from "/assets/images/feimg2.png";
import fimg3 from "/assets/images/feimg3.png";
import { Carousel } from "react-bootstrap";
import locimg from "/assets/images/location.png";
import musicimg from "/assets/images/music.png";
import albumimg from "/assets/images/album.png";
import { FaStar } from "react-icons/fa";
import img7 from "/assets/images/spotify-orange.png";
import img8 from "/assets/images/insta-orange.png";
import img9 from "/assets/images/chat-orange.png";
import previmg from "/assets/images/slider-prev.png";
import nextimg from "/assets/images/slider-next.png";
import avtarimg from "/assets/images/eventorganizer2.png";
import ArtistServicesCard from "./ArtistServicesCards";
import { Link } from "react-router-dom";


const ArtistServices = () => {
  const [groupSize, setGroupSize] = useState(3);
  const [index, setIndex] = useState(0);

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

  const courseDataArray = [
    {
      id: 1,
      image: fimg1,
      category: "Pop",
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
      category: "Trending",
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
      category: "Most Popular",
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
      category: "Newest",
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
      category: "Top Rated",
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
      category: "Trending",
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
      category: "Most Popular",
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
      category: "Top Rated",
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
      category: "Newest",
      rating: 4.2,
      title: "Culinary Arts: The Joy of Cooking",
      details: [
        { text: "Lesson 4" },
        { text: "1h 15m" },
        { text: "Enrolled 40+" },
      ],
      experienceLevel: "Beginner",
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
      category: "Trending",
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
  ];

  const groupedData = courseDataArray.reduce((rows, item, i) => {
    if (i % groupSize === 0) rows.push(courseDataArray.slice(i, i + groupSize));
    return rows;
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="mycontainer py-2 ">
      <h2
        style={{
          fontSize: "60px", // Increase font size
          letterSpacing: "2px", // Add gap between letters
          color: "#013C61",
          fontWeight: "400",
        }}
        className=" display-4 text-center fw-semibold text-uppercase font-bebas"
      >
        Services By Zain
      </h2>
      {/* <h3
        className="font-poppins"
        style={{
          color: "#003A5E",
          fontWeight: 400,
          fontSize: 18,
          textAlign: "center",
        }}
      >
        Gain valuable skills and insights directly from a professional musician
      </h3> */}

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
              <Carousel.Item key={i} className="bg-white p-3 ">
                <div className="d-flex bg-white justify-content-center gap-3">
                  {row.map((course, index) => (
                    <ArtistServicesCard data={course} />
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
          <Link
          to={"/band-details"}
            class="btn-orange-solid text-main-blue py-2 px-5 rounded-pill text-uppercase fw-medium font-bebas"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistServices;
