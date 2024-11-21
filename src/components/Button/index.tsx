import React from "react";
import "./index.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (id?: string) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
  id?: string; // Thêm thuộc tính id
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  size = "medium",
  style,
  id, // Thêm thuộc tính id
}) => {
  return (
    <button
      id={id} // Gán id cho button
      style={style}
      type={type}
      onClick={() => onClick(id)} // Truyền id vào hàm onClick
      disabled={disabled}
      className={`btn ${disabled ? "" : className} ${size}`}
    >
      {children}
    </button>
  );
};

export default Button;