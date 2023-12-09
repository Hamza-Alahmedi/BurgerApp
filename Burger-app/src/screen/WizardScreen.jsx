import React, { useState } from "react";
import Tabs from "../components/Tabs/Tabs";
import burgerImge from "../assets/images/fullBurger.png";
import { TABES_ENUM } from "../constants/config";
import { ScreenFactory } from "./ScreenFactory";
import Button from "../components/shared/Button";

export default function WizardScreen() {
  const [activeTab, setActiveTab] = useState(TABES_ENUM.INGREDIENT);

  const navigateToTab = (newTab) => {
    setActiveTab(newTab);
  };
  return (
    <div className="flex items-center justify-items-center gap-8 w-3/4 mx-auto">
      <div className="w-3/4">
        <Tabs activeTab={activeTab} onTabChanged={navigateToTab} />
        {ScreenFactory[activeTab]}
        <Button
          className={""}
          displayText={"Next"}
          onClick={() => navigateToTab(TABES_ENUM.DRESSING)}
        ></Button>
      </div>

      <div className="w-1/4">
        <img
          src={burgerImge}
          alt="This is burger image"
          className="w-full aspect-[4/3]"
        />
      </div>
    </div>
  );
}
