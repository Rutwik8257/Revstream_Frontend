import React, { useState } from "react";
import "./taskMarketPlace.css";
import Task from "../../tasks/Task";
import NoDataFound from "./../../nodataFound/NoDataFound";
import { useSelector } from "react-redux";

export default function TaskMarketPLace() {
  const [search, setSearch] = useState("");

  const tasks = useSelector((state) => state.taskSlice.tasks);
  const filterTaskData = tasks?.filter((t) => {
    const text = search.toLowerCase();
    return (
      t.title.toLowerCase().includes(text) ||
      t.skills.some((skill) => skill.toLowerCase().includes(text))
    );
  });

  return (
    <div className="task_market_dashboard">
      <main className="task_market_main">
        <h2>Welcome Jenizo 👋</h2>
        <p className="sub-text">Congratulations on another productive week!</p>

        <input
          className="search"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h3 className="section-title">Tasks Matched For You</h3>

        {/* 🔥 FIXED CONTAINER (NOT GRID) */}
        <div className="task-list">
          {search && filterTaskData.length === 0 ? (
            <NoDataFound />
          ) : (
            <Task
              tasks={search ? filterTaskData : tasks}
              action="View Details"
              path="/app/dashboardLayout/singleTask"
            />
          )}
        </div>
      </main>
    </div>
  );
}
