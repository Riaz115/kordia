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

const SetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showrePassword, setShowRePassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleRePassword = () => {
    setShowRePassword((prev) => !prev);
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
            Set a password
          </Typography>
          <Typography
            sx={{
              mb: 3,
              color: "#013C61",
              fontSize: "14px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Your previous password has been reseted. Please set a new password
            for your account.
          </Typography>

          {/* Login Form */}
          <form>
            {/* Password Field with Show/Hide Icon */}
            <TextField
              fullWidth
              required
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              sx={{
                mb: 1,
                fontFamily: "Poppins, sans-serif",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Re-enter Password Field with Show/Hide Icon */}
            <TextField
              fullWidth
              required
              label="Re-enter Password"
              variant="outlined"
              type={showrePassword ? "text" : "password"}
              sx={{
                mb: 1,
                fontFamily: "Poppins, sans-serif",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggleRePassword} edge="end">
                      {showrePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Login Button */}
            <Button
              onClick={() => {
                navigate("/otp-verification");
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
              Set password
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SetPassword;
