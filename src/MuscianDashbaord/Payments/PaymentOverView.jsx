import React, { useState } from "react";
import TableMui from "../../mui/TableMuiCustom";
import Paginate from "../../Components/Paginate";
import { Typography, Button } from "@mui/material";
import { MdOutlineFileDownload } from "react-icons/md";

const PaymentOverView = () => {
  const [page, setPage] = useState(1);

  const totalItems = 1000;
  const itemsPerPage = 10;
  const cardData = [
    {
      title: "TOTAL PENDING AMOUNT",
      amount: "$2000",
      description: "The Total Pending Amounts Pay to Musicians",
    },
    {
      title: "TOTAL RECEIVED AMOUNT",
      amount: "$5000",
      description: "The Total Received Amounts from Events",
    },
  ];

  // Define table headers and rows
  const headers = [
    { key: "transactionId", label: "Transaction ID" },
    { key: "description", label: "Description" },
    { key: "bankOrWallet", label: "Bank or Wallet" },
    { key: "dateTime", label: "Date & Time" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "receipt", label: "Receipt" },
  ];

  const rows = [
    {
      transactionId: "#123456789",
      description: "Event Payment",
      bankOrWallet: "1234 ****",
      dateTime: "28 Jan 24, 12:30 AM",
      amount: "-$100",
      status: "Pending",
      receipt: "Download",
    },
    {
      transactionId: "#123456789",
      description: "Event Payment",
      bankOrWallet: "1234 ****",
      dateTime: "28 Jan 24, 12:30 AM",
      amount: "-$500",
      status: "Completed",
      receipt: "Download",
    },
    // ... more rows as needed ...
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12 d-flex flex-md-row flex-sm-column flex-column gap-3 justify-content-between">
          {cardData.map((data, index) => (
            <div key={index} className="mt-3 col-md-6 col-sm-12">
              <div
                className="d-flex flex-column card-body shadow"
                style={{
                  width: "100%",
                  height: "165px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #FF8C00, #f5a613)",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background Cloud Design */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    width: "100px",
                    height: "100px",
                    background: "rgba(238, 229, 229, 0.3)",
                    borderRadius: "50%",
                    filter: "blur(30px)",
                  }}
                ></div>

                <p
                  className="ms-2 mt-2 me-2 card-text"
                  style={{
                    fontSize: "24px",
                    fontWeight: "400",
                    fontFamily: "Bebas Neue",
                    zIndex: "1",
                    margin: 0,
                  }}
                >
                  {data.title}
                </p>
                <p
                  className="ms-4 card-text"
                  style={{
                    fontSize: "50px",
                    fontWeight: "700",
                    fontFamily: "Bebas Neue",
                    zIndex: "1",
                    margin: 0,
                  }}
                >
                  {data.amount}
                </p>
                <p
                  className="me-1 ms-2 card-text"
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                    margin: 0,
                  }}
                >
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <p
          className="mt-4"
          style={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#013c61",
            fontFamily: "Poppins",
          }}
        >
          The Last Week Transaction
        </p>
      </div>
      <div className="row">
        <div className="table">
          <TableMui
            th={headers.reduce((acc, header) => {
              acc[header.key] = header.label;
              return acc;
            }, {})}
            td={rows}
            customFields={[
              {
                name: "amount",
                data: (value) => {
                  return (
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#FF0004",
                        fontFamily: "Poppins",
                      }}
                    >
                      {value}
                    </Typography>
                  );
                },
              },
              {
                name: "status",
                data: (value) => {
                  let backgroundColor;
                  let color;
                  switch (value.toLowerCase()) {
                    case "pending":
                      backgroundColor = "#ffffb9";
                      color = "#a0a00c";
                      break;
                    case "cancel":
                      backgroundColor = "#f2cccc";
                      color = "#800000";
                      break;
                    case "completed":
                      backgroundColor = "#d0efcd";
                      color = "#008000";
                      break;
                    case "reject":
                      backgroundColor = "#f2cccc";
                      color = "#800000";
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

              {
                name: "action",
                data: () => (
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#ff9700",
                      color: "white",
                      fontFamily: "Bebas Neue",
                      fontSize: "15px",
                      fontWeight: 400,
                      borderRadius: "20px",
                      textAlign: "center",
                    }}
                  >
                    Pay Now
                  </Button>
                ),
              },
              {
                name: "receipt",
                data: (value) => {
                  return (
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
    </div>
  );
};

export default PaymentOverView;
