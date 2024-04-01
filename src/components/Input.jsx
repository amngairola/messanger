import React from "react";

function Input(props) {
  return (
    <div className=" mb-4 p-3 ">
      <label
        className="block text-sm text-gray-700 font-bold mb-2"
        htmlFor={props.id}
      >
        {props.label}
      </label>

      <input
        type="text"
        className="
        shadow
        w-full rounded  px-3 py-2  bg-white text-gray-700 focus:shadow-outline 
        sm:text-base md:text-lg
        
        "
      ></input>
    </div>
  );
}

export default Input;
