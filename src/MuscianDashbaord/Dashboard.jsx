import React from "react";
import dbEventCreated from "/assets/images/db-event-created.png";
import dbPendingAmount from "/assets/images/db-pending-amount.png";
import dbearning from "/assets/images/dbearning.png";
import dbreq from "/assets/images/dbreq.png";
import eventorganizer4 from "/assets/images/eventorganizer4.png";

import avtarimg from "/assets/images/musician-3.png";
import { Box, Typography } from "@mui/material";
import { IoChevronForward } from "react-icons/io5";
import TableMuiCustom from "../mui/TableMuiCustom";

const Dashboard = () => {
  const cardData = [
    {
      title: "Total Earnings",
      detail: "The Total Earn Money Ready to Withdraw",
      count: "$10",
      image: dbearning,
    },
    {
      title: "Pending Earnings",
      detail:
        "The Total Amount Pending the ongoing projects until the event completion ",
      count: "$20",
      image: dbPendingAmount,
    },
    {
      title: "Total Ongoing Events",
      detail: "The number of total confirm events ongoing or schedules ",
      count: "2000",
      image: dbEventCreated,
    },
    {
      title: "Pending Event Requests",
      detail: "The number of event requests received From Event Organizer",
      count: "20",
      image: dbreq,
    },
  ];

  const tableRows = [
    {
      eventOrganizers: {
        image: avtarimg, // Avatar image URL
        name: "John Doe",
      },
      eventType: "Wedding",
      date: "2024-12-15",
      time: "5:00 PM",
      duration: "3 hours",
    },
    {
      eventOrganizers: {
        image: avtarimg, // Avatar image URL
        name: "Jane Smith",
      },
      eventType: "Conference",
      date: "2024-12-16",
      time: "9:00 AM",
      duration: "4 hours",
    },
    {
      eventOrganizers: {
        image: avtarimg, // Avatar image URL
        name: "Mike Johnson",
      },
      eventType: "Workshop",
      date: "2024-12-17",
      time: "2:00 PM",
      duration: "2 hours",
    },
    {
      eventOrganizers: {
        image: avtarimg, // Avatar image URL
        name: "Sarah Lee",
      },
      eventType: "Wedding",
      date: "2024-12-20",
      time: "6:00 PM",
      duration: "5 hours",
    },
  ];
  const tableRows2 = [
    {
      eventName: "Wedding Gala",
      organizerName: "John Doe",
      status: "Accepted",
    },
    {
      eventName: "Tech Conference",
      organizerName: "Jane Smith",
      status: "Decline",
    },
    {
      eventName: "Music Concert",
      organizerName: "Mike Johnson",
      status: "Pending",
    },
    {
      eventName: "Business Summit",
      organizerName: "Sarah Lee",
      status: "Accepted",
    },
  ];

  return (
    <div className="ms-2 mt-2">
      <div className="row w-100">
        {cardData.map((card, index) => (
          <div
            className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3"
            key={index}
          >
            <div
              className="card p-3"
              style={{
                minHeight: "200px", // Ensures a minimum height for consistency
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div className="row ">
                <div className="col">
                  <h3
                    className="font-poppins"
                    style={{
                      color: "#013c61",
                      fontWeight: 600,
                      fontSize: "15px",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <div className="col-auto">
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: "60px", height: "55px" }}
                  />
                </div>
              </div>
              <h5
                className="font-poppins"
                style={{
                  color: "#013c61",
                  fontWeight: 700,
                  fontSize: "24px",
                }}
              >
                {card.count}
              </h5>
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
          </div>
        ))}
      </div>

      <div className="row mt-3">
        <div className="col-lg-7">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between align-content-center">
              <Typography
                sx={{
                  color: "#013A5E",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Upcoming Events in this week
              </Typography>
              <Typography
                sx={{
                  color: "#FF9700",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                This week : <span style={{ color: "#C00000" }}>5</span>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    color: "#FF9700",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 400,
                    marginRight: "2px", // Space between text and icon
                  }}
                >
                  See all
                </Typography>
                <IoChevronForward
                  size={16} // Adjust the size as needed
                  style={{ color: "#FF9700" }}
                />
              </Box>
            </div>
            <div className="p-2 bg-white mt-2" style={{ borderRadius: "15px" }}>
              <TableMuiCustom
                headerRounded={true}
                th={{
                  eventOrganizers: "Event Organizers",
                  eventType: "Event Type",
                  date: "Date",
                  time: "Time",
                  duration: "Duration",
                }}
                td={tableRows} // Assuming you already have `tableRows` data
                rowColor="#F9F9F9"
                customFields={[
                  {
                    name: "eventOrganizers",
                    data: (value) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img
                          src={value.image}
                          alt={value.name}
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: "14px",
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
                    name: "eventType",
                    data: (value) => (
                      <Typography
                        sx={{
                          fontSize: "13px",
                          color: "#F10000",
                          fontFamily: "Poppins",
                        }}
                      >
                        {value} {/* Event type like "Wedding" will be in red */}
                      </Typography>
                    ),
                  },
                  {
                    name: "date",
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
                    name: "time",
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
                    name: "duration",
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
                ]}
                styleTableTh={{
                  backgroundColor: "white",
                  color: "#FF9700",
                  fontWeight: 600,
                  fontSize: 14,
                  fontFamily: "Poppins",
                  borderRadius: "0px",
                  borderBottom: "1px solid gray",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between align-content-center mt-4 mt-md-0">
              <Typography
                sx={{
                  color: "#013A5E",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Recent Applied For Events
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    color: "#FF9700",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 400,
                    marginRight: "2px", // Space between text and icon
                  }}
                >
                  See all
                </Typography>
                <IoChevronForward
                  size={16} // Adjust the size as needed
                  style={{ color: "#FF9700" }}
                />
              </Box>
            </div>
            <div className="p-2 bg-white mt-2" style={{ borderRadius: "15px" }}>
              <TableMuiCustom
                headerRounded={true}
                th={{
                  eventName: "Event Name",
                  organizerName: "Organizer Name",
                  status: "Status",
                }}
                td={tableRows2} // Assuming `tableRows` data is provided
                rowColor="#F9F9F9"
                customFields={[
                  {
                    name: "eventName",
                    data: (value) => (
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#013c61",
                          fontFamily: "Poppins",
                        }}
                      >
                        {value}
                      </Typography>
                    ),
                  },
                  {
                    name: "organizerName",
                    data: (value) => (
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
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
                    data: (value) => {
                      let statusStyle = {};
                      if (value === "Decline") {
                        statusStyle = {
                          backgroundColor: "#C0000033",
                          color: "#C00000",
                          textAlign: "center",
                        };
                      } else if (value === "Accepted") {
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
                        <Typography
                          sx={{
                            padding: "5px 10px",
                            borderRadius: "50px", // Pill shape
                            fontSize: "13px",
                            fontWeight: 500,
                            ...statusStyle,
                            fontFamily: "Poppins",
                          }}
                        >
                          {value}
                        </Typography>
                      );
                    },
                  },
                ]}
                styleTableTh={{
                  backgroundColor: "white",
                  color: "#FF9700",
                  fontWeight: 600,
                  fontSize: 14,
                  fontFamily: "Poppins",
                  borderRadius: "0px",
                  borderBottom: "1px solid gray",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
