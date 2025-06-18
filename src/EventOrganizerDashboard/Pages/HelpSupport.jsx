import React from "react";
import CustomTabs from "../../mui/CustomTabs";
import EventFAQs from "./HelpandSupport/EventFAQs";
import EventContact from "./HelpandSupport/EventContact";

const HelpSupport = () => {
  const tabs = ["FAQs", "Contact Support"];
  const panels = [<EventFAQs />, <EventContact />];
  return (
    <div className="my-1 mx-md-4 mx-1 ">
      <CustomTabs tabs={tabs} panels={panels} tabBgColor={"#fff"} />
    </div>
  );
};

export default HelpSupport;
