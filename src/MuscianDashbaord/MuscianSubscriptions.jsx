import React, { useState } from "react";
import { Typography, Box, Tabs, Tab, Grid } from "@mui/material";
import klogo from "/assets/images/Logo.png";
import { IoIosCheckmarkCircle } from "react-icons/io";

const MuscianSubscriptions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const plansmonth = [
    {
      title: "Basic Organizer Plan",
      price: "$25",
      features: [
        "Unlimited access to features",
        "Priority customer support",
        "Exclusive content updates",
        "Cancel anytime",
        "Two months free with yearly plan",
      ],
    },
    {
      title: "Standard Organizer Plan",
      price: "$50",
      features: [
        "Unlimited access to all features",
        "Priority customer support",
        "Exclusive content updates",
        "Cancel anytime",
        "Four months free with yearly plan",
      ],
    },
    {
      title: "Premium Organizer Plan",
      price: "$75",
      features: [
        "Unlimited access to premium features",
        "24/7 customer support",
        "Exclusive content updates",
        "Cancel anytime",
        "Six months free with yearly plan",
      ],
    },
  ];

  const plansyearly = [
    {
      title: "Basic Organizer Plan",
      price: "$45",
      features: [
        "Unlimited access to features",
        "Priority customer support",
        "Exclusive content updates",
        "Cancel anytime",
        "Two months free with yearly plan",
      ],
    },
    {
      title: "Standard Organizer Plan",
      price: "$70",
      features: [
        "Unlimited access to all features",
        "Priority customer support",
        "Exclusive content updates",
        "Cancel anytime",
        "Four months free with yearly plan",
        "Cancel anytime",
      ],
    },
    {
      title: "Premium Organizer Plan",
      price: "$105",
      features: [
        "Unlimited access to premium features",
        "24/7 customer support",
        "Exclusive content updates",
        "Cancel anytime",
        "Six months free with yearly plan",
      ],
    },
  ];
  return (
    <div>
      <div className="py-3 text-center ">
        {/* Tabs Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2, // Margin top for spacing
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            TabIndicatorProps={{
              style: { display: "none" }, // Hides the default indicator
            }}
            sx={{
              backgroundColor: "#BFCDD6",
              border: "1px solid #034F75",
              borderRadius: "8px",
              p: "2px", // Padding inside the tabs
              width: { xs: "250px", md: "250px" },
            }}
          >
            <Tab
              label="Monthly"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontSize: { xs: 8, md: 14 },
                flex: 1,
                px: 2,
                backgroundColor: activeTab === 0 ? "#FFFFFF" : "transparent",
                color: activeTab === 0 ? "#034F75" : "#034F75",
                fontWeight: activeTab === 0 ? 600 : 400,
                borderRadius: "5px",
              }}
            />
            <Tab
              label="Yearly"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontSize: { xs: 8, md: 14 },
                flex: 1,
                px: 2,
                backgroundColor: activeTab === 1 ? "#FFFFFF" : "transparent",
                color: activeTab === 1 ? "#034F75" : "#034F75",
                fontWeight: activeTab === 1 ? 600 : 400,
                borderRadius: "5px",
              }}
            />
          </Tabs>
        </Box>

        <div className="mt-5">
          {activeTab === 0 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2, // Margin top for spacing
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: "center",
                  maxWidth: "1200px", // Set max width to limit the container size
                  paddingLeft: "45px",
                  paddingRight: "45px",
                }}
              >
                {plansmonth.map((plan, index) => (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                    <div
                      className="d-flex flex-column bg-main-blue text-white p-4 align-items-start font-poppins pb-5"
                      style={{
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                        height: plan.features.length > 4 ? "auto" : "350px",
                      }}
                    >
                      <h3 style={{ fontFamily: "Poppins", fontSize: "16px" }}>
                        {plan.title}
                      </h3>
                      <img style={{ width: "150px" }} src={klogo} alt="img" />
                      <p className="mt-4">
                        <span style={{ fontWeight: 700, fontSize: "30px" }}>
                          {plan.price}
                        </span>
                        /month
                      </p>
                      <button
                        className="bg-main-orange rounded-4 w-100 text-white"
                        style={{
                          padding: "10px",
                          fontSize: "18px",
                          border: "none",
                        }}
                      >
                        Get Started Now
                      </button>
                      <div className="mt-4">
                        {plan.features.map((feature, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center justify-content-start mb-2"
                            style={{
                              color: "#034F75",
                              fontSize: "16px",
                              fontFamily: "Poppins",
                            }}
                          >
                            <IoIosCheckmarkCircle
                              size={20}
                              style={{ color: "#ffff", marginRight: "8px" }}
                            />
                            <p
                              className="mb-0 text-white"
                              style={{ textAlign: "left", fontSize: "12px" }}
                            >
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          {activeTab === 1 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2, // Margin top for spacing
              }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  justifyContent: "center",
                  maxWidth: "1200px",
                  paddingLeft: "45px",
                  paddingRight: "45px",
                }}
              >
                {plansyearly.map((plan, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                    <div
                      className="d-flex flex-column bg-main-blue text-white p-4 align-items-start font-poppins pb-5"
                      style={{
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                        height: plan.features.length > 4 ? "auto" : "350px",
                      }}
                    >
                      <h3 style={{ fontFamily: "Poppins", fontSize: "16px" }}>
                        {plan.title}
                      </h3>
                      <img style={{ width: "150px" }} src={klogo} alt="img" />
                      <p className="mt-4">
                        <span style={{ fontWeight: 700, fontSize: "30px" }}>
                          {plan.price}
                        </span>
                        /year
                      </p>
                      <button
                        className="bg-main-orange rounded-4 w-100 text-white"
                        style={{
                          padding: "10px",
                          fontSize: "18px",
                          border: "none",
                        }}
                      >
                        Get Started Now
                      </button>
                      <div className="mt-4">
                        {plan.features.map((feature, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center justify-content-start mb-2"
                            style={{
                              color: "#034F75",
                              fontSize: "16px",
                              fontFamily: "Poppins",
                            }}
                          >
                            <IoIosCheckmarkCircle
                              size={20}
                              style={{ color: "#ffff", marginRight: "8px" }}
                            />
                            <p
                              className="mb-0 text-white"
                              style={{ textAlign: "left", fontSize: "12px" }}
                            >
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};

export default MuscianSubscriptions;
