import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboardnav from "./Admin/AdminDashBorad/Dashboardnav";
import SubcriptionManagement from "./Admin/Pages/SubcriptionManagement";
import Settings from "./Admin/Pages/Settings";
import AdminManagement from "./Admin/Pages/AdminManagement";
import EventListing from "./Admin/Pages/EventListing";
import AdminDashborad from "./Admin/Pages/Dashborad";
import Musicians from "./Admin/Pages/UserManagement/Musicians";
import EventOrganizers from "./Admin/Pages/UserManagement/EventOrganizers";
import "./styles/main.css";
import "./styles/main1.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermConditions from "./pages/TermConditions";
import ArtistPage from "./pages/ArtistPage";
import AcadamyPage from "./pages/AcadamyPage";
import ArtisitDetails from "./pages/ArtisitDetails";
import PricingPage from "./pages/PricingPage";
import CourseDetails from "./pages/CourseDetails";
import LessonDetails from "./MuscianDashbaord/Lesson/LessonDetails";
import MyLearning from "./pages/MyLearning";
import LearningDetails from "./pages/LearningDetails";

import EventOrganizerDashboard from "./EventOrganizerDashboard/EventOrganizerDashBorad/Dashboardnav";
import EventDashBorad from "./EventOrganizerDashboard/Pages/DashBorad";
import EventBankDetails from "./EventOrganizerDashboard/Pages/BankDetails";
import EventCompletedPayments from "./EventOrganizerDashboard/Pages/CompletedPayments";
import EventMySubscription from "./EventOrganizerDashboard/Pages/MySubscription";
import EventHelpSupport from "./EventOrganizerDashboard/Pages/HelpSupport";
import EventSettings from "./EventOrganizerDashboard/Pages/Settings";
import EventCratEvent from "./EventOrganizerDashboard/Pages/CratEvent";
import EventMyEvent from "./EventOrganizerDashboard/Pages/MyEvent";
import EventQuoteSent from "./EventOrganizerDashboard/Pages/EventQuoteSent/EventQuoteSent";
import EventPendingRequest from "./EventOrganizerDashboard/Pages/PendingRequest";
import EventAcceptedRequest from "./EventOrganizerDashboard/Pages/AcceptedRequest";
import EventRejectedRequest from "./EventOrganizerDashboard/Pages/RejectedRequest";
import EventChat from "./EventOrganizerDashboard/Pages/Chat";
import EventSearchMusiciansBand from "./EventOrganizerDashboard/Pages/SearchMusiciansBand";
import EventSchedules from "./EventOrganizerDashboard/Pages/Schedules";
import EventPaymentOverview from "./EventOrganizerDashboard/Pages/PaymentsOverView";
import DashboardNavMusician from "./sidenav-musicdashboard/Dashboardnav";
import Dashboard from "./MuscianDashbaord/Dashboard";
import QuoteReceived from "./MuscianDashbaord/QuoteReceived";
import EventsList from "./MuscianDashbaord/EventsList";
import ApplicationStatus from "./MuscianDashbaord/ApplicationStatus";
import Schedules from "./MuscianDashbaord/Schedules";
import Portfolio from "./MuscianDashbaord/Portfolio";
import CreateBand from "./MuscianDashbaord/CreateBand";
import MucisianChat from "./MuscianDashbaord/MucisianChat";
import CreateLesson from "./MuscianDashbaord/CreateLesson";
import LessonPackaging from "./MuscianDashbaord/LessonPackaging";
import MuscianSubscriptions from "./MuscianDashbaord/MuscianSubscriptions";
import MuscianPayments from "./MuscianDashbaord/MuscianPayments";
import Forums from "./MuscianDashbaord/Forums";
import MusicainHelpSupport from "./MuscianDashbaord/MusicainHelpSupport";
import MusicianSettings from "./MuscianDashbaord/MusicianSettings";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import EventOrganizerSignUp from "./SignUpPages/EventOrganizerSignUp";
import MusicalServicesSignUp from "./SignUpPages/MusicalServicesSignUp";
import StudentSignUp from "./SignUpPages/StudentSignUp";

