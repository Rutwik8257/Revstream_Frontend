import Style from "../singleTask/displaySingleTask.module.css";
import { useNavigate } from "react-router-dom";

const TaskAcceptedModal = ({ task, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className={Style.modal_overlay} onClick={onClose}>
      <div className={Style.modal_card} onClick={(e) => e.stopPropagation()}>
        <button className={Style.close_btn} onClick={onClose}>
          ×
        </button>

        <div className={Style.success_icon}>✔</div>

        <h4 className={Style.modal_title}>Task Accepted</h4>

        <h2 className={Style.modal_task_name}>
          {task.title} <span>(${task.price.toLocaleString()})</span>
        </h2>

        <p className={Style.modal_task_id}>( Task ID : {task.id} )</p>

        <p className={Style.success_note}>
          You are now responsible for this task.
          <br />
          Remember to update progress regularly in the task management system.
        </p>

        <div className={Style.modal_actions}>
          <button
            className={Style.ghost}
            onClick={() => navigate("/app/dashboardLayout")}
          >
            Go to Task Board
          </button>

          <button
            className={Style.primary}
            onClick={() => navigate("/app/dashboardLayout")}
          >
            Go to Task Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskAcceptedModal;
