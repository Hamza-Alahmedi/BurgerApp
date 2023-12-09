import React from "react";
import TabHeaderItem from "./TabHeaderItem";
import Button from "../shared/Button";

const tabHeader = [
  { className: "active", Text: "Ingredient" },
  { className: "", Text: "Dressing" },
  { className: " ", Text: "Drink" },
];

export default function Tabs({ activeTab, onTabChanged }) {
 

  return (
    <div className="flex flex-col gap-9 py-8 px-14">
      {/* begin :: Tab Header */}
      <div className="flex gap-4 p-4">
        {tabHeader.map((tab, index) => (
          <TabHeaderItem
            key={index}
            {...tab}
            className={`${tab.className} text-2xl tab-item text-gray-500`}
          />
        ))}
      </div>
      {/* end :: Tab Header */}
      {/** begin:: tab Body */}

      {/** end:: tab Body */}
    </div>
  );
}
