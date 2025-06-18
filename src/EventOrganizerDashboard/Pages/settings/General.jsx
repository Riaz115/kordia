import { Typography } from "@mui/material";
import React from "react";

const General = () => {
  return (
    <div className="p-2">
      <Typography
        sx={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 600 }}
      >
        Global preferences
      </Typography>
      <div className="d-flex flex-column gap-3 mt-3">
        <div className="d-flex flex-column gap-1 border-bottom border-1 py-2">
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 500,
              color: "#3551B6",
            }}
          >
            Preferred language
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            English
          </Typography>
        </div>
        <div className="d-flex flex-column gap-1 border-bottom border-1 py-2">
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 500,
              color: "#3551B6",
            }}
          >
            Preferred currency
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            United States dollar
          </Typography>
        </div>
        <div className="d-flex flex-column gap-1 border-bottom border-1 py-2">
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 500,
              color: "#3551B6",
            }}
          >
            Time zone
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            (GMT-05:00) Eastern Time (US & Canada)
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default General;
