import React, { useState } from "react";
import { Typography, Box, Button, IconButton } from "@mui/material";
import { IoEye } from "react-icons/io5";
import TableMuiCustom from "../../mui/TableMuiCustom";
import Paginate from "../../Components/Paginate";
import RefundNow from "../Modals/RefundNow";

const RefundPaymentRequest = () => {
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalItems = 70;
  const itemsPerPage = 10;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const tableHeaders = [
    { key: "refundId", label: "Refund ID" },
    { key: "eventName", label: "Event Name" },
    { key: "eventOrganizer", label: "Event Organizer" },
    { key: "eventDateTime", label: "Event Date & Time" },
    { key: "refundRequestDate", label: "Refund Request Date" },
    { key: "refundProcessDate", label: "Refund Process Date" },
    { key: "proposedFee", label: "Proposed Fee" },
    { key: "serviceCharges", label: "Service Charges" },
    { key: "refundableAmount", label: "Refundable Amount" },
    { key: "refundStatus", label: "Refund Status" },
    { key: "action", label: "Action" },
  ];

  const tableRows = [
    {
      refundId: "R123",
      eventName: "Music Fest",
      eventOrganizer: "John Doe",
      eventDateTime: "2024-12-25 18:00",
      refundRequestDate: "2024-12-10",
      refundProcessDate: "2024-12-15",
      proposedFee: "$500",
      serviceCharges: "$50",
      refundableAmount: "$450",
      refundStatus: "Pending",
    },
    {
      refundId: "R124",
      eventName: "Rock Concert",
      eventOrganizer: "Jane Smith",
      eventDateTime: "2024-12-30 20:00",
      refundRequestDate: "2024-12-12",
      refundProcessDate: "2024-12-17",
      proposedFee: "$600",
      serviceCharges: "$60",
      refundableAmount: "$540",
      refundStatus: "Refunded",
    },
    {
      refundId: "R125",
      eventName: "Jazz Night",
      eventOrganizer: "Emily Clark",
      eventDateTime: "2024-12-22 19:00",
      refundRequestDate: "2024-12-08",
      refundProcessDate: "2024-12-13",
      proposedFee: "$450",
      serviceCharges: "$45",
      refundableAmount: "$405",
      refundStatus: "Pending",
    },
    {
      refundId: "R126",
      eventName: "Classical Evening",
      eventOrganizer: "Michael Brown",
      eventDateTime: "2024-12-28 18:30",
      refundRequestDate: "2024-12-14",
      refundProcessDate: "2024-12-18",
      proposedFee: "$550",
      serviceCharges: "$55",
      refundableAmount: "$495",
      refundStatus: "Refunded",
    },
    {
      refundId: "R127",
      eventName: "Pop Extravaganza",
      eventOrganizer: "Sarah Davis",
      eventDateTime: "2024-12-20 20:00",
      refundRequestDate: "2024-12-05",
      refundProcessDate: "2024-12-10",
      proposedFee: "$700",
      serviceCharges: "$70",
      refundableAmount: "$630",
      refundStatus: "Pending",
    },
    {
      refundId: "R128",
      eventName: "Indie Vibes",
      eventOrganizer: "Chris Johnson",
      eventDateTime: "2024-12-29 21:00",
      refundRequestDate: "2024-12-11",
      refundProcessDate: "2024-12-16",
      proposedFee: "$520",
      serviceCharges: "$52",
      refundableAmount: "$468",
      refundStatus: "Refunded",
    },
    {
      refundId: "R129",
      eventName: "Electronic Beats",
      eventOrganizer: "Laura Wilson",
      eventDateTime: "2024-12-27 22:00",
      refundRequestDate: "2024-12-09",
      refundProcessDate: "2024-12-14",
      proposedFee: "$640",
      serviceCharges: "$64",
      refundableAmount: "$576",
      refundStatus: "Pending",
    },
    {
      refundId: "R130",
      eventName: "Reggae Night",
      eventOrganizer: "Tom Harris",
      eventDateTime: "2024-12-26 19:30",
      refundRequestDate: "2024-12-07",
      refundProcessDate: "2024-12-12",
      proposedFee: "$470",
      serviceCharges: "$47",
      refundableAmount: "$423",
      refundStatus: "Refunded",
    },
    {
      refundId: "R131",
      eventName: "Acoustic Harmony",
      eventOrganizer: "Anna Lee",
      eventDateTime: "2024-12-23 18:45",
      refundRequestDate: "2024-12-06",
      refundProcessDate: "2024-12-11",
      proposedFee: "$530",
      serviceCharges: "$53",
      refundableAmount: "$477",
      refundStatus: "Pending",
    },
    {
      refundId: "R132",
      eventName: "Festival of Strings",
      eventOrganizer: "David White",
      eventDateTime: "2024-12-24 20:15",
      refundRequestDate: "2024-12-08",
      refundProcessDate: "2024-12-13",
      proposedFee: "$580",
      serviceCharges: "$58",
      refundableAmount: "$522",
      refundStatus: "Refunded",
    },
  ];

  const handleRefundNow = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
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
              name: "eventOrganizer",
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
                  {value}
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
                if (!value) {
                  return (
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        backgroundColor: "#E0E0E0",
                        color: "#A0A0A0",
                        padding: "3px 7px",
                        borderRadius: "20px",
                        fontFamily: "Poppins",
                        fontWeight: 600,
                      }}
                    >
                      Unknown
                    </Box>
                  );
                }

                let statusStyle = {};
                if (value === "Refunded") {
                  statusStyle = {
                    backgroundColor: "#f9f9f9f9",
                    color: "gray",
                    textAlign: "center",
                  };
                } else if (value === "Pending") {
                  statusStyle = {
                    backgroundColor: "#FFFF7433",
                    color: "#9B9B00",
                    textAlign: "center",
                  };
                }

                return (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      ...statusStyle,
                      padding: "3px 7px",
                      borderRadius: "20px",
                      fontFamily: "Poppins",
                      fontWeight: 600,
                    }}
                  >
                    {value}
                  </Box>
                );
              },
            },
            {
              name: "action",
              data: (item, data) => {
                const { refundStatus } = data;
                const isRefunded = refundStatus === "Refunded";
                return (
                  <Button
                    disabled={isRefunded}
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
                    onClick={() => !isRefunded && handleRefundNow()}
                  >
                    Refund Now
                  </Button>
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
      <div className="pagination mt-2 me-1 mb-2 justify-content-end">
        <Paginate
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
        />
      </div>
      <RefundNow show={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default RefundPaymentRequest;
