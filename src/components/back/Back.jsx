import React from "react";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  let stylingBack = {
    width: "30px",
    height: "30px",
    borderRadius: "10px",
    border: " 1px solid rgba(255, 255, 255, 0.12)",
    background: "rgba(255, 255, 255, 0.05)",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "16px",
    cursor: "pointer",
  };
  return (
    <button
      className="etc-back"
      onClick={() => navigate(-1)}
      style={stylingBack}
    >
      ←
    </button>
  );
};

export default Back;
