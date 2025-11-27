// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary" }) => {
  const baseStyle =
    "px-4 py-2 rounded-md text-white text-sm font-semibold transition";

  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-400 hover:bg-gray-500",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
