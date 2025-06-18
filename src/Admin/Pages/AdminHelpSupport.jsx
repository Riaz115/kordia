import React from "react";
import CustomTabs from "../../mui/CustomTabs";
import AdminContact from "./HelpandSupport/AdminContact";
import AdminFAQs from "./HelpandSupport/AdminFAQs";

const AdminHelpSupport = () => {
  const tabs = ["Contact Support", "FAQs"];
  const panels = [<AdminContact />, <AdminFAQs />];
  return (
    <div className="my-1 mt-2 mx-md-4 mx-1 ">
      <CustomTabs tabs={tabs} panels={panels} tabBgColor={"#fff"} />
    </div>
  );
};

export default AdminHelpSupport;
