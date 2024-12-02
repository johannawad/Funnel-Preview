"use client";
import React, { useState } from "react";
import FunnelPreview from "./components/FunnelPreview";
import { Funnel } from "./types/funnel";
import { FileUpload } from "./components/FileUpload";

const Page = () => {
  const [funnelData, setFunnelData] = useState<Funnel | null>(null);

  const handleFileChange = (data: Funnel) => {
    setFunnelData(data);
  };

  return (
    <div className="flex flex-col items-center justify-center m-2">
      <div className="w-1/4">
        <header className="flex flex-col space-x-2 items-center justify-center pb-4">
          <img
            src="https://perspective.imgix.net/assets/app/logo/256x256.png?auto=compress&dpr=2"
            alt="Logo"
            className="w-6 h-6 rounded-full"
          />
          <h2 className="text-xl">Funnel Preview App</h2>
        </header>

        <FileUpload onUpload={handleFileChange} />
      </div>
      <div className="flex flex-col items-center justify-center border-2 m-2 p-2">
        {funnelData ? (
          <FunnelPreview funnel={funnelData} />
        ) : (
          <div
            className={`flex justify-center items-center w-[375px] h-[600px] border-2 rounded-md overflow-hidden relative`}
            style={{
              border: "1px solid #e5e7eb",
            }}
          >
            <p className="text-center text-gray-400">
              Upload your funnel file to see the preview.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
