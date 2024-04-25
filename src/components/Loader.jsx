import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-blue-500 h-8 w-8"></div>
    </div>
  );
}

export default Loader;
