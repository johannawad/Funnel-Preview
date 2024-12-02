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
      <div className="flex items-center justify-between pb-3">
        <p className="font-semibold text-gray-600">{title}</p>
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
        >
          <FunnelPage page={currentPage} />
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
