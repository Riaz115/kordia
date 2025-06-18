import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import { IoCloseCircle } from "react-icons/io5";
import logo from "/assets/images/Logo.png";
import logoyellow from "/assets/images/footer-logo.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import SignUpForm from "./SignupComponents/SignUpForm";
import ProfilePicture from "./SignupComponents/ProfilePicture";
import InstrumentTypes from "./SignupComponents/InstrumentTypes";
import img2 from "/assets/images/wnmusc.png";
import img1 from "/assets/images/wnevent.png";
import PricingPlan from "./SignupComponents/PricingPlan";
import MusicalServicesOptions from "../pages/MusicalServicesOptions";

const MusicalServicesSignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelection = () => {
    if (!selectedOption) {
      alert("Please select an option before proceeding!");
    } else {
      alert(`You selected: ${selectedOption}`);
      // Add navigation or further logic here
    }
  };
  // Handler for navigating to the next step
  const handleNext = () => {
    // handleSelection();
    if (step < 7) setStep(step + 1);
  };

  // Handler for navigating to the previous step
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // handleNext();
  };

  const instrumentsTypes = [
    "String Instruments",
    "Wind Instruments",
    "Percussion Instruments",
    "Keyboard Instruments",
    "Brass Instruments",
    "Woodwind Instruments",
    "Electronic Instruments",
    "Pitch Pipe",
    "Harmonica",
    "Xylophone",
  ];

  const genresData = {
    Musicians: ["Guitar", "Piano", "Violin", "Drums"],
    "AudioVisual Services": [
      "Sound",
      "Video",
      "Lighting",
      "Streaming",
      "Photography,",
      "Rodies",
      "Special Effects",
    ],
    "Studio Services": [
      "Music Production",
      "Session Instrumentalist",
      "Audio Recording",
      "Editing & Mixing",
      "Rehearsal Studios",
      "Video Recording",
      "Engineering Service",
      "Artistic Development & Consultancy",
      "Musical Directors",
    ],
  };
  const genresList = [
    "Rock",
    "Jazz",
    "Hip-Hop",
    "Pop",
    "Classical",
    "Blues",
    "Electronic",
    "Country",
    "Reggae",
    "Funk",
    "Soul",
    "Metal",
    "Punk",
    "Folk",
    "Disco",
    "Latin",
    "K-Pop",
    "Gospel",
    "Dance",
    "Indie",
    "House",
    "Techno",
    "Ambient",
    "Trance",
    "Dubstep",
    "Lo-Fi",
    "World",
    "Afrobeats",
    "Salsa",
    "Bossa Nova",
    "Flamenco",
    "Opera",
    "Soundtrack",
    "Drum and Bass",
    "Synthwave",
    "Chillwave",
    "New Wave",
  ];
  // Content based on the current step
  const renderContent = () => {
    switch (step) {
      case 1:
        return {
          leftHeading: "Sign up As Musical Services ",
          leftSubText: "We’ll help you every step of the way",
          progress: 25,
          bottomText: "Become a member",
        };
      case 2:
        return {
          leftHeading: "Choose your area of interest to explore",
          // leftSubText: "you can add more later.",
          progress: 40,
          bottomText: "Become a member",
        };
      case 3:
        return {
          leftHeading: "Pick Your Preferred Genre",
          leftSubText: "",
          progress: 60,
          bottomText: "Become a member.",
        };
      case 4:
        return {
          leftHeading: "Now, let’s create a bio for you. & Add Location",
          leftSubText: "",
          progress: 70,
          bottomText: "Become a member.",
        };
      case 5:
        return {
          leftHeading: "Let’s add a profile picture",
          leftSubText: "Your profile picture will help you stand out.",
          progress: 80,
          bottomText: "Upload your profile picture.",
        };
      case 6:
        return {
          leftHeading: "Start Your Journey with Kordia",
          leftSubText:
            "Pick the plan that works for you and access exclusive features tailored to your goals.",
          progress: 90,
          bottomText: "Choose your plan",
        };
      case 7:
        return {
          leftHeading: "Welcome to Kordia, Jhon!",
          leftSubText: "We’re excited to have you on board. Let’s get started!",
          progress: 100,
        };

      default:
        return {};
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <SignUpForm />;
      case 2:
        return (
          <MusicalServicesOptions
            onSelectOption={handleOptionSelect}
            selectedOption={selectedOption}
          />
        );
      case 3:
        return (
          <InstrumentTypes
            genresList={genresData[selectedOption] || []}
            // instrumentsTypes={instrumentsTypes}
          />
        );
      case 4:
        return (
          <>
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#013C61",
                  fontFamily: "Poppins",
                  marginBottom: 2,
                }}
              >
                Create your bio
              </Typography>
              <TextField
                multiline
                rows={6}
                placeholder="Write about yourself..."
                variant="outlined"
                sx={{
                  backgroundColor: "#BFCDD6",
                  borderRadius: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                  marginBottom: 3,
                }}
                fullWidth
              />
              <TextField
                placeholder="Enter your location..."
                variant="outlined"
                sx={{
                  backgroundColor: "#BFCDD6",
                  borderRadius: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                }}
                fullWidth
              />
            </Box>
          </>
        );
      case 5:
        return <ProfilePicture />;
      case 6:
        return <PricingPlan />;
      case 7:
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
          width: step === 5 ? "40%" : "50%",
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
                width: step === 5 ? "80%" : "80%",
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
                width: step === 5 ? "80%" : "60%",
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
          width: { xs: "100%", md: step === 5 ? "60%" : "50%" },
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
              display: step === 6 ? "none" : "flex",
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
            width: { xs: "100%", md: step === 5 ? "60%" : "50%" },

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
              justifyContent: step === 6 ? "flex-end" : "space-between",
            }}
          >
            <Button
              onClick={handleBack}
              disabled={step === 1}
              sx={{
                display: step === 6 ? "none" : "flex",
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
              {step === 6 && (
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
                  step === 6 ? navigate("/musician/dashboard") : handleNext()
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
                {step < 6 ? "Next" : "Go to Dashboard"}
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MusicalServicesSignUp;
