import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TableMuiCustom from "../../../mui/TableMuiCustom";
import { MdOutlineFileDownload } from "react-icons/md";
import Paginate from "../../../Components/Paginate";

const PayoutHistory = () => {
  const [page, setPage] = useState(1);
  const totalItems = 70;
  const itemsPerPage = 10;
  const tableHeaders = [
    { key: "musicianName", label: "Musician Name" },
    { key: "userId", label: "User ID" },
    { key: "paidAmount", label: "Paid Amount" },
    { key: "paymentDateTime", label: "Date & Time of Payment" },
    { key: "bankName", label: "Bank Name" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ];

  const tableRows = [
    {
      musicianName: "John Doe",
      userId: "USR001",
      paidAmount: "$500",
      paymentDateTime: "2024-12-20 10:00 AM",
      bankName: "Bank of America",
      status: "Paid",
    },
    {
      musicianName: "Jane Smith",
      userId: "USR002",
      paidAmount: "$300",
      paymentDateTime: "2024-12-19 03:30 PM",
      bankName: "Chase Bank",
      status: "Paid",
    },
    {
      musicianName: "Mike Johnson",
      userId: "USR003",
      paidAmount: "$450",
      paymentDateTime: "2024-12-18 01:15 PM",
      bankName: "Wells Fargo",
      status: "Paid",
    },
    {
      musicianName: "Emily Davis",
      userId: "USR004",
      paidAmount: "$600",
      paymentDateTime: "2024-12-17 09:45 AM",
      bankName: "Citibank",
      status: "Paid",
    },
    {
      musicianName: "Chris Brown",
      userId: "USR005",
      paidAmount: "$250",
      paymentDateTime: "2024-12-16 07:00 PM",
      bankName: "HSBC",
      status: "Paid",
    },
  ];

  return (
    <div>
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
              name: "paidAmount",
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
              name: "paymentDateTime",
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
                    backgroundColor: "#13B10433",
                    color: "#13B104",
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
              data: () => (
                <Typography
                  sx={{
                    backgroundColor: "#e9e9e9",
                    color: "#002B46",
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    padding: "8px",
                    borderRadius: "25px",
                    alignItems: "center",
                    display: "flex",
                    fontSize: "13px",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <MdOutlineFileDownload
                    size={20}
                    style={{ marginRight: "5px" }}
                  />
                  Download
                </Typography>
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

export default PayoutHistory;
