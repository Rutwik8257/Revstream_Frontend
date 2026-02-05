import Task from "../../../tasks/Task";
import NoDataFound from "./../../../nodataFound/NoDataFound";

const DueToday = () => {
  const tasks = [];
  return (
    <div className="dueToday">
      {tasks.length > 0 ? (
        <Task tasks={tasks} action="Submit" />
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default DueToday;
