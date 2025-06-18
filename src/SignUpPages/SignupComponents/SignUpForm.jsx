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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {/* First Name and Last Name */}
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="First Name" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Last Name" required />
        </Grid>

        {/* Email and Phone Number */}
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Email" type="email" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Phone Number" type="tel" required />
        </Grid>

        {/* Password */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Confirm Password */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={toggleConfirmPasswordVisibility}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mb: 2,
        }}
      >
        {/* Terms and Privacy Policies Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "#013C61",
                "&.Mui-checked": { color: "#013C61" },
              }}
            />
          }
          label={
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "12px",
                color: "#013C61",
              }}
            >
              I agree to all the{" "}
              <Link
                to="/term-and-conditions"
                sx={{
                  color: "blue",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                to="/term-and-conditions"
                sx={{
                  color: "blue",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Privacy Policies
              </Link>
            </span>
          }
        />
      </Box>
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
      <Typography
        sx={{
          color: "#013C61",
          fontSize: "13px",
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
          p: 1,
        }}
      >
        Already have an account?
        <span
          onClick={() => {
            navigate("/login");
          }}
          style={{ color: "#4294FF", fontWeight: 600, cursor: "pointer" }}
        >
          {" "}
          Login
        </span>
      </Typography>
    </Box>
  );
};

export default SignUpForm;
