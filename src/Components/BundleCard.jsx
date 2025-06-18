import React from "react";
import { Typography } from "@mui/material";
import coursenum from "/assets/images/coursenum.png";
const BundleCard = ({ data }) => {
  return (
    <div
      className="d-flex flex-column bg-white p-3 pt-3 shadow"
      style={{ width: "320px" }}
    >
      {/* Image */}
      <img
        src={data.image}
        alt="Card"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      {/* Title */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          marginTop: 2,
          color: "#4D5756",
          fontSize: "14px",
        }}
      >
        {data.title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 400,
          marginTop: 1,
          color: "#4D5756",
          fontSize: "10px",
        }}
      >
        {data.description}
      </Typography>

      {/* Course Details */}
      <div className="d-flex align-items-center mt-2">
        <img
          src={coursenum}
          alt="Detail Icon"
          style={{
            width: "10px",
            height: "10px",
            marginRight: "8px",
          }}
        />
        <span
          style={{
            fontSize: "10px",
            fontFamily: "Poppins",
            color: "#013C61",
            fontWeight: 400,
          }}
        >
          {data.courseDetails}
        </span>
      </div>

      {/* Tags */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          marginTop: 2,
          color: "#4D5756",
          fontSize: "14px",
        }}
      >
        {data.tags.join(", ")}
      </Typography>

      {/* Dotted Horizontal Line */}
      <hr
        style={{
          border: "none",
          borderTop: "2px dotted #809DAF",
          margin: "10px 0",
        }}
      />

      {/* Price and Buy Section */}
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
            alt="Avatar"
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

        {/* Price and Button Section */}
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
              ${data.price.original}
            </span>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "18px",
                color: "#013C61",
              }}
            >
              -
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
              ${data.price.discounted}
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
              marginLeft: "20px",
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

export default BundleCard;
