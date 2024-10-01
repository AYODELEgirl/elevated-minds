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
    <div className="bg-primary flex justify-between items-center py-4 px-[1rem]">
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

      <div className="text-white flex items-center gap-2">
        <div>
          <FaRegBell size={30} />
        </div>
        <div className="text-primary p-2 rounded-full bg-white">MB</div>
        <div>
          <IoIosArrowDown size={25} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
