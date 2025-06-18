import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Modal, Button } from "react-bootstrap";

function ReportProfile({ show, handleClose }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  // List of options for reporting
  const reportOptions = [
    "Fake profile, information mismatch",
    "This is a duplicate profile",
    "They are being abusive or harmful",
    "No Longer Works with Organizer",
    "Location is incorrect or misleading",
    "Contact information is incorrect",
    "Others",
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose} centered style={{ zIndex: 15000 }}>
      <Modal.Header
        style={{ border: "none", display: "flex", justifyContent: "center" }}
      >
        <Modal.Title
          style={{
            fontFamily: "Poppins",
            fontSize: "24px",
            color: "#013c65",
            fontWeight: "600",
          }}
        >
          Report Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="w-100 ms-5">
        <FormControl>
          <RadioGroup
            aria-labelledby="report-profile-radio-buttons"
            name="report-options"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            {reportOptions.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={
                  <Radio
                    style={{
                      color: "#013c65",
                      "&.Mui-checked": {
                        color: "#013c65",
                      },
                    }}
                  />
                }
                label={
                  <span
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "17px",
                      color: "#013c65",
                      fontWeight: "400",
                    }}
                  >
                    {option}
                  </span>
                }
              />
            ))}
          </RadioGroup>
          {selectedOption === "Others" && (
            <textarea
              placeholder="Please enter any additional information, It will help our investigation"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              style={{
                width: "100%",
                marginTop: "10px",
                border: "1px solid #79878",
                borderRadius: "8px",
                padding: "8px",
                fontSize: "14px",
                fontFamily: "Poppins",
                outline: "none",
              }}
              rows={3}
            />
          )}
        </FormControl>
      </Modal.Body>
      <Modal.Footer style={{ border: "none", justifyContent: "center" }}>
        <Button
          variant="outline-primary"
          onClick={handleClose}
          style={{
            borderRadius: "8px",
            padding: "8px 20px",
            fontFamily: "Poppins",
            fontSize: "17px",
            color: "#013c65",
            borderColor: "#013c65",
            backgroundColor: "#ffffff",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            console.log("Selected Option:", selectedOption);
            console.log("Additional Info:", additionalInfo);
            handleClose();
          }}
          style={{
            borderRadius: "8px",
            padding: "8px 20px",
            fontFamily: "Poppins",
            fontSize: "17px",
            backgroundColor: "#013c65",
            borderColor: "#013c65",
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReportProfile;
