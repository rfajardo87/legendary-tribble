import clsx from "clsx";
import { Icon } from "../../icon";
import { MenuItems } from "../menuItems";

const View = () => {
  return (
    <nav data-uk-dropnav className={clsx(["uk-hidden@m"])}>
      <a href="#">
        <Icon icon="bars" />
      </a>
      <div className="uk-dropdown">
        <ul className={clsx(["uk-nav", "uk-dropdown-nav"])}>
          <MenuItems isMobile />
        </ul>
      </div>
    </nav>
  );
};

export { View };
