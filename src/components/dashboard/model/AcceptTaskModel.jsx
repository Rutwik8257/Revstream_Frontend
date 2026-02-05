import Style from "../singleTask/displaySingleTask.module.css";

const AcceptTaskModal = ({ task, onClose, onAccept }) => {
  return (
    <div className={Style.modal_overlay} onClick={onClose}>
      <div className={Style.modal_card} onClick={(e) => e.stopPropagation()}>
        <button className={Style.close_btn} onClick={onClose}>
          ×
        </button>

        <h4 className={Style.modal_title}>Accept Task?</h4>

        <h2 className={Style.modal_task_name}>
          {task.title} <span>(${task.price.toLocaleString()})</span>
        </h2>

        <p className={Style.modal_task_id}>( Task ID : #0002692347 )</p>

        <h5 className={Style.reminder_title}>IMPORTANT REMINDERS</h5>

        <ul className={Style.reminders}>
          <li>You understand the requirements and deliverables</li>
          <li>You have the necessary skills and resources</li>
          <li>You commit to the estimated timeline</li>
          <li>You will provide progress updates as required</li>
        </ul>

        <div className={Style.modal_actions}>
          <button className={Style.ghost} onClick={onClose}>
            Save For Later
          </button>
          <button className={Style.primary} onClick={onAccept}>
            Accept Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTaskModal;
