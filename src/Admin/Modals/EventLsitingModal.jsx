import React from "react";
import { Modal, Button } from "react-bootstrap";
import '../../App.css';

const ProfileModal = ({ show, handleClose, profileData }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="sm"
      style={{ zIndex: 1500 }}
    >
      <Modal.Body>
        

         <div className="row">
          {/* Full Name */}
          {/* <div className="col-md-6 col-12 mb-3">
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
          </div> */}

          {/* Gender */}
          {/* <div className="col-md-6 col-12 mb-3">
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
          </div> */}

       

          {/* Location */}
          {/* <div className="col-md-6 col-12 mb-3">
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
          </div> */}
             {/* Number*/}
             {/* <div className="col-md-6 col-12 mb-3">
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
          </div> */}

          {/* About/Bio */}
          <div className="col-12 mb-3">
            <label>
              <strong
                className="font-bebas"
                style={{ color: "#013C61", fontWeight: 500, fontSize: "28px" }}
              >
                In Progress
              </strong>
            </label>
            {/* <textarea
              className="form-control"
              defaultValue={profileData?.bio || ""}
              disabled
              style={{ backgroundColor: "white" }}
            ></textarea> */}
          </div>

          {/* Past Events */}
          {/* <div className="col-md-6 col-12 mb-3">
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
          </div> */}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProfileModal;
