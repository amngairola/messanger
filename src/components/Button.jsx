import React from "react";

function Button({ type, style, child, onClick, ...props }) {
  return (
    <button
      className={`w-16 rounded-lg shadow-md px-2 py-2 hover:bg-blue-400 ${style}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {child}
    </button>
  );
}

export default Button;
