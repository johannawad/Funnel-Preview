import React, { useState } from "react";
import { Funnel } from "../types/funnel";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

interface FileUploadProps {
  onUpload: (data: Funnel) => void;
}

export const FileUpload = ({ onUpload }: FileUploadProps) => {
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = JSON.parse(reader.result as string) as Funnel;
          onUpload(json);
        } catch (error) {
          setError("Error parsing JSON. Please upload a valid JSON file.");
          console.log(error); //TO DO: Error handling
        }
      };
      reader.onerror = () => {
        setError("Error reading file. Please try again.");
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col items-end">
      <label
        htmlFor="file-upload"
        className="flex items-center justify-center px-4 py-2 border border-gray-500 rounded-lg text-sm font-medium text-gray-500 bg-white hover:border-blue-500 hover:text-blue-500 cursor-pointer "
      >
        <span className="p-1">
          <ArrowUpTrayIcon className="w-5 h-5" />
        </span>
        Upload Funnel File (.json)
      </label>
      <input
        id="file-upload"
        type="file"
        accept="application/json"
        onChange={handleFileChange}
        className="hidden"
        required
      />

      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};
