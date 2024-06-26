import React from "react";
import { Select } from "@windmill/react-ui";
import ParentBrand from "../category/ParentBrand";

const SelectBrand= ({ setFilter }) => {
  return (
    <>
      <Select
        onChange={(e) => setFilter(e.target.value)}
        className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
      >
        <option value="All" defaultValue hidden>
          Brand
        </option>
        <ParentBrand />
      </Select>
    </>
  );
};

export default SelectBrand;
