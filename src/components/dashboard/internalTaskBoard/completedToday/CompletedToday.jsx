import React from "react";
import Task from "../../../tasks/Task";
import NoDataFound from "../../../nodataFound/NoDataFound";

const CompletedToday = () => {
  const tasks = [];
  return (
    <div>
      {tasks.length > 0 ? (
        <Task tasks={tasks} action="Submit" />
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default CompletedToday;
