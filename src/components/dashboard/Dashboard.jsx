import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Dashboard.module.css";
import Task from "../tasks/Task";
import { useEffect } from "react";

import { taskData } from "../redux/thunk/taskThunk";
import NoDataFound from "../nodataFound/NoDataFound";

const Dashboard = () => {
  const tasks = useSelector((state) => state.taskSlice.tasks);
  console.log(tasks);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(taskData());
  }, []);

  return (
    <section className={Style.main_container}>
      {/* ===== Top Section ===== */}
      <aside className={Style.company}>
        <div>
          <h2>Welcome Jenizo 👋</h2>
          <small>Congratulations on another productive week!</small>
        </div>

        <div>
          <p>KPI’s (Key Performance Indicators)</p>
          <NavLink to="taskForm">Add New Task +</NavLink>
        </div>

        <div>
          <div>
            <p>0</p>
            <p>Today Earnings</p>
          </div>
          <div>
            <p>{tasks?.length || "0"}</p>
            <p>Active Tasks</p>
          </div>
          <div>
            <p>0</p>
            <p>Pending Approvals</p>
          </div>
        </div>
      </aside>

      {/* ===== Bottom Section ===== */}
      <aside className={Style.task}>
        {/* Left */}
        <div>
          <div className={Style.task_header}>
            <span>Tasks</span>
            <NavLink to="/app/dashboardLayout/taskMarketPlace">
              View all
            </NavLink>
          </div>
          <div className={Style.display_task}>
            {tasks ? (
              <Task
                tasks={tasks}
                action="View Details"
                path="/app/dashboardLayout/singleTask"
              />
            ) : (
              <NoDataFound />
            )}
          </div>
        </div>

        <div className={Style.imageRight}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6818/6818204.png"
            className={Style.imgOne}
          />
        </div>
      </aside>
    </section>
  );
};

export default Dashboard;
