"use client";
import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import SecondInputs from "@/app/components/Reuseables/SecondInputs";
import Header from "@/components/Templates/Header";
import { useState } from "react";

function page() {
  const [donationStatusValue, setDonationStatusValue] = useState("");
  const [schoolTypeValue, setSchoolTypeValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [studentSupportedValue, setStudentSupportedValue] = useState("");
  return (
    <div>
      <SecondLayout ShowBack={true}>
        <div className="py-6">
          <div className="flex justify-between items-center">
            <Header
              header={"School"}
              count={6}
              text={"Empower Education: Support Schools and Students in Need"}
            />

            <div className="bg-primary text-white w-fit font-[700] text-[.9rem] px-4 py-2 rounded-[.4rem] cursor-pointer ">
              Make a donation
            </div>
          </div>

          <div className="pt-4">
            <SecondInputs
              setDonationStatusValue={setDonationStatusValue}
              setSchoolTypeValue={setSchoolTypeValue}
              setSearchValue={setSearchValue}
              setStudentSupportedValue={setStudentSupportedValue}
            />
          </div>
        </div>
      </SecondLayout>
    </div>
  );
}

export default page;
