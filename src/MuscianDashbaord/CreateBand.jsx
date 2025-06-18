import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IoAddCircleOutline, IoPencil, IoTrash } from "react-icons/io5";
import AddBand from "./Modal/AddBand";
import Paginate from "../Components/Paginate";
import TableMui from "../mui/TableMuiCustom";
import { Typography } from "@mui/material";
import EventQuoteModal from "./Modal/EventQuoteModal";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CreateBand = () => {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log("Navigating to:", `/musician/band-details`);
    navigate("/musician/band-details");
  };
  
  // Method to open the EventQuoteModal
  const openEventQuoteModal = () => {
    setIsModalOpen(true);
  };

  const totalItems = 1000;
  const itemsPerPage = 10;
  const headers = [
    { key: "bandName", label: "Band Name" },
    { key: "genre", label: "Genre" },
    // Replace "advanceAmount" with the new field "location"
    { key: "location", label: "Location" },
    { key: "bandMember", label: "Band member" },

    { key: "action", label: "Action" },
  ];

  const rows = [
    {id:1,
      bandName: "Christine Brooks",
      genre: "Summer",
      // Replace "advanceAmount" with the new field "location"
      location: "New York",
      bandMember: "5",

      action: ["Edit , Delete"],
    },
    {id:2,
      bandName: "Christine Brooks",
      genre: "Jazz",
      // Replace "advanceAmount" with the new field "location"
      location: "Los Angeles",
      bandMember: "50",

      action: ["Edit , Delete"],
    },
    {id:3,
      bandName: "Christine Brooks",
      genre: "Summer",
      // Replace "advanceAmount" with the new field "location"
      location: "Chicago",
      bandMember: "5",

      action: ["Edit , Delete"],
    },
    {id:4,
      bandName: "Christine Brooks",
      genre: "Festival",
      // Replace "advanceAmount" with the new field "location"
      location: "San Francisco",
      bandMember: "50",

      action: ["Edit , Delete"],
    },
  ];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            Manage Band
          </p>
        </div>
        <div className="col text-end">
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
            <FaPlus className="me-2" size={24} />
            Add New Band
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
                name: "bandName",
                data: (value, row) => (
                  <Typography
                    onClick={() => handleClick(row.id)} // Pass `row.id` here
                    sx={{
                      fontSize: "13px",
                      color: "#013c61",
                      fontFamily: "Poppins",
                      cursor: "pointer",
                    }}
                  >
                    {value}
                  </Typography>
                ),
              },
              {
                name: "genre",
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
                name: "dueDate",
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
                name: "location",
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
                name: "bandMember",
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
      {/* Pass `show` and `handleClose` correctly */}
      <AddBand show={show} handleClose={handleClose} />
    </div>
  );
};

export default CreateBand;
