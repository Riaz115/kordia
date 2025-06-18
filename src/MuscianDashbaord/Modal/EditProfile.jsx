import { Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import musician6 from "/assets/images/musician-6.png";
import Frame from "/assets/images/Frame.png";
import { RxDownload } from "react-icons/rx";

const EditProfile = ({ show, handleClose }) => {
  const [profileImage, setProfileImage] = useState(musician6);
  const [fileCount, setFileCount] = useState(0);
  const [images, setImages] = useState([]);

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

  const handleProfileImage = (event) => {
    const file = event.target.files[0]; // Only take the first file, ignoring `multiple`
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Set the image as a data URL
      };
      reader.readAsDataURL(file);
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
      <Modal.Header style={{ border: "none" }}>
        <Modal.Title>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              className="me-3"
              src={profileImage}
              alt="profile"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <label
              htmlFor="imageUpload"
              style={{
                position: "absolute",
                bottom: "10px",
                right: "75%",
                top: "70%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
              }}
            >
              <img src={Frame} alt="edit" />
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleProfileImage}
              multiple
            />
            <p
              className="mt-1"
              style={{
                fontSize: "22px",
                fontWeight: "600",
                color: "#FF9700",
                fontFamily: "Poppins",
              }}
            >
              Musician Name
            </p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <Form.Group
                controlId="formFirstName"
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
                  Full Name *
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Full name"
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
                  Gender :
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
                  Phone *
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Phone number"
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
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={{ width: "100%" }}
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
                  Number Of Albums Released
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Number Of Albums Released"
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
                  placeholder="Enter Location"
                  style={{ width: "100%" }}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Form.Group
                controlId="formAbout"
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
                  About / Bio:
                </Form.Label>
                <Form.Control
                  as="textarea" // Changed from "type" to "as"
                  placeholder="Enter Bio"
                  rows={4} // Number of visible rows
                  style={{ width: "100%" }}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <Form.Group
                controlId="formGenre"
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
                  Genre:
                </Form.Label>
                <Form.Control
                  as="select"
                  className="custom-dropdown"
                  style={{ width: "100%", paddingRight: "30px" }}
                >
                  <option value="rock">Rock</option>
                  <option value="pop">Pop</option>
                  <option value="jazz">Jazz</option>
                  <option value="classical">Classical</option>
                  <option value="hiphop">Hip Hop</option>
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

          <div className="row mt-4">
            <div className="btn"></div>
          </div>
        </Form>
        <div className="row">
          <div className="col d-flex flex-column ">
            <p
              style={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
                color: "#003a5e",
                marginBottom: "5px",
              }}
            >
              Gallery :
            </p>
            <div style={{ display: "flex" }}>
              <div style={{ position: "relative" }}>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#ff9700",
                    border: "none",
                    borderRadius: "5px 0px 0px 5px",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "14px",
                    margin: "0",
                    borderRight: "1px solid white",
                  }}
                  onClick={() => document.getElementById("fileInput").click()}
                  className="btn btn-primary"
                >
                  <RxDownload style={{ marginRight: "5px" }} size={24} /> Choose
                  File
                </button>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }} // Hide the file input
                  onChange={handleImageUpload} // Handle file selection
                  multiple
                />
              </div>

              <button
                type="button"
                style={{
                  backgroundColor: "#ff9700",
                  border: "none",
                  borderRadius: "0px 5px 5px 0px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
                className="btn btn-secondary"
              >
                Files Selected: {fileCount}
              </button>
            </div>
            <div className="p">
              <p
                style={{
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: "#6c757d",
                }}
              >
                e.g., performance photos or album covers
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
              position: "relative",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "126px",
                  height: "81px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={image}
                  alt={`Preview ${index}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <button
                  onClick={() => removeImage(index)}
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    backgroundColor: "#ff0000",
                    border: "none",
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                  }}
                >
                  <FaTimes style={{ color: "black" }} />
                </button>
              </div>
            ))}
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

export default EditProfile;
