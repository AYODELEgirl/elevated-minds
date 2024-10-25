import React from "react";

const Header = ({ text, header, classNames }) => {
  return (
    <div className="">
      <div className={`font-bold text-[1.2rem] text-gray-800 leading-6 ${classNames}`}>{header}</div>
      <div className="text-[.9rem] text-gray-600 pt-2">{text}</div>
    </div>
  );
};

export default Header;
