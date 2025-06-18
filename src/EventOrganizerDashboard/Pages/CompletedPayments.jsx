import React, { useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import TableMui from "../../mui/TableMuiCustom";
import Paginate from "../../Components/Paginate";
import Invoice from "../Modals/Invoice";
import invoice from "/assets/images/invoice.png";
import { MdOutlineFileDownload } from "react-icons/md";

const CompletedPayments = () => {
  const [page, setPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalItems = 1000;
  const itemsPerPage = 10;

  const headers = [
    { key: "musicianName", label: "Musician/Band Name" },
    { key: "eventName", label: "Event Name" },
    { key: "paymentDate", label: "Payment Date" },
    { key: "amount", label: "Amount" },
    { key: "eventStatus", label: "Event Status" },
    { key: "status", label: "Payment Status" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival mockkkkk",
      paymentDate: "15/12/24",
      amount: "$500",
      status: "Paid",
      eventStatus: "Ongoing",
    },
    {
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      paymentDate: "10/12/24",
      amount: "$500",
      status: "Paid",
      eventStatus: "Ongoing",
    },
    {
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      paymentDate: "15/12/24",
      amount: "$500",
      status: "Paid",
      eventStatus: "Complete",
    },
    {
      musicianName: "Christine Brooks",
      eventName: "Summer Jazz Festival",
      paymentDate: "15/12/24",
      amount: "$500",
      status: "Paid",
      eventStatus: "Cancelled",
    },
  ];

  const handleOpenModal = (row) => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container-fluid">
      <div className="table pt-4">
        <TableMui
          th={headers.reduce((acc, header) => {
            acc[header.key] = header.label;
            return acc;
          }, {})}
          td={rows}
          customFields={[
            {
              name: "musicianImage",
              data: (value) => (
                <img
                  src={value}
                  alt="Musician"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              ),
            },
            {
              name: "musicianName",
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
              name: "paymentDate",
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
              name: "amount",
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
              name: "eventStatus",
              data: (value) => {
                let statusStyle = {};
                if (value === "Cancelled") {
                  statusStyle = {
                    backgroundColor: "#C0000033",
                    color: "#C00000",
                    textAlign: "center",
                  };
                } else if (value === "Ongoing") {
                  statusStyle = {
                    backgroundColor: "#007BFF33",
                    color: "#007BFF",
                    textAlign: "center",
                  };
                } else if (value === "Pending") {
                  statusStyle = {
                    backgroundColor: "#FFFF7433",
                    color: "#9B9B00",
                    textAlign: "center",
                  };
                } else if (value === "Complete") {
                  statusStyle = {
                    backgroundColor: "#13B10433",
                    color: "#13B104",
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
              name: "status",
              data: (value) => {
                let backgroundColor;
                let color;
                switch (value.toLowerCase()) {
                  case "pending":
                    backgroundColor = "#ffffb9";
                    color = "#a0a00c";
                    break;
                  case "cancel":
                    backgroundColor = "#f2cccc";
                    color = "#800000";
                    break;
                  case "paid":
                    backgroundColor = "#d0efcd";
                    color = "#008000";
                    break;
                  case "reject":
                    backgroundColor = "#f2cccc";
                    color = "#800000";
                    break;
                  default:
                    backgroundColor = "transparent";
                }
                return (
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color,
                      fontWeight: 600,
                      fontFamily: "Poppins",
                      backgroundColor,
                      padding: "3px",
                      borderRadius: "25px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {value}
                  </Typography>
                );
              },
            },

            {
              name: "action",
              data: () => (
                <div className="d-flex align-items-center gap-1">
                  <Button
                    variant="contained ms-2"
                    style={{
                      backgroundColor: "#013c65",
                      color: "white",
                      fontFamily: "Bebas Neue",
                      fontSize: "15px",
                      fontWeight: 400,
                      borderRadius: "20px",
                      textAlign: "center",
                      padding: 0,
                      minWidth: "30px",
                      height: "30px",
                    }}
                    onClick={handleOpenModal}
                  >
                    <MdOutlineFileDownload size={20} />
                  </Button>
                  <Button
                    variant="contained ms-2"
                    style={{
                      backgroundColor: "#013c65",
                      color: "white",
                      fontFamily: "Bebas Neue",
                      fontSize: "15px",
                      fontWeight: 400,
                      borderRadius: "20px",
                      textAlign: "center",
                      padding: 0,
                      minWidth: "30px",
                      height: "30px",
                    }}
                    onClick={handleOpenModal}
                  >
                    <img
                      src={invoice}
                      alt="Invoice"
                      style={{
                        width: "60%",
                        height: "60%",
                        borderRadius: "20px",
                      }}
                    />
                  </Button>
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
      <div className="pagination pt-4 justify-content-end">
        <Paginate
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
        />
      </div>

      <Invoice show={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default CompletedPayments;
