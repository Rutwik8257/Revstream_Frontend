import React, { useRef, useState } from "react";
import Style from "./taskFrom.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTaskData } from "../../redux/thunk/taskThunk";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  let token = useSelector((state) => state.auth.token);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [subType, setSubType] = useState("");

  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    dueDate: "",
    urgency: "",
    attachments: [],
    note: "",
    price: "",
    skills: [],
    url: "",
  });

  const [skillInput, setSkillInput] = useState("");

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prev) => ({ ...prev, [name]: value }));
  };

  /* ✅ Skills Logic */
  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();

      if (!taskDetails.skills.includes(skillInput.trim())) {
        setTaskDetails((prev) => ({
          ...prev,
          skills: [...prev.skills, skillInput.trim()],
        }));
      }

      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    setTaskDetails((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  /* ✅ File Upload */
  const handleFiles = (files) => {
    setTaskDetails((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...Array.from(files)],
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index) => {
    setTaskDetails((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  let navigate = useNavigate();
  /* ✅ Submit */
  const handleSubmit = (e) => {
    e.preventDefault();

    const finalTask = {
      title: taskDetails.title,
      description: taskDetails.description,
      dueDate: taskDetails.dueDate,
      urgency: taskDetails.urgency.toUpperCase(), // ✅ HIGH / MEDIUM / LOW
      note: taskDetails.note,
      price: Number(taskDetails.price),
      skills: taskDetails.skills,
      token: token,
      category: category,
      subType: subType,
      url: taskDetails.url,
      // ✅ Important Fix: Send file names only (Backend accepts List<String>)
      attachments: taskDetails.attachments.map((file) => file.name),
    };

    console.log("✅ Sending to backend:", finalTask);

    dispatch(addTaskData(finalTask));
    navigate("/app/dashboardLayout/myWallet");
    // ✅ Reset form after submit
    setTaskDetails({
      title: "",
      description: "",
      dueDate: "",
      urgency: "",
      attachments: [],
      note: "",
      price: "",
      skills: [],
    });

    setSkillInput("");
  };
  const FEATURE_OPTIONS = {
    BUG_FIXES: [
      "Sub-selections (checkbox / radio)",
      "Login / Signup issue",
      "API error / failure",
      "Payment gateway issue",
      "Database / query issue",
      "Performance / slow loading",
      "UI broken after deployment",
      "Server / hosting issue",
      "Third-party integration bug",
      "Build / deployment error",
      "Security vulnerability fix",
    ],

    SMALL_FEATURES: [
      "Add new field / form input",
      "Field validation logic",
      "CRUD operation",
      "Export (Excel / PDF / CSV)",
      "Filters / search",
      "Notification (Email / SMS / In-app)",
      "Role-based permission update",
      "Minor workflow change",
      "API enhancement",
      "Admin option add",
    ],

    UI_UX: [
      "UI Fixes (Alignment / responsiveness)",
      "UI Design (Figma / new screen)",
      "UX Improvement",
    ],

    MODULE_DEVELOPMENT: [
      "Authentication module",
      "User management module",
      "Admin panel module",
      "Payment module",
      "Notification module",
      "Analytics / reports module",
      "Chat / messaging module",
      "File upload / management",
      "Role & permission module",
    ],

    WEBSITE_DEVELOPMENT: ["Landing page", "Business website", "Custom website"],

    APP_DEVELOPMENT: [
      "Small app fixes",
      "MVP app development",
      "Full app development",
    ],

    SUPPORT_MAINTENANCE: [
      "Monthly bug support",
      "Performance optimization",
      "Security patches",
      "Version upgrades",
    ],

    OTHER: [
      "Internal tools",
      "Automation scripts",
      "Data migration",
      "API documentation",
      "DevOps setup",
    ],
  };
  return (
    <section className={Style.task_form}>
      <form onSubmit={handleSubmit}>
        {/* ✅ Title */}
        <aside>
          <label>Task Title</label>
          <input
            type="text"
            name="title"
            value={taskDetails.title}
            onChange={handleChange}
            required
            placeholder="Enter the title"
          />
        </aside>

        {/* ✅ Description */}
        <aside>
          <label>Description</label>
          <textarea
            name="description"
            value={taskDetails.description}
            onChange={handleChange}
            placeholder="Enter the description"
          />
        </aside>

        {/* ✅ Price */}
        <aside>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={taskDetails.price}
            onChange={handleChange}
            min="1"
            required
            placeholder="Enter the Price"
          />
        </aside>

        {/* ✅ Skills Input */}
        <aside>
          <label>Stack</label>
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleSkillKeyDown}
            placeholder="Type a skill and press Enter"
          />

          <div className={Style.skill_list}>
            {taskDetails.skills.map((skill, index) => (
              <span key={index} className={Style.skill_chip}>
                {skill}
                &nbsp;&nbsp;
                <button
                  className={Style.skill_button}
                  type="button"
                  onClick={() => removeSkill(index)}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </aside>

        {/* ✅ Due Date */}
        <aside>
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={taskDetails.dueDate}
            onChange={handleChange}
          />
        </aside>

        {/* ✅ Urgency */}
        <aside>
          <label>Urgency</label>
          {["high", "medium", "low"].map((level) => (
            <label key={level}>
              <input
                type="radio"
                name="urgency"
                value={level}
                checked={taskDetails.urgency === level}
                onChange={handleChange}
              />
              {level.toUpperCase()}
            </label>
          ))}
        </aside>

        {/* ✅ Attachments */}
        <aside>
          <label>Attachments</label>

          <div
            className={Style.drop_zone}
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <p>Drag & Drop or Click to Upload</p>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              hidden
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>

          <div className={Style.file_list}>
            {taskDetails.attachments.map((file, index) => (
              <span key={index} className={Style.file_chip}>
                {file.name}
                <button type="button" onClick={() => removeFile(index)}>
                  ×
                </button>
              </span>
            ))}
          </div>
        </aside>

        {/* Pass the url */}
        <aside>
          <label>Document Url</label>
          <input
            type="url"
            name="url"
            value={taskDetails.url}
            onChange={handleChange}
            placeholder="Enter the note"
          />
        </aside>
        {/* ✅ Task Category */}
        <aside>
          <label>Task Category</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubType("");
            }}
            className={Style.dropdown}
            required
          >
            <option value="">Select Category</option>
            <option value="BUG_FIXES">Bug Fixes</option>
            <option value="SMALL_FEATURES">Small Features</option>
            <option value="UI_UX">UI & UX</option>
            <option value="MODULE_DEVELOPMENT">Module Development</option>
            <option value="WEBSITE_DEVELOPMENT">Website Development</option>
            <option value="APP_DEVELOPMENT">App Development</option>
            <option value="SUPPORT_MAINTENANCE">Support & Maintenance</option>
            <option value="OTHER">Other (Custom Work)</option>
          </select>
        </aside>

        {/* ✅ Sub Selection */}
        {category && (
          <aside>
            <label>Feature Type</label>
            <select
              value={subType}
              onChange={(e) => setSubType(e.target.value)}
              className={Style.dropdown}
              required
            >
              <option value="">Select Feature</option>
              {FEATURE_OPTIONS[category].map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </aside>
        )}
        {/* ✅ Note */}
        <aside>
          <label>Note</label>
          <input
            type="text"
            name="note"
            value={taskDetails.note}
            onChange={handleChange}
            placeholder="Enter the note"
          />
        </aside>

        {/* ✅ Submit Button */}
        <aside className={Style.submit_button}>
          <button type="submit">Add Task</button>
        </aside>
      </form>
    </section>
  );
};

export default TaskForm;
