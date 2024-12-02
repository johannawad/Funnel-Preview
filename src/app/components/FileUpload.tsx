import React, { useState } from "react";
import { Funnel } from "../types/funnel";

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
    <div className="flex-2">
      <label className="mb-2 text-sm font-medium text-gray-800">
        Upload your funnel(.json) file
      </label>
      <input
        type="file"
        accept="application/json"
        onChange={handleFileChange}
        required
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
      />

      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};
