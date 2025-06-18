import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import img1 from "/assets/images/search-musician11.jpeg";
import img2 from "/assets/images/musician-slider-2.jpeg";
import img3 from "/assets/images/search-musician14.jpeg";
import videosrc from "/assets/video/vid1.mp4";
import thumsrc from "/assets/images/gal1.png";
import gal2 from "/assets/images/gal2.png";
import gal3 from "/assets/images/gal3.png";
import { IoPlayCircleOutline } from "react-icons/io5";
const GallerySection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return (
    <section className="bg-main-blue hero py-5">
      <div className="mycontainer">
        <h1
          style={{
            fontSize: "60px", // Increase font size
            letterSpacing: "2px", // Add gap between letters
          }}
          className="mb-0 display-2 text-main-orange text-uppercase text-center fw-medium font-bebas"
        >
          Gallery
        </h1>

        <Grid
          container
          spacing={3}
          sx={{ mt: 4 }}
          className="p-4"
          alignItems="center"
          justifyContent="center"
        >
          {/* First row with 1 video and 1 image */}
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            className="px-4"
          >
            {/* Video Box */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%", // Full width on smaller screens
                  maxWidth: "600px", // Maximum width for larger screens
                  height: { xs: "300px", sm: "400px" }, // Responsive height
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                {isPlaying ? (
                  <Box
                    component="video"
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                    controls
                    autoPlay
                  >
                    <source src={videosrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${thumsrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      cursor: "pointer",
                      borderRadius: "8px",
                    }}
                    onClick={handlePlayClick}
                  >
                    <IoPlayCircleOutline
                      size={80}
                      color="white"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                      }}
                    />
                  </Box>
                )}
              </Box>
            </Grid>

            {/* Image Box */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={img1}
                alt="Gallery Image"
                sx={{
                  width: "100%", // Full width on smaller screens
                  maxWidth: "600px", // Maximum width constraint for larger screens
                  height: "auto", // Maintain aspect ratio
                  borderRadius: "8px", // Rounded corners
                  objectFit: "cover", // Ensures proper scaling
                }}
              />
            </Grid>
          </Grid>

          {/* Second row with 1 full-width image */}
          <Grid item xs={12}>
            <Box
              component="img"
              src={img2}
              alt="Gallery Image"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Grid>

          {/* Third row with 3 images in 16:9 ratio */}
          <Grid container spacing={3} className="p-4">
            <Grid item xs={12} sm={4}>
              <Box
                component="img"
                src={gal3}
                alt="Gallery Image"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                component="img"
                src={gal3}
                alt="Gallery Image"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                component="img"
                src={gal3}
                alt="Gallery Image"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>

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

export default GallerySection;
