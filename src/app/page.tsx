"use client";
import React, { useState } from "react";
import FunnelPreview from "./components/FunnelPreview";
import { Funnel } from "./types/funnel";
import { FileUpload } from "./components/FileUpload";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

const Page = () => {
  const [funnelData, setFunnelData] = useState<Funnel | null>(null);

  const handleFileChange = (data: Funnel) => {
    setFunnelData(data);
  };

  return (
    <div className="flex w-full  flex-col items-center justify-center m-2">
      <div className="flex justify-between items-center w-full px-4 py-2">
        <header className="flex space-x-2 pb-4">
          <img
            src="https://perspective.imgix.net/assets/app/logo/256x256.png?auto=compress&dpr=2"
            alt="Logo"
            className="w-6 h-6 rounded-full"
          />
          <h2 className="text-xl">Funnel Preview App</h2>
        </header>
        <div className="flex-end">
          <FileUpload onUpload={handleFileChange} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border rounded-md m-2 p-2">
        {funnelData ? (
          <FunnelPreview funnel={funnelData} />
        ) : (
          <div
            className={`flex justify-center items-center w-[375px] h-[600px] border rounded-md overflow-hidden relative`}
          >
            <div className="flex flex-col items-center space-y-7">
              <span>
                <DevicePhoneMobileIcon className="w-10 h-10" />
              </span>
              <p className="text-center text-gray-400">
                Upload your funnel to see the preview.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
