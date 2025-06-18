import React, { useState } from "react";
import {
  Typography,
  Box,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import TableMuiCustom from "../../../mui/TableMuiCustom";

const Notification = () => {
  const [tableData, setTableData] = useState([
    { id: 1, type: "Event Updates", email: false, sms: false },
    { id: 2, type: "Promotions", email: true, sms: false },
    { id: 3, type: "Account Alerts", email: false, sms: true },
    { id: 4, type: "Subscription Updates", email: true, sms: true },
  ]);

  const handleCheckboxChange = (id, field) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, [field]: !row[field] } : row
      )
    );
  };

  return (
    <div className="mx-1 mx-md-4 mt-3 border-top p-2">
      <Box className="table">
        <TableMuiCustom
          th={{
            type: "Notification Type",
            email: "Email",
            sms: "SMS",
          }}
          rowColor={"#F9F9F9"}
          td={tableData}
          customFields={[
            {
              name: "type",
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
              name: "email",
              data: (value, row) => (
                <Checkbox
                  checked={value}
                  onChange={() => handleCheckboxChange(row.id, "email")}
                  sx={{
                    color: "#013c61",
                    "&.Mui-checked": { color: "#FF9700" },
                  }}
                />
              ),
            },
            {
              name: "sms",
              data: (value, row) => (
                <Checkbox
                  checked={value}
                  onChange={() => handleCheckboxChange(row.id, "sms")}
                  sx={{
                    color: "#013c61",
                    "&.Mui-checked": { color: "#FF9700" },
                  }}
                />
              ),
            },
          ]}
          styleTableTh={{
            backgroundColor: "#003a5e",
            color: "#fff",
            fontWeight: 500,
            fontSize: 12,
            fontFamily: "Poppins",
          }}
        />
      </Box>
    </div>
  );
};

export default Notification;
