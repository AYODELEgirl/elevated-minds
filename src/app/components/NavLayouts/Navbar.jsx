"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";

function Navbar() {
  const tabs = [
    { name: "Overview", link: "/" },
    { name: "My Donation", link: "/my-donation" },
    { name: "School", link: "/school" },
    { name: "Impact", link: "/impact" },
    { name: "Report", link: "/report" },
  ];

  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center py-4 px-[1rem] h-[70px] sticky top-0 bg-primary">
      <div>
        <Image src={logo} alt="logo" width={200} />
        {/* <Link href="/">
         
        </Link> */}
      </div>

      <div className="text-white flex gap-[1rem]">
        {tabs?.map((e, i) => {
          return (
            <Link key={i} href={e?.link}>
              <div
                className={`link px-4 py-1 rounded-[2rem] ${
                  pathname === e?.link ? "bg-white  active text-primary  " : ""
                } transition duration-500 ease-in-out `}
              >
                {e?.name}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="text-white flex items-center gap-8 pe-4">
        <div>
          <FaRegBell size={25} />
        </div>
        <div className="flex items-center gap-1">
          <div className="text-primary p-[.4rem] rounded-full bg-white">MB</div>
          <div>
            <IoIosArrowDown size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
