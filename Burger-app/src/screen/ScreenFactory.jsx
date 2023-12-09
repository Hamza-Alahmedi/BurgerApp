import { SCREEN_MODES, TABES_ENUM } from "../constants/config";
import GetStartedScreen from "./GetStartedScreen";
import WizardScreen from "./WizardScreen";
import SummaryScreen from "./SummaryScreen";

export const ScreenFactory = {
  [SCREEN_MODES.GET_STARTED]: (props) => <GetStartedScreen {...props} />,
  [SCREEN_MODES.WIZARD]: (props) => <WizardScreen {...props} />,
  [SCREEN_MODES.SUMMARY]: (props) => <SummaryScreen {...props} />,
};

