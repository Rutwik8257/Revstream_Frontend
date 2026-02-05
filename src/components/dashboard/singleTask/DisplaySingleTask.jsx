import { useState } from "react";
import Style from "./displaySingleTask.module.css";
import AcceptTaskModal from "../model/AcceptTaskModel";
import TaskAcceptedModal from "../model/TaskAcceptedModel";
import { useLocation, useNavigate } from "react-router-dom";

const DisplaySingleTask = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();
  let navigateBack = () => {
    navigate(-1);
  };

  // 🚑 Prevent crash if page refreshes
  if (!state) {
    return (
      <div style={{ padding: "40px", color: "white" }}>
        Task not found. <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const taskData = state;
  console.log(taskData);

  const deliverables = [
    "Technical design document",
    "API documentation",
    "User manual and training materials",
    "Deployment and maintenance guides",
  ];

  const handleAcceptTask = () => {
    setShowSuccessModal(true);
  };

  return (
    <>
      <section className={Style.task_details_wrapper}>
        <div className={Style.task_card}>
          <h4 className={Style.back} onClick={navigateBack}>
            ← Task Details
          </h4>

          <h2>
            {taskData.title}
            <span className={Style.price}> ({taskData.price})</span>
          </h2>

          <div className={Style.tags}>
            {taskData.skills?.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>

          <h3>Primary Objective</h3>
          <p>{taskData.description}</p>

          <h3>Attachments</h3>
          <ul>
            {taskData.attachments && taskData.attachments.length > 0 ? (
              taskData.attachments.map((attachment, i) => (
                <li key={i}>
                  <a href={attachment.url} target="_blank" rel="noreferrer">
                    {attachment.name}
                  </a>
                </li>
              ))
            ) : (
              <li>No attachments provided.</li>
            )}
          </ul>

          <h3>Deliverables</h3>
          <ul>
            {deliverables.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className={Style.action_row}>
            <button
              className={Style.primary}
              onClick={() => setShowSuccessModal(true)}
            >
              Accept Now
            </button>
          </div>
        </div>

        <div className={Style.side_panel}>
          <div className={Style.info_card}>
            <h4>⏳ Time & Deadline</h4>
            <p>
              <strong>Deadline</strong>
              <br />
              {taskData.dueDate || "N/A"}
            </p>
          </div>

          <div className={`${Style.info_card} ${Style.note}`}>
            <h4>📝 Note</h4>
            <p>{taskData.note || "No notes provided."}</p>
          </div>
        </div>
      </section>

      {showSuccessModal && (
        <TaskAcceptedModal
          task={taskData}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </>
  );
};

export default DisplaySingleTask;
