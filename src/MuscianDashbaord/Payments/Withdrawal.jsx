import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import TableMui from "../../mui/TableMuiCustom";
import { Typography } from "@mui/material";
import { MdOutlineFileDownload } from "react-icons/md";
import Paginate from "../../Components/Paginate";
import Withdraw from "../Modal/Withdraw";

const Withdrawal = () => {
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);

  const totalItems = 1000;
  const itemsPerPage = 10;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const headers = [
    { key: "transactionId", label: "Transaction ID" },
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
    <>
      <style>
        {`
          .custom-placeholder::placeholder {
            color: #406B86; /* Change this to your desired color */
            font-family: Poppins;
            font-size: 14px;
            font-weight: 400;
          }
        `}
      </style>
      <div className="container">
        <div className="row pt-3">
          <div className="col-4">
            <p
              style={{
                fontFamily: "Poppins",
                color: "#809DAF",
                fontSize: "16px",
                fontWeight: "700",
                margin: "0",
              }}
            >
              Withdraw Amount
            </p>
            <div
              className="d-flex flex-column bg-white p-3"
              style={{
                borderRadius: "10px",
                margin: "0",
              }}
            >
              <div className="form m-3">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#406B86",
                        fontFamily: "Poppins",
                      }}
                    >
                      Amount
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Amount"
                      style={{ margin: 0 }}
                      className="custom-placeholder"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#406B86",
                        fontFamily: "Poppins",
                      }}
                    >
                      To
                    </Form.Label>
                    <Form.Select
                      style={{
                        margin: 0,
                        color: "#406B86",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      <option>Select Withdrawal Method</option>
                      <option value="bank">Bank Transfer</option>
                      <option value="paypal">PayPal</option>
                      <option value="crypto">Cryptocurrency</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </div>

              <div
                className="d-flex flex-column bg-white w-100 "
                style={{
                  marginTop: "0",
                }}
              >
                <div className="d-flex justify-content-center mt-5 mb-3">
                  <Button
                    className="mt-5"
                    style={{
                      backgroundColor: "#FF9700",
                      color: "#fff",
                      fontFamily: "Bebas Neue",
                      fontSize: "20px",
                      fontWeight: "400",
                      borderRadius: "20px",
                      border: "none",
                      padding: "2px 20px",
                    }}
                    onClick={handleShow}
                  >
                    Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <p
              style={{
                fontFamily: "Poppins",
                color: "#809DAF",
                fontSize: "16px",
                fontWeight: "700",
                margin: "0",
              }}
            >
              Transaction history
            </p>
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
                            padding: "3px 10px",
                            borderRadius: "25px",
                            alignItems: "center",
                            display: "flex",
                            fontSize: "13px",
                            justifyContent: "center",
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
        <Withdraw show={show} handleCloses={handleClose} />
      </div>
    </>
  );
};

export default Withdrawal;
