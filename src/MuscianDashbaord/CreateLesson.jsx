import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Typography, Box, Tabs, Tab, Grid } from "@mui/material";
import { IoAddCircleOutline, IoPencil, IoTrash } from "react-icons/io5";
import Paginate from "../Components/Paginate";
import TableMui from "../mui/TableMuiCustom";
import EventQuoteModal from "./Modal/EventQuoteModal";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const CreateLesson = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const [page, setPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Method to open the EventQuoteModal
  const openEventQuoteModal = () => {
    setIsModalOpen(true);
  };

  const totalItems = 1000;
  const itemsPerPage = 10;
  const headers = [
    { key: "title", label: "Course Title" },
    { key: "publishDate", label: "Publish Date" },
    { key: "sales", label: "Sales" },
    { key: "category", label: "Category" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      title: "The Art of Jazz",
      publishDate: "2023-12-01",
      sales: "5,000",
      category: "Music",
    },
    {
      title: "Summer Melodies",
      publishDate: "2024-01-15",
      sales: "10,000",
      category: "Festival",
    },
    {
      title: "Rhythms of Life",
      publishDate: "2023-10-05",
      sales: "8,500",
      category: "Jazz",
    },
    {
      title: "City Sounds",
      publishDate: "2023-11-20",
      sales: "12,000",
      category: "Urban",
    },
  ];

  const handleShow = () => {
    navigate("/musician/create-lesson-page");
  };
  const handleCourse = () => {
    navigate("/musician/course-details");
  };

  return (
    <div className="container">
      <div className="row  d-flex align-items-center">
        <div className="col ">
          {/* Tabs Section */}
          <Box
            className=""
            sx={{
              display: "flex",
              justifyContent: "start",
              my: 2, // Margin top for spacing
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              TabIndicatorProps={{
                style: { display: "none" }, // Hides the default indicator
              }}
              sx={{
                backgroundColor: "#BFCDD6",
                border: "1px solid #034F75",
                borderRadius: "8px",
                p: "2px", // Padding inside the tabs
                width: { xs: "200px", md: "300px" },
              }}
            >
              <Tab
                label="Online"
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  fontSize: { xs: 8, md: 14 },
                  flex: 1,
                  px: 2,
                  backgroundColor: activeTab === 0 ? "#FFFFFF" : "transparent",
                  color: activeTab === 0 ? "#034F75" : "#034F75",
                  fontWeight: activeTab === 0 ? 600 : 400,
                  borderRadius: "5px",
                }}
              />
              <Tab
                label="In-person"
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  fontSize: { xs: 8, md: 14 },
                  flex: 1,
                  px: 2,
                  backgroundColor: activeTab === 1 ? "#FFFFFF" : "transparent",
                  color: activeTab === 1 ? "#034F75" : "#034F75",
                  fontWeight: activeTab === 1 ? 600 : 400,
                  borderRadius: "5px",
                }}
              />
            </Tabs>
          </Box>
        </div>
        <div className="col mt-1 text-end">
          <Button
            variant="outline"
            style={{
              backgroundColor: "#ff9700",
              color: "white",
              fontWeight: "400",
              fontSize: "16px",
              fontFamily: "Poppins",
            }}
            onClick={handleShow} // Fix here: Use `handleShow` to open the modal
          >
            <FaPlus className="mx-2 my-1" size={20} />
            Add New Course
          </Button>
        </div>
      </div>

      <div className="mt-5 ">
        {activeTab === 0 && (
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
                      name: "title",
                      data: (value) => (
                        <Typography
                        onClick={handleCourse}

                          sx={{
                            fontSize: "13px",
                            color: "#013c61",
                            fontFamily: "Poppins",
                            cursor:"pointer"  
                          }}
                        >
                          {value}
                        </Typography>
                      ),
                    },
                    {
                      name: "publishDate",
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
                      name: "sales",
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
                      name: "category",
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
                            onClick={handleShow}
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
        )}
        {activeTab === 1 && (
          <div className="">
            <div className="row ">
              <div className="table">
                <TableMui
                  th={headers.reduce((acc, header) => {
                    acc[header.key] = header.label;
                    return acc;
                  }, {})}
                  td={rows}
                  customFields={[
                    {
                      name: "title",
                      data: (value) => (
                        <Typography
                        onClick={handleCourse}

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
                      name: "publishDate",
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
                      name: "sales",
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
                      name: "category",
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
                            onClick={handleShow}
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
        )}
      </div>
    </div>
  );
};

export default CreateLesson;
