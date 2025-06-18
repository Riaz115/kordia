import React, { useState } from "react";
import { Typography, IconButton, Menu, MenuItem, Button } from "@mui/material";
import TableMui from "../../mui/TableMuiCustom";
import { BsThreeDots } from "react-icons/bs";
import Paginate from "../../Components/Paginate";
import EventQuote from "../Modals/EventQuote";
import { MdChatBubbleOutline } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import eventorganizer1 from "/assets/images/eventorganizer1.png";
import { Pending } from "@mui/icons-material";
import PayNow from "../Modals/PayNow";
import eventorganizer3 from "/assets/images/eventorganizer3.png";

const RefundPayments = () => {
  const [page, setPage] = useState(1);

  const totalItems = 1000;
  const itemsPerPage = 10;

  const headers = [
    { key: "refundId", label: "Refund ID" },
    { key: "eventName", label: "Event Name" },
    { key: "musicianBooked", label: "Musician Booked" },
    { key: "eventDateTime", label: "Event Date & Time" },
    { key: "refundRequestDate", label: "Refund Request Date" },
    { key: "refundProcessDate", label: "Refund Process Date" },
    { key: "proposedFee", label: "Proposed Fee" },
    { key: "serviceCharges", label: "Service Charges" },
    { key: "refundableAmount", label: "Refundable Amount" },
    { key: "refundStatus", label: "Refund Status" },
  ];

  const rows = [
    {
      refundId: "RF001",
      eventName: "Wedding Ceremony",
      musicianBooked: "John Doe",
      eventDateTime: "2024-12-25 5:00 PM",
      refundRequestDate: "2024-12-18",
      refundProcessDate: "2024-12-19",
      proposedFee: "$1000",
      serviceCharges: "$50",
      refundableAmount: "$950",
      refundStatus: "Refunded",
    },
    {
      refundId: "RF002",
      eventName: "Corporate Event",
      musicianBooked: "Jane Smith",
      eventDateTime: "2024-12-28 7:00 PM",
      refundRequestDate: "2024-12-20",
      refundProcessDate: "",
      proposedFee: "$800",
      serviceCharges: "$40",
      refundableAmount: "$760",
      refundStatus: "Pending",
    },
    {
      refundId: "RF003",
      eventName: "Charity Gala",
      musicianBooked: "Mike Johnson",
      eventDateTime: "2024-12-30 6:00 PM",
      refundRequestDate: "2024-12-22",
      refundProcessDate: "2024-12-23",
      proposedFee: "$1500",
      serviceCharges: "$75",
      refundableAmount: "$1425",
      refundStatus: "Refunded",
    },
    {
      refundId: "RF004",
      eventName: "Birthday Party",
      musicianBooked: "Alice Williams",
      eventDateTime: "2024-12-29 3:00 PM",
      refundRequestDate: "2024-12-24",
      refundProcessDate: "",
      proposedFee: "$500",
      serviceCharges: "$25",
      refundableAmount: "$475",
      refundStatus: "Pending",
    },
    {
      refundId: "RF005",
      eventName: "New Year's Celebration",
      musicianBooked: "Chris Brown",
      eventDateTime: "2024-12-31 10:00 PM",
      refundRequestDate: "2024-12-26",
      refundProcessDate: "2024-12-27",
      proposedFee: "$2000",
      serviceCharges: "$100",
      refundableAmount: "$1900",
      refundStatus: "Refunded",
    },
    {
      refundId: "RF006",
      eventName: "Anniversary Celebration",
      musicianBooked: "Emily Davis",
      eventDateTime: "2024-12-27 7:00 PM",
      refundRequestDate: "2024-12-20",
      refundProcessDate: "",
      proposedFee: "$1200",
      serviceCharges: "$60",
      refundableAmount: "$1140",
      refundStatus: "Pending",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="table pt-4">
        <TableMui
          th={headers.reduce((acc, header) => {
            acc[header.key] = header.label;
            return acc;
          }, {})}
          td={rows}
          customFields={[
            {
              name: "refundId",
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
              name: "musicianBooked",
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
              name: "eventDateTime",
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
              name: "refundRequestDate",
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
              name: "refundProcessDate",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  {value || "N/A"}
                </Typography>
              ),
            },
            {
              name: "proposedFee",
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
              name: "serviceCharges",
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
              name: "refundableAmount",
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
              name: "refundStatus",
              data: (value) => {
                let backgroundColor;
                let color;
                switch (value.toLowerCase()) {
                  case "pending":
                    backgroundColor = "#ffffb9";
                    color = "#a0a00c";
                    break;
                  case "refunded":
                    backgroundColor = "#f6f6f6f6";
                    color = "gray";
                    break;
                  default:
                    backgroundColor = "transparent";
                }
                return (
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color,
                      fontWeight: 600,
                      fontFamily: "Poppins",
                      backgroundColor,
                      padding: "3px",
                      borderRadius: "25px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {value}
                  </Typography>
                );
              },
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
      <div className="pagination pt-4 justify-content-end">
        <Paginate
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default RefundPayments;
