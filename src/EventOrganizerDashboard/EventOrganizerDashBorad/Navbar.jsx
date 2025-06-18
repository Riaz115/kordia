import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Hidden,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NotificationsActive } from "@mui/icons-material";
import profilePic from "/assets/images/Ellipse 7.png";
import EditProfileModal from "../../Admin/Modals/EditProfileModal";

function Navbar({ handleDrawerToggle, isCollapsed, mobileOpen }) {
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility

  const isAbove900 = useMediaQuery("(min-width:900px)");

  // Dummy profile data to pass to the modal
  const profileData = {
    firstName: "Moni",
    lastName: "Roy",
    email: "moni.roy@example.com",
    contact: "1234567890",
  };

  return (
    <>
      <AppBar
        className="shadow-md"
        position="fixed"
        sx={{
          boxShadow: "0",
          width:
            !isCollapsed && isAbove900
              ? `calc(100% - 250px)`
              : isCollapsed && isAbove900
              ? `calc(100% - 100px)`
              : "100%",
          transition: "width 0.3s",
          backgroundColor: "#003a5e",
        }}
      >
        <Box
          className="d-flex align-items-center justify-content-end px-sm-5 px-3 py-3 w-100"
          style={{ backgroundColor: "#003a5e" }}
        >
          <Box className="d-flex align-items-center gap-3">
            <Badge variant="dot" color="error">
              <NotificationsActive style={{ color: "#fff" }} />
            </Badge>
            <Avatar
              sx={{ width: "60px", height: "60px", cursor: "pointer" }}
              src={profilePic}
              onClick={() => setOpenModal(true)} // Open the modal on avatar click
            />
            <Box className="d-flex flex-column align-items-center">
              <Typography className="text-white fw-bold fontstylelabel">
                Moni Roy
              </Typography>
            </Box>

            <Hidden mdUp>
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
            </Hidden>
          </Box>
        </Box>
      </AppBar>

      {/* Edit Profile Modal */}
      <EditProfileModal
        show={openModal}
        handleClose={() => setOpenModal(false)} // Close modal handler
        profileData={profileData} // Pass the user data to the modal
      />
    </>
  );
}

export default Navbar;
