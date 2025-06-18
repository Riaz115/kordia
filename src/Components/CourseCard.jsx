import React from "react";
import { Typography } from "@mui/material";
import { FaStar } from "react-icons/fa";
import img1 from "/assets/images/lesson.png";
import img2 from "/assets/images/use.png";
import img3 from "/assets/images/time.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/course-details/${data.id}`);
  };
  const {
    image,
    category,
    rating,
    title,
    details,
    experienceLevel,
    author,
    price,
  } = data;

  return (
    <div
      key={data.id}
      className="d-flex flex-column bg-white p-3 pt-3 shadow "
      style={{ width: "320px", cursor: "pointer" }}
      onClick={handleCardClick}
    >
      {/* Image Section with Category */}
      <div style={{ position: "relative" }}>
        <img
          src={image}
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
          {category}
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
                color: index < Math.floor(rating) ? "#FF9700" : "#e0e0e0",
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
          ({rating})
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
        {title}
      </Typography>

      {/* Course Details */}
      <div
        className="d-flex justify-content-between align-items-center mt-2"
        style={{
          borderRadius: "8px",
        }}
      >
        {details.map((detail, index) => {
          // Define the corresponding static icons
          const icons = [img1, img2, img3];

          return (
            <div key={index} className="d-flex align-items-center">
              <img
                src={icons[index]} // Use the static icons
                alt="Detail Icon"
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
                {detail.text} {/* Fetch only the text dynamically */}
              </span>
            </div>
          );
        })}
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
        Experience level: {experienceLevel}
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
        style={{
          marginTop: "2px",
        }}
      >
        {/* Author Section */}
        <div className="d-flex align-items-center">
          <img
            src={author.avatar}
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
            by {author.name}
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
              ${price.original}
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
              ${price.discounted}
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
  );
};

// Define Prop Types
CourseCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    experienceLevel: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    price: PropTypes.shape({
      original: PropTypes.number.isRequired,
      discounted: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CourseCard;
