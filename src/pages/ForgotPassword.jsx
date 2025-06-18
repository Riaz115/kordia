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
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
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
            width: "150px", // Adjust width as per your design
            height: "auto",
          }}
        />
        {/* Centered Image */}
        <Box
          component="img"
          src={bandgroup}
          alt="bandgroup"
          sx={{
            maxWidth: "70%", // Adjust size proportionally
            height: "auto",
          }}
        />
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Logo in Top Left */}
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
        <Box sx={{ width: "90%", padding: { xs: 1, md: 4 } }}>
          <div
            onClick={() => {
              navigate("/login");
            }}
            className="py-2"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              cursor: "pointer",
            }}
          >
            <IoChevronBackOutline />
            <Typography
              sx={{
                color: "#013C61",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              Back to login
            </Typography>
          </div>
          {/* Login Heading */}
          <Typography
            variant="h5"
            component="h2"
            sx={{
              mb: 1,
              color: "#013C61",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
              fontSize: "28px",
            }}
          >
            Forgot your password?
          </Typography>
          <Typography
            sx={{
              mb: 3,
              color: "#013C61",
              fontSize: "14px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Don’t worry, happens to all of us. Enter your email below to recover
            your password
          </Typography>

          {/* Login Form */}
          <form>
            {/* Email Field */}
            <TextField
              fullWidth
              required
              label="Email address"
              variant="outlined"
              type="email"
              sx={{
                mb: 2,
                fontFamily: "Poppins, sans-serif",
              }}
            />

            {/* Login Button */}
            <Button
              onClick={() => {
                navigate("/set-password");
              }}
              type="submit"
              fullWidth
              sx={{
                backgroundColor: "#FF9700",
                color: "white",
                fontFamily: "Poppins, sans-serif",
                textTransform: "capitalize",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "#e68600",
                },
              }}
            >
              Submit
            </Button>

            <Divider
              sx={{
                color: "#809daf",
                fontFamily: "Poppins",
                fontSize: "14px",
                marginTop: 2,
              }}
            >
              or Login With
            </Divider>
            <Box
              sx={{
                display: "flex",
                gap: 2, // Spacing between buttons
                width: "100%",
                marginTop: 2,
                flexWrap: "wrap", // Make responsive for smaller screens
                justifyContent: "center", // Center align buttons
              }}
            >
              {/* Facebook Button */}
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  border: "1px solid #FF9700",
                  width: "120px", // Adjust button width
                  height: "50px", // Adjust button height
                  fontSize: "18px", // Adjust icon/text size
                  "&:hover": {
                    backgroundColor: "#f9f9f9",
                  },
                }}
              >
                <FaFacebook size={25} />
              </Button>

              {/* Google Button */}
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  border: "1px solid #FF9700",
                  width: "120px", // Adjust button width
                  height: "50px", // Adjust button height
                  fontSize: "18px", // Adjust icon/text size
                  "&:hover": {
                    backgroundColor: "#f9f9f9",
                  },
                }}
              >
                <FcGoogle size={25} />
              </Button>

              {/* Apple Button */}
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  border: "1px solid #FF9700",
                  width: "120px", // Adjust button width
                  height: "50px", // Adjust button height
                  fontSize: "18px", // Adjust icon/text size
                  "&:hover": {
                    backgroundColor: "#f9f9f9",
                  },
                }}
              >
                <FaApple color="black" size={25} />
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
