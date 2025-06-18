import React from "react";
import CustomTabs from "../mui/CustomTabs";
import General from "./settings/General";
import Notification from "./settings/Notification";
import Security from "./settings/Security";

const MusicianSettings = () => {
  const tabs = ["General", "Notification", "Security"];
  const panels = [<General />, <Notification />, <Security />];
  return (
    <div className="m-4">
      <CustomTabs tabs={tabs} panels={panels} tabBgColor={"#fff"} />
    </div>
  );
};

export default MusicianSettings;
