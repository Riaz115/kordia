import { Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AdminFAQs = () => {
  const navigate = useNavigate();
  // Sample FAQ data
  const [faqs, setFaqs] = useState([
    { id: 1, question: "Do you provide event planning services?" },
    { id: 2, question: "What type of events do you specialize in?" },
    { id: 3, question: "Can I book a musician for my event?" },
    { id: 4, question: "How do I cancel a booking?" },
  ]);

  // Handle Edit
  const handleEdit = (id) => {
    console.log("Edit FAQ with ID:", id);
  };

  // Handle Delete
  const handleDelete = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id)); // Immediately delete the FAQ
  };

  return (
    <div className="mt-4 bg-white p-2 px-3 pb-5 pt-3 rounded">
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
          Add a Specific FAQ
        </Typography>
        <Button
          onClick={() => {
            navigate("/admin/addFAQs");
          }}
          sx={{
            backgroundColor: "white",
            textTransform: "capitalize",
            color: "#013C61",
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          Add FAQ
        </Button>
      </div>

      {/* FAQ List */}
      <div className="mt-4 d-flex flex-column gap-2 ">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white d-flex align-items-center justify-content-between p-3 shadow rounded"
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#013C61",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              {faq.question}
            </Typography>

            <div className="d-flex gap-2">
              <IconButton
                sx={{
                  backgroundColor: "#D5D5D5",
                  padding: "5px",
                  borderRadius: 2,
                }}
                onClick={() => handleDelete(faq.id)} // Immediately delete FAQ
              >
                <MdDelete size={20} />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "#D5D5D5",
                  padding: "5px",
                  borderRadius: 2,
                }}
                onClick={() => handleEdit(faq.id)} // Log the ID when Edit is clicked
              >
                <MdEdit size={20} />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFAQs;
