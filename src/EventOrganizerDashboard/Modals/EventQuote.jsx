import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import eventorganizer2 from "/assets/images/eventorganizer2.png";
import testimonialsprofile from "/assets/images/testimonials-profile.jpeg";
import { FaArrowRight } from "react-icons/fa";
import signatureimg from "/assets/images/signature-img.png";

const EventQuote = ({ show, handleClose, status, data }) => {
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
        <Modal.Title className="w-100">
          <div
            className="d-flex align-items-center flex-lg-row flex-md-column flex-sm-column flex-xs-column"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap", // Allows wrapping of content on small screens

              fontWeight: 700,
              fontSize: "25px",
              fontFamily: "Poppins",
              padding: "10px", // Adds padding for better appearance
              boxSizing: "border-box",
            }}
          >
            {/* Left Section */}
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px", // Space between rows for small screens
                textAlign: "center",
                color: "white",
              }}
            ></div>

            {/* Center Section */}
            <div
              style={{
                flex: 1,
                textAlign: "center",
                marginBottom: "10px", // Space between rows for small screens
                color: "#003a5e",
              }}
            >
              Event Quote
            </div>

            {/* Right Section */}
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end", // Centered on smaller screens
                alignItems: "center",
                color: "#003a5e",
              }}
            >
              <span
                className="me-2"
                style={{
                  fontSize: "30px",
                  fontFamily: "Bebas Neue",
                }}
              >
                Status:
              </span>
              {status === "pending" ? (
                <span
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "20px",
                    padding: "5px 10px",
                  }}
                >
                  {statusText}
                </span>
              ) : (
                <span
                  style={{
                    ...statusStyle,
                  }}
                >
                  {statusText}
                </span>
              )}
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Left Section: Event Organizer */}
          <div
            className="col-md-6 col-sm-12 col-xs-12 col-lg-6 mb-5"
            style={{
              flex: 1,
              paddingRight: "20px",
              borderRight: "3px solid #003a5e",
            }}
          >
            <style>
              {`
                @media (max-width: 490px) {
                  .col-md-6 {
                    border-right: none !important;
                  }
                }
              `}
            </style>
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="rounded-circle"
                style={{
                  marginRight: "10px",
                }}
              >
                <img
                  src={eventorganizer2}
                  alt="Organizer"
                  style={{
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    borderTop: "2px solid orange",
                    padding: 3,
                    borderRight: "2px solid orange",
                    borderBottom: "2px solid orange",
                    borderLeft: "2px solid white",
                  }}
                />
              </div>
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
                <p style={{ margin: "0" }}>
                  <strong>Name:</strong> Summer Jazz Festival
                </p>
                <p style={{ margin: "0", marginLeft: "20px" }}>
                  <strong>Type:</strong> Wedding
                </p>
              </div>
              <div style={{ marginLeft: "30px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#013C61",
                    margin: "0",
                  }}
                >
                  <strong>Location:</strong> Lisbon
                </p>
              </div>
              <div style={{ marginLeft: "30px" }}>
                {" "}
                <p
                  style={{
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#809DAF",
                    margin: "0",
                  }}
                >
                  <strong style={{ color: "#013C61" }}>Description:</strong>
                  <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                  mattis. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </p>
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
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  color: "#013C61",
                }}
              >
                <p style={{ margin: "0" }}>
                  <strong> Event Date:</strong> 22/12/25
                </p>
                <p style={{ margin: "0", marginLeft: "20px" }}>
                  <strong>Event Time:</strong> 09:00 PM
                </p>
              </div>
              <div style={{ marginLeft: "30px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#013C61",
                    margin: "0",
                  }}
                >
                  <strong>Event Duration:</strong> 2 Hours
                </p>
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
                <p style={{ margin: "0" }}>
                  <strong>Type:</strong> With Band
                </p>
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
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  color: "#013C61",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ margin: "0" }}>
                  <strong>Contractor role:</strong> John
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Phone :</strong> +1234567890
                </p>
              </div>
              <p
                style={{
                  marginLeft: "30px",
                  color: "#013C61",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  marginTop: "10px",
                }}
              >
                <strong>Email:</strong> johndoe@example.com
              </p>
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
              <p
                style={{
                  marginLeft: "30px",
                  color: "#013C61",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  marginTop: "10px",
                }}
              >
                <strong>Quoted Budget:</strong> $1500
              </p>
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
          </div>

          {/* Right Section: Booked Musician */}
          <div
            className="col-md-6 col-sm-12 col-xs-12 col-lg-6"
            style={{ flex: 1, paddingLeft: "20px" }}
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
              Booked Musician
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginRight: "10px",
                }}
              >
                <img
                  src={testimonialsprofile}
                  alt="Musician"
                  style={{
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    borderTop: "2px solid orange",
                    padding: 3,
                    borderRight: "2px solid orange",
                    borderBottom: "2px solid orange",
                    borderLeft: "2px solid white",
                  }}
                />
              </div>
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
                  marginLeft: "18px",
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
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EventQuote;
