import { Avatar, MenuItem, Select, Typography } from "@mui/material";
import { LinearProgress, Box } from "@mui/material";
import React from "react";
import { FaChevronDown, FaStar } from "react-icons/fa";
const ReviewsSection = () => {
  const totalReviews = 500; // Example total number of reviews
  const ratings = [
    { stars: 5, count: 488 },
    { stars: 4, count: 300 },
    { stars: 3, count: 120 },
    { stars: 2, count: 60 },
    { stars: 1, count: 32 },
  ];

  const reviews = [
    {
      date: "Jan 20, 2024",
      rating: 4.7,
      position: "Senior Analyst",
      initials: "JD",
      username: "John Doe",
      reviewText:
        "Working at Sam.AI has been an incredible journey so far. The technology we're building is truly cutting-edge, and being a part of a team that's revolutionizing how people achieve their goals is immensely fulfilling.",
    },
    {
      date: "Feb 10, 2024",
      rating: 5.0,
      position: "Product Manager",
      initials: "AS",
      username: "Alice Smith",
      reviewText:
        "Being a product manager at Sam.AI has been a great experience. The team is brilliant, and the products we are building have a massive impact on how businesses succeed. I'm proud to be part of such an innovative company.",
    },
    {
      date: "Mar 15, 2024",
      rating: 4.2,
      position: "Software Engineer",
      initials: "BB",
      username: "Bob Brown",
      reviewText:
        "The work environment is very collaborative, and I love the opportunities to learn and grow. My role as a software engineer has been challenging but very rewarding. It's exciting to be part of something so impactful.",
    },
    {
      date: "Apr 5, 2024",
      rating: 4.8,
      position: "UX Designer",
      initials: "CM",
      username: "Charlie Miller",
      reviewText:
        "As a UX designer, I've had the chance to create user-centered designs that truly make a difference. The team here is incredibly supportive, and I love working on products that simplify complex tasks for our users.",
    },
    {
      date: "May 1, 2024",
      rating: 4.9,
      position: "Data Scientist",
      initials: "DM",
      username: "David Moore",
      reviewText:
        "Being a data scientist at Sam.AI has been an amazing experience. I get to work on cutting-edge technologies and apply machine learning techniques to solve real-world problems. It's a highly collaborative environment, and I'm always learning something new.",
    },
  ];

  return (
    <section className="bg-main-blue  py-90 px-2">
      <div className="mycontainer">
        <div className="row align-items-center justify-content-center justify-content-md-start">
          <div className="col-md-6">
            <div className="d-flex flex-row align-items-center gap-2">
              <Typography
                sx={{
                  color: "#FF9700",
                  fontFamily: "Bebas Neue",
                  fontSize: 40,
                }}
              >
                Reviews
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Poppins",
                  fontWeight: "200",
                  fontSize: 40,
                }}
              >
                |
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Bebas Neue",
                  fontSize: 40,
                }}
              >
                Description
              </Typography>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              {/* Dropdown Select */}
              <Select
                value="Select by newest review"
                variant="outlined"
                IconComponent={FaChevronDown}
                sx={{
                  backgroundColor: "transparent",
                  color: "#FF9700",
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  width: "auto", // Adjusts width based on content
                  minWidth: "160px", // Minimum size for consistency
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "none", // Removes default outline
                  },
                  "& .MuiSelect-icon": {
                    color: "#FF9700", // Sets the Chevron icon color to orange
                  },
                }}
              >
                <MenuItem value="Select by newest review">
                  Select by newest review
                </MenuItem>
                <MenuItem value="Oldest review">Oldest review</MenuItem>
                <MenuItem value="Top-rated">Top-rated</MenuItem>
              </Select>

              {/* Button Section */}
              <a
                className="btn-orange-solid text-white py-1 px-4 rounded-pill font-poppins"
                href="#"
                style={{
                  textTransform: "capitalize",
                  fontWeight: 300,
                  fontSize: "12px",
                }}
              >
                Write a Review
              </a>
            </div>

            <div className="d-flex flex-column flex-md-row align-content-center justify-content-between mt-4">
              <div className=" d-flex flex-column ">
                <div>
                  <h5
                    className="mb-0 font-bebas"
                    style={{
                      color: "#fff",
                      fontSize: 20,
                    }}
                  >
                    Artist Reviews
                  </h5>
                  <h5
                    className="mb-0 font-poppins"
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 36,
                    }}
                  >
                    4.7
                  </h5>
                  <div className="d-flex align-items-center mt-1">
                    {/* Stars */}
                    {Array.from({ length: 5 }, (_, index) => (
                      <FaStar
                        key={index}
                        size={17}
                        style={{
                          color:
                            index < Math.floor(4.7) ? "#FF9700" : "#e0e0e0",
                          marginRight: "2px",
                        }}
                      />
                    ))}
                  </div>
                  <div
                    className="mt-2 font-poppins"
                    style={{
                      fontSize: "10px",
                      color: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    (570 Reviews)
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column col-md-7 mt-4 mt-md-0">
                {ratings.map((rating) => {
                  const percentage = (rating.count / totalReviews) * 100;

                  return (
                    <Box
                      key={rating.stars}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mb={1}
                    >
                      {/* Star and Count */}
                      <Box width="15%">
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: "10px",
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            color: "#FFFFFF",
                          }}
                        >
                          {rating.stars} Star
                        </Typography>
                      </Box>

                      {/* Progress Bar */}
                      <Box width="60%" mx={2}>
                        <LinearProgress
                          variant="determinate"
                          value={percentage}
                          sx={{
                            height: "5px",
                            borderRadius: "10px",
                            backgroundColor: "#f0f0f0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#FF9700",
                            },
                          }}
                        />
                      </Box>

                      {/* Total Count */}
                      <Box width="15%" display="flex" justifyContent="flex-end">
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: "10px",
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            color: "#FFFFFF",
                          }}
                        >
                          {rating.count}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </div>
            </div>

            <div className=" d-flex flex-column" style={{ marginTop: "90px" }}>
              <div>
                {reviews.map((review, index) => (
                  <div key={index}>
                    {/* Review Date */}
                    <h5
                      className="mb-0 font-bebas"
                      style={{
                        color: "#fff",
                        fontSize: 18,
                      }}
                    >
                      {review.date}
                    </h5>

                    {/* Rating */}
                    <div className="d-flex align-items-center mt-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <FaStar
                          key={index}
                          size={15}
                          style={{
                            color:
                              index < Math.floor(review.rating)
                                ? "#FF9700"
                                : "#e0e0e0",
                            marginRight: "2px",
                          }}
                        />
                      ))}
                    </div>

                    {/* Job Position */}
                    <h5
                      className="mb-0 font-bebas mt-3"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                      }}
                    >
                      {review.position}
                    </h5>

                    {/* Avatar and User Name */}
                    <div className="d-flex align-items-center">
                      <Avatar
                        sx={{
                          backgroundColor: "#2C3E50",
                          width: 36,
                          height: 36,
                          fontSize: "18px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#FF9700",
                            fontWeight: 600,
                            fontSize: "12px",
                          }}
                        >
                          {review.initials}
                        </Typography>
                      </Avatar>

                      <div className="ml-2">
                        <Typography
                          variant="body2"
                          style={{
                            color: "#fff",
                            fontFamily: "Bebas Neue",
                            fontWeight: 500,
                            marginLeft: 3,
                          }}
                        >
                          {review.username}
                        </Typography>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p
                      className="font-poppins mt-1"
                      style={{ color: "#fff", fontWeight: 400, fontSize: 12 }}
                    >
                      {review.reviewText}
                    </p>

                    {/* Horizontal Line */}
                    {index !== reviews.length - 1 && (
                      <hr style={{ borderColor: "#fff", borderWidth: 1 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
