import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Paginate = ({
  totalItems,
  itemsPerPage,
  setPage,
  backgroundColor,
  color = "#003a5e",
  hoverColor = "#004f7e",
  activeColor = "#003a5e",
  activeTextColor = "#fff",
}) => {
  return (
    <div
      className="pagination justify-content-end align-items-end mt-2 me-1"
      style={{ backgroundColor: backgroundColor,
          padding: "10px", 
        borderRadius: "8px",  }}
    >
      <Pagination
        count={Math.ceil(totalItems / itemsPerPage)}
        shape="rounded"
        onChange={(event, value) => setPage(value)}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: (props) => (
                <div
                  {...props}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: color,
                  }}
                >
                  <ArrowBackIcon
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  <span style={{ fontSize: "14px" }}>Previous</span>
                </div>
              ),
              next: (props) => (
                <div
                  {...props}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: color,
                  }}
                >
                  <span style={{ fontSize: "14px" }}>Next</span>
                  <ArrowForwardIcon
                    style={{
                      marginLeft: "5px",
                    }}
                  />
                </div>
              ),
            }}
            {...item}
            sx={{
              color: color, // Default text color
              fontSize: "14px",
              fontFamily: "Poppins",
              "&:hover": {
                backgroundColor: hoverColor, // Hover background color
                color: activeTextColor, // Hover text color
              },
              "&.Mui-selected": {
                backgroundColor: activeColor, // Active background color
                color: activeTextColor, // Active text color
              },
              "&.MuiPaginationItem-previousNext": {
                "&:hover": {
                  backgroundColor: "transparent", // Disable hover background
                  color: color, // Keep default color
                },
              },
            }}
          />
        )}
      />
    </div>
  );
};

export default Paginate;
