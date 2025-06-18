import React from "react";
import "../../App.css";
import dbPendingAmount from "/assets/images/musipay.png";
import dbEventCreated from "/assets/images/db-event-created.png";
import penpay from "/assets/images/penpay.png";
import dbrevenue from "/assets/images/db-revenue.png";
import dbmusicians from "/assets/images/db-musicians.png";
import RevenueGraph from "./Charts/RevenueGraph";
import { Typography } from "@mui/material";

const Dashboard = () => {
  const cardData = [
    {
      title: "Total Revenue",
      detail: "Total revenue from subscriptions",
      count: "$10,000",
      image: dbrevenue,
    },
    {
      title: "Total Pending Payments",
      detail:
        "Total pending payments of musicians. After event completion is available ",
      count: "$20",
      image: dbPendingAmount,
    },
    {
      title: "Total Musician Payments",
      detail: "The Musicians Payments available to withdraw",
      count: "$2000",
      image: penpay,
    },
    {
      title: "Total Active Events",
      detail: "The Number total active events",
      count: "20",
      image: dbEventCreated,
    },
  ];
  const numcardData = [
    {
      title: "Musicians",
      count: 5000,
      image: dbmusicians,
    },
    {
      title: "Event Organizers",
      count: 1200,
      image: dbmusicians,
    },
    {
      title: "Withdraw Requests",
      count: 350,
      image: dbmusicians,
    },
    {
      title: "Refund Requests",
      count: 180,
      image: dbmusicians,
    },
  ];

  return (
    <div
      className="ms-3 mt-2 px-4 py-4"
      style={{ backgroundColor: "#f5f5f5", maxWidth: "98%" }}
    >
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
                      fontSize: "20px",
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
        <div
          className="row g-4 mb-4 p-1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
          }}
        >
          {numcardData.map((card, index) => (
            <div key={index} className="bg-white mb-4">
              <div className="d-flex gap-2 align-items-center border-bottom p-2">
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: "30px", height: "30px" }}
                />
                <Typography
                  sx={{
                    color: "013C61",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  {card.title}
                </Typography>
              </div>
              <Typography
                className="px-3 py-1"
                sx={{
                  color: "#000E17",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "24px",
                }}
              >
                {card.count}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <div
            className="chart-container"
            style={{ width: "100%", height: "400px" }}
          >
            <RevenueGraph
              borderColor="rgb(75,192,192)"
              color="rgb(157,215,238)"
              width="100%"
              height="100%"
              gradientId={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
