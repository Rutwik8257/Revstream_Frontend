import React, { useState, useRef } from "react";
import "./SubmitWork.css";

export default function SubmitWork() {
  const [receiverMode, setReceiverMode] = useState(true);
  const [files, setFiles] = useState([]);
  const [notes, setNotes] = useState("");

  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFiles = (selectedFiles) => {
    const newFiles = Array.from(selectedFiles);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const onFileChange = (e) => {
    handleFiles(e.target.files);
  };

  const onDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const submitForReview = () => {
    if (files.length === 0) {
      alert("Please upload at least one file");
      return;
    }

    console.log("Files:", files);
    console.log("Notes:", notes);

    alert("Submitted for review successfully!");
  };

  return (
    <div className="submit-root">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h3 className="logo">Logo</h3>

        <div className="receiver">
          <div>
            <strong>Receiver Mode</strong>
            <p>Accepting external work</p>
          </div>
          <input
            type="checkbox"
            checked={receiverMode}
            onChange={() => setReceiverMode(!receiverMode)}
          />
        </div>

        <nav>
          <a>Dashboard</a>
          <a>Task Market Place</a>
          <a className="active">Internal Task board</a>
          <a>Add New Task</a>
          <a>Live Earnings</a>
          <a>Insights</a>
          <a>Payments</a>
          <a>Settings</a>
          <a>Help & Supports</a>
          <a>My Wallet</a>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="main">
        <p className="back">‹ Submit Work</p>
        <h2>
          Dashboard Redesign <span className="price">($1,200)</span>
          <span className="task-id">Task ID : #0002692347</span>
        </h2>

        {/* Upload Section */}
        <div className="card">
          <h3>Upload Deliverables</h3>
          <p className="hint">
            Upload all files related to your project deliverables
          </p>

          <div
            className="drop-zone"
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
          >
            <p>Drag and drop files here</p>
            <span>Or click to browse. All files are acceptable</span>
          </div>

          <input
            type="file"
            multiple
            hidden
            ref={fileInputRef}
            onChange={onFileChange}
          />

          <div className="file-list">
            {files.map((file, i) => (
              <div className="file-chip" key={i}>
                {file.name}
                <span onClick={() => removeFile(i)}>×</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="card">
          <h3>Notes to reviewer</h3>
          <p className="hint">
            Add context, explanations, or instructions for your client
          </p>

          <textarea
            placeholder="Describe your work, highlight key deliverables, mention any important details"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="ghost">Do it Later</button>
          <button className="primary" onClick={submitForReview}>
            Submit for Review →
          </button>
        </div>
      </main>
    </div>
  );
}
