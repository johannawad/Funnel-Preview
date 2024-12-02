import React from "react";

interface ImageBlockProps {
  src: string;
  alt: string;
}

const ImageBlock = ({ src, alt }: ImageBlockProps) => {
  return (
    <div className="flex justify-center p-2">
      <img src={src} alt={alt} className="max-w-full rounded-md" />
    </div>
  );
};

export default ImageBlock;
