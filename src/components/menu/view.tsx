import clsx from "clsx";
import { Container } from "../container";
import { MenuItems } from "./menuItems";

const View = () => {
  return (
    <Container
      extraClass={clsx(["uk-light", "uk-background-secondary", "uk-visible@m"])}
    >
      <ul className={clsx(["uk-nav", "uk-nav-default", "uk-margin-top"])}>
        <MenuItems />
      </ul>
    </Container>
  );
};

export { View };
