import React from "react";
import Task from "../../../tasks/Task";
import NoDataFound from "../../../nodataFound/NoDataFound";

const Active = () => {
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

export default Active;
