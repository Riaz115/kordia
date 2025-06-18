import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "/assets/images/Logo.png";
import bandgroup from "/assets/images/bandgroup.png";
import logoyellow from "/assets/images/footer-logo.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import musicianImg from "/assets/images/Musical-genre.png";
import organizerImg from "/assets/images/organizerImg.png";
import studentImg from "/assets/images/studentImg.png";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

  const accountTypes = [
    { label: "Musical services", image: musicianImg },
    { label: "Event Organizer", image: organizerImg },
    { label: "Student", image: studentImg },
  ];

  const handleLetsGo = () => {
    if (selectedType === "Musical services") {
      navigate("/musician-signup");
    } else if (selectedType === "Event Organizer") {
      navigate("/event-organizer-signup");
    } else if (selectedType === "Student") {
      navigate("/student-services-signup");
    } else {
      alert("Please select an account type before proceeding.");
    }
  };
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
          width: "50%",
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
            Become a member{" "}
          </Typography>
          <Typography
            sx={{
              color: "#FF9700",
              fontWeight: "600",
              fontFamily: "Poppins",
              fontSize: "42px",
              p: "2px",
              textAlign: "center",
            }}
          >
            Get Started
          </Typography>
          <Typography
            sx={{
              color: "#ffff",
              fontWeight: "400",
              fontFamily: "Poppins",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            We'll help you every step of the way
          </Typography>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center the content horizontally
          justifyContent: "center", // Center the content vertically
          height: "100vh", // Full height to position elements properly
          padding: { xs: 2, md: 4 },
        }}
      >
        <Box
          component="img"
          src={logoyellow}
          alt="logoyellow"
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            marginBottom: 4,
            width: "220px", // Adjust width as per your design
            height: "auto",
          }}
        />
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 3, // Add margin below the heading
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: "#013C61",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
              fontSize: "28px",
              textAlign: "center", // Ensure text is centered
            }}
          >
            Select Your Account Type
          </Typography>
        </Box>

        {/* Account Type Buttons */}
        <Box  sx={{ width: { xs: "100%", md: "80%" }, mt: 3 }}>
          {accountTypes.map((type, index) => (
            <Button
              key={index}
              onClick={() => setSelectedType(type.label)}
              variant="outlined"
              fullWidth
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor:
                  selectedType === type.label ? "#fcdaa9" : "#F5E1C49E",
                border: "1px solid #FF9700",
                color: selectedType === type.label ? "#FF9700" : "#FF970070",
                fontFamily: "Poppins, sans-serif",
                fontSize: "28px",
                fontWeight: "600",
                height: "60px",
                borderRadius: "10px",
                mb: 2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#F5E1C4",
                },
              }}
              startIcon={
                <Box
                  component="img"
                  src={type.image}
                  alt={type.label}
                  sx={{
                    width: "32px",
                    height: "32px",
                    marginRight: 2,
                    opacity: selectedType === type.label ? 1 : 0.5,
                  }}
                />
              }
            >
              {type.label}
            </Button>
          ))}
        </Box>

        {/* Horizontal Line */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#dcdcdc",
            marginTop: "auto",
          }}
        />

        {/* Let's Go Button */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            width: { xs: "100%", md: "50%" },
            backgroundColor: "white",
            boxShadow: "0px -2px 4px rgba(0,0,0,0.1)",
            padding: "16px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={handleLetsGo}
            variant="contained"
            sx={{
              backgroundColor: "#FF9700",
              color: "white",
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
              textTransform: "none",
              padding: "6px 16px",
              "&:hover": {
                backgroundColor: "#e58a00",
              },
            }}
          >
            Let's Go
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
