import {
  Typography,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useState } from "react";

const AddFAQs = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(""); // For handling radio button selection
  const [writtenAnswer, setWrittenAnswer] = useState(""); // For handling written answer input
  const [question, setQuestion] = useState(""); // For handling question input

  const [error, setError] = useState(""); // For tracking errors

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleWrittenAnswerChange = (event) => {
    setWrittenAnswer(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSave = () => {
    // Reset error state
    setError("");

    // Validation
    if (!question) {
      setError("Question is required.");
      return;
    }

    if (selectedAnswer && writtenAnswer) {
      setError(
        "Please provide only one type of answer: either select or type."
      );
      return;
    }

    let finalAnswer = selectedAnswer ? selectedAnswer : writtenAnswer;

    // If neither answer is selected or typed, show error
    if (!finalAnswer) {
      setError("Please provide an answer.");
      return;
    }

    // Create the FAQ object to save
    const faqData = {
      question,
      answer: finalAnswer, // Store either selectedAnswer or writtenAnswer
    };

    console.log("Saved FAQ:", faqData);

    // Optionally, reset the form after saving
    setQuestion("");
    setWrittenAnswer("");
    setSelectedAnswer("");
  };

  return (
    <div className="mt-4 bg-white p-2 px-3 pb-5 pt-3 rounded mx-4">
      <div
        className="d-flex justify-content-between align-items-center rounded p-3"
        style={{ backgroundColor: "#013C61" }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            color: "white",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Add FAQ Details
        </Typography>
      </div>

      {/* FAQ form content */}
      <div className="mt-4 d-flex px-md-4">
        <div
          style={{
            maxWidth: "400px",
            width: "100%",
          }}
        >
          {/* Add Question Field */}
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "#013C61",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Add Question
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Type here"
            fullWidth
            value={question}
            onChange={handleQuestionChange}
            sx={{
              backgroundColor: "white",
              marginTop: "10px",
              borderColor: error && !question ? "red" : "",
            }}
          />
          {error && !question && (
            <Typography
              sx={{ color: "red", fontSize: "12px", marginTop: "5px" }}
            >
              {error}
            </Typography>
          )}

          {/* Description text */}
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "#D5D5D5",
              fontSize: "14px",
              marginTop: "15px",
              fontWeight: 500,
            }}
          >
            This option will be to type the answer or select the answer.
          </Typography>

          {/* Type Answer Field */}
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "#013C61",
              fontWeight: 500,
              fontSize: "14px",
              marginTop: "20px",
            }}
          >
            Type Answer
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Type here"
            fullWidth
            value={writtenAnswer}
            onChange={handleWrittenAnswerChange}
            sx={{
              backgroundColor: "white",
              marginTop: "10px",
              borderColor:
                error && !writtenAnswer && !selectedAnswer ? "red" : "",
            }}
          />

          {/* Select Answer Option */}
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "#717171",
              fontWeight: 700,
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            OR
          </Typography>
          <FormControl component="fieldset" sx={{ marginTop: "10px" }}>
            <RadioGroup
              row
              value={selectedAnswer}
              onChange={handleAnswerChange}
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    sx={{
                      color: selectedAnswer === "yes" ? "#FF9700" : "",
                      "&.Mui-checked": {
                        color: "#FF9700", // Ensures the inner circle is orange when selected
                      },
                    }}
                  />
                }
                label="Yes"
                labelPlacement="end"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      color: selectedAnswer === "no" ? "#FF9700" : "",
                      "&.Mui-checked": {
                        color: "#FF9700", // Ensures the inner circle is orange when selected
                      },
                    }}
                  />
                }
                label="No"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>

          {/* Show error for both answers being filled */}
          {error && selectedAnswer && writtenAnswer && (
            <Typography
              sx={{ color: "red", fontSize: "12px", marginTop: "5px" }}
            >
              {error}
            </Typography>
          )}

          {/* Action Buttons */}
          <div className="d-flex mt-5 gap-2">
            <button
              type="button"
              style={{
                backgroundColor: "#D5D5D5",
                color: "black",
                borderRadius: "30px",
                padding: "8px 30px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onClick={() => {
                setQuestion("");
                setWrittenAnswer("");
                setSelectedAnswer("");
                setError("");
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              style={{
                backgroundColor: "#003A5E",
                color: "white",
                borderRadius: "30px",
                padding: "8px 30px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFAQs;
