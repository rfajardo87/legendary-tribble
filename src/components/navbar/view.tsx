import clsx from "clsx";
import { Icon } from "../icon";
import style from "./index.module.scss";
import { MenuMobile } from "../menu/mobile";

const View = () => {
  return (
    <nav
      data-uk-navbar
      className={clsx(["uk-light", "uk-background-secondary"])}
    >
      <div className={clsx(["uk-navbar-left", style.navbarContent])}>
        <a href="#" className={clsx(["uk-navbar-item", "uk-logo"])}>
          <Icon icon="ring" />
          Admira
        </a>
      </div>
      <div className={clsx(["uk-navbar-right", style.navbarContent])}>
        <MenuMobile />
      </div>
    </nav>
  );
};

export { View };
