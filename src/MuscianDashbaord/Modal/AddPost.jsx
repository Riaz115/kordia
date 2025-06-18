import React from "react";
import { Modal, Button } from "react-bootstrap";
import eventorganizer3 from "/assets/images/eventorganizer3.png";
import { RiArrowDropLeftLine } from "react-icons/ri";

function AddPost({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header style={{ backgroundColor: "#f5e1c4", border: "none" }}>
        <Modal.Title className="w-100 justify-content-between d-flex">
          <div className="col-2">
            <img
              src={eventorganizer3}
              alt=""
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </div>
          <div className="col-10 d-flex justify-content-end gap-2">
            <Button
              style={{
                border: "none",
                padding: "1px 20px",
                backgroundColor: "#e3a750",
                color: "white",
                borderRadius: "15px",
                fontSize: "20px",
                fontFamily: "Bebas Neue",
                height: "35px",
                fontWeight: 400,
              }}
            >
              Other
              <RiArrowDropLeftLine size={24} style={{ marginLeft: "10px" }} />
            </Button>
            <Button
              style={{
                border: "none",
                padding: "1px 20px",
                backgroundColor: "#ff9700",
                color: "white",
                borderRadius: "15px",
                fontSize: "20px",
                fontFamily: "Bebas Neue",
                height: "35px",
                fontWeight: 400,
              }}
            >
              Post
            </Button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="" style={{ backgroundColor: "#f5e1c4" }}>
        {/* Textarea with no border or background */}
        <textarea
          placeholder="What's on your head?"
          style={{
            width: "100%",
            minHeight: "150px",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            padding: "10px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "18px",
            color: "#809DAF",
            resize: "none", // Disable resizing
          }}
        />
      </Modal.Body>
      <Modal.Footer
        style={{ backgroundColor: "#f5e1c4", border: "none" }}
      ></Modal.Footer>
    </Modal>
  );
}

export default AddPost;
