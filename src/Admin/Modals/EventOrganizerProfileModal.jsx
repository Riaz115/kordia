import React from "react";
import { Modal, Button } from "react-bootstrap";
import '../../App.css';

const ProfileModal = ({ show, handleClose, profileData }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="xl"
      style={{ zIndex: 1500 }}
    >
      <Modal.Body>
        <div className="row align-items-center w-100 mb-4">
          {/* Left Section: Image, Name, Account Type, Email */}
          <div className="col-md-12 col-lg-5  col-sm-12 col-xs-12 d-flex align-items-center mb-3 mb-md-0">
            {/* Image */}
            <img
              src={profileData?.image}
              alt={profileData?.name}
              className="rounded-circle"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                marginRight: "15px",
              }}
            />

            {/* Name, Account Type, Email */}
            <div>
              <p
                className="font-bebas"
                style={{
                  color: "#FF9700",
                  fontSize: "40px",
                  marginBottom: "-8px",
                }}
              >
                {profileData?.name}
              </p>
              <p
                className="m-0 font-poppins"
                style={{ fontSize: "12px", color: "#406B86", fontWeight: 400 }}
              >
                Account type: {profileData?.accountType}
              </p>
              <p
                className="m-0 font-poppins"
                style={{ fontSize: "12px", color: "#406B86", fontWeight: 400 }}
              >
                Email: {profileData?.email}
              </p>
            </div>
          </div>

          {/* Right Section: Status, Subscription Level */}
          <div className="col-md-12 col-lg-7 col-sm-12 col-xs-12">
            <div className="d-flex flex-column flex-md-row justify-content-between">
              {/* Status */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <strong
                  className="font-bebas"
                  style={{
                    color: "#013C61",
                    fontWeight: 500,
                    fontSize: "28px",
                  }}
                >
                  Status:
                </strong>
                <span
                  className="font-bebas"
                  style={{
                    backgroundColor: "#CFEBCC",
                    color: "#13B104",
                    padding: "6px 18px",
                    fontSize: "12px",
                    borderRadius: "20px",
                    marginLeft: "20px",
                    fontWeight: 500,
                  }}
                >
                  {profileData?.status}
                </span>
              </div>

              {/* Subscription Level */}
              <div>
                <p className="m-0 font-poppins">
                  <strong
                    className="font-bebas"
                    style={{
                      color: "#013C61",
                      fontWeight: 500,
                      fontSize: "28px",
                    }}
                  >
                    Subscription Level:
                  </strong>{' '}
                  <span
                    className="font-bebas"
                    style={{
                      color: "#013C61",
                      fontWeight: 500,
                      fontSize: "28px",
                      marginLeft: "12px",
                    }}
                  >
                    {profileData?.subscriptionPlan}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Full Name */}
          <div className="col-md-6 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                Full Name
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={profileData?.name || ""}
              disabled
              style={{ backgroundColor: "white" }}
            />
          </div>

          {/* Gender */}
          <div className="col-md-6 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                Gender
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={profileData?.gender || ""}
              style={{ backgroundColor: "white" }}
              disabled
            />
          </div>

       

          {/* Location */}
          <div className="col-md-6 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                Location
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={profileData?.location || ""}
              disabled
              style={{ backgroundColor: "white" }}
            />
          </div>
             {/* Number*/}
             <div className="col-md-6 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                Number of Albums Released
              </strong>
            </label>
            <input
              type="number"
              className="form-control"
              defaultValue={profileData?.albumsReleased || ""}
              disabled
              style={{ backgroundColor: "white" }}
            />
          </div>

          {/* About/Bio */}
          <div className="col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                About / Bio
              </strong>
            </label>
            <textarea
              className="form-control"
              defaultValue={profileData?.bio || ""}
              disabled
              style={{ backgroundColor: "white" }}
            ></textarea>
          </div>

          {/* Past Events */}
          <div className="col-md-6 col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                Past Events
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={profileData?.bandCollaboration || ""}
              disabled
              style={{ backgroundColor: "white" }}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProfileModal;
