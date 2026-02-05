import { NavLink } from "react-router-dom";
import "./Task.css";

// Utility function to calculate days left
const getDaysLeft = (dueDate) => {
  if (!dueDate) return "—";

  const today = new Date();
  const due = new Date(dueDate);

  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);

  const diffTime = due - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "Overdue";
  if (diffDays === 0) return "Today";
  return `${diffDays} day${diffDays > 1 ? "s" : ""} left`;
};

const formatDate = (dateString) => {
  if (!dateString) return "—";

  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);

  return `${day}-${month}-${year}`;
};

const Task = ({ tasks = [], action, path }) => {
  return (
    <article className="taskCard">
      {tasks.length === 0 ? (
        <div className="no-data">No Tasks Available</div>
      ) : (
        tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <div className="task-top">
              <span>Task ID : #{task.id}</span>
              <span>Created At: {formatDate(task.createdAt)}</span>
            </div>

            <h3>
              {task.title} <span className="price">({task.price || 0})</span>
            </h3>

            <div className="skills">
              {task.skills?.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>

            <div className="task-bottom">
              <div className="meta">
                Urgency:{" "}
                <span className="high">{task.urgency || "Normal"}</span>
                <span>
                  {" "}
                  ⏱ {task.dueDate ? getDaysLeft(task.dueDate) : "N/A"}
                </span>
              </div>

              <button className="action-btn">
                <NavLink to={path} state={task}>
                  {action}
                </NavLink>
              </button>
            </div>
          </div>
        ))
      )}
    </article>
  );
};

export default Task;
