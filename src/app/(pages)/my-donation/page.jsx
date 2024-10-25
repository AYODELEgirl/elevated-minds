"use client";
import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import Header from "@/components/Templates/Header";
import React, { useState } from "react";
import Ongoing from "./(metrix)/Ongoing";
import Upcoming from "./(metrix)/Upcoming";
import Completed from "./(metrix)/Completed";

function page() {
  const tabs = [
    { name: "Ongoing Donation", num: 6 },
    { name: "Completed Donation", num: 4 },
    { name: "Upcoming Donation", num: 3 },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);

  return (
    <div>
      <SecondLayout ShowBack={true}>
        <div className="flex justify-between items-center  pt-6 ">
          <Header
            header={"My Donation"}
            text={
              "Ongoing Contributions & Completed Success Stories: Making Education Accessible"
            }
          />

          <div className="bg-primary text-white w-fit font-[700] text-[.9rem] px-4 py-2 rounded-[.4rem] cursor-pointer ">
            Make a donation
          </div>
        </div>

        <div className="flex items-center gap-[2rem] pt-6">
          {tabs?.map((e, i) => {
            return (
              <div
                key={i}
                className={`text-[#667185] flex items-center gap-3 h-[43px] transition-all cursor-pointer px-2  ${
                  currentTab === e?.name
                    ? "border-b-[2px] border-primary text-primary  font-[800]"
                    : "border-b-[2px] border-transparent"
                }`}
                onClick={() => setCurrentTab(e?.name)}
              >
                <div>{e?.name}</div>
                {currentTab === e?.name && (
                  <div className="bg-primary text-white font-[700] flex justify-center items-center tex-[1rem] rounded-full h-[28px] w-[28px]">
                    {e?.num}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SecondLayout>

      <section className="mx-4 bg-gray-200 p-4">
        {currentTab === "Ongoing Donation" ? (
          <Ongoing />
        ) : currentTab === "Completed Donation" ? (
          <Completed />
        ) : (
          <Upcoming />
        )}
      </section>
    </div>
  );
}

export default page;
