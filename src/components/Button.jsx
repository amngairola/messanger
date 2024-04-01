import React from "react";

function Button({ type }) {
  return (
    <button
      className="bg-red-200 w-14 rounded-lg shadow-md px-4 py-2"
      type={type}
    >
      click
    </button>
  );
}

export default Button;
