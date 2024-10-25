"use client";

import { FiSearch } from "react-icons/fi";

function SecondInputs({
  setSearchValue,
  setSchoolTypeValue,
  SchoolTypeData = [{ value: "hello", label: "hello" }],
  DonationStatusData = [],
  setDonationStatusValue,
  setStudentSupportedValue
}) {
  return (
    <section className="w-[70%] flex gap-3">
      <div className="flex items-center border border-gray-300 rounded-lg p-2 w-[35%]">
        {/* Search Icon */}
        <div className="mr-2">
          <FiSearch className="text-gray-500" />
        </div>
        {/* Search Input */}
        <input
          type="text"
          onChange={(e) => setSearchValue(e?.target.value)}
          name="search"
          id="search"
          placeholder="Search..."
          className="outline-none w-full text-gray-700"
        />
      </div>

      <div className="w-[19%]">
        <select
          onChange={(e) => setSchoolTypeValue(e?.target.value)}
          className="w-full p-2 border border-gray-300 text-gray-700 rounded-lg"
          defaultValue="" // Set the default value to an empty string
        >
          {/* Placeholder option that won't be selectable after user selects a valid option */}
          <option value="" className="text-gray-700">
            School Type
          </option>

          {/* Map through your options */}
          {SchoolTypeData.map((option, index) => (
            <option value={option?.value} key={index} className="text-gray-700">
              {option?.label}
            </option>
          ))}
        </select>
      </div>

      <div className="w-[21%]">
        <select
          onChange={(e) => setDonationStatusValue(e?.target.value)}
          className="w-full p-2 border border-gray-300 text-gray-700 rounded-lg"
          defaultValue="" // Set the default value to an empty string
        >
          {/* Placeholder option that won't be selectable after user selects a valid option */}
          <option value="" className="text-gray-700">
            Donation Status
          </option>

          {/* Map through your options */}
          {DonationStatusData.map((option, index) => (
            <option value={option?.value} key={index} className="text-gray-700">
              {option?.label}
            </option>
          ))}
        </select>
      </div>

      <div className="w-[25%] border border-gray-300 flex items-center text-gray-700 rounded-lg px-2">
        <div>Students Supported:</div>
        <div className="ps-1">1 -</div>
        <select
          onChange={(e) => setStudentSupportedValue(e?.target.value)}
          className="w-fit py-2  text-gray-700 "
          defaultValue="" // Set the default value to an empty string
        >
          {/* Placeholder option that won't be selectable after user selects a valid option */}
          <option value="" className="text-gray-700">
            10
          </option>

          {/* Map through your options */}
          {[5, 10, 20, 50, 100].map((option, index) => (
            <option value={option} key={index} className="text-gray-700">
              {option}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default SecondInputs;
