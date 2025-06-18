import React from "react";
import eventorganizer4 from "/assets/images/eventorganizer4.png";
import TableMuiCustom from "../../mui/TableMuiCustom";
import { Box, Typography } from "@mui/material";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoChevronForwardOutline } from "react-icons/io5";

const PaymentsOverView = () => {
  const cardData = [
    {
      title: "TOTAL PENDING AMOUNT",
      amount: "$2000",
      description: "The Total Pending Amounts Pay to Musicians",
    },
    {
      title: "TOTAL RECEIVED AMOUNT",
      amount: "$7000",
      description: "The Total Received Amounts from Events",
    },
  ];

  const tableRows = [
    {
      musicians: { name: "Davis Press", image: eventorganizer4 },
      eventName: "Summer Jazz Festival",
      paymentDateTime: "10/10/24 : 23:00:00",
      pendingAmount: "$850",
      eventStatus: "Ongoing",
      paymentStatus: "Paid",
    },
    {
      musicians: { name: "John Smith", image: eventorganizer4 },
      eventName: "Winter Music Concert",
      paymentDateTime: "15/11/24 : 20:00:00",
      pendingAmount: "$1000",
      eventStatus: "Pending",
      paymentStatus: "Pending",
    },
    {
      musicians: { name: "Emma Wilson", image: eventorganizer4 },
      eventName: "Rock Festival",
      paymentDateTime: "20/12/24 : 21:00:00",
      pendingAmount: "$600",
      eventStatus: "Cancelled",
      paymentStatus: "Refunded",
    },
    {
      musicians: { name: "Michael Brown", image: eventorganizer4 },
      eventName: "Blues Night",
      paymentDateTime: "05/01/25 : 22:00:00",
      pendingAmount: "$900",
      eventStatus: "Ongoing",
      paymentStatus: "Paid",
    },
    {
      musicians: { name: "Sarah Davis", image: eventorganizer4 },
      eventName: "Classical Evening",
      paymentDateTime: "25/01/25 : 19:00:00",
      pendingAmount: "$800",
      eventStatus: "Pending",
      paymentStatus: "Pending",
    },
  ];

  const tableHeaders = [
    { key: "musicians", label: "Musician / Band" },
    { key: "eventName", label: "Event Name" },
    { key: "paymentDateTime", label: "Payment Date & Time" },
    { key: "eventStatus", label: "Event Status" },
    { key: "paymentStatus", label: "Payment Status" },
    { key: "pendingAmount", label: "Pending Amount" },
    { key: "action", label: "Action" },
  ];

  return (
    <div className="container-fluid bg-white rounded mt-2 p-2">
      <div className="row">
        {/* Card Section */}
        <div className="d-flex  flex-lg-nowrap flex-md-nowrap flex-sm-wrap flex-wrap justify-content-start gap-3 col-lg-6 col-md-12  gap-3 ms-0">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="mt-3 col-md-6 col-sm-6 col-lg-6    col-sm-12"
            >
              <div
                className="d-flex flex-column card-body shadow"
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "15px",
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
                  className="ms-3 mt-2 me-2"
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "Bebas Neue",
                    zIndex: "1",
                  }}
                >
                  {data.title}
                </p>
                <p
                  className="ms-3"
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    fontFamily: "Poppins",
                    zIndex: "1",
                  }}
                >
                  {data.amount}
                </p>
                <p
                  className="me-1 ms-3 "
                  style={{
                    fontSize: "10px",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                >
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="table w-100 bg-white p-2 rounded mt-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <p
            className="font-poppins"
            style={{
              color: "#013C61",
              fontWeight: "600",
              fontSize: "16px",
              fontFamily: "Poppins",
            }}
          >
            The Total Amount Paid
          </p>
          <div
            className="d-flex align-items-center  font-poppins"
            style={{
              color: "#013C61",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
              fontFamily: "Poppins",
            }}
          >
            <span>See all</span>
            <IoChevronForwardOutline style={{ color: "#013C61" }} size={35} />
          </div>
        </div>
        <TableMuiCustom
          headerRounded={true}
          th={tableHeaders.reduce((acc, header) => {
            acc[header.key] = header.label;
            return acc;
          }, {})}
          td={tableRows}
          customFields={[
            {
              name: "musicians",
              data: (value) => (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#013c61",
                      fontFamily: "Poppins",
                    }}
                  >
                    {value.name}
                  </Typography>
                </div>
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
              name: "pendingAmount",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  {value}
                </Typography>
              ),
            },
            {
              name: "eventStatus",
              data: (value) => {
                let statusStyle = {};
                if (value === "Cancelled") {
                  statusStyle = {
                    backgroundColor: "#C0000033",
                    color: "#C00000",
                    textAlign: "center",
                  };
                } else if (value === "Ongoing") {
                  statusStyle = {
                    backgroundColor: "#007BFF33",
                    color: "#007BFF",
                    textAlign: "center",
                  };
                } else if (value === "Pending") {
                  statusStyle = {
                    backgroundColor: "#FFFF7433",
                    color: "#9B9B00",
                    textAlign: "center",
                  };
                } else if (value === "Complete") {
                  statusStyle = {
                    backgroundColor: "#13B10433",
                    color: "#13B104",
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
              name: "paymentStatus",
              data: (value) => {
                let statusStyle = {};
                if (value === "Refunded") {
                  statusStyle = {
                    backgroundColor: "#9F9F9F33",
                    color: "#7A7A7A",
                    textAlign: "center",
                  };
                } else if (value === "Paid") {
                  statusStyle = {
                    backgroundColor: "#13B10433",
                    color: "#13B104",
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
              data: (value) => (
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
            backgroundColor: "#013C61",
            color: "white",
            fontSize: 18,
            fontFamily: "Bebas Neue",
          }}
        />
        ;
      </div>
    </div>
  );
};

export default PaymentsOverView;
