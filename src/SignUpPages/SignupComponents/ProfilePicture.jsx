import React, { useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { FaPlus, FaCircleCheck } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import img1 from "/assets/images/profileavtar.png";
const ProfilePicture = () => {
  const [selectedImage, setSelectedImage] = useState(img1);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 4,
        textAlign: "center",
      }}
    >
      {/* Avatar with Add Icon */}
      <Box
        sx={{
          position: "relative",
          width: 220,
          height: 220,
        }}
      >
        <Avatar
          src={selectedImage}
          sizes="lg"
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0",
          }}
        />

        {/* Plus Icon */}
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            right: 0,
            width: 42,
            height: 42,
            backgroundColor: "#FF9700",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
          onClick={() => document.getElementById("image-upload").click()}
        >
          <FaPlus size={25} style={{ color: "white" }} />
        </Box>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </Box>

      {/* Guidelines */}
      <Box sx={{ textAlign: "left" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 1,
            fontFamily: "Poppins",
          }}
        >
          <FaCircleCheck style={{ color: "green" }} />
          <Typography sx={{ fontSize: "14px", fontFamily: "Poppins" }}>
            Sharp and high resolution
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 1,
          }}
        >
          <FaCircleCheck style={{ color: "green" }} />
          <Typography sx={{ fontSize: "14px", fontFamily: "Poppins" }}>
            Show Your Face
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 1,
          }}
        >
          <IoMdCloseCircle style={{ color: "red" }} />
          <Typography sx={{ fontSize: "14px", fontFamily: "Poppins" }}>
            No Graphics or Text
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePicture;
