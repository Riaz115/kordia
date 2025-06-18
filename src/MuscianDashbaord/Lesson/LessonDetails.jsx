import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaChevronDown, FaTimes, FaPlus } from "react-icons/fa";
import { IoChevronBackOutline, IoAddCircleOutline, IoPencil, IoTrash } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Typography, Box, Tabs, Tab, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CreateLectureLesson from "./CreateLectureLesson";
import Paginate from "../../Components/Paginate";
import TableMui from "../../mui/TableMuiCustom";
import EventQuoteModal from "../Modal/EventQuoteModal";

const LessonDetails = () => {
    const [page, setPage] = useState(1);
  
  const navigate = useNavigate();
  const totalItems = 1000;
  const itemsPerPage = 10;
  const headers = [
    { key: "name", label: "Student Name" },
    { key: "contactInfo", label: "Contact Info" },
    { key: "paymentStatus", label: "Payment Status" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      name: "John Doe",
      contactInfo: "johndoe@example.com",
      paymentStatus: "Paid",
      action: "View Details",
    },
    {
      name: "Jane Smith",
      contactInfo: "janesmith@example.com",
      paymentStatus: "Pending",
      action: "Send Reminder",
    },
    {
      name: "Ali Haider",
      contactInfo: "alihaider@example.com",
      paymentStatus: "Paid",
      action: "View Details",
    },
    {
      name: "Maria Garcia",
      contactInfo: "mariagarcia@example.com",
      paymentStatus: "Unpaid",
      action: "Send Reminder",
    },
  ];
  return (
    <div>
      <div
        onClick={() => {
          navigate(-1);
        }}
        style={{ cursor: "pointer" }}
        className="d-flex align-items-center gap-1 py-2"
      >
        <IoChevronBackOutline size={30} color="#013C61" />
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "24px",
            color: "#013C61",
            fontWeight: 500,
          }}
        >
          Course Title
        </Typography>
      </div>
      <div className="">
       
          <div className="">
            <div className="row ">
              <div className="table ">
                <TableMui
                  th={headers.reduce((acc, header) => {
                    acc[header.key] = header.label;
                    return acc;
                  }, {})}
                  td={rows}
                  customFields={[
                    {
                      name: "name",
                      data: (value) => (
                        <Typography

                          sx={{
                            fontSize: "13px",
                            color: "#013c61",
                            fontFamily: "Poppins",
                          }}
                        >
                          {value}
                        </Typography>
                      ),
                    },
                    {
                      name: "contactInfo",
                      data: (value) => (
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#013c61",
                            fontFamily: "Poppins",
                          }}
                        >
                          {value}
                        </Typography>
                      ),
                    },
                    {
                      name: "paymentStatus",
                      data: (value) => (
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#013c61",
                            fontFamily: "Poppins",
                          }}
                        >
                          {value}
                        </Typography>
                      ),
                    },
                    {
                      name: "action",
                      data: () => (
                        <div>
                          <IoPencil
                            size={30}
                            style={{
                              marginRight: "10px",
                              cursor: "pointer",
                              color: "#ffffff",
                              backgroundColor: "#013c61",
                              padding: "5px",
                              borderRadius: "25px",
                            }}
                          />
                          <MdDelete
                            size={30}
                            style={{
                              cursor: "pointer",
                              color: "#ffffff",
                              backgroundColor: "#013c61",
                              padding: "5px",
                              borderRadius: "25px",
                            }}
                          />
                        </div>
                      ),
                    },
                  ]}
                  styleTableTh={{
                    backgroundColor: "#003a5e",
                    color: "#FF9700",
                    fontWeight: 400,
                    fontSize: 20,
                    fontFamily: "Bebas Neue",
                  }}
                />
              </div>
            </div>
            <div className="pagination pt-4 justify-content-end ">
              <Paginate
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                setPage={setPage}
              />
            </div>
          </div>
        
      
      </div>
    </div>
  );
}

export default LessonDetails