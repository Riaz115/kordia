import { Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import musician6 from "/assets/images/musician-6.png";
import Frame from "/assets/images/Frame.png";
import { RxDownload } from "react-icons/rx";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";

const EditProposalModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "type1",
    eventLocation: "",
    bandBio: "",
    performanceType: "type1",
    contractorNumber: "",
    contractorEmail: "",
    eventDate: "",
    eventTime: "",
    eventDuration: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input Changed: ${name} = ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    if (Object.values(formData).some((field) => !field)) {
      console.error("All fields must be filled!");
      return;
    }
    handleClose();
  };

  return (
    <Modal
      className=""
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      style={{ zIndex: "20000" }}
    >
      <Modal.Body
        className="bg-main-blue overflow-auto "
        style={{ height: "70vh" }}
      >
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
            Send a Proposal
          </p>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="">
            <div
              className="text-main-orange d-flex align-items-center  gap-2 my-2"
              style={{ color: "#ff9700" }}
            >
              <FaArrowRight size={20} />
              <p className="m-0">Event Information</p>
            </div>

            <div className="row">
              <div className="col-md-6 ">
                <Form.Group
                  controlId="formEventName"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginTop: 1,
                  }}
                >
                  <Form.Label
                    style={{
                      textAlign: "left",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#ff9700",
                      marginBottom: "5px",
                    }}
                  >
                    Event name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    style={{ width: "100%" }}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group
                  controlId="formEventType"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <Form.Label
                    style={{
                      textAlign: "left",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#ff9700",
                      marginBottom: "5px",
                    }}
                  >
                    Event Type
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="custom-dropdown"
                    style={{ width: "100%", paddingRight: "30px" }}
                  >
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                    <option value="type3">Type 3</option>
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
              <div className=" ">
                <Form.Group
                  controlId="formEventLocation"
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
                      color: "#ff9700",
                      marginBottom: "5px",
                    }}
                  >
                    Event Location
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleInputChange}
                    placeholder="Enter event location"
                    style={{
                      width: "100%",
                      resize: "none",
                    }}
                  />
                </Form.Group>
              </div>
              <div className="">
                <Form.Group
                  controlId="formBandBio"
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
                      color: "#ff9700",
                      marginBottom: "5px",
                    }}
                  >
                    Band Bio/Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="bandBio"
                    value={formData.bandBio}
                    onChange={handleInputChange}
                    placeholder="Enter band bio/description"
                    style={{ width: "100%", resize: "none" }}
                  />
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="mt-3 ">
            <div
              className="text-main-orange d-flex align-items-center  gap-2 my-2"
              style={{ color: "#ff9700" }}
            >
              <FaArrowRight size={20} />
              <p className="m-0">Performance Details</p>
            </div>

            <div className="row mt-2 ">
              <div className="">
                <Form.Group
                  controlId="formPerformanceType"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <Form.Label
                    style={{
                      textAlign: "left",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#ff9700",
                      marginBottom: "5px",
                    }}
                  >
                    Performance Type
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="eventType"
                    value={formData.performanceType}
                    onChange={handleInputChange}
                    className="custom-dropdown"
                    style={{ width: "100%", paddingRight: "30px" }}
                  >
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                    <option value="type3">Type 3</option>
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

            <div className="row mt-2 ">
              <div
                className="text-main-orange d-flex align-items-center  gap-2 my-2"
                style={{ color: "#ff9700" }}
              >
                <FaArrowRight size={20} />
                <p className="m-0">Contractor Information</p>
              </div>
              <div className="col-md-6 ">
                <Form.Group
                  controlId="formContractorNumber"
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
                      color: "#ff9700",
                      marginBottom: "5px",
                    }}
                  >
                    Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="contractorNumber"
                    value={formData.contractorNumber}
                    onChange={handleInputChange}
                    placeholder="Enter contractor number"
                    style={{
                      width: "100%",
                      resize: "none",
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 ">
                <Form.Group
                  controlId="formContractorEmail"
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
                      color: "#ff9700",
                      marginBottom: "5px",
                    }}
                  >
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="contractorEmail"
                    value={formData.contractorEmail}
                    onChange={handleInputChange}
                    placeholder="Enter contractor email"
                    style={{
                      width: "100%",
                      resize: "none",
                    }}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row mt-2 ">
              <div
                className="text-main-orange d-flex align-items-center gap-2 my-2"
                style={{ color: "#ff9700" }}
              >
                <FaArrowRight size={20} />
                <p className="m-0">Schedule</p>
              </div>
              <div className="col-md-6">
                {/* Event Date Picker */}
                <Form.Group
                  controlId="formEventDate"
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
                      color: "#ff9700",
                      marginBottom: "5px",
                    }}
                  >
                    Date
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      resize: "none",
                    }}
                  />
                </Form.Group>
              </div>

              <div className=" col-md-6">
                <Form.Group
                  controlId="formDuration"
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
                      color: "#ff9700",
                      marginBottom: "5px",
                    }}
                  >
                    Time
                  </Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    name="eventTime"
                    placeholder="Enter time"
                    value={formData.eventTime}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      resize: "none",
                    }}
                  />
                </Form.Group>
              </div>
            </div>

            <div className=" ">
              <Form.Group
                controlId="formDuration"
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
                    color: "#ff9700",
                    marginBottom: "5px",
                  }}
                >
                  Event Duration
                </Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  name="eventDuration"
                  placeholder="Enter duration"
                  value={formData.eventDuration}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    resize: "none",
                  }}
                />
              </Form.Group>
            </div>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="bg-main-blue" style={{ border: "none" }}>
        <button
          onClick={handleSubmit}
          className="btn w-100"
          type="submit"
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

export default EditProposalModal;
