import React from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import "../../App.css";
import eventorganizer3 from "/assets/images/eventorganizer3.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const EditProfileModal = ({ show, handleClose, profileData }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      style={{ zIndex: 1550 }}
    >
      <Modal.Body>
        {/* Header Section with Image and Basic Info */}
        <div className="row align-items-center w-100 mb-4">
          {/* Left Section: Basic Info */}
          <div className="col-md-8 col-sm-12">
            <div>
              <p
                className="font-poppins"
                style={{
                  color: "#000000",
                  fontSize: "40px",
                  marginBottom: "-8px",
                }}
              >
                Edit Profile
              </p>
            </div>
          </div>

          {/* Right Section: Profile Image */}
          <div className="col-md-4 col-sm-12 d-flex justify-content-end">
            <img
              src={eventorganizer3}
              alt="Profile"
              className="rounded-circle"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="row">
          {/* First Name */}
          <div className="col-md-6 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                First Name
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={profileData?.firstName}
              placeholder="Enter First Name"
              style={{ backgroundColor: "white" }}
            />
          </div>

          {/* Last Name */}
          <div className="col-md-6 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                Last Name
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={profileData?.lastName}
              placeholder="Enter Last Name"
              style={{ backgroundColor: "white" }}
            />
          </div>

          {/* Email */}
          <div className="col-md-12 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                Email
              </strong>
            </label>
            <input
              type="email"
              className="form-control"
              defaultValue={profileData?.email}
              placeholder="Enter Email"
              style={{ backgroundColor: "white" }}
            />
          </div>

          {/* Address */}
          <div className="col-md-12 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                Address
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={profileData?.address}
              placeholder="Enter Address"
              style={{ backgroundColor: "white" }}
            />
          </div>

          {/* Contact Number */}
          <div className="col-md-12 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                Contact Number
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={profileData?.contactNumber}
              placeholder="Enter Contact Number"
              style={{ backgroundColor: "white" }}
            />
          </div>

          {/* City */}
          <div className="col-md-6 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                City
              </strong>
            </label>
            <select
              className="form-control"
              defaultValue={profileData?.city || "Select City"}
              style={{ backgroundColor: "white" }}
            >
              <option>Select City</option>
              <option value="City 1">City 1</option>
              <option value="City 2">City 2</option>
            </select>
          </div>

          {/* State */}
          <div className="col-md-6 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                State
              </strong>
            </label>
            <select
              className="form-control"
              defaultValue={profileData?.state || "Select State"}
              style={{ backgroundColor: "white" }}
            >
              <option>Select State</option>
              <option value="State 1">State 1</option>
              <option value="State 2">State 2</option>
            </select>
          </div>

          {/* Password */}
          <div className="col-md-12 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                Password
              </strong>
            </label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                defaultValue={profileData?.password}
                placeholder="Enter Password"
                style={{
                  backgroundColor: "white",
                  borderRight: "none", // Remove right border of input
                }}
              />
              <InputGroup.Text
                onClick={togglePasswordVisibility}
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderLeft: "none", // Remove left border
                  paddingLeft: 0, // Remove left padding
                }}
              >
                {showPassword ? (
                  <FiEyeOff size={20} color="#406B86" />
                ) : (
                  <FiEye size={20} color="#406B86" />
                )}
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>

        {/* Buttons */}
        <div className="row justify-content-start mt-4">
          <div className="col-auto">
            <Button
              variant="outline-warning"
              onClick={handleClose}
              className="me-3"
              style={{
                backgroundColor: "white",
                borderColor: "#FF9700",
                color: "#FF9700",
                borderWidth: "2px", // Optional: if you want a slightly thicker
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "24px",
                width: "120px",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="warning"
              style={{
                backgroundColor: "#FF9700",
                borderColor: "#FF9700",
                color: "white",
                borderWidth: "2px", // Optional: if you want a slightly thicker
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "24px",
                width: "120px",
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfileModal;
