import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import logo from "../../asserts/image.png";

/* ✅ React Icons (ALL VALID) */
import {
  FiHome,
  FiGrid,
  FiClipboard,
  FiPlusSquare,
  FiTrendingUp,
  FiSettings,
  FiHelpCircle,
  FiCreditCard,
  FiBriefcase,
  FiAlertTriangle,
  FiLock,
  FiSliders,
} from "react-icons/fi";

const Navbar = () => {
  let [role, setRole] = useState("user");

  /* ADMIN NAVBAR */
  let adminNavbar = [
    {
      name: "Super Admin Dashboard",
      path: "superAdminDashboard",
      icon: <FiHome />,
    },
    {
      name: "Company Management",
      path: "companyManagement",
      icon: <FiBriefcase />,
    },
    { name: "Task Control", path: "adminTaskControl", icon: <FiClipboard /> },
    { name: "Payment Control", path: "paymentControl", icon: <FiCreditCard /> },

    {
      name: "Content & Config Control",
      path: "contentConfigControl",
      icon: <FiSliders />,
    },
  ];

  /* USER NAVBAR */
  let userNavbar = () => {
    return (
      <>
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="sidebar-tile-left">
            <div className="sidebar-icon">
              <FiHome />
            </div>
            Dashboard
          </div>
        </NavLink>

        <NavLink
          to="taskMarketPlace"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="sidebar-tile-left">
            <div className="sidebar-icon">
              <FiGrid />
            </div>
            Task Market Place
          </div>
        </NavLink>

        <NavLink
          to="internalTaskBoard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="sidebar-tile-left">
            <div className="sidebar-icon">
              <FiClipboard />
            </div>
            Internal Task board
          </div>
        </NavLink>

        <NavLink
          to="taskForm"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="sidebar-tile-left">
            <div className="sidebar-icon">
              <FiPlusSquare />
            </div>
            Add New Task
          </div>
        </NavLink>

        <NavLink
          to="liveEarings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="sidebar-tile-left">
            <div className="sidebar-icon">
              <FiTrendingUp />
            </div>
            Live Earnings
          </div>
        </NavLink>

        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="sidebar-tile-left">
            <div className="sidebar-icon">
              <FiSettings />
            </div>
            Settings
          </div>
        </NavLink>

        <NavLink
          to="enterpriseTrustCompliance"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="sidebar-tile-left">
            <div className="sidebar-icon">
              <FiHelpCircle />
            </div>
            Help & Supports
          </div>
        </NavLink>

        <NavLink
          to="myWallet"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="sidebar-tile-left">
            <div className="sidebar-icon">
              <FiCreditCard />
            </div>
            My Wallet
          </div>
        </NavLink>
      </>
    );
  };

  let logoStyles = {
    height: "70px",
    width: "70px",
  };

  let handlelogo = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo" style={handlelogo}>
          <img src={logo} alt="" style={logoStyles} />
          <span>Revstream</span>
        </div>
        <nav>
          {role === "admin"
            ? adminNavbar.map((value) => (
                <NavLink
                  key={value.path}
                  to={`${value.path}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <div className="sidebar-tile-left">
                    <div className="sidebar-icon">{value.icon}</div>
                    {value.name}
                  </div>
                </NavLink>
              ))
            : userNavbar()}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
