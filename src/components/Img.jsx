import React from "react";
import image from "../assets/user-profile.svg";

const Img = ({ src, alt, ...props }) => {
  return (
    <div className="">
      <img src={src ? src : image} alt={alt} {...props} />
    </div>
  );
};

export default Img;
