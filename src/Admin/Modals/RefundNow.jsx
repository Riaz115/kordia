import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import PayNowIcon from "/assets/images/PayNowIcon.png";

const RefundNow = ({ show, handleClose, data }) => {
  return (
    <Modal
      show={show}
      size="lg"
      onHide={handleClose}
      centered
      style={{ zIndex: 16000 }}
    >
      {/* Header */}
      <Modal.Header
        closeButton
        style={{
          borderBottom: "none",
          backgroundColor: "#f1f3f7",
        }}
      >
        <Modal.Title></Modal.Title>
      </Modal.Header>

      {/* Body */}
      <Modal.Body
        style={{
          backgroundColor: "#f1f3f7",
          padding: "20px",
          marginBottom: "0",
          textAlign: "left", // Align all text to the left
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center w-100"
          style={{
            fontSize: "40px",
            fontWeight: 700,
            color: "#FF9700",
            fontFamily: "Bebas Neue",
            textAlign: "center", // Center-align heading specifically
          }}
        >
          <img
            src={PayNowIcon}
            alt="icon"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
            }}
          />
          RefundNow
        </div>

        <div
          className="m-md-5 mb-0 m-lg-5"
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "30px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "left", // Align all inner text to the left
          }}
        >
          {/* Payment Details */}
          <p
            style={{
              fontWeight: 500,
              fontFamily: "Poppins",
              fontSize: "24px",
              color: "#003a5e",
              borderBottom: "2px solid #809DAF",
              paddingBottom: "10px",
              textAlign: "left", // Explicitly align this text
            }}
          >
            <MdOutlineArrowForwardIos
              style={{
                marginRight: "10px",
                marginBottom: "5px",
                color: "#003a5e",
              }}
            />
            Payment Details
          </p>

          <select
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #002B46",
              marginBottom: "20px",
              fontFamily: "Poppins",
              // Align text inside the dropdown
            }}
          >
            <option
              style={{
                fontFamily: "Poppins",
                color: "#C7C7C7",
              }}
            >
              Select the connected method
            </option>
          </select>

          <div
            style={{
              borderBottom: "2px solid #809DAF",
              paddingBottom: "10px",
              // Ensure all text in this section is left-aligned
            }}
          >
            <div
              className="d-flex justify-content-around"
              style={{
                fontFamily: "Poppins",
                color: "#809DAF",
                fontSize: "16px",
                fontWeight: 400,
                marginBottom: "10px",
              }}
            >
              <span>To:</span>
              <span>John (6566)</span>
            </div>
            <div
              className="d-flex justify-content-around"
              style={{
                fontFamily: "Poppins",
                color: "#809DAF",
                fontSize: "16px",
                fontWeight: 400,
                marginBottom: "10px",
              }}
            >
              <span>Amount:</span>
              <span>$300</span>
            </div>
          </div>

          <div
            style={{
              borderBottom: "2px solid #809DAF",
              paddingBottom: "10px",
              paddingTop: "10px",
              // Align this section text
            }}
          >
            {[
              { label: "Total:", value: "$1500.00 USD" },
              { label: "Advance:", value: "$300 USD" },
            ].map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-around"
                style={{
                  fontFamily: "Poppins",
                  color: "#809DAF",
                  fontSize: "16px",
                  fontWeight: 400,
                  marginBottom: "10px",
                }}
              >
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          <div
            className="d-flex justify-content-around"
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              paddingTop: "10px",
              fontWeight: 400,
              marginBottom: "10px",
              // Ensure left-aligned
            }}
          >
            <span style={{ color: "#003A5E" }}>Remaining Amount</span>
            <span style={{ color: "#809daf" }}>$1200.00 USD</span>
          </div>
        </div>
      </Modal.Body>

      {/* Footer */}
      <Modal.Footer
        style={{
          borderTop: "none",
          backgroundColor: "#f1f3f7",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "0",
        }}
      >
        <div className="d-flex align-items-center">
          <input type="checkbox" id="approve" style={{ marginRight: "10px" }} />
          <label
            htmlFor="approve"
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "#406B86",
            }}
          >
            I approve this transaction
          </label>
        </div>
        <Button
          onClick={handleClose}
          style={{
            backgroundColor: "#FF9700",
            border: "none",
            padding: "10px 20px",
            fontSize: "20px",
            borderRadius: "20px",
            fontFamily: "Bebas Neue",
            marginTop: "10px",
          }}
        >
          Refund Now
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RefundNow;
