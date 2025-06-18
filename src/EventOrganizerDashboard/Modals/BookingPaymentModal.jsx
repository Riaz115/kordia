import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import paymentIcon from "/assets/images/paymentIcon.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import PayNow from "./PayNow";

const BookingPaymentModal = ({ show, handleClose, data, handleOpenPayNow }) => {
  const handleNext = () => {
    handleOpenPayNow();
    handleClose();
  };

  return (
    <Modal
      show={show}
      size="lg"
      onHide={handleClose}
      centered
      style={{ zIndex: 15000 }}
    >
      <Modal.Header
        closeButton
        style={{
          borderBottom: "none",
          backgroundColor: "#f1f3f7",
          margin: "0",
        }}
      >
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: "#f1f3f7", padding: "20px" }}>
        <div
          className="d-flex align-items-center justify-content-center w-100"
          style={{
            fontSize: "40px",
            fontWeight: 700,
            color: "#FF9700",
            fontFamily: "Bebas Neue",
            textAlign: "center",
          }}
        >
          <img
            src={paymentIcon}
            alt="icon"
            className="img-fluid"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
          />
          Confirm Your Booking Payment
        </div>
        <div
          className="m-md-2 mb-2"
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p
            style={{
              fontWeight: 500,
              marginBottom: "15px",
              fontFamily: "Poppins",
              fontSize: "18px",
              color: "#003a5e",
            }}
          >
            <MdOutlineArrowForwardIos
              style={{
                marginRight: "10px",
                marginBottom: "5px",
                color: "#003a5e",
              }}
            />
            Event details
          </p>
          <div
            style={{
              borderBottom: "2px solid #809DAF",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              className="me-2"
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "29px",
                justifyContent: "space-between",
              }}
            >
              {[
                {
                  label: "Event Name:",
                  value: data?.eventName || "Summer Jazz Festival",
                },
                {
                  label: "Event Date:",
                  value: data?.eventDate || "11/11/2024",
                },
                { label: "Musician:", value: data?.musician || "John.." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="d-flex flex-column flex-sm-row align-items-center"
                  style={{
                    fontFamily: "Poppins",
                    color: "#809DAF",
                    fontSize: "16px",
                    fontWeight: 400,
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ minWidth: "180px" }}>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              fontWeight: 500,
              marginBottom: "15px",
              fontFamily: "Poppins",
              fontSize: "18px",
              color: "#003a5e",
            }}
          >
            <MdOutlineArrowForwardIos
              style={{
                marginRight: "10px",
                marginBottom: "5px",
                color: "#003a5e",
              }}
            />
            Payment Breakdown:
          </p>
          <div>
            <div
              className="me-2"
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "29px",
                justifyContent: "space-between",
              }}
            >
              {[
                { label: "Total:", value: data?.total || "$1500.00 USD" },
                {
                  label: "Advance:",
                  value: data?.advance || "30% Amount to confirm booking",
                },
                {
                  label: "Due Date and Time:",
                  value: data?.dueDate || "11/11/2024 12:00 PM",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="d-flex flex-column flex-sm-row align-items-center"
                  style={{
                    fontFamily: "Poppins",
                    color: "#809DAF",
                    fontSize: "16px",
                    fontWeight: 400,
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ minWidth: "180px" }}>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            color: "#C00000",
            fontSize: "12px",
            fontFamily: "Poppins",
          }}
        >
          Once the payment is made, you have up to 24 hours to cancel the event
          for a<br /> refund. After 24 hours, the payment will no longer be
          eligible for a refund
        </p>
      </Modal.Body>

      <Modal.Footer
        style={{
          borderTop: "none",
          backgroundColor: "#f1f3f7",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={handleNext}
          style={{
            backgroundColor: "#FF9700",
            border: "none",
            padding: "7px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "20px",
            fontFamily: "Poppins",
          }}
        >
          NEXT
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingPaymentModal;
