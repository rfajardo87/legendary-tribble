import { useMenuStore } from "../../../stores/menu";
import { EMenu } from "../../../types/stores/menu";
import { View } from "./view";

interface TabItem {
  text: string;
  type: EMenu;
  icon: string;
  brand?: boolean;
}
interface Props {
  isMobile?: boolean;
}

const MenuItems = ({ isMobile }: Props) => {
  const { current, navigate } = useMenuStore((state) => state);

  const tabItems: TabItem[] = [
    { text: "Google", type: EMenu.GOOGLE, icon: "google", brand: true },
    { text: "Google Ads", type: EMenu.GOOGLEADS, icon: "box" },
    { text: "Meta Ads", type: EMenu.METAADS, icon: "meta", brand: true },
    { text: "CRM", type: EMenu.CRM, icon: "chalkboard-user" },
    { text: "Error Demo", type: EMenu.ERROR, icon: "ban" },
  ];

  const navigateTabs = (e: React.MouseEvent, page: EMenu) => {
    e.preventDefault();
    navigate(page);
  };

  return (
    <View
      current={current}
      navigateTabs={navigateTabs}
      tabItems={tabItems}
      isMobile={isMobile}
    />
  );
};

export { MenuItems, type TabItem };
