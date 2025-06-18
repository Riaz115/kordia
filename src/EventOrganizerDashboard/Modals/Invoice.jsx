import React from "react";
import { Modal, Button } from "react-bootstrap";
import LogoInvoice from "/assets/images/LogoInvoice.png";
import LogoInvoice2 from "/assets/images/LogoInvoice2.png";
import { MdOutlineFileDownload, MdShare } from "react-icons/md";

const Invoice = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      centered
      style={{ zIndex: 20000 }}
    >
      <Modal.Body style={{ position: "relative", paddingBottom: "0" }}>
        {/* Header Section */}
        <div className="text-center mb-4">
          <img
            src={LogoInvoice}
            alt="Kordia Logo"
            style={{ width: "40%", height: "auto" }}
          />
          <p
            className="mt-3"
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "14px",
              fontWeight: 400,
              color: "#013c65",
              letterSpacing: "1.5px",
            }}
          >
            Wed, May 27, 2020&nbsp;&bull;&nbsp;9:27:53 AM
          </p>
        </div>

        {/* Token Section */}
        <div
          className="text-center mb-4"
          style={{
            border: "1px dashed #013c65",
            borderRadius: "8px",
            fontFamily: "monospace",
            top: "10px",
            position: "relative",
            height: "50px",
            fontSize: "16px",
            color: "#013c65",
            fontWeight: 500,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-13px",
              left: "40%",
              backgroundColor: "white",
              padding: "0px 10px",
              borderRadius: "5px",
            }}
          >
            Token / Id
          </div>
          <div
            style={{
              position: "absolute",
              left: "25%",
              top: "10px",
              fontWeight: "700",
              letterSpacing: "1.5",
            }}
          >
            0237-7746-8981-9028-5626
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-5 me-5 ms-5 mb-4">
          <div
            className="d-flex justify-content-between g-4"
            style={{
              fontFamily: "Roboto Mono",
              fontSize: "14.77px",
              fontWeight: 400,
              lineHeight: "19.47px",
              letterSpacing: "0.738px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#6D7278",
            }}
          >
            <span className="mt-2">Full Name</span>
            <span className="mt-2">Victor Shoaga</span>
          </div>
          <div
            className="d-flex justify-content-between g-4"
            style={{
              fontFamily: "Roboto Mono",
              fontSize: "14.77px",
              fontWeight: 400,
              lineHeight: "19.47px",
              letterSpacing: "0.738px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#6D7278",
            }}
          >
            <span className="mt-2">Customer Type</span>
            <span className="mt-2">Musician</span>
          </div>
          <div
            className="d-flex justify-content-between g-4"
            style={{
              fontFamily: "Roboto Mono",
              fontSize: "14.77px",
              fontWeight: 400,
              lineHeight: "19.47px",
              letterSpacing: "0.738px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#6D7278",
            }}
          >
            <span className="mt-2">Address</span>
            <span className="mt-2 text-end">
              7953 Oakland St.
              <br />
              Honolulu, HI 96815
            </span>
          </div>
          <div
            className="w-100 mt-2"
            style={{ borderBottom: "1px dashed #6D7278" }}
          ></div>
          <div
            className="d-flex justify-content-between"
            style={{
              fontFamily: "Roboto Mono",
              fontSize: "14.77px",
              fontWeight: 400,
              lineHeight: "19.47px",
              letterSpacing: "0.738px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#6D7278",
            }}
          >
            <span className="mt-2">Phone Number</span>
            <span className="mt-2">04172997324</span>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{
              fontFamily: "Roboto Mono",
              fontSize: "14.77px",
              fontWeight: 400,
              lineHeight: "19.47px",
              letterSpacing: "0.738px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#6D7278",
            }}
          >
            <span className="mt-2">Email</span>
            <span className="mt-2">abc@gmail.com</span>
          </div>
          <div
            className="w-100 mt-2"
            style={{ borderBottom: "1px dashed #6D7278" }}
          ></div>
          <div
            className="d-flex justify-content-between"
            style={{
              fontFamily: "Roboto Mono",
              fontSize: "14.77px",
              fontWeight: 400,
              lineHeight: "19.47px",
              letterSpacing: "0.738px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#6D7278",
            }}
          >
            <span className="mt-2">Amount</span>
            <span className="mt-2">950 US</span>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{
              fontFamily: "Roboto Mono",
              fontSize: "14.77px",
              fontWeight: 400,
              lineHeight: "19.47px",
              letterSpacing: "0.738px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#6D7278",
            }}
          >
            <span className="mt-2">Fee</span>
            <span className="mt-2">50 US</span>
          </div>
          <div
            className="w-100 mt-2"
            style={{ borderBottom: "1px dashed #6D7278" }}
          ></div>
          <div
            className="d-flex justify-content-between"
            style={{
              fontFamily: "Roboto Mono",
              fontSize: "14.77px",
              fontWeight: 400,
              lineHeight: "19.47px",
              letterSpacing: "0.738px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#6D7278",
            }}
          >
            <span className="mt-2">Operator</span>
            <span className="mt-2">900 US</span>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-4 mb-4">
          <img
            src={LogoInvoice2}
            alt="Kordia Logo"
            style={{ width: "30%", height: "auto" }}
          />
          <div className="d-flex justify-content-center mt-3">
            <Button
              variant="outlined"
              className="mx-2"
              style={{
                borderRadius: "6px",
                border: "1px solid #ff9700",
                color: "#ff9700",
                fontWeight: 600,
                fontSize: "14px",
                fontFamily: "Poppins",
              }}
            >
              <MdOutlineFileDownload
                style={{ marginRight: "10px", color: "#ff9700" }}
                size={20}
              />
              Download
            </Button>
            {/* <Button
              variant="outlined"
              className="mx-2"
              style={{
                borderRadius: "6px",
                border: "1px solid #ff9700",
                backgroundColor: "#ff9700",
                color: "white",
                fontWeight: 600,
                fontSize: "14px",
                fontFamily: "Poppins",
              }}
            >
              <MdShare
                style={{ marginRight: "10px", color: "white" }}
                size={20}
              />
              Share Receipt
            </Button> */}
          </div>
        </div>

        {/* Zigzag Bottom Section */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "30px",
            backgroundColor: "#606060",
            clipPath:
              "polygon(0 100%, 2.5% 80%, 5% 100%, 7.5% 80%, 10% 100%, 12.5% 80%, 15% 100%, 17.5% 80%, 20% 100%, 22.5% 80%, 25% 100%, 27.5% 80%, 30% 100%, 32.5% 80%, 35% 100%, 37.5% 80%, 40% 100%, 42.5% 80%, 45% 100%, 47.5% 80%, 50% 100%, 52.5% 80%, 55% 100%, 57.5% 80%, 60% 100%, 62.5% 80%, 65% 100%, 67.5% 80%, 70% 100%, 72.5% 80%, 75% 100%, 77.5% 80%, 80% 100%, 82.5% 80%, 85% 100%, 87.5% 80%, 90% 100%, 92.5% 80%, 95% 100%, 97.5% 80%, 100% 100%)",
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default Invoice;
