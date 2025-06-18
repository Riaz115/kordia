import React from "react";
import WithdrawRequests from "./MusicianPayout/WithdrawRequests";
import PayoutHistory from "./MusicianPayout/PayoutHistory";
import CustomTabs from "../../mui/CustomTabs";

const MusicianPayouts = () => {
  const tabs = ["Withdraw Requests", "Payout History"];
  const panels = [<WithdrawRequests />, <PayoutHistory />];
  return (
    <div className="m-4">
      <CustomTabs tabs={tabs} panels={panels} tabBgColor={"#fff"} />
    </div>
  );
};

export default MusicianPayouts;
