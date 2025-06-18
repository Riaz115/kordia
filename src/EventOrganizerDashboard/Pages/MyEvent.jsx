import React, { useState } from "react";
import { Typography, IconButton, Box, Menu, MenuItem } from "@mui/material";
import TableMui from "../../mui/TableMuiCustom";
import { BsThreeDots } from "react-icons/bs";
import Paginate from "../../Components/Paginate";

const MyEvent = () => {
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const totalItems = 1000;
  const itemsPerPage = 10;
  const tableHeaders = [
    { key: "eventNo", label: "Event No" },
    { key: "eventName", label: "Event Name" },
    { key: "eventType", label: "Event Type" },
    { key: "eventDate", label: "Event Date" },
    { key: "eventTime", label: "Event Time" },
    { key: "locationAddress", label: "Location Address" },
    { key: "action", label: "Action" },
  ];

  const tableData = [
    {
      eventNo: "#1",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "12/12/24",
      eventTime: "07:00 PM",
      locationAddress: "100 Christian Road, Bundaberg WA 606",
      action: "...",
    },
    {
      eventNo: "#2",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "12/12/24",
      eventTime: "08:00 PM",
      locationAddress: "100 Christian Road, Bundaberg WA 606",
      action: "...",
    },
    {
      eventNo: "#3",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "12/12/24",
      eventTime: "08:30 PM",
      locationAddress: "100 Christian Road, Bundaberg WA 606",
      action: "...",
    },
    {
      eventNo: "#4",
      eventName: "Summer Jazz Festival",
      eventType: "Wedding",
      eventDate: "12/12/24",
      eventTime: "09:00 PM",
      locationAddress: "100 Christian Road, Bundaberg WA 606",
      action: "...",
    },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // Implement edit functionality here
    handleMenuClose();
  };

  const handleDelete = () => {
    // Implement delete functionality here
    handleMenuClose();
  };

  return (
    <div className="container-fluid">
      <div className="table pt-4">
        <TableMui
          th={tableHeaders.reduce((acc, header) => {
            acc[header.key] = header.label;
            return acc;
          }, {})}
          td={tableData}
          customFields={[
            {
              name: "eventNo",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "eventName",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "eventType",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "eventDate",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "eventTime",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "locationAddress",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "action",
              data: () => (
                <>
                  <IconButton
                    sx={{
                      backgroundColor: "#013c61",
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "5px",
                      "&:hover": {
                        backgroundColor: "#013c61",
                      },
                      "&:focus": {
                        backgroundColor: "#013c61",
                      },
                    }}
                    onClick={handleMenuOpen}
                  >
                    <BsThreeDots />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    sx={{
                      "& .MuiMenu-paper": {
                        backgroundColor: "#003a5e",
                        borderRadius: "10px",
                        boxShadow: "none",
                      },
                      "& .MuiMenu-list": {
                        backgroundColor: "#003a5e",
                        padding: "10px",
                        boxShadow: "none",
                        width: "140px",
                      },
                    }}
                  >
                    <MenuItem
                      onClick={handleDelete}
                      sx={{
                        color: "#ffff",
                        fontFamily: "Poppins",
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                    >
                      Delete
                    </MenuItem>
                    <MenuItem
                      onClick={handleEdit}
                      sx={{
                        color: "#ffff",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      Edit
                    </MenuItem>
                  </Menu>
                </>
              ),
            },
          ]}
          styleTableTh={{
            backgroundColor: "#003a5e",
            color: "#FF9700",
            fontWeight: 400,
            fontSize: 20,
            fontFamily: "Bebas Neue",
          }}
        />
      </div>
      <div className="pagination mt-2 me-1 mb-2  justify-content-end">
        <Paginate
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default MyEvent;
