import "./Button.css";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ border: "none", padding: "6px 10px" }}>
      {label}
    </button>
  );
};

export default Button;
