import React, { useState } from "react";
import "./UnderReview.css";
import Task from "../../../tasks/Task";
import NoDataFound from "../../../nodataFound/NoDataFound";

export default function UnderReview() {
  const tasks = [];

  return (
    <div>
      {tasks.length > 0 ? (
        <Task tasks={tasks} action="Under Progress" />
      ) : (
        <NoDataFound />
      )}
    </div>
  );
}
