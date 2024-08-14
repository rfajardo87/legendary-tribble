import clsx from "clsx";
import { TabItem } from "./index";
import { EMenu } from "../../../types/stores/menu";
import { Icon } from "../../icon";

interface Props {
  tabItems: TabItem[];
  isMobile?: boolean;
  current?: EMenu;
  navigateTabs: (e: React.MouseEvent, page: EMenu) => void;
}

const View = ({ tabItems, isMobile, current, navigateTabs }: Props) => {
  return (
    <>
      {tabItems.map((item: TabItem) => (
        <li
          key={item.type}
          className={clsx([!isMobile && current === item.type && "uk-active"])}
        >
          <a href="#" onClick={(e) => navigateTabs(e, item.type)}>
            <Icon icon={item.icon} brand={item.brand} />
            {item.text}
          </a>
        </li>
      ))}
    </>
  );
};
export { View };
