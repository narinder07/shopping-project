import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ border: "none", padding: "6px 10px" }}
      className="bg-success text-white "
    >
      {label}
    </button>
  );
};

export default Button;
