"use client";

import React from "react";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className }) => {
  return (
    <div className={`${className}`}>
      <div className="w-full mx-auto">
        <div className="w-full h-2 bg-darkmode-300 relative rounded-full">
          <div
            className="absolute h-full bg-orange-200 rounded-l-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
