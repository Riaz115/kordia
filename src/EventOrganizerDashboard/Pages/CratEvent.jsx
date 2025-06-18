import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { TextField, InputAdornment, Divider } from "@mui/material";
import { MdAccessTime, MdEvent } from "react-icons/md";
const CratEvent = () => {
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
    <div className="p-3">
      <div className="shadow-lg p-2">
        <p
          className="px-3"
          style={{
            fontSize: "34px",
            fontWeight: 400,
            color: "#003a5e",
            fontFamily: "Bebas Neue",
            borderBottom: "1px solid #013C61 ",
          }}
        >
          Event Information
        </p>

        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="form-group mb-3 px-3">
              <label
                className="form-label mb-0"
                style={{
                  color: "#FF9700",
                  fontWeight: 400,
                  fontSize: "27px",
                  fontFamily: "Bebas Neue",
                }}
              >
                Event Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Default Event Name"
                style={{ backgroundColor: "white", padding: "10px" }}
              />
            </div>
            <div className="form-group mb-3 px-3">
              <label
                className="form-label mb-0"
                style={{
                  color: "#FF9700",
                  fontWeight: 400,
                  fontSize: "27px",
                  fontFamily: "Bebas Neue",
                }}
              >
                Event Type
              </label>
              <div style={{ position: "relative" }}>
                <select
                  className="form-control"
                  defaultValue="value"
                  style={{
                    backgroundColor: "white",
                    padding: "10px",
                    appearance: "none",
                    width: "100%",
                  }}
                >
                  <option>Select Event Type</option>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="seminar">Seminar</option>
                  <option value="webinar">Webinar</option>
                </select>
                <FaChevronDown
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "#FF9700",
                  }}
                />
              </div>
            </div>

            <div className="form-group mb-3 px-3 ">
              <label
                className="form-label mb-0"
                style={{
                  color: "#FF9700",
                  fontWeight: 400,
                  fontSize: "27px",
                  fontFamily: "Bebas Neue",
                }}
              >
                Event Location / Venue / Address
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue=""
                style={{ backgroundColor: "white", padding: "8px" }}
              />
            </div>
            <div className="form-group mb-3 px-3 ">
              <label
                className="form-label mb-0"
                style={{
                  color: "#FF9700",
                  fontWeight: 400,
                  fontSize: "27px",
                  fontFamily: "Bebas Neue",
                }}
              >
              estimated number of guests
              </label>
              <input
                type="number"
                className="form-control"
                defaultValue=""
                style={{ backgroundColor: "white", padding: "8px" }}
              />
            </div>
            <div className="form-group mb-3 px-3">
              <label
                className="form-label mb-0"
                style={{
                  color: "#FF9700",
                  fontWeight: 400,
                  fontSize: "27px",
                  fontFamily: "Bebas Neue",
                }}
              >
                Event Description
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue=""
                style={{ backgroundColor: "white", padding: "40px" }}
              />
            </div>
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
                    width: "126px",
                    height: "81px",
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
                  <span style={{ fontSize: "17px", color: "#ccc" }}>
                    Add Image
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="form-group mb-3 px-3">
              <label
                className="form-label mb-0"
                style={{
                  color: "#FF9700",
                  fontWeight: 400,
                  fontSize: "27px",
                  fontFamily: "Bebas Neue",
                }}
              >
                Performance Type
              </label>
              <div style={{ position: "relative" }}>
                <select
                  className="form-control"
                  defaultValue="value"
                  style={{
                    backgroundColor: "white",
                    padding: "10px",
                    appearance: "none",
                    width: "100%",
                  }}
                >
                  <option>Select Event Type</option>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="seminar">Seminar</option>
                  <option value="webinar">Webinar</option>
                </select>
                <FaChevronDown
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "#FF9700",
                  }}
                />
              </div>
            </div>
            <div className="form-group mb-3 px-3">
              <label
                htmlFor="from"
                className="form-label mb-0"
                style={{
                  color: "#FF9700",
                  fontWeight: 400,
                  fontSize: "27px",
                  fontFamily: "Bebas Neue",
                }}
              >
                Email *
              </label>
              <input
                type="email"
                className="form-control"
                id="from"
                placeholder="example@example.com"
                style={{ backgroundColor: "white", padding: "10px" }}
              />
            </div>
            <div className="form-group mb-3 px-3">
              <label
                htmlFor="from"
                className="form-label mb-0"
                style={{
                  color: "#FF9700",
                  fontWeight: 400,
                  fontSize: "27px",
                  fontFamily: "Bebas Neue",
                }}
              >
                Number
              </label>
              <input
                type="number"
                className="form-control"
                id="from"
                placeholder="000985"
                style={{ backgroundColor: "white", padding: "10px" }}
              />
            </div>
            <div className="row px-3 mb-3">
              <div className="col-md-6 form-group mb-3 px-3">
                {/* Event Time Input */}
                <label
                  htmlFor="eventTime"
                  className="form-label mb-0"
                  style={{
                    color: "#FF9700",
                    fontWeight: 400,
                    fontSize: "27px",
                    fontFamily: "Bebas Neue",
                  }}
                >
                  Event Time
                </label>
                <TextField
                  id="eventTime"
                  type="time"
                  value="12:00"
                  sx={{
                    backgroundColor: "white",
                    "& input": {
                      padding: "10px",
                      "&::-webkit-calendar-picker-indicator": {
                        filter:
                          "invert(41%) sepia(100%) saturate(2219%) hue-rotate(17deg) brightness(103%) contrast(101%)",
                      },
                    },
                  }}
                  fullWidth
                />
              </div>

              <div className="col-md-6 form-group mb-3 px-3">
                {/* Event Date Input */}
                <label
                  htmlFor="eventDate"
                  className="form-label mb-0"
                  style={{
                    color: "#FF9700",
                    fontWeight: 400,
                    fontSize: "27px",
                    fontFamily: "Bebas Neue",
                  }}
                >
                  Event Date
                </label>
                <TextField
                  id="eventDate"
                  type="date"
                  value="2024-12-15"
                  sx={{
                    backgroundColor: "white",
                    "& input": {
                      padding: "10px",
                      "&::-webkit-calendar-picker-indicator": {
                        filter:
                          "invert(41%) sepia(100%) saturate(2219%) hue-rotate(17deg) brightness(103%) contrast(101%)",
                      },
                    },
                  }}
                  fullWidth
                />
              </div>
            </div>
            <div className="form-group mb-3 px-3">
              <label
                htmlFor="from"
                className="form-label mb-0"
                style={{
                  color: "#FF9700",
                  fontWeight: 400,
                  fontSize: "27px",
                  fontFamily: "Bebas Neue",
                }}
              >
                Event duration
              </label>
              <input
                type="text"
                className="form-control"
                id="from"
                style={{ backgroundColor: "white", padding: "10px" }}
              />
            </div>
            <div className="form-group mb-3 px-3">
              <label
                htmlFor="from"
                className="form-label mb-0"
                style={{
                  color: "#FF9700",
                  fontWeight: 400,
                  fontSize: "27px",
                  fontFamily: "Bebas Neue",
                }}
              >
            Budget Range
              </label>
              <input
                type="number"
                className="form-control"
                id="from"
                style={{ backgroundColor: "white", padding: "10px" }}
              />
            </div>
            <div className="form-group mb-3 px-3">
              <button
                className="btn"
                style={{
                  width: "100%",
                  backgroundColor: "#ff9700",
                  borderRadius: "20px",
                  color: "white",
                  fontWeight: 400,
                  fontSize: "20px",
                  fontFamily: "Bebas Neue",
                }}
              >
                Create Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CratEvent;
