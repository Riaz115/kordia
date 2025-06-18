import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Dashboardnav = ({ type }) => {
  const isAbove576 = useMediaQuery("(min-width:576px)");
  return (
    <Box
      className=""
      sx={{
        minHeight: "100vh",
      }}
    >
      <Box
        className=""
        sx={{ display: "flex", height: "100vh", backgroundColor: "#f5f5f5" }}
      >
        <CssBaseline />
        <Header type={type} />
        <Box
          className=" scroll"
          style={{
            borderRadius: "20px",
            height: "calc(100vh - 8px)",
            scrollbarWidth: "none",
            backgroundColor: "#f5f5f5",
          }}
          component="main"
          sx={{
            flexGrow: 1,
            width: "100%",
            overflowX: "hidden",
            paddingTop: isAbove576 ? "90px" : "70px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboardnav;
