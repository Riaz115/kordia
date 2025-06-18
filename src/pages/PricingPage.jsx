import React, { useState } from "react";
import { Typography, Box, Tabs, Tab, Grid } from "@mui/material";
import klogo from "/assets/images/Logo.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
const PricingPage = () => {
  const [eventOrganizerTab, setEventOrganizerTab] = useState(0);
  const [musicianTab, setMusicianTab] = useState(0);

  const handleEventOrganizerTabChange = (event, newValue) => {
    setEventOrganizerTab(newValue);
  };

  const handleMusicianTabChange = (event, newValue) => {
    setMusicianTab(newValue);
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
        "Cancel anytime",
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
    <>
      <section className="about-page-top bg-main-blue pt-90 d-flex align-items-center">
        <div className="mycontainer text-center">
          <Typography
            sx={{
              fontSize: { xs: "48px", sm: "48px", lg: "60px" }, // Adjust for small screens
              letterSpacing: "2px", // Add gap between letters
              fontFamily: "Bebas Neue",
            }}
            className=" text-main-orange text-uppercase"
          >
            Choose Your Perfect Plan
          </Typography>

          <Typography
            className="mb-0 text-white font-poppins"
            sx={{
              margin: "0 auto",
              maxWidth: { xs: "90%", lg: "40%" }, // Adjust for responsiveness
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            Select the subscription that fits your needs and unlock the full
            potential of Kordia.
          </Typography>
        </div>
      </section>
      <div class="clip-btm-rt-box"></div>
      <div className="py-3 text-center  ">
        <Typography
          sx={{
            fontSize: 24,
            letterSpacing: "2px",
            fontFamily: "Poppins",
            color: "#034F75",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
          className="text-center"
        >
          For Event Organizer
        </Typography>

        {/* Tabs Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2, // Margin top for spacing
          }}
        >
          <Tabs
            value={eventOrganizerTab}
            onChange={handleEventOrganizerTabChange}
            TabIndicatorProps={{
              style: { display: "none" }, // Hides the default indicator
            }}
            sx={{
              backgroundColor: "#BFCDD6",
              border: "1px solid #034F75",
              borderRadius: "8px",
              p: "2px", // Padding inside the tabs
              width: { xs: "300px", md: "500px" },
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
                backgroundColor:
                  eventOrganizerTab === 0 ? "#FFFFFF" : "transparent",
                color: eventOrganizerTab === 0 ? "#034F75" : "#034F75",
                fontWeight: eventOrganizerTab === 0 ? 600 : 400,
                borderRadius: "5px",
              }}
            />
            <Tab
              label="Quarterly"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontSize: { xs: 8, md: 14 },
                flex: 1,
                px: 2,
                backgroundColor:
                  eventOrganizerTab === 1 ? "#FFFFFF" : "transparent",
                color: eventOrganizerTab === 1 ? "#034F75" : "#034F75",
                fontWeight: eventOrganizerTab === 1 ? 600 : 400,
                borderRadius: "5px",
              }}
            />
            <Tab
              label="Biannually"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontSize: { xs: 8, md: 14 },
                flex: 1,
                px: 2,
                backgroundColor:
                  eventOrganizerTab === 2 ? "#FFFFFF" : "transparent",
                color: eventOrganizerTab === 2 ? "#034F75" : "#034F75",
                fontWeight: eventOrganizerTab === 2 ? 600 : 400,
                borderRadius: "5px",
              }}
            />
            <Tab
              label="Annually"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontSize: { xs: 8, md: 14 },
                flex: 1,
                px: 2,
                backgroundColor:
                  eventOrganizerTab === 3 ? "#FFFFFF" : "transparent",
                color: eventOrganizerTab === 3 ? "#034F75" : "#034F75",
                fontWeight: eventOrganizerTab === 3 ? 600 : 400,
                borderRadius: "5px",
              }}
            />
          </Tabs>
        </Box>

        {/* Tab Content Section */}
        <Box sx={{ mt: 4 }}>
          {eventOrganizerTab === 0 && <Box></Box>}
          {eventOrganizerTab === 1 && <Box></Box>}
          {eventOrganizerTab === 2 && <Box></Box>}
          {eventOrganizerTab === 3 && <Box></Box>}
        </Box>

        <Typography
          sx={{
            fontSize: 16,
            letterSpacing: "2px",
            fontFamily: "Poppins",
            color: "#034F75",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
          className="text-center mt-2"
        >
          Save 2 months by choosing the yearly plan!
        </Typography>

        <div className="mt-5 ">
          {eventOrganizerTab === 0 && (
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
                  maxWidth: "1200px", // Set max width to limit the container size
                  paddingLeft: "15px", // Add space from left
                  paddingRight: "15px", // Add space from right
                }}
              >
                {plansmonth.map((plan, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <div
                      className="d-flex flex-column bg-main-blue text-white p-4 align-items-start font-poppins pb-5"
                      style={{
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: plan.features.length > 4 ? "auto" : "350px", // Adjust height based on content
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
          {eventOrganizerTab === 1 && (
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
                  maxWidth: "1200px", // Set max width to limit the container size
                  paddingLeft: "15px", // Add space from left
                  paddingRight: "15px", // Add space from right
                }}
              >
                {plansyearly.map((plan, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <div
                      className="d-flex flex-column bg-main-blue text-white p-4 align-items-start font-poppins pb-5"
                      style={{
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: plan.features.length > 4 ? "auto" : "350px", // Adjust height based on content
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
          {eventOrganizerTab === 2 && (
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
                  maxWidth: "1200px", // Set max width to limit the container size
                  paddingLeft: "15px", // Add space from left
                  paddingRight: "15px", // Add space from right
                }}
              >
                {plansmonth.map((plan, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <div
                      className="d-flex flex-column bg-main-blue text-white p-4 align-items-start font-poppins pb-5"
                      style={{
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: plan.features.length > 4 ? "auto" : "350px", // Adjust height based on content
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
          {eventOrganizerTab === 3 && (
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
                  maxWidth: "1200px", // Set max width to limit the container size
                  paddingLeft: "15px", // Add space from left
                  paddingRight: "15px", // Add space from right
                }}
              >
                {plansmonth.map((plan, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <div
                      className="d-flex flex-column bg-main-blue text-white p-4 align-items-start font-poppins pb-5"
                      style={{
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: plan.features.length > 4 ? "auto" : "350px", // Adjust height based on content
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
        </div>
      </div>

      <div className="py-3 text-center  ">
        <Typography
          sx={{
            fontSize: 24,
            letterSpacing: "2px",
            fontFamily: "Poppins",
            color: "#034F75",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
          className="text-center"
        >
          For Musician
        </Typography>

        {/* Tabs Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2, // Margin top for spacing
          }}
        >
          <Tabs
            value={musicianTab}
            onChange={handleMusicianTabChange}
            TabIndicatorProps={{
              style: { display: "none" }, // Hides the default indicator
            }}
            sx={{
              backgroundColor: "#BFCDD6",
              border: "1px solid #034F75",
              borderRadius: "8px",
              p: "2px", // Padding inside the tabs
              width: { xs: "300px", md: "500px" },
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
                backgroundColor: musicianTab === 0 ? "#FFFFFF" : "transparent",
                color: musicianTab === 0 ? "#034F75" : "#034F75",
                fontWeight: musicianTab === 0 ? 600 : 400,
                borderRadius: "5px",
              }}
            />
            <Tab
              label="Quarterly"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontSize: { xs: 8, md: 14 },
                flex: 1,
                px: 2,
                backgroundColor: musicianTab === 1 ? "#FFFFFF" : "transparent",
                color: musicianTab === 1 ? "#034F75" : "#034F75",
                fontWeight: musicianTab === 1 ? 600 : 400,
                borderRadius: "5px",
              }}
            />
            <Tab
              label="Biannually"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontSize: { xs: 8, md: 14 },
                flex: 1,
                px: 2,
                backgroundColor: musicianTab === 2 ? "#FFFFFF" : "transparent",
                color: musicianTab === 2 ? "#034F75" : "#034F75",
                fontWeight: musicianTab === 2 ? 600 : 400,
                borderRadius: "5px",
              }}
            />
            <Tab
              label="Annually"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontSize: { xs: 8, md: 14 },
                flex: 1,
                px: 2,
                backgroundColor: musicianTab === 3 ? "#FFFFFF" : "transparent",
                color: musicianTab === 3 ? "#034F75" : "#034F75",
                fontWeight: musicianTab === 3 ? 600 : 400,
                borderRadius: "5px",
              }}
            />
          </Tabs>
        </Box>

        {/* Tab Content Section */}

        <div className="mt-5 ">
          {musicianTab === 0 && (
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
                  maxWidth: "1200px", // Set max width to limit the container size
                  paddingLeft: "15px", // Add space from left
                  paddingRight: "15px", // Add space from right
                }}
              >
                {plansmonth.map((plan, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <div
                      className="d-flex flex-column bg-main-blue text-white p-4 align-items-start font-poppins pb-5"
                      style={{
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: plan.features.length > 4 ? "auto" : "350px", // Adjust height based on content
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
          {musicianTab === 1 && (
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
                  maxWidth: "1200px", // Set max width to limit the container size
                  paddingLeft: "15px", // Add space from left
                  paddingRight: "15px", // Add space from right
                }}
              >
                {plansyearly.map((plan, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <div
                      className="d-flex flex-column bg-main-blue text-white p-4 align-items-start font-poppins pb-5"
                      style={{
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: plan.features.length > 4 ? "auto" : "350px", // Adjust height based on content
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
          {musicianTab === 2 && (
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
                  maxWidth: "1200px", // Set max width to limit the container size
                  paddingLeft: "15px", // Add space from left
                  paddingRight: "15px", // Add space from right
                }}
              >
                {plansmonth.map((plan, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <div
                      className="d-flex flex-column bg-main-blue text-white p-4 align-items-start font-poppins pb-5"
                      style={{
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: plan.features.length > 4 ? "auto" : "350px", // Adjust height based on content
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
          {musicianTab === 3 && (
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
                  maxWidth: "1200px", // Set max width to limit the container size
                  paddingLeft: "15px", // Add space from left
                  paddingRight: "15px", // Add space from right
                }}
              >
                {plansmonth.map((plan, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <div
                      className="d-flex flex-column bg-main-blue text-white p-4 align-items-start font-poppins pb-5"
                      style={{
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: plan.features.length > 4 ? "auto" : "350px", // Adjust height based on content
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
        </div>
      </div>
      <div class="clip-top-lft-box"></div>
    </>
  );
};

export default PricingPage;
