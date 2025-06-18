import { Typography, TextField, InputAdornment } from "@mui/material";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { Accordion, Card, Button } from "react-bootstrap";

const EventFAQs = () => {
  const faqData = [
    {
      question: "What is event management?",
      answer:
        "Event management involves planning and organizing events from start to finish, ensuring every detail is executed as planned.",
    },
    {
      question: "How do I book a musician?",
      answer:
        "To book a musician, you can visit the booking page, select your desired artist, and fill out the booking form.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes, bookings can be canceled within 24 hours of making the payment for a full refund.",
    },
  ];

  const accordionStyle = {
    borderRadius: "10px",
    padding: "5px",
    border: "1px solid #ccc", // Add border to each item
    marginBottom: "10px", // Space between each item
  };

  const headerStyle = {
    backgroundColor: "#f8f9fa", // Light background for header
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };

  const bodyStyle = {
    padding: "15px",
    backgroundColor: "#ffffff", // White background for body
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  };

  return (
    <div className="mt-4 bg-white p-2 px-3 pb-5 pt-3 rounded">
      <Typography
        sx={{
          fontSize: "24px",
          fontFamily: "Poppins",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        How can we help you?
      </Typography>

      {/* Search Input */}
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <TextField
          variant="outlined"
          placeholder="Search help by issue name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IoSearch
                  size={40}
                  style={{
                    color: "white",
                    backgroundColor: "#043B6A",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "white", // White background for the input
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow behind the input
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            "& input::placeholder": {
              color: "#A9A9A9", // Light gray color for the placeholder
            },
            maxWidth: "600px", // Max width for larger screens
            width: "100%", // Ensures it takes up the full width until the maxWidth
          }}
        />
      </div>

      <div className="faq-container mt-4">
        <Accordion>
          {faqData.map((faq, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              style={accordionStyle}
            >
              <Accordion.Header style={headerStyle}>
                {faq.question}
              </Accordion.Header>
              <Accordion.Body style={bodyStyle}>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default EventFAQs;
