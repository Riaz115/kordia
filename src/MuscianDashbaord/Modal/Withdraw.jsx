import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import PayNowIcon from "/assets/images/PayNowIcon.png";

const Withdraw = ({ show, handleCloses, data }) => {
  return (
    <Modal
      show={show}
      size="lg"
      onHide={handleCloses}
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
          Withdraw
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
            Enter withdrawal details
          </p>

          <div
            style={{
              borderBottom: "2px solid #809DAF",
              paddingBottom: "10px",
              // Ensure all text in this section is left-aligned
            }}
          >
            {[
              { label: "To:", value: "John (6566)" },
              { label: "Amount:", value: "$300" },
              { label: "Description:", value: "Withdrawal" },
            ].map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-around align-items-center"
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
            style={{
              paddingBottom: "10px",
              paddingTop: "10px",
              // Align this section text
            }}
          >
            {[
              { label: "Fee:", value: "$1500.00 USD" },
              { label: "Net Amount:", value: "$300 USD" },
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
          onClick={handleCloses}
          style={{
            backgroundColor: "#FF9700",
            border: "none",
            padding: "4px 20px",
            fontSize: "20px",
            fontWeight: 400,
            borderRadius: "20px",
            fontFamily: "Bebas Neue",
            marginTop: "10px",
          }}
        >
          Withdraw
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Withdraw;
