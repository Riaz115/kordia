import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import eventorganizer2 from "/assets/images/eventorganizer2.png";
import testimonialsprofile from "/assets/images/Erin-Press.png";
import { FaArrowRight } from "react-icons/fa";
import signatureimg from "/assets/images/signature-img.png";
import { Box, Grid, Typography } from "@mui/material";
import ReactSignatureCanvas from "react-signature-canvas";

const EventQuoteModal = ({ show, handleClose, status, data }) => {
  const sigCanvas = useRef(null); // Reference to the signature canvas

  // Function to clear the canvas
  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const statusStyles = {
    active: {
      color: "#2ab91d",
      fontWeight: "bold",
      backgroundColor: "#d0efcd",
      fontSize: "25px",
      fontFamily: "Poppins",
    },
    pending: {
      color: "#d9ae02",
      fontSize: "14px",
      backgroundColor: "#fff5cc",
      borderRadius: "20px",
      padding: "5px 10px",
    },
  };

  const statusText = status === "active" ? "Active" : "Pending";
  const statusStyle =
    status === "active" ? statusStyles.active : statusStyles.pending;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      style={{ zIndex: 15000 }}
    >
      <Modal.Header>
        <Modal.Title
          className="w-100"
          style={{
            color: "#003a5e",
            fontWeight: 700,
            fontSize: "25px",
            fontFamily: "Poppins",
          }}
        >
          <Grid
            container
            alignItems="center"
            sx={{
              flexDirection: {
                xs: "column", // For small and medium screens, stack vertically
                md: "row", // For large screens, align horizontally
              },
            }}
          >
            {/* Event Quote */}
            <Grid
              item
              xs={12}
              md
              sx={{
                textAlign: {
                  xs: "start", // Align Event Quote to the start on small/medium screens
                  md: "end", // Center align on large screens
                },
              }}
            >
              <Typography
                variant="h5"
                component="span"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  color: "#003a5e",
                }}
              >
                Event Quote
              </Typography>
            </Grid>

            {/* Status */}
            <Grid
              item
              xs={12}
              md
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "start", // Align Status to the start on small/medium screens
                  md: "flex-end", // Align Status to the end on large screens
                },
                mt: {
                  xs: 2, // Add spacing on small/medium screens to separate Event Quote and Status
                  md: 0, // No margin needed on large screens
                },
              }}
            >
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Bebas Neue",
                  color: "#003a5e",
                }}
              >
                Status:
              </Typography>
              {status === "pending" ? (
                <Box
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "20px",
                    padding: "5px 10px",
                    display: "inline-block",
                  }}
                >
                  {statusText}
                </Box>
              ) : (
                <Box
                  sx={{
                    ...statusStyle,
                    display: "inline-block",
                  }}
                >
                  {statusText}
                </Box>
              )}
            </Grid>
          </Grid>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Box
          className="row"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "row" },
            justifyContent: "space-between",
          }}
        >
          {/* Left Section: Event Organizer */}
          <Box
            className=" col-lg-6 mb-5"
            sx={{
              flex: 1,
              paddingRight: "20px",
              borderRight: { xs: "0px solid #003a5e", md: "3px solid #003a5e" },
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "15px",
                fontSize: "11px",
                fontFamily: "Poppins",
                color: "#FF9700",
                backgroundColor: "#003a5e",
                padding: "7px 10px",
                borderRadius: "10px",
                width: "120px",
                textAlign: "center",
              }}
            >
              Event Organizer
            </p>
            <div  style={{ display: "flex", alignItems: "center" }}>
              <img
                src={eventorganizer2}
                alt="Organizer"
                style={{
                  borderRadius: "50%",
                  marginRight: "10px",
                  width: "80px",
                  height: "80px",
                  borderTop: "2px solid orange",
                  padding: 3,
                  borderRight: "2px solid orange",
                  borderBottom: "2px solid orange",
                  borderLeft: "2px solid white",
                }}
              />
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    color: "#003a5e",
                    margin: "0",
                  }}
                >
                  Paityn Lipshutz
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    fontFamily: "Poppins",
                    color: "#809DAF",
                    margin: "0",
                  }}
                >
                  Event Organizer
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    fontFamily: "Poppins",
                    color: "#809DAF",
                    margin: "0",
                  }}
                >
                  {" "}
                  <strong>Email :</strong> name@example.com
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    fontFamily: "Poppins",
                    color: "#809DAF",
                    margin: "0",
                  }}
                >
                  <strong>Phone:</strong>+1234567890
                </p>
              </div>
            </div>
            <div style={{ marginTop: "20px", marginLeft: "0" }}>
              <p
                style={{
                  fontWeight: 400,
                  marginBottom: "10px",
                  fontSize: "18px",
                  fontFamily: "Bebas Neue",
                  color: "#003a5e",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaArrowRight style={{ marginRight: "10px" }} />
                Event Information
              </p>
              <div
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  justifyContent: "space-between",

                  fontWeight: 400,
                  color: "#013C61",
                }}
              >
                <Typography style={{ fontSize: "12px", fontFamily: "Poppins" }}>
                  <strong>Name:</strong> Summer Jazz Festival
                </Typography>
                <p style={{ fontSize: "12px", fontFamily: "Poppins" }}>
                  <strong>Event Type:</strong> Wedding
                </p>
              </div>
              <div style={{ marginLeft: "30px" }}>
                <Typography
                  style={{
                    fontSize: "12px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#013C61",
                    margin: "0",
                  }}
                >
                  <strong>Location:</strong> Lisbon
                </Typography>
              </div>
              <div style={{ marginLeft: "30px" }}>
                {" "}
                <Typography
                  style={{
                    fontSize: "12px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#809DAF",
                    marginTop: 2,
                  }}
                >
                  <strong style={{ color: "#013C61" }}>Description:</strong>
                  <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                  mattis. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </Typography>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p
                style={{
                  fontWeight: 400,
                  marginBottom: "10px",
                  fontSize: "18px",
                  fontFamily: "Bebas Neue",
                  color: "#003a5e",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaArrowRight style={{ marginRight: "10px" }} />
                Schedule
              </p>
              <div
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  justifyContent: "space-between",

                  fontWeight: 400,
                  color: "#013C61",
                }}
              >
                <Typography style={{ fontSize: "12px", fontFamily: "Poppins" }}>
                  <strong> Event Date:</strong> 22/12/25
                </Typography>
                <Typography style={{ fontSize: "12px", fontFamily: "Poppins" }}>
                  <strong>Event Time:</strong> 09:00 PM
                </Typography>
              </div>
              <div style={{ marginLeft: "30px" }}>
                <Typography
                  style={{
                    fontSize: "12px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#013C61",
                    margin: "0",
                  }}
                >
                  <strong>Event Duration:</strong> 2 Hours
                </Typography>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p
                style={{
                  fontWeight: 400,
                  marginBottom: "10px",
                  fontSize: "18px",
                  fontFamily: "Bebas Neue",
                  color: "#003a5e",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaArrowRight style={{ marginRight: "10px" }} />
                Performance Details
              </p>
              <div
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  fontWeight: 400,
                  color: "#013C61",
                }}
              >
                <Typography
                  style={{
                    fontSize: "12px",
                    fontFamily: "Poppins",
                  }}
                >
                  <strong>Performance Type:</strong> With Band
                </Typography>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <p
                style={{
                  fontWeight: 400,
                  marginBottom: "10px",
                  fontSize: "18px",
                  fontFamily: "Bebas Neue",
                  color: "#003a5e",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaArrowRight style={{ marginRight: "10px" }} />
                Contact Information
              </p>
              <div
                style={{
                  marginLeft: "30px",

                  fontWeight: 400,
                  color: "#013C61",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography style={{ fontSize: "12px", fontFamily: "Poppins" }}>
                  <strong>Contractor role:</strong> John
                </Typography>
                <Typography style={{ fontSize: "12px", fontFamily: "Poppins" }}>
                  <strong>Phone :</strong> +1234567890
                </Typography>
              </div>
              <Typography
                style={{
                  marginLeft: "30px",
                  color: "#013C61",
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  marginTop: "10px",
                }}
              >
                <strong>Email:</strong> johndoe@example.com
              </Typography>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p
                style={{
                  fontWeight: 400,
                  marginBottom: "10px",
                  fontSize: "18px",
                  fontFamily: "Bebas Neue",
                  color: "#003a5e",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaArrowRight style={{ marginRight: "10px" }} />
                Budget Information
              </p>
              <Typography
                style={{
                  marginLeft: "30px",
                  color: "#013C61",
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  marginTop: "10px",
                }}
              >
                <strong>Quoted Budget:</strong> $1500
              </Typography>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p
                style={{
                  fontWeight: 400,
                  marginBottom: "10px",
                  fontSize: "15px",
                  fontFamily: "Bebas Neue",
                  color: "#003a5e",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaArrowRight style={{ marginRight: "10px" }} />
                Signature *
              </p>
              <div
                style={{
                  marginTop: "20px",
                  marginLeft: "30px",
                  width: "90%",
                  height: "100px",
                  backgroundColor: "white",
                  border: "1px solid #b0b4b6",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <img
                  src={signatureimg}
                  width="60%"
                  height="70%"
                  alt="Signature"
                  style={{ backgroundColor: "white" }}
                />
              </div>
            </div>
          </Box>

          {/* Right Section: Booked Musician */}
          <div className=" col-lg-6" style={{ flex: 1, paddingLeft: "20px" }}>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "15px",
                fontSize: "11px",
                fontFamily: "Poppins",
                color: "#FF9700",
                backgroundColor: "#003a5e",
                padding: "7px 10px",
                borderRadius: "10px",
                width: "120px",
                textAlign: "center",
              }}
            >
              Booked Musician
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={testimonialsprofile}
                alt="Musician"
                style={{
                  borderRadius: "50%",
                  marginRight: "10px",
                  width: "80px",
                  height: "80px",
                  borderTop: "2px solid orange",
                  padding: 3,
                  borderRight: "2px solid orange",
                  borderBottom: "2px solid orange",
                  borderLeft: "2px solid white",
                }}
              />
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    color: "#003a5e",
                    margin: "0",
                  }}
                >
                  Paityn Lipshutz
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    fontFamily: "Poppins",
                    color: "#809DAF",
                    margin: "0",
                  }}
                >
                  Musician
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    fontFamily: "Poppins",
                    color: "#809DAF",
                    margin: "0",
                  }}
                >
                  <strong>Email :</strong> name@example.com
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    fontFamily: "Poppins",
                    color: "#809DAF",
                    margin: "0",
                  }}
                >
                  <strong>Phone:</strong>+1234567890
                </p>
              </div>
            </div>
            <div className="" style={{ marginTop: "20px" }}>
              <div className="d-flex align-items-center justify-content-between">
                <h3
                  style={{
                    fontWeight: 400,
                    marginBottom: "10px",
                    fontSize: "15px",
                    fontFamily: "Bebas Neue",
                    color: "#003a5e",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaArrowRight style={{ marginRight: "10px" }} />
                  Your Signature *
                </h3>
                <button
                  onClick={clearSignature}
                  style={{
                    border: "1px solid #FF9700", // Orange border
                    backgroundColor: "transparent", // Transparent background
                    color: "#FF9700",
                    padding: "5px 12px", // Padding for the button
                    borderRadius: "5px", // Slightly rounded corners
                    fontSize: "10px", // Font size
                    fontFamily: "Poppins",
                    cursor: "pointer",
                  }}
                >
                  Clear
                </button>
              </div>
              <div
                style={{
                  marginTop: "10px",
                  width: "100%", // Ensure the parent div takes full width
                  height: "100px", // Fixed height
                  border: "1px solid #b0b4b6",
                  backgroundColor: "white",
                  position: "relative",
                }}
              >
                {/* Signature Canvas */}
                <ReactSignatureCanvas
                  ref={sigCanvas}
                  penColor="#003a5e"
                  canvasProps={{
                    style: {
                      position: "absolute", // Ensure the canvas covers the parent completely
                      top: 0,
                      left: 0,
                      width: "100%", // Full width of the parent
                      height: "100%", // Full height of the parent
                    },
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "end",
                marginTop: 8,
              }}
            >
              <button
                onClick={handleClose}
                style={{
                  border: "2px solid #FF9700", // Orange border
                  backgroundColor: "transparent", // Transparent background
                  color: "orange", // Orange text color
                  padding: "8px 16px", // Padding for the button
                  borderRadius: "5px", // Slightly rounded corners
                  fontSize: "16px", // Font size
                  fontFamily: "Bebas Neue",
                  cursor: "pointer",
                }}
              >
                Reject Quote
              </button>
              <button
                style={{
                  backgroundColor: "#FF9700", // Orange background
                  color: "white", // White text color
                  border: "none", // No border
                  padding: "8px 16px", // Padding for the button
                  borderRadius: "5px", // Slightly rounded corners
                  fontSize: "16px", // Font size
                  fontFamily: "Bebas Neue",
                  cursor: "pointer",
                }}
              >
                Accept Quote
              </button>
            </div>
          </div>
        </Box>
      </Modal.Body>
    </Modal>
  );
};

export default EventQuoteModal;
