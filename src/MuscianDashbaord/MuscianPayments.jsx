import React from "react";
import CustomTabs from "../mui/CustomTabs";
import BankDetails from "./Payments/BankDetails";
import EventPaymentHistory from "./Payments/EventPaymentHistory";
import PaymentOverView from "./Payments/PaymentOverView";
import Withdrawal from "./Payments/Withdrawal";

const MuscianPayments = () => {
  const tabs = [
    "Payment Overview",
    "Event Payment History",
    "Withdrawal",
    "Bank Details",
  ];
  const panels = [
    <PaymentOverView />,
    <EventPaymentHistory />,
    <Withdrawal />,
    <BankDetails />,
  ];
  return <CustomTabs tabs={tabs} panels={panels} />;
};

export default MuscianPayments;
