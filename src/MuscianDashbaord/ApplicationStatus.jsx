import React, { useState } from "react";
import TableMuiCustom from "../mui/TableMuiCustom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { MdChatBubbleOutline } from "react-icons/md";
import { IoClose, IoEye } from "react-icons/io5";
import EventDetailStatus from "./Modal/EventDetailStatus";
import Paginate from "../Components/Paginate";
import { useNavigate } from "react-router-dom";

const ApplicationStatus = () => {
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalItems = 70; // Adjust based on your needs
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const tableRows = [
    {
      eventName: "Wedding Celebration",
      organizerName: "John Doe",
      applicationDate: "2024-11-30",
      eventDate: "2024-12-15",
      eventBudget: "5000",
      status: "Accepted",
    },
    {
      eventName: "Corporate Seminar",
      organizerName: "Jane Smith",
      applicationDate: "2024-11-25",
      eventDate: "2024-12-10",
      eventBudget: "12000",
      status: "Pending",
    },
    {
      eventName: "Birthday Party",
      organizerName: "Alice Brown",
      applicationDate: "2024-11-20",
      eventDate: "2024-12-05",
      eventBudget: "2000",
      status: "Decline",
    },
  ];

  return (
    <div>
      <div className="table p-3">
        <TableMuiCustom
          headerRounded={true}
          th={{
            eventName: "Event Name",
            organizerName: "Organizer Name",
            applicationDate: "Application Date",
            eventDate: "Event Date",
            eventBudget: "Event Budget",
            status: "Status",
            chat: "Chat",
            action: "Action",
          }}
          td={tableRows}
          customFields={[
            {
              name: "eventName",
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
              name: "organizerName",
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
              name: "applicationDate",
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
              name: "eventDate",
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
              name: "eventBudget",
              data: (value) => (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#013c61",
                    fontFamily: "Poppins",
                  }}
                >
                  ${value}
                </Typography>
              ),
            },
            {
              name: "status",
              data: (value) => {
                let statusStyle = {};
                if (value === "Decline") {
                  statusStyle = {
                    backgroundColor: "#C0000033",
                    color: "#C00000",
                    textAlign: "center",
                  };
                } else if (value === "Accepted") {
                  statusStyle = {
                    backgroundColor: "#13B10433",
                    color: "#13B104",
                    textAlign: "center",
                  };
                } else if (value === "Pending") {
                  statusStyle = {
                    backgroundColor: "#FFFF7433",
                    color: "#9B9B00",
                    textAlign: "center",
                  };
                }
                return (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      ...statusStyle,
                      padding: "3px 7px",
                      borderRadius: "20px",
                      fontFamily: "Poppins",
                      fontWeight: 600,
                    }}
                  >
                    {value}
                  </Box>
                );
              },
            },
            {
              name: "chat",
              data: (value) => (
                <Button
                  startIcon={<MdChatBubbleOutline />}
                  sx={{
                    backgroundColor: "#ff9700",
                    color: "white",
                    borderRadius: "20px",
                    padding: "5px 15px",
                    textTransform: "none",
                    fontSize: "16px",
                    fontFamily: "Bebas Neue",
                    "&:hover": {
                      color: "#ffffff",
                    },
                  }}
                  onClick={() => {
                    navigate(`/musician/chatScreen/1`);
                  }}
                >
                  Chat
                </Button>
              ),
            },
            {
              name: "action",
              data: (value) => (
                <Box display="flex" gap={1}>
                  {/* Eye Icon */}
                  <IconButton
                    onClick={() => {
                      handleOpenModal();
                    }}
                    sx={{
                      backgroundColor: "#013c61",
                      color: "#ffffff",
                      borderRadius: "50%",
                      padding: "6px", // Reduced padding for a smaller size
                      fontSize: "18px", // Decreased icon size
                      width: "30px", // Set a fixed width for the button
                      height: "30px", // Set a fixed height for the button
                      "&:hover": {
                        backgroundColor: "#012241", // Slightly darker on hover
                      },
                    }}
                  >
                    <IoEye />
                  </IconButton>
                  {/* Close Icon */}
                  <IconButton
                    sx={{
                      backgroundColor: "#013c61",
                      color: "#ffffff",
                      borderRadius: "50%",
                      padding: "6px", // Reduced padding for a smaller size
                      fontSize: "18px", // Decreased icon size
                      width: "30px", // Set a fixed width for the button
                      height: "30px", // Set a fixed height for the button
                      "&:hover": {
                        backgroundColor: "#012241", // Slightly darker on hover
                      },
                    }}
                  >
                    <IoClose />
                  </IconButton>
                </Box>
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
      <EventDetailStatus show={isModalOpen} handleClose={handleCloseModal} />
      <div className="pagination mt-2 me-1 mb-2 justify-content-end">
        <Paginate
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default ApplicationStatus;
