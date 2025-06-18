import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const DashboardNavMusician = ({ type }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex", // Ensure the main layout uses flexbox
      }}
    >
      <CssBaseline />

      {/* Sidebar should take full height and remain fixed */}
      <Header />

      {/* Main content area */}
      <Box
        className="px-3 px-md-3 pb-2 scroll"
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "20px",
          height: "100vh", // Ensure it takes full height
          overflowY: "auto", // Enable vertical scrolling only for the content area
          scrollbarWidth: "none", // Hide scrollbar for smoother design (for Firefox)
        }}
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${250}px)` }, // Adjust width to leave space for the sidebar
          paddingTop: "100px", // Add space at the top if needed for the header
        }}
      >
        <Outlet context={{ type }} />
      </Box>
    </Box>
  );
};

export default DashboardNavMusician;
