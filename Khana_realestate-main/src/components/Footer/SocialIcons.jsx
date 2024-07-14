import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-slate-50">
      <span
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
      >
        <div>
          <FaInstagram></FaInstagram>
        </div>
      </span>
      <span
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
      >
        <div>
          <FaFacebookF></FaFacebookF>
        </div>
      </span>
      <span
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
      >
        <div><FaLinkedinIn></FaLinkedinIn></div>
      </span>
    
    </div>
  );
};

export default SocialIcons;
