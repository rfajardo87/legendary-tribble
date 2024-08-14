import clsx from "clsx";
import { Container } from "../container";
import { PropsWithChildren } from "react";

const Area = ({ children }: PropsWithChildren) => {
  return (
    <Container
      extraClass={clsx([
        "uk-flex",
        "uk-flex-column",
        "uk-flex-row@m",
        "uk-flex-around",
        "uk-child-width-expand",
      ])}
    >
      {children}
    </Container>
  );
};

export { Area };
