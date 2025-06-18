import React from "react";
import dbEventCreated from "/assets/images/db-event-created.png";
import { IoIosArrowForward } from "react-icons/io";
import dbPendingAmount from "/assets/images/db-pending-amount.png";
import TableMui from "../../mui/TableMuiCustom";
import { Typography, Button, Box } from "@mui/material";
import eventorganizer4 from "/assets/images/eventorganizer4.png";
import dbearning from "/assets/images/dbearning.png";
import dbreq from "/assets/images/dbreq.png";
import { MdOutlineFileDownload } from "react-icons/md";

const DashBorad = () => {
  const cardData = [
    {
      title: "Total Amounts Paid",
      detail: "The Total Amounts Paid to Musicians",
      count: "$10",
      image: dbearning,
    },
    {
      title: "Total  Amounts Refunded",
      detail: "The Total Amounts Refunded  ",
      count: "$20",
      image: dbPendingAmount,
    },
    {
      title: "Event Created",
      detail: "The Number of created events ",
      count: "2000",
      image: dbEventCreated,
    },
    {
      title: "Ongoing Events",
      detail: "The Number of Events  Ongoing",
      count: "20",
      image: dbreq,
    },
    {
      title: "Total applications",
      detail:
        "Total awaiting musician applications or responses for your created events",
      count: "20",
      image: dbreq,
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
    <div className="ms-3 mt-2" style={{ backgroundColor: "#f7f7f7" }}>
      <div>
        <div
          className="row g-4 mb-4 p-1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
          }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card pt-3 px-3 pb-1"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "20px",
                overflow: "hidden",
                height: "170px",
              }}
            >
              <div>
                <h5
                  className="font-poppins"
                  style={{
                    color: "#013c61",
                    fontWeight: 600,
                    fontSize: "12px",
                  }}
                >
                  {card.title}
                </h5>
                <div className="d-flex align-items-center justify-content-between">
                  <h3
                    className="font-poppins"
                    style={{
                      color: "#013c61",
                      fontWeight: 700,
                      fontSize: "16px",
                    }}
                  >
                    {card.count}
                  </h3>
                  <div>
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{ width: "45px", height: "45px" }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p
                  className="font-syne"
                  style={{
                    color: "#809daf",
                    fontWeight: "semibold",
                    fontSize: "12px",
                  }}
                >
                  {card.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="table w-100 bg-white p-2 rounded">
        <div className="row w-100">
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
              className="d-flex align-items-center gap-2 font-poppins"
              style={{
                color: "#013C61",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px",
                fontFamily: "Poppins",
              }}
            >
              <span>See all</span>
              <IoIosArrowForward style={{ color: "#013C61" }} size={16} />
            </div>
          </div>
        </div>
        <TableMui
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
      </div>
    </div>
  );
};

export default DashBorad;
