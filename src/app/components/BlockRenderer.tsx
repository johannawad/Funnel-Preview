import React from "react";
import { Block } from "../types/funnel";

interface BlockRendererProps {
  block: Block;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  switch (block.type) {
    case "text":
      return (
        <p
          style={{ color: block.color, textAlign: block.align }}
          className="text-lg my-2"
        >
          {block.text}
        </p>
      );
    case "image":
      return <img src={block.src} alt={block.alt} className="my-4 mx-auto" />;
    case "button":
      return (
        <button
          style={{ backgroundColor: block.bgColor, color: block.color }}
          className="px-4 py-2 rounded my-2"
        >
          {block.text}
        </button>
      );
    case "list":
      return (
        <ul className="my-4 space-y-2">
          {block.items.map((item) => (
            <li key={item.id} className="flex items-center space-x-4">
              <img src={item.src} alt={item.title} className="w-8 h-8" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      );
    default:
      //TO DO: Error handling for unsupported block types
      return null;
  }
};

export default BlockRenderer;
