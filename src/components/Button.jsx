import React from "react";

function Button({ type, child, onClick, ...props }) {
  return (
    <button
      className="bg-red-200 w-16 rounded-lg shadow-md px-2 py-2 hover:bg-blue-200"
      type={type}
      onClick={onclick}
      {...props}
    >
      {child}
    </button>
  );
}

export default Button;
