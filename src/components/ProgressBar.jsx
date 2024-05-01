import React from "react";

function ProgressBar({ uploadProgress }) {
  return (
    <div className="fixed top-12 left-0 w-screen h-2 bg-red-800 opacity-50 z-50">
      <div
        className="h-full bg-blue-500 rounded"
        style={{ width: `${uploadProgress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
