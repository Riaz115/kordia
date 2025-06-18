import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import CreateLectureLesson from "./CreateLectureLesson";
import { Typography, Button } from "@mui/material";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CreateLessonPage = () => {
  const navigate = useNavigate();

  // Centralized state for the form
  const [formData, setFormData] = useState({
    title: "",
    gender: "",
    lessonType: "",
    ageRange: "",
    availability: "",
    location: "",
    aboutCourse: "",
    learningPoints: [""], // Array for learning points
    images: [],
    lessonPrice: "", // Added field for lesson price
    discountPrice: "",
  });

  // Handle change for text and select inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle dynamic input change for learning points
  const handleLearningPointChange = (index, value) => {
    const updatedPoints = [...formData.learningPoints];
    updatedPoints[index] = value;
    setFormData({ ...formData, learningPoints: updatedPoints });
  };

  // Add new learning point
  const handleAddLearningPoint = () => {
    setFormData({
      ...formData,
      learningPoints: [...formData.learningPoints, ""],
    });
  };

  // Remove a specific learning point
  const handleRemoveLearningPoint = (index) => {
    const updatedPoints = formData.learningPoints.filter((_, i) => i !== index);
    setFormData({ ...formData, learningPoints: updatedPoints });
  };

  // Handle file upload for images
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const readFiles = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readFiles)
      .then((imageData) => {
        setFormData((prevState) => ({
          ...prevState,
          images: [...prevState.images, ...imageData],
        }));
        e.target.value = ""; // Clear the file input
      })
      .catch((error) => {
        console.error("Error reading files:", error);
      });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add validation or API submission logic here
  };
  const handleRemoveImage = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updatedImages });
  };

  return (
    <div>
      <div
        onClick={() => {
          navigate(-1);
        }}
        style={{ cursor: "pointer" }}
        className="d-flex align-items-center gap-1 py-2"
      >
        <IoChevronBackOutline color="#013C61" />
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "14px",
            color: "#013C61",
            fontWeight: 500,
          }}
        >
          Back
        </Typography>
      </div>
      <div className="container my-2 bg-white p-2 rounded px-4">
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 ">
              <Form.Group
                controlId="formTitle"
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
                    fontFamily: "Bebas Neue",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Title
                </Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter Title "
                  style={{ width: "100%" }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6 ">
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
                    fontFamily: "Bebas Neue",
                    fontSize: "22px",
                    fontWeight: 500,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Gender
                </Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  className="custom-dropdown"
                  value={formData.gender}
                  onChange={handleInputChange}
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
          <div className="row">
            <div className="col-md-6 ">
              <Form.Group
                controlId="lessonType"
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
                    fontFamily: "Bebas Neue",
                    fontSize: "22px",
                    fontWeight: 500,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Lesson Type ( category )
                </Form.Label>
                <Form.Control
                  as="select"
                  name="lessonType"
                  className="custom-dropdown"
                  value={formData.lessonType}
                  onChange={handleInputChange}
                  style={{ width: "100%", paddingRight: "30px" }}
                >
                  <option value="instrument">Instrument</option>
                  <option value="theory">Theory</option>
                  <option value="improvisation">Improvisation</option>
                  <option value="childMusic">Children's Music</option>
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
            <div className="col-md-6 ">
              <Form.Group
                controlId="ageRange"
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
                    fontFamily: "Bebas Neue",
                    fontSize: "22px",
                    fontWeight: 500,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Age Range
                </Form.Label>
                <Form.Control
                  as="select"
                  name="ageRange"
                  className="custom-dropdown"
                  style={{ width: "100%", paddingRight: "30px" }}
                  value={formData.ageRange}
                  onChange={handleInputChange}
                >
                  <option value="beginner">Beginners</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
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
          <div className="row">
            <div className="col-md-6 ">
              <Form.Group
                controlId="availability"
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
                    fontFamily: "Bebas Neue",
                    fontSize: "22px",
                    fontWeight: 500,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Availability
                </Form.Label>
                <Form.Control
                  as="select"
                  name="availability"
                  className="custom-dropdown"
                  style={{ width: "100%", paddingRight: "30px" }}
                  value={formData.availability}
                  onChange={handleInputChange}
                >
                  <option value="inPerson">In-person</option>
                  <option value="online">Online</option>
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
            <div className="col-md-6 ">
              <Form.Group
                controlId="location"
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
                    fontFamily: "Bebas Neue",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Location
                </Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="Enter Loction "
                  style={{ width: "100%" }}
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Group
                controlId="aboutCourse"
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
                    fontFamily: "Bebas Neue",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  About the course
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="aboutCourse"
                  placeholder="Enter about the course"
                  value={formData.aboutCourse}
                  onChange={handleInputChange}
                  rows={3} 
                  style={{
                    width: "100%",
                    textAlign: "left",
                    paddingTop: "5px",
                    resize: "none", 
                  }}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Form.Label>What will students learn in your course?</Form.Label>
              {formData.learningPoints.map((point, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <Form.Control
                    type="text"
                    name="learningPoints"
                    value={point}
                    onChange={(e) =>
                      handleLearningPointChange(index, e.target.value)
                    }
                    placeholder={`Point ${index + 1}`}
                    className="flex-grow-1"
                  />
                  <Button
                    variant="danger"
                    className="ms-2"
                    onClick={() => handleRemoveLearningPoint(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                style={{
                  textAlign: "left",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#089AF5",
                  marginBottom: "5px",
                  marginTop: 10,
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
                onClick={handleAddLearningPoint}
              >
                + Add New Lesson
              </Button>
            </div>
          </div>
          <p
            className="mt-4"
            style={{
              textAlign: "left",
              fontFamily: "Bebas Neue",
              fontSize: "24px",
              fontWeight: 400,
              color: "#003a5e",
              marginBottom: "5px",
              marginTop: 10,
              cursor: "pointer",
            }}
          >
            Course Content
          </p>
          <CreateLectureLesson />

          <div className="form-group mb-3 px-3">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                position: "relative",
                backgroundColor: "#f8f9fa",
              }}
            >
              {formData.images.map((image, index) => (
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
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    onClick={() => removeImage(index)}
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "25px",
                      height: "25px",
                      cursor: "pointer",
                    }}
                  >
                    <FaTimes style={{ color: "#ff0000" }} />
                  </button>
                </div>
              ))}

              <div
                style={{
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  border: "1px dashed #013C61",
                  padding: "5px 10px",
                }}
                onClick={() => document.getElementById("fileInput").click()}
              >
                <input
                  type="file"
                  id="fileInput"
                  name="images"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                    display: "none",
                  }}
                />
                <span style={{ fontSize: "34px", color: "#ccc" }}>+</span>
                <span
                  style={{
                    fontSize: "15px",
                    color: "#ccc",
                    fontFamily: "Poppins",
                  }}
                >
                  Add Thumbnail
                </span>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6 ">
              <Form.Group
                controlId="lessonPrice"
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
                    fontFamily: "Bebas Neue",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Lesson Price
                </Form.Label>
                <Form.Control
                  type="number"
                  name="lessonPrice"
                  style={{ width: "100%" }}
                  value={formData.lessonPrice}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>

            <div className="col-md-6 ">
              <Form.Group
                controlId="discountPrice"
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
                    fontFamily: "Bebas Neue",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#003a5e",
                    marginBottom: "5px",
                  }}
                >
                  Discounted Price
                </Form.Label>
                <Form.Control
                  type="number"
                  name="discountPrice"
                  style={{ width: "100%" }}
                  value={formData.discountPrice}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="mt-4 w-100">
            <button
              type="submit"
              className=" w-100"
              style={{
                fontFamily: "Bebas Neue",
                fontSize: "24px",
                fontWeight: 500,
                color: "#fff",
                marginBottom: "5px",
                marginTop: 10,
                cursor: "pointer",
                border: "1px solid #ff9700",
                padding: "1px 10px",
                backgroundColor: "#ff9700",
                borderRadius: "5px",
              }}
            >
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateLessonPage;
