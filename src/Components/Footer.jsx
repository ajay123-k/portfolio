import React from "react";

const Footer = ({ bg }) => {
  return (
    <div className={`text-center ${bg} p-4 text-white text-md`}>
      <div>
        Made with heart by Ajay<span className="text-yellow-500">AK</span>{" "}
      </div>
    </div>
  );
};

export default Footer;
