import React from "react";
import CustomTabs from "../mui/CustomTabs";
import MusicFAQs from "./HelpandSupport/MusicFAQs";
import MusicContact from "./HelpandSupport/MusicContact";

const MusicainHelpSupport = () => {
  const tabs = ["FAQs", "Contact Support"];
  const panels = [<MusicFAQs />, <MusicContact />];
  return (
    <div className="my-4 mx-md-4 mx-1 ">
      <CustomTabs tabs={tabs} panels={panels} tabBgColor={"#fff"} />
    </div>
  );
};

export default MusicainHelpSupport;
