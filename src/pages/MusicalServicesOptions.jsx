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
const MusicalServicesOptions = ({ onSelectOption, selectedOption }) => {
  const accountTypes = [
    { label: "Musicians", image: musicianImg },
    { label: "AudioVisual Services", image: organizerImg },
    { label: "Studio Services", image: studentImg },
  ];

  return (
    <Box className="d-flex align-items-center justify-content-center">
      <Box sx={{ width: { xs: "100%", md: "80%" }, mt: 3 }}>
        {accountTypes.map((type, index) => (
          <Button
            key={index}
            onClick={() => onSelectOption(type.label)}
            variant="outlined"
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor:
                selectedOption === type.label ? "#fcdaa9" : "#F5E1C49E",
              border: "1px solid #FF9700",
              color: selectedOption === type.label ? "#FF9700" : "#FF970070",
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
                  opacity: selectedOption === type.label ? 1 : 0.5,
                }}
              />
            }
          >
            {type.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default MusicalServicesOptions;

