import React from "react";
import Task from "../../../tasks/Task";

const OverDue = () => {
  const tasks = [
    {
      id: "0002692347",
      title: "Dashboard Redesign",
      price: "$1,200",
      skills: ["Figma", "UI/UX", "Prototyping", "A/B Testing"],
      urgency: "High",
      daysLeft: "13 days left",
      match: "94%",
      time: "5h",
      action: "View Review Progress",
    },
    {
      id: "0002692347",
      title: "Dashboard Redesign",
      price: "$1,200",
      skills: ["Figma", "UI/UX", "Prototyping", "A/B Testing"],
      urgency: "High",
      daysLeft: "13 days left",
      match: "94%",
      time: "5h",
      action: "Submit Task",
    },
  ];
  return (
    <div>
      <Task tasks={tasks} />
    </div>
  );
};

export default OverDue;
