import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import FunnelPage from "./FunnelPage";
import { Funnel } from "../types/funnel";
import IconButton from "./core/IconButton";

interface FunnelPreviewProps {
  funnel: Funnel;
}

const FunnelPreview = ({ funnel }: FunnelPreviewProps) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [isMobileView, setIsMobileView] = useState<boolean>(true);

  const goToNextPage = () => {
    if (currentPageIndex < funnel.pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const currentPage = funnel.pages[currentPageIndex];

  const title = `${funnel.name} - Page ${currentPageIndex + 1} of ${
    funnel.pages.length
  }`;

  return (
    <div className="items-center justify-center w-[1080px] ">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsMobileView(!isMobileView)}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-500"
        >
          Switch to {isMobileView ? "Web" : "Mobile"} View
        </button>
      </div>

      <div className="flex items-center justify-center align-middle space-x-5">
        <IconButton
          onClick={goToPreviousPage}
          disabled={currentPageIndex === 0}
          icon={<ChevronLeftIcon className="w-5 h-5" />}
        />
        <div
          className={`flex justify-center items-center w-[375px] border-2 rounded-md ${
            isMobileView ? "w-[375px]" : "w-full"
          }`}
          style={{
            border: "1px solid #e5e7eb",
          }}
        >
          <div className="p-4 w-full h-full">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-100">
              <p className="font-semibold text-gray-600">{title}</p>
            </div>
            <FunnelPage page={currentPage} />
          </div>
        </div>

        <IconButton
          onClick={goToNextPage}
          disabled={currentPageIndex === funnel.pages.length - 1}
          icon={<ChevronRightIcon className="w-5 h-5" />}
        />
      </div>
    </div>
  );
};

export default FunnelPreview;
