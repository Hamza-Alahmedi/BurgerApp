import React from "react";
import burgerImage from "../assets/images/fullBurger.png";
import Button from "../components/shared/Button";
import { SCREEN_MODES } from "../constants/config";

export default function GetStartedScreen({ navigateToScreen }) {
  return (
    <div className="flex flex-col items-center justify-items-center gap-3">
      <img
        src={burgerImage}
        alt="burger image"
        className="w-full aspect-[4/3]"
      />
      <Button
        className={""}
        displayText={"Get Started"}
        onClick={() => {
          navigateToScreen(SCREEN_MODES.WIZARD);
        }}
      />
    </div>
  );
}
