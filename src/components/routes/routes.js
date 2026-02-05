import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "./../login/loginForm/Login";
import LostPassword from "./../login/lostPassword/LostPassword";
import NewPassword from "../login/newPassword/NewPassword";
import Registration from "../Registration/Register";
import AddAddress from "../Registration/Addaddress";
import TaskForm from "../dashboard/taskForm/TaskForm";
import Dashboard from "../dashboard/Dashboard";
import SplashScreen from "./../splashScreen/SplashScreen";
import DashboardLayout from "./../dashboard/dashboardLayout/DashboardLayout";
import DisplaySingleTask from "./../dashboard/singleTask/DisplaySingleTask";
import InternalTaskBoard from "./../dashboard/internalTaskBoard/internalTaskBoard";
import TaskMarketPLace from "../dashboard/taskMarketPlace/taskMarketPlace";
import Active from "../dashboard/internalTaskBoard/active/Active";
import DueToday from "../dashboard/internalTaskBoard/dueToday/DueToday";
import OverDue from "../dashboard/internalTaskBoard/overdue/OverDue";
import CompletedToday from "../dashboard/internalTaskBoard/completedToday/CompletedToday";
import UnderReview from "./../dashboard/internalTaskBoard/underReview/UnderReview";

// Settings

import Settings from "../settings/Settings";
import PrivacyPolicy from "../settings/privacyPolicy/PrivacyPolicy";
import Security from "../settings/Security";
import NotificationsSettings from "../settings/NotificationsSettings";

import TermsOfService from "../settings/HelpSupport/TermsOfService";
import EnterpriseTrustCompliance from "../settings/HelpSupport/EnterpriseTrustCompliance";
import ComplianceGovernance from "../settings/HelpSupport/ComplianceGovernance";
import NdaLegalAssurance from "../settings/HelpSupport/NdaLegalAssurance";
import AuditTransparency from "../settings/HelpSupport/AuditTransparency";
import DataHandlingRetention from "../settings/HelpSupport/DataHandlingRetention";
import TrustSafety from "../settings/HelpSupport/TrustSafety";
import AccessAndControl from "../settings/AccessAndControl";
import QuickActions from "../QuickActionSettings/QuickActions";
import RaiseSupportTicket from "./../QuickActionSettings/RaiseSupportTicket";
import AccessSecurityControl from "./../AdminScreens/AccessSecurityControl";
import AdminTaskControl from "./../AdminScreens/AdminTaskControl";
import CompanyManagement from "./../AdminScreens/CompanyManagement";
import ContentConfigControl from "./../AdminScreens/ContentConfigControl";

import PaymentControl from "./../AdminScreens/PaymentControl";
import SuperAdminDashboard from "./../AdminScreens/SuperAdminDashboard";
import MyWallet from "../dashboard/wallet/MyWallet";
import LiveEarnings from "./../dashboard/wallet/liveearnings/LiveEarnings";
import PaymentMethods from "./../dashboard/wallet/card and bank/PaymentMethods";
import WithdrawAmount from "./../dashboard/wallet/liveearnings/WithdrawAmount";
import CompanyProfile from "../profile/CompanyProfile";
import ReportSecurityConcern from "../QuickActionSettings/ReportSecurityConcern";
import PaymentPayoutHelp from "../QuickActionSettings/PaymentPayoutHelp";
import EscrowPaymentSafety from "../QuickActionSettings/EscrowPaymentSafety";
import PaymentReleaseDelays from "../QuickActionSettings/PaymentReleaseDelays";
import WithdrawalsPayoutIssues from "../QuickActionSettings/WithdrawalsPayoutIssues";
import EditCompanyProfile from "../profile/EditCompanyProfile";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "lostPassword",
        element: <LostPassword />,
      },
      {
        path: "newPassword",
        element: <NewPassword />,
      },
      {
        path: "Registration",
        element: <Registration />,
      },
      {
        path: "addAddress",
        element: <AddAddress />,
      },

      {
        path: "dashboardLayout",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "taskForm",
            element: <TaskForm />,
          },
          {
            path: "singleTask",
            element: <DisplaySingleTask />,
          },
          {
            path: "internalTaskBoard",
            element: <InternalTaskBoard />,
            children: [
              {
                index: true,
                element: <Active />,
              },
              {
                path: "dueToday",
                element: <DueToday />,
              },
              {
                path: "overdue",
                element: <OverDue />,
              },
              {
                path: "completedDue",
                element: <CompletedToday />,
              },
              {
                path: "underReview",
                element: <UnderReview />,
              },
            ],
          },
          {
            path: "taskMarketPlace",
            element: <TaskMarketPLace />,
          },

          // Settings

          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "notificationsSettings",
            element: <NotificationsSettings />,
          },
          {
            path: "accessAndControls",
            element: <AccessAndControl />,
          },

          {
            path: "privacyPolicy",
            element: <PrivacyPolicy />,
          },
          {
            path: "security",
            element: <Security />,
          },

          {
            path: "enterpriseTrustCompliance",
            element: <EnterpriseTrustCompliance />,
          },

          {
            path: "termsOfService",
            element: <TermsOfService />,
          },

          {
            path: "enterpriseTrustCompliance",
            element: <EnterpriseTrustCompliance />,
          },

          {
            path: "complianceGovernance",
            element: <ComplianceGovernance />,
          },
          {
            path: "ndaLegalAssurance",
            element: <NdaLegalAssurance />,
          },
          {
            path: "auditTransparency",
            element: <AuditTransparency />,
          },
          {
            path: "dataHandlingRetention",
            element: <DataHandlingRetention />,
          },
          {
            path: "trustSafety",
            element: <TrustSafety />,
          },
          {
            path: "quickActions",
            element: <QuickActions />,
          },
          {
            path: "raiseSupportTicket",
            element: <RaiseSupportTicket />,
          },
          {
            path: "concernRequest",
            element: <ReportSecurityConcern />,
          },

          {
            path: "paymentPayoutHelp",
            element: <PaymentPayoutHelp />,
          },
          // ! Admin Screens

          {
            path: "accessSecurityControl",
            element: <AccessSecurityControl />,
          },
          {
            path: "adminTaskControl",
            element: <AdminTaskControl />,
          },
          {
            path: "companyManagement",
            element: <CompanyManagement />,
          },
          {
            path: "contentConfigControl",
            element: <ContentConfigControl />,
          },

          {
            path: "paymentControl",
            element: <PaymentControl />,
          },
          {
            path: "superAdminDashboard",
            element: <SuperAdminDashboard />,
          },
          {
            path: "escrow-payment-safety",
            element: <EscrowPaymentSafety />,
          },
          {
            path: "payment-release-delays",
            element: <PaymentReleaseDelays />,
          },
          {
            path: "withdrawals-payout-issues",
            element: <WithdrawalsPayoutIssues />,
          },
          // ! Wallet Screens
          {
            path: "myWallet",
            element: <MyWallet />,
          },
          {
            path: "liveEarings",
            element: <LiveEarnings />,
          },
          {
            path: "paymentMethods",
            element: <PaymentMethods />,
          },

          {
            path: "withdraw",
            element: <WithdrawAmount />,
          },

          // ! Profile

          { path: "profile", element: <CompanyProfile /> },
          {
            path: "edit-company-profile",
            element: <EditCompanyProfile />,
          },
        ],
      },
    ],
  },
]);

export default routes;
