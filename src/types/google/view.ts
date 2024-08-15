import { Props as APIProps } from "../api";
import { Tabs } from "../../pages/google/enums/tabs";
import { GoogleProps } from "./analytics";
import { GoogleAdsProps } from "./ads";

interface InnerTabs {
  name: string;
  type: Tabs;
}

type GoogleTypes = GoogleProps | GoogleAdsProps;

interface Props extends APIProps<GoogleTypes> {
  innerTabs: InnerTabs[];
  onClickAction: (e: React.MouseEvent, tab: Tabs) => void;
}

export type { Props };
