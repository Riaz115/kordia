import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTabs = ({ tabs, panels, setcurrentTab, tabBgColor }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataParam = queryParams.get("activeTab");
  const [value, setValue] = React.useState(Number(dataParam) || 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (setcurrentTab) {
      setcurrentTab(newValue);
    }
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            backgroundColor: tabBgColor, // Use the tabBgColor prop for the background color
            padding: "5px", // Optional: Add some padding around the tabs
            borderRadius: "8px", // Optional: Rounded corners
          }}
        >
          <Box className="d-md-flex justify-content-between mt-1 px-2">
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              style={{ color: "grey" }}
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "black",
                  display: "none",
                },
              }}
              aria-label="basic tabs example"
            >
              {tabs.map((tab, index) => (
                <Tab
                  label={tab}
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    backgroundColor: "transparent",
                    textTransform: "capitalize",
                    color: value === index ? "#FF9700" : "#013c65",
                    fontWeight: value === index ? "600" : "400",
                    borderBottom:
                      value === index ? "2px solid #FF9700" : "#7e7f7f",
                  }}
                  {...a11yProps(index)}
                  key={index}
                />
              ))}
            </Tabs>
          </Box>
        </Box>
        {panels.map((panel, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            {panel}
          </CustomTabPanel>
        ))}
      </Box>
    </div>
  );
};

CustomTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  panels: PropTypes.arrayOf(PropTypes.node).isRequired,
  setcurrentTab: PropTypes.func,
  tabBgColor: PropTypes.string, // New prop for the tab background color
};

export default CustomTabs;
