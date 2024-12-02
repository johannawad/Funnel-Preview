import React from "react";

interface ListItem {
  id: string;
  title: string;
  description: string;
  src: string;
}

interface ListBlockProps {
  items: ListItem[];
}

const ListBlock = ({ items }: ListBlockProps) => {
  return (
    <div className="p-2">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex items-center space-x-3 py-3">
            <img
              src={item.src}
              alt={item.title}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <h4 className="font-bold">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBlock;
