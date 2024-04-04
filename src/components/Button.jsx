import React from "react";

function Button({ type, ...props }) {
  return (
    <button
      className="bg-red-200 w-14 rounded-lg shadow-md px-4 py-2"
      type={type}
      {...props}
    >
      click
    </button>
  );
}

export default Button;
