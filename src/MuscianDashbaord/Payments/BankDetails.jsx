import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {
  IoSearch,
  IoAddCircleOutline,
  IoTrashOutline,
  IoPencilOutline,
} from "react-icons/io5";
import Bank from "/assets/images/bank.png";
import AddAcount from "../Modal/AddAcount";

const BankDetails = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const bankData = [
    {
      name: "United Bank Limited | USD",
      status: "Active",
      accountNumber: "00897654321",
    },
    {
      name: "Bank of America | USD",
      status: "Inactive",
      accountNumber: "12345678901",
    },
    {
      name: "HSBC | GBP",
      status: "Active",
      accountNumber: "98765432100",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row g-0 search justify-content-between p-3 pt-4 ">
        <div className="col-12 col-lg-5 col-md-12 d-flex align-items-start mb-sm-2 mb-xs-2">
          <div
            className="d-flex align-items-center contactus-input bg-white p-2 rounded-pill position-relative"
            style={{ width: "100%" }}
          >
            <FaBars
              className="start-icon position-absolute"
              style={{
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#49454f",
              }}
            />
            <input
              className="w-100 bg-transparent border-0 focus-none ms-2"
              type="search"
              name="search"
              id="search"
              placeholder="Hinted search text"
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            />
            <label
              htmlFor="search"
              className="position-absolute"
              style={{
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <IoSearch className="text-secondary" />
            </label>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-12 d-flex flex-column flex-md-row align-items-center justify-content-end gap-3">
          <Button
            variant="outline"
            style={{
              backgroundColor: "#ff9700",
              color: "white",
              fontWeight: "400",
              fontSize: "16px",
              fontFamily: "Poppins",
            }}
            onClick={handleShow}
          >
            <IoAddCircleOutline className="me-2" size={24} />
            Add Bank Details
          </Button>
        </div>
      </div>
      {bankData.map((bank, index) => (
        <div
          key={index}
          className="row g-0 p-2 bg-white rounded-1 mt-2 shadow-sm align-items-center"
        >
          {/* Bank Image and Details */}
          <div className="col-md-7 d-flex flex-wrap align-items-center px-2">
            <div className="col-auto me-3 mb-4">
              <img
                src={Bank}
                alt="bank"
                className="img-fluid"
                style={{ maxWidth: "40px", height: "auto" }}
              />
            </div>
            <div className="col">
              {/* Bank Name */}
              <p
                className="mb-1 "
                style={{
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  margin: 2,
                }}
              >
                {bank.name}
              </p>
              {/* Bank Status */}
              <span
                className={`rounded-pill py-1 px-3 d-inline-block text-center ${
                  bank.status === "Active"
                    ? "text-success bg-success-subtle"
                    : "text-danger bg-danger-subtle"
                }`}
                style={{
                  fontSize: "8px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                {bank.status}
              </span>
              {/* Account Number Label */}
              <p
                className="mt-2 mb-1"
                style={{
                  fontSize: "10px",
                  fontFamily: "Poppins",
                  margin: 2,
                  color: "#E7E7E7",
                  fontWeight: 600,
                }}
              >
                Account Number or IBAN Number
              </p>
              {/* Account Number */}
              <p
                className="mb-0 text-dark"
                style={{
                  fontSize: "10px",
                  fontFamily: "Poppins",
                  margin: 2,
                }}
              >
                {bank.accountNumber}
              </p>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="col-md-5 d-flex justify-content-end gap-2 mt-3 mt-md-0">
            <Button
              className="p-2"
              variant="outlined"
              style={{
                backgroundColor: "white",
                color: "#013c65",
                fontWeight: "400",
                fontSize: "14px",
                fontFamily: "Poppins",
              }}
            >
              <MdDeleteOutline className="me-2" size={20} />
              Delete Account
            </Button>
            <Button
              variant="outline p-2"
              style={{
                backgroundColor: "#013c65",
                color: "white",
                fontWeight: "400",
                fontSize: "14px",
                fontFamily: "Poppins",
                border: "1px solid #013c65",
              }}
            >
              <FaEdit className="me-2" size={20} />
              Edit Account
            </Button>
          </div>
        </div>
      ))}

      <AddAcount show={show} handleClose={handleClose} />
    </div>
  );
};

export default BankDetails;