import ChatScreen from "./EventOrganizerDashboard/Pages/Chat/ChatScreen";
import MucisianChatScreen from "./MuscianDashbaord/Chat/ChatScreen";
import EventOrganizerProfileScreen from "./EventOrganizerDashboard/Pages/Chat/ProfileScreen";
import MucisianProfileScreen from "./MuscianDashbaord/Chat/ProfileScreen";
import CreateLessonPage from "./MuscianDashbaord/Lesson/CreateLessonPage";
import ForgotPassword from "./pages/ForgotPassword";
import SetPassword from "./pages/SetPassword";
import OTPVerification from "./pages/OTPVerification";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import LandingLayout from "./LandingLayout/LandingLayout";
import AdminHelpSupport from "./Admin/Pages/AdminHelpSupport";
import AddFAQs from "./Admin/Pages/HelpandSupport/AddFAQs";
import MusicianPayouts from "./Admin/Pages/MusicianPayouts";
import RefundPaymentRequest from "./Admin/Pages/RefundPaymentRequest";
import AdminBankDetails from "./Admin/Pages/AdminBankDetails";
import RefundPayments from "./EventOrganizerDashboard/Pages/RefundPayments";
import MusicianPortfolio from "./MuscianDashbaord/Portfolio/MusicianPortfolio";
import BandDetails from "./MuscianDashbaord/BandDetails/BandDetails";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/event-organizer-signup"
          element={<EventOrganizerSignUp />}
        />

        <Route path="/student-services-signup" element={<StudentSignUp />} />
        <Route path="/musician-signup" element={<MusicalServicesSignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/otp-verification" element={<OTPVerification />} />

        <Route path="/" element={<LandingLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/artists" element={<ArtistPage />} />
          <Route path="/artist-details" element={<ArtisitDetails />} />
          <Route path="/kordia-acadamy" element={<AcadamyPage />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/my-learning/details/:id"
            element={<LearningDetails />}
          />
          <Route path="/pricing" element={<PricingPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/term-and-conditions" element={<TermConditions />} />
          <Route path="/band-details" element={<BandDetails />} />

        </Route>

        <Route element={<Dashboardnav type={"/admin"} />}>
          <Route path="/admin/dashboard" element={<AdminDashborad />} />
          <Route
            path="/admin/subcription-management"
            element={<SubcriptionManagement />}
          />
          <Route path="/admin/musician-payouts" element={<MusicianPayouts />} />
          
          <Route
            path="/admin/refund-payment-request"
            element={<RefundPaymentRequest />}
          />
          <Route path="/admin/bank-details" element={<AdminBankDetails />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/admin-management" element={<AdminManagement />} />
          <Route path="/admin/event-listing" element={<EventListing />} />
          <Route path="/admin/musicians" element={<Musicians />} />
          <Route path="/admin/help-support" element={<AdminHelpSupport />} />
          <Route path="/admin/addFAQs" element={<AddFAQs />} />
          <Route path="/admin/event-organizers" element={<EventOrganizers />} />
        </Route>

        <Route element={<EventOrganizerDashboard type={"/event-organizer"} />}>
          <Route
            path="/event-organizer/dashboard"
            element={<EventDashBorad />}
          />
          <Route
            path="/event-organizer/profile"
            element={<EventOrganizerProfileScreen />}
          />

          <Route
            path="/event-organizer/bank-details"
            element={<EventBankDetails />}
          />
          <Route
            path="/event-organizer/completed-payments"
            element={<EventCompletedPayments />}
          />
          <Route
            path="/event-organizer/refund-payments"
            element={<RefundPayments />}
          />
          <Route
            path="/event-organizer/my-subscription"
            element={<EventMySubscription />}
          />
          <Route
            path="/event-organizer/help-support"
            element={<EventHelpSupport />}
          />
          <Route path="/event-organizer/settings" element={<EventSettings />} />
          <Route
            path="/event-organizer/crate-event"
            element={<EventCratEvent />}
          />
          <Route path="/event-organizer/my-event" element={<EventMyEvent />} />
          <Route
            path="/event-organizer/event-quote-sent"
            element={<EventQuoteSent />}
          />
          <Route
            path="/event-organizer/pending-requests"
            element={<EventPendingRequest />}
          />
          <Route
            path="/event-organizer/accepted-requests"
            element={<EventAcceptedRequest />}
          />
          <Route
            path="/event-organizer/rejected-requests"
            element={<EventRejectedRequest />}
          />
          <Route path="/event-organizer/chat" element={<EventChat />} />
          <Route
            path="/event-organizer/search-musicians-band"
            element={<EventSearchMusiciansBand />}
          />
          <Route
            path="/event-organizer/schedules"
            element={<EventSchedules />}
          />
          <Route
            path="/event-organizer/payment-overview"
            element={<EventPaymentOverview />}
          />
          <Route
            path="/event-organizer/chatScreen/:id"
            element={<ChatScreen />}
          />
        </Route>

        <Route element={<DashboardNavMusician type={"/musician/dashboard"} />}>
          <Route path="/musician/dashboard" element={<Dashboard />} />
          <Route
            path="/musician/event-quote-received"
            element={<QuoteReceived />}
          />
          <Route path="/musician/events-list" element={<EventsList />} />
          <Route
            path="/musician/application-status"
            element={<ApplicationStatus />}
          />
          <Route path="/musician/schedules" element={<Schedules />} />
          <Route path="/musician/portfolio" element={<MusicianPortfolio />} />
          <Route path="/musician/create-band" element={<CreateBand />} />
          <Route path="/musician/band-details" element={<BandDetails />} />

          <Route path="/musician/chat" element={<MucisianChat />} />
          <Route path="/musician/create-lesson" element={<CreateLesson />} />
          <Route path="/musician/course-details" element={<LessonDetails />} />

          <Route
            path="/musician/lesson-packaging"
            element={<LessonPackaging />}
          />
          <Route
            path="/musician/subscriptions"
            element={<MuscianSubscriptions />}
          />
          <Route path="/musician/payments" element={<MuscianPayments />} />
          <Route path="/musician/forums" element={<Forums />} />
          <Route
            path="/musician/help-support"
            element={<MusicainHelpSupport />}
          />
          <Route path="/musician/settings" element={<MusicianSettings />} />
          <Route path="/musician/profile" element={<MucisianProfileScreen />} />
          <Route
            path="/musician/chatScreen/:id"
            element={<MucisianChatScreen />}
          />
          <Route
            path="/musician/create-lesson-page"
            element={<CreateLessonPage />}
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
