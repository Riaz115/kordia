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
import { MdEdit } from "react-icons/md";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // Handle OTP Input
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Ensure only one character
    setOtp(newOtp);

    // Move to the next box if input is valid
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle Backspace
  const handleBackspace = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = ""; // Clear current box
      setOtp(newOtp);

      // Move to the previous box if it's not the first box
      if (index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);

    // Navigate on OTP submission
    navigate("/login");
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
            Verify code
          </Typography>
          <div>
            <Typography
              sx={{
                color: "#013C61",
                fontSize: "14px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              An authentication code has been sent to
            </Typography>

            <div
              style={{
                display: "inline-flex",
                backgroundColor: "#F5E1C4",
                padding: 4,
                borderRadius: 8,
                alignItems: "center",
                gap: 4,
                marginBottom: 10,
              }}
            >
              <Typography
                sx={{
                  color: "#001D2F",
                  fontSize: "12px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                bert_fowler@yahoo.com
              </Typography>
              <MdEdit
                onClick={() => {
                  navigate("/forgot-password");
                }}
                style={{ cursor: "pointer" }}
                color="#FF9700"
                size={20}
              />
            </div>
          </div>

          <form className="my-5" onSubmit={handleSubmit}>
            {/* OTP Fields */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1.5, // Increase spacing between boxes
                mb: 4,
              }}
            >
              {otp.map((value, index) => (
                <TextField
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={value}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                  variant="outlined"
                  inputProps={{
                    maxLength: 1,
                    style: { textAlign: "center" }, // Center align text
                  }}
                  sx={{
                    width: "3.5rem",
                    fontFamily: "Poppins, sans-serif",
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "black",
                      },
                  }}
                />
              ))}
            </Box>

            <Typography
              sx={{
                color: "#001D2F",
                fontSize: "12px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                mb: 3,
              }}
            >
              Didn’t receive a code?{" "}
              <span style={{ color: "#FF8682", cursor: "pointer" }}>
                {" "}
                Resend
              </span>
            </Typography>

            {/* Verify Button */}
            <Button
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
              Verify
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default OTPVerification;
