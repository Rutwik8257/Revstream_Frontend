import React, { useEffect, useState } from "react";
import "./AdminTaskControl.css";
import Task from "./../tasks/Task";
import { useDispatch, useSelector } from "react-redux";
import { taskData } from "../redux/thunk/taskThunk";

export default function AdminTaskControl() {
  const tasks = useSelector((state) => state.taskSlice.tasks);
  console.log(tasks);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(taskData());
  }, []);
  const stats = {
    total: tasks?.length,
    inProgress: tasks.filter((t) => t.status === "In Progress")?.length,
    stuck: tasks.filter((t) => t.tag === "stuck").length,
    completed: tasks.filter((t) => t.status === "Completed")?.length,
  };

  return (
    <div className="admin-root">
      <main className="admin-main">
        {/* HEADER */}
        <div className="admin-header">
          <div>
            <h2>Admin Task Control</h2>
            <p className="subtitle">
              View all tasks, force-close, change status & assign priority
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            Total Tasks <span>{tasks.length}</span>
          </div>
          <div className="stat-card">
            In Progress <span>{stats?.inProgress}</span>
          </div>
          <div className="stat-card warning">
            Stuck Tasks <span>{stats.stuck}</span>
          </div>
          <div className="stat-card success">
            Completed <span>{stats.completed}</span>
          </div>
        </div>

        {/* TASK LIST */}
        <h3 className="section-title">All Tasks (Read-Only View)</h3>

        <div className="task-list">
          {tasks && (
            <Task
              tasks={tasks}
              action="View Details"
              path="/app/dashboardLayout/singleTask"
            />
          )}
        </div>

        {/* FOOTER CTA */}
        <div className="admin-footer">
          <button className="footer-btn">
            ⚡ Free pilot task chaos control
          </button>
        </div>
      </main>
    </div>
  );
}
