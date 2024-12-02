import React from "react";
import { Page, Block } from "../types/funnel";
import TextBlock from "./blocks/TextBlock";
import ButtonBlock from "./blocks/ButtonBlock";
import ImageBlock from "./blocks/ImageBlock";
import ListBlock from "./blocks/ListBlock";

interface FunnelPageProps {
  page: Page;
}

const FunnelPage = ({ page }: FunnelPageProps) => {
  return (
    <div
      className="p-4 border -solid"
      style={{ backgroundColor: page.bgColor }}
    >
      {page.blocks.map((block: Block) => {
        switch (block.type) {
          case "text":
            return (
              <TextBlock
                key={block.id}
                text={block.text}
                color={block.color}
                align={block.align}
              />
            );
          case "image":
            return (
              <ImageBlock key={block.id} src={block.src} alt={block.alt} />
            );
          case "list":
            return <ListBlock key={block.id} items={block.items} />;
          case "button":
            return (
              <ButtonBlock
                key={block.id}
                text={block.text}
                color={block.color}
                bgColor={block.bgColor}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default FunnelPage;
