import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import eventorganizer2 from "/assets/images/eventorganizer2.png";
import testimonialsprofile from "/assets/images/testimonials-profile.jpeg";
import { FaArrowRight } from "react-icons/fa";
import signatureimg from "/assets/images/signature-img.png";
import { Box, Grid, Typography } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import SignatureCanvas from "react-signature-canvas";

const EventDetailStatus = ({ show, handleClose, status, data }) => {
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between", // Align title on the left and close icon on the right
              alignItems: "center",
            }}
          >
            {/* Event Details Heading */}
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 700,
                color: "#FF9700",
              }}
            >
              Event Details
            </Typography>

            {/* Close Icon */}
            <IoIosClose
              size={30}
              color="#003a5e"
              style={{ cursor: "pointer" }}
              onClick={handleClose} // Handle closing logic here
            />
          </div>
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
            <div style={{ display: "flex", alignItems: "center" }}>
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
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  color: "#013C61",
                }}
              >
                <Typography sx={{ fontFamily: "Poppins", fontSize: "12px" }}>
                  <strong>Name:</strong> Summer Jazz Festival
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", fontSize: "12px" }}>
                  <strong>Event Type:</strong> Wedding
                </Typography>
              </div>
              <div style={{ marginLeft: "30px" }}>
                <Typography
                  style={{
                    fontSize: "12px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#013C61",
                    marginTop: "2px",
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
                    marginTop: "2px",
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
              <Typography
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
              </Typography>
              <div
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  color: "#013C61",
                }}
              >
                <Typography sx={{ fontFamily: "Poppins", fontSize: "12px" }}>
                  <strong> Event Date:</strong> 22/12/25
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", fontSize: "12px" }}>
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
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  color: "#013C61",
                }}
              >
                <Typography style={{ fontSize: "12px", fontFamily: "Poppins" }}>
                  <strong>Performance Type:</strong> With Band
                </Typography>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <Typography
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
              </Typography>
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
          </Box>

          {/* Right Section: Booked Musician */}
          <div className=" col-lg-6" style={{ flex: 1, paddingLeft: "20px" }}>
            <div>
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
                Proposal
              </p>

              {/* Textarea below the proposal */}
              <textarea
                value={
                  "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
                }
                style={{
                  width: "100%",
                  minHeight: "140px",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  resize: "vertical",
                  marginTop: "10px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
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
                  width: "100%",
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
                  width="100%"
                  height="100%"
                  alt="Signature"
                  style={{ backgroundColor: "white" }}
                />
              </div>
            </div>
          </div>
        </Box>
      </Modal.Body>
    </Modal>
  );
};

export default EventDetailStatus;
