import React from "react";

const Header = ({ text, header, classNames }) => {
  return (
    <div className="bg-red-500">
      <div className={`font-bold text-[1.2rem] leading-6 ${classNames}`}>{header}</div>
      <div className="text-[.9rem] text-gray-500 pt-2">{text}</div>
    </div>
  );
};

export default Header;
