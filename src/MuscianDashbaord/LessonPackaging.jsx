import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IoAddCircleOutline, IoPencil, IoTrash } from "react-icons/io5";
import Paginate from "../Components/Paginate";
import TableMui from "../mui/TableMuiCustom";
import { Typography } from "@mui/material";
import EventQuoteModal from "./Modal/EventQuoteModal";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AddCoursePackaging from "./Modal/AddCoursePackaging";
import { FaPlus } from "react-icons/fa";

const LessonPackaging = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Method to open the EventQuoteModal
  const openEventQuoteModal = () => {
    setIsModalOpen(true);
  };

  const totalItems = 1000;
  const itemsPerPage = 10;
  const headers = [
    { key: "title", label: "Title" },
    { key: "publishDate", label: "Publish Date" },
    { key: "sales", label: "Sales" },
    { key: "courseInPackage", label: "Course in Package" },
    { key: "category", label: "Category" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      title: "Christine Brooks",
      publishDate: "Summer",
      sales: "New York",
      courseInPackage: "5",
      category: "Music",
      action: ["Edit", "Delete"],
    },
    {
      title: "Christine Brooks",
      publishDate: "Jazz",
      sales: "Los Angeles",
      courseInPackage: "50",
      category: "Music",
      action: ["Edit", "Delete"],
    },
    {
      title: "Christine Brooks",
      publishDate: "Summer",
      sales: "Chicago",
      courseInPackage: "5",
      category: "Music",
      action: ["Edit", "Delete"],
    },
    {
      title: "Christine Brooks",
      publishDate: "Festival",
      sales: "San Francisco",
      courseInPackage: "50",
      category: "Music",
      action: ["Edit", "Delete"],
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "700",
              color: "#013C61",
            }}
          >
            Manage Course Packaging{" "}
          </p>
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
            <FaPlus className="me-2" size={22} />
            Add New Package
          </Button>
        </div>
      </div>

      <div className="row">
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
                name: "courseInPackage",
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
      <div className="pagination pt-4 justify-content-end">
        <Paginate
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
        />
      </div>

      <AddCoursePackaging show={show} handleClose={handleClose} />
    </div>
  );
};

export default LessonPackaging;
