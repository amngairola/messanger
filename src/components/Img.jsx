import React from "react";
import image from "../assets/user-profile.svg";

const Img = ({ src, alt, ...props }) => {
  return <img src={src ? src : image} alt={alt} {...props} />;
};

export default Img;
