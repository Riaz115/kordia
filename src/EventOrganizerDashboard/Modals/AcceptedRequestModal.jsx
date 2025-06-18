import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import eventorganizer2 from "/assets/images/eventorganizer2.png";
import testimonialsprofile from "/assets/images/testimonials-profile.jpeg";
import { FaArrowRight } from "react-icons/fa";
import signatureimg from "/assets/images/signature-img.png";

const AcceptedRequestModal = ({ show, handleClose, data }) => {
  const handleAccept = () => {
    //   handleShowBookingPayment();
    handleClose();
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      style={{ zIndex: 15000 }}
    >
      <Modal.Header closeButton style={{ borderBottom: "none" }}>
        <Modal.Title className="w-100">
          <div
            className="d-flex justify-content-between align-items-center flex-lg-row flex-md-column flex-sm-column flex-xs-column"
            style={{
              display: "flex",
              justifyContent: "space-between", // Distribute space between the items
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Event Details (Left-Aligned) */}
            <p
              style={{
                fontSize: "25px",
                fontFamily: "Poppins",
                fontWeight: 700,
                color: "#FF9700",
                margin: 0, // Remove default margin
                flex: 1, // Ensure it takes up remaining space
                textAlign: "start", // Align to the left
              }}
            >
              Event Detailssss
            </p>
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
          </div>

          {/* Right Section: Booked Musician */}
          <div
            className="col-md-6 col-sm-12 col-xs-12 col-lg-6"
            style={{ flex: 1, paddingLeft: "20px" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={testimonialsprofile}
                alt="Musician"
                style={{
                  borderRadius: "50%",
                  marginRight: "10px",
                  width: "80px",
                  height: "80px",
                  borderTop: "2px solid #003a5e",
                  padding: 3,
                  borderRight: "2px solid #003a5e",
                  borderBottom: "2px solid #003a5e",
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
                Proposal
              </p>
              <textarea
                style={{
                  marginTop: "5px",
                  marginLeft: "18px",
                  backgroundColor: "white",
                  border: "1px solid #b0b4b6",
                  padding: "10px",
                  fontSize: "10px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  color: "#809DAF",
                  width: "90%", // Adjust width as needed
                  height: "350px", // Adjust height as needed
                  resize: "none", // Prevent resizing if needed
                  overflow: "auto", // Make sure the content is scrollable if it's too large
                }}
                defaultValue={`Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec`}
                rows={6} // You can change this value to adjust the height of the textarea
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
                className=""
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

            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "end",
                marginTop: 15,
                marginRight: "5px",
              }}
            >
              {/* <button
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
              </button> */}
              {/* <button
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
                disabled={true}
                onClick={handleAccept}
              >
                Accept Quote
              </button> */}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AcceptedRequestModal;
