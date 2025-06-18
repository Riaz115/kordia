import { Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import musician6 from "/assets/images/musician-6.png";
import Frame from "/assets/images/Frame.png";
import { RxDownload } from "react-icons/rx";
import { HiOutlinePlusCircle } from "react-icons/hi";

const AddBand = ({ show, handleClose }) => {
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [newMember, setNewMember] = useState({ name: "", role: "" });
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
      setFileCount((prevCount) => prevCount + files.length);
    }
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setFileCount((prevCount) => prevCount - 1);
  };

  const handleAddNewMember = () => {
    setShowMemberForm(true);
  };

  const handleSaveMember = () => {
    console.log("New Member Data:", newMember);
    setShowMemberForm(false);
    setNewMember({ name: "", role: "" }); // Reset form
  };

  const handleCancel = () => {
    setShowMemberForm(false);
    setNewMember({ name: "", role: "" }); // Reset form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileAttach = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setUploadedFile({
        name: newMember.name,
        role: newMember.role,
        image: fileURL,
      });
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      style={{ zIndex: "20000" }}
    >
      <Modal.Body>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            className="mt-1 font-bebas"
            style={{
              fontSize: "24px",
              color: "#FF9700",
            }}
          >
            Band information
          </p>
        </div>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <Form.Group
                controlId="formFirstName"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Form.Label
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Band name *
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  style={{ width: "100%" }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group
                controlId="formGender"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginTop: 10,
                  position: "relative",
                }}
              >
                <Form.Label
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Genre
                </Form.Label>
                <Form.Control
                  as="select"
                  className="custom-dropdown"
                  style={{ width: "100%", paddingRight: "30px" }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Control>
                <FaChevronDown
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "75%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "#ff9700",
                  }}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <Form.Group
                controlId="formEmail"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginTop: 10,
                }}
              >
                <Form.Label
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Band Bio/Description
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="The Midnight Wanderers is a four-piece indie...."
                  style={{ width: "100%" }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group
                controlId="formEmail"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginTop: 10,
                }}
              >
                <Form.Label
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Location
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Libson"
                  style={{ width: "100%" }}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Form.Group
                controlId="formEmail"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginTop: 10,
                }}
              >
                <Form.Label
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Website/Links:
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="https://kordia?node-id=793-2592&node"
                  style={{ width: "100%" }}
                />
              </Form.Group>
            </div>
          </div>
        </Form>
        <div
          className="p-3 py-2 m-0 mt-5"
          style={{ backgroundColor: "#bfcdd6" }}
        >
          <p
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "28px",
              fontWeight: "400",
              color: "#013c61",
            }}
          >
            Band members
          </p>

          <div className="row bg-white">
            <div className="col-md-6 d-flex align-items-center justify-content-start">
              <img
                className="m-2"
                src={musician6}
                alt="profile"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <p
                className="mt-2 ms-2"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#013c61",
                }}
              >
                <strong>Member Name :</strong>
              </p>
              <p
                className="mt-2 ms-2"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#013c61",
                }}
              >
                John Doe
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-start">
              <p
                className="mt-2"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#013c61",
                }}
              >
                <strong>Role/Genre :</strong> Pop
              </p>
            </div>
          </div>

          {showMemberForm && (
            <div className="mt-2 row bg-white p-3">
              <div className="d-flex align-items-center mb-3">
                <input
                  type="file"
                  className="form-control"
                  style={{ display: "none" }}
                  id="fileInput"
                  onChange={handleFileAttach}
                />
                <label
                  htmlFor="fileInput"
                  className="btn btn-outline-secondary"
                  style={{ cursor: "pointer", color: "#013c61" }}
                >
                  <RxDownload size={20} style={{ marginRight: "5px" }} />
                  Attach File
                </label>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group
                    controlId="formMemberName"
                    style={{ marginBottom: "10px" }}
                  >
                    <Form.Label
                      style={{
                        fontFamily: "Roboto",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#003a5e",
                      }}
                    >
                      Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={newMember.name}
                      onChange={handleInputChange}
                      placeholder="Enter member name"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group
                    controlId="formMemberRole"
                    style={{ marginBottom: "10px" }}
                  >
                    <Form.Label
                      style={{
                        fontFamily: "Roboto",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#003a5e",
                      }}
                    >
                      Role
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="role"
                      value={newMember.role}
                      onChange={handleInputChange}
                      placeholder="Enter role"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="d-flex justify-content-start mt-3">
                <button
                  className="btn btn-secondary me-2"
                  onClick={handleCancel}
                  style={{
                    color: "#013C61",
                    backgroundColor: "#ffffff",
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    border: "none",
                    fontWeight: "700",
                    borderRadius: "5px",
                  }}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleSaveMember}
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#013C61",
                    border: "none",
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    borderRadius: "5px",
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          )}

          <div className="mt-2 mb-3 row">
            <div className="col-md-6">
              <button
                className="btn"
                onClick={handleAddNewMember}
                style={{
                  color: "#013C61",
                  backgroundColor: "#ffffff",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  border: "1px solid #013C61",
                  fontWeight: "700",
                  borderRadius: "5px",
                }}
              >
                <HiOutlinePlusCircle
                  className="me-2"
                  size={20}
                  style={{ color: "#013C61" }}
                />
                Add New Member
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: "none" }}>
        <button
          className="btn w-100"
          style={{
            color: "#ffffff",
            backgroundColor: "#ff9700",
            fontSize: "14px",
            fontFamily: "Poppins",
            fontWeight: "700",
            borderRadius: "25px",
          }}
        >
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBand;
