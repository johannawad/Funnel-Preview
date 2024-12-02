import React from "react";

interface ButtonBlockProps {
  text: string;
  color: string;
  bgColor: string;
}

const ButtonBlock = ({ text, color, bgColor }: ButtonBlockProps) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
      className="rounded-md w-full text-center font-medium p-2"
    >
      {text}
    </button>
  );
};

export default ButtonBlock;
