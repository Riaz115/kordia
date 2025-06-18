import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import cross from "/assets/images/cross.png";
import { FaTimes } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Typography } from "@mui/material";

const AddCoursePackaging = ({ show, handleClose }) => {
  const [bundleCourse, setBundleCourse] = useState([]); // State for the selected courses
  const [dummyData, setDummyData] = useState([
    { id: 1, name: "Course One" },
    { id: 2, name: "Course Two" },
    { id: 3, name: "Course Three" },
  ]); // Data for display

  // Handle adding course to the bundleCourse array
  const handleAddCourse = (event) => {
    const selectedValue = event.target.value;
    const selectedCourse = dummyData.find(
      (course) => course.id === parseInt(selectedValue)
    );
    if (
      selectedCourse &&
      !bundleCourse.some((course) => course.id === selectedCourse.id)
    ) {
      setBundleCourse([...bundleCourse, selectedCourse]);
    }
  };

  // Handle removing course from the bundleCourse array
  const handleRemoveCourse = (id) => {
    const updatedCourses = bundleCourse.filter((course) => course.id !== id);
    setBundleCourse(updatedCourses);
  };

  const [images, setImages] = useState([]);

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
        setImages((prevImages) => [...prevImages, ...imageData]);
        e.target.value = ""; // Clear the file input
      })
      .catch((error) => {
        console.error("Error reading files:", error);
      });
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      style={{ zIndex: 15000 }}
    >
      <Modal.Body>
        <Form>
          <div className="row">
            <Form.Group className="mb-3 col-md-12">
              <Form.Label
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "39.29px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#013c65",
                }}
              >
                Package Title
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>
          </div>
          <div className="row m-0 g-0 p-0">
            <Form.Group className="mb-3 col-md-12">
              <Form.Label
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "39.29px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#013c65",
                }}
              >
                {" "}
                Description
              </Form.Label>
              <Form.Control type="text" style={{ height: "100px" }} />
            </Form.Group>
          </div>
          <div className="row m-0 g-0 p-0">
            <Form.Group className="mb-3 col-md-12">
              <Form.Label
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "39.29px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#013c65",
                }}
              >
                Genres Type
              </Form.Label>
              <Form.Select>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div>
            {/* Course Selection Section */}
            <div className="row m-0 g-0 p-0">
              <Form.Group className="mb-3 col-md-12">
                <Form.Label
                  style={{
                    fontFamily: "Bebas Neue",
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: "39.29px",
                    textAlign: "left",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#013c65",
                  }}
                >
                  Add Course
                </Form.Label>
                <Form.Select onChange={handleAddCourse}>
                  <option value="">Select a Course</option>
                  {dummyData.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            {/* Display Selected Courses Section */}

            <div
              className="row m-1 p-2"
              style={{ border: "1px solid #bfc2c4", borderRadius: "8px" }}
            >
              {bundleCourse.length > 0 ? (
                bundleCourse.map((course) => (
                  <div
                    key={course.id}
                    className=" d-flex justify-content-between align-items-center"
                    style={{
                      width: "100%",
                      height: "auto",
                      padding: "10px 0",
                    }}
                  >
                    <div className=" d-flex align-items-center">
                      <p
                        className="mx-2"
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#ffffff",
                          backgroundColor: "#013c65",
                          borderRadius: "50%",
                          padding: "5px 10px",
                        }}
                      >
                        {course.id}
                      </p>
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#4e5f6a",
                          marginLeft: "8px",
                        }}
                      >
                        {course.name}
                      </p>
                    </div>
                    <div>
                      <IoIosCloseCircle
                        size={24}
                        color="#C00000"
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                        onClick={() => handleRemoveCourse(course.id)}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <Typography sx={{ fontFamily: "Poppins" }}>
                  No Course Selected
                </Typography>
              )}
            </div>
          </div>
        </Form>

        <div className="form-group mb-3">
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
                padding: "5px 10px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                cursor: "pointer",
                border: "1px dashed #ccc",
              }}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                type="file"
                id="fileInput"
                accept="image/*"
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
              <span style={{ fontSize: "17px", color: "#ccc" }}>
                Add Thumbnail
              </span>
            </div>
          </div>
        </div>

        <Form>
          <div className="row">
            <Form.Group className="mb-3 col-md-6">
              <Form.Label
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "39.29px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#013c65",
                }}
              >
                Price
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Price" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6">
              <Form.Label
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "39.29px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#013c65",
                }}
              >
                Duration
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Duration" />
            </Form.Group>
          </div>
        </Form>

        <div className="row w-100 justify-content-center align-items-center mt-3 ms-1">
          <Button
            variant="outline"
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "22px",
              fontWeight: 400,
              color: "#ffffff",
              backgroundColor: "#FF9700",
              border: "none",
              padding: "5px 10px",
            }}
          >
            Save
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddCoursePackaging;
