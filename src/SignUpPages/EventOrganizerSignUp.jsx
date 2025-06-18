import React, { useState } from "react";
import { Box, Typography, Button, LinearProgress } from "@mui/material";
import { IoCloseCircle } from "react-icons/io5";
import logo from "/assets/images/Logo.png";
import logoyellow from "/assets/images/footer-logo.png";
import SignUpForm from "./SignupComponents/SignUpForm";
import ProfilePicture from "./SignupComponents/ProfilePicture";
import PricingPlan from "./SignupComponents/PricingPlan";
import img2 from "/assets/images/wnmusc.png";
import img1 from "/assets/images/wnevent.png";
import { useNavigate } from "react-router-dom";
import MusicGenres from "./SignupComponents/MusicGenres";

const EventOrganizerSignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step state to track current step

  const audiovisualList = [
    "Sound",
    "Video",
    "Lighting",
    "Streaming",
    "Photography",
    "Rodies",
    "Special Effects",
  ];

  // Handler for navigating to the next step
  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  // Handler for navigating to the previous step
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  // Content based on the current step
  const renderContent = () => {
    switch (step) {
      case 1:
        return {
          leftHeading: "Sign up As Event Organizer",
          leftSubText: "We’ll help you every step of the way",
          progress: 33,
          bottomText: "Become a member",
        };
      case 2:
        return {
          leftHeading: "Let’s add a profile picture",
          leftSubText: "Your profile picture will help you stand out.",
          progress: 66,
          bottomText: "Upload your profile picture.",
        };
      case 3:
        return {
          leftHeading: "Start Your Journey with Kordia",
          leftSubText:
            "Pick the plan that works for you and access exclusive features tailored to your goals.",
          progress: 90,
          bottomText: "Choose your plan",
        };
      case 4:
        return {
          leftHeading: "Welcome to Kordia, Jhon!",
          leftSubText: "We’re excited to have you on board. Let’s get started!",
          progress: 100,
        };
      default:
        return {};
    }
  };

  // Render the component based on the current step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <SignUpForm />;
      case 2:
        return <MusicGenres audiovisualList={audiovisualList} />;
      case 3:
        return <ProfilePicture />;
      case 4:
        return <PricingPlan />;
      case 5:
        return (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: 10,
              }}
            >
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "700",
                  color: "#013C61",
                  fontFamily: "Poppins",
                  marginBottom: 2,
                }}
              >
                What’s next?
              </Typography>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "36px auto",
                  gap: "16px",
                  alignItems: "start",
                }}
              >
                {/* First Row */}
                <React.Fragment>
                  <img
                    src={img1}
                    style={{ width: "36px", height: "36px" }}
                    alt="img"
                  />
                  <div>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        color: "#013C61",
                        fontFamily: "Poppins",
                      }}
                    >
                      Set Up Your First Event
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        color: "#013C61",
                        fontFamily: "Poppins",
                      }}
                    >
                      Click below to create your first event
                      <br /> and start inviting musicians!
                    </Typography>
                  </div>
                </React.Fragment>

                {/* Second Row */}
                <React.Fragment>
                  <img
                    src={img2}
                    style={{ width: "36px", height: "36px" }}
                    alt="img"
                  />
                  <div>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        color: "#013C61",
                        fontFamily: "Poppins",
                      }}
                    >
                      Explore Musicians
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        color: "#013C61",
                        fontFamily: "Poppins",
                      }}
                    >
                      Find talented musicians for your
                      <br />
                      upcoming events.
                    </Typography>
                  </div>
                </React.Fragment>
              </div>
            </Box>
          </>
        );
      default:
        return null;
    }
  };

  const { leftHeading, leftSubText, progress, bottomText } = renderContent();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          width: step === 3 ? "40%" : "50%",
          backgroundColor: "#013C61",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Logo in Top Left */}
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "150px",
            height: "auto",
          }}
        />
        {/* Centered Text */}
        <Box sx={{ textAlign: "center" }}>
          {bottomText && (
            <Typography
              sx={{
                display: "inline-flex",
                color: "#FF9700",
                backgroundColor: "#F5E1C4",
                borderRadius: "15px",
                padding: "5px 10px",
                fontWeight: "600",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              {bottomText}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FF9700",
                fontWeight: "600",
                fontFamily: "Poppins",
                fontSize: "42px",
                width: step === 3 ? "80%" : "80%",
                p: "2px",
                textAlign: "center",
              }}
            >
              {leftHeading}
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "400",
                fontFamily: "Poppins",
                fontSize: "18px",
                textAlign: "center",
                width: step === 3 ? "80%" : "60%",
              }}
            >
              {leftSubText}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: { xs: "100%", md: step === 3 ? "60%" : "50%" },
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start", // Align content to the top
          flex: 1, // Take available space
        }}
      >
        {/* Scrollable content container */}
        <Box
          sx={{
            width: "100%",
            overflowY: "auto", // Enable scrolling
            height: "calc(100vh - 80px)", // Adjust height above bottom navigation
            padding: { xs: 2, md: 4 }, // Add padding for content
          }}
        >
          {/* Mobile Logo */}
          <Box
            component="img"
            src={logoyellow}
            alt="logoyellow"
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              marginBottom: 4,
              width: "220px",
              height: "auto",
            }}
          />

          {/* Close Icon */}
          <Box
            sx={{
              width: "100%",
              display: step === 4 ? "none" : "flex",
              justifyContent: "flex-end",

              marginBottom: 3,
            }}
          >
            <IoCloseCircle
              onClick={() => {
                navigate("/login");
              }}
              style={{ cursor: "pointer" }}
              size={25}
            />
          </Box>

          {renderStepContent()}
        </Box>

        {/* Fixed Bottom Navigation Section */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            width: { xs: "100%", md: step === 3 ? "60%" : "50%" },

            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: 2, // Space between buttons and progress bar
            zIndex: 10, // Ensure it stays on top
          }}
        >
          {/* Linear Progress Bar */}
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              width: "100%",
              height: "6px",
              borderRadius: "3px",
              backgroundColor: "#f0f0f0",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#FF9700",
              },
            }}
          />

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: step === 4 ? "flex-end" : "space-between",
            }}
          >
            <Button
              onClick={handleBack}
              disabled={step === 1}
              sx={{
                display: step === 4 ? "none" : "flex",
                backgroundColor: "transparent",
                color: "#FF9700",
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                textTransform: "none",
                padding: "6px 16px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Back
            </Button>
            <div
              style={{
                display: "flex",
                gap: 4,
              }}
            >
              {step === 4 && (
                <Button
                  onClick={() => {
                    navigate("/");
                  }}
                  variant="outlined"
                  sx={{
                    border: "1px solid #FF9700",
                    color: "#FF9700",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    textTransform: "none",
                    padding: "6px 16px",
                    "&:hover": {
                      backgroundColor: "#e58a00",
                      color: "white",
                    },
                  }}
                >
                  Home
                </Button>
              )}
              <Button
                onClick={() =>
                  step === 4
                    ? navigate("/event-organizer/dashboard")
                    : handleNext()
                }
                variant="contained"
                sx={{
                  backgroundColor: "#FF9700",
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  textTransform: "none",
                  padding: "6px 16px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#e58a00",
                  },
                }}
              >
                {step < 4 ? "Next" : "Go to Dashboard"}
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventOrganizerSignUp;
