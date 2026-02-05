import { Outlet } from "react-router-dom";
import Style from "./dashboardLayout.module.css";
import Navbar from "../../navbar/Navbar";
import Profile from "../../profile/Profile";

const DashboardLayout = () => {
  return (
    <section className={Style.nav_container}>
      <nav className={Style.navbar}>
        <Navbar />
      </nav>
      <article className={Style.container_outlet}>
          <Profile />
          <Outlet />
      </article>
    </section>
  );
};

export default DashboardLayout;
