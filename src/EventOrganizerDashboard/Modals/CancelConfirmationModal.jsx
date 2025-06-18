import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaCircleExclamation } from "react-icons/fa6";

const CancelConfirmationModal = ({ show, handleClose, handleConfirm }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body
        style={{
          backgroundColor: "#F6F6F6",
          borderRadius: "15px", 
        }}
      >
        <div className="d-flex align-items-center gap-1">
          <FaCircleExclamation style={{ color: "red", fontSize: "20px" }} />
          <h5
            style={{
              marginTop: "10px",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "18px",
            }}
          >
            Are you sure to Cancel Event!
          </h5>
        </div>
        <p
          style={{
            fontSize: "10px",
            color: "#555",
            fontFamily: "Poppins",
            marginLeft: 20,
          }}
        >
          Note: Once the payment is made, you have up to 24 hours to cancel the
          event for a refund. After 24 hours, the payment will no longer be
          eligible for a refund.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: "transparent",
              border: "1px solid #ccc",
              color: "#555",
              padding: "5px 20px",
              borderRadius: "5px",
              marginRight: "5px",
            }}
          >
            No, Close
          </Button>
          <Button
            onClick={handleConfirm}
            style={{
              backgroundColor: "#FF9700",
              color: "white",
              fontWeight: 500,
              padding: "5px 20px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Yes, I'm sure
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CancelConfirmationModal;
