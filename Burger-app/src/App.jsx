import { useState } from "react";
import { SCREEN_MODES } from "./constants/config";
import { ScreenFactory } from "./screen/ScreenFactory";
import "./style/App.css";

function App() {
  const [activeScreen, setActiveScreen] = useState(SCREEN_MODES.GET_STARTED);

  /* begin:: navigateToScreen */
  const navigateToScreen = (newScreen) => {
    setActiveScreen(newScreen);
  };
  /* end:: navigateToScreen */

  // get render handler
  const renderComponent = ScreenFactory[activeScreen];
  // get props
  const props = { navigateToScreen };
  // invoke the render handler
  return <div className="w-full">{renderComponent(props)}</div>;
}

export default App;
