import React from "react";

interface TextBlockProps {
  text: string;
  color: string;
  align: "left" | "center" | "right";
}

const TextBlock = ({ text, color, align }: TextBlockProps) => {
  return (
    <div style={{ textAlign: align }} className="p-2">
      <p style={{ color: color, fontSize: "18px", fontWeight: "bold" }}>
        {text}
      </p>
    </div>
  );
};

export default TextBlock;
