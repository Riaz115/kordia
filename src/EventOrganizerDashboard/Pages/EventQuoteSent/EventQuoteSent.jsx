import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { IoCheckmark, IoClose, IoEye, IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import ProposalTab from "./ProposalTab";
import ContractTab from "./ContractTab";

const EventQuoteSent = () => {
  const [value, setValue] = useState(0);

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="" sx={{ width: "100%" }}>
      <Box className="bg-white d-flex align-items-center justify-content-between  rounded-3 px-4  " style={{ border:"1px solid #e7e7e7" }}>
        <Tabs
          className=" "
          value={value}
          onChange={handleChange}
          aria-label="event tabs"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#ff9700', 
              height: '5px', 
               borderRadius: '10px'
            },
          }}
        >
        <Tab
          label="Proposal"
          sx={{
            color: value === 0 ? '#ff9700' : '#013c61', 
            '&.Mui-selected': {
              color: '#ff9700',
            },
          }}
        />
        <Tab
          label="Contract"
          sx={{
            color: value === 1 ? '#ff9700' : '#013c61', 
            '&.Mui-selected': {
              color: '#ff9700', 
            },
          }}
        />
        </Tabs>
        <div
          className="d-flex align-items-center contactus-input bg-white p-2 rounded-pill position-relative  "
          style={{ width: "50%" , border:"1px solid #949494"}}
        >
          <FaBars
            className="start-icon position-absolute"
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
      </Box>
      {value === 0 && (
        <div>
         <ProposalTab/>
        </div>
      )}
      {value === 1 && (
        <div>
         <ContractTab/>
        </div>
      )}
    
    </Box>
  );
};

export default EventQuoteSent;
