import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import TableMuiCustom from "../../../mui/TableMuiCustom";
import Paginate from "../../../Components/Paginate";

const WithdrawRequests = () => {
  const [page, setPage] = useState(1);
  const totalItems = 70;
  const itemsPerPage = 10;
  const tableHeaders = [
    { key: "musicianName", label: "Musician Name" },
    { key: "userId", label: "User ID" },
    { key: "requestedAmount", label: "Requested Amount" },
    { key: "requestDateTime", label: "Date & Time of Request" },
    { key: "bankName", label: "Bank Name" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ];

  const tableRows = [
    {
      musicianName: "John Doe",
      userId: "USR001",
      requestedAmount: "$500",
      requestDateTime: "2024-12-20 10:00 AM",
      bankName: "Bank of America",
      status: "Pending",
    },
    {
      musicianName: "Jane Smith",
      userId: "USR002",
      requestedAmount: "$300",
      requestDateTime: "2024-12-19 03:30 PM",
      bankName: "Chase Bank",
      status: "Pending",
    },
    {
      musicianName: "Mike Johnson",
      userId: "USR003",
      requestedAmount: "$450",
      requestDateTime: "2024-12-18 01:15 PM",
      bankName: "Wells Fargo",
      status: "Pending",
    },
    {
      musicianName: "Emily Davis",
      userId: "USR004",
      requestedAmount: "$600",
      requestDateTime: "2024-12-17 09:45 AM",
      bankName: "Citibank",
      status: "Pending",
    },
    {
      musicianName: "Chris Brown",
      userId: "USR005",
      requestedAmount: "$250",
      requestDateTime: "2024-12-16 07:00 PM",
      bankName: "HSBC",
      status: "Pending",
    },
    {
      musicianName: "Sarah Wilson",
      userId: "USR006",
      requestedAmount: "$700",
      requestDateTime: "2024-12-15 11:20 AM",
      bankName: "PNC Bank",
      status: "Pending",
    },
  ];

  const handlePayNow = (row) => {
    console.log("Processing payment for:", row);
    // Implement your payment handling logic here
  };

  return (
    <div className="p-2">
      <div className="table">
        <TableMuiCustom
          headerRounded={true}
          th={tableHeaders.reduce((acc, header) => {
            acc[header.key] = header.label;
            return acc;
          }, {})}
          td={tableRows}
          customFields={[
            {
              name: "musicianName",
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
              name: "userId",
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
              name: "requestedAmount",
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
              name: "requestDateTime",
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
              name: "bankName",
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
              name: "status",
              data: (value) => (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    backgroundColor: "#FFFF7433",
                    color: "#9B9B00",
                    padding: "3px 7px",
                    borderRadius: "20px",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                  }}
                >
                  {value}
                </Box>
              ),
            },
            {
              name: "action",
              data: (row) => (
                <Button
                  sx={{
                    backgroundColor: "#FF9700",
                    color: "white",
                    borderRadius: "20px",
                    padding: "5px 15px",
                    textTransform: "none",
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    "&:hover": {
                      backgroundColor: "#FF7B00",
                      color: "white",
                    },
                  }}
                  onClick={() => handlePayNow(row)}
                >
                  Pay Now
                </Button>
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
      <div className="pagination mt-2 me-1 mb-2 justify-content-end">
        <Paginate
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default WithdrawRequests;
