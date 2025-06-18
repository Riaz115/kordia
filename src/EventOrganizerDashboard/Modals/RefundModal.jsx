import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Typography } from "@mui/material";
import { FaCircleCheck } from "react-icons/fa6";

const RefundModal = ({ show, handleClose }) => {
  const [successModal, setSuccessModal] = useState(false);

  const handleSubmit = () => {
    // Open the success modal
    setSuccessModal(true);
  };

  const handleSuccessClose = () => {
    setSuccessModal(false);
    handleClose(); // Close the main modal as well
  };

  return (
    <>
      {/* Main Refund Request Modal */}
      <Modal
        show={show && !successModal}
        size="md"
        onHide={handleClose}
        centered
        style={{ zIndex: 15000, borderRadius: "10px" }}
      >
        <Modal.Body>
          <div>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 700,
                color: "#FF9700",
                textAlign: "start",
                marginBottom: "10px",
                fontSize: "24px",
              }}
            >
              Refund Request
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                color: "#013C61",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              Event Information
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                color: "#406B86",
                fontSize: "14px",
              }}
            >
              Event Name: Summer Jazz Festival
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                color: "#406B86",
                fontSize: "14px",
              }}
            >
              Event Date & Time: 23/12/2024 - 05:30 PM
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                color: "#406B86",
                fontSize: "14px",
              }}
            >
              Musician Booked: John John
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                color: "#013C61",
                fontSize: "14px",
                marginTop: "15px",
              }}
            >
              Reason for Cancellation:
            </Typography>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter reason for cancellation"
              style={{ marginTop: "5px", marginBottom: "15px" }}
            />
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                color: "#013C61",
                fontSize: "14px",
              }}
            >
              Select Payment Account for Refund:
            </Typography>
            <Form.Select
              aria-label="Select payment account"
              style={{ marginTop: "5px", marginBottom: "15px" }}
            >
              <option value="">Select account</option>
              <option value="account1">Account 1</option>
              <option value="account2">Account 2</option>
            </Form.Select>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                color: "#013C61",
                fontSize: "14px",
                marginTop: "15px",
                marginBottom: "5px",
              }}
            >
              Refund Breakdown
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                color: "#406B86",
                fontSize: "12px",
              }}
            >
              Total Payment: $XXX
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                color: "#406B86",
                fontSize: "12px",
              }}
            >
              Service Fees/Charges: 5%
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                color: "#406B86",
                fontSize: "12px",
              }}
            >
              Refundable Amount: $XXX
            </Typography>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#FF9700",
              border: "1px solid #FF9700",
              borderRadius: "5px",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#FF9700",
              color: "white",
              borderRadius: "5px",
              marginLeft: "10px",
              border: "none",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}
      <Modal
        show={successModal}
        size="md"
        onHide={handleSuccessClose}
        centered
        style={{ zIndex: 15000, borderRadius: "10px" }}
      >
        <Modal.Header
          closeButton
          style={{
            borderBottom: "none",
            backgroundColor: "#ffff",
            margin: "0",
          }}
        >
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <FaCircleCheck
            size={50}
            color="#61C478"
            style={{ marginBottom: "10px" }}
          />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 700,
              color: "#FF9700",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Refund Request Submitted!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              color: "#809DAF",
              fontSize: "14px",
            }}
          >
            Your refund request has been successfully submitted. Our team will
            process the refund within [X] business days, excluding any
            non-refundable service fees. You will receive an update via email
            once the refund is complete.
          </Typography>
        </Modal.Body>
        <Modal.Footer
          className="justify-content-center"
          style={{ border: "none" }}
        >
          <Button
            style={{
              backgroundColor: "#FF9700",
              color: "white",
              borderRadius: "5px",
              border: "none",
              width: "100px",
            }}
            onClick={handleSuccessClose}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RefundModal;
