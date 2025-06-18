import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Lecture from "/assets/images/lecture.png";
import { FaBars } from "react-icons/fa6";
import { Typography,Button } from "@mui/material";

const CreateLectureLesson = () => {
  const [isShowLesson, setIsShowLesson] = useState([]);
  const [lessons, setLessons] = useState([]);

  const handleAddLecture = (lessonIndex) => {
    console.log(lessonIndex);

    const updatedLessons = [...lessons];

    updatedLessons[lessonIndex].lectures.push({
      lectureIndex: updatedLessons[lessonIndex].lectures.length,
      title: "",
      video: null,
    });

    setLessons(updatedLessons);
  };
  const handleShowLesson = () => {
    setIsShowLesson([...isShowLesson, { title: "", isEditing: true }]);
  };

  const handleVideoUpload = (lessonIndex, lectureIndex, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedLessons = [...lessons];
      updatedLessons[lessonIndex].lectures[lectureIndex].video =
        URL.createObjectURL(file);
      setLessons(updatedLessons);
    }
  };
  const handlePlayVideo = (videoUrl) => {
    const videoWindow = window.open(videoUrl, "_blank");
    videoWindow.focus();
  };
  const handleCancel = (index) => {
    const updatedLessons = [...isShowLesson];
    updatedLessons.splice(index, 1);
    setIsShowLesson(updatedLessons);
  };
  const handleSave = (index, title) => {
    const updatedLessons = [...lessons];
    updatedLessons.push({ title, video: null, lectures: [] }); // Add new lesson with title
    setLessons(updatedLessons); // Update lessons array

    const updatedIsShowLesson = [...isShowLesson];
    updatedIsShowLesson[index] = {
      ...updatedIsShowLesson[index],
      title,
      isEditing: false,
    }; // Exit editing
    setIsShowLesson(updatedIsShowLesson); // Update editable lesson state
  };
  const handleEditLesson = (index) => {
    const updatedLessons = [...isShowLesson];
    updatedLessons[index].isEditing = true;
    setIsShowLesson(updatedLessons);
  };
  const handleDeleteLesson = (index) => {
    const updatedLessons = [...lessons];
    updatedLessons.splice(index, 1);
    setLessons(updatedLessons);
  };

  const handleSaveLecture = (lessonIndex, lectureIndex, title) => {
    const updatedLessons = [...lessons];
    updatedLessons[lessonIndex].lectures[lectureIndex].title = title;
    updatedLessons[lessonIndex].lectures[lectureIndex].isEditing = false; // Save and stop editing
    setLessons(updatedLessons);
  };

  const handleCancelLecture = (lessonIndex, lectureIndex) => {
    console.log();

    const updatedLessons = [...lessons];
    updatedLessons[lessonIndex].lectures[lectureIndex].isEditing = false;
    setLessons(updatedLessons);
  };
  return (
    <div className="container">
      <div
        className="p-3 rounded rounded "
        style={{ backgroundColor: "#bfcdd6" }}
      >
        {lessons.length > 0 ? (
          lessons.map((lesson, index) => (
            <div key={index} className="lesson-container">
              {/* Lesson Header */}
              <div className="me-2 ms-2 d-flex justify-content-start align-items-center">
                <p
                  className="ms-2"
                  style={{
                    textAlign: "left",
                    fontFamily: "Bebas Neue",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#003a5e",
                    marginBottom: "5px",
                    marginTop: 10,
                    cursor: "pointer",
                  }}
                >
                  Lesson {index + 1}: {lesson.title}
                </p>
                <MdEdit
                  className="ms-2"
                  size={20}
                  style={{ color: "#003a5e" }}
                  onClick={() => handleEditLesson(index)}
                />
                <MdDelete
                  className="ms-2"
                  size={20}
                  style={{ color: "#003a5e" }}
                  onClick={() => handleDeleteLesson(index)}
                />
              </div>

              {/* Lesson Content */}
              <div className="row bg-white p-2 mt-2 me-2 ms-2">
                <div className="col d-flex justify-content-start align-items-center">
                  <img
                    src={Lecture}
                    alt="Lecture"
                    style={{ width: 20, height: 20 }}
                  />
                  <p
                    className="ms-2"
                    style={{
                      textAlign: "left",
                      fontFamily: "Bebas Neue",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#003a5e",
                      marginBottom: "5px",
                      marginTop: 10,
                      cursor: "pointer",
                    }}
                  >
                    Lesson no {index + 1}: {lesson.title}
                  </p>
                  <MdEdit
                    className="ms-2"
                    size={20}
                    style={{ color: "#003a5e" }}
                    onClick={() => handleEditLesson(index)}
                  />
                  <MdDelete
                    className="ms-2"
                    size={20}
                    style={{ color: "#003a5e" }}
                    onClick={() => handleDeleteLesson(index)}
                  />
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                  <button
                    className="btn"
                    style={{
                      fontFamily: "Bebas Neue",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#003a5e",
                      marginBottom: "5px",
                      marginTop: 10,
                      cursor: "pointer",
                      border: "1px solid #003a5e",
                    }}
                  >
                    + Content
                  </button>
                  <FaBars
                    className="ms-2"
                    size={24}
                    style={{ color: "#003a5e" }}
                  />
                </div>
              </div>

              {/* Add New Lecture Button */}
              <div className="row me-2 ms-2">
                <div className="col d-flex justify-content-start align-items-center">
                  <button
                    className="btn"
                    style={{
                      fontFamily: "Bebas Neue",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#003a5e",
                      marginBottom: "5px",
                      marginTop: 10,
                      cursor: "pointer",
                      border: "1px solid #003a5e",
                      padding: "5px 10px",
                      backgroundColor: "#fff",
                    }}
                    onClick={() => handleAddLecture(index)}
                  >
                    + Add New Lecture
                  </button>
                </div>
              </div>

              {/* Render Lectures */}
              {lesson.lectures.map((lecture, lectureIndex) => (
                <div key={lectureIndex} className="row mt-4 me-2 ms-2 bg-white">
                  <div className="col d-flex justify-content-start align-items-center">
                    <p
                      className="me-2"
                      style={{
                        textAlign: "left",
                        fontFamily: "Bebas Neue",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#003a5e",
                        marginBottom: "5px",
                        marginTop: 10,
                        cursor: "pointer",
                      }}
                    >
                      Lecture no {lectureIndex + 1}: {lecture.title}
                    </p>
                    <Form.Control
                      type="text"
                      placeholder="Enter Lecture Title"
                      style={{ width: "80%" }}
                    />
                    <button
                      className="btn ms-4 mb-2"
                      style={{
                        fontFamily: "Bebas Neue",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#003a5e",
                        marginBottom: "5px",
                        marginTop: 10,
                        cursor: "pointer",
                        border: "1px solid #003a5e",
                        padding: "5px 10px",
                        backgroundColor: "#fff",
                      }}
                      onClick={() => handleCancelLecture(index, lectureIndex)}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn ms-2 mb-2"
                      style={{
                        fontFamily: "Bebas Neue",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#fff",
                        marginBottom: "5px",
                        marginTop: 10,
                        cursor: "pointer",
                        border: "1px solid #003a5e",
                        padding: "5px 10px",
                        backgroundColor: "#003a5e",
                      }}
                      onClick={() =>
                        handleSaveLecture(lecture, lectureIndex, lecture.title)
                      }
                    >
                      Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <Typography sx={{ fontFamily: "Poppins" }}>
            {" "}
            No Lesson Added
          </Typography>
        )}
      </div>

      {isShowLesson.map((lesson, index) => (
        <div
          key={index}
          className="p-3 mt-2 rounded"
          style={{ backgroundColor: "#bfcdd6" }}
        >
          <div className="row me-2 ms-2 bg-white">
            <div className="col d-flex justify-content-start align-items-center">
              <p
                className="me-2"
                style={{
                  textAlign: "left",
                  fontFamily: "Bebas Neue",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#003a5e",
                  marginBottom: "5px",
                  marginTop: 10,
                  cursor: "pointer",
                }}
              >
                Lesson No
              </p>
              <Form.Control
                type="text"
                placeholder="Enter Lesson Title"
                style={{ width: "80%" }}
                value={lesson.title}
                onChange={(e) => {
                  const updatedLessons = [...isShowLesson];
                  updatedLessons[index].title = e.target.value;
                  setIsShowLesson(updatedLessons);
                }}
              />
              <button
                className="btn ms-4 mb-2"
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#003a5e",
                  marginBottom: "5px",
                  marginTop: 10,
                  cursor: "pointer",
                  border: "1px solid #003a5e",
                  padding: "5px 10px",
                  backgroundColor: "#fff",
                }}
                onClick={() => handleCancel(index)}
              >
                Cancel
              </button>
              <button
                className="btn ms-2 mb-2"
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#fff",
                  marginBottom: "5px",
                  marginTop: 10,
                  cursor: "pointer",
                  border: "1px solid #003a5e",
                  padding: "5px 10px",
                  backgroundColor: "#003a5e",
                }}
                onClick={() => handleSave(index, lesson.title)}
              >
                Save
              </button>
            </div>
          </div>
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
        onClick={handleShowLesson}
      >
        + Add New Lesson
      </Button>
    </div>
  );
};
export default CreateLectureLesson;
