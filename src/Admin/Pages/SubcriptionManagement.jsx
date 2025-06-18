import { Checkbox, Box, Avatar, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoEye, IoSearch } from "react-icons/io5";
import TableMui from "../../mui/TableMuiCustom";
import { BsThreeDotsVertical } from "react-icons/bs";
import Paginate from "../../Components/Paginate";

const SubcriptionManagement = () => {
  const [page, setPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 10;
  const tableData = [
    {
      name: "Lincoln Curtis",
      accountType: "Musician",
      plan: "Basic",
      startDate: "15/12/24",
      renewalDate: "15/12/24",
      amount: "$600",
      status: "Expired",
      more: "",
    },
    {
      name: "Emery Korsgaard",
      accountType: "Event Organizer",
      plan: "Standard",
      startDate: "15/12/24",
      renewalDate: "15/12/24",
      amount: "$600",
      status: "Cancelled",
      more: "",
    },
    {
      name: "Craig Stanton",
      accountType: "Musician",
      plan: "Basic",
      startDate: "15/12/24",
      renewalDate: "15/12/24",
      amount: "$600",
      status: "Active",
      more: "",
    },
    {
      name: "Paelyn Workman",
      accountType: "Event Organizer",
      plan: "Premium",
      startDate: "15/12/24",
      renewalDate: "15/12/24",
      amount: "$600",
      status: "Active",
      more: "",
    },
    {
      name: "Roger Passoquindici Arcand",
      accountType: "Musician",
      plan: "Basic",
      startDate: "15/12/24",
      renewalDate: "15/12/24",
      amount: "$600",
      status: "Active",
      more: "",
    },
    {
      name: "Martin Vetrow",
      accountType: "Musician",
      plan: "Basic",
      startDate: "15/12/24",
      renewalDate: "15/12/24",
      amount: "$600",
      status: "Active",
      more: "",
    },
    {
      name: "Madelyn Crander",
      accountType: "Event Organizer",
      plan: "Standard",
      startDate: "15/12/24",
      renewalDate: "15/12/24",
      amount: "$600",
      status: "Active",
      more: "",
    },
  ];

  const tableHeaders = [
    { key: "name", label: "NAME" },
    { key: "accountType", label: "ACCOUNT TYPE" },
    { key: "plan", label: "PLAN" },
    { key: "startDate", label: "START DATE" },
    { key: "renewalDate", label: "RENEWAL DATE" },
    { key: "amount", label: "AMOUNT" },
    { key: "status", label: "STATUS" },
    { key: "more", label: "MORE" },
  ];

  return (
    <div className="container-fluid">
      <div className="row search justify-content-between m-2 p-2 mt-4">
        <div className="col-12 col-lg-6 col-md-12 d-flex align-items-start justify-content-start">
          <div
            className="d-flex align-items-center contactus-input bg-white p-2 rounded-pill position-relative"
            style={{ width: "100%" }}
          >
            <FaBars
              className="start-icon position-absolute "
              style={{
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#49454f",
              }}
            />
            <input
              className="w-100 bg-transparent border-0 focus-none ms-2"
              type="search"
              name="search"
              id="search"
              placeholder="Hinted search text"
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            />
            <label
              htmlFor="search"
              className="position-absolute"
              style={{
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <IoSearch className="text-secondary" />
            </label>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-12 d-flex flex-column flex-md-row align-items-start gap-3 ms-0 mt-3 mt-md-3 mt-lg-0">
          {/* Sort Dropdown */}
          <select
            className="form-select focus-none sort-by-bg border-0 rounded-pill responsive-select"
            name="sortby"
            id="sortby"
            style={{
              width: "100%",
              color: "#013c61",
              backgroundColor: "#f0f0f0",
              padding: "10px 15px",
              fontSize: "16px",
            }}
          >
            <option className="d-none" value="Sortby" selected disabled>
              Sort by newest
            </option>
            <option value="newestfirst">Newest first</option>
            <option value="oldestfirst">Oldest first</option>
          </select>
          {/* Filter Dropdown */}
          <select
            className="form-select focus-none sort-by-bg border-0 rounded-pill"
            name="filterby"
            id="filterby"
            style={{
              width: "100%",
              color: "#013c61",
              backgroundColor: "#f0f0f0",
              padding: "10px 15px",
              fontSize: "16px",
            }}
          >
            <option className="d-none" value="filterby" selected disabled>
              Filter by genre
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>

      <div className="table">
        <TableMui
          headerRounded={true}
          th={tableHeaders.reduce((acc, header) => {
            acc[header.key] = header.label;
            return acc;
          }, {})}
          td={tableData}
          customFields={[
            {
              name: "name",
              data: (value, item) => (
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
              name: "accountType",
              data: (value, item) => (
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
              name: "plan",
              data: (value, item) => (
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
              name: "startDate",
              data: (value, item) => (
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
              name: "renewalDate",
              data: (value, item) => (
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
              data: (value, item) => (
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
              name: "status",
              data: (value, task) => (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    backgroundColor:
                      task.status === "Cancelled"
                        ? "#f2cccc"
                        : task.status === "Expired"
                        ? "#e6e6e6"
                        : task.status === "Active"
                        ? "#d0efcd"
                        : "#99C3FF", // Default color for other statuses
                    color:
                      task.status === "Active"
                        ? "#13b104"
                        : task.status === "Cancelled"
                        ? "#c00000"
                        : task.status === "Expired"
                        ? "#808080"
                        : "#9b9b00",
                    padding: "3px 7px",
                    borderRadius: "20px",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                  }}
                >
                  {task.status}
                </Box>
              ),
            },
            {
              name: "more",
              data: (value, item) => (
                <IconButton
                  sx={{
                    backgroundColor: "#ededed",
                    color: "#013c61",
                    borderRadius: "10%",
                    padding: "5px",
                  }}
                >
                  <BsThreeDotsVertical />
                </IconButton>
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
      <div className="pagination mt-2 me-1 mb-2  justify-content-end">
        <Paginate
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default SubcriptionManagement;
