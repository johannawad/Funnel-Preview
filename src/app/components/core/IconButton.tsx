import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  icon: React.ReactNode;
}

const IconButton = ({ onClick, disabled = false, icon }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center align-middle md p-2 border border-gray-500  hover:text-blue-500 hover:border-blue-500 rounded-full  transition-all duration-200 ease-in-out 
        ${
          disabled ? "opacity-60 cursor-not-allowed" : "hover:border-blue-500"
        }`}
    >
      <span>{icon}</span>
    </button>
  );
};

export default IconButton;
